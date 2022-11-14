export type messageType = {
    id: string
    message: string
}
export type dialogType = {
    id: string
    name: string
}
export type postType = {
    id: string
    title: string
    number: number
}
export type profilePageType = {
    posts: Array<postType>
}
export type dialogPageType = {
    messages: Array<messageType>
    dialogs: Array<dialogType>
}
export type StateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
}


const State: StateType = {
    profilePage: {
        posts: [
            {id: '1', title: "Hi, how are you?", number: 15},
            {id: '2', title: "Its my first post", number: 20}
        ]

    },
    dialogPage: {
        messages: [
            {id: '1', message: "Hello"},
            {id: '2', message: "How are you"},
            {id: '3', message: "Mean"},
        ],
        dialogs: [
            {id: '1', name: "Pasha"},
            {id: '2', name: "Dima"},
            {id: '3', name: "Sasha"},
            {id: '5', name: "Dasha"},
            {id: '6', name: "Glasha"}
        ]
    }
}

export default State