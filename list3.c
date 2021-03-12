#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct list *list_push(struct list *a, struct list *b, struct list *c);
struct list *list_pop(struct list *a);

struct list {
  struct list *next;
  char *name;
};

int main(){
  struct list *p, *q, *r;
  p = malloc(sizeof(struct list));
  p->name = malloc(sizeof(char)*6);
  q = malloc(sizeof(struct list));
  q->name = malloc(sizeof(char)*8);
  r = malloc(sizeof(struct list));
  r->name = malloc(sizeof(char)*8);

  list_push(p,q,r);
  list_pop(p);
  free(p);
  free(q);
  free(r);

  exit(0);
}

struct list *list_push(struct list *a, struct list *b, struct list *c){
  strcpy(a->name,"KADAI");
  a->next = b;
  strcpy(b->name,"TSUKARE");
  b->next = c;
  strcpy(c->name,"MASHITA");
  c->next = NULL;

  return 0;
}

struct list *list_pop(struct list *a){
  while(a != NULL){
    printf("%s\n",a->name);
    a = a->next;
  }

  return 0;
}
