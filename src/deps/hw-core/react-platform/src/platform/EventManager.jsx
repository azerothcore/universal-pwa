import {
    EventEmitter
} from "events"

export const EventType = type => Symbol(type)

/**
 * List of events available for {EventManager}
 */
export const Events = Object.freeze({
    app_content_wrapper: EventType("app_content_wrapper"),
    app_load_header: EventType("app_load_header"),
    app_load_helmet: EventType("app_load_helmet"),
    route_load_static: EventType("route_load_static"),
    route_load: EventType("route_load"),
});

/**
 * EventManager for node-platform, you can extend it to create your own EventManager
 */
export class EventManager extends EventEmitter {
    constructor(events, name = "node-platform") {
        super();

        this.events = events;
        this.name = name;
        Object.freeze(this.name); // avoid changing EventManager name
    }

    /**
     * 
     * @param {EventType[]} event 
     * @param  {...any} args 
     * @returns {EventManager}
     */
    emit(event, ...args) {
        const evtName=event.toString().slice(7,-1) // remove "Symbol()" from description
        if (!this.events[evtName] || this.events[evtName] !== event) {
            throw new Error("EventManager (" + this.name + ") have no event: " + evtName)
        }

        return super.emit(event, ...args)
    }

    /**
      @callback listenerCb
      @param {...Object} args
    */
    /**
     * 
     * @param {EventType[]} event 
     * @param {listenerCb} listener 
     * @returns {EventManager}
     */
    on(event, listener) {
        const evtName=event.toString().slice(7,-1) // remove "Symbol()" from description
        if (!this.events[evtName] || this.events[evtName] !== event) {
            throw new Error("EventManager (" + this.name + ") have no event: " + evtName)
        }

        super.on(event, listener)
        return this;
    }
}

/**@type {EventManager} singleton instance of EventManager */
export const sEvtMgr = new EventManager(Events);
