import {useContextSelector} from '@fluentui/react-context-selector';
import {AppContext} from '../context/contextWithUseContextSelector';

const useStateSelector = (selectorCb) => useContextSelector(AppContext, selectorCb);
export default useStateSelector;
