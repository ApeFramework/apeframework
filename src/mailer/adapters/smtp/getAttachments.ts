import type { Attachment } from '../../Attachment'
import type { Attachment as NodemailerAttachment } from 'nodemailer/lib/mailer'

const getAttachments = (attachments?: Attachment[]): NodemailerAttachment[] => {
  return attachments
    ? attachments
      .map((attachment) => {
        return {
          filename: attachment.fileName,
          cid: attachment.fileName,
          contentType: attachment.contentType,
          content: attachment.content,
        }
      })
    : []
}

export {
  getAttachments,
}
