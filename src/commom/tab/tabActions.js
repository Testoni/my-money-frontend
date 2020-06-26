export function selectTab(tableId) {
    console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tableId
    }
}