import { Injectable } from "@nestjs/common";
import { CommentInsertDto } from "dto/comments/comment.dto";
import { Transaction } from "sequelize";
import Comment from "src/models/comments/comment.model";
import ProductComment from "src/models/comments/product-comment.model";
import Reply from "src/models/comments/reply.model";


@Injectable()
export class CommentRepository {
    constructor() { }
    async insertComment(data: CommentInsertDto, transaction: Transaction) {
        return await Comment.create({ commentText: data.comment_text, userId: data.user_id }, {
            transaction
        }).then((responseData) => ProductComment.create({ productId: data.product_id, commentId: responseData.id }, { transaction }));
    }

    async insertReplyComment(data: CommentInsertDto, transaction: Transaction) {
        return await Reply.create({ commentText: data.comment_text, commentId: data.reply_comment, createdBy: data.user_id }, { transaction })
    }

    async deleteComment(id: string, transaction: Transaction) {
        return await Comment.update({
            deleted: true
        }, { where: { id: id }, transaction: transaction })
    }
    async deleteReplyComment(id: string, transaction: Transaction) {
        return await Comment.update({
            deleted: true
        }, { where: { id: id }, transaction: transaction })
    }
    async getCommentById(id: string): Promise<Comment> {
        return await Comment.findOne({ where: { id: id } })
    }

    async getReplyCommentById(id: string): Promise<Reply> {
        return await Reply.findOne({ where: { id: id } });
    }
}