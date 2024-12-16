'use client'

import LoadingButton from '@/app/components/loading-button'
import interpolateModel from '@/app/helpers/interpolate-model'
import { Model } from '@/app/store/model'
import { Button, DialogActions, DialogContent, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useCallback, useTransition } from 'react'
import { DefaultValues, FormProvider, useForm } from 'react-hook-form'

interface GenericFormProps<T extends Model> {
  children: React.ReactNode
  deleteAction?: (data: T) => Promise<void>
  model: Readonly<T>
  onClose: () => void
  redirectTo?: string
  saveAction: (data: T) => Promise<T>
}

export default function GenericForm<T extends Model>({
  children,
  deleteAction,
  model,
  onClose,
  redirectTo,
  saveAction,
}: GenericFormProps<T>) {
  const router = useRouter()
  const [isSaving, startSaving] = useTransition()

  const form = useForm<T>({
    defaultValues: model as DefaultValues<T>,
  })

  const handleDelete = useCallback(async () => {
    if (deleteAction) {
      startSaving(async () => {
        await deleteAction(model)
        router.refresh()
        onClose()
      })
    }
  }, [deleteAction, model, onClose, router])

  const submit = useCallback(
    (model: T) => {
      startSaving(async () => {
        const result = await saveAction(model)
        onClose()
        if (redirectTo) {
          router.push(interpolateModel(redirectTo, result))
        } else {
          router.refresh()
        }
      })
    },
    [onClose, redirectTo, router, saveAction]
  )

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <DialogContent>
          <Stack direction="column" gap={3}>
            {children}
          </Stack>
        </DialogContent>
        <DialogActions>
          {model.key && deleteAction && (
            <Button
              color="error"
              disabled={isSaving}
              onClick={handleDelete}
              sx={(theme) => ({
                [theme.breakpoints.up('sm')]: { marginRight: 'auto' },
              })}
            >
              Delete
            </Button>
          )}
          <Button onClick={onClose}>Cancel</Button>
          <LoadingButton isLoading={isSaving} type="submit" variant="contained">
            Save changes
          </LoadingButton>
        </DialogActions>
      </form>
    </FormProvider>
  )
}
