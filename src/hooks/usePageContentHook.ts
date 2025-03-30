import { ref } from 'vue'
import { PageContent } from '@/components'

export interface searchForm {
  username: string;
  phone: string;
  email: string;
  status: string;
  date: string;
}

export interface usePageContentHookReturnType {
  contentRef: any;
  queryClickHandler: <T>(searchForm: Partial<searchForm>) => T | void;
  resetClickHandler: <T>() => T | void;
}

function usePageContentHook(): usePageContentHookReturnType {
  const contentRef = ref<InstanceType<typeof PageContent> | null>()
  const queryClickHandler = <T>(searchForm: Partial<searchForm>): T | void => {
    contentRef.value?.fetchUserListRequest(searchForm)
  }
  const resetClickHandler = <T>(): T | void => {
    contentRef.value?.fetchUserListRequest({})
  }

  return {
    contentRef,
    queryClickHandler,
    resetClickHandler
  }
}

export default usePageContentHook
