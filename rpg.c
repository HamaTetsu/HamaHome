//71735758　濱嶋哲史
//3×3の9つのノードを探検、ノードを移動すると経験値が貰えて200貯めるのを目指す。
//ノードを移動するとHP-10、ex+10。HPが0になる前にゲームクリアを目指す。
//3.5.7のノードには宝箱があり、HP回復、ex大量ゲット。
//9のノードの宝箱はトラップで、強制的にボス戦へと発展。ボスを倒すとクリア、倒されるとゲームオーバー。

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

#define NODE_1 0
#define NODE_2 1
#define NODE_3 2
#define NODE_4 3
#define NODE_5 4
#define NODE_6 5
#define NODE_7 6
#define NODE_8 7
#define NODE_9 8
#define NODE_CLEAR 9
#define NODE_OVER 10
#define NODE_BOSS 11
#define NODE_END 100
#define NODE_START NODE_1

struct rpg{
  int node;
  int a;//3×3のノードを上から見て右方向
  int b;//下方向
  int c;//左方向
  int d;//上方向
  char message[100];
};

struct rpg rpgtable[] = {
  { NODE_1, NODE_2, NODE_4, NODE_1, NODE_1, "You go (a/b)"},
  { NODE_2, NODE_3, NODE_5, NODE_1, NODE_2, "You go (a/b/c)"},
  { NODE_3, NODE_3, NODE_6, NODE_2, NODE_3, "You go (b/c)"},
  { NODE_4, NODE_5, NODE_7, NODE_4, NODE_1, "You go (a/b/d)"},
  { NODE_5, NODE_6, NODE_8, NODE_4, NODE_2, "You go (a/b/c/d)"},
  { NODE_6, NODE_6, NODE_9, NODE_5, NODE_3, "You go (b/c/d)"},
  { NODE_7, NODE_8, NODE_7, NODE_7, NODE_4, "You go (a/d)"},
  { NODE_8, NODE_9, NODE_8, NODE_7, NODE_5, "You go (a/c/d)"},
  { NODE_9, NODE_BOSS, NODE_BOSS, NODE_BOSS, NODE_BOSS, "You go (a/b/c/d)"},
  { NODE_CLEAR, NODE_END, NODE_END, NODE_END, NODE_END, "Game Clear!"},
  { NODE_OVER, NODE_END, NODE_END, NODE_END, NODE_END, "Game Over..."},
  { NODE_BOSS, NODE_CLEAR, NODE_OVER, NODE_BOSS, NODE_BOSS, "The Boss appears!"},
};

int main(){
  int state, i;//iは攻撃配列を引き出すときに使う引数
  int hp = 110, ex = -10, boss_hp = 300, attack[3] = {15,40,90}, bossattack[4] = {5,10,15,20};
  char input[256], *p;
  state = NODE_START;
  //冒険のループ
  for(;;){
    //ボス戦の処理
    if(state == NODE_BOSS){
      printf("%s\n",rpgtable[state].message);
      for(;;){
        //攻撃の処理
        i = rand()%3;
        boss_hp = boss_hp - attack[i];
        printf("Hit %d!\n",attack[i]);
        if(boss_hp<=0){printf("BOSSHP:0 Defeat The Boss!\n");printf("You get 2000Ex!\n");break;}
        //ボスの攻撃の処理
        i = rand()%4;
        hp = hp - bossattack[i];
        printf("Damege %d\n",bossattack[i]);
        if(hp<=0){hp = 0;break;}
        printf("HP:%d BOSSHP:%d\n",hp,boss_hp);    
      }
      if(hp<=0){state = rpgtable[state].b;}//ゲームオーバーノードへ
      else if(boss_hp<=0){state = rpgtable[state].a;ex = ex + 2000;}//クリアノードへ、おまけで経験値ゲット
      break;//全体ループの脱出
    }
    //宝箱、ボストラップ、通常ノードを踏んだときのHP,EX処理
    if(state == NODE_3 || state == NODE_5 || state == NODE_7){
      ex = ex + 30;
      hp = hp + 10;
      printf("You found a chest!\n");
    }else if(state == NODE_9){
      printf("You found a chest! But something is wrong...\n");
    }else{
      ex = ex + 10;
      hp = hp - 10;
    }
    if(hp <= 0){state = NODE_OVER;break;}
    if(ex >= 200){state = NODE_CLEAR;break;}
    printf("HP:%d Ex:%d move:%s\n",hp,ex,rpgtable[state].message);
    p = fgets(input,255,stdin);
    if(p != NULL){
      if(input[0] == 'a'){state = rpgtable[state].a;}
      else if(input[0] == 'b'){state = rpgtable[state].b;}
      else if(input[0] == 'c'){state = rpgtable[state].c;}
      else if(input[0] == 'd'){state = rpgtable[state].d;}
      else{}
    }else{break;}
  }
  printf("HP:%d Ex:%d %s\n",hp,ex,rpgtable[state].message);

  return 0;
}
