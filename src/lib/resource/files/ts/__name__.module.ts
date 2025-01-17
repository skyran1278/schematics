<% if (type === 'graphql-code-first' || type === 'graphql-schema-first') { %>import { <%= classify(name) %> } from '@app/db/entity/<%= name %>.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';<% } else { %>import { Module } from '@nestjs/common';<% } %>

<% if (type === 'rest' || type === 'microservice') { %>import { <%= classify(name) %>Controller } from './<%= name %>.controller';<% } %><% if (type === 'graphql-code-first' || type === 'graphql-schema-first') { %>import { <%= classify(name) %>Resolver } from './<%= name %>.resolver';<% } %><% if (type === 'ws') { %>import { <%= classify(name) %>Gateway } from './<%= name %>.gateway';<% } %>
import { <%= classify(name) %>Service } from './<%= name %>.service';

@Module({
  <% if (type === 'rest' || type === 'microservice') { %>controllers: [<%= classify(name) %>Controller],
  providers: [<%= classify(name) %>Service]<% } else if (type === 'graphql-code-first' || type === 'graphql-schema-first') { %>imports: [TypeOrmModule.forFeature([<%= classify(name) %>])],
  providers: [<%= classify(name) %>Resolver, <%= classify(name) %>Service]<% } else { %>providers: [<%= classify(name) %>Gateway, <%= classify(name) %>Service]<% } %>,
})
export class <%= classify(name) %>Module {}
