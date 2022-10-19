import Article from 'App/Models/Article'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Article, ({ faker }) => {
  const images:string[] = []
  for (let index = 0; index < Math.floor(Math.random() * 10 + 3); index++) {
    images.push(faker.image.cats(undefined, undefined,true))
  }
  return {
    content: faker.lorem.paragraphs(),
    title: faker.lorem.sentence(),
  }
}).build()
