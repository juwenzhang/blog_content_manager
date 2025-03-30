import { ref } from 'vue'
import { PageModel } from '@/components'

export interface usePageModelHookReturnType {
  modelRef: any;
  showDialogHandler: () => void;
  editDataHandler: <T, K>(formData: T) => T | void;
}

function usePageContentHook(): usePageModelHookReturnType {
  const modelRef = ref<InstanceType<typeof PageModel> | null>()

  function showDialogHandler() {
    modelRef.value?.changeDialogVisible()
  }

  function editDataHandler<T, K>(formData: T): T | void {
    modelRef.value?.changeFormData(formData)
  }

  return {
    modelRef,
    showDialogHandler,
    editDataHandler
  }
}

export default usePageContentHook
