import defaultSettings from './defaultSettings';
import { init } from './init';
import { colorScale } from './colorScale';
import { layout } from './layout';
import { controls } from './controls';
import { eventListeners } from './eventListeners';
import { AETable } from './AETable';
import { detailTable } from './detailTable';
import { util } from './util';

export default function(element = 'body', config = defaultSettings) {
    let aeTable =
        {element: element
        ,config: config
        ,init: init
        ,colorScale: colorScale
        ,layout: layout
        ,controls: controls
        ,eventListeners: eventListeners
        ,AETable: AETable
        ,detailTable: detailTable
        ,util: util};

    return aeTable;
}
