/**
 * MOCKED DATA
 * In a Real case it should be retrieved by axios as http request and set to a LeftSideBar component, as local data
 */

import CONTACTS from '../assets/mockdata/chatsSet.json'
import RECEIVED_MSGS from '../assets/mockdata/ReceivedMessagesSet.json'
import SENT_MSGS from '../assets/mockdata/SentMessagesSet.json'
const RAW_CHATS = [...RECEIVED_MSGS,...SENT_MSGS]

export const contacts = []

/**
 * Contact Class
 * @param phone
 * @param contactName
 * @param photo
 * @param chats
 * If chat's empty => The contact hasn't been contacted but still should be able to start a chat with
 **/
 class Contact {
  constructor(phone, contactName, photo, chats) {
    this.phone = phone,
    this.contactName = contactName,
    this.photo = photo
    this.chats = chats
  }

  getLastChat = () => {
    return this.chats.length ? this.chats[this.chats.length - 1] : []
  }
}

/**
 * Group msgs by chat
 * No time but should be async
 **/
const conversations = RAW_CHATS.reduce((r, a) => {
  let rawDate = a.date.slice(0, 10)
  rawDate = rawDate.split('/').reverse().join().replaceAll(',', '-')
  const rawTime = a.date.slice(10)+':00Z'

  a.date = new Date(rawDate+rawTime)
  r[a.phone] = [...r[a.phone] || [], a]
  return r
}, {})


/**
 * SORT Conversations
 * No time but should be async
 **/
Object.values(conversations).forEach((unSortedChats, i) => {
  const sortedChats = [...unSortedChats.sort((a, b) => a.date - b.date)]
})


/**
 * Create contacts serlialized list
 * No time to, this but should be happening right after grouping by chat and sorting the chat itself
 */
CONTACTS.forEach(contact => {
  contacts.push(new Contact(contact.phone, contact.contactName, contact.photo, conversations[contact.phone] || []))
})
contacts.sort((a,b) => {
  const contact1 = a.getLastChat()
  const contact2 = b.getLastChat()
  return contact2.date - contact1.date
})

