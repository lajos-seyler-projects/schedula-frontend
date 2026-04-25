export interface OnFiltersDialogSaveEvent {
  detail: {
    /**
     * Defines all selected filters.
     */
    selectedFilterKeys: string[];
    /**
     * Defines the order of filters by `filterKey`.
     *
     * __Note:__ If `enableReordering` is falsy, the Array is empty.
     */
    reorderedFilterKeys: string[];
    /**
     * Native `detail` for `click` event.
     */
    nativeDetail: number;
  };
}
