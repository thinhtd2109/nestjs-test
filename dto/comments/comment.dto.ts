export class CommentDto {
    comment_text: string;
    user_id: string;
}

export class CommentInsertDto {
    comment_text: string;
    user_id: string;
    product_id?: string;
    reply_comment?: string;
}

export class CommentInputDto {
    product_code: string;
    comment_text: string;
    reply_comment: string;
    user_id: string;
}