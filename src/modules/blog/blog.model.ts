import { getModelForClass, prop } from '@typegoose/typegoose';

export class Blog {
  @prop({
    type: String,
    required: true,
  })
  title: string;

  @prop({
    type: String,
    required: true,
  })
  content: string;

  @prop({
    type: String,
    required: true,
  })
  shortId: string;

  @prop({
    type: Boolean,
    default: false,
  })
  published: boolean;
}

export const BlogModel = getModelForClass(Blog, {
  schemaOptions: {
    timestamps: true,
  },
});
