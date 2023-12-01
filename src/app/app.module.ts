import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BookmarkTileComponent } from './bookmark-tile/bookmark-tile.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NotesComponent } from './notes/notes.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SharedComponent } from './shared/shared.component';
import { TabsComponent } from './tabs/tabs.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookmarkComponent,
    AddNoteComponent,
    AddTodoComponent,
    BookmarkTileComponent,
    BookmarksComponent,
    EditBookmarkComponent,
    EditNoteComponent,
    EditTodoComponent,
    ManageBookmarksComponent,
    NoteCardComponent,
    NotesComponent,
    NotificationsComponent,
    SharedComponent,
    TabsComponent,
    TodoItemComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
