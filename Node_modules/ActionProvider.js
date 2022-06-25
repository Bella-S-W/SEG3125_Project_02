class ActionProvider {
    constructor(createChatBotMessage, setStateFunction) {
        this.createChatBotMessage = createChatBotMessage;
        this.setStateFunction = setStateFunction;
    }
    getActions(state, action) {
        switch (action.type) {
            case "sendMessage":
                return [this.createChatBotMessage(action.message)];
            case "setState":
                this.setStateFunction(action.state);
                return [];
            default:
                return [];
        }
    }
}

export default ActionProvider;