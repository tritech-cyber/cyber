var _yt_player={};(function(g){var window=this;var ba,da,ma,la,na,ra,sa,ta,ya,Ga,Ia,La,Na,Ra,Va,cb,jb,fb,lb,gb,nb,qb,sb,ub,Db,Eb,Kb,Nb,Ob,Pb,Rb,Ub,$b,bc,cc,fc,gc,mc,lc,oc,pc,qc,rc,tc,uc,Ac,Bc,Ec,Fc,Gc,Ic,Nc,Lc,Rc,Xc,$c,pd,td,Dd,Nd,Od,yd,dd,Xd,ce,de,be,Yd,ge,ie,fe,je,ke,le,me,ne,oe,qe,ue,te,ve,we,xe,ye,Ae,ze,Be,Ce,He,Le,Me,Ne,Oe,Qe,We,Ze,Te,af,jf,hf,cf,Ve,mf,nf,of,pf,qf,sf,tf,wf,vf,xf,yf,Af,Ef,Gf,Hf,Kf,Mf,Nf,Of,Qf,Rf,Uf,Xf,Tf,Vf,If,Pf,cg,$f,Yf,Zf,dg,bg,ag,hg,ig,jg,kg,lg,ng,pg,og,rg,ug,vg,Cg,Dg,Eg,Fg,Gg,Hg,Jg,Lg,Mg,Qg,Rg,Sg,Tg,Vg,Wg,ch,dh,fh,gh,
hh,jh,kh,lh,qh,rh,vh,wh,Ah,th,Gh,Kh,Nh,Ph,Qh,Rh,Sh,Th,Uh,Vh,Wh,Xh,Yh,Zh,$h,bi,di,fi,gi,hi,ii,mi,ni,oi,pi,qi,ri,ti,vi,Ai,Bi,Ei,Fi,Gi,Ii,Ki,Li,Mi,Ni,Oi,Hi,Ji,Pi,Qi,Ri,Si,Ti,Ui,Xi,Vi,Yi,Zi,aj,$i,bj,cj,dj,fj,gj,hj,kj,mj,pj,sj,rj,qj,vj,wj,xj,yj,zj,Aj,Bj,Cj,Dj,Ej,Fj,Gj,Hj,Ij,Jj,Kj,Lj,Mj,Nj,Oj,Pj,Qj,Tj,Uj,Vj,ak,Rj,bk,Sj,dk,ek,fk,gk,ik,hk,jk,kk,mk,nk,ok,pk,sk,tk,wk,xk,vk,yk,zk,Ak,Bk,uk,Ck,Gk,Fk,Hk,Dk,Ik,Jk,Lk,Nk,Rk,Sk,Tk,Uk,Vk,Wk,Yk,Zk,$k,al,bl,el,dl,cl,fl,gl,hl,jl,il,kl,ll,ml,nl,ol,pl,ql,rl,sl,tl,ul,vl,
wl,xl,yl,Al,zl,Cl,Dl,El,Fl,Gl,Il,Jl,Kl,Ll,Ol,Ql,Rl,Nl,Sl,Ul,Wl,Xl,Yl,Zl,Pl,$l,Tl,cm,bm,dm,em,am,Vl,fm,gm,hm,jm,km,mm,im,nm,om,pm,qm,rm,sm,um,tm,vm,wm,xm,zm,ym,Am,Em,Fm,Gm,Hm,Im,Jm,Km,Lm,Mm,Nm,Rm,Sm,Tm,Pm,Vm,Wm,Xm,Ym,$m,Zm,cn,an,gn,fn,hn,ln,mn,nn,on,pn,rn,wn,sn,An,Bn,Cn,Dn,En,Fn,Gn,Hn,Jn,In,Ln,Mn,Nn,On,Pn,Qn,Rn,Sn,Vn,Wn,Yn,Xn,Zn,$n,ao,bo,eo,co,io,ho,no,oo,ro,vo,wo,yo,xo,qo,Bo,Fo,Go,Io,Jo,Ko,Ho,Mo,No,Oo,So,Uo,Po,Qo,Ro,Wo,Xo,Vo,$o,Zo,ap,ep,fp,ip,jp,lp,np,op,qp,pp,rp,tp,up,vp,wp,xp,yp,Ap,Bp,Cp,Fp,Gp,
Ip,Op,Sp,Tp,$p,bq,cq,dq,eq,fq,gq,jq,nq,oq,pq,qq,tq,uq,vq,wq,xq,yq,Aq,Bq,Cq,Dq,Eq,Hq,Jq,Mq,Nq,Pq,Qq,Rq,Tq,Vq,Wq,Xq,Sq,Uq,$q,Zq,ar,br,dr,er,ir,jr,kr,mr,tr,vr,yr,zr,Ar,Cr,Gr,Dr,Er,Ir,Mr,Kr,Lr,Hr,Rr,Tr,Ur,Vr,Wr,Xr,Yr,Qr,Zr,Pr,bs,$r,gs,hs,fs,is,js,ks,ms,ls,ns,ts,qs,rs,vs,us,ws,xs,ys,zs,Fs,Gs,Js,Ks,Ls,Hs,Ns,Os,Qs,Vs,Ws,Xs,bt,ct,et,it,gt,kt,jt,ot,pt,Et,Ft,Dt,Pt,St,Qt,Vt,Yt,Xt,Wt,cu,eu,du,hu,mu,nu,Bu,Cu,Fu,Gu,Hu,Du,Lu,Ku,Mu,Nu,Ou,Pu,Qu,Ru,Su,Tu,Uu,Vu,Wu,Xu,Zu,bv,cv,dv,ev,fv,gv,hv,jv,iv,kv,rv,uv,wv,yv,Av,
Ev,Iv,Jv,Kv,Nv,Lv,Pv,Mv,Qv,Ov,Sv,Tv,Uv,Yv,Zv,aw,$v,bw,dw,ew,fw,gw,hw,iw,jw,kw,lw,mw,nw,ow,pw,qw,tw,uw,xw,yw,rw,vw,Cw,Dw,Aw,ww,Ew,Fw,zw,Bw,Gw,Hw,Iw,Jw,Lw,Mw,Ow,Nw,Pw,Qw,Rw,Sw,Tw,Vw,Uw,Ww,Xw,Yw,Zw,dx,fx,kx,ax,gx,ix,hx,ex,mx,ox,nx,$w,bx,cx,lx,jx,px,qx,rx,sx,tx,ux,vx,yx,zx,Ax,Bx,Cx,Dx,Ex,Fx,Gx,Hx,Ix,Jx,Kx,Lx,Mx,Nx,Ox,Qx,Sx,Tx,Ux,Xx,Yx,$x,Wx,cy,ay,by,dy,ey,fy,gy,hy,iy,ky,jy,my,oy,py,ry,sy,ty,uy,vy,wy,zy,yy,Ay,By,Cy,Dy,Ey,Fy,Gy,Hy,Iy,Jy,Ny,Oy,Ky,Ly,My,Qy,Sy,Uy,Ty,Xy,Yy,Zy,az,dz,cz,bz,ez,gz,fz,mz,jz,kz,
nz,oz,pz,qz,rz,sz,tz,uz,vz,wz,xz,iz,hz,zz,Az,Cz,Dz,Fz,Gz,Bz,Iz,Kz,Jz,Nz,Oz,Qz,Pz,Rz,Sz,Tz,Uz,Vz,Wz,Xz,Zz,$z,aA,bA,cA,dA,eA,Yz,fA,gA,hA,lA,mA,kA,tA,xA,KA,JA,IA,HA,sA,uA,RA,SA,TA,UA,VA,WA,YA,ZA,$A,bB,cB,dB,wB,xB,yB,zB,AB,CB,oB,vB,HB,IB,nB,KB,MB,OB,PB,QB,RB,SB,TB,VB,UB,WB,XB,$B,bC,dC,cC,eC,aC,fC,gC,hC,iC,kC,nC,lC,yC,qC,AC,BC,CC,DC,EC,IC,XC,$C,PC,aD,MC,eD,WC,OC,VC,kD,QC,SC,iD,UC,YC,NC,ZC,lD,FC,JC,HC,jD,pD,oD,zD,AD,BD,CD,DD,FD,GD,JD,LD,MD,PD,QD,HD,RD,uD,vD,wD,tD,VD,WD,XD,ZD,$D,aE,bE,cE,sD,xD,dE,gE,hE,
iE,jE,kE,lE,mE,nE,oE,pE,qE,rE,uE,vE,wE,xE,sE,zE,AE,BE,CE,DE,EE,KE,JE,LE,ME,NE,IE,PE,RE,HE,VE,WE,YE,$E,aF,bF,cF,dF,fF,hF,XE,jF,mF,lF,nF,oF,qF,rF,kF,sF,uF,tF,vF,wF,xF,yF,zF,CF,DF,BF,AF,EF,FF,GF,HF,KF,LF,NF,VF,WF,XF,YF,PF,QF,RF,SF,TF,ZF,$F,aG,bG,cG,dG,eG,hG,jG,lG,kG,mG,nG,oG,iG,gG,fG,qG,rG,sG,tG,uG,vG,wG,xG,pG,yG,zG,AG,BG,CG,DG,EG,FG,GG,IG,NG,LG,MG,OG,QG,PG,JG,KG,RG,SG,TG,UG,VG,XG,YG,WG,ZG,$G,bH,cH,aH,dH,eH,fH,gH,hH,iH,jH,kH,mH,nH,oH,pH,qH,rH,lH,tH,sH,vH,uH,xH,wH,yH,zH,AH,CH,BH,FH,IH,JH,KH,LH,EH,MH,
NH,DH,OH,PH,QH,RH,HH,GH,SH,TH,UH,WH,VH,XH,YH,ZH,$H,eI,fI,gI,dI,iI,aI,jI,bI,cI,kI,hI,lI,mI,nI,oI,pI,sI,rI,qI,tI,uI,wI,vI,xI,yI,zI,AI,BI,CI,DI,EI,FI,GI,HI,KI,LI,MI,PI,QI,TI,SI,XI,UI,YI,aJ,bJ,WI,ZI,$I,cJ,NI,OI,eJ,dJ,fJ,gJ,VI,hJ,JI,iJ,jJ,kJ,lJ,mJ,nJ,oJ,pJ,qJ,rJ,tJ,sJ,uJ,vJ,xJ,wJ,AJ,BJ,CJ,zJ,DJ,EJ,FJ,GJ,HJ,IJ,JJ,KJ,MJ,OJ,NJ,RJ,QJ,SJ,TJ,PJ,UJ,VJ,WJ,YJ,aK,$J,cK,baa,caa,daa,dK,bK,ZJ,aaa,eK,tE,yE,SE,fK,gK,hK,iK,kK,lK,vK,eaa,nK,xK,yK,AK,zK,jK,sK,HK,FK,GK,gaa,BK,NK,MK,LK,TK,VK,WK,XK,IK,YK,iaa,jaa,JK,oK,OK,UK,
kaa,PK,eL,laa,EK,fL,CK,aL,cL,bL,dL,hL,maa,jL,tK,haa,kL,gL,uK,lL,DK,mL,SK,mK,iL,ZK,nL,RK,pL,QK,qL,rL,uL,AL,KL,WL,XL,paa,YL,qaa,raa,saa,taa,ZL,$L,aM,cM,dM,eM,fM,hM,gM,iM,jM,vaa,waa,oM,kM,nM,lM,mM,xaa,pM,qM,yaa,zaa,Aaa,rM,sM,tM,uM,vM,wM,xM,yM,zM,AM,BM,DM,EM,GM,IM,LM,KM,PM,Caa,SM,RM,TM,Daa,UM,Eaa,VM,WM,XM,YM,ZM,Faa,$M,aN,bN,cN,Gaa,dN,eN,fN,hN,Haa,gN,iN,jN,kN,lN,Iaa,mN,nN,oN,QM,Jaa,qN,rN,sN,pN,tN,uN,Kaa,vN,Laa,xN,zN,Naa,AN,BN,CN,EN,FN,Oaa,GN,IN,Paa,LN,MN,NN,HN,JN,KN,ON,PN,RN,Qaa,SN,QN,TN,UN,Raa,VN,WN,
XN,YN,ZN,$N,aO,bO,cO,dO,eO,fO,gO,hO,iO,jO,kO,lO,mO,nO,oO,pO,qO,rO,sO,tO,uO,vO,wO,xO,yO,Saa,BO,CO,zO,AO,DO,EO,FO,Taa,Uaa,HO,Vaa,IO,Waa,JO,Xaa,Yaa,KO,aba,$aa,Zaa,NO,OO,QO,SO,TO,UO,bba,cba,dba,VO,eba,LO,YO,WO,GO,MO,ZO,cP,dP,eP,fP,X,gP,jP,kP,lP,mP,oP,rP,sP,tP,vP,wP,xP,yP,AP,BP,CP,DP,EP,GP,HP,IP,JP,KP,LP,MP,NP,OP,fba,gba,iba,jba,RP,SP,PP,hba,QP,kba,TP,UP,VP,WP,XP,YP,ZP,$P,aQ,cQ,dQ,eQ,bQ,gQ,hQ,iQ,jQ,kQ,lQ,mQ,pQ,qQ,rQ,sQ,lba,tQ,uQ,vQ,wQ,xQ,yQ,mba,zQ,nba,AQ,BQ,CQ,DQ,EQ,FQ,GQ,HQ,oba,IQ,pba,JQ,KQ,LQ,MQ,OQ,
NQ,PQ,QQ,RQ,SQ,TQ,UQ,WQ,qba,XQ,YQ,ZQ,$Q,aR,cR,dR,eR,fR,gR,hR,iR,kR,jR,rba,lR,sba,tba,mR,uba,nR,oR,pR,vba,qR,rR,sR,tR,uR,vR,wR,xR,yR,zR,BR,CR,FR,GR,ER,HR,xba,IR,JR,MR,KR,OR,DN,PR,QR,SR,VR,UR,WR,XR,YR,ZR,aS,bS,cS,eS,fS,gS,hS,dS,iS,kS,lS,jS,nS,mS,oS,pS,rS,qS,sS,tS,uS,xS,vS,wS,yS,zS,AS,CS,DS,BS,ES,FS,GS,HS,IS,KS,JS,MS,zba,QS,Aba,XS,YS,WS,aT,bT,cT,dT,eT,fT,iT,jT,hT,gT,kT,mT,lT,nT,oT,qT,sT,pT,uT,wT,vT,Bba,tT,xT,yT,zT,AT,BT,CT,Cba,DT,ET,FT,GT,HT,IT,JT,KT,MT,LT,OT,NT,PT,QT,RT,ST,WT,UT,TT,VT,ZT,XT,$T,aU,cU,
eU,fU,dU,hU,iU,jU,kU,gU,lU,nU,rU,mU,uU,vU,wU,pU,xU,oU,zU,tU,qU,yU,AU,sU,BU,EU,FU,GU,HU,IU,JU,KU,LU,MU,NU,OU,Gba,PU,QU,RU,SU,UU,TU,VU,WU,XU,YU,$U,ZU,bV,dV,Hba,eV,fV,hV,LS,jV,iV,gV,kV,bU,mV,Iba,Jba,nV,qV,oV,pV,rV,sV,lV,tV,uV,VL,vV,wV,xV,yV,zV,Lba,Kba,DV,FV,GV,XO,$O,BV,IV,aP,HV,KV,LV,JV,MV,Nba,Oba,QV,PV,CV,VV,WV,AV,YV,wL,ZV,$V,OV,NV,cW,UV,dW,fW,TV,eW,hW,jW,iW,kW,nW,oW,bW,aW,pW,LL,qW,Rv,rW,SV,tW,uW,NL,wW,gW,xW,vW,yW,zW,Mba,XV,aa,ka,ha,ia,oa,AW,Da,Ea;
ba=function(a){return function(){return aa[a].apply(this,arguments)}};
g.ca=function(a,b){return aa[a]=b};
da=function(){da=function(){};
ha.Symbol||(ha.Symbol=ia)};
ma=function(){da();var a=ha.Symbol.iterator;a||(a=ha.Symbol.iterator=ha.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return la(this)}});
ma=function(){}};
la=function(a){var b=0;return na(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
na=function(a){ma();a={next:a};a[ha.Symbol.iterator]=function(){return this};
return a};
g.q=function(a){ma();var b=a[window.Symbol.iterator];return b?b.call(a):la(a)};
g.r=function(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ua=b.prototype};
g.qa=function(a){if(!(a instanceof Array)){a=g.q(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};
ra=function(a,b){if(b){for(var c=ha,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ka(c,d,{configurable:!0,writable:!0,value:f})}};
sa=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
ta=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.t=function(a){return void 0!==a};
g.w=function(a){return"string"==typeof a};
g.ua=function(a){return"boolean"==typeof a};
g.va=function(a){return"number"==typeof a};
g.y=function(a,b,c){a=a.split(".");c=c||g.x;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.t(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.z=function(a,b){for(var c=a.split("."),d=b||g.x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.wa=function(){};
g.xa=function(a){a.oc=void 0;a.getInstance=function(){return a.oc?a.oc:a.oc=new a}};
ya=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.za=function(a){return"array"==ya(a)};
g.Aa=function(a){var b=ya(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Ba=function(a){return"function"==ya(a)};
g.Ca=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Fa=function(a){return a[Da]||(a[Da]=++Ea)};
Ga=function(a,b,c){return a.call.apply(a.bind,arguments)};
Ia=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.A=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.A=Ga:g.A=Ia;return g.A.apply(null,arguments)};
g.B=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.Ka=function(a,b){for(var c in b)a[c]=b[c]};
g.F=function(a,b){function c(){}
c.prototype=b.prototype;a.ua=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.FM=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
La=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,La);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ma=function(a){return a[a.length-1]};
Na=function(a,b){var c=0;(0,g.G)(a,function(a,e,f){b.call(void 0,a,e,f)&&++c},void 0);
return c};
g.Pa=function(a,b,c){b=g.Oa(a,b,c);return 0>b?null:g.w(a)?a.charAt(b):a[b]};
g.Oa=function(a,b,c){for(var d=a.length,e=g.w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
Ra=function(a,b){var c=g.Qa(a,b,void 0);return 0>c?null:g.w(a)?a.charAt(c):a[c]};
g.Qa=function(a,b,c){for(var d=g.w(a)?a.split(""):a,e=a.length-1;0<=e;e--)if(e in d&&b.call(c,d[e],e,a))return e;return-1};
g.Ta=function(a,b){return 0<=(0,g.Sa)(a,b)};
g.Ua=function(a){return 0==a.length};
Va=function(a){if(!g.za(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};
g.Wa=function(a,b){g.Ta(a,b)||a.push(b)};
g.Ya=function(a,b){var c=(0,g.Sa)(a,b),d;(d=0<=c)&&g.Xa(a,c);return d};
g.Xa=function(a,b){Array.prototype.splice.call(a,b,1)};
g.$a=function(a,b){var c=g.Oa(a,b,void 0);0<=c&&g.Xa(a,c)};
g.ab=function(a){return Array.prototype.concat.apply([],arguments)};
g.bb=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
cb=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Aa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.eb=function(a,b,c,d){Array.prototype.splice.apply(a,g.db(arguments,1))};
g.db=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
g.ib=function(a,b,c){return fb(a,c||gb,!1,b)};
jb=function(a,b){return fb(a,b,!0,void 0,void 0)};
fb=function(a,b,c,d,e){for(var f=0,k=a.length,l;f<k;){var m=f+k>>1,n;c?n=b.call(e,a[m],m,a):n=b(d,a[m]);0<n?f=m+1:(k=m,l=!n)}return l?f:~f};
g.kb=function(a,b){a.sort(b||gb)};
lb=function(a,b){var c=gb;g.kb(a,function(a,e){return c(b(a),b(e))})};
g.ob=function(a,b){if(!g.Aa(a)||!g.Aa(b)||a.length!=b.length)return!1;for(var c=a.length,d=nb,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0};
gb=function(a,b){return a>b?1:a<b?-1:0};
nb=function(a,b){return a===b};
g.pb=function(a,b,c){var d={};(0,g.G)(a,function(e,f){d[b.call(c,e,f,a)]=e});
return d};
qb=function(a){for(var b=[],c=0;c<a;c++)b[c]="";return b};
g.rb=function(a,b){return 0==a.lastIndexOf(b,0)};
sb=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.tb=function(a){return/^[\s\xa0]*$/.test(a)};
ub=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Cb=function(a){if(!vb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(wb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(xb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(yb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(zb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ab,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Bb,"&#0;"));return a};
Db=function(a,b){a.length>b&&(a=a.substring(0,b-3)+"...");return a};
Eb=function(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())};
g.Gb=function(a,b){var c=g.t(void 0)?a.toFixed(void 0):String(a),d=c.indexOf(".");-1==d&&(d=c.length);return Fb("0",Math.max(0,b-d))+c};
g.Hb=function(a){return null==a?"":String(a)};
g.Ib=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.H)()).toString(36)};
g.Lb=function(a,b){for(var c=0,d=Jb(String(a)).split("."),e=Jb(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Kb(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==m[1].length?0:(0,window.parseInt)(m[1],10))||Kb(0==l[2].length,0==m[2].length)||Kb(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Kb=function(a,b){return a<b?-1:a>b?1:0};
g.Mb=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
Nb=function(a){var b=Number(a);return 0==b&&g.tb(a)?window.NaN:b};
Ob=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};
Pb=function(a){var b=g.w(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};
Rb=function(a){return-1!=g.Qb.indexOf(a)};
g.Sb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Tb=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};
Ub=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Vb=function(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0};
g.Wb=function(a){var b=0,c;for(c in a)b++;return b};
g.Xb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
g.Yb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.Zb=function(a,b){var c=g.Aa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a};
$b=function(a,b){return null!==a&&b in a};
g.ac=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};
bc=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
cc=function(a,b){var c=bc(a,b,void 0);return c&&a[c]};
g.dc=function(a){for(var b in a)return!1;return!0};
g.ec=function(a){for(var b in a)delete a[b]};
fc=function(a,b){b in a&&delete a[b]};
gc=function(a,b,c){return null!==a&&b in a?a[b]:c};
g.hc=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.ic=function(a){var b=ya(a);if("object"==b||"array"==b){if(g.Ba(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.ic(a[c]);return b}return a};
g.kc=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<jc.length;f++)c=jc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
mc=function(){return Rb("Safari")&&!(lc()||Rb("Coast")||Rb("Opera")||Rb("Edge")||Rb("Silk")||Rb("Android"))};
lc=function(){return(Rb("Chrome")||Rb("CriOS"))&&!Rb("Edge")};
g.nc=function(){return Rb("Android")&&!(lc()||Rb("Firefox")||Rb("Opera")||Rb("Silk"))};
oc=function(){return Rb("iPhone")&&!Rb("iPod")&&!Rb("iPad")};
pc=function(){return oc()||Rb("iPad")||Rb("iPod")};
qc=function(a){qc[" "](a);return a};
rc=function(a,b){try{return qc(a[b]),!0}catch(c){}return!1};
tc=function(a,b){var c=sc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
uc=function(){var a=g.x.document;return a?a.documentMode:void 0};
g.wc=function(a){return tc(a,function(){return 0<=g.Lb(vc,a)})};
g.yc=function(a){return Number(xc)>=a};
Ac=function(){this.g="";this.l=zc};
Bc=function(a){return a instanceof Ac&&a.constructor===Ac&&a.l===zc?a.g:"type_error:Const"};
g.Cc=function(a){var b=new Ac;b.g=a;return b};
Ec=function(){this.g="";this.l=Dc};
Fc=function(a){if(a instanceof Ec&&a.constructor===Ec&&a.l===Dc)return a.g;ya(a);return"type_error:TrustedResourceUrl"};
Gc=function(a){var b=new Ec;b.g=a;return b};
Ic=function(){this.g="";this.l=Hc};
g.Jc=function(a){if(a instanceof Ic&&a.constructor===Ic&&a.l===Hc)return a.g;ya(a);return"type_error:SafeUrl"};
g.Mc=function(a){if(a instanceof Ic)return a;a=a.ug?a.Df():String(a);Kc.test(a)||(a="about:invalid#zClosurez");return Lc(a)};
Nc=function(a){if(a instanceof Ic)return a;a=a.ug?a.Df():String(a);Kc.test(a)||(a="about:invalid#zClosurez");return Lc(a)};
Lc=function(a){var b=new Ic;b.g=a;return b};
g.Pc=function(){this.g="";this.o=Oc;this.l=null};
g.Qc=function(a){if(a instanceof g.Pc&&a.constructor===g.Pc&&a.o===Oc)return a.g;ya(a);return"type_error:SafeHtml"};
Rc=function(a,b){var c=new g.Pc;c.g=a;c.l=b;return c};
g.Sc=function(a,b){var c=b instanceof Ic?b:Nc(b);a.href=g.Jc(c)};
g.Tc=function(a,b){a.src=Fc(b)};
g.Uc=function(a,b){Bc(a);Bc(a);return Rc(b,null)};
g.Vc=function(a,b,c){return Math.min(Math.max(a,b),c)};
g.Wc=function(a,b){var c=a%b;return 0>c*b?c+b:c};
Xc=function(a,b,c){return a+c*(b-a)};
g.Yc=function(a){return a*Math.PI/180};
g.Zc=function(a,b){this.x=g.t(a)?a:0;this.y=g.t(b)?b:0};
$c=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.ad=function(a,b){return new g.Zc(a.x-b.x,a.y-b.y)};
g.bd=function(a,b){this.width=a;this.height=b};
g.cd=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};
g.gd=function(a){return a?new dd(g.ed(a)):fd||(fd=new dd)};
g.hd=function(a){return g.w(a)?window.document.getElementById(a):a};
g.jd=function(a,b){var c=b||window.document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):g.id(window.document,"*",a,b)};
g.kd=function(a,b){var c=b||window.document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=window.document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(""+(a?"."+a:"")):g.id(c,"*",a,b)[0]||null}return c||null};
g.id=function(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,k;k=a[f];f++)b==k.nodeName&&(d[e++]=k);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;k=a[f];f++)b=k.className,"function"==typeof b.split&&g.Ta(b.split(/\s+/),c)&&(d[e++]=k);d.length=e;return d}return a};
g.md=function(a,b){g.Sb(b,function(b,d){b&&b.ug&&(b=b.Df());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:ld.hasOwnProperty(d)?a.setAttribute(ld[d],b):g.rb(d,"aria-")||g.rb(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.od=function(a){a=a.document;a=g.nd(a)?a.documentElement:a.body;return new g.bd(a.clientWidth,a.clientHeight)};
g.rd=function(a){var b=pd(a);a=a.parentWindow||a.defaultView;return g.qd&&g.wc("10")&&a.pageYOffset!=b.scrollTop?new g.Zc(b.scrollLeft,b.scrollTop):new g.Zc(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
pd=function(a){return a.scrollingElement?a.scrollingElement:!g.sd&&g.nd(a)?a.documentElement:a.body||a.documentElement};
td=function(a){return a?a.parentWindow||a.defaultView:window};
g.wd=function(a,b,c){var d=arguments,e=window.document,f=String(d[0]),k=d[1];if(!ud&&k&&(k.name||k.type)){f=["<",f];k.name&&f.push(' name="',g.Cb(k.name),'"');if(k.type){f.push(' type="',g.Cb(k.type),'"');var l={};g.kc(l,k);delete l.type;k=l}f.push(">");f=f.join("")}f=e.createElement(f);k&&(g.w(k)?f.className=k:g.za(k)?f.className=k.join(" "):g.md(f,k));2<d.length&&g.vd(e,f,d,2);return f};
g.vd=function(a,b,c,d){function e(c){c&&b.appendChild(g.w(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.Aa(f)||g.Ca(f)&&0<f.nodeType?e(f):(0,g.G)(yd(f)?g.bb(f):f,e)}};
g.zd=function(a){return window.document.createElement(String(a))};
g.Ad=function(a){return window.document.createTextNode(String(a))};
g.nd=function(a){return"CSS1Compat"==a.compatMode};
g.Bd=function(a,b){a.appendChild(b)};
g.Cd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
Dd=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};
g.Ed=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.Hd=function(a){return Fd&&void 0!=a.children?a.children:(0,g.Gd)(a.childNodes,function(a){return 1==a.nodeType})};
g.Id=function(a){if(g.t(a.firstElementChild))a=a.firstElementChild;else for(a=a.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a};
g.Kd=function(a){var b;if(Jd&&!(g.qd&&g.wc("9")&&!g.wc("10")&&g.x.SVGElement&&a instanceof g.x.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return g.Ca(b)&&1==b.nodeType?b:null};
g.Ld=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
g.ed=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
g.Md=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{g.Cd(a);var c=g.ed(a);a.appendChild(c.createTextNode(String(b)))}};
g.Pd=function(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Nd(a)||Od(a)):Nd(a)&&Od(a))&&g.qd){var c;!g.Ba(a.getBoundingClientRect)||g.qd&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};
Nd=function(a){return g.qd&&!g.wc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")};
Od=function(a){a=a.tabIndex;return g.va(a)&&0<=a&&32768>a};
yd=function(a){if(a&&"number"==typeof a.length){if(g.Ca(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Ba(a))return"function"==typeof a.item}return!1};
g.Rd=function(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return g.Qd(a,function(a){return(!e||a.nodeName==e)&&(!c||g.w(a.className)&&g.Ta(a.className.split(/\s+/),c))},!0,d)};
g.Sd=function(a,b){return g.Rd(a,null,b,void 0)};
g.Qd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
dd=function(a){this.g=a||g.x.document||window.document};
g.Td=function(a){a=a.g;return a.parentWindow||a.defaultView};
g.Vd=function(a){Ud();return Gc(a)};
g.Wd=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return b};
Xd=function(a){return(0,g.I)(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};
g.ae=function(a,b){g.Aa(a);Yd();for(var c=b?Zd:$d,d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,n=m?a[e+2]:0,p=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|n>>6;n&=63;m||(n=64,k||(l=64));d.push(c[p],c[f],c[l],c[n])}return d.join("")};
ce=function(a){var b=[];be(a,function(a){b.push(a)});
return b};
de=function(a){var b=a.length,c=0;"="===a[b-2]?c=2:"="===a[b-1]&&(c=1);var d=new window.Uint8Array(Math.ceil(3*b/4)-c),e=0;be(a,function(a){d[e++]=a});
return d.subarray(0,e)};
be=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=ee[c];if(null!=e)return e;if(!g.tb(c))throw Error("Unknown base64 encoding at char: "+c);}return b}
Yd();for(var d=0;;){var e=c(-1),f=c(0),k=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=k&&(b(f<<4&240|k>>2),64!=l&&b(k<<6&192|l))}};
Yd=function(){if(!$d){$d={};ee={};Zd={};for(var a=0;65>a;a++)$d[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),ee[$d[a]]=a,Zd[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(ee["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
ge=function(a,b,c){this.l=null;this.C=this.F=this.g=this.o=this.A=0;this.B=!1;a&&fe(this,a,b,c)};
ie=function(a,b,c){if(he.length){var d=he.pop();a&&fe(d,a,b,c);return d}return new ge(a,b,c)};
fe=function(a,b,c,d){b=b.constructor===window.Uint8Array?b:b.constructor===window.ArrayBuffer?new window.Uint8Array(b):b.constructor===Array?new window.Uint8Array(b):b.constructor===String?de(b):new window.Uint8Array(0);a.l=b;a.A=g.t(c)?c:0;a.o=g.t(d)?a.A+d:a.l.length;a.g=a.A};
je=function(a){var b=a.l;var c=b[a.g+0];var d=c&127;if(128>c)return a.g+=1,d;c=b[a.g+1];d|=(c&127)<<7;if(128>c)return a.g+=2,d;c=b[a.g+2];d|=(c&127)<<14;if(128>c)return a.g+=3,d;c=b[a.g+3];d|=(c&127)<<21;if(128>c)return a.g+=4,d;c=b[a.g+4];d|=(c&15)<<28;if(128>c)return a.g+=5,d>>>0;a.g+=5;128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&a.g++;return d};
ke=function(a){this.g=ie(a,void 0,void 0);this.l=this.o=-1;this.A=!1};
le=function(a){var b=a.g;if(b.g==b.o||a.getError())return!1;b=je(a.g);var c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.A=!0,!1;a.o=b>>>3;a.l=c;return!0};
me=function(a){switch(a.l){case 0:if(0!=a.l)me(a);else{for(a=a.g;a.l[a.g]&128;)a.g++;a.g++}break;case 1:1!=a.l?me(a):(a=a.g,a.g+=8);break;case 2:if(2!=a.l)me(a);else{var b=je(a.g);a=a.g;a.g+=b}break;case 5:5!=a.l?me(a):(a=a.g,a.g+=4);break;case 3:b=[a.o];do{if(!le(a)){a.A=!0;break}if(3==a.l)b.push(a.o);else if(4==a.l&&a.o!=b.pop()){a.A=!0;break}}while(0<b.length)}};
ne=function(a){var b=je(a.g);a=a.g;var c=a.l,d=a.g,e=d+b;b=[];for(var f="";d<e;){var k=c[d++];if(128>k)b.push(k);else if(192>k)continue;else if(224>k){var l=c[d++];b.push((k&31)<<6|l&63)}else if(240>k){l=c[d++];var m=c[d++];b.push((k&15)<<12|(l&63)<<6|m&63)}else if(248>k){l=c[d++];m=c[d++];var n=c[d++];k=(k&7)<<18|(l&63)<<12|(m&63)<<6|n&63;k-=65536;b.push((k>>10&1023)+55296,(k&1023)+56320)}8192<=b.length&&(f+=String.fromCharCode.apply(null,b),b.length=0)}c=f;if(8192>=b.length)b=String.fromCharCode.apply(null,
b);else{e="";for(f=0;f<b.length;f+=8192)k=g.db(b,f,f+8192),e+=String.fromCharCode.apply(null,k);b=e}a.g=d;return c+b};
oe=function(a){var b=je(a.g);a=a.g;if(0>b||a.g+b>a.l.length)a.B=!0,b=new window.Uint8Array(0);else{var c=a.l.subarray(a.g,a.g+b);a.g+=b;b=c}return b};
qe=function(){};
ue=function(a,b,c){a.g=null;b||(b=[]);a.F=void 0;a.A=-1;a.l=b;a:{if(a.l.length){b=a.l.length-1;var d=a.l[b];if(d&&"object"==typeof d&&!g.za(d)&&!(re&&d instanceof window.Uint8Array)){a.B=b-a.A;a.o=d;break a}}a.B=Number.MAX_VALUE}a.C={};if(c)for(b=0;b<c.length;b++)d=c[b],d<a.B?(d+=a.A,a.l[d]=a.l[d]||se):(te(a),a.o[d]=a.o[d]||se)};
te=function(a){var b=a.B+a.A;a.l[b]||(a.o=a.l[b]={})};
ve=function(a,b){if(b<a.B){var c=b+a.A,d=a.l[c];return d===se?a.l[c]=[]:d}if(a.o)return d=a.o[b],d===se?a.o[b]=[]:d};
we=function(a,b){if(b<a.B){var c=b+a.A,d=a.l[c];return d===se?a.l[c]=[]:d}d=a.o[b];return d===se?a.o[b]=[]:d};
xe=function(a){if(null==a||a instanceof window.Uint8Array)return a;if(g.w(a))return de(a);ya(a);return null};
ye=function(a,b,c){b<a.B?a.l[b+a.A]=c:(te(a),a.o[b]=c)};
Ae=function(a){if(a.g)for(var b in a.g){var c=a.g[b];if(g.za(c))for(var d=0;d<c.length;d++)c[d]&&ze(c[d]);else c&&ze(c)}};
ze=function(a){Ae(a);return a.l};
Be=function(a){if(g.za(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Be(d):d)}return b}if(re&&a instanceof window.Uint8Array)return new window.Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Be(d):d);return b};
Ce=function(a){for(var b=[],c=a=td(a.ownerDocument);c!=a.top;c=c.parent)if(c.frameElement)b.push(c.frameElement);else break;return b};
g.J=function(){this.rb=this.rb;this.nb=this.nb};
g.K=function(a,b){g.De(a,g.B(g.Ee,b))};
g.De=function(a,b){a.rb?g.t(void 0)?b.call(void 0):b():(a.nb||(a.nb=[]),a.nb.push(g.t(void 0)?(0,g.A)(b,void 0):b))};
g.Ee=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Fe=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];g.Aa(d)?g.Fe.apply(null,d):g.Ee(d)}};
g.Ge=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Ng=!1;this.xv=!0};
He=function(a,b){g.Ge.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)};
g.Je=function(a){return!(!a||!a[g.Ie])};
Le=function(a,b,c,d,e){this.listener=a;this.g=null;this.src=b;this.type=c;this.capture=!!d;this.qk=e;this.key=++Ke;this.wh=this.Dj=!1};
Me=function(a){a.wh=!0;a.listener=null;a.g=null;a.src=null;a.qk=null};
Ne=function(a){this.src=a;this.listeners={};this.g=0};
Oe=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Ya(a.listeners[c],b);d&&(Me(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--));return d};
g.Pe=function(a){var b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Me(d[e]);delete a.listeners[c];a.g--}};
Qe=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.wh&&f.listener==b&&f.capture==!!c&&f.qk==d)return e}return-1};
g.Ue=function(a,b,c,d,e){if(d&&d.once)return Te(a,b,c,d,e);if(g.za(b)){for(var f=0;f<b.length;f++)g.Ue(a,b[f],c,d,e);return null}c=Ve(c);return g.Je(a)?a.ea(b,c,g.Ca(d)?!!d.capture:!!d,e):We(a,b,c,!1,d,e)};
We=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ca(e)?!!e.capture:!!e,l=g.Xe(a);l||(a[Ye]=l=new Ne(a));c=l.add(b,c,d,k,f);if(c.g)return c;d=Ze();c.g=d;d.src=a;d.listener=c;if(a.addEventListener)$e||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(af(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");bf++;return c};
Ze=function(){var a=cf,b=df?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
Te=function(a,b,c,d,e){if(g.za(b)){for(var f=0;f<b.length;f++)Te(a,b[f],c,d,e);return null}c=Ve(c);return g.Je(a)?a.Ek(b,c,g.Ca(d)?!!d.capture:!!d,e):We(a,b,c,!0,d,e)};
g.ef=function(a,b,c,d,e){if(g.za(b))for(var f=0;f<b.length;f++)g.ef(a,b[f],c,d,e);else d=g.Ca(d)?!!d.capture:!!d,c=Ve(c),g.Je(a)?a.Pa(b,c,d,e):a&&(a=g.Xe(a))&&(b=a.ci(b,c,d,e))&&g.ff(b)};
g.ff=function(a){if(g.va(a)||!a||a.wh)return!1;var b=a.src;if(g.Je(b))return Oe(b.Ed,a);var c=a.type,d=a.g;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(af(c),d):b.addListener&&b.removeListener&&b.removeListener(d);bf--;(c=g.Xe(b))?(Oe(c,a),0==c.g&&(c.src=null,b[Ye]=null)):Me(a);return!0};
af=function(a){return a in gf?gf[a]:gf[a]="on"+a};
jf=function(a,b,c,d){var e=!0;if(a=g.Xe(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.wh&&(f=hf(f,d),e=e&&!1!==f)}return e};
hf=function(a,b){var c=a.listener,d=a.qk||a.src;a.Dj&&g.ff(a);return c.call(d,b)};
cf=function(a,b){if(a.wh)return!0;if(!df){var c=b||g.z("window.event"),d=new He(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.Ng&&0<=k;k--){d.currentTarget=c[k];var l=jf(c[k],f,!0,d);e=e&&l}for(k=0;!d.Ng&&k<c.length;k++)d.currentTarget=c[k],l=jf(c[k],f,!1,d),e=e&&l}return e}return hf(a,new He(b,
this))};
g.Xe=function(a){a=a[Ye];return a instanceof Ne?a:null};
Ve=function(a){if(g.Ba(a))return a;a[kf]||(a[kf]=function(b){return a.handleEvent(b)});
return a[kf]};
g.lf=function(){g.J.call(this);this.Ed=new Ne(this);this.fa=this;this.K=null};
mf=function(a,b,c,d){b=a.Ed.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.wh&&k.capture==c){var l=k.listener,m=k.qk||k.src;k.Dj&&Oe(a.Ed,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.xv};
nf=function(a,b){this.o=a;this.A=b;this.l=0;this.g=null};
of=function(a,b){a.A(b);100>a.l&&(a.l++,b.next=a.g,a.g=b)};
pf=function(a){return function(){return a}};
qf=function(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};
g.rf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
sf=function(a){var b=a;return function(){if(b){var a=b;b=null;a()}}};
tf=function(a){g.x.setTimeout(function(){throw a;},0)};
wf=function(a,b){var c=a;b&&(c=(0,g.A)(a,b));!g.Ba(g.x.setImmediate)||g.x.Window&&g.x.Window.prototype&&!Rb("Edge")&&g.x.Window.prototype.setImmediate==g.x.setImmediate?(uf||(uf=vf()),uf(c)):g.x.setImmediate(c)};
vf=function(){var a=g.x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Rb("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.A)(function(a){if(("*"==d||
a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!Rb("Trident")&&!Rb("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.t(c.next)){c=c.next;var a=c.cq;c.cq=null;a()}};
return function(a){d.next={cq:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.x.setTimeout(a,0)}};
xf=function(){this.l=this.g=null};
yf=function(){this.next=this.scope=this.g=null};
g.Df=function(a,b){zf||Af();Bf||(zf(),Bf=!0);Cf.add(a,b)};
Af=function(){if(-1!=String(g.x.Promise).indexOf("[native code]")){var a=g.x.Promise.resolve(void 0);zf=function(){a.then(Ef)}}else zf=function(){wf(Ef)}};
Ef=function(){for(var a;a=Cf.remove();){try{a.g.call(a.scope)}catch(b){tf(b)}of(Ff,a)}Bf=!1};
Gf=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
Hf=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Jf=function(a,b){this.g=0;this.F=void 0;this.A=this.l=this.o=null;this.B=this.C=!1;if(a!=g.wa)try{var c=this;a.call(b,function(a){If(c,2,a)},function(a){If(c,3,a)})}catch(d){If(this,3,d)}};
Kf=function(){this.next=this.context=this.l=this.A=this.g=null;this.o=!1};
Mf=function(a,b,c){var d=Lf.get();d.A=a;d.l=b;d.context=c;return d};
Nf=function(a){if(a instanceof g.Jf)return a;var b=new g.Jf(g.wa);If(b,2,a);return b};
Of=function(a){return new g.Jf(function(b,c){c(a)})};
Qf=function(a,b,c){Pf(a,b,c,null)||g.Df(g.B(b,a))};
Rf=function(a){return new g.Jf(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Qf(e,b,c)})};
g.Sf=function(a){return new g.Jf(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,m;l<a.length;l++)m=a[l],Qf(m,g.B(f,l),k);
else b(e)})};
Uf=function(a,b){var c=Mf(b,b,void 0);c.o=!0;Tf(a,c);return a};
g.Wf=function(a,b){return Vf(a,null,b,void 0)};
Xf=function(a,b){if(0==a.g)if(a.o){var c=a.o;if(c.l){for(var d=0,e=null,f=null,k=c.l;k&&(k.o||(d++,k.g==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.g&&1==d?Xf(c,b):(f?(d=f,d.next==c.A&&(c.A=d),d.next=d.next.next):Yf(c),Zf(c,e,3,b)))}a.o=null}else If(a,3,b)};
Tf=function(a,b){a.l||2!=a.g&&3!=a.g||$f(a);a.A?a.A.next=b:a.l=b;a.A=b};
Vf=function(a,b,c,d){var e=Mf(null,null,null);e.g=new g.Jf(function(a,k){e.A=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){k(n)}}:a;
e.l=c?function(b){try{var e=c.call(d,b);!g.t(e)&&b instanceof ag?k(b):a(e)}catch(n){k(n)}}:k});
e.g.o=a;Tf(a,e);return e.g};
If=function(a,b,c){0==a.g&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.g=1,Pf(c,a.I,a.K,a)||(a.F=c,a.g=b,a.o=null,$f(a),3!=b||c instanceof ag||bg(a,c)))};
Pf=function(a,b,c,d){if(a instanceof g.Jf)return Tf(a,Mf(b||g.wa,c||null,d)),!0;if(Hf(a))return a.then(b,c,d),!0;if(g.Ca(a))try{var e=a.then;if(g.Ba(e))return cg(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
cg=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
$f=function(a){a.C||(a.C=!0,g.Df(a.H,a))};
Yf=function(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.A=null);return b};
Zf=function(a,b,c,d){if(3==c&&b.l&&!b.o)for(;a&&a.B;a=a.o)a.B=!1;if(b.g)b.g.o=null,dg(b,c,d);else try{b.o?b.A.call(b.context):dg(b,c,d)}catch(e){eg.call(null,e)}of(Lf,b)};
dg=function(a,b,c){2==b?a.A.call(a.context,c):a.l&&a.l.call(a.context,c)};
bg=function(a,b){a.B=!0;g.Df(function(){a.B&&eg.call(null,b)})};
ag=function(a){La.call(this,a)};
g.fg=function(a,b){g.lf.call(this);this.Hb=a||1;this.Fh=b||g.x;this.Ul=(0,g.A)(this.gc,this);this.vn=(0,g.H)()};
g.gg=function(a,b,c){if(g.Ba(a))c&&(a=(0,g.A)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.A)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.x.setTimeout(a,b||0)};
hg=function(a,b){var c=null;return g.Wf(new g.Jf(function(d,e){c=g.gg(function(){d(b)},a);
-1==c&&e(Error("Failed to schedule timer."))}),function(a){g.x.clearTimeout(c);
throw a;})};
ig=function(){return Math.round((0,g.H)()/1E3)};
jg=function(a){var b=window.performance&&window.performance.timing&&window.performance.timing.domLoading&&0<window.performance.timing.domLoading?Math.round(window.performance.timing.domLoading/1E3):null;return null!=b?b:null!=a?a:ig()};
kg=function(){this.l=-1};
lg=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))};
ng=function(a){try{return g.x.JSON.parse(a)}catch(d){var b=d}a=String(a);if(lg(a))try{var c=eval("("+a+")");b&&mg("Invalid JSON: "+a,b);return c}catch(d){}throw Error("Invalid JSON string: "+a);};
g.qg=function(a){var b=[];og(new pg,a,b);return b.join("")};
pg=function(){};
og=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.za(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),og(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),rg(d,c),c.push(":"),og(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":rg(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
rg=function(a,b){b.push('"',a.replace(sg,function(a){var b=tg[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),tg[a]=b);return b}),'"')};
ug=function(a){this.g=a||{cookie:""}};
vg=function(a){a=(a.g.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Jb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.wg=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.yg=function(a){return a.match(xg)};
g.zg=function(a){return a?(0,window.decodeURI)(a):a};
g.Ag=function(a){return g.zg(g.yg(a)[3]||null)};
g.Bg=function(a){return Number(g.yg(a)[4]||null)||null};
Cg=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var k=c[d].substring(0,e);f=c[d].substring(e+1)}else k=c[d];b(k,f?ub(f):"")}};
Dg=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
Eg=function(a,b){return b?a?a+"&"+b:b:a};
Fg=function(a,b){if(!b)return a;var c=Dg(a);c[1]=Eg(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
Gg=function(a,b,c){if(g.za(b))for(var d=0;d<b.length;d++)Gg(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+(0,window.encodeURIComponent)(String(b))))};
Hg=function(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Gg(a[d],a[d+1],c);return c.join("&")};
g.Ig=function(a){var b=[],c;for(c in a)Gg(c,a[c],b);return b.join("&")};
Jg=function(a,b){var c=2==arguments.length?Hg(arguments[1],0):Hg(arguments,1);return Fg(a,c)};
g.Kg=function(a,b){var c=g.Ig(b);return Fg(a,c)};
Lg=function(a,b,c){c=null!=c?"="+(0,window.encodeURIComponent)(String(c)):"";return Fg(a,b+c)};
Mg=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.Pg=function(a,b){for(var c=a.search(Ng),d=0,e,f=[];0<=(e=Mg(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));return f.join("").replace(Og,"$1")};
Qg=function(a,b,c){return Lg(g.Pg(a,b),b,c)};
Rg=function(a,b){var c=Dg(a),d=c[1],e=[];d&&(0,g.G)(d.split("&"),function(a){var c=a.indexOf("=");b.hasOwnProperty(0<=c?a.substr(0,c):a)||e.push(a)});
c[1]=Eg(e.join("&"),g.Ig(b));return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
Sg=function(){this.g={};return this};
Tg=function(a,b){a.g.eb=gc(a.g,"eb",0)|b};
g.Ug=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
Vg=function(a,b){return a==b?!0:a&&b?a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left:!1};
Wg=function(a,b,c){b instanceof g.Zc?(a.left+=b.x,a.right+=b.x,a.top+=b.y,a.bottom+=b.y):(a.left+=b,a.right+=b,g.va(c)&&(a.top+=c,a.bottom+=c));return a};
g.Xg=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Yg=function(a){return new g.Ug(a.top,a.left+a.width,a.top+a.height,a.left)};
g.Zg=function(a,b){return a==b?!0:a&&b?a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height:!1};
g.$g=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),f=Math.min(a.top+a.height,b.top+b.height);if(e<=f)return a.left=c,a.top=e,a.width=d-c,a.height=f-e,!0}return!1};
g.ah=function(a){return new g.bd(a.width,a.height)};
g.bh=function(a){return new g.Zc(a.left,a.top)};
ch=function(){this.g={};this.l=0};
dh=function(a,b){this.B=a;this.o=!0;this.g=b};
fh=function(a,b){dh.call(this,String(a),b);this.A=a;this.g=!!b};
gh=function(a,b){dh.call(this,a,b)};
hh=function(a){if(a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)){a=a.split(".");var b=Number(a[0]),c=Number(a[1]);return new gh("",new g.Xg(c,b,Number(a[3])-c,Number(a[2])-b))}return new gh("",new g.Xg(0,0,0,0))};
jh=function(){ih||(ih=new ch);return ih};
kh=function(a,b){a.g[b.B]=b};
g.mh=function(a,b,c){if(g.w(b))(b=lh(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=lh(c,d);f&&(c.style[f]=e)}};
lh=function(a,b){var c=nh[b];if(!c){var d=Ob(b);c=d;void 0===a.style[d]&&(d=(g.sd?"Webkit":g.oh?"Moz":g.qd?"ms":g.ph?"O":null)+Pb(d),void 0!==a.style[d]&&(c=d));nh[b]=c}return c};
qh=function(a,b){var c=a.style[Ob(b)];return"undefined"!==typeof c?c:a.style[lh(a,b)]||""};
rh=function(a,b){var c=g.ed(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""};
g.sh=function(a,b){return rh(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]};
g.uh=function(a,b,c){if(b instanceof g.Zc){var d=b.x;b=b.y}else d=b,b=c;a.style.left=th(d,!1);a.style.top=th(b,!1)};
vh=function(a){return new g.Zc(a.offsetLeft,a.offsetTop)};
wh=function(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}g.qd&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b};
g.xh=function(a){if(g.qd&&!g.yc(8))return a.offsetParent;var b=g.ed(a),c=g.sh(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=g.sh(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null};
g.zh=function(a){for(var b=new g.Ug(0,window.Infinity,window.Infinity,0),c=g.gd(a),d=c.g.body,e=c.g.documentElement,f=pd(c.g);a=g.xh(a);)if(!(g.qd&&0==a.clientWidth||g.sd&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=g.sh(a,"overflow")){var k=g.yh(a),l=new g.Zc(a.clientLeft,a.clientTop);k.x+=l.x;k.y+=l.y;b.top=Math.max(b.top,k.y);b.right=Math.min(b.right,k.x+a.clientWidth);b.bottom=Math.min(b.bottom,k.y+a.clientHeight);b.left=Math.max(b.left,k.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,
d);b.top=Math.max(b.top,f);c=g.od(g.Td(c)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null};
g.yh=function(a){var b=g.ed(a),c=new g.Zc(0,0);var d=b?g.ed(b):window.document;d=!g.qd||g.yc(9)||g.nd(g.gd(d).g)?d.documentElement:d.body;if(a==d)return c;a=wh(a);b=g.rd(g.gd(b).g);c.x=a.left+b.x;c.y=a.top+b.y;return c};
g.Bh=function(a,b){var c=new g.Zc(0,0),d=td(g.ed(a));if(!rc(d,"parent"))return c;var e=a;do{var f=d==b?g.yh(e):Ah(e);c.x+=f.x;c.y+=f.y}while(d&&d!=b&&d!=d.parent&&(e=d.frameElement)&&(d=d.parent));return c};
g.Dh=function(a,b){var c=g.Ch(a),d=g.Ch(b);return new g.Zc(c.x-d.x,c.y-d.y)};
Ah=function(a){a=wh(a);return new g.Zc(a.left,a.top)};
g.Ch=function(a){if(1==a.nodeType)return Ah(a);a=a.changedTouches?a.changedTouches[0]:a;return new g.Zc(a.clientX,a.clientY)};
g.Fh=function(a,b,c){if(b instanceof g.bd)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");g.Eh(a,b);a.style.height=th(c,!0)};
th=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Eh=function(a,b){a.style.width=th(b,!0)};
g.Hh=function(a){var b=Gh;if("none"!=g.sh(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a};
Gh=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=g.sd&&!b&&!c;return g.t(b)&&!d||!a.getBoundingClientRect?new g.bd(b,c):(a=wh(a),new g.bd(a.right-a.left,a.bottom-a.top))};
g.Ih=function(a,b){a.style.display=b?"":"none"};
g.Jh=function(a,b,c,d){if(/^\d+px?$/.test(b))return(0,window.parseInt)(b,10);var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return+b};
Kh=function(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?g.Jh(a,c,"left","pixelLeft"):0};
g.Lh=function(a){if(g.qd){var b=Kh(a,"paddingLeft"),c=Kh(a,"paddingRight"),d=Kh(a,"paddingTop");a=Kh(a,"paddingBottom");return new g.Ug(d,c,a,b)}b=rh(a,"paddingLeft");c=rh(a,"paddingRight");d=rh(a,"paddingTop");a=rh(a,"paddingBottom");return new g.Ug((0,window.parseFloat)(d),(0,window.parseFloat)(c),(0,window.parseFloat)(a),(0,window.parseFloat)(b))};
Nh=function(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Mh?Mh[c]:g.Jh(a,c,"left","pixelLeft")};
g.Oh=function(a){if(g.qd&&!g.yc(9)){var b=Nh(a,"borderLeft"),c=Nh(a,"borderRight"),d=Nh(a,"borderTop");a=Nh(a,"borderBottom");return new g.Ug(d,c,a,b)}b=rh(a,"borderLeftWidth");c=rh(a,"borderRightWidth");d=rh(a,"borderTopWidth");a=rh(a,"borderBottomWidth");return new g.Ug((0,window.parseFloat)(d),(0,window.parseFloat)(c),(0,window.parseFloat)(a),(0,window.parseFloat)(b))};
Ph=function(a){var b=new g.Xg(-Number.MAX_VALUE/2,-Number.MAX_VALUE/2,Number.MAX_VALUE,Number.MAX_VALUE),c=new g.Xg(0,0,0,0);if(!a||0==a.length)return c;for(var d=0;d<a.length;d++)if(!g.$g(b,a[d]))return c;return b};
Qh=function(a,b){var c=a.getBoundingClientRect(),d=g.Bh(a,b);return new g.Xg(Math.round(d.x),Math.round(d.y),Math.round(c.right-c.left),Math.round(c.bottom-c.top))};
Rh=function(a,b,c){if(b&&c){a:{var d=Math.max(b.left,c.left);var e=Math.min(b.left+b.width,c.left+c.width);if(d<=e){var f=Math.max(b.top,c.top),k=Math.min(b.top+b.height,c.top+c.height);if(f<=k){d=new g.Xg(d,f,e-d,k-f);break a}}d=null}e=d?d.height*d.width:0;f=d?b.height*b.width:0;d=d&&f?Math.round(e/f*100):0;kh(a,new dh("vp",d));d&&0<d?(e=g.Yg(b),f=g.Yg(c),e=e.top>=f.top&&e.top<f.bottom):e=!1;kh(a,new fh(512,e));d&&0<d?(e=g.Yg(b),f=g.Yg(c),e=e.bottom<=f.bottom&&e.bottom>f.top):e=!1;kh(a,new fh(1024,
e));d&&0<d?(e=g.Yg(b),f=g.Yg(c),e=e.left>=f.left&&e.left<f.right):e=!1;kh(a,new fh(2048,e));d&&0<d?(b=g.Yg(b),c=g.Yg(c),c=b.right<=c.right&&b.right>c.left):c=!1;kh(a,new fh(4096,c))}};
Sh=function(a,b){var c=0;g.Zb(td(),"ima","video","client","tagged")&&(c=1);var d=null;a&&(d=a());if(d){var e=d;d=jh();d.g={};var f=new fh(32,!0);f.o=!1;kh(d,f);f=td().document;f=f.webkitVisibilityState||f.mozVisibilityState||f.visibilityState||f.msVisibilityState||"";kh(d,new fh(64,"hidden"!=f.toLowerCase().substring(f.length-6)?!0:!1));try{var k=td().top;try{var l=!!k.location.href||""===k.location.href}catch(u){l=!1}if(l){var m=Ce(e);var n=m&&0!=m.length?"1":"0"}else n="2"}catch(u){n="2"}kh(d,new fh(256,
"2"==n));kh(d,new fh(128,"1"==n));m=l=td().top;"2"==n&&(m=td());k=Qh(e,m);kh(d,new gh("er",k));try{var p=m.document&&!m.document.body?null:g.od(m||window)}catch(u){p=null}p?(m=g.rd(g.gd(m.document).g),kh(d,new fh(16384,!!m)),p=m?new g.Xg(m.x,m.y,p.width,p.height):null):p=null;kh(d,new gh("vi",p));if(p&&"1"==n){n=Ce(e);e=[];for(m=0;m<n.length;m++)(f=Qh(n[m],l))&&e.push(f);e.push(p);p=Ph(e)}Rh(d,k,p);d.l&&(n=ig()-d.l,kh(d,new dh("ts",n)));d.l=ig()}else d=jh(),d.g={},d.l=ig(),kh(d,new fh(32,!1));this.o=
d;this.g=new Sg;this.g.set("ve",4);c&&Tg(this.g,1);g.Zb(td(),"ima","video","client","crossdomainTag")&&Tg(this.g,4);g.Zb(td(),"ima","video","client","sdkTag")&&Tg(this.g,8);g.Zb(td(),"ima","video","client","jsTag")&&Tg(this.g,2);b&&gc(b,"fullscreen",!1)&&Tg(this.g,16);this.l=d=null;if(c&&(c=g.Zb(td(),"ima","video","client"),c.getEData)){this.l=c.getEData();if(c=g.Zb(td(),"ima","video","client","getLastSnapshotFromTop"))if(n=c())this.l.extendWithDataFromTopIframe(n.tagstamp,n.playstamp,n.lactstamp),
c=this.o,d=n.er,n=n.vi,d&&n&&(d=hh(d).getValue(),n=hh(n).getValue(),e=null,gc(c.g,"er",null)&&(e=gc(c.g,"er",null).getValue(),e.top+=d.top,e.left+=d.left,kh(c,new gh("er",e))),gc(c.g,"vi",null)&&(p=gc(c.g,"vi",null).getValue(),p.top+=d.top,p.left+=d.left,l=[],l.push(p),l.push(d),l.push(n),d=Ph(l),Rh(c,e,d),kh(c,new gh("vi",n))));a:{if(this.l){if(this.l.getTagLoadTimestamp){d=this.l.getTagLoadTimestamp();break a}if(this.l.getTimeSinceTagLoadSeconds){d=this.l.getTimeSinceTagLoadSeconds();break a}}d=
null}}this.g.set("td",ig()-jg(d))};
Th=function(a,b){try{var c=new Sh(a,b),d=[],e=Number(c.g.get("eb"));c.g.remove("eb");var f,k=c.g,l=[],m;for(m in k.g)l.push(m+k.g[m]);(f=l.join("_"))&&d.push(f);if(c.l){var n=c.l.serialize();n&&d.push(n)}var p,u=c.o;f=e;k=[];f||(f=0);for(var v in u.g){var C=u.g[v];if(C instanceof fh)C.getValue()&&(f|=C.A);else{var D,E=u.g[v];(D=E.o?E.l():"")&&k.push(v+D)}}k.push("eb"+String(f));(p=k.join("_"))&&d.push(p);c.g.set("eb",e);return d.join("_")}catch(ea){return"tle;"+Db(ea.name,12)+";"+Db(ea.message,40)}};
Uh=function(a,b){this.type=a;this.label=b};
Vh=function(a){new Uh(a,1)};
Wh=function(a){new Uh(a,2)};
Xh=function(a){new Uh(a,3)};
Yh=function(a,b,c,d){if(d)c=a+("&"+b+"="+c);else{var e="&"+b+"=",f=a.indexOf(e);0>f?c=a+e+c:(f+=e.length,e=a.indexOf("&",f),c=0<=e?a.substring(0,f)+c+a.substring(e):a.substring(0,f)+c)}return 2E3<c.length?g.t(void 0)?Yh(a,b,void 0,d):a:c};
Zh=function(a){try{return!!a&&null!=a.location.href&&rc(a,"foo")}catch(b){return!1}};
$h=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
bi=function(a){return(a=ai.exec(a))&&a[0]||""};
di=function(){var a=ci;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec((0,window.decodeURIComponent)(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};
fi=function(a){return a?a.passive&&ei()?a:a.capture||!1:a};
gi=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,fi(d)):a.attachEvent&&a.attachEvent("on"+b,c)};
hi=function(a){a=a||g.x;var b=a.context;if(!b)try{b=a.parent.context}catch(c){}try{if(b&&"pageViewId"in b&&"canonicalUrl"in b)return b}catch(c){}return null};
ii=function(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};
mi=function(){if(ji&&!Zh(ki)){var a="."+li.domain;try{for(;2<a.split(".").length&&!Zh(ki);)li.domain=a=a.substr(a.indexOf(".")+1),ki=window.parent}catch(b){}Zh(ki)||(ki=window)}return ki};
ni=function(a,b,c){a&&null!==b&&b!=b.top&&(b=b.top);try{return(void 0===c?0:c)?(new g.bd(b.innerWidth,b.innerHeight)).round():g.od(b||window).round()}catch(d){return new g.bd(-12245933,-12245933)}};
oi=function(){this.g=0;this.o=!1;this.l=-1;this.Xe=!1};
pi=function(a,b){this.o=a;this.g=null;this.l=b};
qi=function(){this.g={};this.o=!0;this.l={}};
ri=function(a,b){var c=a.g.osd;c&&null===c.g&&g.ac(c.o,b)&&(c.g=b)};
ti=function(a,b){if($b(a.l,b))return a.l[b];if(!a.o)return null;var c=a.g[b];if(c)return c.getValue()};
vi=function(){return(0,g.H)()-ui};
Ai=function(a){var b=0<=wi?vi()-wi:-1,c=xi?vi()-yi:-1,d=0<=zi?vi()-zi:-1;if(79463068==a)return 500;if(947190542==a)return 100;if(79463069==a)return 200;a=[2E3,4E3];var e=[250,500,1E3];var f=b;-1!=c&&c<b&&(f=c);for(b=0;b<a.length;++b)if(f<a[b]){var k=e[b];break}void 0===k&&(k=e[a.length]);return-1!=d&&1500<d&&4E3>d?500:k};
Bi=function(){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[li.webkitVisibilityState||li.mozVisibilityState||li.visibilityState||""]||0};
Ei=function(a){Ci.e=-1;Ci.i=6;Ci.n=7;Ci.t=8;if(!Di){var b=[];$h(Ci,function(a,c){b[a+1]=c});
var c=b.join(""),d=a&&a[c];Di=d&&function(b,c){return d.call(a,b,c)}}return Di};
Fi=function(){this.l=this.o=this.A=this.g=0};
Gi=function(){this.l=[1,.75,.5,.3,0];this.g=(0,g.I)(this.l,function(){return new Fi})};
Ii=function(a,b){return Hi(a,function(a){return a.g},void 0===b?!0:b)};
Ki=function(a,b){return Ji(a,b,function(a){return a.g})};
Li=function(a){return Hi(a,function(a){return a.o},!0)};
Mi=function(a,b){return Ji(a,b,function(a){return a.o})};
Ni=function(a,b){return Ji(a,b,function(a){return a.l})};
Oi=function(a){(0,g.G)(a.g,function(a){a.l=0})};
Hi=function(a,b,c){a=(0,g.I)(a.g,function(a){return b(a)});
return c?a:Pi(a)};
Ji=function(a,b,c){var d=g.Qa(a.l,function(a){return b<=a});
return-1==d?0:c(a.g[d])};
Pi=function(a){return(0,g.I)(a,function(a,c,d){return 0<c?d[c]-d[c-1]:d[c]})};
Qi=function(){this.g=new Gi;this.V=new Fi;this.P=this.F=-1;this.ba=1E3};
Ri=function(a,b){this.l=(void 0===a?0:a)||0;this.g=(void 0===b?"":b)||""};
Si=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
Ti=function(a,b,c){this.g=a;this.l=b;this.o=c};
Ui=function(a,b,c){this.url=a;this.A=b;this.pn=!!c;this.depth=g.va(void 0)?void 0:null};
Xi=function(a){a=a||Vi();for(var b=new Ui(g.x.location.href,g.x,!1),c=null,d=a.length-1,e=d;0<=e;--e){var f=a[e];!c&&Wi.test(f.url)&&(c=f);if(f.url&&!f.pn){b=f;break}}e=null;f=a.length&&a[d].url;0!=b.depth&&f&&(e=a[d]);return new Ti(b,e,c)};
Vi=function(){var a=g.x,b=[],c=null;do{var d=a;if(Zh(d)){var e=d.location.href;c=d.document&&d.document.referrer||null}else e=c,c=null;b.push(new Ui(e||"",d));try{a=d.parent}catch(f){a=null}}while(a&&d!=a);a=0;for(d=b.length-1;a<=d;++a)b[a].depth=d-a;d=g.x;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)e=b[a],e.url||(e.url=d.location.ancestorOrigins[a-1]||"",e.pn=!0);return b};
Yi=function(){this.o="&";this.A=g.t(void 0)?void 0:"trn";this.B=!1;this.l={};this.C=0;this.g=[]};
Zi=function(a,b){var c={};c[a]=b;return[c]};
aj=function(a,b,c,d,e){var f=[];$h(a,function(a,l){var k=$i(a,b,c,d,e);k&&f.push(l+"="+k)});
return f.join(b)};
$i=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],k=0;k<a.length;k++)f.push($i(a[k],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(aj(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};
bj=function(a,b,c,d){a.g.push(b);a.l[b]=Zi(c,d)};
cj=function(a){if(!a.A)return 4E3;var b=1,c;for(c in a.l)b=c.length>b?c.length:b;return 4E3-a.A.length-b-a.o.length-1};
dj=function(a,b,c,d){if(Math.random()<(d||a.g))try{if(c instanceof Yi)var e=c;else e=new Yi,$h(c,function(a,b){var c=e,d=c.C++,f=Zi(b,a);c.g.push(d);c.l[d]=f});
var f=e.wb(a.A,a.l,a.o+b+"&","");f&&ii(g.x,f)}catch(k){}};
g.ej=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};
fj=function(){var a=g.x.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,g.H)()};
gj=function(){var a=g.x.performance;return a&&a.now?a.now():null};
hj=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};
kj=function(){var a=ij;this.events=[];this.o=a||g.x;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=jj()||(null!=b?b:1>Math.random())};
mj=function(a){a&&jj()&&(lj.clearMarks("goog_"+a.uniqueId+"_start"),lj.clearMarks("goog_"+a.uniqueId+"_end"))};
pj=function(){var a=nj;this.o=oj;this.l=!0;this.B=this.g;this.xa=void 0===a?null:a};
sj=function(a){return new qj(rj(a),a.fileName,a.lineNumber)};
rj=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
qj=function(a,b,c){Si.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
vj=function(a,b){return tj.A(a,b,void 0,uj)};
wj=function(a,b,c,d){return tj.C(a,b,c,d)};
xj=function(a,b){tj.g(a,b,void 0,void 0)};
yj=function(a,b,c,d){var e=void 0===e?!1:e;c=wj(d,c);gi(a,b,c,{capture:e});return c};
zj=function(a,b){a&&(a.l&&(b[4]=a.l),a.g&&(b[12]=a.g))};
Aj=function(a){var b=[];g.Sb(a,function(a,d){var c=(0,window.encodeURIComponent)(d),f=a;g.w(f)&&(f=(0,window.encodeURIComponent)(f));b.push(c+"="+f)});
b.push("24="+(0,g.H)());return b.join("\n")};
Bj=function(){var a=g.wd("DIV");a.style.cssText="position:relative;left:0px;top:0px;width:0;height:0;";return a};
Cj=function(a,b,c,d){if(!a)return{value:d,done:!1};d=b(d,a);var e=c(d,a);return!e&&rc(a,"parentElement")?Cj(g.Kd(a),b,c,d):{done:e,value:d}};
Dj=function(a,b,c,d){if(!a)return d;d=Cj(a,b,c,d);if(!d.done)try{var e=g.ed(a),f=e&&td(e);return Dj(f&&f.frameElement,b,c,d.value)}catch(k){}return d.value};
Ej=function(a){var b=!g.qd||g.wc(8);return Dj(a,function(a,d){var c=rc(d,"style")&&d.style&&qh(d,"visibility");return{hidden:"hidden"===c,visible:b&&"visible"===c}},function(a){return a.hidden||a.visible},{hidden:!1,
visible:!1}).hidden};
Fj=function(a){return Dj(a,function(a,c){return!(!rc(c,"style")||!c.style||"none"!==qh(c,"display"))},function(a){return a},!1)?!0:Ej(a)};
Gj=function(a){return new g.Ug(a.top,a.right,a.bottom,a.left)};
Hj=function(a){return null!=a&&0<=a&&1>=a};
Ij=function(a,b){return null===a||null===b?new g.Ug(0,0,0,0):new g.Ug(Math.max(a.top,b.top),Math.min(a.right,b.right),Math.min(a.bottom,b.bottom),Math.max(a.left,b.left))};
Jj=function(a,b){if(!a||!b)return!1;for(var c=0;null!==a&&100>c++;){if(a===b)return!0;try{if(a=g.Kd(a)||a){var d=g.ed(a),e=d&&td(d),f=e&&e.frameElement;f&&(a=f)}}catch(k){break}}return!1};
Kj=function(a,b,c){if(!a||!b)return!1;b=Wg(a.clone(),-b.left,-b.top);a=(b.left+b.right)/2;b=(b.top+b.bottom)/2;var d=mi();Zh(d.top)&&d.top&&d.top.document&&(d=d.top);d=Ei(d&&d.document);if(!d)return!1;a=d(a,b);if(!a)return!1;b=(b=(b=g.ed(c))&&b.defaultView&&b.defaultView.frameElement)&&Jj(b,a);d=a===c;a=!d&&a&&g.Qd(a,function(a){return a===c});
return!(b||d||a)};
Lj=function(a,b,c,d){return 0>=a.Vd()||0>=a.getHeight()?!0:c&&d?vj(208,function(){return Kj(a,b,c)}):!1};
Mj=function(a,b){this.l=null;this.C=a;this.F=b||1};
Nj=function(a,b){var c=b.right-b.left,d=b.bottom-b.top,e=Math.floor(c/2),f=Math.floor(d/2);switch(a.F){case 4:return a.C?(e=Math.floor(.3*c),f=Math.floor(.3*d),[new g.Zc(e,f),new g.Zc(c-e,f),new g.Zc(e,d-f),new g.Zc(c-e,d-f)]):[new g.Zc(e,0),new g.Zc(0,f),new g.Zc(e,d-1),new g.Zc(c-1,f)];case 3:return[new g.Zc(c-1,0),new g.Zc(e,f),new g.Zc(0,d-1)];default:return[new g.Zc(e,f)]}};
Oj=function(a,b){if(void 0===b)try{b=a.l.getBoundingClientRect()}catch(d){b=new g.Ug(0,0,0,0)}var c=Nj(a,b);(0,g.G)(c,function(a){a.x+=b.left;a.y+=b.top});
return c};
Pj=function(a,b,c){this.snapshot=a;this.l=b;this.g=c};
Qj=function(a,b){Mj.call(this,a,b);this.g=[];this.B=!1;this.A=0;this.o=-1};
Tj=function(a,b){var c=b.getBoundingClientRect(),d="DIV"==b.tagName||"INS"==b.tagName,e=g.ed(b),f=!0,k=a.g;if(d){var l=Bj();c=Nj(a,c);Dd(b,l,0);(0,g.G)(c,function(a){var b=new Rj(e);k.push(b);var c;if(c=f)if(b.g){b.g.style.position="absolute";Sj(b,a);a=!0;try{l.appendChild(b.g)}catch(u){a=!1}c=a}else c=!1;f=c})}else c=Oj(a,c),(0,g.G)(c,function(a){var c=new Rj(e);
k.push(c);var d;if(d=f)if(c.g&&b.parentNode){c.g.style.position="fixed";Sj(c,a);a=!0;try{b.parentNode&&b.parentNode.insertBefore(c.g,b.nextSibling)}catch(u){a=!1}d=a}else d=!1;f=d});
f?(a.l=b,a.B=!d&&!1):((0,g.G)(k,function(a){a.remove()}),a.g=[]);
return f};
Uj=function(a){if(a.l&&a.B){var b=Oj(a);(0,g.G)(b,function(a,b){this.g[b]&&Sj(this.g[b],a)},a)}};
Vj=function(a){(0,g.G)(a.g,function(a){a.remove()});
a.g=[]};
ak=function(a){var b=(0,g.H)(),c=a.A?b-a.A:0,d=Na(a.g,function(a){return a.isVisible(b)});
d=4==a.g.length?a.C?Wj[d]:Xj[d]:3==a.g.length?Yj[d]:1==a.g.length?Zj[d]:-1;c=new Pj(d,a.o,c);a.o=d;a.A=b;Uj(a);return c};
Rj=function(a){this.g=null;this.o=this.l=0;bk(this,a)};
bk=function(a,b){var c=(new dd(b)).createElement("IFRAME");c.srcdoc="";c.frameBorder="0";c.style.width="1px";c.style.height="1px";c.style.opacity="0";c.style.zIndex=-999999;a.g=c;var d=wj(245,a.A,a);c.addEventListener("load",wj(244,function(){c.contentWindow.requestAnimationFrame(d)}))};
Sj=function(a,b){a.g&&!$c(b,vh(a.g))&&g.uh(a.g,b)};
dk=function(){this.F=!1;this.I=void 0;this.l=!Zh(L.top);var a=Vi();this.domain=0<a.length&&null!=a[a.length-1]&&null!=a[a.length-1].url?g.Ag(a[a.length-1].url)||"":"";this.A=this.H=this.C=this.g=null;this.L=0;this.o=!1;this.B=null;this.K=0;this.fb="geo";this.Wc=new qi;this.Wc.g.nio2=new pi(ck,!0);this.Wc.g.omid=new pi(ck,!1)};
ek=function(a,b,c,d,e,f){this.time=a;this.l=b;this.volume=void 0===f?null:f;this.A=d;this.g=c;this.o=e};
fk=function(a,b,c,d,e,f){this.C=a;this.A=b;this.g=c;this.o=d;this.l=e;this.B=f};
gk=function(a){this.l=a;this.g=null};
ik=function(){return!hk()&&(Rb("iPod")||Rb("iPhone")||Rb("Android")||Rb("IEMobile"))};
hk=function(){return Rb("iPad")||Rb("Android")&&!Rb("Mobile")||Rb("Silk")};
jk=function(a,b){b=void 0===b?0:b;this.A=a;this.B=[];this.g=new ek(-1,new g.bd(0,0),null,!0,this);this.I=this.l=b;this.H=this.P=!1;this.F="uk";this.U=!1};
kk=function(a,b){g.Ta(a.B,b)||(a.B.push(b),b.oi(a.l),b.ni(a.g),b.zh()&&(a.H=!0))};
mk=function(a){a.H=a.B.length?(0,g.lk)(a.B,function(a){return a.zh()}):!1};
nk=function(a){(0,g.G)(a.B,function(b){b.ni(a.g)})};
ok=function(a){(0,g.G)(a.B,function(b){b.oi(a.l)})};
pk=function(a,b,c,d){this.element=a;this.g=b;this.Wc=c;this.Kj=d;this.A=!1;this.o=new fk(b.Te(),this.element,new g.Ug(0,0,0,0),null,0,0)};
sk=function(a,b,c){this.position=qk.clone();this.yd=0;this.An=this.fk();this.xn=-2;this.QI=(0,g.H)();this.cw=-1;this.Ag=b;this.ng=-1!=b;this.cj=this.Zt=null;this.opacity=-1;this.tv=c;this.tw=this.Bn=g.wa;this.oe=this.element=a;this.Og=null;this.tp=this.Ye=!1;this.qm=1;this.cp=!0;this.Zd=!1;dk.getInstance().L++;this.domain=null;this.tn=0;this.Kb=this.Cm();this.bw=-1;this.Gl=new g.Ug(0,0,0,0);this.Wc=new qi;this.Wc.g.od=new pi(rk,!1);this.Wc.g.opac=new pi(ck,!0)};
tk=function(a,b,c,d,e){if(a.ng){var f=L.innerWidth,k=L.innerHeight,l=new g.Ug(Math.round(L.mozInnerScreenY),Math.round(L.mozInnerScreenX+f),Math.round(L.mozInnerScreenY+k),Math.round(L.mozInnerScreenX));c=new g.Ug(L.screenY+d,L.screenX+c.width,L.screenY+c.height,L.screenX);e||(d=new g.Ug(l.top-c.top,l.right-c.left,l.bottom-c.top,l.left-c.left),d.top>a.position.top?a.position=d:(a.position.right=a.position.left+f,a.position.bottom=a.position.top+k),a.yd=f*k);a.kf(l,c,b,e,!0,!0)}};
wk=function(a,b,c){if(a.ng){var d=Ei(L&&L.document);if(d){c||uk(a,L,!0);if(a.Xe()||a.tp){var e=vk(a,d);d=!0}else e=g.rd(window.document),e=d(Math.floor((a.position.left+a.position.right)/2)-e.x,Math.floor((a.position.top+a.position.bottom)/2)-e.y)?.5:0,d=!1;a.kf(a.position,e,b,c,!0,d)}}};
xk=function(a,b,c){if(c(b))return b;for(;;){var d=Math.floor((a+b)/2);if(d==a||d==b)return a;c(d)?a=d:b=d}};
vk=function(a,b){var c=g.rd(window.document),d=a.qm,e=Math.floor(a.position.left-c.x)+1,f=Math.floor(a.position.top-c.y)+1,k=Math.floor(a.position.right-c.x)-d,l=Math.floor(a.position.bottom-c.y)-d;c=(l-f)*(k-e);if(f>l||e>k)return 0;d=!!b(e,f);var m=!!b(k,l);if(d&&m)return 1;var n=!!b(k,f),p=!!b(e,l);if(d)l=xk(f,l,function(a){return!!b(e,a)}),k=xk(e,k,function(a){return!!b(a,f)});
else if(n)l=xk(f,l,function(a){return!!b(k,a)}),e=xk(k,e,function(a){return!!b(a,f)});
else if(p)f=xk(l,f,function(a){return!!b(e,a)}),k=xk(e,k,function(a){return!!b(a,l)});
else if(m)f=xk(l,f,function(a){return!!b(k,a)}),e=xk(k,e,function(a){return!!b(a,l)});
else{var u=Math.floor((e+k)/2),v=Math.floor((f+l)/2);if(!b(u,v))return 0;f=xk(v,f,function(a){return!!b(u,a)});
l=xk(v,l,function(a){return!!b(u,a)});
e=xk(u,e,function(a){return!!b(a,v)});
k=xk(u,k,function(a){return!!b(a,v)})}return(l-f)*(k-e)/c};
yk=function(a,b,c,d,e){a.ng&&(d||uk(a,L,e),a.kf(a.position,c,b,d,!1,!0))};
zk=function(a,b,c){if(a.ng){var d=c?a.Kb.g:a.tn;a.Gl&&!Vg(a.Gl,new g.Ug(0,0,0,0))&&(d=Wg(a.Gl.clone(),a.position.left,a.position.top));a.kf(a.position,d,b,c,!0,!0)}};
Ak=function(a,b){a.oe?a.fb=b.create(a.oe,a.Wc,a.Kj(),function(){return a.tw(a)}):xj(300,Error("Could not observe; element does not exist."))};
Bk=function(a,b,c){if(a.ng&&a.fb){var d=mi(),e=dk.getInstance();uk(a,d,e.l);a.fb.Xl();d=a.fb.o;e=d.Te().g;if(null!=d.o&&e){var f=d.g;a.Zt=new g.Zc(f.left-e.left,f.top-e.top);a.cj=new g.bd(e.right-e.left,e.bottom-e.top)}a.kf(a.position,d.l,b,c,!0,!0)}};
uk=function(a,b,c,d){if(d)a.position=d;else{b=c?b:b.top;try{var e=qk.clone(),f=new g.Zc(0,0);if(a.oe){var k=1==a.tv;!c&&k&&Fj(a.oe)||(e=a.oe.getBoundingClientRect());f=g.Bh(a.oe,b)}c=f;var l=c.x,m=c.y;a.position=new g.Ug(Math.round(m),Math.round(l+(e.right-e.left)),Math.round(m+(e.bottom-e.top)),Math.round(l))}catch(n){a.position=qk.clone()}}a.yd=(a.position.bottom-a.position.top)*(a.position.right-a.position.left)};
Ck=function(a,b){var c=Math.pow(10,b);return Math.floor(a*c)/c};
Gk=function(a,b){var c=!1,d=a.oe;b.document&&b.document.body&&12==a.tv&&(d=b.document.body);if(null===d)return!1;vj(152,function(){var e=new b.IntersectionObserver(function(c){try{Dk(b,c,a)}catch(k){try{e.unobserve(d),xj("osd_adblock::nioc",k)}catch(l){}}},Ek);
e.observe(d);Fk(d);c=!0});
return c};
Fk=function(a){if(a&&(a=a.style)){var b=a.opacity;a.opacity=.98;a.opacity=.99;a.opacity=b}};
Hk=function(a,b){var c=!1;vj(151,function(){var d=hi(b).PM(function(c){try{Dk(b,c,a)}catch(f){try{d(),xj("osd_adblock::aioc",f)}catch(k){}}});
c=!0});
return c};
Dk=function(a,b,c){if(!b||!b.length||0>=b.length)b=null;else{for(var d=b[0],e=1;e<b.length;e++)b[e].time>d.time&&(d=b[e]);b=d}if(d=b)b=Gj(d.boundingClientRect),e=Gj(d.intersectionRect),c.Kb.g=g.Vc(d.intersectionRect.width*d.intersectionRect.height/(d.boundingClientRect.width*d.boundingClientRect.height),0,1),c.tn=c.Kb.g,uk(c,a,!0,b),a=Ij(b,e),c.Gl=0>=c.yd||a.top>=a.bottom||a.left>=a.right?new g.Ug(0,0,0,0):Wg(a,-b.left,-b.top)};
Ik=function(a,b,c,d){d&&(a.tw=d);switch(c){case "nio":return Gk(a,b);case "aio":return Hk(a,b);case "raf":return a.Zo();case "geo":case "xde":case "iem":return!0}return!1};
Jk=function(){};
Lk=function(a){if(a instanceof Jk)return a;if("function"==typeof a.Me)return a.Me(!1);if(g.Aa(a)){var b=0,c=new Jk;c.next=function(){for(;;){if(b>=a.length)throw Kk;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Mk=function(a,b,c){if(g.Aa(a))try{(0,g.G)(a,b,c)}catch(d){if(d!==Kk)throw d;}else{a=Lk(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Kk)throw d;}}};
Nk=function(a){if(g.Aa(a))return g.bb(a);a=Lk(a);var b=[];g.Mk(a,function(a){b.push(a)});
return b};
Rk=function(a){var b=g.Ok&&0<=g.Lb(g.Pk,9),c=g.Qk&&g.wc(601);return!(void 0===a?0:a)&&(b||c)};
Sk=function(a,b,c){this.l=void 0===c?0:c;this.Jb=a;this.g=null==b?"":b};
Tk=function(a,b){return new Sk(a.Jb,a.g,a.l+b)};
Uk=function(a,b){return a.l<b.l?!0:a.l>b.l?!1:a.Jb<b.Jb?!0:a.Jb>b.Jb?!1:typeof a.g<typeof b.g?!0:typeof a.g>typeof b.g?!1:a.g<b.g};
Vk=function(){this.o=0;this.g=[];this.l=!1};
Wk=function(a){var b=new Vk;var c=void 0===c?0:c;var d=void 0===d?!0:d;$h(a,function(a,f){d&&void 0===a||b.add(f,a,c)});
return b};
Yk=function(a){a.l&&(g.kb(a.g,function(a,c){return Uk(c,a)?1:Uk(a,c)?-1:0}),a.l=!1);
return Xk(a.g,function(a,c){var b="boolean"===typeof c.g;b=""+(b&&!c.g?"":c.Jb)+(b||""===c.g?"":"="+c.g);return""+a+(""!=a&&""!=b?"&":"")+b},"")};
Zk=function(a){$h(a,function(b,c){b instanceof Array&&(a[c]=b.join(","))});
return a};
$k=function(){for(var a=L,b=a,c=0;a&&a!=a.parent;)a=a.parent,c++,Zh(a)&&(b=a);return b};
al=function(a){var b=[],c=[];g.Sb(a,function(a,e){if(!(e in Object.prototype)&&"undefined"!=typeof a){g.za(a)&&(a=a.join(","));var d=[e,"=",a].join("");switch(e){case "adk":case "r":case "tt":case "error":case "mtos":case "tos":case "p":case "bs":case "aio":case "nio":case "iem":b.unshift(d);break;case "req":case "url":case "referrer":case "iframe_loc":c.push(d);break;default:b.push(d)}}});
return b.concat(c)};
bl=function(){this.A=this.g=this.o=this.l=this.B=0};
el=function(){this.g=new bl;var a=td();cl(this,a,window.document);var b=dl();try{if("1"==b){for(var c=a.parent;c!=a.top;c=c.parent)cl(this,c,c.document);cl(this,a.top,a.top.document)}}catch(d){}};
dl=function(){var a=window.document.documentElement;try{if(!Zh(td().top))return"2";var b=[],c=td(a.ownerDocument);for(a=c;a!=c.top;a=a.parent)if(a.frameElement)b.push(a.frameElement);else break;return b&&0!=b.length?"1":"0"}catch(d){return"2"}};
cl=function(a,b,c){yj(c,"mousedown",function(){var b=a.g;1E5<b.o||++b.o},301);
yj(b,"scroll",function(){var b=a.g;1E5<b.g||++b.g},302);
yj(c,"touchmove",function(){var b=a.g;1E5<b.g||++b.g},303);
yj(c,"mousemove",function(){var b=a.g;1E5<b.A||++b.A},304);
yj(c,"keydown",function(){var b=a.g;1E5<b.l||++b.l},305)};
fl=function(){oi.call(this);this.fullscreen=!1;this.volume=void 0;this.paused=!1;this.A=-1};
gl=function(a){return Hj(a.volume)&&.1<=a.volume};
hl=function(){var a={};this.o=(a.vs=[1,0],a.vw=[0,1],a.am=[2,2],a.a=[4,4],a.f=[8,8],a.bm=[16,16],a.b=[32,32],a.avw=[0,64],a.cm=[128,128],a.pv=[256,256],a.gdr=[0,512],a.p=[0,1024],a.r=[0,2048],a.m=[0,4096],a.um=[0,8192],a.ef=[0,16384],a.s=[0,32768],a.pmx=[0,16777216],a);this.l={};for(var b in this.o)0<this.o[b][1]&&(this.l[b]=0);this.A=0};
jl=function(a){return il(a,g.Yb(a.o))};
il=function(a,b){var c=0,d;for(d in a.l)g.Ta(b,d)&&1==a.l[d]&&(c+=a.o[d][1],a.l[d]=2);return c};
kl=function(a){var b=0,c;for(c in a.l){var d=a.l[c];if(1==d||2==d)b+=a.o[c][1]}return b};
ll=function(){this.g=[]};
ml=function(a,b){return g.Ta(a.g,b)};
nl=function(){this.g=this.l=0};
ol=function(){Qi.call(this);this.l=new Fi;this.R=this.I=this.L=0;this.H=-1;this.fa=new Fi;this.B=new Fi;this.o=new Gi;this.C=this.A=-1;this.K=new Fi;this.ba=2E3;this.U=new nl;this.X=new nl;this.aa=new nl};
pl=function(a,b,c){var d=a.R;xi||c||-1==a.H||(d+=b-a.H);return d};
ql=function(){this.g=!1};
rl=function(a,b){this.g=!1;this.B=a;this.F=b;this.l=0};
sl=function(a,b){if(a.A(b)){var c=a.F.g(a.B,b);a.l|=c;return 0==c}return!1};
tl=function(a,b,c,d,e,f){e=void 0===e?null:e;f=void 0===f?[]:f;sk.call(this,b,c,d);this.X=0;this.o={};this.Ub=new hl;this.hs={};this.uc="";this.Sf=null;this.uw=!1;this.l=[];this.C=!1;this.ti=e;this.F=f;this.A=void 0;this.B=-1;this.P=this.nb=void 0;this.ba=!1;this.L=this.U=0;this.V=-1;this.sa=this.Ma=!1;this.Jh=this.Za=0;this.wa=!1;this.Ta=this.Ua=-1;this.R=this.I=this.g=0;this.bb=this.ia=-1;this.Wa=0;this.Ra=new Gi;this.aa=this.rb=this.fa=0;this.Ha=-1;this.Ga=0;this.K=!1;this.ma=null;this.Ka=this.up=
!1;this.ya=g.wa;this.H=[this.fk()];this.Ya=!1;this.tp=!0;this.qm=2;b=dk.getInstance();uk(this,a,b.l);this.Wg={};this.Wg.pause="p";this.Wg.resume="r";this.Wg.skip="s";this.Wg.mute="m";this.Wg.unmute="um";this.Wg.exitfullscreen="ef"};
ul=function(a,b,c){a.up=!0;a.o={};a.o.firstquartile=!1;a.o.midpoint=!1;a.o.thirdquartile=!1;a.o.complete=!1;a.o.pause=!1;a.o.skip=!1;a.o.viewable_impression=!1;a.X=0;c||(a.Lc().H=b)};
vl=function(a){return g.t(a)?Number(a)?Ck(a,3):0:a};
wl=function(a,b){(0,g.lk)(a.F,function(a){return a.o()&&a.getId()==b.getId()})||a.F.push(b)};
xl=function(a,b,c){return 15E3<=b?!0:a.Ma?(void 0===c?0:c)?!0:-1!=a.B?b>=a.B/2:-1!=a.V?b>=a.V:!1:!1};
yl=function(a){var b={},c=dk.getInstance();b.insideIframe=c.l;b.unmeasurable=a.Ye;b.position=a.position;b.exposure=a.Kb.g;b.documentSize=c.A;b.viewportSize=c.g;return b};
Al=function(a,b){zl(a.l,b,function(){return{dJ:0,uk:void 0}});
a.l[b]={viewableArea:Ck(a.Kb.g,2),instantaneousState:a.Ub.A}};
zl=function(a,b,c){for(var d=a.length;d<b+1;)a.push(c()),d++};
Cl=function(a,b,c){var d=a.hs[b];if(null!=d)return d;g.Ta(Bl,b)?d=!0:(d=a.o[b],g.t(d)?(a.o[b]=!0,d=!d):d=!1);c=a.jk(d,d,c);"fully_viewable_audible_half_duration_impression"==b&&(c.std="csm",c.ic=il(a.Ub,["gdr"]));return c};
Dl=function(a){if(a.Zd)return 1;var b=L.screen.width*L.screen.height;return 0>=b?-1:Math.min(a.yd*a.Kb.g/b,1)};
El=function(a){this.B=!1;this.g=a};
Fl=function(){this.g=this.l=null};
Gl=function(a,b){function c(c,e){a.g=null;b(c,e)}
if(null==a.l)return!1;a.g=g.Pa(a.l,function(a){return null!=a&&a.Qh()&&a.init(c)});
return null!=a.g};
g.Hl=function(a,b,c){g.J.call(this);this.o=null!=c?(0,g.A)(a,c):a;this.Hb=b;this.l=(0,g.A)(this.Xy,this);this.g=[]};
Il=function(a){a.xa=g.gg(a.l,a.Hb);a.o.apply(null,a.g)};
Jl=function(){this.g=this.A=null;this.o=0;this.l=null};
Kl=function(){this.g=[];this.o=[];this.done=!1;this.l={jy:0,Sp:0,Ro:0,Lq:0,cn:-1};this.P=this.F=this.K=this.H=this.L=null;this.U=!1;this.B=null;this.I=0;this.C=hk()||ik();this.R=0;this.A=new gk(this)};
Ll=function(){var a=dk.getInstance().fb;return"nio"==a||"aio"==a};
Ol=function(){var a=Ml;if(!a.U){a.U=!0;var b=g.x.requestAnimationFrame||g.x.webkitRequestAnimationFrame||g.x.mozRequestAnimationFrame||g.x.oRequestAnimationFrame||g.x.msRequestAnimationFrame;if(!a.L&&!Ll()){if(b){var c=wj(136,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];return a.Qm.apply(a,[].concat(g.qa(c)))});
var d=function(){b(function(){L.setTimeout(c,0)})}}else d=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.Qm.apply(a,[].concat(g.qa(c)))};
d=wj(137,d);a.H=new g.Hl(d,100);a.L=yj(L,"scroll",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];null!==a.H&&a.H.gh.apply(a.H,[].concat(g.qa(c)))},138)}if(!a.K&&!Ll()){if(b){var e=wj(139,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.Yr.apply(a,[].concat(g.qa(c)))});
d=function(){b(function(){L.setTimeout(e,0)})}}else d=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.Yr.apply(a,[].concat(g.qa(c)))};
d=wj(140,d);a.F=new g.Hl(d,100);a.K=yj(L,"resize",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];null!==a.F&&a.F.gh.apply(a.F,[].concat(g.qa(c)))},141)}Nl(a,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.zr.apply(a,[].concat(g.qa(c)))});
a.zr()}};
Ql=function(a){var b=a.C,c=dk.getInstance();b&&!c.o&&"exc"!=c.fb&&Pl(a,!0);b=new Jl;switch(c.fb){case "xde":var d=a.I;Pl(a,!1);a=dk.getInstance();var e=a.H,f=e.height-d;0>=f&&(f=e.height,d=0);a.g=new g.bd(e.width,f);f=new Jl;f.A=a.g;f.g=e;f.o=d;return f;case "geo":a:{c=c.g;b=new Jl;b.A=c;if(null!=c&&-12245933!=c.width&&-12245933!=c.height){var k=dk.getInstance();if(k.o)d=k.B;else try{k=L;e=a.C;k=k.top;f=c||ni(!0,k,void 0===e?!1:e);var l=g.rd(g.gd(k.document).g);if(-12245933==f.width){var m=f.width;
var n=new g.Ug(m,m,m,m)}else n=new g.Ug(l.y,l.x+f.width,l.y+f.height,l.x);d=n}catch(p){a=b;break a}b.l=d}a=b}return a;default:return b}};
Rl=function(a,b,c,d){if(!a.done)if(a.A.cancel(),0==b.length)c||a.A.schedule();else{a.B=null;var e=Ql(a),f=dk.getInstance();try{var k=vi();if(null!=Fl.getInstance().g)for(d=0;d<b.length;d++)Bk(b[d],k,c);else switch(f.fb){case "exc":for(d=0;d<b.length;d++)zk(b[d],k,c);break;case "nis":for(e=0;e<b.length;e++)g.t(d)?b[e].Cl(d):b[e].Xr(k);break;case "gsv":for(e=0;e<b.length;e++)g.t(d)?b[e].tr(d):b[e].Wr(k);break;case "aio":case "nio":for(d=0;d<b.length;d++)zk(b[d],k,c);break;case "xde":if(e.g)for(d=0;d<
b.length;d++)tk(b[d],k,e.g,e.o,c);break;case "iem":for(d=0;d<b.length;d++)wk(b[d],k,c);break;case "raf":(0,g.G)(b,function(a){if(c)a.Og&&(a.Og.o=3,a.Kb.g=0);else if(a.Og){var b=ak(a.Og),d=[0,0,0,0,0,.01,.5,1,.01,.3],e=d[b.snapshot+1];a.Kb.g=d[b.l+1];a.kf(a.position,e,a.Ag+b.g,!1,!0,!1);a.Kf()&&1!=a.re()&&!a.cp&&a.Og&&Vj(a.Og)}});
break;case "geo":if(e.l)for(d=0;d<b.length;d++)yk(b[d],k,e.l,c,f.l)}a.l.Ro+=vi()-k;++a.l.Lq}finally{c?(0,g.G)(b,function(a){a.Kb.g=0}):a.A.schedule()}}};
Nl=function(a,b){var c;li.mozVisibilityState?c="mozvisibilitychange":li.webkitVisibilityState?c="webkitvisibilitychange":li.visibilityState&&(c="visibilitychange");c&&(a.P=a.P||yj(li,c,b,142))};
Sl=function(a){var b=dk.getInstance().Wc,c=[];ti(b,"nio2")||c.push(a.TI);c.push(a.UI,a.SI,a.RI);return c};
Ul=function(){var a=Ml;var b=void 0===b?Sl(a):b;b=g.q(b);for(var c=b.next();!c.done;c=b.next())if(c.value.call(a,L))return!0;(0,g.G)(a.o,function(b){b.Ye=!0;b.o(Tl(a),"goog_update_data","i")});
return!1};
Wl=function(a){if(Vl(a))return!0;var b=Bi();a=1===b;b=0===b;return dk.getInstance(),a||b};
Xl=function(a,b){return null!=b&&(0,g.lk)(a.g,function(a){return a.element==b})};
Yl=function(a){return g.Pa(Ml.g,function(b){return b.uc==a})};
Zl=function(a){return 0==a.g.length?a.o:0==a.o.length?a.g:g.ab(a.o,a.g)};
Pl=function(a,b){var c=a.C,d=dk.getInstance(),e,f=Fl.getInstance();null!=f.g&&(e=f.g.g);d.g=e?e.Te().l:d.o?d.B?(new g.bd(d.B.Vd(),d.B.getHeight())).round():new g.bd(0,0):ni(!0,L,c);if(!b){d.H=L&&L.outerWidth?new g.bd(L.outerWidth,L.outerHeight):new g.bd(-12245933,-12245933);var k=void 0===k?L:k;null!==k&&k!=k.top&&(k=k.top);e=c=0;f=dk.getInstance().g;try{var l=k.document,m=l.body,n=l.documentElement;if("CSS1Compat"==l.compatMode&&n.scrollHeight)c=n.scrollHeight!=f.height?n.scrollHeight:n.offsetHeight,
e=n.scrollWidth!=f.width?n.scrollWidth:n.offsetWidth;else{var p=n.scrollHeight,u=n.scrollWidth,v=n.offsetHeight,C=n.offsetWidth;n.clientHeight!=v&&(p=m.scrollHeight,u=m.scrollWidth,v=m.offsetHeight,C=m.offsetWidth);p>f.height?p>v?(c=p,e=u):(c=v,e=C):p<v?(c=p,e=u):(c=v,e=C)}var D=new g.bd(e,c)}catch(E){D=new g.bd(-12245933,-12245933)}d.A=D}};
$l=function(){var a=dk.getInstance();L.screen&&(a.C=new g.bd(L.screen.width,L.screen.height))};
Tl=function(a){if(!a.B){var b=L.document,c=0<=wi?vi()-wi:-1,d=vi();-1==a.l.cn&&(c=d);var e=dk.getInstance(),f=e.Wc,k={},l;for(l in f.g)if(f.g.hasOwnProperty(l)){var m="";void 0!==f.l[l]?m=String(f.l[l]):f.o&&(m=f.g[l],m=m.l&&null!==m.g?String(m.g):"");0<m.length&&(k[l]=m)}f=Zl(a);try{if(0<f.length){var n=e.g;n&&(k.bs=[n.width,n.height]);var p=e.H;p&&(k.bos=[p.width,p.height]);var u=e.A;u&&(k.ps=[u.width,u.height]);L.screen&&(k.ss=[L.screen.width,L.screen.height])}else k.url=(0,window.encodeURIComponent)(L.location.href.substring(0,
1024)),b.referrer&&(k.referrer=(0,window.encodeURIComponent)(b.referrer.substring(0,512)));k.tt=c;k.pt=wi;switch(dk.getInstance().fb){case "xde":k.xde=1;break;case "iem":k.iem=1;break;case "aio":k.aio=1;break;case "nio":k.nio=1}k.deb=[1,a.l.jy,a.l.Sp,a.l.Ro,a.l.Lq,a.l.cn].join("-");k.tvt=am(a,d);if(null!==L&&L!=L.top){0<f.length&&(k.iframe_loc=(0,window.encodeURIComponent)(L.location.href.substring(0,512)));var v=ni(!1,L,a.C);k.is=[v.width,v.height]}}catch(C){k.error=1}a.B=k}return al(g.hc(a.B))};
cm=function(a,b){var c=bm(b,"raf",Zl(a));c&&(dk.getInstance().fb="raf");return c};
bm=function(a,b,c){var d=!1;(0,g.G)(c,function(c){Ik(c,a,b,void 0)&&(d=!0)});
return d};
dm=function(a){var b=Ml,c=[];(0,g.G)(a,function(a){Xl(b,a.element)||(b.g.push(a),c.push(a))})};
em=function(a){var b=Ml,c=[];(0,g.G)(a,function(a){null==g.Pa(b.g,function(b){return b.element==a.element&&!0})&&(b.g.push(a),c.push(a))})};
am=function(a,b){var c=a.R;xi&&(c+=b-yi);return c};
Vl=function(a){return(0,g.lk)(Zl(a),function(a){return a.Zd})};
fm=function(){var a=g.Qb;return a?(0,g.lk)("AppleTV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;OMI/".split(";"),function(b){return Eb(a,b)})?!0:Eb(a,"Presto")&&Eb(a,"Linux")&&!Eb(a,"X11")&&!Eb(a,"Android")&&!Eb(a,"Mobi"):!1};
gm=function(a){if(!a)return"";var b=[];b.push("url="+(0,window.encodeURIComponent)(a.location.href.substring(0,512)));a.document&&a.document.referrer&&b.push("referrer="+(0,window.encodeURIComponent)(a.document.referrer.substring(0,512)));return b.join("&")};
hm=function(a){return function(b){return!g.t(b[a])&&g.t(0)?0:b[a]}};
jm=function(){var a=[0,2,4];return function(b){b=b.tos;if(g.za(b)){for(var c=Array(b.length),d=0;d<b.length;d++)c[d]=0<d?c[d-1]+b[d]:b[d];return g.t(a)?im(c,a):c}}};
km=function(a,b){return function(c){c=c[a];if(g.za(c))return im(c,b)}};
mm=function(a){var b=lm;return function(c){return b(c)?c[a]:void 0}};
im=function(a,b){return(0,g.Gd)(a,function(a,d){return g.Ta(b,d)})};
nm=function(a,b){rl.call(this,a,b)};
om=function(){this.l=this.A=this.C=this.B=this.o=this.g=""};
pm=function(){};
qm=function(a,b,c,d,e){var f={};if(g.t(a))if(null!=b)for(var k in b){var l=b[k];k in Object.prototype||null!=l&&(g.Ba(l)?f[k]=l(a):f[k]=a[l])}else g.kc(f,a);g.t(c)&&g.kc(f,c);a=Yk(Wk(Zk(f)));0<a.length&&g.t(d)&&g.t(e)&&(e=e(a),a+="&"+d+"="+e);return a};
rm=function(){};
sm=function(a,b,c,d,e){pk.call(this,a,b,c,d,e);this.l=new g.Ug(0,0,0,0)};
um=function(a){a=tm(a);El.call(this,a.length?a[a.length-1]:null);this.o=a;this.A=g.wa;this.l=null};
tm=function(a){if(!a.length)return[];a=(0,g.Gd)(a,function(a){return null!=a&&a.Qh()});
for(var b=1;b<a.length;b++)kk(a[b-1],a[b]);return a};
vm=function(){jk.call(this,L,1);this.C=new Ri(0,"");this.V=4;this.o=[];this.ba=[];this.K=0;this.R=!1;this.aa=this.X=0;this.L=""};
wm=function(a,b){var c=0,d=a.A;try{if(d&&d.Goog_AdSense_getAdAdapterInstance)return d}catch(e){}for(;d&&5>c;){try{if(d.google_osd_static_frame)return d}catch(e){}try{if(d.aswift_0&&(!b||d.aswift_0.google_osd_static_frame))return d.aswift_0}catch(e){}c++;d=d!=d.parent?d.parent:null}return null};
xm=function(a,b,c,d,e,f){e=void 0===e?!1:e;f=void 0===f?"":f;var k={};zj(c,k);k[0]="goog_request_monitoring";k[6]=b;k[27]=a.A.document.domain;k[16]=e;f&&f.length&&(k[19]=f);try{var l=Aj(k);d.postMessage(l,"*")}catch(m){}};
zm=function(a,b,c,d,e,f){d=void 0===d?!1:d;e=void 0===e?"":e;f=void 0===f?function(){return null}:f;
++a.aa;2==a.K?ym(a):10<a.aa?(a.F="no",ym(a),f()):a.A.postMessage?c.Nc()?(f=wm(a,!0))&&xm(a,b,c,f,d,e):(a.F="ib",ym(a),f()):(a.F="c",ym(a),f())};
ym=function(a){a.A.clearInterval(a.X)};
Am=function(a,b){(0,g.G)(a.o,function(a){a.A(b)})};
Em=function(a,b){(0,g.G)(a.o,function(a){a.o(b)})};
Fm=function(a,b){(0,g.G)(a.o,function(a){a.l(b)})};
Gm=function(a,b){(0,g.G)(a.o,function(a){a.H(b)})};
Hm=function(a,b){(0,g.G)(a.o,function(a){a.g(b)})};
Im=function(a,b,c){(0,g.G)(a.o,function(a){a.B(b,c)})};
Jm=function(a,b){(0,g.G)(a.o,function(a){a.F(b)})};
Km=function(a){(0,g.G)(a.o,function(a){a.C()})};
Lm=function(a,b){(0,g.G)(a.ba,function(a){a(b)})};
Mm=function(){this.A=this.I=!1;this.o=null;this.l=new rm;this.g=null;var a={};this.L=(a.start=this.Dz,a.firstquartile=this.xz,a.midpoint=this.zz,a.thirdquartile=this.Ez,a.complete=this.vz,a.pause=this.Uu,a.resume=this.Bz,a.skip=this.Cz,a.viewable_impression=this.Ef,a.mute=this.Hh,a.unmute=this.Hh,a.fullscreen=this.yz,a.exitfullscreen=this.wz,a.fully_viewable_audible_half_duration_impression=this.Ef,a.measurable_impression=this.Ef,a.abandon=this.Uu,a.engagedview=this.Ef,a.impression=this.Ef,a.creativeview=
this.Ef,a.progress=this.Hh,a.custom_metric_viewable=this.Ef,a);a={};this.P=(a.overlay_resize=this.Az,a.abandon=this.Vm,a.close=this.Vm,a.collapse=this.Vm,a.overlay_unmeasurable_impression=function(a){return Cl(a,"overlay_unmeasurable_impression",Wl(Ml))},a.overlay_viewable_immediate_impression=function(a){return Cl(a,"overlay_viewable_immediate_impression",Wl(Ml))},a.overlay_unviewable_impression=function(a){return Cl(a,"overlay_unviewable_impression",Wl(Ml))},a.overlay_viewable_end_of_session_impression=
function(a){return Cl(a,"overlay_viewable_end_of_session_impression",Wl(Ml))},a);
dk.getInstance().K=3};
Nm=function(a,b,c,d){a.g||(a.g=a.Dq());c=d?c:-1;return null==a.g||a.A?new tl(L,b,c,7):new tl(L,b,c,7,new rl("measurable_impression",a.g),a.Hm())};
Rm=function(a){if(!a.I){a.I=!0;try{var b=vi(),c=dk.getInstance();wi=b;Om=$k();Pl(Ml,!1);$l();if("nis"!=c.fb&&"gsv"!=c.fb)if(L.document.body&&L.document.body.getBoundingClientRect){Ml.l.Sp=0;Ml.l.cn=vi()-b;var d=ll.getInstance();c.Wc.g.osd=new pi(ck,!0);var e=ml(d,370204015);ri(c.Wc,e?1:0);b=[];if(e&&c.l&&c.o&&"exc"!=c.fb){c.o=!1;var f=[vm.getInstance()];b.push(new um(f))}var k=Fl.getInstance();k.l=b;if(Gl(k,function(){c.o=!1;Pm()}))Ml.done||Ol();
else if(!c.l&&Rk()&&cm(Ml,L))Ol();else if(c.l&&"exc"!=c.fb)if(c.o&&!e){var l=vm.getInstance();kk(l,a);l.initialize()}else Pm();else Ol()}else Qm=!0}catch(m){throw Ml.reset(),m;}}};
Sm=function(a){var b=dk.getInstance();if(null==a.o)switch(b.fb){case "nis":a.o="n";break;case "gsv":a.o="m";break;default:a.o="h"}return a.o};
Tm=function(a,b,c){if(null==a.g)return b.Jh|=4,!1;a=a.g.g(c,b);b.Jh|=a;return 0==a};
Pm=function(){Ul()?Ol():(Ml.A.cancel(),Um="i",Ml.done=!0)};
Vm=function(a,b,c){if(!b.uw){var d=Cl(b,"start",Wl(Ml));a=a.l.g(d).g;d=Om||L;var e=[];e.push("v=644v");e.push("r="+c);e.push(a);e.push(gm(d));c=("//pagead2.googlesyndication.com/pagead/gen_204?id=lidarvf&"+e.join("&")).toString();c=c.substring(0,2E3);a=mi()||L;ii(a,c);b.uw=!0}};
Wm=function(a,b,c,d){Rl(Ml,[a],!Wl(Ml),d);Al(a,c);b=Cl(a,b,Wl(Ml));4!=c&&zl(a.H,c,a.fk);return b};
Xm=function(a,b,c){if(!b.up){"i"!=Um&&(Ml.done=!1);var d=Fl.getInstance();null!=d.g&&Ak(b,d.g);Ik(b,L,dk.getInstance().fb,function(b){if(b){b.Ye=!0;switch(b.re()){case 1:Vm(a,b,"fp");break;case 2:a.Mo(b)}a.To(b)}});
d=g.t(c)?c.opt_nativeTime:void 0;zi=d=g.va(d)?d:vi();b.ng=!0;var e=Wl(Ml);ul(b,d,e);Rl(Ml,[b],!e,c)}};
Ym=function(a,b){if(g.w(b)){if(1==a)var c=Ml.g;else if(2==a)c=Ml.o;else return;var d=g.Oa(c,function(c){return c.re()!=a?!1:c.uc==b});
0<=d&&g.Xa(c,d)}};
$m=function(a,b,c,d){var e=g.Pa(Ml.g,function(a){return a.element==c});
null!==e&&e.uc!=b&&(Ym(1,e.uc),e=null);e||(e=Zm(a,c),e.uc=b,e.A=Sm(a),d&&(e.Sf=d));return e};
Zm=function(a,b){var c=Nm(a,b,vi(),!1);c.Bn=(0,g.A)(a.Tm,a);0==Ml.o.length&&(dk.getInstance().I=79463069);em([c]);Ol();return c};
cn=function(a,b){var c={sv:"644",cb:"j"};c.nas=Ml.g.length;c.msg=a;if(g.t(b)){var d=an(b);d&&(c.e=bn[d])}return c};
an=function(a){var b=a.toLowerCase();return bc(dn,function(a){return a==b})};
gn=function(a,b){b.I=0;for(var c in en)null==a[c]&&(b.I|=en[c]);fn(a,"currentTime");fn(a,"duration")};
fn=function(a,b){var c=a[b];g.t(c)&&(a[b]=Math.floor(1E3*c))};
hn=function(){this.g=void 0;this.l=!1;this.o=0;this.A=-1;this.B="tos"};
ln=function(a){try{var b=a.split(",");return b.length>g.Yb(jn).length?null:Xk(b,function(a,b){var c=b.toLowerCase().split("=");if(2!=c.length||!g.t(kn[c[0]])||!kn[c[0]](c[1]))throw Error("Entry ("+c[0]+", "+c[1]+") is invalid.");a[c[0]]=c[1];return a},{})}catch(c){return null}};
mn=function(a,b){if(void 0==a.g)return 0;switch(a.B){case "mtos":return a.l?Mi(b.o,a.g):Mi(b.g,a.g);case "tos":return a.l?Ki(b.o,a.g):Ki(b.g,a.g)}return 0};
nn=function(a,b,c,d){rl.call(this,b,d);this.Aa=a;this.C=c};
on=function(a){rl.call(this,"fully_viewable_audible_half_duration_impression",a)};
pn=function(a){return!a||"function"!==typeof a||0>String(Function.prototype.toString).indexOf("[native code]")?!1:0<=String(a).indexOf("[native code]")&&!0||!1};
rn=function(a){return!!(1<<a&qn)};
wn=function(){try{sn()}catch(d){}var a="a=1&b="+qn+"&",b=[],c=99;(0,g.G)(tn,function(a,c){var d=!1;try{d=a(L)}catch(k){}b[c/32>>>0]|=d<<c%32});
(0,g.G)(b,function(b,e){a+=String.fromCharCode(c+e)+"="+(b>>>0).toString(16)+"&"});
c=105;(0,g.G)(un,function(b){var d="false";try{d=b(L)}catch(f){}a+=String.fromCharCode(c++)+"="+d+"&"});
(0,g.G)(vn,function(b){var d="";try{var f=b(L);d=g.ae(g.Wd(f),!0)}catch(k){}a+=String.fromCharCode(c++)+"="+d+"&"});
return a.slice(0,-1)};
sn=function(){if(!xn){var a=function(){yn=!0;L.document.removeEventListener("webdriver-evaluate",a,!0)};
L.document.addEventListener("webdriver-evaluate",a,!0);var b=function(){zn=!0;L.document.removeEventListener("webdriver-evaluate-response",b,!0)};
L.document.addEventListener("webdriver-evaluate-response",b,!0);xn=!0}};
An=function(){this.l=64;this.g=Array(4);this.B=Array(this.l);this.A=this.o=0;this.reset()};
Bn=function(a,b,c){c||(c=0);var d=Array(16);if(g.w(b))for(var e=0;16>e;++e)d[e]=b.charCodeAt(c++)|b.charCodeAt(c++)<<8|b.charCodeAt(c++)<<16|b.charCodeAt(c++)<<24;else for(e=0;16>e;++e)d[e]=b[c++]|b[c++]<<8|b[c++]<<16|b[c++]<<24;b=a.g[0];c=a.g[1];e=a.g[2];var f=a.g[3];var k=b+(f^c&(e^f))+d[0]+3614090360&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[1]+3905402710&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[2]+606105819&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^
b))+d[3]+3250441966&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[4]+4118548399&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[5]+1200080426&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[6]+2821735955&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[7]+4249261313&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[8]+1770035416&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[9]+2336552879&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+
(c^f&(b^c))+d[10]+4294925233&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[11]+2304563134&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[12]+1804603682&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[13]+4254626195&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[14]+2792965006&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[15]+1236535329&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(e^f&(c^e))+d[1]+4129170786&4294967295;b=c+(k<<5&4294967295|
k>>>27);k=f+(c^e&(b^c))+d[6]+3225465664&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[11]+643717713&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[0]+3921069994&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(e^f&(c^e))+d[5]+3593408605&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[10]+38016083&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[15]+3634488961&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[4]+3889429448&4294967295;c=e+(k<<20&4294967295|
k>>>12);k=b+(e^f&(c^e))+d[9]+568446438&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[14]+3275163606&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[3]+4107603335&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[8]+1163531501&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(e^f&(c^e))+d[13]+2850285829&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[2]+4243563512&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[7]+1735328473&4294967295;e=f+(k<<14&4294967295|
k>>>18);k=c+(f^b&(e^f))+d[12]+2368359562&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(c^e^f)+d[5]+4294588738&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[8]+2272392833&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[11]+1839030562&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[14]+4259657740&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[1]+2763975236&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[4]+1272893353&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^
b^c)+d[7]+4139469664&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[10]+3200236656&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[13]+681279174&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[0]+3936430074&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[3]+3572445317&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[6]+76029189&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[9]+3654602809&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[12]+3873151461&4294967295;
f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[15]+530742520&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[2]+3299628645&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(e^(c|~f))+d[0]+4096336452&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[7]+1126891415&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[14]+2878612391&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[5]+4237533241&4294967295;c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[12]+1700485571&4294967295;b=c+
(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[3]+2399980690&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[10]+4293915773&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[1]+2240044497&4294967295;c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[8]+1873313359&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[15]+4264355552&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[6]+2734768916&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[13]+1309151649&4294967295;
c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[4]+4149444226&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[11]+3174756917&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[2]+718787259&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[9]+3951481745&4294967295;a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+(e+(k<<21&4294967295|k>>>11))&4294967295;a.g[2]=a.g[2]+e&4294967295;a.g[3]=a.g[3]+f&4294967295};
Cn=function(){this.l=null};
Dn=function(a){return function(b){var c=new An;c.update(b+a);return Xd(c.digest()).slice(-8)}};
En=function(a,b){this.o=a;this.A=b};
Fn=function(a){var b=bc(dn,function(b){return b==a});
return bn[b]};
Gn=function(a,b,c){En.call(this,a,b);this.B=c};
Hn=function(a,b){this.g=a;this.depth=b};
Jn=function(a){function b(a,b){return null==a?b:a}
var c=a||Vi();a=Math.max(c.length-1,0);var d=Xi(c);c=d.g;var e=d.l,f=d.o,k=[];f&&k.push(new Hn([f.url,f.pn?2:0],b(f.depth,1)));e&&e!=f&&k.push(new Hn([e.url,2],0));c.url&&c!=f&&k.push(new Hn([c.url,0],b(c.depth,a)));d=(0,g.I)(k,function(a,b){return k.slice(0,k.length-b)});
!c.url||(f||e)&&c!=f||(e=bi(c.url))&&d.push([new Hn([e,1],b(c.depth,a))]);d.push([]);return(0,g.I)(d,g.B(In,a))};
In=function(a,b){(0,g.Kn)(b,function(a){return 0<=a.depth});
var c=Xk(b,function(a,b){return Math.max(a,b.depth)},-1),d=qb(c+2);
d[0]=a;(0,g.G)(b,function(a){return d[a.depth+1]=a.g});
return d};
Ln=function(){var a=Jn();return(0,g.I)(a,function(a){return $i(a)})};
Mn=function(){Mm.call(this);this.C=void 0;this.B=this.K=null;this.F=!1;this.H={};this.l=new Cn;var a=ll.getInstance();(ml(a,509445015)||ml(a,509445017))&&"exc"!=dk.getInstance().fb&&(this.F=!0,this.K=new el)};
Nn=function(a,b,c){c=c.opt_configurable_tracking_events;if(null!=a.g&&g.za(c)){var d=a.g;(0,g.G)(c,function(a){var c=(0,g.I)(a.HM,function(a){var b=ln(a);if(null==b)a=null;else if(a=new hn,null!=b.visible&&(a.g=b.visible/100),null!=b.audible&&(a.l=1==b.audible),null!=b.time){var c="mtos"==b.timetype?"mtos":"tos",d=sb(b.time,"%")?"%":"ms";b=(0,window.parseInt)(b.time,10);"%"==d&&(b/=100);"ms"==d?(a.o=b,a.A=-1):(a.o=-1,a.A=b);a.B=void 0===c?"tos":c}return a});
(0,g.lk)(c,function(a){return null==a})||wl(b,new nn(a.id,a.event,c,d))})}};
On=function(a,b,c,d){d=Nm(a,null,d,!0);d.A=c;d.Bn=function(b){a.Tm(b)};
dm([d]);d.uc=b;return d};
Pn=function(a,b,c){var d=Yl(b);d||(d=c.opt_nativeTime||-1,d=On(a,b,Sm(a),d),c.opt_osdId&&(d.Sf=c.opt_osdId));return d};
Qn=function(a,b,c){var d=Yl(b);d||(d=On(a,b,"n",c.opt_nativeTime||-1),d.K=dk.getInstance().F);return d};
Rn=function(a,b){var c=Yl(b);c||(c=On(a,b,"h",-1));return c};
Sn=function(a){var b=dk.getInstance();switch(Sm(a)){case "b":return"ytads.bulleit.triggerExternalActivityEvent";case "n":return"ima.bridge.triggerExternalActivityEvent";case "h":if("exc"==b.fb)return"ima.bridge.triggerExternalActivityEvent";case "m":case "ml":return"ima.common.triggerExternalActivityEvent"}return null};
Vn=function(a,b,c,d){c=void 0===c?{}:c;var e={};g.kc(e,{opt_adElement:void 0,opt_fullscreen:void 0},c);if(e.opt_bounds)return a.l.g(cn("ol",d));if(g.t(d))if(c=an(d),g.t(c))if(Qm)d=cn("ue",d);else if(b=a.ik(b,e))b:{Rm(a);"i"==Um&&(b.Ye=!0,a.To(b));c=e.opt_fullscreen;g.t(c)&&(b.Zd=!!c);Eb(g.Qb,"CrKey")||Eb(g.Qb,"PlayStation")||Eb(g.Qb,"Roku")||fm()||Eb(g.Qb,"Xbox")?c=!1:(c=dk.getInstance().fb,c=L&&L.g||"nis"===c||"gsv"===c?!1:0===Bi());var f=c;if(f){switch(b.re()){case 1:Vm(a,b,"pv");break;case 2:a.Mo(b)}Ml.A.cancel();
Um="pv";Ml.done=!0}c=d.toLowerCase();!f&&g.Ta(Tn,c)&&Xm(a,b,e);b.up&&g.Ta(Un,c)&&!b.Ye&&!a.A&&b.ti&&(f=b.ti,f.g||(f.g=sl(f,b)));(f=b.Wg[c])&&b.Ub.g(f);switch(b.re()){case 1:var k=a.L[c];break;case 2:k=a.P[c]}if(k&&(d=k.call(a,b,e,d),g.t(d))){e=cn(void 0,c);g.kc(e,d);d=e;break b}d=void 0}else d=cn("nf",d);else d=void 0;else d=a.jk(b,e);if(d){if(e=a.B)e=a.B,k={},k=(k.ptlt=e.B,k),(b=e.l)&&(k.pnk=b),(b=e.o)&&(k.pnc=b),(b=e.A)&&(k.pnmm=b),(e=e.g)&&(k.pns=e),e=k;g.kc(d,e||{})}return a.l.g(d)};
Wn=function(a,b,c){a=dk.getInstance();if(a.F!=b){a.F=b;var d=(0,g.lk)(Ml.g,function(a){return a.Ka});
(0,g.G)(Ml.g,function(a){b||d||(a.Ag=c);a.K=b;a.Ka=!1})}};
Yn=function(a,b){var c;if(b.Sf&&Xn(a)){var d=a.H[b.Sf];d?c=function(a,b){d.o(a,b)}:null!==d&&xj("lidar::missingPlayerCallback",Error())}else c=g.z("ima.common.triggerViewabilityMeasurementUpdate");
if(g.Ba(c)){var e=yl(b);e.nativeVolume=a.C;a.F&&(e.userActivity=a.B);c(b.uc,e)}};
Xn=function(a){return"exc"==dk.getInstance().fb||"h"!=Sm(a)&&Sm(a),!1};
Zn=function(a){var b={};return b.viewability=a.g,b.googleViewability=a.o,b.moatInit=a.B,b.moatViewability=a.C,b.integralAdsViewability=a.A,b.doubleVerifyViewability=a.l,b};
$n=function(a,b,c){c=void 0===c?{}:c;a=Vn(Mn.getInstance(),b,c,a);return Zn(a)};
ao=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
bo=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=n=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var n=l^d&(f^l);var p=1518500249}else n=d^f^l,p=1859775393;else 60>c?(n=d&f|l&(d|f),p=2400959708):(n=d^f^l,p=3395469782);n=((a<<5|a>>>27)&4294967295)+n+m+p+b[c]&4294967295;m=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=n}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64;for(;d<c;)if(f[n++]=a[d++],p++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64}
function d(){var a=[],d=8*p;56>n?c(l,56-n):c(l,64-(n-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var n,p;a();return{reset:a,update:c,digest:d,yy:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
eo=function(a,b,c){var d=[],e=[];if(1==(g.za(c)?2:1))return e=[b,a],(0,g.G)(d,function(a){e.push(a)}),co(e.join(" "));
var f=[],k=[];(0,g.G)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ua(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.G)(d,function(a){e.push(a)});
a=co(e.join(" "));a=[c,a];g.Ua(k)||a.push(k.join(""));return a.join("_")};
co=function(a){var b=bo();b.update(a);return b.yy().toLowerCase()};
g.fo=function(){var a=[],b=ao(String(g.x.location.href)),c=g.x.__OVERRIDE_SID;null==c&&(c=(new ug(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.x.__SAPISID:g.x.__APISID,null==b&&(b=(new ug(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.x.location.href);return d&&b&&c?[c,eo(ao(d),b,a||null)].join(" "):null}return null};
g.go=function(a,b){this.l={};this.g=[];this.eg=this.va=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof g.go?(c=a.jd(),d=a.Vb()):(c=g.Yb(a),d=g.Xb(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};
io=function(a){if(a.va!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];ho(a.l,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.va!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],ho(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}};
ho=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.jo=function(a,b){this.g=this.H=this.A="";this.B=null;this.C=this.l="";this.F=!1;var c;a instanceof g.jo?(this.F=g.t(b)?b:a.F,g.ko(this,a.A),this.H=a.H,g.lo(this,a.g),g.mo(this,a.B),this.l=a.l,no(this,a.o.clone()),this.C=a.C):a&&(c=g.yg(String(a)))?(this.F=!!b,g.ko(this,c[1]||"",!0),this.H=oo(c[2]||""),g.lo(this,c[3]||"",!0),g.mo(this,c[4]),this.l=oo(c[5]||"",!0),no(this,c[6]||"",!0),this.C=oo(c[7]||"")):(this.F=!!b,this.o=new g.po(null,this.F))};
g.ko=function(a,b,c){a.A=c?oo(b,!0):b;a.A&&(a.A=a.A.replace(/:$/,""))};
g.lo=function(a,b,c){a.g=c?oo(b,!0):b;return a};
g.mo=function(a,b){if(b){b=Number(b);if((0,window.isNaN)(b)||0>b)throw Error("Bad port number "+b);a.B=b}else a.B=null;return a};
no=function(a,b,c){b instanceof g.po?(a.o=b,qo(a.o,a.F)):(c||(b=ro(b,so)),a.o=new g.po(b,a.F))};
g.to=function(a,b,c){a.o.set(b,c);return a};
g.uo=function(a){return a instanceof g.jo?a.clone():new g.jo(a,void 0)};
oo=function(a,b){return a?b?(0,window.decodeURI)(a.replace(/%25/g,"%2525")):(0,window.decodeURIComponent)(a):""};
ro=function(a,b,c){return g.w(a)?(a=(0,window.encodeURI)(a).replace(b,vo),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null};
vo=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};
g.po=function(a,b){this.va=this.g=null;this.l=a||null;this.o=!!b};
wo=function(a){a.g||(a.g=new g.go,a.va=0,a.l&&Cg(a.l,function(b,c){a.add(ub(b),c)}))};
yo=function(a,b){wo(a);b=xo(a,b);return ho(a.g.l,b)};
g.zo=function(a,b,c){a.remove(b);0<c.length&&(a.l=null,a.g.set(xo(a,b),g.bb(c)),a.va=a.va+c.length)};
xo=function(a,b){var c=String(b);a.o&&(c=c.toLowerCase());return c};
qo=function(a,b){b&&!a.o&&(wo(a),a.l=null,a.g.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(this.remove(b),g.zo(this,c,a))},a));
a.o=b};
g.Ao=function(a){g.J.call(this);this.l=a;this.g={}};
Bo=function(a,b,c,d,e,f){if(g.za(c))for(var k=0;k<c.length;k++)Bo(a,b,c[k],d,e,f);else{b=Te(b,c,d||a.handleEvent,e,f||a.l||a);if(!b)return a;a.g[b.key]=b}return a};
g.Co=function(a){g.Sb(a.g,function(a,c){this.g.hasOwnProperty(c)&&g.ff(a)},a);
a.g={}};
g.Eo=function(a,b){return a.replace(Do,function(a,d){try{var c=gc(b,d);if(null==c)return a;c=c.toString();if(""==c||!g.tb(g.Hb(c)))return(0,window.encodeURIComponent)(c).replace(/%2C/g,",")}catch(f){}return a})};
Fo=function(a){g.Ge.call(this,a)};
Go=function(a){this.g=a};
Io=function(){var a=Ho();a:{if($b(a.g,"disableExperiments")&&(a=a.g.disableExperiments,g.ua(a)))break a;a=!1}return a};
Jo=function(a){if($b(a.g,"forceExperimentIds")){a=a.g.forceExperimentIds;var b=[],c=0;g.za(a)&&(0,g.G)(a,function(a){g.va(a)&&(b[c++]=a)});
return b}return null};
Ko=function(){this.l=null;try{Jn(void 0)}catch(a){}};
Ho=function(){var a=Lo;if(null==a.l){var b={},c=(new g.jo(td().location.href)).o;if(yo(c,"tcnfp"))try{b=JSON.parse(c.get("tcnfp"))}catch(d){}a.l=new Go(b)}return a.l};
Mo=function(a,b,c){this.Aa=a;this.g=g.Vc(b||0,0,1);this.l=null!=c?c:!0};
No=function(a){this.Aa=a;this.l=new g.go;this.Ze=this.g=null};
Oo=function(a){var b=Math.random(),c=0,d=a.l.Vb();(0,g.G)(d,function(a){c+=a.g},a);
var e=1<c?c:1;a.g=null;for(var f=0,k=0;k<d.length;++k)if(f+=d[k].g,f/e>=b){a.g=d[k];break}};
So=function(){this.l=null!=g.x.G_testRunner;this.g=new g.go;Lo.g()||(Po(this,"GvnExternalLayer",31061774,.01),Po(this,"GvnExternalLayer",31061775,.01),Po(this,"GvnExternalLayer",41351088,.01),Po(this,"GvnExternalLayer",41351089,.01),Po(this,"GvnExternalLayer",420706008,.05),Po(this,"GvnExternalLayer",420706009,.05),Po(this,"GvnExternalLayer",41351073,.01),Po(this,"GvnExternalLayer",41351074,.01),Po(this,"GvnExternalLayer",41351075,.01),Po(this,"GvnExternalLayer",634360101,0),Po(this,"GvnExternalLayer",
634360102,0),Po(this,"GvnExternalLayer",21592080,.1),Po(this,"GvnExternalLayer",21592081,.1),Po(this,"GvnExternalLayer",21592082,.01),Po(this,"GvnExternalLayer",413051059,.05),Po(this,"GvnExternalLayer",413051060,.05),Po(this,"GvnExternalLayer",324123E3,.05),Po(this,"GvnExternalLayer",324123001,.05),Po(this,"GvnExternalLayer",420706068,.01),Po(this,"GvnExternalLayer",420706069,.01),Po(this,"GvnExternalLayer",324123020,.01),Po(this,"GvnExternalLayer",324123021,.01),Rk(!1)&&(Zh(L.top)?(Po(this,"ActiveViewExternalLayer",
509445010,.01),Po(this,"ActiveViewExternalLayer",509445011,.01)):(Po(this,"ActiveViewExternalLayer",509445012,.01),Po(this,"ActiveViewExternalLayer",509445013,.01))),Po(this,"ActiveViewExternalLayer",509445016,.01),Po(this,"ActiveViewExternalLayer",509445017,.01));Qo(this);var a=Ho();a=Jo(a);null!=a&&(this.l=!1,Ro(this,a.map(String)))};
Uo=function(){To||(To=new So);return To};
Po=function(a,b,c,d){g.tb(g.Hb(b))||(0,window.isNaN)(c)||0>=c||(c=new Mo(c,d),Vo(a,b).l.set(c.getId(),c))};
Qo=function(a){Io()||(0,g.G)(a.g.Vb(),function(a){Oo(a)},a)};
Ro=function(a,b){(0,g.G)(b,function(a){var b=Number(a);a="FORCED_PUB_EXP_LAYER_"+a;(0,window.isNaN)(b)||0>=b||g.tb(g.Hb(a))||(Vo(this,a).g=new Mo(b,0,!0))},a)};
Wo=function(a,b){return a.l?!1:(0,g.lk)(a.g.Vb(),function(a){return!!a.g&&a.g.getId()==b})};
Xo=function(){var a=Uo();if(a.l)return"";var b=[];(0,g.G)(a.g.Vb(),function(a){(a=a.g)&&a.l&&b.push(a.getId())});
return b.sort().join(",")};
Vo=function(a,b){var c=a.g.get(b);null==c&&(c=new No(b),a.g.set(b,c));return c};
$o=function(a){try{var b=(new g.jo(a)).g;b=b.replace(/^www./i,"");return(0,g.lk)(Yo,function(a){return Zo(a,b)})}catch(c){return!1}};
Zo=function(a,b){if(g.tb(g.Hb(b)))return!1;a=a.toLowerCase();b=b.toLowerCase();return"*."==a.substr(0,2)?(a=a.substr(2),a.length>b.length?!1:b.substr(-a.length)==a&&(b.length==a.length||"."==b.charAt(b.length-a.length-1))):a==b};
ap=function(a,b){return(new RegExp("^https?://([a-z0-9-]{1,63}\\.)*("+b.join("|").replace(/\./g,"\\.")+")(:[0-9]+)?([/?#]|$)","i")).test(a)};
ep=function(a){try{a:{var b=a,c=void 0,d=b.length-11-2;if(!(-1==b.indexOf("URL_SIGNALS")||2048<=d||!c&&!window.Goog_AdSense_Lidar_getUrlSignalsArray)){c=c||window.Goog_AdSense_Lidar_getUrlSignalsArray();d={};for(var e=0;e<c.length;++e){d.URL_SIGNALS=c[e];var f=g.Eo(b,d);if(2048>f.length){a=f;break a}}}a=b}}catch(n){}try{f=a;b=!1;ap(f,bp)?b=!1:null!=f&&$o(f)?b=!0:"https:"==window.location.protocol&&(ap(f,cp)||Lo.g())&&(b=!0);if(b){var k=new g.jo(f);"https"==k.A?a=f:(g.ko(k,"https"),a=k.toString())}else a=
f;var l=Uo(),m=!Lo.g()||Wo(l,41351089);k=!1;Lo.g()||!Wo(Uo(),634360102)||(k=!0);dp.zI(a,m,k)}catch(n){}};
fp=function(a){return(a=a.exec(g.Qb))?a[1]:""};
g.hp=function(a){return 0<=g.Lb(gp,a)};
g.kp=function(a,b,c){g.va(a)?(this.date=ip(a,b||0,c||1),jp(this,c||1)):g.Ca(a)?(this.date=ip(a.getFullYear(),a.getMonth(),a.getDate()),jp(this,a.getDate())):(this.date=new Date((0,g.H)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),jp(this,a))};
ip=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
jp=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))};
lp=function(){this.g=null;this.o="";this.l=null};
np=function(){var a="h."+mp.o;null!=mp.l&&(a+="/n."+mp.l,null!=mp.g&&(a+="/"+mp.g));return a};
op=function(){this.l=.01>Math.random();this.o=Math.floor(4503599627370496*Math.random())};
qp=function(a,b){b.id="ima_html5";var c=pp();b.c=a.o;b.domain=c.g;return b};
pp=function(){var a=td(),b=window.document;return new g.jo(a.parent==a?a.location.href:b.referrer)};
rp=function(){g.lf.call(this);this.g=new g.go;this.l=null;this.da=new g.Ao(this);g.K(this,this.da);this.A=null;this.o=-1};
tp=function(){null!=sp||(sp=new rp);return sp};
up=function(a,b){var c={};c.queryId=a;c.viewabilityString=b;tp().dispatchEvent(new Fo("measurable_impression",null,c))};
vp=function(a,b){var c={};c.queryId=a;c.viewabilityString=b;tp().dispatchEvent(new Fo("viewable_impression",null,c))};
wp=function(a,b,c){var d={};d.queryId=a;d.viewabilityString=b;d.eventName=c;tp().dispatchEvent(new Fo("externalActivityEvent",null,d))};
xp=function(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")};
yp=function(){g.lf.call(this);this.g=null;this.da=new g.Ao(this);g.K(this,this.da);this.C=new g.go;this.B=new g.go;this.l=!1;this.o=null};
Ap=function(){null!=zp||(zp=new yp);return zp};
Bp=function(a){if(g.Ba(window.Goog_AdSense_Lidar_getUrlSignalsArray)){var b={};b.pageSignals=window.Goog_AdSense_Lidar_getUrlSignalsArray();a.g.send("activityMonitor","pageSignals",b)}};
Cp=function(a,b,c){var d=b?a.B.get(b):Lo.o;a={};null!=c&&(a.fullscreen=c);c="";try{c=Th(function(){return d},a)}catch(e){c="sdktle;"+Db(e.name,12)+";"+Db(e.message,40)}return c};
g.Dp=function(){};
g.Ep=function(a,b){var c=a.g(b);return-1==(0==c?null:c)?"rtl":"ltr"};
Fp=function(){throw Error("Do not instantiate directly");};
Gp=function(){Fp.call(this)};
Ip=function(a,b){var c="key_"+a+":"+b,d=Hp[c];if(void 0===d||0>d)Hp[c]=0;else if(0==d)throw Error('Encountered two active delegates with the same priority ("'+a+":"+b+'").');};
g.Jp=function(a){if(a.classList)return a.classList;a=a.className;return g.w(a)&&a.match(/\S+/g)||[]};
g.Kp=function(a,b){return a.classList?a.classList.contains(b):g.Ta(g.Jp(a),b)};
g.M=function(a,b){a.classList?a.classList.add(b):g.Kp(a,b)||(a.className+=0<a.className.length?" "+b:b)};
g.Lp=function(a,b){if(a.classList)(0,g.G)(b,function(b){g.M(a,b)});
else{var c={};(0,g.G)(g.Jp(a),function(a){c[a]=!0});
(0,g.G)(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}};
g.N=function(a,b){a.classList?a.classList.remove(b):g.Kp(a,b)&&(a.className=(0,g.Gd)(g.Jp(a),function(a){return a!=b}).join(" "))};
g.Mp=function(a,b){a.classList?(0,g.G)(b,function(b){g.N(a,b)}):a.className=(0,g.Gd)(g.Jp(a),function(a){return!g.Ta(b,a)}).join(" ")};
g.O=function(a,b,c){c?g.M(a,b):g.N(a,b)};
g.Np=function(a,b){var c=!g.Kp(a,b);g.O(a,b,c)};
Op=function(){if(!g.qd)return!1;try{return new window.ActiveXObject("MSXML2.DOMDocument"),!0}catch(a){return!1}};
g.Qp=function(a){if("undefined"!=typeof window.DOMParser)return(new window.DOMParser).parseFromString(a,"application/xml");if(Pp){var b=new window.ActiveXObject("MSXML2.DOMDocument");b.resolveExternals=!1;b.validateOnParse=!1;try{b.setProperty("ProhibitDTD",!0),b.setProperty("MaxXMLSize",2048),b.setProperty("MaxElementDepth",256)}catch(c){}b.loadXML(a);return b}throw Error("Your browser does not support loading xml documents");};
g.Rp=function(a,b,c){g.J.call(this);this.Aa=null;this.o=!1;this.B=a;this.A=c;this.g=b||window;this.l=(0,g.A)(this.Uy,this)};
Sp=function(a){a=a.g;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null};
Tp=function(a){a=a.g;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};
g.P=function(a,b,c){g.J.call(this);this.g=a;this.Hb=b||0;this.l=c;this.o=(0,g.A)(this.lr,this)};
g.Up=function(a,b){a.isActive()||a.start(b)};
g.Vp=function(a){a.stop();a.lr()};
g.Wp=function(a){a.isActive()&&g.Vp(a)};
g.Xp=function(){};
g.Yp=function(a){return":"+(a.g++).toString(36)};
g.Zp=function(a){g.lf.call(this);this.U=a||g.gd();this.Aa=null;this.vg=!1;this.l=null;this.B=void 0;this.C=this.H=this.I=null};
$p=function(a,b){a.H&&(0,g.G)(a.H,b,void 0)};
g.aq=function(a){if(g.x.JSON)try{return g.x.JSON.parse(a)}catch(b){}return ng(a)};
bq=function(){};
cq=function(){};
dq=function(a,b,c,d,e,f,k,l){this.g=a;this.F=b;this.o=c;this.B=d;this.A=e;this.C=f;this.l=k;this.H=l};
eq=function(a,b){if(0==b)return a.g;if(1==b)return a.l;var c=Xc(a.g,a.o,b),d=Xc(a.o,a.A,b),e=Xc(a.A,a.l,b);c=Xc(c,d,b);d=Xc(d,e,b);return Xc(c,d,b)};
fq=function(a,b){var c=(b-a.g)/(a.l-a.g);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,k=0;8>k;k++){f=eq(a,c);var l=(eq(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(k=0;1E-6<Math.abs(f-b)&&8>k;k++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=eq(a,c);return c};
gq=function(){this.g=this.o=this.A=5E3};
g.hq=function(a,b,c,d,e,f){a=a.clone();b=b.clone();var k=0;if(d||0!=c)c&4?a.x-=b.width+(d?d.right:0):c&2?a.x-=b.width/2:d&&(a.x+=d.left),c&1?a.y-=b.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){k=a;c=b;d=0;65==(f&65)&&(k.x<e.left||k.x>=e.right)&&(f&=-2);132==(f&132)&&(k.y<e.top||k.y>=e.bottom)&&(f&=-5);k.x<e.left&&f&1&&(k.x=e.left,d|=1);if(f&16){var l=k.x;k.x<e.left&&(k.x=e.left,d|=4);k.x+c.width>e.right&&(c.width=Math.min(e.right-k.x,l+c.width-e.left),c.width=Math.max(c.width,0),d|=4)}k.x+c.width>
e.right&&f&1&&(k.x=Math.max(e.right-c.width,e.left),d|=1);f&2&&(d|=(k.x<e.left?16:0)|(k.x+c.width>e.right?32:0));k.y<e.top&&f&4&&(k.y=e.top,d|=2);f&32&&(l=k.y,k.y<e.top&&(k.y=e.top,d|=8),k.y+c.height>e.bottom&&(c.height=Math.min(e.bottom-k.y,l+c.height-e.top),c.height=Math.max(c.height,0),d|=8));k.y+c.height>e.bottom&&f&4&&(k.y=Math.max(e.bottom-c.height,e.top),d|=2);f&8&&(d|=(k.y<e.top?64:0)|(k.y+c.height>e.bottom?128:0));e=d}else e=256;k=e}e=new g.Xg(0,0,0,0);e.left=a.x;e.top=a.y;e.width=b.width;
e.height=b.height;return{rect:e,status:k}};
g.iq=function(a){g.J.call(this);this.Jb=1;this.o=[];this.A=0;this.g=[];this.l={};this.B=!!a};
jq=function(a,b,c){g.Df(function(){a.apply(b,c)})};
g.mq=function(a){this.g=a};
nq=function(a){this.g=a};
oq=function(a){this.data=a};
pq=function(a){return!g.t(a)||a instanceof oq?a:new oq(a)};
qq=function(a){this.g=a};
g.rq=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.H)()||!!b&&b>(0,g.H)()};
g.sq=function(a){this.g=a};
tq=function(){};
uq=function(){};
vq=function(a){this.g=a};
wq=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a};
xq=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.g=a};
yq=function(a,b){this.l=a;this.g=b+"::"};
g.zq=function(a){var b=new wq;return b.isAvailable()?a?new yq(b,a):b:null};
Aq=function(a,b){this.Jb=a;this.g=b};
Bq=function(a){this.g=[];if(a)a:{if(a instanceof Bq){var b=a.jd();a=a.Vb();if(0>=this.Sd()){for(var c=this.g,d=0;d<b.length;d++)c.push(new Aq(b[d],a[d]));break a}}else b=g.Yb(a),a=g.Xb(a);for(d=0;d<b.length;d++)Cq(this,b[d],a[d])}};
Cq=function(a,b,c){var d=a.g;d.push(new Aq(b,c));b=d.length-1;a=a.g;for(c=a[b];0<b;)if(d=b-1>>1,a[d].Jb>c.Jb)a[b]=a[d],b=d;else break;a[b]=c};
Dq=function(){Bq.call(this)};
Eq=function(a,b){var c="script";c=void 0===c?"":c;var d=a.createElement("link");d.rel="preload";d.href=Eb("preload","stylesheet")?Fc(b):b instanceof Ec?Fc(b):b instanceof Ic?g.Jc(b):Nc(b).Df();c&&(d.as=c);(c=a.getElementsByTagName("head")[0])&&c.appendChild(d)};
Hq=function(a){return Fq.test(a)&&!Gq.test(a)};
Jq=function(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+(0,window.encodeURIComponent)(g.x.location.hostname)];Iq[3]>=(0,g.H)()&&b.push("adsid="+(0,window.encodeURIComponent)(Iq[1]));return a+"?"+b.join("&")};
Mq=function(){Kq=g.x;Iq=Kq.googleToken=Kq.googleToken||{};var a=(0,g.H)();Iq[1]&&Iq[3]>a&&0<Iq[2]||(Iq[1]="",Iq[2]=-1,Iq[3]=-1,Iq[4]="",Iq[6]="");Lq=Kq.googleIMState=Kq.googleIMState||{};Hq(Lq[1])||(Lq[1]=".google.com");g.za(Lq[5])||(Lq[5]=[]);g.ua(Lq[6])||(Lq[6]=!1);g.za(Lq[7])||(Lq[7]=[]);g.va(Lq[8])||(Lq[8]=0)};
Nq=function(){Mq();return Iq[1]};
Pq=function(a){Mq();var b=Kq.googleToken[5]||0;a&&(0!=b||Iq[3]>=(0,g.H)()?Oq.aq(a):(Oq.Xq().push(a),Oq.Lo()));Iq[3]>=(0,g.H)()&&Iq[2]>=(0,g.H)()||Oq.Lo()};
Qq=function(a){g.x.processGoogleToken=g.x.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",k="NT"==f,l=(0,window.parseInt)(b.freshLifetimeSecs||"",10),m=(0,window.parseInt)(b.validLifetimeSecs||"",10);k&&!m&&(m=3600);var n=b["1p_jar"]||"";b=b.pucrd||"";Mq();1==e?Oq.jI():Oq.iI();if(!f&&Oq.shouldRetry())Hq(".google.com")&&(Lq[1]=".google.com"),Oq.Lo();else{var p=Kq.googleToken=Kq.googleToken||{},u=0==e&&f&&g.w(f)&&!k&&g.va(l)&&0<l&&g.va(m)&&0<m&&
g.w(n);k=k&&!Oq.Am()&&(!(Iq[3]>=(0,g.H)())||"NT"==Iq[1]);var v=!(Iq[3]>=(0,g.H)())&&0!=e;if(u||k||v)k=(0,g.H)(),l=k+1E3*l,m=k+1E3*m,1E-5>Math.random()&&ii(g.x,"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e),p[5]=e,p[1]=f,p[2]=l,p[3]=m,p[4]=n,p[6]=b,Mq();if(u||!Oq.Am()){e=Oq.Xq();for(f=0;f<e.length;f++)Oq.aq(e[f]);e.length=0}}};
Pq(a)};
Rq=function(a,b){this.B=[];this.P=a;this.L=b||null;this.A=this.g=!1;this.o=void 0;this.I=this.U=this.F=!1;this.C=0;this.l=null;this.H=0};
Tq=function(a,b,c){a.g=!0;a.o=c;a.A=!b;Sq(a)};
Vq=function(a){if(a.g){if(!a.I)throw new Uq(a);a.I=!1}};
Wq=function(a,b,c){a.B.push([b,c,void 0]);a.g&&Sq(a)};
Xq=function(a){return(0,g.lk)(a.B,function(a){return g.Ba(a[1])})};
Sq=function(a){if(a.C&&a.g&&Xq(a)){var b=a.C,c=Yq[b];c&&(g.x.clearTimeout(c.Aa),delete Yq[b]);a.C=0}a.l&&(a.l.H--,delete a.l);b=a.o;for(var d=c=!1;a.B.length&&!a.F;){var e=a.B.shift(),f=e[0],k=e[1];e=e[2];if(f=a.A?k:f)try{var l=f.call(e||a.L,b);g.t(l)&&(a.A=a.A&&(l==b||a.isError(l)),a.o=b=l);if(Hf(b)||"function"===typeof g.x.Promise&&b instanceof g.x.Promise)d=!0,a.F=!0}catch(m){b=m,a.A=!0,Xq(a)||(c=!0)}}a.o=b;d&&(l=(0,g.A)(a.K,a,!0),d=(0,g.A)(a.K,a,!1),b instanceof Rq?(Wq(b,l,d),b.U=!0):b.then(l,
d));c&&(b=new Zq(b),Yq[b.Aa]=b,a.C=b.Aa)};
Uq=function(){La.call(this)};
$q=function(){La.call(this)};
Zq=function(a){this.Aa=g.x.setTimeout((0,g.A)(this.l,this),0);this.g=a};
ar=function(a){ue(this,a,null)};
br=function(a,b){for(;le(b)&&4!=b.l;)switch(b.o){case 1:var c=oe(b);ye(a,1,c);break;case 2:c=oe(b);ye(a,2,c);break;default:me(b)}return a};
dr=function(a){ue(this,a,cr)};
er=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.gr=function(a){er(g.fr,arguments)};
g.hr=function(a,b){return a in g.fr?g.fr[a]:b};
ir=function(){};
jr=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Q(b)}}:a};
g.Q=function(a,b,c,d,e){var f=g.z("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.hr("ERRORS",[]),f.push([a,b,c,d,e]),g.gr("ERRORS",f))};
kr=function(a){g.Q(a,"WARNING",void 0,void 0,void 0)};
mr=function(){if(!lr)return null;var a=lr();return"open"in a?a:null};
g.nr=function(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.or=function(a,b){g.Ba(a)&&(a=jr(a));return window.setTimeout(a,b)};
g.pr=function(a,b){g.Ba(a)&&(a=jr(a));return window.setInterval(a,b)};
g.qr=function(a){window.clearTimeout(a)};
g.rr=function(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=ub(e[0]||"");e=ub(e[1]||"");f in b?g.za(b[f])?cb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.sr=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return g.rr(a)};
tr=function(a){a=a.split(",");return a=a.map(function(a){return g.sr(a)})};
g.ur=function(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),g.sr(1<a.length?a[1]:a[0])):{}};
g.wr=function(a,b){return vr(a,b||{},!0)};
g.xr=function(a,b){return vr(a,b||{},!1)};
vr=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.sr(e[1]||"");for(var f in b)if(c||!$b(e,f))e[f]=b[f];return g.Kg(a,e)+d};
yr=function(a){if(!b)var b=window.location.href;var c=g.yg(a)[1]||null,d=g.Ag(a);c&&d?(a=g.yg(a),b=g.yg(b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.Ag(b)==d&&g.Bg(b)==g.Bg(a):!0;return a};
zr=function(a){a||(a=window.document.location.href);a=g.yg(a)[1]||null;return null!==a&&"https"==a};
Ar=function(a){a=g.Ag(a);a=null===a?null:a.split(".").reverse();return null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:-nocookie)?$/)?!0:!1};
Cr=function(a,b){b=void 0===b?{}:b;var c=yr(a),d;for(d in Br){var e=g.hr(Br[d]),f;if((f=e)&&!(f=c)){f=d;var k=g.hr("CORS_HEADER_WHITELIST")||{},l=g.Ag(a);f=l?(k=k[l])?g.Ta(k,f):!1:!0}f&&(b[d]=e)}return b};
Gr=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Dr(a,b);var d=Er(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;f&&g.qr(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.x;c?b.ib&&b.ib.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Ac&&b.Ac.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.ou&&0<b.timeout&&(f=g.or(function(){e||(e=!0,g.qr(f),b.ou.call(b.context||g.x))},b.timeout))}else g.Fr(a,b)};
g.Fr=function(a,b){var c=b.format||"JSON";a=Dr(a,b);var d=Er(a,b),e=!1,f,k=Hr(a,function(a){if(!e){e=!0;f&&g.qr(f);var d=g.nr(a),k=null;if(d||400<=a.status&&500>a.status)k=Ir(c,a,b.GM);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};var l=b.context||g.x;d?b.ib&&b.ib.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Ac&&b.Ac.call(l,a,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Qc&&0<b.timeout&&(f=g.or(function(){e||(e=!0,k.abort(),g.qr(f),b.Qc.call(b.context||g.x,k))},b.timeout));
return k};
Dr=function(a,b){b.JM&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.hr("XSRF_FIELD_NAME",void 0),d=b.hc;d&&(d[c]&&delete d[c],a=g.wr(a,d));return a};
Er=function(a,b){var c=g.hr("XSRF_FIELD_NAME",void 0),d=g.hr("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.jb,k=g.hr("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.IM||g.Ag(a)&&!b.withCredentials&&g.Ag(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.jb&&b.jb[k]||(f||(f={}),f[c]=d);f&&g.w(e)&&(e=g.sr(e),g.kc(e,f),e=b.Wu&&"JSON"==b.Wu?JSON.stringify(e):g.Ig(e));f=e||f&&!g.dc(f);!Jr&&f&&"POST"!=b.method&&(Jr=!0,g.Q(Error("AJAX request with postData should use POST")));
return e};
Ir=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Kr(b):null)d={},(0,g.G)(b.getElementsByTagName("*"),function(a){d[a.tagName]=Lr(a)})}c&&Mr(d);
return d};
Mr=function(a){if(g.Ca(a))for(var b in a)"html_content"==b||sb(b,"_html")?a[b]=g.Uc(g.Cc("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Mr(a[b])};
Kr=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
Lr=function(a){var b="";(0,g.G)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.Nr=function(a,b){b.method="POST";b.jb||(b.jb={});g.Fr(a,b)};
Hr=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&jr(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=mr();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c;if(e=Cr(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m};
g.Or=function(){var a=/Chrome\/(\d+)/.exec(g.Qb);return a?(0,window.parseFloat)(a[1]):window.NaN};
Rr=function(){return Pr("android")&&Pr("chrome")&&!Qr()};
g.Sr=function(){return Pr("cobalt")};
Tr=function(){return Pr("cobalt")&&Pr("; youtubevr")};
Ur=function(){return Pr("cobalt")&&Pr("appletv")};
Vr=function(){return Pr("(ps3; leanback shell)")||Pr("ps3")&&g.Sr()};
Wr=function(){return Pr("(ps4; leanback shell)")||Pr("ps4")&&g.Sr()};
Xr=function(){var a=/WebKit\/([0-9]+)/.exec(g.Qb);return!!(a&&600<=(0,window.parseInt)(a[1],10))};
Yr=function(){return Pr("iemobile")||Pr("windows phone")&&Pr("edge")};
Qr=function(){return Pr("trident/")||Pr("edge/")};
Zr=function(){return Pr("smart-tv")&&Pr("samsung")};
Pr=function(a){var b=g.Qb;return b?0<=b.toLowerCase().indexOf(a):!1};
g.as=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&!g.Sr()?a&&(a=g.wd("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.ed(a).body.appendChild(a)):e?Hr(a,b,"POST",e,d):g.hr("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Hr(a,b,"GET","",d):$r(a,b))};
bs=function(a,b,c){c=void 0===c?"":c;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,c)?b&&b():g.as(a,b,void 0,void 0,c)}catch(d){g.as(a,b,void 0,void 0,c)}};
$r=function(a,b){var c=new window.Image,d=""+cs++;ds[d]=c;c.onload=c.onerror=function(){b&&ds[d]&&b();delete ds[d]};
c.src=a};
g.es=function(a){return g.hr("EXPERIMENT_FLAGS",{})[a]};
gs=function(a,b){var c=g.hc(b);return new g.Jf(function(b,e){c.ib=function(a){g.nr(a)?b(a):e(new fs("Request failed, status="+a.status,"net.badstatus",a))};
c.onError=function(a){e(new fs("Unknown request error","net.unknown",a))};
c.Qc=function(a){e(new fs("Request timed out","net.timeout",a))};
g.Fr(a,c)})};
hs=function(a,b,c,d){function e(d,l,m){return g.Wf(d,function(d){return 0>=l||403===d.g.status?Of(new fs("Request retried too many times","net.retryexhausted",d.g)):f(m).then(function(){return e(gs(a,b),l-1,Math.pow(2,c-l+1)*m)})})}
function f(a){return new g.Jf(function(b){(0,window.setTimeout)(b,a)})}
return e(gs(a,b),c-1,d)};
fs=function(a,b,c){La.call(this,a+", errorCode="+b);this.errorCode=b;this.g=c;this.name="PromiseAjaxError"};
is=function(a){this.o=void 0===a?null:a;this.l=0;this.g=null};
js=function(a){var b=new is;a=void 0===a?null:a;b.l=2;b.g=void 0===a?null:a;return b};
ks=function(a){var b=new is;a=void 0===a?null:a;b.l=1;b.g=void 0===a?null:a;return b};
ms=function(a){La.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ls;this.isTimeout=a instanceof fs&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ag};
ls=function(){La.call(this,"Biscotti ID is missing from server")};
ns=function(){var a;(a=!!g.Zb(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie"))||(a=!!g.hr("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1));return a||g.es("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id"};
ts=function(){if("1"===g.Zb(g.hr("PLAYER_CONFIG",{}),"args","privembed"))return Of(Error("Biscotti ID is not available in private embed mode"));os||(os=g.Wf(gs(ns(),ps).then(qs),function(a){return rs(2,a)}));
return os};
qs=function(a){a=a.responseText;if(!g.rb(a,")]}'"))throw new ls;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ls;a=a.id;us(a);os=ks(a);vs(18E5,2);return a};
rs=function(a,b){var c=new ms(b);us("");os=js(c);0<a&&vs(12E4,a-1);throw c;};
vs=function(a,b){g.or(function(){g.Wf(gs(ns(),ps).then(qs,function(a){return rs(b,a)}),g.wa)},a)};
us=function(a){g.y("yt.ads.biscotti.lastId_",a,void 0)};
ws=function(){try{var a=g.z("yt.ads.biscotti.getId_");return a?a():ts()}catch(b){return Of(b)}};
xs=function(a){La.apply(this,arguments)};
ys=function(){var a=new xs("ID is missing"),b=new xs("Timeout"),c=null,d=!1;Qq(function(){c=Nq();d=!0});
if(d)return c?ks(c):js(a);var e=new g.Jf(function(b,c){Qq(function(){var d=Nq();d?b(d):c(a)})}),f=hg(5E3).then(function(){return Of(b)});
return Uf(Rf([e,f]),function(){return f.cancel()})};
zs=function(){g.z("yt.ads.mutsu.getId_")||g.y("yt.ads.mutsu.getId_",ys,void 0);try{return g.z("yt.ads.mutsu.getId_")()}catch(a){return Of(a)}};
g.Bs=function(a,b,c){a&&(a.dataset?a.dataset[g.As(b)]=String(c):a.setAttribute("data-"+b,c))};
g.Cs=function(a,b){return a?a.dataset?a.dataset[g.As(b)]:a.getAttribute("data-"+b):null};
g.As=function(a){return Ds[a]||(Ds[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
Fs=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Es+"VisibilityState";if(b in a)return a[b]};
Gs=function(a,b){var c;(0,g.lk)(a,function(a){c=b[a];return!!c});
return c};
Js=function(a){var b;Hs()?g.Is()==a&&(b=window.document):b=a;b&&(a=Gs(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],b))&&a.call(b)};
Ks=function(a){return g.Pa(["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(b){return"on"+b.toLowerCase()in a})};
Ls=function(){var a=window.document;return g.Pa(["fullscreenerror","webkitfullscreenerror","mozfullscreenerror","MSFullscreenError"],function(b){return"on"+b.toLowerCase()in a})};
Hs=function(){return!!Gs(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],window.document)};
g.Is=function(){var a=Gs(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],window.document);return a?a:null};
Ns=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ms||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?
b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.g=a.pageX;this.l=a.pageY}};
Os=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.g=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.l=a.clientY+b}};
Qs=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return bc(Ps,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.Ss=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Qs(a,b,c,d);if(e)return e;e=++Rs.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new Ns(d);if(!g.Qd(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Ns(b);
b.currentTarget=a;return c.call(a,b)};
k=jr(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);Ps[e]=[a,b,c,k,d];return e};
g.Ts=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.G)(a,function(a){if(a in Ps){var b=Ps[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ps[a]}}))};
g.Us=function(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a};
Vs=function(a){a=a||window.event;return a.path&&a.path.length?a.path[0]:g.Us(a)};
Ws=function(a){a=a||window.event;var b=a.relatedTarget;b||("mouseover"==a.type?b=a.fromElement:"mouseout"==a.type&&(b=a.toElement));return b};
Xs=function(a){a=a||window.event;var b=a.pageX,c=a.pageY;window.document.body&&window.document.documentElement&&(g.va(b)||(b=a.clientX+window.document.body.scrollLeft+window.document.documentElement.scrollLeft),g.va(c)||(c=a.clientY+window.document.body.scrollTop+window.document.documentElement.scrollTop));return new g.Zc(b,c)};
g.Ys=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.Zs=function(a){a=a||window.event;return!1===a.returnValue||a.Hr&&a.Hr()};
g.$s=function(a){a=a||window.event;return a.keyCode?a.keyCode:a.which};
g.at=function(a,b,c){var d;return d=g.Ss(a,b,function(){g.Ts(d);c.apply(a,arguments)},!1)};
bt=function(a){for(var b in Ps)Ps[b][0]==a&&g.Ts(b)};
ct=function(a){this.H=a;this.g=null;this.A=0;this.B=null;this.o=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.Oa=0;this.F=g.Ss(window,"mousemove",(0,g.A)(this.K,this));this.I=g.pr((0,g.A)(this.C,this),25)};
g.dt=function(a){g.J.call(this);this.P=[];this.Mb=a||this};
et=function(a,b,c,d){for(var e=0;e<c.length;e++)a.M(b,c[e],d)};
g.ft=function(a){for(;a.P.length;){var b=a.P.pop();b.target.removeEventListener(b.name,b.Fj)}};
g.R=function(){g.J.call(this);this.fc=new g.iq;g.K(this,this.fc)};
g.ht=function(a,b,c,d){g.R.call(this);this.o=!!b;this.C=a;this.I=c||a;this.H=!!d;this.g=new g.dt(this);g.K(this,this.g);this.B=this.F=null;this.A=this.l=!1;b&&(g.sd&&a.setAttribute("draggable","true"),a.style.touchAction="none");gt(this)};
it=function(a,b,c){a.g.M(a.I,b,c,void 0,!a.o)};
gt=function(a){a.B=null;a.F=null;it(a,jt("over"),a.os);it(a,"touchstart",a.Fn);a.o&&it(a,jt("down"),a.UD)};
kt=function(a,b){for(var c=0;c<b.changedTouches.length;c++){var d=b.changedTouches[c];if(d.identifier==a.F)return d}return null};
jt=function(a){return window.navigator.msPointerEnabled?"MSPointer"+a.charAt(0).toUpperCase()+a.substr(1):"mouse"+a};
ot=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.hc(lt);this.assets=a.assets||{};this.attrs=a.attrs||g.hc(mt);this.params=a.params||g.hc(nt);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
pt=function(a){a instanceof ot||(a=new ot(a));return a};
g.vt=function(a,b,c){var d=g.qt();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){g.rt[e]&&b.apply(c||window,d)};
try{tt[a]?k():g.or(k,0)}catch(l){g.Q(l)}},c);
g.rt[e]=!0;g.ut[a]||(g.ut[a]=[]);g.ut[a].push(e);return e}return 0};
g.xt=function(a,b){var c=g.vt(a,function(a){b.apply(void 0,arguments);g.wt(c)},void 0);
return c};
g.wt=function(a){var b=g.qt();b&&(g.va(a)?a=[a]:g.w(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.G)(a,function(a){b.unsubscribeByKey(a);delete g.rt[a]}))};
g.zt=function(a,b){var c=g.qt();return c?c.publish.apply(c,arguments):!1};
g.At=function(a,b){tt[a]=!0;var c=g.qt();c&&c.publish.apply(c,arguments);tt[a]=!1};
g.qt=function(){return g.z("ytPubsubPubsubInstance")};
g.Gt=function(a,b){Bt[a.endpoint]=b;if(a.Qj){var c=a.Qj;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Ct[a.Qj.token]=d;c=Dt(a.endpoint,a.Qj.token)}else c=Dt(a.endpoint);c.push(a.payload);c.length>=(Number(g.es("web_logging_max_batch")||0)||20)?Et():Ft()};
Et=function(){g.qr(Ht);if(!g.dc(It)){for(var a in It){var b=Jt[a];if(!b){var c=Bt[a];if(!c)continue;b=new c;Jt[a]=b}c=void 0;var d=a,e=b,f=Kt[d],k=Lt[d]||{};Lt[d]=k;b=Math.round(g.Mt());for(c in It[d]){var l={context:g.Nt(e.g)};l[f]=Dt(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;l.requestTimeMs=b;var m=Ct[c];if(m)a:{var n=l,p=c;if(m.videoId)var u="VIDEO";else if(m.playlistId)u="PLAYLIST";else break a;n.credentialTransferTokenTargetId=m;n.context=n.context||
{};n.context.user=n.context.user||{};n.context.user.credentialTransferTokens=[{token:p,scope:u}]}delete Ct[c];g.Ot(e,d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete It[a]}g.dc(It)||Ft()}};
Ft=function(){g.qr(Ht);Ht=g.or(Et,g.hr("LOGGING_BATCH_TIMEOUT",1E4))};
Dt=function(a,b){b=void 0===b?"":b;It[a]=It[a]||{};It[a][b]=It[a][b]||[];return It[a][b]};
Pt=function(){};
g.Rt=function(a,b){return Qt(a,1,b)};
St=function(){};
g.Tt=function(){return!!g.z("yt.scheduler.instance")};
Qt=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.or(a,c||0)};
g.Ut=function(a){if(!(0,window.isNaN)(a)){var b=g.z("yt.scheduler.instance.cancelJob");b?b(a):g.qr(a)}};
Vt=function(a){var b=g.z("yt.scheduler.instance.setPriorityThreshold");b&&b(a)};
Yt=function(){if(null==g.z("_lact",window)){var a=(0,window.parseInt)(g.hr("LACT"),10);a=(0,window.isFinite)(a)?(0,g.H)()-Math.max(a,0):-1;g.y("_lact",a,window);g.y("_fact",a,window);-1==a&&Wt();g.Ss(window.document,"keydown",Wt);g.Ss(window.document,"keyup",Wt);g.Ss(window.document,"mousedown",Wt);g.Ss(window.document,"mouseup",Wt);g.es("lact_local_listeners")?(g.Ss(window,"resize",function(){Xt("resize",200)}),g.Ss(window,"scroll",function(){Xt("scroll",200)}),new ct(function(){Xt("mouse",100)}),
g.Ss(window.document,"touchstart",Wt),g.Ss(window.document,"touchend",Wt)):(g.vt("page-mouse",Wt),g.vt("page-scroll",Wt),g.vt("page-resize",Wt))}};
Xt=function(a,b){Zt[a]||(Zt[a]=!0,g.Rt(function(){Wt();Zt[a]=!1},b))};
Wt=function(){null==g.z("_lact",window)&&Yt();var a=(0,g.H)();g.y("_lact",a,window);-1==g.z("_fact",window)&&g.y("_fact",a,window);(a=g.z("ytglobal.ytUtilActivityCallback_"))&&a()};
g.$t=function(){var a=g.z("_lact",window);return null==a?-1:Math.max((0,g.H)()-a,0)};
g.bu=function(a,b,c,d){var e=g.au,f={};f.eventTimeMs=Math.round(c||g.Mt());f[a]=b;f.context={lastActivityMs:String(c?-1:g.$t())};g.Gt({endpoint:"log_event",payload:f,Qj:d},e)};
cu=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.Nt=function(a){a={client:{hl:a.hn,gl:a.gn,clientName:a.fn,clientVersion:a.innertubeContextClientVersion}};g.hr("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.hr("DELEGATED_SESSION_ID")});return a};
g.au=function(a){this.g=a||{innertubeApiKey:g.hr("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.hr("INNERTUBE_API_VERSION",void 0),fn:g.hr("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.hr("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),hn:g.hr("INNERTUBE_CONTEXT_HL",void 0),gn:g.hr("INNERTUBE_CONTEXT_GL",void 0),tk:g.hr("INNERTUBE_HOST_OVERRIDE",void 0)||""}};
g.Ot=function(a,b,c,d){!g.hr("VISITOR_DATA")&&.01>Math.random()&&g.Q(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.hr("VISITOR_DATA","")},method:"POST",jb:c,Wu:"JSON",Qc:function(){d.Qc()},
ou:d.Qc,ib:function(a,b){d.ib&&d.ib(b)},
MM:function(a){d.ib&&d.ib(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
LM:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=g.fo();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=g.hr("SESSION_INDEX",0));var k="",l=a.g.tk;l&&(k=l);f&&!k&&(e.headers["x-origin"]=window.location.origin);a=""+k+cu(a.g.innertubeApiVersion,b,c)+"?alt=json&key="+a.g.innertubeApiKey;try{g.es("use_fetch_for_op_xhr")?Gr(a,e):g.Nr(a,e)}catch(m){if("InvalidAccessError"==m)g.Q(Error("An extension is blocking network request."),"WARNING");else throw m;}};
eu=function(a,b){var c=Object.keys(a).join("");du("info_"+c+"_"+b)||(a.clientActionNonce=b,g.bu("latencyActionInfo",a,void 0,void 0))};
du=function(a){fu[a]=fu[a]||{count:0};var b=fu[a];b.count++;b.time=g.Mt();gu||(gu=Qt(hu,0,5E3));if(10<b.count){if(11==b.count){b=Error("CSI data exceeded logging limit with key: "+a);var c=0==a.indexOf("info")?"WARNING":"ERROR";var d=d||{};d.name=g.hr("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=g.hr("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);a=b;b=void 0===c?"ERROR":c;c=window&&window.yterr||!1;if(a&&c&&!(5<=iu)){c=a.stacktrace;var e=a.columnNumber;var f=g.z("window.location.href");if(g.w(a))a={message:a,
name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var k=!1;try{var l=a.lineNumber||a.line||"Not available"}catch(u){l="Not available",k=!0}try{var m=a.fileName||a.filename||a.sourceURL||g.x.$googDebugFname||f}catch(u){m="Not available",k=!0}a=!k&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:l,fileName:m,stack:a.stack||"Not available"}}c=c||a.stack;l=a.lineNumber.toString();(0,window.isNaN)(l)||
(0,window.isNaN)(e)||(l=l+":"+e);if(!(ju[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js"))){m=c;l={hc:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:l,level:void 0===b?"ERROR":b,"client.name":d.name},jb:{url:g.hr("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};d.version&&(l["client.version"]=d.version);m&&(l.jb.stack=m);for(var n in d)l.jb["client."+n]=d[n];if(d=g.hr("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var p in d)l.jb[p]=
d[p];g.Fr("/error_204",l);ju[a.message]=!0;iu++}}}return!0}return!1};
hu=function(){var a=g.Mt(),b;for(b in fu)6E4<a-fu[b].time&&delete fu[b];gu=0};
g.ku=function(a,b,c){this.l=a;this.A=b;this.o=c;this.g=void 0};
mu=function(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(e){}a=Array(16);for(b=0;16>b;b++){c=(0,g.H)();for(var d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(lu)for(b=1,c=0;c<lu.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^lu.charCodeAt(c),b++;return a};
nu=function(){for(var a=mu(),b=[],c=0;c<a.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(a[c]&63));return b.join("")};
g.ou=function(){return(0,g.I)(mu(),function(a){return(a&15).toString(16)}).join("")};
g.ru=function(a,b,c){var d=c&&0<c?c:0;c=d?(0,g.H)()+1E3*d:0;if((d=d?g.pu:qu)&&window.JSON){g.w(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}};
g.tu=function(a){if(!qu&&!g.pu||!window.JSON)return null;try{var b=qu.get(a)}catch(c){}if(!g.w(b))try{b=g.pu.get(a)}catch(c){}if(!g.w(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.uu=function(a){try{qu&&qu.remove(a),g.pu&&g.pu.remove(a)}catch(b){}};
g.vu=function(){var a=g.hr("client-screen-nonce")||g.hr("EVENT_ID");return a?a:null};
g.xu=function(a,b,c){g.wu.set(""+a,b,c,"/","youtube.com",!1)};
g.yu=function(){return g.tu("yt-remote-session-screen-id")};
g.Au=function(a){er(zu,arguments)};
g.S=function(a,b,c){b=void 0===b?{}:b;a=(a=a in zu?zu[a]:c)||"";c={};for(var d in b)c.Xk=d,a=a.replace(new RegExp("\\$"+c.Xk,"gi"),function(a){return function(){return b[a.Xk]}}(c)),c={Xk:c.Xk};
return a};
Bu=function(a,b,c){this.sampleRate=a||0;this.g=b||0;this.spatialAudioType=c||0};
Cu=function(a,b,c){this.name=a;this.id=b;this.isDefault=c};
Fu=function(a,b,c,d,e,f,k,l,m,n,p){this.width=a;this.height=b;this.quality=f||Du(a,b);this.g=g.Eu[this.quality];this.isAccelerated=!!k;this.fps=c||0;this.stereoLayout=!e||null!=d&&0!=d&&1!=d?0:e;this.projectionType=d?2==d&&2==e?3:d:0;(a=l)||(a=this.fps,b=this.projectionType,c=g.Eu[this.quality],a=0==c?g.S("YTP_AUTO"):c+(2==b||3==b||4==b?"s":"p")+(55<a?"60":49<a?"50":39<a?"48":""));this.qualityLabel=a;this.l=m||"";this.primaries=n||"";this.o=!1!==p};
Gu=function(a){return 1280<=a.width||720<=a.height};
Hu=function(a){return"smpte2084"==a.l||"arib-std-b67"==a.l};
Du=function(a,b){for(var c=Math.max(a,b),d=Math.min(a,b),e=Iu[0],f=0;f<Iu.length;f++){var k=Iu[f],l=g.Eu[k];if(c>=1.3*Math.floor(16*l/9)||d>=1.3*l)return e;e=k}return"tiny"};
Lu=function(a,b,c,d,e,f,k,l){this.id=a;this.containerType=0<=b.indexOf("/mp4")?1:0<=b.indexOf("/webm")?2:0<=b.indexOf("/x-flv")?3:0<=b.indexOf("/vtt")?4:0;this.mimeType=b;this.g=k||0;this.o=l||0;this.audio=void 0===c?null:c;this.video=void 0===d?null:d;this.dc=void 0===e?null:e;this.Ob=void 0===f?null:f;this.l=Ju[Ku(this)]||""};
Ku=function(a){return a.id.split(";",1)[0]};
Mu=function(a){return"9"==a.l||"("==a.l||"9h"==a.l||"(h"==a.l};
Nu=function(a){return"9h"==a.l||"(h"==a.l};
Ou=function(a){return 1==a.containerType};
Pu=function(a){return 0<=a.indexOf("opus")||0<=a.indexOf("vorbis")||0<=a.indexOf("mp4a")};
Qu=function(a){return 0<=a.indexOf("vp9")||0<=a.indexOf("vp8")||0<=a.indexOf("avc1")};
Ru=function(a,b,c,d,e,f,k){var l=new Bu;b in g.Eu||(b="small");d&&e?(e=(0,window.parseInt)(e,10),d=(0,window.parseInt)(d,10)):(e=g.Eu[b],d=Math.round(16*e/9));b=new Fu(d,e,0,null,void 0,b,f,void 0,void 0,void 0,k);a=(0,window.unescape)(a.replace(/&quot;/g,'"'));return new Lu(c,a,l,b)};
Su=function(a,b){this.experimentIds=a?a.split(","):[];this.flags=g.rr(b||"");var c={};(0,g.G)(this.experimentIds,function(a){c[a]=!0});
this.experiments=c;this.A=!!c["9414740"]};
Tu=function(a,b){this.Of=a;this.g=!!b;this.l=!1};
Uu=function(a){this.yf=a};
Vu=function(a,b,c){this.l=a||0;this.g=b||0;this.o=c};
Wu=function(a,b,c){return new Vu(g.Eu[a]||0,g.Eu[b]||0,c)};
Xu=function(a){var b=g.Eu.auto;return a.l==b&&a.g==b};
Zu=function(a,b){if(b.o&&Xu(b))return Yu;if(b.o||Xu(a))return b;if(a.o||Xu(b))return a;var c=a.l&&b.l?Math.max(a.l,b.l):a.l||b.l,d=a.g&&b.g?Math.min(a.g,b.g):a.g||b.g;c=Math.min(c,d);return c==a.l&&d==a.g?a:new Vu(c,d,!1)};
g.av=function(a){var b=a.g||a.l;return cc($u,function(a){return g.Eu[a]==b})||"auto"};
bv=function(a,b){var c=g.Eu[b];return a.l<=c&&(!a.g||a.g>=c)};
cv=function(){var a=g.tu("yt-player-volume")||{},b=a.volume;return{volume:(0,window.isNaN)(b)?100:g.Vc(Math.floor(b),0,100),muted:!!a.muted}};
dv=function(a){g.ru("yt-player-bandwidth",a,2592E3)};
ev=function(){return g.tu("yt-player-quality")||"auto"};
fv=function(a){g.ru("yt-player-watch-later-pending",a)};
gv=function(){return g.tu("yt-player-performance-cap")||0};
hv=function(){return g.tu("yt-player-headers-readable")||!1};
jv=function(a,b,c){g.w(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return iv(a)};
iv=function(a,b,c){if(g.Ca(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}};
kv=function(a,b,c,d){!a&&(void 0===c?0:c)&&kr(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a};
rv=function(a){return(a=qv.exec(a))?a[0]:""};
uv=function(a){var b=void 0===b?!1:b;return kv(tv.test(a),a,b,"Nielsen OCR URL")};
wv=function(a){var b=void 0===b?!1:b;return kv(vv.test(a),a,b,"Active View 3rd Party Integration URL")};
yv=function(a){var b=void 0===b?!1:b;return kv(xv.test(a),a,b,"Google/YouTube Brand Lift URL")};
Av=function(a){var b=void 0===b?!1:b;return kv(zv.test(a),a,b,"Trusted Stream URL")};
g.Cv=function(a){var b=void 0===b?!1:b;return kv(Bv.test(a),a,b,"Trusted Image URL")};
Ev=function(a){var b=void 0===b?!1:b;return kv(Dv.test(a),a,b,"Trusted Ad Domain URL")};
g.Gv=function(a){var b=void 0===b?!1:b;return kv(Fv.test(a),a,b,"Trusted Promoted Video Domain URL")};
Iv=function(a,b){b=void 0===b?!1:b;return kv(Hv.test(a),a,b,"Captions URL")};
Jv=function(a){a=new g.jo(a);g.ko(a,window.document.location.protocol);g.lo(a,window.document.location.hostname);window.document.location.port&&g.mo(a,window.document.location.port);return a.toString()};
Kv=function(a){a=new g.jo(a);g.ko(a,window.document.location.protocol);return a.toString()};
Nv=function(a,b){g.J.call(this);this.app=a;this.g=!0;this.o=null;this.I={};this.K={};this.A={};this.H=[];this.F={};this.B={};this.l=null;this.L=new window.Set;this.playerType=b;Lv(this,"cueVideoById",this.Us);Lv(this,"loadVideoById",this.hC);Lv(this,"cueVideoByUrl",this.TB);Lv(this,"loadVideoByUrl",this.iC);Lv(this,"playVideo",this.Oc);Lv(this,"pauseVideo",this.Xb);Lv(this,"stopVideo",this.cf);Lv(this,"clearVideo",this.RB);Lv(this,"getVideoBytesLoaded",this.aC);Lv(this,"getVideoBytesTotal",this.bC);
Lv(this,"getVideoLoadedFraction",this.Un);Lv(this,"getVideoStartBytes",this.cC);Lv(this,"cuePlaylist",this.SB);Lv(this,"loadPlaylist",this.gC);Lv(this,"nextVideo",this.sh);Lv(this,"previousVideo",this.Ei);Lv(this,"playVideoAt",this.Xs);Lv(this,"setShuffle",this.setShuffle);Lv(this,"setLoop",this.kC);Lv(this,"getPlaylist",this.De);Lv(this,"getPlaylistIndex",this.Vs);Lv(this,"getPlaylistId",this.getPlaylistId);Lv(this,"loadModule",this.Di);Lv(this,"unloadModule",this.Kk);Lv(this,"setOption",this.Pc);
Lv(this,"getOption",this.Lb);Lv(this,"getOptions",this.Fg);Lv(this,"mute",this.mute);Lv(this,"unMute",this.Ee);Lv(this,"isMuted",this.isMuted);Lv(this,"setVolume",this.setVolume);Lv(this,"getVolume",this.getVolume);Lv(this,"seekTo",this.xb);Lv(this,"getPlayerState",this.rh);Lv(this,"getPlaybackRate",this.ec);Lv(this,"setPlaybackRate",this.Ce);Lv(this,"getAvailablePlaybackRates",this.qh);Lv(this,"getPlaybackQuality",this.Ci);Lv(this,"setPlaybackQuality",this.Fi);Lv(this,"getAvailableQualityLevels",
this.Tn);Lv(this,"getCurrentTime",this.getCurrentTime);Lv(this,"getDuration",this.getDuration);Lv(this,"addEventListener",this.addEventListener);Lv(this,"removeEventListener",this.removeEventListener);Lv(this,"getVideoUrl",this.getVideoUrl);Lv(this,"getDebugText",this.Bi);Lv(this,"getVideoEmbedCode",this.Ws);Lv(this,"getVideoData",this.Y);Lv(this,"addCueRange",this.Ts);Lv(this,"removeCueRange",this.Ys);Lv(this,"setSize",this.setSize);Lv(this,"getApiInterface",this.VB);Lv(this,"destroy",this.destroy);
Lv(this,"showVideoInfo",this.gt);Lv(this,"hideVideoInfo",this.eC);Lv(this,"getMediaReferenceTime",this.XB);Mv(this,"getInternalApiInterface",this.WB);Mv(this,"getAdState",this.UB);Mv(this,"isNotServable",this.fC);Mv(this,"getUpdatedConfigurationData",this.ZB);Mv(this,"sendAbandonmentPing",this.jC);Mv(this,"setAutonav",this.Zs);Mv(this,"setAutonavState",this.Vn);Mv(this,"startInteractionLogging",this.lC);Mv(this,"channelSubscribed",this.PB);Mv(this,"channelUnsubscribed",this.QB);Mv(this,"handleExternalCall",
this.dC)};
Lv=function(a,b,c){var d=void 0===d?!0:d;a.I[b]=function(e){for(var f=[],k=0;k<arguments.length;++k)f[k-0]=arguments[k];d&&Ov(a,b);return c.apply(a,f)};
Mv(a,b,c);a.H.push(b)};
Pv=function(a,b,c){var d=void 0===d?!0:d;a.K[b]=function(e){for(var f=[],k=0;k<arguments.length;++k)f[k-0]=arguments[k];d&&Ov(a,b);return c.apply(a,f)};
Mv(a,b,c);a.H.push(b)};
Mv=function(a,b,c){var d=void 0===d?!1:d;a.A[b]=function(e){for(var f=[],k=0;k<arguments.length;++k)f[k-0]=arguments[k];d&&Ov(a,b);return c.apply(a,f)}};
Qv=function(a){a.l||(a.l={},g.Ka(a.l,a.I),g.Ka(a.l,a.K),a.l.addEventListener=(0,g.A)(a.Gy,a),a.l.removeEventListener=(0,g.A)(a.Hy,a));return a.l};
Ov=function(a,b){var c=a.app.g;c.ej&&!a.L.has(b)&&(a.L.add(b),c={callerUrl:c.aa,methodName:b},a.app.g.experiments.g("web_player_gel_logging_killswitch")||(a.app.g.experiments.g("web_player_gel_direct")?g.bu("webPlayerApiCalled",c,void 0,void 0):a.la("onLogToGel",{payload_name:"webPlayerApiCalled",payload:c})))};
Sv=function(a,b,c){b=g.Vc(Math.floor(b),0,100);(0,window.isFinite)(b)&&Rv(a.app,{volume:b,muted:a.isMuted()},c)};
Tv=function(a,b){Rv(a.app,{muted:!0,volume:a.getVolume()},b)};
Uv=function(a,b){Rv(a.app,{muted:!1,volume:Math.max(5,a.getVolume())},b)};
g.Vv=function(a){this.languageCode=a.languageCode;this.languageName=a.languageName||null;this.g=a.languageOriginal||null;this.id=a.id||null;this.isDefault=a.is_default||!1};
g.Wv=function(a){a=void 0===a?{}:a;this.L=a.formats||"";this.o=a.format||1;if(1==this.o)for(var b=this.L.split(","),c=0;c<b.length;c++){var d=(0,window.parseInt)(b[c],10);(0,window.isNaN)(d)||(this.o=Math.max(d,this.o))}this.l=a.languageCode||"";this.C=a.languageName;this.A=a.kind||"";this.B=a.name;this.Aa=a.id;this.P=a.is_servable;this.H=a.is_translateable;this.I=a.url||null;this.F=a.vss_id||"";this.g=null;a.translationLanguage&&(this.g=new g.Vv(a.translationLanguage))};
g.Xv=function(a){var b=a.C||"",c=[b];"asr"==a.A&&-1==b.indexOf("(")&&c.push(" ("+g.S("YTP_ASR_SETTINGS_LABEL")+")");a.B&&c.push(" - "+a.B);a.g&&c.push(" >> "+a.g.languageName);return c.join("")};
Yv=function(a,b){this.id=a;this.dc=b;this.captionTracks=[];this.ai=this.pm=this.g=null;this.bq="UNKNOWN"};
Zv=function(){var a=Fs();return!(!a||"visible"==a)};
aw=function(a){var b=$v();b&&window.document.addEventListener(b,a,!1)};
$v=function(){if(window.document.visibilityState)var a="visibilitychange";else{if(!window.document[Es+"VisibilityState"])return"";a=Es+"visibilitychange"}return a};
bw=function(a,b,c,d,e,f,k,l){this.duration=c;this.endTime=b+c;this.ingestionTime=d;this.na=a;this.sourceURL=e;this.startTime=b;this.l=k||0;this.range=f||null;this.g=l||!1};
g.cw=function(){this.segments=[]};
dw=function(a,b){if(b>a.Pb())a.segments=[];else{var c=g.Oa(a.segments,function(a){return a.na>=b},a);
0<c&&a.segments.splice(0,c)}};
ew=function(a,b,c,d,e){e=void 0===e?!1:e;this.data=a;this.offset=b;this.size=c;this.type=d;this.g=e?0:8;this.dataOffset=this.offset+this.g;this.l=e};
fw=function(a){var b=a.data.getInt32(a.offset+a.g);a.g+=4;return b};
gw=function(a){var b=a.data.getUint32(a.offset+a.g);a.g+=4;return b};
hw=function(a){var b=a.data;var c=a.offset+a.g;b=4294967296*b.getUint32(c)+b.getUint32(c+4);a.g+=8;return b};
iw=function(a){var b=[];do{var c=a.data.getUint8(a.offset+a.g);b.push(c);a.g++}while(0!=c);b.pop()};
jw=function(a){this.data=new window.DataView(new window.ArrayBuffer(a));this.g=0};
kw=function(a,b){a.data.setInt32(a.g,b);a.g+=4};
lw=function(a,b){for(var c=0;c+4<=b.size;)kw(a,b.data.getUint32(b.offset+c)),c+=4;for(;c<b.size;)a.data.setUint8(a.g++,b.data.getUint8(b.offset+c++))};
mw=function(a,b,c){for(var d=8,e=g.q(c),f=e.next();!f.done;f=e.next())d+=f.value.size;kw(a,d);kw(a,b);b=g.q(c);for(f=b.next();!f.done;f=b.next())lw(a,f.value)};
nw=function(a,b,c){this.Pd=a;this.durationSecs=b;this.context=c};
ow=function(a,b){this.g=a;this.A=void 0===b?null:b;this.l=(0,window.parseInt)(this.g["Sequence-Number"],10)||0;this.ingestionTime=((0,window.parseInt)(this.g["Ingestion-Walltime-Us"],10)||0)/1E6;this.B=(((0,window.parseInt)(this.g["First-Frame-Time-Us"],10)||0)+((0,window.parseInt)(this.g["First-Frame-Uncertainty-Us"],10)||0))/1E6;this.H=((0,window.parseInt)(this.g["Target-Duration-Us"],10)||0)/1E6;this.F="T"==this.g["Overlayed-With-Slate"];this.o="T"==this.g["Stream-Finished"];this.C="T"==this.g.Streamable};
pw=function(a,b,c,d,e){this.l=a||0;this.pitch=b||0;this.yaw=c||0;this.Ui=d||0;this.g=e;e.getUint32(4)};
qw=function(a){var b={};a=a.split("\r\n");for(var c=0;c<a.length;c++){if(0==a[c].length)return b;var d=a[c].match(/([^:]+):\s+([\S\s]+)/);null!=d&&(b[d[1]]=d[2])}return null};
tw=function(a,b,c,d){d=void 0===d?!1:d;var e=rw(a,0,1836019558);if(!e)return null;var f=rw(a,e.dataOffset,1835427940),k=rw(a,e.dataOffset,1953653094),l=rw(a,e.dataOffset,1886614376);if(!f||!k)return null;var m=rw(a,k.dataOffset,1952868452),n=rw(a,k.dataOffset,1953658222),p=rw(a,k.dataOffset,1952867444);if(!m||!n||!p)return null;var u=rw(a,k.dataOffset,1935763823),v=rw(a,k.dataOffset,1935763834),C=0;if(u){C=fw(u);var D=fw(u);if(0!=C||1!=D)return null;C=fw(u)}D=rw(a,k.dataOffset,1935828848);k=rw(a,
k.dataOffset,1936158820);var E=fw(m),ea=fw(m),fa=E&2,Za=E&1?hw(m):0,Ha=fa?fw(m):0,Ja=E&8?fw(m):0,si=E&16?fw(m):0,Re=E&32?fw(m):0;E=fw(n);var Se=E&1,eh=E&4,lv=E&256;m=E&512;var mv=E&1024,Bm=E&2048;E=fw(n);var kq=Se?fw(n):0,nv=eh?fw(n):0;Se=[];for(var ov=[],Cm=[],pe=[],pv=0,xd=0,lq=0;lq<E;lq++){var R7=lv?fw(n):Ja;m&&Se.push(fw(n));var Dm=Re;eh&&0==lq?Dm=nv:mv&&(Dm=fw(n));ov.push(Dm);Dm=Bm?fw(n):0;0==lq&&(pv=Dm);Cm.push(xd+Dm);pe.push(lq);xd+=R7}1<=Math.abs(xd-b)&&c({flaw:"segDurMismatch",dts:xd.toFixed(),
seg:b.toFixed()});g.kb(pe,function(a,b){return Cm[a]-Cm[b]});
c=[];for(xd=0;xd<E;xd++)c[pe[xd]]=xd;xd=fa?4:0;Re=16*E;eh=68+xd+p.size+Re+(u?u.size:0)+(v?v.size:0)+(D?D.size:0)+(k?k.size:0)+(l?l.size:0);n=eh-e.size;Ja=new jw(eh+(d?0:e.offset));!d&&e.offset&&Ja.Nj(a,0,e.offset);kw(Ja,eh);kw(Ja,1836019558);lw(Ja,f);kw(Ja,eh-24-(l?l.size:0));kw(Ja,1953653094);kw(Ja,16+xd);kw(Ja,1952868452);kw(Ja,131072|(fa?2:0));kw(Ja,ea);fa&&kw(Ja,Ha);lw(Ja,p);kw(Ja,20+Re);kw(Ja,1953658222);kw(Ja,16781057);kw(Ja,E);kw(Ja,Za+kq+n);for(a=xd=0;a<E;a++)e=c[a],d=Math.round(b*e/E),e=
Math.round(b*(e+1)/E)-d,d=d-xd+pv,kw(Ja,e),kw(Ja,m?Se[a]:si),kw(Ja,ov[a]),kw(Ja,d),xd+=e;u&&(kw(Ja,u.size),kw(Ja,1935763823),kw(Ja,0),kw(Ja,1),kw(Ja,C+n));v&&lw(Ja,v);D&&lw(Ja,D);k&&lw(Ja,k);l&&lw(Ja,l);return Ja.data.buffer};
uw=function(a,b){var c=rw(a.data,a.dataOffset,1952868452),d=rw(a.data,a.dataOffset,1953658222),e=fw(c);fw(c);e&2&&fw(c);c=e&8?fw(c):0;var f=fw(d),k=f&1;e=f&4;var l=f&256,m=f&512,n=f&1024;f&=2048;var p=gw(d);k&&fw(d);e&&fw(d);for(var u=k=0;u<p;u++){var v=l?fw(d):c;m&&fw(d);e&&0==u||!n||fw(d);f&&fw(d);k+=v}return k/b};
xw=function(a){a=new window.DataView(a.buffer,a.byteOffset,a.byteLength);return(a=vw(a,1836476516))?ww(a):window.NaN};
yw=function(a){var b=vw(a,1937011556);if(!b)return null;b=rw(a,b.dataOffset+8,1635148593);if(!b)return null;var c=rw(a,b.dataOffset+78,1936995172),d=rw(a,b.dataOffset+78,1937126244);if(!d)return null;b=null;if(c)switch(c.skip(4),b=c.data.getUint8(c.offset+c.g),c.g+=1,b){default:b=0;break;case 1:b=2;break;case 2:b=1;break;case 3:b=255}var e=c=null,f=null;if(d=rw(a,d.dataOffset,1886547818)){var k=rw(a,d.dataOffset,1886546020),l=rw(a,d.dataOffset,2037673328);if(!l&&(l=rw(a,d.dataOffset,1836279920),!l))return null;
k&&(k.skip(4),c=fw(k)/65536,f=fw(k)/65536,e=fw(k)/65536);a=new window.DataView(l.data.buffer,l.dataOffset,l.size-8);return new pw(b,c,f,e,a)}return null};
rw=function(a,b,c){for(;zw(a,b);){var d=Aw(a,b);if(d.type==c)return d;b+=d.size}return null};
vw=function(a,b){for(var c=0;zw(a,c);){var d=Aw(a,c);if(d.type==b)return d;c=Bw(d.type)?c+8:c+d.size}return null};
Cw=function(a,b){if(a.data.getUint8(a.dataOffset)){var c=a.data,d=a.dataOffset+4;c.setUint32(d,Math.floor(b/4294967296));c.setUint32(d+4,b&4294967295)}else a.data.setUint32(a.dataOffset+4,b)};
Dw=function(a){if(a.data.getUint8(a.dataOffset)){var b=a.data;a=a.dataOffset+4;return 4294967296*b.getUint32(a)+b.getUint32(a+4)}return a.data.getUint32(a.dataOffset+4)};
Aw=function(a,b){var c=a.getUint32(b),d=a.getUint32(b+4);return new ew(a,b,c,d)};
ww=function(a){var b=a.data.getUint8(a.dataOffset)?20:12;return a.data.getUint32(a.dataOffset+b)};
Ew=function(a){return a.data.getUint32(a.dataOffset+8)};
Fw=function(a){var b=a.data.getUint8(a.dataOffset);a.data.getUint16(a.dataOffset+(0==b?22:30));return a.data.getUint32(a.dataOffset+(0==b?28:36))};
zw=function(a,b){if(8>a.byteLength-b)return!1;var c=a.getUint32(b);if(8>c||a.byteLength-b<c)return!1;c=a.getUint32(b+4);if(1635148593==c||1635148611==c||1937126244==c||1936995172==c)return!0;for(c=4;8>c;c++){var d=a.getInt8(b+c);if(97>d||122<d)return!1}return!0};
Bw=function(a){return 1836019558==a||1836019574==a||1835297121==a||1835626086==a||1937007212==a||1953653094==a||1953653099==a};
Gw=function(a){return(a=rw(a,0,1836019558))?a.offset+a.size:null};
Hw=function(a,b){for(var c=rw(a,0,b);c;){var d=c;d.type=1936419184;d.data.setUint32(d.offset+4,1936419184);c=rw(a,c.offset+c.size,b)}};
Iw=function(a,b){for(var c=[],d=b.dataOffset,e=b.offset+b.size;d<e&&zw(a,d);){var f=Aw(a,d);c.push(f);d+=f.size}return c};
Jw=function(a){for(var b=0,c=[];zw(a,b);){var d=Aw(a,b);1886614376==d.type&&c.push(d);b=Bw(d.type)?b+8:b+d.size}return c};
g.Kw=function(a,b){this.start=a;this.end=b;this.length=b-a+1};
Lw=function(a){a=a.split("-");return 2==a.length&&(a=new g.Kw((0,window.parseInt)(a[0],10),(0,window.parseInt)(a[1],10)),!(0,window.isNaN)(a.start)&&!(0,window.isNaN)(a.end)&&!(0,window.isNaN)(a.length)&&0<a.length)?a:null};
Mw=function(a,b){return new g.Kw(a,a+b-1)};
Ow=function(a,b,c,d,e,f,k,l,m){this.g=b;this.range=c;this.type=a;this.na=0<=d?d:-1;this.startTime=e||0;this.duration=f||0;this.l=k||0;this.Ja=0<=l?l:this.range?this.range.length:window.NaN;this.C=!!m;this.range?(this.o=this.l+this.Ja==this.range.length,this.B=this.startTime+this.duration*this.l/this.range.length,this.F=this.duration*this.Ja/this.range.length,this.A=this.B+this.F):(this.o=0!=this.Ja,Nw(this));this.H=[]};
Nw=function(a){a.B=a.startTime;a.F=a.duration;a.A=a.B+a.F};
Pw=function(a,b,c){var d=!(!b||b.g!=a.g||b.type!=a.type||b.na!=a.na);return c?d&&(a.range&&b.range?b.range.end==a.range.end:b.range==a.range)&&b.l+b.Ja==a.l+a.Ja:d};
Qw=function(a){return 1==a.type||2==a.type};
Rw=function(a,b,c){return c||a.g==b.g?a.range&&b.range?a.range.start+a.l+a.Ja==b.range.start+b.l:a.na==b.na?a.l+a.Ja==b.l:a.na+1==b.na&&0==b.l&&a.o:!1};
Sw=function(a,b){return Rw(a,b)||1E-6>=Math.abs(a.A-b.B)||a.na+1==b.na&&0==b.l&&a.o?!0:!1};
Tw=function(a){1==a.length||(0,g.Kn)(a,function(a){return!!a.range});
for(var b=1;b<a.length;b++);b=a[a.length-1];return new g.Kw(a[0].range.start+a[0].l,b.range.start+b.l+b.Ja-1)};
Vw=function(a){var b="";g.Sb(Uw(a),function(a,d){b+=d+"="+a+","});
return b.slice(0,-1)};
Uw=function(a){var b={};b.itag=Ku(a.g.info);b.seg=String(a.na);a.range&&(b.range=""+(a.range.start+a.l)+"-"+(a.range.start+a.l+a.Ja-1));b.time=""+a.B.toFixed(1)+"-"+(a.B+a.F).toFixed(1);b.off=String(a.l);b.len=String(a.Ja);a.o&&(b.end="1");a.C&&(b.eos="1");return b};
Ww=function(a,b,c,d){a=new Ow(a.type,a.g,a.range,a.na,a.startTime,a.duration,b,c,d&&a.C);a.o=d;return a};
Xw=function(a,b){a.na=b.na;if(a.startTime!=b.startTime||a.duration!=b.duration)a.startTime=b.startTime,a.duration=b.duration,Nw(a)};
Yw=function(a,b){this.l=a;this.g=0;this.o=b||0};
Zw=function(a){return a.g>=a.l.byteLength};
dx=function(a,b){var c=new Yw(b);if(!$w(c,[408125543,374648427,174,224]))return!1;c=ax(c);if(bx(c,a)){for(var d=0;a;)a>>>=8,d++;var e=c.o+c.g-d;d=cx(c,!0)+d-1;var f;f||(f=Math.ceil(Math.log(d+2)/Math.log(2)/7));var k=1<<8-f;for(c=[];c.length<f-1;)c.unshift(d%256),d=Math.floor(d/256);c.unshift(d|k);b.setUint8(e,236);for(f=0;f<c.length;f++)b.setUint8(e+1+f,c[f]);return!0}return!1};
fx=function(a){ex(new Yw(a));dx(30320,a)&&dx(21432,a)};
kx=function(a){var b=new Yw(a);ex(b);if($w(b,[408125543,374648427,174,224]))b=ax(b);else return null;for(var c=a=null;!Zw(b);){var d=cx(b,!1);if(21432==d)switch(gx(b)){default:a=0;break;case 1:a=1;break;case 3:a=2;break;case 15:a=255}else 30320==d?c=ax(b):hx(b)}if(!c)return null;for(var e,f=d=b=null;!Zw(c);)switch(cx(c,!1)){case 30321:if(3!=gx(c))return null;break;case 30324:b=ix(c);break;case 30323:f=ix(c);break;case 30325:d=ix(c);break;case 30322:e=cx(c,!0);e=jx(c,e);e=new window.DataView(e.buffer,
e.byteOffset,e.byteLength);break;default:hx(c)}return e?new pw(a,b,f,d,e):null};
ax=function(a){var b=cx(a,!0),c=a.l.byteOffset+a.g;c=new window.DataView(a.l.buffer,c,Math.min(b,a.l.buffer.byteLength-c));c=new Yw(c,a.o+a.g);a.g+=b;return c};
gx=function(a){for(var b=cx(a,!0),c=lx(a),d=1;d<b;d++)c=256*c+lx(a);return c};
ix=function(a){var b=cx(a,!0),c=0;4==b?c=a.l.getFloat32(a.g):8==b&&(c=a.l.getFloat64(a.g));a.g+=b;return c};
hx=function(a){var b=cx(a,!0);a.g+=b};
ex=function(a){var b=a.g;a.g=0;var c=!1;bx(a,440786851)&&(a.g=0,bx(a,408125543)&&(c=!0));a.g=b;return c};
mx=function(a){var b=a.g;a.g=0;var c=1E6;$w(a,[408125543,357149030,2807729])&&(c=gx(a));a.g=b;return c};
ox=function(a,b){var c=a.g;a.g=0;if(!nx(a)||!bx(a,160))return a.g=c,window.NaN;cx(a,!0);var d=a.g;if(!bx(a,161))return a.g=c,window.NaN;cx(a,!0);lx(a);var e=lx(a)<<8|lx(a);a.g=d;if(!bx(a,155))return a.g=c,window.NaN;d=gx(a);a.g=c;return(e+d)*b/1E9};
nx=function(a){a:{if(ex(a)){if(!bx(a,408125543)){var b=!1;break a}cx(a,!0)}b=!0}if(!b||!bx(a,524531317))return!1;cx(a,!0);return!0};
$w=function(a,b){for(var c=0;c<b.length;c++){if(!bx(a,b[c]))return!1;c!=b.length-1&&cx(a,!0)}return!0};
bx=function(a,b){if(Zw(a))return!1;for(;cx(a,!1)!=b;)if(hx(a),Zw(a))return!1;return!0};
cx=function(a,b){var c=lx(a);if(1==c){for(var d=c=0;7>d;d++)c=256*c+lx(a);return c}d=128;for(var e=0;6>e&&d>c;e++)c=256*c+lx(a),d*=128;return b?c-d:c};
lx=function(a){return a.l.getUint8(a.g++)};
jx=function(a,b){var c=new window.Uint8Array(a.l.buffer,a.l.byteOffset+a.g,b);a.g+=b;return c};
px=function(a,b,c,d,e){this.info=a;this.g=b;this.range=c;this.l=null;this.o=d;this.pd=e};
qx=function(a){return a.range?new window.DataView(a.g,a.range.start,a.range.length):new window.DataView(a.g)};
rx=function(a,b){b=Math.min(b,a.info.Ja);var c=new Ow(a.info.type,a.info.g,a.info.range,a.info.na,a.info.startTime,a.info.duration,a.info.l,b,!1);c.o=!1;var d=Mw(a.range.start,b);c=new px(c,a.g,d,a.o,a.pd);var e=new Ow(a.info.type,a.info.g,a.info.range,a.info.na,a.info.startTime,a.info.duration,a.info.l+b,a.info.Ja-b,a.info.C);e.o=a.info.o;d=new g.Kw(d.end+1,a.range.end);d=new px(e,a.g,d,a.o,!1);return[c,d]};
sx=function(a,b){if(Ou(a.info.g.info)){for(var c=a.info.g.g,d=new window.DataView(a.g),e=window.NaN,f=window.NaN,k=0;zw(d,k);){var l=Aw(d,k);(0,window.isNaN)(e)&&(1936286840==l.type?e=Ew(l):1836476516==l.type&&(e=ww(l)));if(1952867444==l.type){!e&&c&&(e=xw(c));var m=Dw(l);(0,window.isNaN)(f)&&(f=Math.round(b*e)-m);Cw(l,m+f)}k=Bw(l.type)?k+8:k+l.size}return!0}c=new Yw(new window.DataView(a.g));e=a.pd?c:new Yw(new window.DataView(a.info.g.g.buffer));d=b;f=mx(e);e=c.g;c.g=0;if(nx(c)&&bx(c,231))if(k=
cx(c,!0),d=Math.floor(1E9*d/f),Math.ceil(Math.log(d)/Math.log(2)/8)>k)c=!1;else{for(f=k-1;0<=f;f--)c.l.setUint8(c.g+f,d&255),d>>>=8;c.g=e;c=!0}else c=!1;return c};
tx=function(a){var b;if(Ou(a.info.g.info)){for(var c=b=0,d=new window.DataView(a.g);zw(d,b);){var e=Aw(d,b);if(1936286840==e.type){var f=Ew(e),k=Fw(e);c+=k/f}b=Bw(e.type)?b+8:b+e.size}b=c||window.NaN;if(!(0<=b))a:{b=a.info.g.g;c=0;d=new window.DataView(a.g);for(e=0;zw(d,c);){f=Aw(d,c);if(1836476516==f.type)var l=ww(f);else if(1836019558==f.type){!l&&b&&(l=xw(b));if(!l){b=window.NaN;break a}k=rw(f.data,f.dataOffset,1953653094);e+=uw(k,l)}c=Bw(f.type)?c+8:c+f.size}b=e||window.NaN}}else l=new Yw(new window.DataView(a.g)),
b=a.pd?l:new Yw(new window.DataView(a.info.g.g.buffer)),b=ox(l,mx(b));return b||a.info.F};
ux=function(a){return Ou(a.info.g.info)?a.l?a.l.F&&!!rw(new window.DataView(a.g),0,1718909296):!1:ex(new Yw(new window.DataView(a.g)))};
vx=function(){var a=g.z("yt.player.utils.videoElement_");a||(a=g.zd("VIDEO"),g.y("yt.player.utils.videoElement_",a,void 0));return a};
yx=function(a){try{var b=vx();if(b.canPlayType){a=a?wx:xx;for(var c=0;c<a.length;c++)if(b.canPlayType(a[c]))return null}return"fmt.noneavailable"}catch(d){return"html5.missingapi"}};
zx=function(){var a=vx();return!!a.webkitSetPresentationMode&&g.Ba(a.webkitSupportsPresentationMode)&&!!a.webkitSupportsPresentationMode("picture-in-picture")};
Ax=function(){var a=vx();try{var b=a.muted;a.muted=!b;return a.muted!=b}catch(c){}return!1};
Bx=function(a){a=g.wd("DIV",{"class":a});window.document.body.appendChild(a);var b="none"==rh(a,"display");g.Ed(a);return b};
Cx=function(){this.length=1};
Dx=function(){this.buffered=new Cx};
Ex=function(a,b){this.l=a;this.o=b;this.A=0;Object.defineProperty(this,"timestampOffset",{get:this.iJ,set:this.mJ});Object.defineProperty(this,"buffered",{get:this.gJ})};
Fx=function(){this.length=0};
Gx=function(a){this.activeSourceBuffers=this.sourceBuffers=[];this.g=a;this.l=window.NaN;this.o=0;Object.defineProperty(this,"duration",{get:this.hJ,set:this.lJ});Object.defineProperty(this,"readyState",{get:this.jJ});this.g.addEventListener("webkitsourceclose",(0,g.A)(this.kJ,this),!0)};
Hx=function(a){return window.MediaSource?new window.MediaSource:window.WebKitMediaSource?new window.WebKitMediaSource:new Gx(a)};
Ix=function(a,b){g.J.call(this);this.F=new g.dt(this);g.K(this,this.F);this.l=this.g=null;this.o=a;var c=this.o;c=c.GB?c.g.webkitMediaSourceURL:window.URL.createObjectURL(c);this.B=new Tu(c,!0);this.H=this.C=this.A=null;this.I=b;et(this.F,this.o,["sourceopen","webkitsourceopen"],this.L);et(this.F,this.o,["sourceclose","webkitsourceclose"],this.K)};
Jx=function(a){a.H||(a.H=new window.Promise((0,g.A)(function(a){this.A=a},a)));
return a.H};
Kx=function(a){try{return"open"==a.o.readyState}catch(b){return!1}};
Lx=function(a){try{return"closed"==a.o.readyState}catch(b){return!0}};
Mx=function(a){return!!(a.g&&a.g.updating||a.l&&a.l.updating)};
Nx=function(){return!(!window.MediaSource||!window.MediaSource.isTypeSupported)};
Ox=function(a){return a.g?!!a.g.appendBuffer:Nx()};
Qx=function(a){if(/opus/.test(a)&&(g.Px&&!g.hp("38")||g.Px&&Pr("crkey")))return!1;if(window.MediaSource&&window.MediaSource.isTypeSupported)return window.MediaSource.isTypeSupported(a);if(/webm/.test(a)&&!Wr())return!1;'audio/mp4; codecs="mp4a.40.2"'==a&&(a='video/mp4; codecs="avc1.4d401f"');return!!vx().canPlayType(a)};
g.Rx=function(){this.lj=this.kj=!1;this.fg=2;this.A=20971520;this.B=8388608;this.l=window.NaN;this.aa=3145728;this.I=62914560;this.X=10485760;this.gg=this.Ta=0;this.C=window.NaN;this.wa=0;this.Uj=this.Bc=this.rw=2;this.fa=25;this.K=2097152;this.Aj=1048576;this.U=!1;this.F=1800;this.Ma=5;this.Ua=10;this.L=30;this.Ab=1;this.g=1.15;this.o=1.05;this.Nh=8;this.hj=!0;var a;!(a=Pr("xboxone"))&&(a=Xr())&&(a=/WebKit\/([0-9]+)/.exec(g.Qb),a=!(a&&602<=(0,window.parseInt)(a[1],10)));this.fJ=a||Rr();this.Ka=15;
this.bb=!1;this.nJ=this.ia=this.zk=!0;this.ej=this.H=!1;this.bk=.8;this.Za=this.oj=!1;this.pj=!0;this.ya=this.Ie=!1;this.pf=25;this.Zv=!0;this.oJ=this.qj=!1;this.ba=6;this.lf=this.V=!1;this.Mb=.5;this.R=0;this.Yb=this.ma=!1;this.Ra=0;this.Tc=this.gj=this.Sc=!1;this.Ya=0;this.rb=this.nb=this.mf=this.xd=!1;this.zv=.5;this.zb=2;this.hv=.8;this.jv=.2;this.Yt=this.nf=this.fj=this.gd=!1;this.Ga=15;this.Ha=1;this.rk=this.Ec=this.ij=this.Wa=this.wd=!1;this.qf=0;this.Or=this.ud=this.P=this.nj=this.Je=this.sa=
this.Xt=this.Le=this.Gc=this.mj=this.jj=!1};
Sx=function(a,b){1080<b.video.g&&!a.kj&&(a.A=36700160,a.B=5242880,a.aa=10485760,a.K=4194304,a.kj=!0);2160<b.video.g&&!a.lj&&(a.A=104857600,a.C=13107200,a.lj=!0);a.Aj=Math.min(a.K,5*b.g)};
Tx=function(){this.g=this.Ge=this.l=this.o=0};
Ux=function(a,b){a[b]||(a[b]=new Tx);return a[b]};
g.Vx=function(a){this.A=a;this.B=this.l=this.C="";this.g={};this.o=""};
Xx=function(a){Wx(a);return a.B};
Yx=function(a){Wx(a);return Ub(a.g,function(a){return null!==a})};
$x=function(a){Wx(a);if("/videoplayback"!=a.l){var b=a.clone();b.set("playerfallback","1");return b}var c=a.wb();b=new g.jo(c);if(Zx){var d=a.get("fvip");a=(0,window.decodeURIComponent)(a.get("mn")||"").split(",");if(d&&a&&1<a.length&&a[1])return c=b.g.replace(/^[^.]*/,""),g.lo(b,"r"+d+"---"+a[1]+c),b=new g.Vx(b.toString()),b.set("fallback_count","1"),b}d=b.g.match("\\.a1\\.googlevideo\\.com$");b.g.match("\\.googlevideo\\.com$")?(g.lo(b,"redirector.googlevideo.com"),c=b.toString()):b.g.match("r[1-9].*\\.c\\.youtube\\.com$")?
(g.lo(b,"www.youtube.com"),c=b.toString()):c=Jv(c);b=new g.Vx(c);b.set("cmo=pf","1");d&&b.set("cmo=td","a1.googlevideo.com");return b};
Wx=function(a){if(a.A){if(!Av(a.A))throw Error("Untrusted URL: "+a.A);var b=g.uo(a.A);a.C=b.A;a.B=b.g+(null!=b.B?":"+b.B:"");var c=b.l;if(0==c.indexOf("/videoplayback"))a.l="/videoplayback",c=c.substr(14);else if(0==c.indexOf("/api/manifest/")){var d=c.indexOf("/",14);0<d?(a.l=c.substr(0,d),c=c.substr(d+1)):(a.l=c,c="")}else a.l=c,c="";d=a.g;a.g=ay(c);g.Ka(a.g,by(b.I()));g.Ka(a.g,d);"index.m3u8"==a.g.file&&(delete a.g.file,a.l+="/file/index.m3u8");a.A="";a.o=""}};
cy=function(a){Wx(a);var b=a.C+(a.C?"://":"//")+a.B+a.l;if(Yx(a)){var c=[];g.Sb(a.g,function(a,b){null!==a&&c.push(b+"="+a)});
b+="?"+c.join("&")}return b};
ay=function(a){a=a.split("/");var b=0;a[0]||b++;for(var c={};b<a.length;b+=2)a[b]&&dy(c,a[b],a[b+1]);return c};
by=function(a){a=a.split("&");for(var b={},c=0;c<a.length;c++){var d=a[c],e=d.indexOf("=");0<e?dy(b,d.substr(0,e),d.substr(e+1)):d&&(b[d]="")}return b};
dy=function(a,b,c){if("cmo"==b){var d;0<=(d=c.indexOf("="))?(b="cmo="+c.substr(0,d),c=c.substr(d+1)):0<=(d=c.indexOf("%3D"))&&(b="cmo="+c.substr(0,d),c=c.substr(d+3))}a[b]=c};
ey=function(a){this.g=a;this.l={};this.o=""};
fy=function(a,b){var c=b.indexOf("?");if(0<c){var d=by(b.substr(c+1));g.Sb(d,function(a,b){this.set(b,a)},a);
b=b.substr(0,c)}c=ay(b);g.Sb(c,function(a,b){this.set(b,a)},a)};
gy=function(a){var b=a.g.wb(),c=[];g.Sb(a.l,function(a,b){c.push(b+"="+a)});
if(!c.length)return b;var d=c.join("&");a=Yx(a.g)?"&":"?";return b+a+d};
hy=function(a,b){var c=new g.Vx(b),d=c.get("req_id");d&&a.set("req_id",d);g.Sb(a.l,function(a,b){c.set(b,null)});
return c};
iy=function(a){this.B=a.clone();this.o=a;this.l=null;this.A=this.g=0};
ky=function(a,b){var c=Ux(b,Xx(a.o));if(2<=c.Ge||1<=c.g){var d=jy(a);d=Ux(b,Xx(d));if(d.Ge+d.g<=c.Ge+c.g)return!0}return!1};
g.ly=function(a,b){var c=b?jy(a):a.o;return new ey(c)};
jy=function(a){a.l||(a.l=$x(a.B));return a.l};
my=function(a){return 1<a.g?a.A+1E3*Math.pow(1.6,a.g-1)<g.Mt():!0};
g.ny=function(a,b,c){b.g===a.o&&(a.o=hy(b,c));b.g===a.l&&(a.l=hy(b,c))};
oy=function(a,b){this.g=a[0].g.A;this.o=b||"";this.ra=a;this.range=this.ra[0].range&&0<this.ra[0].Ja?Tw(this.ra):null;this.l=window.NaN;this.A=this.requestId=null};
py=function(a){return 4==a.ra[a.ra.length-1].type};
g.qy=function(a,b,c){/http[s]?:\/\//.test(a.o)?b=new ey(new g.Vx(a.o)):(b=null===a.A?ky(a.g,b):a.A,b=g.ly(a.g,b),a.o&&fy(b,a.o));(c=c||a.range)&&b.set("range",c.toString());a.requestId&&b.set("req_id",a.requestId);(0,window.isNaN)(a.l)||b.set("headm",a.l.toString());return b};
ry=function(a){if(a.range)return a.range.length;a=a.ra[0];return Math.round(a.F*a.g.info.g)};
sy=function(a,b,c){return a.range?new g.Kw(a.range.start+b,a.range.end):Mw(b,c)};
ty=function(a,b,c){this.index=null;this.info=b;this.initRange=c||null;this.g=null;this.C=this.F=!1;this.A=new iy(a);this.o=null};
uy=function(a,b){a.info&&a.info.video&&4==a.info.video.projectionType&&!a.o&&(Ou(a.info)?a.o=yw(b):2==a.info.containerType&&(a.o=kx(b)))};
vy=function(a,b,c,d,e,f){f=void 0===f?0:f;ty.call(this,a,b,d);this.index=e||new g.cw;this.B=f;this.I=c;this.H=!0;if(this.l=!c)this.F=!0};
wy=function(a,b,c){this.segments=[];this.l=a;this.o=void 0===b?0:b;this.g=void 0===c?!1:c};
zy=function(a,b,c){b=yy(a,b);return 0<=b&&(c||!a.segments[b].g)};
yy=function(a,b){return g.ib(a.segments,{na:b},function(a,b){return a.na-b.na})};
Ay=function(a,b,c){return new bw(b,c.startTime-(c.na-b)*a.l,a.l,0,"sq/"+b,void 0,void 0,!0)};
By=function(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?14400:e;vy.call(this,a,b,"",void 0,void 0,c);this.index=new wy(c||0,e,d)};
Cy=function(a,b,c,d,e){this.na=a;this.Pd=b;this.durationSecs=c;this.g=d||window.NaN;this.l=e||window.NaN};
Dy=function(a,b,c){for(;a;a=a.parentNode)if(a.attributes&&(!c||a.nodeName==c)){var d=a.getAttribute(b);if(d)return d}return""};
Ey=function(a,b){for(var c=a;c;c=c.parentNode){var d=c.getElementsByTagName(b);if(0<d.length)return d[0]}return null};
Fy=function(a){if(!a)return 0;var b=a.match(/PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/);return b?3600*(0,window.parseFloat)(b[2]||0)+60*(0,window.parseFloat)(b[4]||0)+(0,window.parseFloat)(b[6]||0):(0,window.parseFloat)(a)};
Gy=function(a){return a.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})$/)?a+"Z":a};
Hy=function(){this.g=[];this.l=null;this.B=0;this.A=[];this.o=!1;this.C=""};
Iy=function(a){var b=a.A;a.A=[];return b};
Jy=function(){this.A=[];this.g=null;this.l={};this.o={}};
Ny=function(a,b,c){var d=[];b=g.q(b.getElementsByTagName("SegmentTimeline"));for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=e.parentNode.parentNode,k=null;"Period"==f.nodeName?k=Ky(a):"AdaptationSet"==f.nodeName?k=Ly(a,f.attributes.id?f.attributes.id.value:f.attributes.mimetype.value):"Representation"==f.nodeName&&(k=My(a,f.attributes.id.value));if(null==k)return;k.update(e,c);cb(d,Iy(k))}lb(d,function(a){return a.Pd});
cb(a.A,d)};
Oy=function(a){a.g&&(a.g.g=[]);g.Sb(a.l,function(a){a.g=[]});
g.Sb(a.o,function(a){a.g=[]})};
Ky=function(a){a.g||(a.g=new Hy);return a.g};
Ly=function(a,b){a.l[b]||(a.l[b]=new Hy);return a.l[b]};
My=function(a,b){a.o[b]||(a.o[b]=new Hy);return a.o[b]};
g.Py=function(){this.va=0;this.g=new window.Float64Array(128);this.l=new window.Float64Array(128);this.A=1;this.o=!1};
Qy=function(a){if(a.g.length<a.va+1){var b=2*a.g.length;b+=2;var c=a.g;a.g=new window.Float64Array(b+1);var d=a.l;a.l=new window.Float64Array(b+1);for(b=0;b<a.va+1;b++)a.g[b]=c[b],a.l[b]=d[b]}};
g.Ry=function(a,b,c,d,e,f){ty.call(this,a,b,c||void 0);this.indexRange=d;this.B=null;this.index=new g.Py;this.l=e;this.lastModified=f};
Sy=function(a,b,c,d){for(var e=[];b<=a.index.Pb();b++){var f=a.index,k=b;f=Mw(f.Fk(k),k+1<f.va||f.o?f.g[k+1]-f.g[k]:-1);k=a.index.nd(b);var l=a.index.getDuration(b),m=Math.max(0,c-f.start),n=Math.min(f.end+1,c+d)-(f.start+m);e.push(new Ow(3,a,f,b,k,l,m,n,b==a.index.Pb()&&m+n==f.length));if(f.start+m+n>=c+d)break}return new oy(e)};
Uy=function(a,b){return Ty(function(a,b){return hs(a,b,4,1E3)},a,b)};
g.Vy=function(a){var b;a.responseType&&"text"!=a.responseType?"arraybuffer"==a.responseType&&(b=String.fromCharCode.apply(String,new window.Uint8Array(a.response))):b=a.responseText;return!b||2048<b.length?"":0==b.indexOf("https://")?b:""};
Ty=function(a,b,c){return a(b,c).then(function(b){var d=g.Vy(b);return d?Ty(a,d,c):b})};
Xy=function(a){a=a.split("");Wy.oY(a,28);Wy.oY(a,47);Wy.bA(a,27);Wy.I4(a,1);Wy.bA(a,50);Wy.oY(a,6);return a.join("")};
Yy=function(a,b,c){a=void 0===a?"":a;b=void 0===b?null:b;c=void 0===c?!1:c;g.R.call(this);this.R=this.duration=0;this.isLive=this.o=!1;this.K=g.Mt();this.F=window.Infinity;this.g={};this.V=a||"";this.C=this.P=0;this.B=null;this.fa=!!b&&b.g("html5_live_nonzero_first_segment_start_time");this.l=!1;this.L=[];this.ia=!!b&&b.g("html5_live_self_init_segments");this.A=null;this.ma=c;this.ba=!b||!b.g("html5_manifest_without_credentials");this.H=0;this.U=!!b&&b.g("disable_html5_manifest_namespace_redux");
this.aa="";this.I=window.NaN;this.X=b&&b.g("disable_html5_duration_caching")?window.Infinity:10};
Zy=function(a){return Ub(a.g,function(a){return!!a.info.Ob})};
g.$y=function(a){return Ub(a.g,function(a){return a.info.mimeType.includes("vtt")})};
az=function(a){return g.Vb(a.g,function(a){return a.info.video?a.Jo():!0})};
dz=function(a,b,c,d,e){c=void 0===c?0:c;return(void 0===d?0:d)?bz(a,b,e):cz(a,b,c,e)};
cz=function(a,b,c,d){c=void 0===c?0:c;var e=new Yy("",d,!1);e.duration=c||0;(0,g.G)(a,function(a){var c=ez(a,b,e.duration),d=Lw(a.init),f=Lw(a.index),n=(0,window.parseInt)(a.clen,10),p=fz(a.url,a.s);a=(0,window.parseInt)(a.lmt,10);p&&(c=new g.Ry(p,c,d,f,n,a),e.g[c.info.id]=c)});
return e};
bz=function(a,b,c){var d=new Yy("",c,!0);(0,g.G)(a,function(a){var e=ez(a,b),k=fz(a.url,a.s),l=(0,window.parseInt)(a.target_duration_sec,10);a=(0,window.parseInt)(a.max_dvr_duration_sec,10)||14400;k&&(e=new By(k,e,l,c&&c.g("html5_manifestless_always"),a),d.g[e.info.id]=e)});
d.o=!0;d.l=!0;d.isLive=!0;return d};
ez=function(a,b,c){c=void 0===c?0:c;var d=a.type,e=a.itag,f=gz(a),k=null;Qu(d)&&(k=(a.size||"640x360").split("x"),k=new Fu(+k[0],+k[1],+a.fps,+a.projection_type,+a.stereo_layout,void 0,!!a.isAccelerated,a.quality_label,a.eotf,a.primaries,!!a.isAcceleratedUiEnabled),d=hz(d,k));var l=null,m=null;if(Pu(d)){l=0;if("258"==e||"261"==e)l=6;l=new Bu(void 0,l,+a.spatial_audio_type);a.name&&(m=new Cu(a.name,a.audio_track_id,"1"==a.isDefault))}e=(0,window.parseInt)(a.bitrate,10)/8;var n=(0,window.parseInt)(a.clen,
10);c=c&&n?n/c:0;var p=null;b&&a.drm_families&&(p={},(0,g.G)(a.drm_families.split(","),function(a){p[a]=b[a]}));
return new Lu(f,d,l,k,m,p,e,c)};
gz=function(a){var b=a.itag;a.xtags&&(b=a.itag+";"+a.xtags);return b};
fz=function(a,b){b=void 0===b?"":b;var c=new g.Vx(a);a.match(/https:\/\/yt.akamaized.net/)||c.set("alr","yes");b&&c.set("signature",Xy(b));return c};
mz=function(a,b){var c=Dy(b,"id");c=c.replace(":",";");"captions"==c&&(c=Dy(b,"lang"));var d=Dy(b,"mimeType"),e=Dy(b,"codecs");d=e?d+'; codecs="'+e+'"':d;e=(0,window.parseInt)(Dy(b,"bandwidth"),10)/8;var f=(0,window.parseInt)(Ey(b,"BaseURL").getAttribute(iz(a,"contentLength")),10);f=a.duration&&f?f/a.duration:0;var k=null;if(Qu(d)){k=(0,window.parseInt)(Dy(b,"width"),10);var l=(0,window.parseInt)(Dy(b,"height"),10),m=(0,window.parseInt)(Dy(b,"frameRate"),10),n=jz(Dy(b,iz(a,"projectionType")));a:switch(Dy(b,
iz(a,"stereoLayout"))){case "layout_left_right":var p=1;break a;case "layout_top_bottom":p=2;break a;default:p=0}k=new Fu(k,l,m,n,p)}m=l=null;if(Pu(d))if(l=(0,window.parseInt)(Dy(b,"audioSamplingRate"),10),m=(0,window.parseInt)(Dy(b.getElementsByTagName("AudioChannelConfiguration")[0],"value"),10),n=kz(Dy(b,iz(a,"spatialAudioType"))),l=new Bu(l,m,n),m=Dy(b,"lang")||"und",n=Ey(b,"Role")){var u=Dy(n,"value")||"";$b(lz,u)?(n=m+"."+lz[u],p="main"==u,m=Dy(b,iz(a,"langName"))||m+" - "+u,m=new Cu(m,n,p)):
m=null}else m=null;p=null;if(n=Ey(b,"ContentProtection"))if(g.Sr())if((p=n.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==p.value)for(p={},n=n.firstChild;null!=n;n=n.nextSibling)"yt:SystemURL"==n.nodeName&&(p[n.attributes.type.value]=n.textContent.trim());else p=null;else if((p=n.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==p.textContent)for(p={},n=n.firstChild;null!=n;n=n.nextSibling)"SystemURL"==n.localName&&"http://youtube.com/yt/2012/10/10"==n.namespaceURI&&(p[n.attributes.type.textContent]=
n.textContent.trim());else p=null;return new Lu(c,d,l,k,m,p,e,f)};
jz=function(a){switch(a){case "equirectangular":return 2;case "equirectangular_threed_top_bottom":return 3;case "mesh":return 4;case "rectangular":return 1;default:return 0}};
kz=function(a){switch(a){case "spatial_audio_type_ambisonics_5_1":return 1;case "spatial_audio_type_ambisonics_quad":return 2;case "spatial_audio_type_foa_with_non_diegetic":return 3;default:return 0}};
nz=function(a,b){b=void 0===b?"":b;a.C=1;a.K=g.Mt();return g.Wf(Uy(b||a.V,{format:"RAW",method:"GET",withCredentials:a.ba}).then((0,g.A)(a.az,a)),(0,g.A)(a.cz,a))};
oz=function(a,b){var c=new Yy,d;for(d in a)c[d]=g.ic(a[d]);var e={},f=!1;g.Sb(a.g,function(a,c){if(a){var d=b(a,c);d?(e[c]=d,f=!0):e[c]=a}});
c.g=e;return f?c:null};
pz=function(a,b,c){var d=a.getAttribute("media"),e=null;c||(a=a.getAttribute("mediaRange"),null!=a&&(0<=(0,window.parseInt)(a.split("-")[1],10)?e=Lw(a):d=d+"?range="+a));return new bw(b.na,b.Pd,b.durationSecs,b.g,d,e,b.l)};
qz=function(a){return a.isLive&&g.Mt()-a.K>=a.F};
rz=function(a){var b=a.F;(0,window.isFinite)(b)&&(qz(a)?a.us():(b=Math.max(0,a.K+b-g.Mt()),a.A||(a.A=new g.P(a.us,b,a),g.K(a,a.A)),a.A.start(b)))};
sz=function(a){a=a.g;for(var b in a){var c=a[b].index;if(c&&c.Wb())return c.Pb()+1}return 0};
tz=function(a){if(!(0,window.isNaN)(a.I))return a.I;var b=a.g,c;for(c in b){var d=b[c].index;if(d&&d.Wb()){b=0;for(c=d.Re();c<=d.Pb();c++)b+=d.getDuration(c);b/=d.fh();b=.5*Math.round(b/.5);d.fh()>a.X&&(a.I=b);return b}if(a.isLive&&(d=b[c],d.B))return d.B}return window.NaN};
uz=function(a,b){for(var c in a.g){var d=a.g[c].index;if(d&&d.Wb()){var e=d.Cf(b),f=d.In(e);if(f)return f+b-d.nd(e)}}return window.NaN};
vz=function(a,b){g.Sb(a.g,function(a){g.Sb(b,function(b,c){var d=a.A;d.o.set(c,b);d.B.set(c,b);d.l&&d.l.set(c,b)})})};
wz=function(a,b,c){var d=!1,e;for(e in a.g)if(!!a.g[e].info.video==c){var f=a.g[e].index;zy(f,b.na)||(f.ts(b),d=!0)}return d};
xz=function(a,b,c){for(var d in a.g)if(!!a.g[d].info.video==c){var e=a.g[d].index,f=yy(e,b);0<=f&&e.segments.splice(f,1)}};
iz=function(a,b){return a.U?"yt:"+b:a.aa+":"+b};
hz=function(a,b){if('video/webm; codecs="vp9.2"'!=a)return a;null===yz&&(yz=window.MediaSource&&window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.16"')&&!window.MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.99"'));yz&&(a='video/webm; codecs="vp09.02.51.10.01.'+("bt2020"==b.primaries?"09":"01")+"."+("smpte2084"==b.l?"16":"arib-std-b67"==b.l?"18":"01")+'"');return a};
zz=function(a){return g.Pa(Object.values(a.g),function(a){return a.info.Ob&&a.info.video?480<a.info.video.g&&"H"==a.info.l:!1})};
Az=function(a,b,c,d){this.flavor=a;this.g=b;this.A=c;this.o={};this.l=null;this.fairPlayCert="";this.B=!!d&&d.g("edge_nonprefixed_eme")};
Cz=function(a){return a.B?!1:!a.l&&!!Bz()&&"com.microsoft.playready"==a.g};
Dz=function(a){return"com.microsoft.playready"==a.g};
Fz=function(a){return Ez&&"com.microsoft.playready"==a.g&&!!window.navigator.requestMediaKeySystemAccess};
Gz=function(a){return!a.l&&!!Bz()&&"com.apple.fps.1_0"==a.g};
Bz=function(){var a=window.MSMediaKeys;Xr()&&!a&&(a=window.WebKitMediaKeys);return a&&a.isTypeSupported?a:null};
Iz=function(a){return window.navigator.requestMediaKeySystemAccess?g.Px?g.hp("45"):Ez||g.qd?a.g("edge_nonprefixed_eme"):g.Hz?g.hp("47"):!a.g("html5_disable_nonprefixed_eme_for_other"):!1};
Kz=function(a,b,c){g.J.call(this);this.l=[];this.g={};this.o={};this.B=null;this.A=b;this.I=c;this.C=!1;Jz(this,a)};
Jz=function(a,b){for(var c in b)for(var d=g.q(b[c]),e=d.next();!e.done;e=d.next()){e=e.value;if(!e.Ob)return;for(var f in e.Ob){if(!Lz[f])return;for(var k=g.q(Lz[f]),l=k.next();!l.done;l=k.next())l=l.value,a.g[l]=a.g[l]||new Az(f,l,e.Ob[f],a.A),a.o[f]=a.o[f]||{},a.o[f][e.mimeType]=!0}}Ur()?(a.l=["com.youtube.fairplay"],a.g["com.youtube.fairplay"]=new Az("fairplay","com.youtube.fairplay","",a.A),a.o.fairplay={'audio/mp4; codecs="avc1.4d4015"':!0,'video/mp4; codecs="mp4a.40.2"':!0}):a.l=Mz.filter(function(b){return a.g[b]?
!(a.I&&"widevine"==a.g[b].flavor):!1})};
Nz=function(a){if(!a.ga())if(0==a.l.length)a.B(null);else{var b=a.l[0],c=a.g[b],d={initDataTypes:["cenc","webm"],audioCapabilities:[],videoCapabilities:[]};Dz(c)&&(d.initDataTypes=["keyids","cenc"]);for(var e in a.o[c.flavor]){var f=0==e.indexOf("audio/"),k=f?d.audioCapabilities:d.videoCapabilities;a.A.g("html5_widevine_robustness_strings")&&"widevine"==c.flavor&&!a.C?f?k.push({contentType:e,robustness:"SW_SECURE_CRYPTO"}):(k.push({contentType:e,robustness:"HW_DECODE_ALL"}),k.push({contentType:e,
robustness:"SW_SECURE_DECODE"})):k.push({contentType:e})}window.navigator.requestMediaKeySystemAccess(b,[d]).then(jr((0,g.A)(a.H,a,c)),jr((0,g.A)(a.F,a)))}};
Oz=function(a,b){function c(a){b.o[a.contentType]=!0}
if(Dz(b)){var d=vx(),e;for(e in a.o[b.flavor])b.o[e]=!!d.canPlayType(e)}else d=b.l.getConfiguration(),d.audioCapabilities&&d.audioCapabilities.forEach(c),d.videoCapabilities&&d.videoCapabilities.forEach(c)};
Qz=function(a){if(Bz()&&g.Qk)a.B(new Az("fairplay","com.apple.fps.1_0","",a.A));else{var b=Pz(),c=g.Pa(a.l,function(c){var d=a.g[c],f=!1,k=!1,l;for(l in a.o[d.flavor])b(l,c)&&(d.o[l]=!0,f=f||0==l.indexOf("audio/"),k=k||0==l.indexOf("video/"));return f&&k});
c=c?a.g[c]:null;a.l=[];a.B(c)}};
Pz=function(){var a=Bz();if(a)return function(b,d){return a.isTypeSupported(d,b)};
var b=vx();return b&&(b.addKey||b.webkitAddKey)?(0,g.A)(b.canPlayType,b):function(){return!1}};
Rz=function(){this.l=2048;this.o=17;this.B=13E4;this.F=.5;this.C=!1;this.A=0;this.g=!1};
Sz=function(a){this.B=Math.exp(Math.log(.5)/a);this.o=this.A=0};
Tz=function(a,b,c,d){this.L=b;this.o=Math.round(a*b);this.B=Array(this.o);for(a=0;a<this.o;a++)this.B[a]=window.Infinity;this.K=Array(this.o);for(a=0;a<this.o;a++)this.K[a]=a;this.A=0;this.I=!1;this.H=!0;this.C=void 0===c?.5:c;this.F=void 0===d?0:d};
Uz=function(a,b){if(!a.I&&0==a.A)return 0;a.H&&(g.kb(a.K,function(b,d){return a.B[b]-a.B[d]}),a.H=!1);
return a.B[a.K[Math.round(b*((a.I?a.o:a.A)-1))]]||0};
Vz=function(){this.l=0;this.bandwidthEstimate=this.F=this.A=this.B=window.NaN;this.C=0;this.I=this.K=this.o=this.H=window.NaN;this.g=""};
Wz=function(a){this.policy=a;this.H=this.K=0;this.A=-1;this.F=this.o=g.Mt();this.C=new Tz(4,1,.6,.4);this.I=new Tz(10,1,.5,.4);this.l=a.C?new Sz(a.o):new Tz(a.o,20,.5,.4);this.B=new Tz(5,1,.25);this.g=new Tz(30,1,.5);a=g.tu("yt-player-bandwidth")||{};this.l.g(this.policy.F,0<a.byterate?a.byterate:this.policy.B);0<a.delay&&this.C.g(1,Math.min(+a.delay,2));0<a.stall&&this.I.g(1,+a.stall);0<a.init&&(this.F=Math.min(a.init,this.F));this.A=g.Mt()};
Xz=function(a,b,c){b=Math.max(b,.05);a.l.g(b,c/b);a.o=g.Mt()};
Zz=function(a,b,c){b=Math.max(b,a.policy.l);a.I.g(1,c/b);Yz(a)};
$z=function(a){a=a.C.l();a=(0,window.isNaN)(a)?.5:a;return a=Math.min(a,5)};
aA=function(a,b,c){(0,window.isNaN)(c)||(a.H+=c);(0,window.isNaN)(b)||(a.K+=b)};
bA=function(a){return a.I.l()||0};
cA=function(a){a=a.l.l();return 0<a?a:1};
dA=function(a){var b=cA(a);a.policy.g&&(b=1/(bA(a)+1/b));a=a.B.l();return Math.max(b,0<a?a:1)};
eA=function(a){var b={};b.delay=$z(a);b.stall=bA(a);b.byterate=cA(a);b.init=a.F;return b};
Yz=function(a){-1<a.A&&3E4<g.Mt()-a.A&&(dv(eA(a)),a.A=g.Mt())};
fA=function(a){return 4E3<=g.Mt()-a.o};
gA=function(a,b,c){this.videoInfos=a;this.g=b||null;this.audioTracks=[];this.l=c||null;if(this.g){var d={};(0,g.G)(this.g,(0,g.A)(function(a){if(a.dc&&!d[a.id]){var b=new Yv(a.id,a.dc);d[a.id]=b;this.audioTracks.push(b)}},this))}};
hA=function(a,b,c,d){this.l=a;this.g=b;this.C=c;this.F=void 0===d?!1:d;this.A={};this.B=!!g.z("cast.receiver.platform.canDisplayType");a=g.z("cast.receiver.platform.getValue");this.o=!this.B&&a&&a("max-video-resolution-vpx")||null};
lA=function(a,b,c){if(2.2!=iA&&yx(a.g)||c)return js();var d={};a=vx();b=g.q(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,Ku(c.yf)in jA||"5"==Ku(c.yf)?0:kA(a,c.Se().mimeType)){var e=c.yf.video.quality;d[e]&&2!=d[e].Se().containerType||(d[e]=c)}var f=[];d.auto&&f.push(d.auto);(0,g.G)(Iu,function(a){(a=d[a])&&f.push(a)});
return ks(f)};
mA=function(){var a=Rr()&&!g.hp(29),b=Pr("google tv")&&Pr("chrome")&&!g.hp(30),c=Ur();return a||b||c?!1:!!(window.MediaSource||window.WebKitMediaSource||window.HTMLMediaElement&&window.HTMLMediaElement.prototype.webkitSourceAddId)};
kA=function(a,b){var c=a.canPlayType(b);nA?c=c||oA[b]:2.2==iA?c=c||pA[b]:Rr()&&(c=c||qA[b]);return!!c};
g.rA=function(){return!(!kA(vx(),"application/x-mpegURL")&&!mA())};
tA=function(a,b){var c={},d=b.Hd()||b.ue()||b.we();Tr();for(var e in b.g){var f=b.g[e],k=Ku(f.info);("304"!=k&&"266"!=k||b.o||d)&&sA(a,f.info)&&(c[f.info.l]=c[f.info.l]||[],c[f.info.l].push(f.info))}return c};
xA=function(a,b,c){var d={},e;g.Sb(b,function(b,k){var f=b.filter(function(b){return b.Ob?c&&b.Ob[c.flavor]&&c.o[b.mimeType]?"261"!=Ku(b)||uA(a,vA)?"("!=b.l&&"(h"!=b.l||uA(a,wA)||a.F?!0:!1:(e||(e=vx()),!1):!1:!0});
f.length&&(d[k]=f)});
return d};
KA=function(a,b,c,d,e){function f(a){return!!k[a]}
var k=tA(a,b);Zy(b)&&(k=xA(a,k,c));var l=a.l.g("html5_disable_vp9_hdr_enc")?yA:zA;a.g?!Pr("windows nt 5.1")||g.Hz&&!a.l.g("html5_prefer_h264_on_xp")?(b.ue()||b.we()||b.Hd())&&AA&&6>=iA&&(l=BA):l=BA:l=CA;c=DA;d&&(a.g&&(l=BA),c=EA);if(Vr()||Wr()||uA(a,vA))c=FA;(b.ue()||b.we()||b.Hd())&&e&&(c=GA.concat(c));d=g.Pa(l,f);e=g.Pa(c,f);if(!d||!e)return js();"9"==d&&k.h&&(c=function(a,b){return Math.max(a,b.video.height)},l=Xk(k["9"],c,0),Xk(k.h,c,0)>1.5*l&&(d="h"),a.l.g("html5_vp9_live_blacklist_edge")&&b.o&&
Ez&&(d="h"));
b=k[d];c=k[e];b=HA(a,b);IA(b,c);return ks(new gA(b,c,JA(a,k,d,e)))};
JA=function(a,b,c,d){var e=a.g?b.h:b[c];b=b.a;c=a.g&&"h"!=c;return e&&b&&(c||"a"!=d)?(e=HA(a,e),IA(e,b),new gA(e,b)):null};
IA=function(a,b){g.kb(a,function(a,b){return b.video.height*b.video.width-a.video.height*a.video.width||b.g-a.g});
g.kb(b,function(a,b){return b.g-a.g})};
HA=function(a,b){var c=(0,g.lk)(b,function(a){return 32<a.video.fps});
c&&(b=a.C||uA(a,LA)?(0,g.Gd)(b,function(a){var b;(b=32<a.video.fps)||(a=a.video,b=!(854<a.width||480<a.height));return b}):(0,g.Gd)(b,function(a){return!(32<a.video.fps)}));
c&&Vr()&&(b=(0,g.Gd)(b,function(a){return"299"!=Ku(a)}));
return b};
sA=function(a,b){if("0"==Ku(b)&&!a.g)return!0;var c=b.mimeType;if(b.video&&(Hu(b.video)||"bt2020"==b.video.primaries)&&!(24<window.screen.pixelDepth||uA(a,MA))||!("338"!=Ku(b)||g.Px&&g.hp(53)))return!1;var d={};b.video&&(b.video.width&&(d[NA.name]=b.video.width),b.video.height&&(d[OA.name]=b.video.height),b.video.fps&&(d[LA.name]=b.video.fps),b.video.l&&(d[MA.name]=b.video.l),b.g&&(d[PA.name]=8*b.g),"("==b.l&&(d[wA.name]="subsample"));b.audio&&b.audio.g&&(d[vA.name]=b.audio.g);for(var e in QA){var f=
QA[e];if(d[f.name]&&!(f==MA&&0<b.mimeType.indexOf("vp09.02")))if(uA(a,f))if(a.o){if(a.o[f.name]<d[f.name])return!1}else c=c+"; "+f.name+"="+d[f.name];else if(Nu(b)&&f==MA)return!1}!a.l.g("disable_html5_cast_hdcp_filter2")&&a.B&&b.video&&1080<b.video.g&&b.Ob&&(c+="; hdcp=2.2");return RA(a,c)};
uA=function(a,b){if(!(b.name in a.A)){var c=a.A,d=b.name;if(a.o)var e=!!a.o[b.name];else b==PA&&a.l.g("html5_ignore_bad_bitrates")&&RA(a,'video/webm; codecs="vp9"; width=3840; height=2160; bitrate=2000000')&&!RA(a,'video/webm; codecs="vp9"; width=3840; height=2160; bitrate=20000000')?e=!1:(b.video?(e='video/webm; codecs="vp9"',RA(a,e)||(e='video/mp4; codecs="avc1.4d401e"')):(e='audio/webm; codecs="opus"',RA(a,e)||(e='audio/mp4; codecs="mp4a.40.2"')),e=RA(a,e+"; "+b.name+"="+b.valid)&&!RA(a,e+"; "+
b.name+"="+b.wg));c[d]=e}return a.A[b.name]};
RA=function(a,b){return a.B?window.cast.receiver.platform.canDisplayType(b):Qx(b)};
SA=function(){g.R.call(this);this.za={}};
TA=function(a,b){return void 0==b?a:"1"==b?!0:!1};
UA=function(a,b,c){for(var d in c)if(c[d]==b)return c[d];return a};
VA=function(a,b){return void 0==b?a:Number(b)};
WA=function(a,b){return void 0==b?a:b.toString()};
YA=function(a,b){if(b){if("fullwidth"==a)return window.Infinity;if("fullheight"==a)return 0}if(a){var c=a.match(XA);if(c){var d=(0,window.parseFloat)(c[2]);if(0<d)return(0,window.parseFloat)(c[1])/d}}return window.NaN};
ZA=function(a,b){var c=g.Eu.auto,d=b?g.Eu[b]:void 0;return d>g.Eu.medium?new Vu(d,c,!1):d>=c?new Vu(c,d,!1):a};
$A=function(a){return a.docid||a.video_id||a.videoId||a.id};
bB=function(){this.g=g.hr("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=g.wu.get(""+this.g,void 0)){a=(0,window.decodeURIComponent)(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(aB[d]=c.toString())}}};
cB=function(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);};
dB=function(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);};
wB=function(a){g.J.call(this);a=g.hc(a);this.Ka=!1;this.sa=this.ya="";this.Gc={};this.gj=WA("",a.csp_nonce);this.experiments=new Su(a.fexp,a.fflags);this.forcedExperiments=a.forced_experiments||null;try{var b=window.document.location.toString()}catch(e){b=""}this.wa=b;this.aa=(this.o=eB.test(this.wa))?WA("",a.loaderUrl):this.wa;this.ob=fB.test(this.aa);this.mj=Ev(this.aa);this.Ma=TA(!1,a.privembed);this.K=(this.Ha=TA(!1,a.forcenewui))||this.experiments.g("embed_new_info_bar")&&this.o;this.protocol=
0==this.wa.indexOf("http:")?"http":"https";this.baseYtUrl=rv(a.BASE_YT_URL)||rv(this.wa)||this.protocol+"://www.youtube.com/";b=a.el;var c="detailpage";"adunit"==b?c=this.experiments.g("html5_adunit_from_adformat")?this.o?"embedded":"detailpage":this.mj?"adunit":"embedded":"embedded"==b||this.ob?c=UA(c,b,gB):b&&(c="embedded");this.V=c;Yt();b=null;c=a.ps;var d=g.Ta(hB,c);!c||d&&!this.ob||(b=c);this.g=b;this.I=(this.Rb=g.Ta(hB,this.g))&&"play"!=this.g&&"jamboard"!=this.g;this.lj=!this.I;b={};this.B=
(b.c=a.c||"web",b.cver=a.cver||"html5",b.cplayer="UNIPLAYER",b);this.P=TA(!1,a.disableplaybackui);this.Ga=!this.P&&!(!vx().defaultPlaybackRate||g.ph&&!Pr("chrome")||iB||jB||Pr("android")||Pr("silk"));this.l=TA("blazer"==this.g,a.is_html5_mobile_device);this.l?b=!0:(b=(0,window.parseInt)((0,g.H)()/1E3,10),c=bB.getInstance(),b=this.experiments.g("block_desktop_background_playback_with_mobile_cookie")&&c&&b>(0,window.parseInt)(c.get("dhmu",b.toString()),10));this.kj=b;this.fa="3"==this.A||this.l||TA(!1,
a.use_media_volume);this.U=Ax();this.Aj=kB;(iB||jB||g.Qk)&&"blazer"!=this.g&&g.lB(this);this.Ua=g.mB(this)&&this.experiments.g("use_rawcc_captions");this.H=TA(!1,a.is_dni);this.zb=WA("#cc181e",a.dni_color);this.Tc=this.Ha||TA("adunit"!=this.V&&!nB(this)&&!this.Rb,a.showinfo);this.lf=TA(!1,a.playsinline);b=this.l&&AA&&2.3>=iA;c=this.l;c=oB(this)||!b&&TA(c,a.use_native_controls)?"3":"1";this.A="0"!=a.controls?c:"0";this.useTabletControls=this.l;this.color=UA("red",a.color,pB);this.nj="3"==this.A||TA(!1,
a.modestbranding)&&"red"==this.color;this.ba=0==this.aa.indexOf(this.baseYtUrl);this.pf=(c=!this.ba&&!nB(this)&&!this.I&&!this.Rb)&&(this.H||!this.nj)&&"1"==this.A;this.qf=g.qB(this)&&c&&!this.Tc&&!this.pf;this.zk=this.oj=b;this.fg=!jB||g.wc(601)?!0:!1;this.jj=this.o||!1;this.Ra=nB(this)?"":(this.aa||a.post_message_origin||"").substring(0,128);this.widgetReferrer=WA("",a.widget_referrer);this.Ab=(!this.ob||TA(!0,a.enablecastapi))&&"1"==this.A&&!this.l&&(nB(this)||g.qB(this)||g.rB(this));this.hj=((this.bb=
TA(!1,a.autoplay))||nB(this))&&!a.suppress_autoplay_on_watch;this.wd=!this.l&&!Pr("nintendo wiiu")&&!Pr("nintendo 3ds")||TA(!1,a.autoplayoverride);this.gd=TA(!1,a.mutedautoplay)&&!1;b=(nB(this)||"adunit"==this.V)&&("blazer"==this.g||"mweb-polymer"==this.g);this.Yb=!TA(!0,a.fs);this.ma=!this.Yb&&(b||Hs());this.fj=this.experiments.g("uniplayer_block_pip")&&Rr()&&g.hp(58)&&!(g.sB&&Pr("version/"));this.ud=this.Ha||TA(!this.Rb,a.rel);this.ia=g.rB(this);this.Sc="blazer"==this.g||"mweb-polymer"==this.g;
switch(this.g){case "blogger":b="bl";break;case "gmail":b="gm";break;case "books":b="gb";break;case "docs":b="gd";break;case "google-live":b="gl";break;case "play":b="gp";break;case "chat":b="hc";break;case "picasaweb":b="pw";break;default:b="yt"}this.Wa=b;this.jc=WA("",a.authuser);this.bk=(this.o&&!this.Ma||!!this.jc)&&TA(!this.I,a.showwatchlater);this.Ie=TA(!1,a.disablekb);this.Je=WA("",a.ecver);this.loop=TA(!1,a.loop);this.pageId=WA("",a.pageid);this.pj=ZA(Yu,a.vq);this.Uj=TA(!0,a.canplaylive);
this.ij=TA(this.Rb,a.ss);(b=a.video_container_override)?(c=b.split("x"),2!=c.length?b=null:(b=(0,window.parseInt)(c[0],10),c=(0,window.parseInt)(c[1],10),b=(0,window.isNaN)(b)||(0,window.isNaN)(c)||0>=b*c?null:new g.bd(b,c))):b=null;this.gg=b;this.mute=TA(!1,a.mute);this.storeUserVolume=!this.mute&&TA("0"!=this.A,a.store_user_volume);this.sf="3"==this.A?3:UA(void 0,a.iv_load_policy,tB);this.uf=WA("",a.cc_lang_pref);b=UA(2,a.cc_load_policy,tB);"3"==this.A&&2==b&&(b=3);this.vf=b;this.Bc=WA("en_US",
a.hl);this.region=WA("US",a.cr);this.hostLanguage=WA("en",a.host_language);this.ej=!this.Ma&&Math.random()<this.experiments.l("web_player_api_logging_fraction");b=!this.experiments.g("web_player_interaction_logging_killswitch");this.F=!this.Ma&&b;this.Mb=new window.Set;this.C=TA(!0,a.deviceHasDisplay);this.We=VA(this.We,a.ismb);this.lj?(b=a.vss_host||"s.youtube.com",this.experiments.g("www_for_videostats")&&"s.youtube.com"==b&&(b=g.Ag(this.baseYtUrl)||"www.youtube.com")):b="video.google.com";this.Nh=
b;this.jf(a);this.Gc=a;this.L=new SA;g.K(this,this.L);this.X=this.l;this.Le={innertubeApiKey:WA("",a.innertube_api_key),innertubeApiVersion:WA("",a.innertube_api_version),fn:this.B.c,innertubeContextClientVersion:WA("",a.innertube_context_client_version),hn:this.hostLanguage,gn:this.region,tk:""};this.nf=void 0!=window.WebKitPlaybackTargetAvailabilityEvent;this.R=new hA(this.experiments,this.C,this.experiments.g("html5_force_hfr_support")?!0:g.uB(this)||Vr()||Wr()||vB(this),g.Px&&56<=g.Or()||vB(this));
b=new Rz;g.lB(this)&&(b.C=!0,b.F=.1);this.experiments.g("html5_ewma_bandwidth_estimator")&&(b.C=!0);this.We&&(b.B=this.We/8);b.o=this.experiments.l("html5_bandwidth_window_size")||b.o;b.g=this.experiments.g("html5_composite_stall");this.schedule=new Wz(b);this.enableSafetyMode=TA(!1,a.enable_safety_mode);this.xd=TA(this.P?!1:nB(this)&&"blazer"!=this.g&&"mweb-polymer"!=this.g,a.autonav);this.Ec=TA(!1,a.send_visitor_id_header)||this.experiments.A;this.tf=!1;this.mf=Yu;this.qj=g.Mt();this.Fd=!1;this.rk=
TA(!1,a.transparent_background);this.disableNativeContextMenu=TA(!1,a.disable_native_context_menu)};
xB=function(a,b){return!a.Rb&&Rr()&&g.hp(55)&&!b};
yB=function(a){var b=g.Ag(a.baseYtUrl);(a=g.Bg(a.baseYtUrl))&&(b+=":"+a);return"www.youtube-nocookie.com"==b?"www.youtube.com":b};
zB=function(a){return"gaming"==a.g?"gaming.youtube.com":yB(a)};
AB=function(a,b,c){return a.protocol+"://i1.ytimg.com/vi/"+b+"/"+(c||"hqdefault.jpg")};
CB=function(a){return nB(a)&&"gaming"!=a.g&&!g.BB(a)};
oB=function(a){return jB&&!a.lf||Pr("nintendo wiiu")||Pr("nintendo 3ds")?!0:!1};
g.lB=function(a){return g.Px&&Pr("crkey")||"TV"==a.B.cplatform};
vB=function(a){return"CHROMECAST ULTRA/STEAK"==a.B.cmodel||"CHROMECAST/STEAK"==a.B.cmodel};
g.DB=function(){return 1<window.devicePixelRatio?window.devicePixelRatio:1};
g.uB=function(a){return"web"==a.B.c.toLowerCase().substr(0,3)};
g.BB=function(a){return"WEB_UNPLUGGED"==a.B.c};
g.mB=function(a){return g.BB(a)||"TV_UNPLUGGED_CAST"==a.B.c||"TVHTML5_UNPLUGGED"==a.B.c};
g.EB=function(a){return a.C&&g.Px&&!nA&&"3"!==a.A?g.sB?a.o&&g.wc(51):!0:!1};
g.FB=function(a){return a.C&&g.Hz&&!nA&&"3"!==a.A?g.sB?a.o&&g.wc(48):g.wc(38):!1};
HB=function(a){return g.EB(a)||g.FB(a)||(a.C&&g.ph&&!nA&&"3"!==a.A?g.sB?a.o&&g.wc(37):g.wc(27):!1)||a.C&&g.GB&&!Yr()&&g.wc(11)||a.C&&g.Qk&&g.wc("604.4")&&a.experiments.g("safari_enable_spherical")};
IB=function(a){return a.experiments.g("disable_html5_ambisonic_audio")||!(HB(a)||a.experiments.g("html5_enable_spherical")||a.experiments.g("html5_enable_spherical3d"))||g.qB(a)&&AA||g.Hz&&(!g.wc(47)||!g.wc(52)&&g.wc(51))?!1:window.AudioContext||window.webkitAudioContext?!0:!1};
nB=function(a){return"detailpage"==a.V};
g.qB=function(a){return"embedded"==a.V};
g.JB=function(a){return"leanback"==a.V};
g.rB=function(a){return"profilepage"==a.V};
KB=function(a){return Zr()&&/(K\d{3}|KS\d{3}|KU\d{3})/.test(a.B.cmodel)};
g.LB=function(a,b,c){this.errorCode=a;this.g=b;this.details=c||{}};
MB=function(a){var b;for(b in a){var c=(""+a[b]).replace(/[:,]/g,"_");var d=(d?d+";":"")+b+"."+c}return d||""};
OB=function(a){if(a){var b=[],c;for(c in a)NB.has(c)||b.push(c);b.length&&.01>Math.random()&&g.Q(Error("Unknown house brand player vars: "+b),"WARNING")}};
PB=function(a,b){this.l=a;this.g=b;this.o=0};
QB=function(a){for(var b=[],c=[],d=0,e=a.g.length;d<e;++d){var f=a.g[d];f.bitrate<=a.o?b.push(f):c.push(f)}b.sort(function(a,b){return b.bitrate-a.bitrate});
c.sort(function(a,b){return a.bitrate-b.bitrate});
a.g=b.concat(c)};
RB=function(a,b,c,d,e,f,k,l,m){this.itag=a;this.url=b;this.tq=c;this.width=d;this.height=e;this.bitrate=k;this.fps=f;this.audioItag=l||null;this.g=m||""};
SB=function(a){for(var b={},c=0,d=a.length;c<d;++c){var e=a[c],f=e.type.match(/codecs="([^"]*)"/);e=new RB(e.itag,e.url,f?f[1]:"",+e.width,+e.height,+e.fps,+e.bitrate,e.audio_itag,e.drm_families);b[e.itag]=e}return b};
TB=function(a,b){this.yf=a;this.A=b;this.l=null};
VB=function(a,b,c,d){if(!(nA||Xr()||Ur()))return js();c=SB(c);if(!c)return js();var e={};e=(e.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",e);var f=[],k=[],l=[],m;for(m in c){var n=c[m];if(n.width){var p=c[n.audioItag];if(p){f.push(n);var u="fairplay"==n.g?e:null;l.push(UB([p],[n],n.itag,n.width,n.height,n.fps,void 0,void 0,u));if(!v||n.width*n.height*n.fps>v.width*v.height*v.fps)var v=n}}else k.push(n)}u=l.reduce(function(a,b){return!!b.yf.Ob&&a},!0)?e:null;
!a.experiments.g("html5_hls_optimal_resolution_killswitch")&&v?l.push(UB(k,f,"93",v.width,v.height,v.fps,"auto",d,u)):l.push(UB(k,f,"93",0,0,0,"auto",d,u));return lA(a.R,l,xB(a,b))};
UB=function(a,b,c,d,e,f,k,l,m){var n=new Bu;d=new Fu(d,e,f,null,void 0,k);c=new Lu(c,"application/x-mpegURL",n,d,void 0,m);a=new PB(a,b);a.o=l?l:1369843;return new TB(c,a)};
WB=function(a,b){this.yf=a;this.l=b};
XB=function(a,b,c,d){var e=[];c=g.q(c);for(var f=c.next();!f.done;f=c.next()){var k=f.value;if(k.url){f=new g.Vx(k.url);k.sig?f.set("signature",k.sig):k.s&&f.set("signature",Xy(k.s));for(var l in d)f.set(l,d[l]);k=Ru(k.type,k.quality,k.itag,k.width,k.height,!!k.isAccelerated,!!k.isAcceleratedUiEnabled);e.push(new WB(k,f))}}return lA(a.R,e,xB(a,b))};
g.YB=function(a,b,c,d){this.ye=new window.Set;this.I=a;this.K=b;a=c.split("#");this.C=(0,window.parseInt)(a[0],10);this.B=(0,window.parseInt)(a[1],10);this.l=(0,window.parseInt)(a[2],10);this.columns=(0,window.parseInt)(a[3],10);this.rows=(0,window.parseInt)(a[4],10);this.o=(0,window.parseInt)(a[5],10);this.A=a[6];this.F=a[7];this.L=d};
g.ZB=function(a,b){var c=Math.floor(b/(a.columns*a.rows)),d=a.columns*a.rows,e=b%d,f=e%a.columns;e=Math.floor(e/a.columns);var k=a.Mk()+1-d*c;if(k<a.columns){var l=k;d=1}else l=a.columns,d=k<d?Math.ceil(k/a.columns):a.rows;return{url:a.wb(c),uq:f,columns:l,Tb:e,rows:d,uo:a.C*l,to:a.B*d}};
$B=function(a){g.R.call(this);this.A=new Dq;this.l=null;this.H=new window.Set;this.F=a||""};
bC=function(a,b,c){for(c=aC(a,c);0<=c;){var d=a.g[c];if(d.Wb(Math.floor(b/(d.columns*d.rows)))&&(d=g.ZB(d,b)))return d;c--}return g.ZB(a.g[0],b)};
dC=function(a,b,c){c=aC(a,c);for(var d,e;0<=c;c--)if(d=a.g[c],e=Math.floor(b/(d.columns*d.rows)),!d.Wb(e)){d=a;var f=c,k=f+"-"+e;d.H.has(k)||(d.H.add(k),Cq(d.A,f,{Sr:f,Qt:e}))}cC(a)};
cC=function(a){if(!a.l&&!a.A.isEmpty()){var b=a.A.remove();var c=new window.Image;a.F&&(c.crossOrigin=a.F);c.src=a.g[b.Sr].wb(b.Qt);c.onload=(0,g.A)(a.K,a,b.Sr,b.Qt);a.l=c}};
eC=function(a,b,c,d){d=void 0===d?!1:d;$B.call(this,c);this.isLive=d;this.g=this.o(a,b);this.B=new window.Map;1<this.g.length&&this.g[0].isDefault()&&this.g.splice(0,1)};
aC=function(a,b){var c=a.B.get(b);if(c)return c;c=a.g.length;for(var d=0;d<c;d++)if(a.g[d].Vd()>=b)return a.B.set(b,d),d;a.B.set(b,c-1);return c-1};
fC=function(a,b,c,d){c=c.split("#");c=[c[1],c[2],0,c[3],c[4],-1,c[0],""].join("#");g.YB.call(this,a,b,c,0);this.g=null;this.H=d?3:0};
gC=function(a,b){eC.call(this,a,0,void 0,b)};
hC=function(a,b){this.yf=a;this.l=b};
iC=function(a){var b=[];(0,g.G)(a,function(a){if(a.url){var c=Ru(a.type,"medium","0");b.push(new hC(c,a.url))}});
return b};
kC=function(a,b){var c={},d;for(d in jC){var e=b?b+d:d;e=a[e+"_webp"]||a[e];g.Cv(e)&&(c[jC[d]]=e)}return c};
nC=function(a){var b={};if(!a||!a.thumbnails)return b;var c=null;a=g.q(a.thumbnails);for(var d=a.next();!d.done;d=a.next()){d=d.value;var e=lC(d);if(g.Cv(e)){var f=mC[d.width];f&&(b[f]=e);if(!c||c.width<d.width)c=d}}c&&1280<c.width&&(b["maxresdefault.jpg"]=lC(c));return b};
lC=function(a){a=a.url;return 0==a.indexOf("//")?"https:"+a:a};
g.oC=function(a,b){this.version=a;this.args=b};
g.pC=function(a,b){this.topic=a;this.g=b};
g.rC=function(a,b){var c=qC();c&&c.publish.call(c,a.toString(),a,b)};
g.vC=function(a,b,c){var d=qC();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,k){var f=g.z("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(sC[e])try{if(k&&a instanceof g.pC&&a!=d)try{var f=a.g,l=k;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!f.eg){var p=new f;f.eg=p.version}var u=f.eg}catch(v){}if(!u||l.version!=u)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=window.Reflect.construct(f,
g.bb(l.args))}catch(v){throw v.message="yt.pubsub2.Data.deserialize(): "+v.message,v;}}catch(v){throw v.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+v.message,v;}b.call(c||window,k)}catch(v){g.Q(v)}},tC[a.toString()]?g.Tt()?g.Rt(f):g.or(f,0):f())});
sC[e]=!0;uC[a.toString()]||(uC[a.toString()]=[]);uC[a.toString()].push(e);return e};
yC=function(a,b){var c=g.vC(wC,function(d){a.apply(b,arguments);g.xC(c)},b);
return c};
g.xC=function(a){var b=qC();b&&(g.va(a)&&(a=[a]),(0,g.G)(a,function(a){b.unsubscribeByKey(a);delete sC[a]}))};
qC=function(){return g.z("ytPubsub2Pubsub2Instance")};
AC=function(a){if(zC.getEntriesByType){var b=zC.getEntriesByType("paint");if(b=g.Pa(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Ba(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
BC=function(){var a=g.hr("TIMING_TICK_EXPIRATION");a||(a={},g.gr("TIMING_TICK_EXPIRATION",a));return a};
CC=function(){var a=BC(),b;for(b in a)g.Ut(a[b]);g.gr("TIMING_TICK_EXPIRATION",{})};
DC=function(a,b){g.oC.call(this,1,arguments)};
EC=function(a,b){g.oC.call(this,1,arguments);this.g=a};
IC=function(a){FC(a);GC();HC(!1,a);a||(g.hr("TIMING_ACTION")&&g.gr("PREVIOUS_ACTION",g.hr("TIMING_ACTION")),g.gr("TIMING_ACTION",""))};
XC=function(a,b){a:if(!JC(a)){if(!g.es("send_empty_timing")){var c=g.hr("CSI_SERVICE_NAME","youtube");if(!g.hr((a||"")+"TIMING_ACTION",void 0)||!c)break a}g.KC("aa",void 0,a);g.LC("ap",1,a);g.LC("yt_fss","c",a);if(g.es("enable_csi_abandonment_info")&&!a&&!MC("yt_lt")){c=g.hr("TIMING_INFO",{});for(var d in c)g.LC(d,c[d]);g.LC("is_nav",1);(d=g.vu())&&g.LC("csn",d);(d=g.hr("PREVIOUS_ACTION",void 0))&&g.LC("pa",d);c=NC();c.p=g.hr("CLIENT_PROTOCOL")||"unknown";c.t=g.hr("CLIENT_TRANSPORT")||"unknown";g.LC("yt_vis",
OC());if("cold"==c.yt_lt){d=zC.timing||{};d.navigationStart&&(g.KC("srt",d.responseStart),1!=c.prerender&&PC("n",d.navigationStart));c=AC(d);0<c&&g.KC("fpt",c);g.KC("nreqs",d.requestStart,void 0);g.KC("nress",d.responseStart,void 0);g.KC("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(g.KC("nrs",d.redirectStart,void 0),g.KC("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(g.KC("ndnss",d.domainLookupStart,void 0),g.KC("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-
d.connectStart&&(g.KC("ntcps",d.connectStart,void 0),g.KC("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=d.navigationStart&&0<d.connectEnd-d.secureConnectionStart&&(g.KC("nstcps",d.secureConnectionStart,void 0),g.KC("ntcpe",d.connectEnd,void 0));zC.getEntriesByType&&QC();d=[];if(window.document.querySelector&&zC&&zC.getEntriesByName)for(var e in RC)c=RC[e],SC(e,c)&&d.push(c);d.length&&g.LC("rc",d.join(","))}g.es("csi_on_gel")&&(e={},e.actionType=TC[g.hr("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",
d=UC(),eu(e,d))}VC(a)}IC(a);g.gr(a+"TIMING_AFT_KEYS",b);g.gr(a+"TIMING_ACTION",a);PC("c",void 0,a);g.y("ytglobal.timing"+(a||"")+"ready_",!0,void 0);WC(a)};
g.KC=function(a,b,c){if(!b&&"_"!=a[0]){var d=a;zC.mark&&(g.rb(d,"mark_")||(d="mark_"+d),c&&(d+=" ("+c+")"),zC.mark(d))}d=YC(c);var e=b||g.Mt();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;d=BC();if(e=d[a])g.Ut(e),d[a]=0;ZC(c)["tick_"+a]=b;c||b||g.Mt();g.es("csi_on_gel")?(d=UC(c),"_start"==a?du("baseline_"+d)||g.bu("latencyActionBaselined",{clientActionNonce:d},b,void 0):du("tick_"+a+"_"+d)||g.bu("latencyActionTicked",{tickName:a,clientActionNonce:d},b,void 0),a=!0):a=!1;a||WC(c)};
$C=function(a){var b="above_the_fold";zC&&zC.measure&&(g.rb(b,"measure_")||(b="measure_"+b),a?zC.measure(b,a):zC.measure(b))};
PC=function(a,b,c){g.LC("yt_sts",a,c);g.KC("_start",b,c)};
aD=function(a,b){var c=YC(b);return a in c};
g.LC=function(a,b,c){var d=NC(c)[a]=b;ZC(c)["info_"+a]=d;if(g.es("csi_on_gel"))if(a in bD){b={};a=bD[a];g.Ta(cD,a)&&(d=!!d);a=a.split(".");for(var e=b,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];b[a[a.length-1]]=d;c=UC(c);eu(b,c)}else g.Ta(dD,a)||g.Q(Error("Unknown label "+a+" logged with GEL CSI."))};
MC=function(a){var b=NC(void 0);return a in b};
eD=function(a){var b=YC(a);if(b.aft)return b.aft;a=g.hr((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
WC=function(a){if(!JC(a)){var b=g.hr((a||"")+"TIMING_ACTION",void 0),c=YC(a);if(g.z("ytglobal.timing"+(a||"")+"ready_")&&b&&c._start&&(b=eD(a)))if(g.es("tighter_critical_section")&&!fD&&(g.rC(gD,new DC(Math.round(b-c._start),a)),fD=!0),a)VC(a);else{b=!0;var d=g.hr("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&VC(a)}}};
OC=function(){switch(Fs()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
VC=function(a){CC();if(!g.es("csi_on_gel")){var b=YC(a),c=NC(a),d=b._start,e;for(e in b)if(g.rb(e,"_")&&g.za(b[e])){var f=e.slice(1);if(f in hD){var k=(0,g.I)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.z("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))iD(k,f),IC(a)}else{var l=g.hr("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.hr((a||"")+"TIMING_ACTION",void 0)};var m=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var n=window.location.protocol+g.z("ytplayer.config.assets.js");(n=zC.getEntriesByName?zC.getEntriesByName(n)[0]:null)?c.h5jse=Math.round(c.h5jse-n.responseEnd):delete c.h5jse}b.aft=eD(a);jD(a)&&"youtube"==l&&(g.LC("yt_lt","hot_bg",a),
l=b.vc,n=b.pbs,delete b.aft,c.aft=Math.round(n-l));for(var p in c)"_"!=p.charAt(0)&&(k[p]=c[p]);b.ps=g.Mt();c={};p=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,p.push(e+"."+l));k.rt=p.join(",");(b=g.z("ytdebug.logTiming"))&&b(k,c);iD(k,f,a);g.rC(wC,new EC(c.aft+(m||0),a))}}};
kD=function(a){return Math.round(zC.timing.navigationStart+a)};
QC=function(){var a=window.location.protocol,b=zC.getEntriesByType("resource");b=(0,g.Gd)(b,function(b){return 0==b.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Xk(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.KC("wffs",kD(b.startTime)),g.KC("wffe",kD(b.responseEnd)))};
SC=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=zC.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.KC("rsf_"+b,d+Math.round(c.fetchStart)),g.KC("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(MC("rc")||g.LC("rc",""),0===c.transferSize))?!0:!1:!1};
iD=function(a,b,c){if(g.es("debug_csi_data")){var d=g.z("yt.timing.csiData");d||(d=[],g.y("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);window.navigator&&window.navigator.sendBeacon&&b?bs(a):g.as(a);HC(!0,c)};
UC=function(a){var b=lD(a).nonce;b||(b=nu(),lD(a).nonce=b);return b};
YC=function(a){return lD(a).tick};
NC=function(a){return lD(a).info};
ZC=function(a){a=lD(a);"gel"in a||(a.gel={});return a.gel};
lD=function(a){return g.z("ytcsi."+(a||"")+"data_")||FC(a)};
FC=function(a){var b={tick:{},info:{}};g.y("ytcsi."+(a||"")+"data_",b,void 0);return b};
JC=function(a){return!!g.z("yt.timing."+(a||"")+"pingSent_")};
HC=function(a,b){g.y("yt.timing."+(b||"")+"pingSent_",a,void 0)};
jD=function(a){var b=YC(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==NC(a).yt_pvis};
g.nD=function(a){if(a.simpleText)return a.simpleText;a=g.mD(a);var b=g.zd("div");b.appendChild(a);return b.textContent};
g.mD=function(a,b){if(a.simpleText){a:{var c=a.simpleText;if(b){var d=oD(c);if(d){c=g.wd("SPAN",null,d);break a}}c=window.document.createTextNode(c)}return c}c=[];if(a.runs)for(d=0;d<a.runs.length;d++){var e=a.runs[d];e.text&&c.push(pD(e,b))}return 1==c.length?c[0]:g.wd("SPAN",null,c)};
pD=function(a,b){var c=null,d=a.text;b&&(d=oD(d)||d);a.bold&&(c=g.wd("B",null,c||d));a.italics&&(c=g.wd("I",null,c||d));a.strikethrough&&(c=g.wd("STRIKE",null,c||d));if(a.navigationEndpoint&&a.navigationEndpoint.urlEndpoint){var e=a.navigationEndpoint.urlEndpoint;c=g.wd("A",null,c||d);g.Sc(c,e.url);"TARGET_NEW_WINDOW"==e.target&&(c.target="_blank")}return c||g.wd("SPAN",null,d)};
oD=function(a){a=a.split(/(?:\r\n|\r|\n)/g);if(1<a.length){for(var b=[a[0]],c=1;c<a.length;c++)b.push(g.wd("BR")),b.push(a[c]);return b}return null};
g.qD=function(a){g.R.call(this);this.adModule=!1;this.adaptiveFormats="";this.Ob=null;this.allowEmbed=!0;this.Ne=this.backgroundable=!1;this.ie="";this.xj=this.uj=this.tj=!1;this.relativeLoudness=window.NaN;this.watchAjaxToken=this.cg=null;this.author="";this.Pe=0;this.Wl=this.Hq=this.Gj=!1;this.clientScreenNonce=this.clientPlaybackNonce=this.bp=this.channelBanner=this.channelPath=this.Hj="";this.contentCheckOk=!1;this.ke=0;this.Mq=this.enableCardioBeforePlayback=this.enableCardio=!1;this.endSeconds=
0;this.ze=!1;this.We=this.jh=0;this.vk=!1;this.Qu=0;this.isLowLatencyLiveStream=this.isLiveDefaultBroadcast=this.isLiveDestination=this.oa=this.lh=this.isListed=this.ln=this.Lg=!1;this.latencyClass="UNKNOWN";this.isMdxPlayback=!1;this.mdxControlMode=null;this.isPharma=!1;this.Uf=0;this.reloadReason="";this.qn=this.Nr=this.Jf=!1;this.Ak=0;this.liveChunkReadahead=window.NaN;this.liveStartWalltime=0;this.wn=null;this.si=this.lengthSeconds=0;this.playerParams=null;this.paygated=!1;this.rd=[];this.profilePicture=
void 0;this.racyCheckOk=!1;this.rootVeType=0;this.autonavState=1;this.Vi=Yu;this.Fd=!1;this.dn=this.startSeconds=0;this.spacecastModule=!1;this.rj=null;this.Zi=Yu;this.Eh=this.suggestions=null;this.hlsFormats=this.Ih=this.title="";this.kb=this.vh=this.Tf=null;this.Hl="vvt";this.ypcOfferButtonFormattedText=null;this.requiresPurchase=!1;this.clipStart=0;this.clipEnd=window.Infinity;this.Yk=this.zg=this.Wh=!1;this.Gm="";this.nl=this.Oo=this.ir=0;this.Ir=!1;this.ep=!0;this.Zf={};this.Wm=!1;this.captionTracks=
[];this.Sh=[];this.Yl=0;this.captionTranslationLanguages=[];this.Th=!1;this.Rj=new Yv("und",new Cu("Default","und",!0));this.un=0;this.Ah=this.rv=!1;this.xe=null;this.ig=[];this.Br=!1;this.Rg={};this.Cv=new g.P(this.Dv,5E3,this);g.K(this,this.Cv);this.Fm=0;this.jr=!0;this.dg=this.Xa=null;this.kn=this.Pv=this.partialSpherical=this.If=!1;this.Bb={};this.keywords={};this.Dd={};this.setData(a)};
zD=function(a,b,c){b=b||{};var d={};if(!c)d=a.Xa||{};else if(b.player_response)for(d=g.aq(b.player_response)||{},a.Xa||(a.Xa={}),c=0;c<rD.length;c++){var e=rD[c];e in d&&(a.Xa[e]=d[e])}(c=sD(d))?(a.ie=Kv(c.invideoUrl),a.tj=!!c.adsOnly,a.uj=!!c.allowInPlaceSwitch):(b.iv_invideo_url&&(a.ie=Kv(b.iv_invideo_url)),a.tj=TA(a.tj,b.iv_ads_only),a.uj=TA(a.uj,b.iv_allow_in_place_switch));b.cta_conversion_urls&&(a.Wp=b.cta_conversion_urls);a.isPharma=TA(a.isPharma,b.is_pharma);a.author=WA(a.author,b.author);
a.Gj=TA(a.Gj,b.cc_asr);c=b.ttsurl;Iv(c)?a.Hj=c:c&&(c=Jv(c),Iv(c,!0)&&(a.Hj=c));d.captions&&d.captions.playerCaptionsTracklistRenderer?tD(a,d.captions.playerCaptionsTracklistRenderer):(a.Wm=void 0!=b.caption_tracks,b.caption_tracks&&b.caption_audio_tracks&&(uD(a,b.caption_tracks),vD(a,b.caption_audio_tracks),b.default_audio_track_index&&(a.Yl=(0,window.parseInt)(b.default_audio_track_index,10)||0),b.caption_translation_languages&&wD(a,b.caption_translation_languages)),a.Th=TA(a.Th,b.cc_contribute));
a.channelPath=WA(a.channelPath,b.channel_path);a.channelBanner=WA(a.channelBanner,b.channel_banner);a.bp=WA(a.bp,b.short_subscriber_count_text);a.clientPlaybackNonce=WA(a.clientPlaybackNonce,b.cpn);a.subscribed=TA(a.subscribed,b.subscribed);a.eI=VA(a.eI,b.view_count);a.shortViewCount=WA(a.shortViewCount,b.short_view_count_text);a.title=WA(a.title,b.title);a.ypcPreview=WA(a.ypcPreview,b.ypc_preview);a.ypcOrigin=WA(a.ypcOrigin,b.ypc_origin);a.paygated=TA(a.paygated,b.paygated);a.requiresPurchase=TA(a.requiresPurchase,
b.requires_purchase);b.keywords&&(a.keywords=xD(b.keywords));b.rvs&&(a.suggestions=tr(b.rvs));a.contentCheckOk=TA(a.contentCheckOk,"1"==b.cco);a.racyCheckOk=TA(a.racyCheckOk,"1"==b.rco);a.oauthToken=WA(a.oauthToken,b.oauth_token);a.visitorData=WA(a.visitorData,b.visitor_data);b.session_data&&(a.fd=g.rr(b.session_data));b.endscreen_autoplay_session_data&&(a.Oq=g.rr(b.endscreen_autoplay_session_data));a.Nq=WA(a.Nq,b.endscreen_ad_tracking_data);a.Ew=TA(a.Ew,b.wait_for_vast_info_cards_xml);a.Wv=TA(a.Wv,
b.suppress_creator_endscreen);a.rg=WA(a.rg,b.wpid);a.iw=WA(a.iw,b.tracking_list||b.tv_list);b.skip_wv&&(a.Pv=!0);(0,g.G)(yD,function(a){a in b&&(this.Bb[a]=b[a])},a)};
AD=function(a){if(!a||!a.adPlacements)return!1;a=g.q(a.adPlacements);for(var b=a.next();!b.done;b=a.next())if(b=b.value.adPlacementRenderer,null!=b&&"AD_PLACEMENT_KIND_START"==(b.config&&b.config.adPlacementConfig&&b.config.adPlacementConfig.kind))return!0;return!1};
BD=function(a){return!(!a.Ia||!a.Ia.videoInfos.length)};
CD=function(a){return a.l&&Qx('video/webm; codecs="vp9"')&&Ub(a.g,function(a){return Mu(a.info)})};
DD=function(a){return!mA()||a.Hq?!0:!1};
g.ED=function(a){if(!a.dg)return null;var b=null!=a.dg.latitudeE7&&null!=a.dg.longitudeE7?a.dg.latitudeE7+","+a.dg.longitudeE7:",";return b+=","+(a.dg.clientPermissionState||0)+","+(a.dg.locationRadiusMeters||"")};
FD=function(a){a.ga()||(a.ze=!1,a.O("dataloaded",a.Bb))};
GD=function(a,b,c){c&&a.ka&&a.ka.dispose();a.ka=b;g.K(a,b);(a.we()||a.ue()||a.xg()||a.Hd())&&a.rd.push("webgl");a.ka.isLive||(a.oa=!1)};
g.ID=function(a,b,c){if(a.ga())return js();a.Ia=null;a.Tf=null;a.vh=null;var d=b.B,e=d.c;d=d.cmodel;b.experiments.g("disable_rqs")||(a.If=/^rq/.test(a.clientPlaybackNonce)||/^r/.test(a.clientPlaybackNonce)&&/UNPLUGGED/.test(e)||/FUGU/.test(d)||b.experiments.g("html5_high_res_logging"));a:{if(!c&&!DD(a)&&(e=!1,a.spacecastAdaptiveFormats?(GD(a,dz(HD(a,a.spacecastAdaptiveFormats),a.Ob,a.lengthSeconds,void 0),!0),e=!0):a.ka&&a.ul&&(d=oz(a.ka,a.ul))&&(GD(a,d,!0),e=!0),e)){e=KA(b.R,a.ka,a.xe,!0,!1).then(a.Yo,
void 0,a).then(a.Rq,void 0,a);break a}e=js()}return e.then(void 0,(0,g.A)(a.jA,a,b)).then(void 0,(0,g.A)(a.gA,a,b,c)).then(void 0,(0,g.A)(a.hA,a,b)).then(void 0,(0,g.A)(a.kA,a,b)).then(void 0,(0,g.A)(a.iA,a,b))};
JD=function(a,b){var c={cpn:a.clientPlaybackNonce,c:b.B.c,cver:b.B.cver};a.Wk&&(c.ptk=a.Wk,c.oid=a.Su,c.ptchn=a.Ru,c.pltype=a.Tu);return c};
g.KD=function(a){return Ur()&&a.fairPlayCert?(a={},a.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",a):a.Ba&&a.Ba.Ob||null};
LD=function(a){var b=a.Xa&&a.Xa.paidContentOverlay&&a.Xa.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.text?g.nD(b.text):a.VH};
MD=function(a){var b=a.Xa&&a.Xa.paidContentOverlay&&a.Xa.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.durationMs?Nb(b.durationMs):a.Qu};
g.ND=function(a,b){return g.w(a.keywords[b])?a.keywords[b]:null};
g.OD=function(a){if(!a.kb)if(a.Xa&&a.Xa.storyboards){var b=a.Xa.storyboards;b.playerStoryboardSpecRenderer?a.kb=new eC(b.playerStoryboardSpecRenderer.spec,a.lengthSeconds):b.playerLiveStoryboardSpecRenderer&&a.ka&&(a.kb=new gC(b.playerLiveStoryboardSpecRenderer.spec,a.ka.isLive))}else a.Bb.storyboard_spec?a.kb=new eC(a.Bb.storyboard_spec,a.lengthSeconds):a.Bb.live_storyboard_spec&&a.ka&&(a.kb=new gC(a.Bb.live_storyboard_spec,a.ka.isLive));return a.kb};
PD=function(a){return!!(a.hd||a.adaptiveFormats||a.Ih||a.Eh||a.spacecastFormatMap||a.spacecastAdaptiveFormats||a.hlsvp)};
QD=function(a){var b=g.Ta(a.rd,"ypc");a.ypcPreview&&(b=!1);return a.Nc()&&!a.ze&&(PD(a)||g.Ta(a.rd,"fresca")||g.Ta(a.rd,"heartbeat")||b)};
HD=function(a,b,c){b=tr(b);var d={};c&&(0,g.G)(c.split(","),function(a){(a=a.match(/^([0-9]+)\/([0-9]+)x([0-9]+)(\/|$)/))&&(d[a[1]]={width:a[2],height:a[3]})});
(0,g.G)(b,function(a){var b=d[a.itag];b&&(a.width=b.width,a.height=b.height)},a);
return b};
RD=function(a){a=tr(a);var b={};(0,g.G)(a,function(a){var c=a.family;a=a.url;c&&a&&(b[c]=a)});
return b};
uD=function(a,b){for(var c=tr(b),d=0;d<c.length;d++){var e=c[d],f=e.u;Iv(f)&&a.captionTracks.push(new g.Wv({is_translateable:TA(!1,e.t),languageCode:e.lc,languageName:e.n,url:f,vss_id:e.v,kind:e.k,format:3}))}};
vD=function(a,b){var c=tr(b);a.Sh=[];(0,g.G)(c,function(a){var b={};g.t(a.aid)&&(b.audioTrackId=a.aid);a.i&&(b.captionTrackIndices=(0,g.I)(a.i.split(","),function(a){return(0,window.parseInt)(a,10)}));
b.hasDefaultTrack=g.t(a.d);b.hasDefaultTrack&&(b.defaultCaptionTrackIndex=(0,window.parseInt)(a.d,10)||void 0);b.hasForcedTrack=g.t(a.f);b.hasForcedTrack&&(b.forcedCaptionTrackIndex=(0,window.parseInt)(a.f,10));b.visibility=SD[(0,window.parseInt)(a.v,10)]||"UNKNOWN";this.Sh.push(b)},a)};
wD=function(a,b){for(var c=tr(b),d=0;d<c.length;d++){var e=c[d];a.captionTranslationLanguages.push(new g.Vv({languageCode:e.lc,languageName:e.n}))}};
tD=function(a,b){a.Wm=!0;a.captionTracks=[];b.captionTracks&&(0,g.G)(b.captionTracks,function(a){var b=a.baseUrl;Iv(b,!0)&&(a=new g.Wv({is_translateable:!!a.isTranslatable,languageCode:a.languageCode,languageName:a.name&&g.nD(a.name),url:b,vss_id:a.vssId,kind:a.kind,format:3}),this.captionTracks.push(a))},a);
a.Sh=b.audioTracks||[];a.Yl=b.defaultAudioTrackIndex||0;a.captionTranslationLanguages=b.translationLanguages?(0,g.I)(b.translationLanguages,function(a){return new g.Vv({languageCode:a.languageCode,languageName:g.nD(a.languageName)})}):[];
a.Th=!!b.contribute&&!!b.contribute.captionsMetadataRenderer};
g.TD=function(a,b){return!!a.Bb[b]};
g.UD=function(a){return a.oa&&!a.Ne};
VD=function(a){return a.oa&&a.Ne};
WD=function(a){var b=g.hc(a.Bb);!a.oa&&0<a.startSeconds&&(b.start=a.startSeconds);return b};
XD=function(a){a.Ia=a.Ia.l};
g.YD=function(a){if(a.Wv)return null;var b=a.Bb.iv_endscreen_url;b||(b=a.Xa&&a.Xa.endscreen&&a.Xa.endscreen.endscreenUrlRenderer&&a.Xa.endscreen.endscreenUrlRenderer.url);return b};
ZD=function(a,b){return a.adFormat&&"1_5"!=a.adFormat?"adunit":b.V};
$D=function(a,b){if(a.isAd()&&a.videoId!=b.ya)return b.ya};
aE=function(a,b){var c=b.hj||a.Lg;if(b.experiments.g("html5_new_autoplay_redux")){var d=a.Lg||nB(b);d!=c&&g.Q(Error("b/64881898 a "+d),"WARNING");return d}return c};
bE=function(a,b){var c=a.Lg||!b.experiments.g("html5_deprecated_autoplay_killswitch")&&b.bb;if(b.experiments.g("html5_new_autoplay_redux")){var d=!1;aE(a,b)&&(d="detailpage"==ZD(a,b)?a.vk||0<a.Uf:!0);d!=c&&g.Q(Error("b/64881898 b "+d),"WARNING");return d}return c};
cE=function(a,b){var c=1,d=b.experiments.l("html5_default_ad_gain");d&&a.isAd()&&(c=d);return Math.min(1,Math.pow(10,-a.relativeLoudness/20))||c};
sD=function(a){return a&&a.annotations&&(a=a.annotations[0],a.playerAnnotationsUrlsRenderer)?a.playerAnnotationsUrlsRenderer:null};
xD=function(a){var b={};(0,g.G)(a.split(","),function(a){var c=a.split("=");2==c.length?b[c[0]]=c[1]:b[a]=!0});
return b};
dE=function(a,b,c,d){this.videoData=a;this.g=b;this.reason=c;this.l=d};
g.fE=function(a){return(a=eE[a.toString()])?a:"YTP_ERROR_LICENSE"};
gE=function(){this.B=this.g=window.NaN;this.o=this.A=this.l=!1};
hE=function(a,b){return b>a.g&&b<a.g+5};
iE=function(a,b,c,d){if(d=1<d)a.A=!0;if(a.l)b!=a.g&&(a.l=!1);else if(0<b&&a.g==b)return c-a.B>(d||!a.A?1500:400);a.g=b;a.B=c;return!1};
jE=function(){var a=[],b=[];return{start:function(b){return a[b]},
end:function(a){return b[a]},
length:a.length}};
kE=function(a,b){b=void 0===b?",":b;var c="";if(a)for(var d=0;d<a.length;d++)c+=a.start(d).toFixed(3)+"-"+a.end(d).toFixed(3)+b;return c};
lE=function(a,b){if(!a)return-1;for(var c=0;c<a.length;c++)if(a.start(c)<=b&&a.end(c)>=b)return c;return-1};
mE=function(a,b){var c=lE(a,b);return 0<=c?a.end(c):window.NaN};
nE=function(a){return a&&a.length?a.end(a.length-1):window.NaN};
oE=function(a,b){var c=mE(a,b);return 0<=c?c-b:0};
pE=function(){};
qE=function(){g.J.call(this);this.o=this.l=null;this.F=this.C=!1;this.B=new g.lf;g.K(this,this.B)};
rE=function(a){a=a.g.seekable||jE();return 1>a.length?window.NaN:a.end(a.length-1)};
uE=function(a,b){var c="";b&&(sE(a,b),c=b.Of);a.Zc()&&""==c||(c&&a.Zc()!=c&&(tE(a,c),a.o&&(a.o.dispose(),a.o=null)),b&&b.g||a.load(),a.F||(a.addEventListener("volumechange",a.nq),a.F=!0))};
vE=function(a,b){var c=Hx(a.g);return new Ix(c,b)};
wE=function(a,b){if(!a.o||a.o.ga()){var c=new Ix(Hx(a.g),b);Jx(c);uE(a,c.B);a.o=c}};
xE=function(a,b){wE(a,b);var c=a.o;a.o=null;return c};
sE=function(a,b){a.l&&null!=b&&b.Of==a.l.Of||(a.l&&a.l.dispose(),a.l=b)};
zE=function(a){return oE(yE(a),a.getCurrentTime())};
AE=function(a){var b=yE(a);return 0<nE(b)&&a.getDuration()?mE(b,a.getCurrentTime()):0};
BE=function(a){var b=a.getDuration();return window.Infinity==b?1:b?AE(a)/b:0};
CE=function(a){return{vct:a.getCurrentTime().toFixed(3),vd:a.getDuration().toFixed(3),vpl:kE(a.g.played||jE()),vbu:kE(yE(a)),vpa:String(a.g.paused),vsk:String(a.g.seeking),ven:String(a.g.ended),vpr:String(a.ec()),vrs:String(a.g.readyState),vns:String(a.g.networkState),vec:String(a.Td()),vvol:String(a.getVolume())}};
DE=function(a){a=a.Td();switch(a){case 1:return"aborted";case 2:return"network";case 3:return"decode";case 4:return"unsupported";case 5:return"encrypted";default:return a.toString()}};
EE=function(a,b,c){g.Ge.call(this,b,a);this.g=c||null};
g.FE=function(a,b){this.l=a||64;this.g=void 0===b?null:b};
KE=function(a,b,c,d){function e(a){return!!d&&d.g(a)}
if(g.T(a,128))return a;GE=GE||e("html5_dompause_is_paused_killswitch");var f=a.l,k=a.g,l=b.target;if(!g.T(a,64)||"ended"!=b.type&&"pause"!=b.type)if("pause"==b.type&&l.g.ended||"ended"==b.type&&(l.g.ended||1>Math.abs(l.getCurrentTime()-l.getDuration())))0<l.g.networkState&&l.Zc()&&(f=14,k=null);else if("pause"==b.type)g.T(a,256)?(f^=256)||(f=64):g.T(a,32)||g.T(a,2)||g.T(a,4)||(f=4,g.T(a,1)&&g.T(a,8)&&(f|=1),k=null);else if("playing"==b.type)e("html5_ignore_playing_evt")?f=(f|8)&-5:(f=8,k=null,g.T(a,
32)&&(f|=32),g.T(a,1)&&iE(c,l.getCurrentTime(),g.Mt(),zE(l))&&(f|=1));else if("error"==b.type){if(c=HE(l))k=c,f|=128}else if("progress"!=b.type||e("html5_ignore_playing_evt"))if("seeked"==b.type)f&=-17;else if("seeking"==b.type)f|=16,0>=zE(l)&&(f|=1),f&=-3;else if("waiting"==b.type)g.T(a,2)||(f|=1);else if("timeupdate"==b.type)e("html5_ignore_playing_evt")?((g.T(a,8)||g.T(a,16))&&hE(c,l.getCurrentTime())&&(f=8),iE(c,l.getCurrentTime(),g.Mt(),zE(l))&&(f|=1)):(b=2<l.g.readyState,c.o=c.o||b,g.T(a,16)||
g.T(a,4)||(iE(c,l.getCurrentTime(),g.Mt(),zE(l))?f|=1:e("html5_timeupdate_readystate_check")&&!b&&c.o||(f&=-2)),1<l.g.readyState&&0<l.getCurrentTime()&&(f&=-65));else return a;else IE(a)&&iE(c,l.getCurrentTime(),g.Mt(),zE(l))&&(f|=1);return JE(a,f,k)};
JE=function(a,b,c){return b==a.l&&c==a.g||void 0!=b&&(b&128&&!c||b&2&&b&16)?a:new g.FE(b,c)};
LE=function(a,b){return JE(a,a.l|b)};
ME=function(a,b){return JE(a,a.l&~b)};
NE=function(a,b,c){return JE(a,(a.l|b)&~c)};
g.T=function(a,b){return!!(a.l&b)};
g.OE=function(a,b){return b.l==a.l&&b.g==a.g};
IE=function(a){return g.T(a,8)&&!g.T(a,2)&&!(!GE&&g.T(a,1024))};
PE=function(a){return g.T(a,64)&&!g.T(a,8)&&!g.T(a,4)};
g.QE=function(a){return g.T(a,1)&&!g.T(a,2)};
RE=function(a){return g.T(a,128)?-1:g.T(a,2)?0:g.T(a,64)?-1:g.T(a,1)&&!g.T(a,32)?3:g.T(a,8)?1:g.T(a,4)?2:-1};
HE=function(a){if(2==a.Td())var b="progressive.net.retryexhausted";else if(3==a.Td())b="fmt.decode";else if(4==a.Td())b="fmt.unplayable";else if(5==a.Td())b="drm.unavailable";else return null;var c="mediaElem.1";SE(a)&&(c+=";msg."+SE(a));.001>Math.random()&&(c+=";gpu."+(0,g.TE)());return{errorCode:b,errorDetail:c,message:g.S("YTP_ERROR_GENERIC_WITHOUT_LINK"),messageKey:"YTP_ERROR_GENERIC_WITHOUT_LINK"}};
g.UE=function(a,b){this.state=a;this.g=b};
VE=function(a,b){return g.T(a.state,b)&&!g.T(a.g,b)?1:!g.T(a.state,b)&&g.T(a.g,b)?-1:0};
WE=function(){this.endTime=this.startTime=-1;this.Zl="-";this.playbackRate=1;this.visibilityState=0;this.Rl="";this.volume=this.connectionType=this.tf=0;this.muted=!1};
YE=function(a){this.l=a;this.g=0;this.B=-1;this.K=this.l.Yc().volume;this.I=this.l.Yc().muted;this.C=window.NaN;this.o=0;this.Sa=[];this.A=XE(this.l);this.F=this.H=0};
g.ZE=function(a){a.A.startTime=a.o;a.A.endTime=a.g;a.Sa.length&&g.Ma(a.Sa).isEmpty()?a.Sa[a.Sa.length-1]=a.A:a.Sa.length&&a.A.isEmpty()||a.Sa.push(a.A);a.H+=a.g-a.o;a.A=XE(a.l);a.o=a.g};
$E=function(a){return a.H+a.l.l()-a.o};
aF=function(a){a.Sa.length&&a.g==a.o||g.ZE(a);var b=a.Sa;a.Sa=[];return b};
bF=function(a,b,c){c-=a.C;return b==a.g&&.5<c};
cF=function(a,b,c,d,e,f,k,l,m,n,p,u,v){this.videoData=a;this.g=b;this.Yc=c;this.C=d;this.l=e;this.B=f;this.P=k;this.K=l;this.L=m;this.F=n;this.A=p;this.H=u||function(){};
this.o=null;this.I=v||function(){}};
g.eF=function(a){return dF(a)()};
dF=function(a){if(!a.o){var b=g.B(function(a){var b=g.Mt();a&&631152E6>=b&&(g.Q(Error("invalid yt.global.now value: "+b)),b=(new Date).getTime()+2);return b},a.g.experiments.g("html5_validate_yt_now"));
a.o=g.B(function(a){return Math.round(b()-a)/1E3},b());
a.I()}return a.o};
fF=function(a){var b=a.Yc();g.Ka(b,a.videoData.Yc());return b};
hF=function(){return window.navigator.connection&&window.navigator.connection.type?gF[window.navigator.connection.type]||gF.other:0};
XE=function(a){var b=new WE;b.Zl=a.Yc().cc||"-";b.playbackRate=a.L();var c=a.A();0!=c&&(b.visibilityState=c);a.g.tf&&(b.tf=1);c=a.K();c.dc&&c.dc.id&&"und"!=c.dc.id&&(b.Rl=c.dc.id);b.connectionType=hF();b.volume=a.Yc().volume;b.muted=a.Yc().muted;return b};
jF=function(a){g.J.call(this);var b=this;this.g=a;this.l={};this.ya=1;this.R=window.NaN;this.o="N";this.C=this.aa=this.A=0;this.L=this.ba="";this.V=0;this.fa=-1;this.K=this.P=0;this.U=this.I=!1;this.ia=[];this.F=null;this.H=!1;(a=window.navigator.getBattery?window.navigator.getBattery():null)&&a.then&&a.then(function(a){b.F=a});
this.sa=(this.g.g.experiments.l("html5_disable_qoe_percentage")||0)>Math.floor(100*Math.random());this.g.g.experiments.g("html5_qoe_unstarted_in_initialization")&&g.iF(this,0,"vps",["N"])};
g.iF=function(a,b,c,d){var e=a.l[c];e||(e=[],a.l[c]=e);e.push(b.toFixed(3)+":"+d.join(":"))};
mF=function(a,b){b=0<=b?b:g.eF(a.g);var c=a.g.B();if(!(0,window.isNaN)(a.X)&&!(0,window.isNaN)(c.A)){var d=c.A-a.X;0<d&&g.iF(a,b,"bwm",[d,(c.F-a.wa).toFixed(3)])}a.X=c.A;a.wa=c.F;(0,window.isNaN)(c.bandwidthEstimate)||g.iF(a,b,"bwe",[c.bandwidthEstimate.toFixed(0)]);a.g.videoData.If&&c.g&&kF(a,"bwinfo",c.g);a.F&&g.iF(a,b,"bat",[a.F.level,a.F.charging?"1":"0"]);d=a.g.A();a.fa!=d&&(g.iF(a,b,"vis",[d]),a.fa=d);g.iF(a,b,"cmt",[a.g.l().toFixed(3)]);(d=hF())&&d!=a.V&&(g.iF(a,b,"conn",[d]),a.V=d);lF(a,b,
c);d=b;0<c.C&&!a.g.g.experiments.g("html5_new_e2e_latency_tracking")&&g.iF(a,d,"e2el",[c.C,c.H.toFixed(3),c.o.toFixed(3),c.K.toFixed(3),c.I.toFixed(3)]);null!==a.g.videoData.rj&&(a.l.acc=[a.g.videoData.rj.join(":")])};
lF=function(a,b,c){if(!(0,window.isNaN)(c.l)){var d=c.l;c.B<d&&(d=c.B);g.iF(a,b,"bh",[d.toFixed(3)])}};
nF=function(a){var b=0,c;for(c in a.l)b+=c.length+Xk(a.l[c],function(a,b){return a+b.length},0);
1E3<b&&(new g.P(a.B,0,a)).start()};
oF=function(a,b,c,d){var e=a.g.l();c=[c,e.toFixed(3)];d&&c.push(d);g.iF(a,b,"error",c)};
qF=function(a,b){if(g.T(b,128))return"ER";if(g.T(b,512))return"SU";if(g.T(b,16)||g.T(b,32))return"S";var c=pF[RE(b)];a.g.g.experiments.g("tvhtml5_background_su")&&g.lB(a.g.g)&&"B"==c&&3==a.g.A()&&(c="SU");"B"==c&&g.T(b,4)&&(c="PB");return c};
rF=function(a,b){var c=a.l.cat||[];c.push(b);a.l.cat=c};
kF=function(a,b,c,d){var e=a.l.ctmp||[],f=-1!=a.ia.indexOf(b);f||a.ia.push(b);d&&f||(d||(c="t."+g.eF(a.g).toFixed(3)+";"+c),e.push(b+":"+c),a.l.ctmp=e,nF(a))};
sF=function(a,b,c,d){this.Ua=b;this.segments=[];this.experimentIds=[];this.Jf=this.Ka=this.fa=this.ba=this.Ga=this.U=this.autoplay=this.autonav=!1;this.ma="yt";this.cg=this.l=this.B=null;this.R=!1;this.A="watchtime"==c;this.o="playback"==c;this.H="delayplay"==c;this.F="atr"==c;this.Ha="engage"==c;this.Ah=!1;this.zb=this.F?"/api/stats/"+c:"//"+b.Nh+"/api/stats/"+c;d&&(this.fa=d.fs,d.rtn&&(this.l=d.rtn),this.A?(this.Wa=d.state,0<d.rti&&(this.B=d.rti)):(this.Ma=d.mos,this.Za=d.volume,d.at&&(this.adType=
d.at)),d.autonav&&(this.autonav=d.autonav),d.inview&&(this.nb=d.inview),d.size&&(this.sa=d.size));this.Ta=g.hc(b.B);this.U=b.H;this.wa=b.Ra;this.experimentIds=b.experiments.experimentIds;this.X=b.Bc;this.ma=b.Wa;this.region=b.region;this.Ya=b.Ta?b.Ta.toString():"";this.userAge=b.userAge;this.userGender=b.userGender;this.Ab=g.$t();this.Ah=b.Ec;c=this.Ua;this.I=a.oauthToken||c.sa;this.adFormat=a.adFormat;this.autoplay=bE(a,c);this.autonav=a.vk||this.autonav;this.contentVideoId=$D(a,c);this.cg=a.cg;
this.clientPlaybackNonce=a.clientPlaybackNonce;a.vssCredentialsToken&&(this.P=a.vssCredentialsToken,this.ya=a.Hl);a.mdxEnvironment&&(this.mdxEnvironment=a.mdxEnvironment);this.Pe=a.Pe;this.ke=a.ke;a.Ba&&(this.ia=Ku(a.Ba),a.Hc&&Ku(a.Hc)!=this.ia&&(this.L=Ku(a.Hc)));this.Jf=a.Jf;this.jh=a.jh;a.oa&&(this.Ra=a.Ne?"dvr":"live");this.si=a.si;this.Fe=a.Fe;this.playbackId=a.playbackId;this.eventId=a.eventId;this.playlistId=a.iw||a.playlistId;this.il=a.il;this.Vf=a.Vf;this.gf=a.gf;this.tl=a.tl;this.subscribed=
a.subscribed;this.videoId=a.videoId;this.videoMetadata=a.videoMetadata;this.visitorData=a.visitorData;this.osid=a.osid;this.Io=a.Io;this.referrer=a.referrer;this.Ti=a.Ko||a.Ti;this.Gh=a.Gh;this.yl=a.yl;this.rg=a.rg;this.rb=ZD(a,b)};
uF=function(a){var b={ns:a.ma,el:a.rb,cpn:a.clientPlaybackNonce,docid:a.videoId,ver:2,referrer:a.referrer,cmt:a.g(a.Pe),plid:a.playbackId,ei:a.eventId,fmt:a.ia,fs:a.fa?"1":"0",rt:a.g(a.bb),of:a.Io,adformat:a.adFormat,content_v:a.contentVideoId,euri:a.wa,lact:a.Ab,live:a.Ra,cl:a.Ya,mos:a.Ma,osid:a.osid,state:a.Wa,vm:a.videoMetadata,volume:a.Za};a.subscribed&&(b.subscribed="1");g.Ka(b,a.Ta);a.autonav&&(b.autonav="1");a.autoplay&&(b.autoplay="1");a.U&&(b.dni="1");a.ba&&(b["final"]="1");a.Jf&&(b.splay=
"1");a.ke&&(b.delay=a.ke);a.X&&(b.hl=a.X);a.region&&(b.cr=a.region);g.t(a.userAge)&&a.userGender&&(b.uga=a.userGender+a.userAge);g.t(a.aa)&&(b.len=a.g(a.aa));!a.A&&0<a.experimentIds.length&&(b.fexp=a.experimentIds.toString());null!=a.l&&(b.rtn=a.g(a.l));a.Ti&&(b.feature=a.Ti);a.playlistId&&(b.list=a.playlistId);a.Vf&&(b.ctrl=a.Vf);a.gf&&(b.ytr=a.gf);a.tl&&(b.ssrt="1");a.L&&(b.afmt=a.L);a.V&&(b.lio=a.g(a.V));a.A?(b.idpj=a.jh,b.ldpj=a.si,null!=a.B&&(b.rti=a.g(a.B))):g.t(a.adType)&&(b.at=a.adType);(a.o||
a.H)&&a.cg&&(b.tst=a.cg);a.sa&&(a.o||a.H)&&(b.size=a.sa);null!=a.nb&&(a.o||a.H)&&(b.inview=a.g(a.nb));a.A&&(b.volume=tF(a,(0,g.I)(a.segments,function(a){return a.volume})),b.muted=tF(a,(0,g.I)(a.segments,function(a){return a.muted?1:0})),b.st=tF(a,(0,g.I)(a.segments,function(a){return a.startTime})),b.et=tF(a,(0,g.I)(a.segments,function(a){return a.endTime})),(0,g.lk)(a.segments,function(a){return 1!=a.playbackRate})&&(b.rate=tF(a,(0,g.I)(a.segments,function(a){return a.playbackRate}))));
(0,g.lk)(a.segments,function(a){return 0!=a.visibilityState})&&(b.vis=tF(a,(0,g.I)(a.segments,function(a){return a.visibilityState})));
(0,g.lk)(a.segments,function(a){return 0!=a.connectionType})&&(b.conn=tF(a,(0,g.I)(a.segments,function(a){return a.connectionType})));
(0,g.lk)(a.segments,function(a){return 0!=a.tf})&&(b.blo=tF(a,(0,g.I)(a.segments,function(a){return a.tf})));
(0,g.lk)(a.segments,function(a){return"-"!=a.Zl})&&(b.cc=(0,g.I)(a.segments,function(a){return a.Zl}).join(","));
if((0,g.lk)(a.segments,function(a){return!!a.Rl})){var c="au";
a.o&&(c="au_d");b[c]=(0,g.I)(a.segments,function(a){return a.Rl}).join(",")}zr()&&a.P&&(b.ctt=a.P,b.cttype=a.ya,b.mdx_environment=a.mdxEnvironment);
a.Ha&&(b.etype=g.t(a.C)?a.C:0);a.Gh&&(b.uoo=a.Gh);a.yl&&(b.upt=a.yl);a.rg&&(b.wpid=a.rg);return b};
tF=function(a,b){return(0,g.I)(b,a.g).join(",")};
vF=function(a){g.J.call(this);this.g=a;this.l=new jF(a);g.K(this,this.l);this.o=new YE(a);this.C="paused";this.F=window.NaN;this.I=[10,10,10,40];this.K=this.H=0;this.R=this.U=this.aa=this.V=this.P=this.L=this.B=!1;this.A=window.NaN};
wF=function(a,b,c){var d=g.eF(a.g);c=(0,window.isNaN)(c)?d:c;c=Math.ceil(c);var e=a.I[a.H];a.H+1<a.I.length&&a.H++;c+=e;d=1E3*(c-d);a.F=g.or((0,g.A)(a.ZE,a,c,b),d);return c};
xF=function(a,b){var c=fF(a.g);g.Ka(c,{state:a.C});c=new sF(a.g.videoData,a.g.g,b,c);c.Pe=a.g.l();a.g.videoData.oa||(c.aa=a.g.C());if(a.g.videoData.ka){var d=uz(a.g.videoData.ka,c.Pe);d&&(c.V=d-c.Pe)}c.bb=g.eF(a.g);c.segments=[XE(a.g)];return c};
yF=function(a,b){var c=xF(a,"watchtime");c.segments=b;c.Pe=a.o.g;return c};
zF=function(a){a.o.update();return yF(a,aF(a.o))};
CF=function(a){a.g.videoData.remarketingUrl&&!a.V&&(AF(a,a.g.videoData.remarketingUrl),a.V=!0);a.g.videoData.youtubeRemarketingUrl&&!a.aa&&(AF(a,a.g.videoData.youtubeRemarketingUrl),a.aa=!0);a.g.videoData.googleRemarketingUrl&&!a.U&&(AF(a,a.g.videoData.googleRemarketingUrl),a.U=!0);a.g.videoData.ppvRemarketingUrl&&!a.R&&(AF(a,a.g.videoData.ppvRemarketingUrl),a.R=!0);BF(a)};
DF=function(a){a.A=g.pr((0,g.A)(a.pl,a,"heartbeat"),3E4)};
BF=function(a){a.g.videoData.Dd.eventLabel=ZD(a.g.videoData,a.g.g);a.g.videoData.Dd.playerStyle=a.g.g.g;a.g.videoData.al&&(a.g.videoData.Dd.feature="pyv");a.g.videoData.Dd.vid=a.g.videoData.videoId;var b=a.g.videoData.Dd;a=a.g.videoData;a=a.isAd()||!!a.al;b.isAd=a};
AF=function(a,b,c){a.g.g.Ec&&a.g.videoData.visitorData&&yr(b)?g.Fr(b,{Ac:c,headers:{"X-Goog-Visitor-Id":a.g.videoData.visitorData}}):g.as(b,c)};
EF=function(a,b){var c=a.l;g.iF(c,g.eF(c.g),"lra",[b]);kF(c,"live-readahead-seconds",b.toString())};
FF=function(a,b){Nv.call(this,a,b);this.g=!1;Pv(this,"getPresentingPlayerType",this.Ca);Pv(this,"addInfoCardXml",this.mC);Pv(this,"cueVideoByPlayerVars",this.nC);Pv(this,"loadVideoByPlayerVars",this.Gi);Pv(this,"preloadVideoByPlayerVars",this.Yn);Pv(this,"seekBy",this.Md);Pv(this,"updatePlaylist",this.JC);Pv(this,"updateLastActiveTime",this.IC);Pv(this,"updateVideoData",this.KC);Pv(this,"getPlayerResponse",this.getPlayerResponse);Pv(this,"getStoryboardFormat",this.getStoryboardFormat);Pv(this,"getProgressState",
this.Qf);Pv(this,"getHousebrandProperties",this.qC);Pv(this,"setPlaybackQualityRange",this.it);Pv(this,"getCurrentPlaylistSequence",this.pC);Pv(this,"canPlayType",this.Qn);Pv(this,"sendVideoStatsEngageEvent",this.Ig);Pv(this,"setCardsVisible",this.Hi);Pv(this,"handleGlobalKeyDown",this.uC);Pv(this,"getAudioTrack",this.Pf);Pv(this,"setAudioTrack",this.ao);Pv(this,"getAvailableAudioTracks",this.Xn);Pv(this,"getMaxPlaybackQuality",this.rC);Pv(this,"getUserPlaybackQualityPreference",this.sC);Pv(this,
"setSizeStyle",this.EC);Pv(this,"forceFrescaUpdate",this.oC);Pv(this,"setAutonav",this.Zs);Pv(this,"setAutonavState",this.Vn);Pv(this,"showControls",this.HC);Pv(this,"hideControls",this.vC);Pv(this,"getVisibilityState",this.df);Pv(this,"shouldSendVisibilityState",this.GC);Pv(this,"getVideoContentRect",this.ht);Pv(this,"setSafetyMode",this.DC);Pv(this,"setFauxFullscreen",this.zC);Pv(this,"cancelPlayback",this.Wn);Pv(this,"getVideoStats",this.kr);Pv(this,"updateSubtitlesUserSettings",this.Lk);Pv(this,
"getSubtitlesUserSettings",this.Hg);Pv(this,"resetSubtitlesUserSettings",this.Zn);Pv(this,"isFastLoad",this.wC);Pv(this,"isInline",this.xC);Pv(this,"isPeggedToLive",this.isPeggedToLive);Pv(this,"setMinimized",this.CC);Pv(this,"setInline",this.BC);Pv(this,"getSphericalConfig",this.YB);Pv(this,"setSphericalConfig",this.ct);Pv(this,"setBlackout",this.yC);Pv(this,"onAdUxClicked",this.ae);Pv(this,"getPlayerSize",this.Gg);Pv(this,"setGlobalCrop",this.AC);Pv(this,"wakeUpControls",this.eJ);Pv(this,"isMutedByMutedAutoplay",
this.Rz);Pv(this,"getVideoAspectRatio",this.tC);Pv(this,"setUseFastSizingOnWatch",this.FC)};
GF=function(a,b){this.o=a;this.l=b||null;this.A=!1};
HF=function(a,b){var c=a.o,d=g.qB(c)&&c.bb&&c.wd;if(c.Sc&&(nB(c)||g.JB(c)||d)&&!a.A){a.A=!0;g.hr("TIMING_ACTION")||g.gr("TIMING_ACTION",a.o.csiPageType);a.o.Za&&g.gr("CSI_SERVICE_NAME",a.o.Za);if(a.l){c=a.l.X;for(var e in c)g.KC(e,c[e],"");e=a.l.aa;for(var f in e)g.LC(f,e[f],"");f=a.l;f.X={};f.aa={}}g.LC("yt_pvis",OC(),"");g.LC("yt_pt","html5","");b&&!aD("pbs","")&&a.g("pbs",b);f=a.o;nB(f)&&"blazer"!=f.g||g.JB(f)||!aD("_start","")||VC("")}};
g.JF=function(a,b,c){this.start=a;this.end=b;this.B=IF++;a=c||{};this.Aa=a.id||"";this.C=a.priority||7;this.active=!0;this.visible=a.visible||!1;this.style=a.style||"ytp-ad-progress";this.namespace=a.namespace||"";this.color="";a.color&&(b=a.color.toString(16),this.color="#"+Array(7-b.length).join("0")+b);this.l=null;this.tooltip=a.tooltip;this.visible=this.visible;this.style=this.style;this.start=this.start};
KF=function(a){return-0x8000000000000==a?"BEFORE_MEDIA_START":0==a?"MEDIA_START":0x7ffffffffffff==a?"MEDIA_END":0x8000000000000==a?"AFTER_MEDIA_END":a.toString()};
LF=function(a){switch(a.style){case "ytp-chapter-marker":return 8;case "ytp-ad-progress":return 6;case "ytp-time-marker":return Number.POSITIVE_INFINITY;default:return 0}};
g.MF=function(a,b){return a.start-b.start||a.C-b.C||a.B-b.B};
NF=function(a,b){this.type=a||"";this.id=b||""};
g.OF=function(a){return new NF(a.substr(0,2),a.substr(2))};
g.UF=function(a){g.R.call(this);this.startSeconds=0;this.Sv=!1;this.Oa=0;this.title="";this.Lf=0;this.za=[];this.ri=this.ye=!1;this.fd=this.Oq=this.Si=null;this.views=0;this.ly=0!=a.fetch;this.ed=[];this.Oa=Math.max(0,a.index||0);this.loop=!!a.loop;this.startSeconds=a.startSeconds||0;this.XD="1"==a.mob;this.title=a.playlist_title||"";this.description=a.playlist_description||"";this.author=a.author||a.playlist_author||"";this.Zf={};a.video_id&&(this.za[this.Oa]=a);a.api&&("string"==typeof a.api&&16==
a.api.length?a.list="PL"+a.api:a.playlist=a.api);this.Ck=0;if(a.list)switch(a.listType){case "user_uploads":PF(this,a.list);break;case "user_favorites":QF(this,a.list);break;case "search":RF(this,a.list);break;default:a.playlist_length&&(this.Lf=a.playlist_length),this.listId=g.OF(a.list),a.video?(this.za=a.video.slice(0),this.ye=!0):SF(this)}else if(a.playlist){var b=a.playlist.toString().split(",");0<this.Oa&&(this.za=[]);(0,g.G)(b,function(a){a&&this.za.push({video_id:a})},this);
this.Lf=this.za.length;b=(0,g.I)(this.za,function(a){return a.video_id});
TF(this,"/list_ajax?style=json&action_get_templist=1",{video_ids:b.join(",")});this.ye=!0}this.setShuffle(!!a.shuffle);a.suggestedQuality&&(this.quality=a.suggestedQuality);this.Zf=kC(a,"playlist_");this.aw=a.thumbnail_ids?a.thumbnail_ids.split(","):[]};
VF=function(a){return!!(a.playlist||a.list||a.api)};
WF=function(a){var b=a.Oa+1;return b>=a.Lf?0:b};
XF=function(a){var b=a.Oa-1;return 0>b?a.Lf-1:b};
YF=function(a,b){a.Oa=g.Vc(b,0,a.Lf-1);a.startSeconds=0};
PF=function(a,b){a.ri||(a.listId=new NF("UU","PLAYER_"+b),TF(a,"/list_ajax?style=json&action_get_user_uploads_by_user=1",{username:b}))};
QF=function(a,b){a.ri||(a.listId=new NF("FL","PLAYER_"+b),TF(a,"/list_ajax?style=json&action_get_favorited_by_user=1",{username:b}))};
RF=function(a,b){if(!a.ri){a.listId=new NF("SR",b);var c={search_query:b};a.XD&&(c.mob="1");TF(a,"/search_ajax?style=json&embeddable=1",c)}};
SF=function(a){if(!a.ri){var b=b||a.listId;b={list:b};var c=a.Eb();c&&c.videoId&&(b.v=c.videoId);TF(a,"/list_ajax?style=json&action_get_list=1",b)}};
TF=function(a,b,c){a.ly&&g.Fr(g.Kg(b,c),{format:"JSON",ib:(0,g.A)(function(a,b){ZF(this,b)},a),
onError:(0,g.A)(function(){this.O("error")},a)})};
ZF=function(a,b){if(b.video&&b.video.length){a.title=b.title;a.description=b.description;a.views=b.views;a.author=b.author;b.loop&&(a.loop=b.loop);var c=a.Eb();a.za=[];(0,g.G)(b.video,function(a){a&&(a.video_id=a.encrypted_id,this.za.push(a))},a);
a.Lf=a.za.length;b.index?a.Oa=b.index:a.Zh(c);a.setShuffle(!1);a.ri=!1;a.ye=!0;a.Ck++;a.Si&&a.Si()}};
$F=function(a,b,c){this.audio=a;this.video=b;this.reason=c};
aG=function(a){this.l=window.Float32Array?new window.Float32Array(a):Array(a);this.o=this.g=a-1};
bG=function(a){return a.l[a.g]||0};
cG=function(a){for(var b=[];a.o!=a.g;)a.o=(a.o+1)%a.l.length,b.push(a.l[a.o]);return b};
dG=function(){this.A=new aG(50);this.g=null;this.B=this.o=0;this.l=null};
eG=function(a,b){var c=cG(a.A);0!=c.length&&(b.C=c.length,b.H=Xk(c,function(a,b){return a+b},0),b.o=g.Ma(c),b.K=Math.min.apply(Math,c),b.I=Math.max.apply(Math,c))};
hG=function(a,b,c){g.R.call(this);var d=new fG;if("ULTRALOW"==a.latencyClass||b.g("html5_treat_latency_low_like_ultra_low")&&a.isLowLatencyLiveStream)d.o=!1;a.lh?d.l=3:g.UD(a)&&(d.l=2);if(Qr()){var e=b.l("html5_platform_minimum_readahead_seconds")||3;d.g=Math.max(d.g,e)}b.l("html5_minimum_readahead_seconds")&&(d.g=b.l("html5_minimum_readahead_seconds"));b.l("html5_maximum_readahead_seconds")&&(d.F=b.l("html5_maximum_readahead_seconds"));b.g("html5_force_adaptive_readahead")&&(d.o=!0);b.l("html5_allowable_liveness_drift_chunks")&&
(d.B=b.l("html5_allowable_liveness_drift_chunks"));b.g("html5_new_peg_to_live_v2")&&(d.A=!0);b.g("html5_disable_use_media_max_time")&&(d.C=!0);this.g=d;this.A=a;this.H=c;this.o=[];this.C=0;this.B=1!=this.g.l;this.F=!1;b=(0,window.isNaN)(a.liveChunkReadahead)?3:a.liveChunkReadahead;a.lh&&b--;a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||b++;this.l=gG(this,b)};
jG=function(a){return iG(a)*a.l};
lG=function(a,b){var c=kG(a);var d=a.g.B;if(a.g.A&&!a.F||!a.g.A&&!a.isPeggedToLive())d=Math.max(d-1,0);d*=iG(a);return b>=c-d};
kG=function(a){return Math.max(mG(a)-jG(a),a.A.tb())};
mG=function(a){return a.g.C?a.A.kd():a.H()};
nG=function(a,b,c){3==a.g.l&&((b=lG(a,b),c||b)?b&&(a.B=!0):a.B=!1)};
oG=function(a,b){var c=lG(a,b);a.F!=c&&a.O("livestatusshift",c);a.F=c};
iG=function(a){return a.A.ka?tz(a.A.ka)||5:5};
gG=function(a,b){b=Math.max(Math.max(1,Math.ceil(a.g.g/iG(a))),b);return Math.min(Math.min(8,Math.floor(a.g.F/iG(a))),b)};
fG=function(){this.g=0;this.F=window.Infinity;this.o=!0;this.B=2;this.l=1;this.C=this.A=!1};
qG=function(a){this.g=new pG(0,0,null);this.B=8;this.A=[];this.o=[];this.C=this.H=window.NaN;this.K=this.l=this.I=0;this.F=window.NaN;this.U=0;this.P=void 0===a?!0:a;this.L=!1};
rG=function(a){return{startTime:a.F/a.l,duration:a.K/a.l}};
sG=function(a){return!(0,window.isNaN)(a.C)&&a.l?a.C/a.l:a.U};
tG=function(a,b,c){var d=b.getUint32(c);b=b.getUint32(c+4);a.g=new pG(b,d,a.g);return 8};
uG=function(a){a.l&&!(0,window.isNaN)(a.H)&&(a.C=Math.floor(a.H*a.l),a.H=window.NaN)};
vG=function(a){return 0==a.g.type||1836019574==a.g.type||1952867444==a.g.type||1936286840==a.g.type||1953653094==a.g.type||1836019558==a.g.type};
wG=function(a,b,c){for(var d=c;d<b.byteLength;d++)a.A.push(b.getUint8(d));0<c&&a.o.push(new window.DataView(b.buffer,b.byteOffset,c))};
xG=function(a,b,c){return new ew(b,c,a.g.size,a.g.type,!0)};
pG=function(a,b,c){this.type=a;this.size=b;this.g=c;this.offset=this.version=0};
yG=function(a,b){this.l=a;this.C=this.B=!1;this.length=b?b:0;this.o=0;this.g=[];this.A=null;this.length?1!=this.l.length||this.l[0].Ja||(this.l[0].Ja=this.length):1==this.l.length||(0,g.Kn)(this.l,function(a){return!!a.range})};
zG=function(a){var b=a.length-a.o;(0,g.G)(a.g,function(a){b+=a.range.length});
return b};
AG=function(a,b,c,d,e){this.g=a;this.fa=b;this.ia=c;this.ba=e;this.R=this.l=window.NaN;this.X=0;this.K=this.L=this.o=this.C=window.NaN;this.aa=this.V=this.A=!1;this.B=0;this.H=eA(this.g);this.U=this.P=window.NaN;this.I=d;this.F=null};
BG=function(a){return{rt:(((0,g.H)()-a.l)/1E3).toFixed(2),lb:String(a.o),pt:a.P.toFixed(2),pb:String(a.fa),stall:a.B.toFixed(2),elbowTime:((a.R-a.l)/1E3).toFixed(2),elbowBytes:String(a.X)}};
CG=function(a,b,c){var d=(b-a.C)/1E3,e=c-a.o;if(a.A)!a.I&&0<e&&(.2<d||1024>e?(a.B+=d,.2<d&&Xz(a.g,.05,e)):Xz(a.g,d,e),a.aa=!0);else if(c>=a.g.policy.l){if(!a.I){var f=a.g;f.C.g(1,(b-a.l)/1E3);Yz(f)}a.R=b;a.X=c;a.A=!0}aA(a.g,d,e);a.C=b;a.o=c};
DG=function(a,b,c){c=Math.round(c/1024);if(a.F){var d=b-a.L,e=c-a.K;d=Math.min(d,4095);e=Math.min(e,4095);a.F.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(e>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(e&63))}a.L=b;a.K=c};
EG=function(a){return a.o>=a.g.policy.l};
FG=function(a){return Math.max(0,((0,g.H)()-a.L)/1E3)};
GG=function(a){var b=a.fa-a.o;b=1E3*(b*a.H.stall+b/a.H.byterate);var c=(0,g.H)();b=EG(a)?b+c:b+Math.max(c,a.l+1E3*a.H.delay);a.U=b};
IG=function(a,b,c,d,e,f){this.status=0;this.I=this.response=null;this.U=d;this.B=c;this.V=e;this.F=f;this.A=[];this.l=null;this.o=this.g=0;this.Aa=HG++;this.R=window.NaN;this.C=null;a=new window.Request(a,{method:"GET",credentials:"include"});(0,window.fetch)(a).then(jr((0,g.A)(this.fI,this)),jr((0,g.A)(this.lt,this)));(0,g.H)();this.P=this.L=this.H=!1;this.K="";b()};
NG=function(a,b){a.o+=b.length;var c=b.length;var d=JG(a)?1:Math.max(KG(a)/2,16384);c=c>=d;d=b.length+a.g>KG(a);a.P?((c||d)&&0!==a.g&&LG(a),c?a.A.push(b):MG(a,b)):(MG(a,b),a.o>=(JG(a)?1:16384)&&LG(a))};
LG=function(a){a.P=!0;a.A.push(a.l.subarray(0,a.g));a.g=0;a.l=a.H?null:new window.Uint8Array(KG(a))};
MG=function(a,b){if(b.length+a.g>KG(a)){var c=new window.Uint8Array(a.g+b.length);c.set(a.l,0);a.l=c}a.l.set(b,a.g);a.g+=b.length};
OG=function(a){a.C.read().then(jr((0,g.A)(a.JE,a)),jr((0,g.A)(a.lt,a)));var b=(0,g.H)();a.R=b};
QG=function(a){if(a.B){a.H=!0;if(a.F.sa&&PG(a)&&!a.A.length&&!a.g){PG(a);if(!a.l||8>a.l.length)a.l=new window.Uint8Array(8);var b=new window.DataView(a.l.buffer,0,8);b.setUint32(0,8);b.setUint32(4,1936419184);a.g=8;a.o+=8}a.U()}};
PG=function(a){if(a.ck())return!1;a=a.be("content-type");return"audio/mp4"==a||"video/mp4"==a};
JG=function(a){return a.F.Yt&&PG(a)};
KG=function(a){a=a.ck()||0;return Math.max(16384,.125*a)};
RG=function(a,b,c,d,e){this.status=0;this.response=null;this.l=this.o=!1;this.g=new window.XMLHttpRequest;this.g.open("GET",a);this.g.responseType="arraybuffer";this.g.withCredentials=!0;this.g.onreadystatechange=(0,g.A)(this.NC,this);this.A=d;this.C=c;this.B=e;a=jr((0,g.A)(this.LC,this));this.g.addEventListener("load",a,!1);this.g.addEventListener("error",a,!1);this.g.send();b();this.g.addEventListener("progress",jr((0,g.A)(this.MC,this)),!1)};
SG=function(a,b,c,d){this.C=a;this.info=b;this.timing=c;this.R=d;this.state=1;this.g=this.V=null;this.P=this.K=0;this.L=new g.P(this.oI,a.F,this);this.A=this.o=this.H=null;this.B=0;this.F=this.l=null;this.I=0;this.aa=this.U=!1};
TG=function(a){return a.o?Xx(a.o.g):""};
UG=function(a){var b=BG(a.timing);b.shost=TG(a);b.rn=a.K.toString();a.B&&(b.rc=a.B.toString());b.itag=""+Ku(a.info.ra[0].g.info);b.ml=""+ +a.info.ra[0].g.Mc();b.sq=""+a.info.ra[0].na;410!=a.B&&500!=a.B&&503!=a.B||(b.fmt_unav="true");a.g&&a.g.bo()&&(b.msg=a.g.bo());return b};
VG=function(a){TG(a);return Ux(a.R,TG(a))};
XG=function(a){if("net.timeout"==a.A){var b=a.timing,c=(0,g.H)();c=c>b.l&&4E12>c?c:(0,g.H)();DG(b,c,1024*b.K);var d=(c-b.l)/1E3;if(!b.I)if(EG(b))b.B+=(c-b.C)/1E3,Zz(b.g,b.o,b.B);else{var e=b.g;e.C.g(1,d);Yz(e);b.R=c}e=b.g;var f=b.P,k=b.ba;e.B.g(d,b.o/d);e.o=g.Mt();k||e.g.g(1,d-f);aA(b.g,(c-b.C)/1E3,0)}else(0,g.H)();"net.nocontent"!=a.A&&("net.timeout"==a.A||"net.connect"==a.A?(b=VG(a),b.Ge+=1):(b=VG(a),b.g+=1),a.info.g.g++);WG(a,7)};
YG=function(a){if(1==a.state)return!0;a=VG(a);return 100>a.Ge&&6>a.g};
WG=function(a,b){a.state=b;if(5<=a.state){var c=a.timing;c.A&&(c.A=!1)}a.H&&a.H(a)};
ZG=function(a){return(0,g.Kn)(a.info.ra,function(a){return 3==a.type})};
$G=function(a){if(a.g){var b=a.g;a.g=null;b.abort()}a=a.timing;a.A&&(a.A=!1)};
bH=function(a){var b=a.g.be("content-type"),c=a.g.ck();(b=(!aH(a)||!b||-1!=b.indexOf("text/plain"))&&(!c||2048>=c))&&aH(a)&&JG(a.g);return b};
cH=function(a,b){var c=(0,g.A)(a.OH,a),d=(0,g.A)(a.RH,a),e=(0,g.A)(a.QH,a),f=(0,g.A)(a.PH,a);return a.C.H&&(a.C.rk&&!(0,window.isNaN)(a.info.l)&&a.info.l>a.C.qf?0:"function"==typeof window.fetch&&window.ReadableStream&&ZG(a))?new IG(b,d,e,c,f,a.C):new RG(b,d,e,c,f)};
aH=function(a){return a.g?a.g.Vv():!1};
dH=function(a){return 2<=a.state&&!!a.l&&!!a.l.g.length};
eH=function(a,b){if(b||aH(a)&&!bH(a)){if(!a.l){var c;aH(a)||(c=a.g.wm());a.l=new yG(a.info.ra,c)}for(;a.g.yg();){c=a.l;for(var d=a.g.Nv(),e=b&&!a.g.yg(),f=0,k=0,l=g.q(c.l),m=l.next();!m.done;m=l.next())if(m=m.value,m.range&&f+m.Ja<=c.o)f+=m.Ja;else{var n=c,p=m;if(1==p.type){n.B=!0;var u=!1}else 3==p.type||4==p.type?(p=n.B&&!n.C,n.C=!0,u=p):u=!1;n=c;var v=c.o-f,C=k;p=d;u=u||m.g.ws();var D=p.length-C;m.range&&(D=Math.min(m.Ja-v,D));v=Ww(m,m.l+v,D,m.range?m.l+v+D==m.range.length:!!e);var E=Mw(p.byteOffset,
p.length);C=Mw(p.byteOffset+C,D);n.g.push(new px(v,p.buffer,C,E,u));n=D;c.o+=n;k+=n;f+=m.Ja;if(k==d.length)break}}}};
fH=function(a){for(var b=new window.Uint8Array(0),c=new window.DataView(a.buffer,a.byteOffset,a.length),d=0;d<a.length-8;){var e=c.getUint32(d);if(1>=e)break;var f=c.getUint32(d+4);if(1836019574==f)d+=8;else{if(1886614376==f){f=a.subarray(d,d+e);var k=new window.Uint8Array(b.length+f.length);k.set(b);k.set(f,b.length);b=k}d+=e}}return b};
gH=function(a){a=Jw(a);(0,g.G)(a,function(a){return!a.l});
return(0,g.I)(a,function(a){return new window.Uint8Array(a.data.buffer,a.offset+a.data.byteOffset,a.size)})};
hH=function(a){return g.ae(a,!0).replace(/[\.]{1,2}$/,"")};
iH=function(a,b){g.R.call(this);this.F=0;this.o=a;this.g=[];this.A=null;this.K=b;this.B=this.H=window.NaN;this.U=null;this.V=(0,g.A)(function(a){this.o.pj&&(this.O("timestamprewrite",a),this.o.pj=!1)},this);
this.R=this.L=this.C=this.l=null;this.P=!1;this.I=null;this.o.ya&&(this.l=new qG(this.o.ia))};
jH=function(a){return a.g.length?a.g[0]:null};
kH=function(a){return a.g.length?a.g[a.g.length-1]:null};
mH=function(a,b,c){b=lH(a,b,c);(0,g.G)(b,function(b){a.g.push(b)})};
nH=function(a){return(0,g.lk)(a.g,function(a){return a.info.o})};
oH=function(a,b){if(b){var c=g.Oa(a.g,function(a){return a.info.o});
-1!=c&&(a.g=g.db(a.g,0,c+1))}else a.g=[]};
pH=function(a){if(!a.g.length)return 0;for(var b=a.g[0].o.length,c=1;c<a.g.length;c++)a.g[c].g!=a.g[c-1].g&&(b+=a.g[c].o.length);a.A&&(b+=a.A.o.length);return b};
qH=function(a){return(0,g.I)(a.g,function(a){return a.info})};
rH=function(a){return a.l?sG(a.l):a.H||0};
lH=function(a,b,c){if(!c.verify()||c.info.g.mn()){var d=Uw(c.info);d.verification="1";a.O("error",d||{})}c.pd&&c.info.g.info.video&&uy(c.info.g,qx(c));a.K.info.Ob&&Ou(c.info.g.info)&&(c.info.H=gH(qx(c)));c.info.o&&(a.R=c.info);if(!a.K.Cd()){2==c.info.g.info.containerType&&(d=qx(c),c.pd&&c.info.g.info.video&&fx(d));if(a.C){d=c.info;var e=a.C;d.na=e.l;d.C=e.o}!a.L||(a.o.Tc?Rw(a.L,c.info,!0):Sw(a.L,c.info))||(a.l&&a.l.reset(),a.H=window.NaN,a.F=0);a.L=c.info;a.l?c=sH(a,c):(d=(0,window.isNaN)(a.B)?(0,window.isNaN)(a.H)?
c.info.startTime:a.H:a.B,a.B=window.NaN,a.o.ia&&!sx(c,d)?(d=Uw(c.info),d.smst="1",a.O("error",d||{})):a.H=d+tx(c));if(!c)return[];if(tH(a,c)){d=c;if(Ou(d.info.g.info))if(e=qx(d),e=rw(e,0,1701671783)){e.skip(4);iw(e);iw(e);gw(e);gw(e);gw(e);gw(e);var f=new window.Uint8Array(new window.ArrayBuffer(e.size-e.g));var k=new window.Uint8Array(e.data.buffer,e.offset+e.g,e.size-e.g);f.set(k);e.g=e.size;f=f.buffer;e=e.offset;f=String.fromCharCode.apply(String,new window.Uint8Array(f));e=(f=qw(f))?new ow(f,
e):null}else e=null;else e=new Yw(qx(d)),f=e.g,e.g=0,k=null,$w(e,[408125543,307544935,29555,26568,17543])&&(k=cx(e,!0),k=String.fromCharCode.apply(String,jx(e,k)),k=(k=qw(k))?new ow(k):null),e.g=f,e=k;d.l=e;c.l&&(a.C=c.l,a.P=!!a.l,d=c.info,e=a.C,d.na=e.l,d.C=e.o,d=a.L,e=a.C,d.na=e.l,d.C=e.o)}a.o.oj&&tH(a,c)&&Hw(qx(c),1701671783);e=c;if(a.C)if(e.info.o){a.P=!1;a.I=null;d=a.C;if(a.l)e=rG(a.l),f=a.l,f.F=window.NaN,f.K=0,f=e.startTime,e=e.duration;else{if(Ou(e.info.g.info)){f=e.info.g.g;for(var l=k=window.NaN,
m=0,n=new window.DataView(e.g);zw(n,m);){var p=Aw(n,m);1936286840==p.type?l=Ew(p):1836476516==p.type?l=ww(p):1952867444==p.type&&(0,window.isNaN)(k)&&(k=Dw(p));m=Bw(p.type)?m+8:m+p.size}!l&&f&&(l=xw(f));f=k/l}else f=new Yw(qx(e)),k=e.pd?f:new Yw(new window.DataView(e.info.g.g.buffer)),l=mx(k),k=f.g,f.g=0,nx(f)?bx(f,231)?(l=gx(f)*l/1E9,f.g=k,f=l):(f.g=k,f=window.NaN):(f.g=k,f=window.NaN);f=f||e.info.B;e=tx(e)}e=new bw(d.l,f,e,d.ingestionTime,"sq/"+d.l,void 0,void 0,!1);a.O("segmentinfo",e);if(k=d.g["Cuepoint-Type"]?
new nw((0,window.parseFloat)(d.g["Cuepoint-Playhead-Time-Sec"])||0,(0,window.parseFloat)(d.g["Cuepoint-Total-Duration-Sec"])||0,d.g["Cuepoint-Context"]):null)k.Pd+=f,a.O("cuepoint",k,d.l);d=e}else a.P&&!(0,window.isNaN)(a.l.F)?(d=a.C,e=rG(a.l).startTime,d=new bw(d.l,e,a.C.H,d.ingestionTime,"sq/"+d.l,void 0,void 0,!0),a.I=d,a.O("placeholderinfo",d),a.P=!1):d=null;else d=null;e=c;if(a.o.nf)if(d)for(Xw(e.info,d),b=g.q(b.info.ra),e=b.next();!e.done;e=b.next())Xw(e.value,d);else a.I&&Xw(e.info,a.I);c.info.o&&
(a.C=null)}b=c;if(a.o.zk&&!a.K.Cd()&&(0==b.info.l||a.A)&&Ou(b.info.g.info)&&3==b.info.type&&!ux(b)&&b.info.duration&&!a.o.ya&&(b=c,a.F+=1E3*(tx(b)-b.info.duration),a.U&&Math.abs(a.F-a.U.F)>=a.o.pf))return b=c,c=(a.U.F-a.F)/1E3,d=tx(b)+c,e=new window.DataView(b.g),e=(e=vw(e,1936286840))?Ew(e):window.NaN,(0,window.isNaN)(e)&&(e=b.info.g.g,f=new window.DataView(b.g),e=(f=vw(f,1836476516))?ww(f):e?xw(e):window.NaN),(e=uH(a,b,d*e))&&e.length&&(f=Uw(b.info),f.fds=d.toFixed(3),f.com=a.F.toFixed(3),a.O("timestamprewrite",
f),a.H+=c,a.F+=1E3*c),e?e:vH(a,b);if(!a.K.Cd()&&a.K.info.Ob&&a.o.fj)if(b=c,c=wH(a,b)){e=rw(c,0,1718909296);m=rw(c,0,1836019574);f=rw(c,0,1701671783);l=rw(c,0,1836019558);if(e&&m&&l){k=Iw(c,m);d=Iw(c,l);n=m.size;p=g.q(d);for(m=p.next();!m.done;m=p.next())m=m.value,1886614376==m.type&&(k.push(m),n+=m.size);l=e.size+n+l.size;f&&(l+=f.size);l=new jw(l);lw(l,e);mw(l,1836019574,k);f&&lw(l,f);e=g.q(d);for(m=e.next();!m.done;m=e.next())f=m.value,1886614376==f.type&&(f.type=1936419184,f.data.setUint32(f.offset+
4,1936419184));mw(l,1836019558,d);d=l.data.buffer}else d=null;a=d?xH(a,c,d,b):vH(a,b)}else a=vH(a,b);else a.o.bb&&a.K.Cd()&&(0==c.info.l||a.A)&&Ou(c.info.g.info)?(b=c,c=b.info.g.index.ym(b.info.na),a=(c=uH(a,b,c))?c:vH(a,b)):a=[c];return a};
tH=function(a,b){return!a.K.Cd()&&3==b.info.type&&0==b.info.l&&(Ou(b.info.g.info)||2==b.info.g.info.containerType)};
sH=function(a,b){var c;(c=!(0,window.isNaN)(a.B))||(c=a.l,c=!(!(0,window.isNaN)(c.C)||!(0,window.isNaN)(c.H)));c&&(c=a.l,c.H=(0,window.isNaN)(a.B)?(0,window.isNaN)(a.H)?b.info.startTime:a.H:a.B,uG(c),a.B=window.NaN);c=qx(b);a.l.process(c);if(c=b.info.o)c=a.l,c=!(0==c.g.type&&!c.A.length);c&&!a.o.ud&&(c=Uw(b.info),c.partialbox="1",a.O("error",c||{}));if(a.o.Xt){if(!a.l.L&&!b.info.o)return null}else if((0,window.isNaN)(a.l.F))return null;c=a.l;if(c.o.length)if(c.L=!1,1==c.o.length){var d=c.o[0];c.o.length=
0;c=d}else{var e=0,f=g.q(c.o);for(d=f.next();!d.done;d=f.next())e+=d.value.byteLength;e=new window.Uint8Array(e);f=0;var k=g.q(c.o);for(d=k.next();!d.done;d=k.next())d=d.value,e.set(new window.Uint8Array(d.buffer,d.byteOffset,d.byteLength),f),f+=d.byteLength;c.o.length=0;c=new window.DataView(e.buffer)}else c=null;if(!c)return null;d=Mw(c.byteOffset,c.byteLength);e=Ww(b.info,b.info.l+b.info.Ja-a.l.A.length-c.byteLength,c.byteLength,b.info.o);return new px(e,c.buffer,d,d,b.pd)};
vH=function(a,b){if(a.A&&a.A!=b){var c=[a.A,b];a.A=null;return c}return[]};
uH=function(a,b,c){var d=wH(a,b);return d?(c=tw(d,c,a.V,a.o.Sc))?xH(a,d,c,b):null:null};
xH=function(a,b,c,d){b=Gw(b);a.A&&(b-=a.A.range.length,a.A=null);a=rx(d,b);a[0].g=c;a[0].range=Mw(0,c.byteLength);a[0].o=Mw(0,c.byteLength);d=a[0];c=new window.DataView(c);c=!!rw(c,0,1836019574);d.pd=c;return a};
wH=function(a,b){if(a.A){var c=a.A,d=new window.Uint8Array(c.range.length+b.range.length);d.set(new window.Uint8Array(c.g,c.range.start,c.range.length));d.set(new window.Uint8Array(b.g,b.range.start,b.range.length),c.range.length);c=new window.DataView(d.buffer);Gw(c);return c}c=qx(b);if((d=Gw(c))&&d<c.byteLength)return c;a.A=b;return null};
yH=function(){this.g=this.l=!1};
zH=function(a,b){this.X=a;this.Ea=b;this.o=[];this.l=new iH(a,b);this.V=this.A=this.g=null;this.U=0;this.L=b.info.g;this.I=this.H=!1;this.F=new yH;this.P=0;this.C=b.Ib();this.B=-1;this.Ch=this.C?0:window.NaN;this.K=0};
AH=function(a,b){a.o.push(b);a.g=g.Ma(b.info.ra)};
CH=function(a,b){for(;a.o.length&&6==a.o[0].state;){var c=a.o.shift();BH(a,c);var d=c.timing;a.U=(d.C-d.l)/1E3;a.H||(c=c.info,a.K=Math.max(a.K,Math.max(0,c.ra[c.ra.length-1].A-b)))}a.o.length&&dH(a.o[0])&&!Qw(a.o[0].info.ra[0])&&BH(a,a.o[0])};
BH=function(a,b){if(dH(b)){b.U=!0;var c=b.l,d=c.g;c.g=[];c.A=g.Ma(d).info;(0,g.G)(d,(0,g.A)(a.aa,a,b))}};
FH=function(a,b){a.Ea.Mc();a.K=0;var c=DH(a,b);if(0<=c)return c;a.g=a.Ea.Bf(b).ra[0];EH(a)&&(a.A=null);a.P=0;return a.g.startTime};
IH=function(a,b){var c=a.l.g.length?kH(a.l).info:a.A;if(b&&c&&!c.o){var d=c.na;c=[];for(var e=g.q(a.o),f=e.next();!f.done;f=e.next())f=f.value,(0,g.lk)(f.info.ra,function(a){return a.na==d})?c.push(f):GH(a,f);
a.o=c;a.g=a.o.length?g.Ma(g.Ma(a.o).info.ra):null}else HH(a)};
JH=function(a){var b=0;(0,g.G)(a.o,function(a){var c=b;a=a.l&&a.l.length?zG(a.l):ry(a.info);b=c+a},a);
return b+=pH(a.l)};
KH=function(a,b){var c=!!a.Ea.info.video&&!!a.A&&!a.A.o,d=1<=b&&c;oH(a.l,d);a.H=d;IH(a,2<=b&&c)};
LH=function(a){a.F.l||a.F.start();KH(a,0);EH(a)&&(a.A=null)};
EH=function(a){return!!a.A&&a.A.C};
MH=function(a){var b=[];a.A&&b.push(a.A);b=g.ab(b,qH(a.l));(0,g.G)(a.o,function(a){(0,g.G)(a.info.ra,function(c){a.U&&(b=(0,g.Gd)(b,function(a){return!(a.g!=c.g?0:a.range&&c.range?a.range.start+a.l>=c.range.start+c.l&&a.range.start+a.l+a.Ja<=c.range.start+c.l+c.Ja:a.na==c.na&&a.l>=c.l&&(a.l+a.Ja<=c.l+c.Ja||c.o))}));
3!=c.type&&4!=c.type||b.push(c)})});
a.g&&!Pw(a.g,g.Ma(b),a.g.g.Cd())&&b.push(a.g);return b};
NH=function(a){if(!a.g||!a.g.Ja)return!1;var b=MH(a);if(!b.length)return!1;for(var c=1;c<b.length;c++){var d=1E-6>=Math.abs(b[c].B-b[c-1].A),e=b[c].B==b[c-1].B&&b[c].A==b[c-1].A&&b[c].na==b[c-1].na&&b[c].g==b[c-1].g&&b[c-1].l+b[c-1].Ja==b[c].l;if(!(a.X.gd?d||e:Sw(b[c-1],b[c])))return!1}return!0};
DH=function(a,b){if(NH(a)){a:{var c=MH(a);c=g.q(c);for(var d=c.next();!d.done;d=c.next())if(d=d.value,d.B<=b&&d.startTime+d.duration>=b){c=d;break a}c=null}if(c)return c.startTime}return window.NaN};
OH=function(a){return(0,g.lk)(a.o,function(a){return 4<=a.state})};
PH=function(a){return!(!a.g||!a.Ea.Mc()||a.g.g==a.Ea)};
QH=function(a){return PH(a)&&a.g.g.info.g<a.Ea.info.g};
RH=function(a,b,c){return(a=kH(a.l)?kH(a.l).info:a.A)&&!a.C?a.A>b&&a.A<b+c:!1};
HH=function(a){(0,g.G)(a.o,function(a){GH(this,a)},a);
a.o=[];a.g=null};
GH=function(a,b){if(b.U){var c=a.l,d=b.info;c.P=!1;c.I&&(c.O("placeholderrollback",c.I),c.I=null);if(c.l){var e=window.NaN;(0,window.isNaN)(c.B)&&(e=d.ra[0].range?d.ra[0].B:rG(c.l).startTime);c.l.reset();c.L=c.R;(0,window.isNaN)(e)||(c.B=e)}c.C=null}b.dispose()};
SH=function(a){return!!a.g&&-1!=a.g.na&&a.g.na<a.Ea.index.Re()};
TH=function(a){if(a.g){var b=kH(a.l);b&&3==b.info.type&&-1==a.g.na&&(a.g.na=b.info.na)}};
UH=function(a,b){this.g=a;this.l=b;this.o=1};
WH=function(a,b,c,d,e){e=void 0===e?!1:e;d/=a.o;var f=a.g.policy.g?1/dA(a.g):bA(a.g)+1/dA(a.g);var k=Math.max(.9*(d-3),$z(a.g)+a.g.policy.l*f);c=k/f*a.l.bk/(b+c);c=Math.min(c,d);a.l.Ga&&e&&(c=Math.max(c,a.l.Ga));return VH(a,c,b)};
VH=function(a,b,c){return Math.ceil(Math.max(Math.max(65536,a.l.Uj*c),Math.min(Math.min(a.l.K,a.l.fa*c),Math.ceil(b*c))))};
XH=function(a,b){var c=VH(a,b.video?a.l.rw:a.l.Bc,b.g);return a.l.wa&&b.video?Math.max(c,a.l.wa):c};
YH=function(a){var b=dA(a.g);if(a.l.Ie)return b;var c=a.l.Aj,d=1E-9+$z(a.g);a.g.policy.g||(d+=c*bA(a.g));b*=Math.min(1,c/(b*d));a.l.Mb&&(c=((Uz(a.g.g,.98)||0)-1)/2,c=Math.max(0,Math.min(1,c)),b*=1-a.l.Mb*c);return b};
ZH=function(a){return YH(a)/a.o};
$H=function(a,b,c,d){this.X=a;this.C=b;this.H=c;this.K=d;this.o=this.U=this.fa=this.F=null;this.A="i";this.R=-1;this.l=this.B=null;this.g=[];this.aa={};this.V=this.L=0;this.ia=null;this.P=this.I=!1;this.ba=0};
eI=function(a,b,c,d){"m"==c&&a.F.isLocked()&&!b.isLocked()&&(c="a");a.I=a.I||d;if("m"==c&&b.isLocked())return a.A=c,aI(a,b),a.L=a.g.length-1,bI(a),cI(a),a.P=a.P||a.o!=a.l,a.o=a.l,new $F(a.B,a.o,c);d=a.F;d=d.l==b.l&&d.g==b.g&&d.o==b.o;if("m"==a.A&&a.F.isLocked()&&d)return null;"r"!=c||d||(a.R=-1);if("u"==c){if("m"==a.A)return null;a.fa=b;b=a.F}"m"==c&&(a.fa=null);a.fa?aI(a,Zu(b,a.fa)):aI(a,b);cI(a);if("r"==c&&a.l==a.o){if(d)return null;a.o=a.l;return new $F(a.B,a.l,c)}a.A=c;dI(a);return null};
fI=function(a){return!!a.V&&1E4>=g.Mt()-a.V};
gI=function(a){return a.F.isLocked()};
dI=function(a){a.o&&a.l&&hI(a,a.o.info)<hI(a,a.l.info)&&(a.I=a.I||"r"==a.A,a.I=a.C.xd?a.I||"v"==a.A&&a.l.info.video.width>a.o.info.video.width:a.I||a.l.info.video.width>1.6*a.o.info.video.width)};
iI=function(a){var b=a.A;a.A="a";a.R=g.Mt();a.I=!1;return new $F(a.U,a.o,b)};
aI=function(a,b){a.F=b;var c=a.K.videoInfos;if(!gI(a)&&(c=(0,g.Gd)(c,function(a){return a.g>this.C.C||4<this.H.g[a.id].A.g?!1:!0},a),fI(a))){c=(0,g.Gd)(c,function(a){return a.id!=this.ia.id},a);
var d=(0,g.Gd)(c,function(a){a=Ku(a);return"140"==a||"134"==a||"243"==a});
d.length&&(c=d)}c.length||(c=a.K.videoInfos);d=(0,g.Gd)(c,b.A,b);d.length||(d=[c[0]]);d.sort((0,g.A)(function(a,b){return hI(this,a)-hI(this,b)},a));
for(c=1;c<d.length;c++){var e=d[c-1],f=d[c];e.video.width>f.video.width?(g.Xa(d,c),c--):hI(a,e)*a.C.g>hI(a,f)&&(g.Xa(d,c-1),c--)}c=d[d.length-1];a.g=d;Sx(a.C,c)};
jI=function(a,b){if(b)a.B=a.H.g[b];else{var c=g.Pa(a.K.g,function(a){return!!a.dc&&a.dc.isDefault});
c=c||a.K.g[0];a.B=a.H.g[c.id]}bI(a)};
bI=function(a){if(!a.B.info.dc&&(a.B=a.H.g[a.K.g[0].id],1<a.K.g.length)){if(a.F.isLocked())var b=240>a.F.g;else{for(b=0;b+1<a.g.length&&"tiny"==a.g[b].video.quality;)b++;var c=ZH(a.X)/a.C.g;b=hI(a,a.B.info)+hI(a,a.g[b])>c}b&&(a.B=a.H.g[a.K.g[1].id])}};
cI=function(a){if(gI(a))a.l=a.H.g[a.g[a.g.length-1].id];else{for(var b=Math.min(a.L,a.g.length-1),c=ZH(a.X),d=hI(a,a.B.info),e=c/a.C.o-d;0<b&&!(hI(a,a.g[b])<=e);b--);for(c=c/a.C.g-d;b<a.g.length-1&&!(hI(a,a.g[b+1])>=c);b++);a.l=a.H.g[a.g[b].id];a.L=b;dI(a)}};
kI=function(a){var b=a.C.o,c=ZH(a.X)/b-hI(a,a.B.info);b=g.Qa(a.g,function(a){return hI(this,a)<c},a);
0>b&&(b=0);a.L=b;a.l=a.H.g[a.g[b].id]};
hI=function(a,b){if(!a.C.R)return b.g;if(!a.aa[b.id]){var c=a.H.g[b.id].index.dr(a.ba,a.C.R);c=b.o&&a.o&&a.o.index.Wb()?c||b.o:c||b.g;a.aa[b.id]=c}return a.aa[b.id]};
lI=function(a,b){var c=cc(a.H.g,function(a){return Ku(a.info)==b});
if(void 0!=c)return eI(a,Wu("auto",c.info.video.quality,!0),"u",!0),c;throw Error("Itag "+b+" from server not known.");};
mI=function(){this.g=this.l=0;this.o=[]};
nI=function(a,b){return(a[b]<<24)+(a[b+1]<<16)+(a[b+2]<<8)+a[b+3]};
oI=function(a,b,c,d){this.l=a;this.C=b;this.B=d;this.A=c;this.g=0};
pI=function(a,b){this.l=a;this.I=b;this.F=this.C=this.H=this.g=null;this.A=this.o=window.NaN;this.B=!1};
sI=function(a,b,c){var d=(0,g.H)()/1E3-a.A<a.l.zb;if(d&&!a.g.ga()&&!(5<=a.g.state)&&FG(a.g.timing)<a.o)return window.NaN;var e=qI(a,a.C,a.F);if((0,window.isNaN)(e))return rI(a),window.NaN;if(jH(b.l)==a.H||(0,window.isNaN)(c)||c<e)return d?a.B=!0:rI(a),window.NaN;rI(a);return e};
rI=function(a){a.g=null;a.H=null;a.C=null;a.F=null;a.o=window.NaN;a.A=window.NaN;a.B=!1};
qI=function(a,b,c){b=(0,g.H)()/1E3-(a.I.l()||0)-b.B-a.l.zv;if(0>=b)return window.NaN;var d=c.g.index;if(!zy(d,c.na,!0))return window.NaN;var e=d.getDuration(c.na);c=d.nd(c.na);a=Math.min(c+b,c+e-a.l.jv);return a<=c?window.NaN:a};
tI=function(){this.g=[];this.l=g.MF};
uI=function(a,b){for(var c=[],d=g.q(a.g),e=d.next();!e.done&&!(e=e.value,e.contains(b)&&c.push(e),e.start>b);e=d.next());return c};
wI=function(a){return a.g.slice(vI(a,0x7ffffffffffff),a.g.length)};
vI=function(a,b){var c=jb(a.g,function(a){return b-a.start||1});
return 0>c?-(c+1):c};
xI=function(a,b){for(var c=window.NaN,d=g.q(a.g),e=d.next();!e.done;e=d.next())if(e=e.value,e.contains(b)&&((0,window.isNaN)(c)||e.end<c)&&(c=e.end),e.start>b&&((0,window.isNaN)(c)||e.start<c)){c=e.start;break}return c};
yI=function(a,b,c,d){g.J.call(this);this.A=window.NaN;this.I=!1;this.H=null;this.K=this.L=this.B=!1;this.aa=a;this.V=b;this.P=c;this.U=d;this.R=new g.P(this.o,250,this);g.K(this,this.R);this.F=new g.P(this.o,0,this);g.K(this,this.F);this.l=[];this.g=new tI};
zI=function(a,b){a.o();var c=a.g;if(1<b.length&&b.length>c.g.length)c.g=c.g.concat(b),c.g.sort(c.l);else for(var d=g.q(b),e=d.next();!e.done;e=d.next()){var f=e.value;if(!c.g.length||0<c.l(f,c.g[c.g.length-1]))c.g.push(f);else{e=c.g;var k=g.ib(e,f,c.l);0>k&&g.eb(e,-(k+1),0,f)}}a.A=window.NaN;a.o()};
AI=function(a){return a.ga()?[]:a.g.g};
BI=function(a,b){var c=(0,g.Gd)(AI(a),function(a){return a.namespace==b});
a.C.apply(a,c);return c};
CI=function(a,b){var c=[];if(!b.length)return c;for(var d=0;d<b.length;d++){var e=b[d];e.active&&-1==a.l.indexOf(e)&&(a.l.push(e),c.push([1,e]))}return c};
DI=function(a,b){var c=[];if(!b.length)return c;b.sort(g.MF);for(var d=0;d<b.length;d++){var e=b[d];a.l.splice(a.l.indexOf(e),1);c.push([2,e])}return c};
EI=function(){var a=this;this.l=this.g=null;this.o=new g.Jf(function(b,c){a.g=b;a.l=c})};
FI=function(a,b,c,d,e){g.R.call(this);this.P=a;this.l=b;this.C=c;this.Ya=e||null;this.g=this.A=null;this.H=new UH(a,b);this.o=null;this.F=new $H(this.H,b,this.C,d);this.U=new g.P(this.Nd,0,this);g.K(this,this.U);this.ma=new g.P(this.Nd,1E3,this);g.K(this,this.ma);this.Za=new g.P(this.Nd,void 0,this);g.K(this,this.Za);this.Ta=new g.P(this.Nd,1E4,this);g.K(this,this.Ta);this.B=window.NaN;this.K=!1;this.I=window.NaN;this.Wa=0;this.aa=this.ya=this.R=!1;this.bb={};this.ia="";this.wa=this.Ga=0;this.Ua=
b.ej?new mI:null;this.Ma=new Sz(5);this.V=!1;this.Ra={};this.Ka="";this.Ha=window.NaN;this.X=!1;a=this.l;this.L=a.rb&&this.C.l?new pI(a,this.Ma):null;this.ba=null};
GI=function(a,b){b=b||a.g&&a.g.g&&a.g.g.startTime||a.B;var c=a.g;var d=a.F;if(d.C.R){var e=d.l&&d.l.index.Cf(b)||0;d.ba!=e&&(d.aa={},d.ba=e,aI(d,d.F))}e=!gI(d)&&-1<d.R&&g.Mt()-d.R<1E3*d.C.Nh;var f=3*hI(d,d.l.info)<ZH(d.X);if(!e||f)d.V&&!fI(d)&&(d.V=0,aI(d,d.F)),bI(d),cI(d),d.P=d.P||d.l!=d.o;d.l.index.Wb()||(d.ba=-1);d=d.l;c.Ea!=d&&(c.Ea=d);c=a.A;d=a.F.B;c.Ea!=d&&(c.Ea=d)};
HI=function(a,b){a.R=!0;a.ya=b};
g.II=function(a,b){var c=a.g.Ea.info.mimeType;b.g=b.o.addSourceBuffer(a.A.Ea.info.mimeType);b.I?b.l=b.o.addSourceBuffer(c):b.l=new Dx;a.o=b;a.A.I=!1;a.g.I=!1;a.A.A=null;a.g.A=null;a.resume();Ox(b)&&(b.g.addEventListener("updateend",(0,g.A)(a.Nd,a),!1),b.l.addEventListener("updateend",(0,g.A)(a.Nd,a),!1),b.g.addEventListener("error",(0,g.A)(a.Pk,a,!0),!1),b.l.addEventListener("error",(0,g.A)(a.Pk,a,!1),!1));a.gc("msa");g.KC("msa",void 0,"video_to_ad");zC.measure&&zC.getEntriesByName("mark_vta").length&&
zC.measure("measure_vta_to_msa","mark_vta");a.sa&&a.fa&&(c=g.z("yt.scheduler.instance.enablePriorityThreshold"))&&c(1);a.Nd()};
KI=function(a){a.o&&a.o.g&&a.o.g.removeEventListener&&(a.o.g.removeEventListener("updateend",(0,g.A)(a.Nd,a),!1),a.o.l.removeEventListener("updateend",(0,g.A)(a.Nd,a),!1),a.o.g.removeEventListener("error",(0,g.A)(a.Pk,a,!0),!1),a.o.l.removeEventListener("error",(0,g.A)(a.Pk,a,!1),!1));a.o=null;HI(a,!1);JI(a,!1)};
LI=function(a){a.o&&Lx(a.o)&&KI(a)};
MI=function(a,b,c){if(!b.F.l||!c.remove)return!1;if(c.updating)return!0;if(!b.F.g&&c.buffered.length)return a=c.buffered.end(c.buffered.length-1),c.remove(0,a),b.F.g=!0;b.F.reset();a.O("seekelementrequired");return!1};
PI=function(a,b,c){if(a.R&&(!fA(a.P)||a.ya))return!1;if(a.C.l){if(1<a.l.Ha&&0<b.o.length&&b.g&&-1==b.g.na||b.o.length>=a.l.Ha&&!a.l.ma||!a.l.jj&&0<b.o.length&&!a.V)return!1;if(b.C)return!(0,window.isNaN)(a.Ha)}if(!(b.g||a.C.l&&a.l.ma&&b.C)){if(!b.Ea.Mc())return!1;FH(b,a.B)}var d=b.o.length+c.o.length;(OH(b)||OH(c)||a.C.isLive&&(!a.l.ma||!b.o.length))&&--d;if(d+1>=a.l.fg)return!1;d=b.g;if(!d)return!0;if(!my(d.g.A))return!1;4==d.type&&d.g.Mc()&&(b.g=g.Ma(d.g.ll(d)),d=b.g);!d.C&&!d.g.Eg(d)||d.g.info.audio&&
4==d.type?a=!1:QH(b)&&!a.l.U?a=!0:(!(c=d.C||JH(b)&&JH(b)+JH(c)>a.l.aa||!!(c.g&&!c.g.C&&c.g.A<d.A)&&(!a.C.l||c.g.A&&d.A))&&(c=3==d.type)&&(d=d.A,b=NI(a,b,!0),!gI(a.F)&&0<a.l.L&&(c=(g.Mt()-a.Wa)/1E3,b=Math.min(b,a.l.L+a.l.Ab*c)),b=a.B+b,a.l.Ya?(c=Math.min(b,OI(a)+a.l.Ya),c!=b&&a.Ae("mrl","ori."+b+";mod."+c,!0),a=c):a=b,c=d>a),a=c?!1:!0);return a};
QI=function(a,b,c){if((!a.o||Kx(a.o)||Ox(a.o))&&!a.K&&a.F.I&&!a.l.Gc){var d=a.B;a=a.H;c=WH(a,b.Ea.info.g,c.Ea.info.g,0);var e=a.g.policy.g?$z(a.g)+c/dA(a.g):$z(a.g)+c*bA(a.g)+c/dA(a.g);d+=Math.max(e,e+a.l.Ua-c/b.Ea.info.g);a:{if(b.o.length){if(b.o[0].info.ra[0].startTime<=d)break a;HH(b)}a=b.l;for(c=a.g.length-1;0<=c;c--)a.g[c].info.startTime>d&&a.g.pop();b.o.length?b.g=g.Ma(g.Ma(b.o).info.ra):b.l.g.length?b.g=kH(b.l).info:b.g=b.A;b.g&&d<b.g.startTime&&(b.P=0,b.g=b.Ea.Bf(d,!0).ra[0])}}};
TI=function(a,b,c){PI(a,b,c);var d=b.g;if(b.C)a.V=!0,d=b.Ea.Bf(window.Infinity),d.l=a.Ha;else if(b.g.g.Mc()){!QH(b)||a.l.U||a.C.l||(QI(a,b,c),b.g||FH(b,a.B));d=b.g;var e=d.A-a.B,f=!d.range||0==d.Ja&&0==d.l?0:d.range.length-(d.l+d.Ja),k=d.g;if(PH(b)){var l=Math.min(a.l.Ka,.5*NI(a,b,!0));l=QH(b)||e<=l}else l=!1;l&&0==f&&(a.C.l?k=b.Ea:(k=d.startTime+RI,d.Ja&&(k+=d.duration),FH(b,k),d=b.g,k=d.g));k.Cd()?(f=a.F,c=WH(a.H,k.info.g,c.Ea.info.g,e,0<f.g.length&&0==f.L&&a.aa),e=PH(b),c=d.g.Dg(d,c),c.range&&
1<c.ra.length&&(e||c.g.g?c=d.g.Dg(d,c.ra[0].Ja):(e=c.ra[c.ra.length-1],k=e.Ja/c.range.length,!e.o&&.4>k&&(c=d.g.Dg(d,c.range.length-e.Ja)))),d=c):d=k.wi(d)}else d.g.Cd()?(c=WH(a.H,b.Ea.info.g,c.Ea.info.g,0),d=d.g.Dg(d,c)):d=d.g.wi(d);AH(b,SI(a,d))};
SI=function(a,b){if(3==b.ra[b.ra.length-1].type){a:{var c=a.F;var d=b.ra[0].g;if(d.info.video){if(c.o!=d){c.o=d;c=iI(c);break a}}else c.U=d;c=null}c&&a.O("videoformatchange",c)}c=ry(b);d=a.P;var e=a.H,f=Math.min(2.5,$z(e.g));e=YH(e);c=new AG(d,c,c-f*e,a.l.Zv&&a.V,Qw(b.ra[0]));a.l.lf&&(c.F=[]);c=new SG(a.l,b,c,a.Ra);d=(0,g.A)(a.SG,a);c.H=d;if(3==b.ra.length&&1==b.ra[0].type&&2==b.ra[1].type&&4==b.ra[2].type&&b.ra[0].g.info.video){d=a.F;f=[];if("i"==d.A||"a"==d.A||"u"==d.A)if(e=!1,az(d.H)){for(var k=
Math.max(0,d.L-2);k<d.L;k++){var l=Ku(d.g[k]);Gu(d.g[k].video)||(e=!0);f.push(l)}if(!e&&d.C.ij)for(k=Math.max(0,d.L-3);0<=k&&!e;k--)Gu(d.g[k].video)||(e=!0,f.push(Ku(d.g[k])))}c.V=f}c.start(Math.max(0,b.ra[0].B-a.B));b.ra[0].g.info.video&&(d=TG(c))&&(a.Ka=d.substr(0,d.indexOf(".")));return c};
XI=function(a){var b=-1!=a.g.B,c=-1!=a.A.B;if(!b||!c)if(b=!b&&jH(a.g.l),c=!c&&jH(a.A.l),b||c){c=b?a.g:a.A;b=b?a.A:a.g;var d=jH(c.l).info.na;if(-1!=b.B&&b.B!=d)a.l.ia&&xz(a.C,d,c==a.g),UI(c,b.B),VI(a,!1,"qoe.avsync",{start:"1",target:String(b.B),actual:String(d)});else{c.B=d;c.Ch=window.NaN;var e=Math.max(b.Ea.index.nd(b.B),c.Ea.index.nd(c.B));-1!=b.B&&(a.ba&&(a.ba.resolve(e+.1),a.ba=null),g.Df(function(){return WI(a,e)}))}}};
UI=function(a,b){KH(a,0);FH(a,window.Infinity);var c=a.Ch;a.l.B=c;a.Ch=c;a.g.na=b-1};
YI=function(a){if(a.C.o)return!1;var b;if(b=a.K){b=a.H;var c=a.g,d=a.A;if(0==c.o.length&&0==d.o.length)b=!0;else{var e=0,f=qH(c.l).concat(qH(d.l));f=g.q(f);for(var k=f.next();!k.done;k=f.next())e+=k.value.Ja;c=c.Ea.info.g+d.Ea.info.g;e/=c;b=10<e?!0:10>c*(10-e)/ZH(b)}(b=!b)||(b=a.g,b=0<b.o.length&&1==b.l.g.length&&jH(b.l).info.F<b.U)}if(b)return!0;if(!a.aa||!a.l.ba||10>a.B||360<a.g.Ea.info.video.g)return!1;b=RH(a.g,a.B,a.l.ba)||RH(a.A,a.B,a.l.ba);return(0<a.g.o.length||0<a.A.o.length||PI(a,a.g,a.A)||
PI(a,a.A,a.g))&&b};
aJ=function(a,b,c,d){if(c.updating)return!0;var e=jH(b.l);if(!e)return!1;!b.A||b.A.o||Rw(b.A,e.info)||(b.A=null,Kx(a.o)&&c.abort(),c.g=null);var f=a.C.isLive&&ux(e),k;if(k=a.l.Za&&a.C.o&&0==e.info.l&&Ou(e.info.g.info)){if(null==c.g){if(!(k=null==b.A||b.A.g!=e.info.g)){a:{k=b.A.H;var l=e.info.H;if(k.length!=l.length)k=!1;else{for(var m=0;m<k.length;m++)if(!g.ob(k[m],l[m])){k=!1;break a}k=!0}}k=!k}}else k=c.g!=e.info.g.g;k=!k}k&&(Hw(qx(e),1836019574),Hw(qx(e),1718909296),e.pd=!1);if(!a.C.o||0==e.info.l)if(f||
a.C.l||e.pd)c.g=null;else if(ZI(a,c,e))return!0;f=NI(a,b,!1);f=a.B+f;null!==d&&0<=d&&(f=Math.min(f,d));d=f;if(a.L)a:if(a.L.g&&b.Ea.info.audio){if((f=jH(b.l))&&(f=f.l)&&null!=f.A){f=f.A-1;break a}f=-1}else f=window.Infinity;else f=window.Infinity;if(b.H)d=jH(b.l).range;else if(k=b.l,!k.g.length||k.g[0].info.B>=d)d=null;else if(l=k.g[0].pd?0:k.g[0].range.start,l>f)d=null;else{for(m=1;m<k.g.length;m++){var n=k.g[m].range.start>f,p=k.g[m].g!=k.g[m-1].g;if(k.g[m].info.B>d||n||p||k.o.bb)break}m--;d=new g.Kw(l,
Math.min(k.g[m].range.end,f))}if(!d)return!1;f=new window.Uint8Array(e.g,d.start,d.length);if(a.Ua&&e.info.g.info.video&&Ou(e.info.g.info)&&(k=a.Ua,0==e.info.l&&(k.l=0,k.g=0,k.o.length=0),!((0,window.isNaN)(k.l)||8>f.length))){l=new window.DataView(f.buffer,f.byteOffset);for(m=!1;!m;)if(k.l==k.g)a:if(m=k,n=f.length,m.l+7>=n){for(p=m.l;p<n;p++)m.o.push(l.getUint8(p));m=!0}else{if(0<m.o.length){for(p=0;8>m.o.length;p++)m.o.push(l.getUint8(p));var u=nI(m.o,0);p=nI(m.o,4);m.o.length=0}else u=l.getUint32(m.g),
p=l.getUint32(m.g+4);if(1836019558==p||1836019574==p||1718909296==p||1936286840==p)m.l+=u,m.g=m.l;else if(1835295092==p)m.l+=u,m.g+=8;else{m.l=window.NaN;m=!0;break a}m=m.g>=n}else a:if(m=k,n=f.length,m.g+5>=n){for(p=m.g;p<n;p++)m.o.push(l.getUint8(p));m=!0}else{if(0<m.o.length){for(p=0;6>m.o.length;p++)m.o.push(l.getUint8(p));p=nI(m.o,0);12==p&&6==m.o[4]&&45==m.o[5]&&l.setUint8(m.g+5,63);m.g+=p+4;m.o.length=0}for(;m.g<m.l&&m.g+5<n;){p=l.getUint32(m.g);if(0>=p){m.l=window.NaN;m=!0;break a}12==p&&
6==l.getUint8(m.g+4)&&45==l.getUint8(m.g+5)&&l.setUint8(m.g+5,63);m.g+=p+4}m=m.g>=n}(0,window.isNaN)(k.l)||(k.l-=f.length,k.g-=f.length)}k=!1;3!=e.info.type||!Ou(e.info.g.info)&&2!=e.info.g.info.containerType||(k=Ou(e.info.g.info)&&a.l.fJ&&!b.I&&0==e.info.l&&0<e.info.startTime)&&sx(e,0);f=$I(a,c,f);if(0!=f){if(2!=f)if(e.info.g.info.video?(l=a.l,l.A=Math.floor(.8*l.A),l.I=Math.floor(.8*l.I)):(l=a.l,l.B=Math.floor(.8*l.B),l.X=Math.floor(.8*l.X)),l.l=Math.floor(.8*l.l),1==f&&c.remove&&!c.updating){f=
!1;l=c.buffered.length;for(m=0;!f&&m<l;m++)c.buffered.start(m)>e.info.A&&(c.remove(c.buffered.start(m),c.buffered.end(l-1)),f=!0);f||c.remove(0,Math.max(0,Math.min(a.B,e.info.startTime)-5))}else LH(b);f=!1}else f=!0;if(!f)return!1;b.I=!0;if(k)sx(e,e.info.startTime),c.abort(),c.g=null;else{f=b.l;for(k=[];f.g.length&&(f.g[0].range.end>d.end?(m=rx(f.g[0],d.end-f.g[0].range.start+1),l=m[0],f.g[0]=m[1]):l=f.g.shift(),k.push(l),l.range.end!=d.end););k.length&&(0,g.G)(k,b.ba,b)}e.pd&&e.info.g.g&&(c.g=e.info.g.g,
a.O("initsegment",c.g));return!0};
bJ=function(a,b,c){wz(a.C,b,c)&&c&&g.Df(function(){return WI(a,b.startTime)})};
WI=function(a,b){!a.ga()&&a.l.nb&&a.X&&-1!=a.g.B&&-1!=a.A.B&&(a.X=!1,a.O("seekplayerrequired",b+.1,!0))};
ZI=function(a,b,c){c.info.g.Mc();c=c.info.g.g;if(null==c||b.g==c)return!1;$I(a,b,c);b.g=c;a.O("initsegment",b.g);return b.updating};
$I=function(a,b,c){try{Ox(a.o)?b.appendBuffer(c):b.append(c)}catch(d){if(11==d.code)return VI(a,!1,"html5.invalidstate",{updating:""+ +b.updating,mrs:a.o.o.readyState}),2;if(22!=d.code&&0!=d.message.indexOf("Not enough storage"))return g.Q(d),4;a.l.mf&&a.Ae("quex","br."+kE(b.buffered).replace(/,/g,"_"));return 1}return Lx(a.o)?3:0};
cJ=function(a,b){b.l.subscribe("error",a.QF,a);b.l.subscribe("timestamprewrite",a.UF,a);var c=(0,g.A)(a.RF,a,b);b.l.subscribe("placeholderinfo",c,void 0);c=(0,g.A)(a.SF,a,b);b.l.subscribe("placeholderrollback",c,void 0);c=(0,g.A)(a.TF,a,b);b.l.subscribe("segmentinfo",c,void 0);b==a.g&&b.l.subscribe("cuepoint",a.PF,a)};
NI=function(a,b,c){if(a.R)return 1;var d=b.Ea.info.audio?a.l.B:a.l.A;!a.l.U&&gI(a.F)&&(d=Math.max(d,b.Ea.info.audio?a.l.X:a.l.I));c&&(d+=a.l.aa);var e=gI(a.F)?b.g?b.g.g.info.g:b.Ea.info.g:b.L;d/=e;0<a.l.Ta&&a.o&&Kx(a.o)&&(b=b.Ea.info.video?a.o.l:a.o.g)&&!b.updating&&(e=lE(b.buffered,a.B),0<=e&&(b=a.B-b.buffered.start(e),d+=Math.max(0,Math.min(b-a.l.Ta,a.l.gg))));0<a.l.l&&(d=Math.min(d,a.l.l));a.l.Ra&&c&&!gI(a.F)&&(c=a.F,c=hI(c,g.Ma(c.g))+hI(c,c.K.g[0]),c=a.l.Ra*(c/YH(a.H)),c<d&&15>c&&a.Ae("bwcapped",
"1",!0),c=Math.max(c,15),d=Math.min(d,c));return d};
OI=function(a){if(!a.Ya)return window.Infinity;var b=(0,g.Gd)(AI(a.Ya),function(a){return"ad"==a.namespace});
b=g.q(b);for(var c=b.next();!c.done;c=b.next())if(c=c.value,c.start/1E3>a.B)return c.start/1E3;return window.Infinity};
eJ=function(a){dJ(a);a.ba=new EI;return a.ba};
dJ=function(a){JI(a,!1);var b=Math.max(rH(a.g.l),rH(a.A.l)),c=a.g;c.C=!0;c.B=-1;FH(c,window.Infinity);c.l.B=b;c.Ch=b;c=a.A;c.C=!0;c.B=-1;FH(c,window.Infinity);c.l.B=b;c.Ch=b;c=a.C;for(var d in c.g)dw(c.g[d].index,window.Infinity);a.l.nb&&(a.X=!0);a.B=b;a.K=!0;g.Up(a.U);return b+.1};
fJ=function(a,b,c,d){if(b.Ea.Mc())if(d){var e=mE(d.buffered,c),f=window.NaN,k=b.A;k&&(f=mE(d.buffered,k.g.index.nd(k.na)));if(e==f&&NH(b))return c;d=DH(b,c);if(0<=d)return d;KH(b,b.Ea.Cd()?1:2);b.Ea.info.video&&b.A&&!b.A.o&&!nH(b.l)&&b.Ea.Cd()&&(d=b.A,b.l.g.length&&(d=kH(b.l).info),d=b.g||d,d=d.g.Dg(d,d.range.length-(d.Ja+d.l)),AH(b,SI(a,d)));if((0,window.isNaN)(e))return FH(b,c);FH(b,e+RI)}else FH(b,c);else 0!=c&&HH(b);return c};
gJ=function(a,b,c,d){c.Mc()||c.F||!my(c.A)||(d=c.di(d?XH(a.H,c.info):0),(0,g.G)(d,function(a){if("f"!=a.ra[0].g.info.l){var c=SI(this,a);!Qw(a.ra[a.ra.length-1])&&AH(b,c)}},a),c.F=!0)};
VI=function(a,b,c,d){a.ga()||(c=new g.LB(c,b,d),MB(c.details),a.O("error",c),b&&a.dispose())};
hJ=function(a){var b={lct:a.B.toFixed(3),lsk:a.K,lmf:gI(a.F),lbw:cA(a.P).toFixed(3),lhd:$z(a.P).toFixed(3),lst:(1E9*bA(a.P)).toFixed(3),laa:a.A.A?Vw(a.A.A):"",lva:a.g.A?Vw(a.g.A):"",lar:a.A.g?Vw(a.A.g):"",lvr:a.g.g?Vw(a.g.g):"",lvh:a.Ka};a.o&&!Lx(a.o)&&(b.lab=kE(a.o.g.buffered),b.lvb=kE(a.o.l.buffered));return b};
JI=function(a,b){var c=b?1:0;a.A&&KH(a.A,c);a.g&&KH(a.g,c)};
iJ=function(a,b,c){if(!b||!c)return!0;c=-1!=lE(c.buffered,a);var d=kH(b.l)?kH(b.l).info.A>=a:!1,e=b.o.length?b.o[0]:null;a=(b=e?e.info.ra[0]:b.g)&&b.startTime<=a;return!!(c||d||a)};
jJ=function(a,b){var c=b.info.video?a.g:a.A;null!=c&&gJ(a,c,b,!1)};
kJ=function(a,b){var c=new g.Rx;c.Ab=a.experiments.l("html5_throttle_rate")||c.Ab;a.experiments.g("html5_streaming_xhr")&&(c.H=!0);a.experiments.g("html5_streaming_debug")&&(c.H=!0,c.ya=!0);a.experiments.l("html5_max_av_sync_drift")&&(c.pf=a.experiments.l("html5_max_av_sync_drift"));var d=a.schedule;d.l.l()==d.policy.B?c.L=10:c.L=a.experiments.l("html5_throttle_burst_secs")||c.L;a.experiments.l("html5_min_secs_between_format_selections")&&(c.Nh=a.experiments.l("html5_min_secs_between_format_selections"));
c.R=a.experiments.l("html5_local_max_byterate_lookahead");c.ma=a.experiments.g("html5_stop_overlapping_requests");c.Ta=a.experiments.l("html5_min_readbehind_secs");c.gg=a.experiments.l("html5_min_readbehind_cap_secs");c.Yb=a.experiments.g("html5_append_init_while_paused");c.Ra=a.experiments.l("html5_max_readahead_bandwidth_cap");c.Sc=a.experiments.g("disable_html5_copy_pre_moof");c.gj=a.experiments.g("html5_disable_audio_append_cap");c.Tc=a.experiments.g("html5_disable_non_contiguous");c.Ya=a.experiments.l("html5_post_interrupt_readahead");
c.xd=a.experiments.g("html5_disable_urgent_upgrade_for_quality");c.mf=a.experiments.g("html5_log_quota_exceeded");c.zv=a.experiments.l("html5_subsegment_readahead_target_buffer_health_secs");c.zb=a.experiments.l("html5_subsegment_readahead_timeout_secs");c.hv=a.experiments.l("html5_subsegment_readahead_progress_timeout_fraction");c.jv=a.experiments.l("html5_subsegment_readahead_tail_margin_secs");c.gd=a.experiments.g("disable_html5_new_contiguity_logic");c.Yt=a.experiments.g("html5_streaming_xhr_optimize_lengthless_mp4");
c.Wa=a.experiments.g("html5_peak_shave");c.ij=a.experiments.g("html5_peak_shave_always_include_sd");c.Ec=a.experiments.g("disable_clear_out_of_sync");c.rk=a.experiments.g("html5_restrict_streaming_xhr_on_sqless_requests");c.qf=a.experiments.l("html5_max_headm_for_streaming_xhr");c.jj=a.experiments.g("html5_pipeline_manifestless_allow_nonstreaming");c.mj=a.experiments.g("html5_prefer_server_bwe3");c.Gc=a.experiments.g("html5_disable_clear_track_upgrade");c.wa=1024*a.experiments.l("html5_video_tbd_min_kb");
c.Le=a.experiments.g("html5_live_probe_primary_host");c.Xt=a.experiments.g("html5_streaming_xhr_buffer_mdat");c.sa=a.experiments.g("html5_streaming_xhr_no_mp4_holdback_chunk");c.Je=a.experiments.g("html5_last_slice_transition");c.P=a.experiments.g("html5_clear_by_reattaching");c.ud=a.experiments.g("html5_disable_incomplete_incremental_parse_error");c.Or=a.experiments.g("html5_store_xhr_headers_readable");Xr()&&(c.bb=!0);Qr()&&(c.l=240);g.oh&&(c.I=41943040);g.lB(a)||!Nx()?(c.A=8388608,c.B=524288,c.Bc=
5,c.aa=2097152,c.K=1048576,c.Uj=1.5,c.fa=15,c.U=!Nx(),c.hj=!1,c.C=4587520,Vr()&&(c.C=786432),c.g*=1.1,c.o*=1.1,c.Za=!0,c.I=c.A,c.X=c.B,c.P=!0,a.experiments.g("tvhtml5_slow_start")&&!a.Fd&&(c.wa=393216)):a.l&&(c.g*=1.3,c.o*=1.3);g.Px&&Pr("crkey")&&(d="CHROMECAST/ANCHOVY"==a.B.cmodel,c.A=20971520,c.B=1572864,d&&(c.C=812500,c.F=1E3,c.rw=5,c.K=2097152));(d=KB(a))||(d=Zr()&&/(J\d{3}|JS\d{3}|JU\d{3})/.test(a.B.cmodel));d&&!a.experiments.g("html5_disable_move_pssh_to_moov")&&(c.fj=!0);c.nJ=a.C;c.ej=!a.experiments.g("disable_fpa_sei_removal")&&
Pr("windows nt")&&(b.xg()||b.Hd());d="ULTRALOW"==b.latencyClass||a.experiments.g("html5_treat_latency_low_like_ultra_low")&&b.isLowLatencyLiveStream;b.Ib()&&(a.experiments.g("disable_html5_manifestless_delay")||(c.Ie=!0),c.zk=!1,a.experiments.g("html5_manifestless_always")&&(c.ia=!1,c.nb=!0),!(a.experiments.g("html5_pipeline_manifestless")||a.experiments.g("html5_pipeline_ultra_low_latency")&&d)||"ULTRALOW"!=b.latencyClass&&"LOW"!=b.latencyClass||(c.Ha=2,c.fg=4));b.isAd()&&(c.ba=0,c.Ga=0);(a.experiments.g("html5_streaming_response_mediastream_rewrite_v2")||
a.experiments.g("html5_ultra_low_latency_streaming_responses")&&d)&&b.Ia&&b.Ia.videoInfos.length&&Ou(b.Ia.videoInfos[0])&&b.Ib()&&!g.Sr()&&(c.H=!0,c.ya=!0);c.rb=a.experiments.g("html5_enable_subsegment_readahead_v3")||a.experiments.g("html5_ultra_low_latency_subsegment_readahead")&&d;c.nf=(a.experiments.g("html5_manifestless_accurate_sliceinfo")||c.rb)&&b.Ib();c.V=b.If;c.lf=c.V&&(/^rq[a-f]/.test(b.clientPlaybackNonce)||a.experiments.g("html5_high_res_logging"));/^pp/.test(b.clientPlaybackNonce)&&
(c.oJ=!0,c.qj=!0);KB(a)&&!a.experiments.g("html5_disable_move_pssh_to_moov")&&b.ka&&Zy(b.ka)&&(c.Za=!1);if(b.oa){d=tz(b.ka);var e=a.experiments.l("html5_live_abr_head_miss_fraction"),f=a.experiments.l("html5_live_abr_repredict_fraction");e&&d&&(c.Ma=Math.min(d*e,c.Ma));f&&d&&(c.F=Math.min(1E3*d*f,c.F))}b.Ia.videoInfos[0].Ob&&(c.P=!1);a.schedule.policy.A=b.Ib()?.5:0;d=a.experiments.l("html5_deadzone_multiplier")||1;(e=a.experiments.l("html5_sticky_reduces_discount_by"))&&"auto"!=ev()&&(d-=e);c.g*=
d;c.o*=d;if(d=a.experiments.l("html5_request_sizing_multiplier"))c.bk=d;a.experiments.g("html5_strip_emsg")&&(c.oj=!0);c.l=a.experiments.l("html5_max_buffer_duration")||c.l;c.Ka=a.experiments.l("html5_max_buffer_health_for_downgrade")||c.Ka;c.Ua=a.experiments.l("html5_min_upgrade_health")||c.Ua;a.experiments.g("disable_html5_streaming_response_timing")&&(c.Zv=!1);uA(a.R,PA)&&(c.C=window.NaN);c.fa=a.experiments.l("html5_request_size_max_secs")||c.fa;c.wd=a.experiments.g("killswitch_metadata_events");
a.experiments.g("html5_sticky_disables_variability")&&"auto"!=ev()&&(c.Mb=0);c.nj=a.experiments.g("html5_rec_2020_matrix_correction_killswitch");return c};
lJ=function(a,b,c){this.url=a;this.interval=b;this.g=c};
mJ=function(a,b){this.message=a;this.number=b;this.g=new gq};
nJ=function(a,b,c,d){this.statusCode=a;this.statusMessage=b;this.headers=c;this.message=d};
oJ=function(a){var b=String.fromCharCode.apply(String,a.subarray(0,16384)),c=b.indexOf("\r\n\r\n");if(-1==c)return null;var d=b.indexOf("\r\n"),e=b.slice(0,d).match(/^GLS\/1.\d ([0-9]{1,3}) (\w+)$/);if(null==e)return null;var f=e[1];(0,window.isFinite)(f)&&(f=String(f));f=g.w(f)?/^\s*-?0x/i.test(f)?(0,window.parseInt)(f,16):(0,window.parseInt)(f,10):window.NaN;e=e[2];b=qw(b.slice(d+2));return null==b?null:new nJ(f,e,b,a.subarray(c+4))};
pJ=function(a,b,c,d,e){g.J.call(this);this.A=a;this.K=b;this.F=c;this.g=d;this.l=e;this.sessionId="";this.I=this.H=this.B=this.C=null;this.da=new g.dt(this);g.K(this,this.da);this.g?(this.da.M(this.g,"message",this.SC),this.da.M(this.g,"keystatuseschange",this.TC)):this.l&&(et(this.da,this.l,["mskeymessage","webkitkeymessage"],this.Bu),et(this.da,this.l,["mskeyerror","webkitkeyerror"],this.Au),et(this.da,this.l,["mskeyadded","webkitkeyadded"],this.zu))};
qJ=function(a,b){this.initData=a;this.contentType=(void 0===b?"":b)||null;this.g=this.l=window.NaN;this.o=!1;this.A=[]};
rJ=function(a,b){g.J.call(this);this.l=a;this.g=b;this.C={};this.A=null;this.da=new g.dt(this);g.K(this,this.da);this.o=this.B=null};
tJ=function(a){if(a.g.l)return a.g.l.createMediaKeys().then(jr(function(b){a.ga()||(a.B=b,a.l.setMediaKeys(b))}));
Cz(a.g)?a.o=new (Bz())(a.g.g):Gz(a.g)?(a.o=new (Bz())(a.g.g),a.l.webkitSetMediaKeys(a.o)):sJ(a);return null};
sJ=function(a){et(a.da,a.l,["keymessage","webkitkeymessage"],a.WC);et(a.da,a.l,["keyerror","webkitkeyerror"],a.VC);et(a.da,a.l,["keyadded","webkitkeyadded"],a.UC)};
uJ=function(a,b){var c=b.subarray(4);c=String.fromCharCode.apply(null,new window.Uint16Array(c.buffer,c.byteOffset,c.byteLength/2)).match(/ek=([0-9a-f]+)/)[1];for(var d="",e=0;e<c.length;e+=2)d+=String.fromCharCode((0,window.parseInt)(c.substr(e,2),16));e=a.g.fairPlayCert;c=new window.Uint8Array(new window.ArrayBuffer(e.length));for(var f=0;f<e.length;f++)c[f]=e.charCodeAt(f);e=new window.ArrayBuffer(2*d.length);f=new window.Uint16Array(e);for(var k=0;k<d.length;k++)f[k]=d.charCodeAt(k);d=new window.Uint8Array(e);
e=0;k=new window.ArrayBuffer(b.byteLength+4+d.byteLength+4+c.byteLength);f=new window.Uint8Array(k);k=new window.DataView(k);f.set(b);e+=b.byteLength;k.setUint32(e,d.length,!0);e+=4;f.set(d,e);e+=d.length;k.setUint32(e,c.byteLength,!0);f.set(c,e+4);return f};
vJ=function(a,b){var c=a.C[b.sessionId];!c&&a.A&&(c=a.A,a.A=null,c.sessionId=b.sessionId,a.C[b.sessionId]=c);return c};
xJ=function(a,b,c,d,e,f){g.J.call(this);this.o=a;this.fc=d;this.fc.subscribe("oauthtoken",this.mt,this);this.C={session_id:e};this.H=!0;"playready"==a.flavor&&(a=(0,window.parseInt)(f.o("playready_first_play_expiration"),10),!(0,window.isNaN)(a)&&0<=a&&(this.C.mfpe=a),f.g("html5_playready_keystatuses_killswitch")||(this.H=!1));this.R=f.g("html5_use_drm_retry");this.P=0;f=this.o.A;"fairplay"==this.o.flavor&&(f=c.initData.subarray(4),f=String.fromCharCode.apply(null,new window.Uint16Array(f.buffer,
f.byteOffset,f.byteLength/2)).replace("skd://","https://"));wJ(this,f);this.F=this.I=!1;g.KC("drm_gk_s");try{var k=b.createSession(c)}catch(l){b="t.g",l instanceof window.DOMException&&(b+=";c."+l.code),this.fc.O("licenseerror","drm.unavailable",!0,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"),k=null}if(this.A=k)b=this.A,k=this.PC,f=this.OC,a=this.RC,b.C=this.QC,b.B=k,b.H=f,b.I=a,b.o=this,g.K(this,this.A);this.V=c.A;this.B=[];this.g={};this.K=window.NaN;this.l=c.l||window.NaN};
wJ=function(a,b){var c=b;var d=void 0===d?!1:d;if(kv(yJ.test(c),c,d,"Drm Licensor URL")){for(var e in a.C)b=Qg(b,e,a.C[e]);a.U=b}else zJ(a,"drm.net",!0,"t.x")};
AJ=function(a){var b={};g.kc(b,a.C);return b};
BJ=function(a){for(var b="",c=0;c<a.length;c+=2)b+=String.fromCharCode(a[c]);a=(new window.DOMParser).parseFromString(b,"text/xml").querySelector("Challenge");return new window.Uint8Array(ce(a.childNodes[0].data))};
CJ=function(a){var b;if(b=a.H)a=a.A,b=!(!a.g||!a.g.keyStatuses);return b};
zJ=function(a,b,c,d,e){a.ga()||a.fc.O("licenseerror",b,c,d,e);c&&a.dispose()};
DJ=function(a){return g.Ta(a,"UHD2")?"highres":g.Ta(a,"UHD1")?"hd2160":g.Ta(a,"HD")?"hd1080":g.Ta(a,"HD720")?"hd720":"large"};
EJ=function(a,b){if(!CJ(a)&&Fz(a.o)&&!b)return"large";var c=[],d=!0;if(CJ(a))for(var e in a.g)"usable"==a.g[e].status&&c.push(a.g[e].type),"unknown"!=a.g[e].status&&(d=!1);if(!CJ(a)||d)c=a.B;return DJ(c)};
FJ=function(a){if(!a)return{};var b={};(0,g.G)(a.split(";"),function(a){a=a.split(",");2==a.length&&(b[a[1]]={type:a[0],status:"unknown"})});
return b};
GJ=function(a){var b=a[0];a[0]=a[3];a[3]=b;b=a[1];a[1]=a[2];a[2]=b;b=a[4];a[4]=a[5];a[5]=b;b=a[6];a[6]=a[7];a[7]=b};
HJ=function(a,b){var c=[],d;for(d in a.g)c.push.apply(c,[d,a.g[d].type,a.g[d].status]);return c.join(b)};
IJ=function(a){return CJ(a)?HJ(a,";"):a.B.join(";")};
JJ=function(a,b,c,d){a=new window.Uint8Array(a);a=BJ(a);a={format:"RAW",method:"POST",postBody:(new mJ(a,1)).message,responseType:"arraybuffer",withCredentials:!0,timeout:3E4};c=Rg(c,d);hs(c,a,3,500).then(function(a){a=new window.Uint8Array(a.response);(a=oJ(a))&&b.update(a.message)})};
KJ=function(){this.keys=[];this.values=[]};
MJ=function(a,b,c,d,e){e=void 0===e?"":e;g.R.call(this);a&&(a.addKey||a.webkitAddKey)||Bz()||Iz(c);this.K=c;this.I=a;this.g=b;this.subscribe("newlicense",this.jG,this);this.subscribe("newsession",this.kG,this);this.subscribe("sessionready",this.eH,this);this.subscribe("keystatuseschange",this.XC,this);this.subscribe("hdentitled",this.tF,this);this.fa=e||g.ou();this.P=null;this.l=new KJ;this.A=this.C=null;this.o=[];this.F="fairplay"==this.g.flavor?Yu:LJ;this.L=new rJ(a,b);g.K(this,this.L);this.B=null;
Cz(b)&&(this.B=new rJ(a,b),g.K(this,this.B));this.X=2;this.da=new g.dt(this);g.K(this,this.da);this.V=!1;this.aa=null;this.H=!1;a=this.I;this.g.l?this.da.M(a,"encrypted",this.iF):et(this.da,a,Cz(this.g)?["msneedkey"]:["needkey","webkitneedkey"],this.gG);(a=tJ(this.L))?a.then(jr((0,g.A)(this.NF,this)),jr((0,g.A)(this.uE,this))):this.H=!0;this.B&&tJ(this.B);this.ba=d;this.R=this.U=!1;Iz(c)};
OJ=function(a,b){if(Cz(a.g)&&!a.U){var c=fH(b);if(0!=c.length){var d=new qJ(c);a.U=!0;window.navigator.requestMediaKeySystemAccess("com.microsoft.playready",[{initDataTypes:["keyids","cenc"],audioCapabilities:[{contentType:'audio/mp4; codecs="mp4a"'}],videoCapabilities:[{contentType:'video/mp4; codecs="avc1"'}]}]).then(function(b){b.createMediaKeys().then(function(b){NJ(a,b,d)})},null)}}};
NJ=function(a,b,c){var d=b.createSession(),e=a.l.values[0],f=AJ(e);d.addEventListener("message",function(b){JJ(b.message,d,a.g.A,f)});
d.addEventListener("keystatuseschange",function(){d.keyStatuses.forEach(function(b,c){"usable"==c&&(a.R=!0,PJ(a,EJ(e,a.R)))})});
d.generateRequest("cenc",c.initData)};
RJ=function(a,b,c){a.ga()||Cz(a.g)==c||a.V&&a.ba||(a.V=!0,a.o.push(b),1<a.o.length||a.H&&QJ(a))};
QJ=function(a){for(;a.o.length;){var b=a.o[0];if(g.ob(a.C,b.initData))a.o.shift();else{if(a.l.get(b.initData))if("fairplay"==a.g.flavor)a.l.remove(b.initData);else{a.o.shift();continue}a:{var c=b.initData;try{for(var d=0,e=new window.DataView(c.buffer);d<e.byteLength-8;){var f=e.getUint32(d);if(1>=f)break;if(1886614376==e.getUint32(d+4)){var k=32;if(0<e.getUint8(d+8)){var l=e.getUint32(d+28);k+=16*l+4}var m=e.getUint32(d+k-4);try{var n=new ke(c.subarray(d+k,d+k+m)),p=new dr;for(k=n;le(k)&&4!=k.l;)switch(k.o){case 1:var u=
k.g;b:{for(var v,C,D=u,E=0,ea=0;4>ea;ea++)if(C=D.l[D.g++],E|=(C&127)<<7*ea,128>C){D.F=E>>>0;D.C=0;break b}C=D.l[D.g++];E|=(C&127)<<28;v=0|(C&127)>>4;if(128>C)D.F=E>>>0,D.C=v>>>0;else{for(ea=0;5>ea;ea++)if(C=D.l[D.g++],v|=(C&127)<<7*ea+3,128>C){D.F=E>>>0;D.C=v>>>0;break b}D.B=!0}}var fa=u.F,Za=u.C;if(D=Za&2147483648)fa=~fa+1>>>0,Za=~Za>>>0,0==fa&&(Za=Za+1>>>0);E=4294967296*Za+fa;var Ha=D?-E:E;ye(p,1,Ha);break;case 2:D=Ha=oe(k);we(p,2).push(D);break;case 3:Ha=ne(k);ye(p,3,Ha);break;case 4:Ha=oe(k);
ye(p,4,Ha);break;case 5:Ha=ne(k);ye(p,5,Ha);break;case 6:Ha=ne(k);ye(p,6,Ha);break;case 7:Ha=je(k.g);ye(p,7,Ha);break;case 8:Ha=oe(k);ye(p,8,Ha);break;case 9:Ha=je(k.g);ye(p,9,Ha);break;case 10:Ha=je(k.g);ye(p,10,Ha);break;case 11:Ha=new ar;D=k;E=Ha;ea=br;var Ja=D.g.o,si=je(D.g),Re=D.g.g+si;D.g.o=Re;ea(E,D);D.g.g=Re;D.g.o=Ja;D=p;E=Ha;ea=ar;var Se=D,eh=ea;Se.g||(Se.g={});if(!Se.g[11]){for(var lv=we(Se,11),mv=[],Bm=0;Bm<lv.length;Bm++)mv[Bm]=new eh(lv[Bm]);Se.g[11]=mv}var kq=D.g[11];kq||(kq=D.g[11]=
[]);var nv=E?E:new ea,ov=we(D,11);kq.push(nv);ov.push(ze(nv));break;case 12:Ha=oe(k);ye(p,12,Ha);break;default:me(k)}var Cm=p;if(null!=Cm){var pe=Cm;break a}}catch(pv){}}d+=f}pe=null}catch(pv){pe=null}}if(null!=pe)for(c=ve(pe,7),null!=c&&(b.l=c),c=ve(pe,10),null!=c&&0<c&&(b.g=c),c=we(pe,2),c=!c.length||c[0]instanceof window.Uint8Array?c:(0,g.I)(c,xe),c=g.q(c),d=c.next();!d.done;d=c.next())b.A.push(hH(d.value));if("widevine"==a.g.flavor){a:if(c=a,(0,window.isNaN)(b.l)&&0<c.l.values.length)c=!0;else{c=
g.q(c.l.values);for(d=c.next();!d.done;d=c.next())if(d.value.l==b.l){c=!0;break a}c=!1}if(c&&!a.K.g("html5_dedup_by_cryptoperiod_killswitch"))a.o.shift();else{a:{c=a;if(!(c.K.g("disable_license_delay")||"widevine"!=c.g.flavor||b.o||(0,window.isNaN)(b.l)))for(c=g.q(c.l.values),d=c.next();!d.done;d=c.next())if(1>=Math.abs(d.value.l-b.l)){c=!0;break a}c=!1}if(c){SJ(a,b);a.o.shift();continue}}}break}}a.o.length&&(b=a.o[0],a.l.get(b.initData),pe=new xJ(a.g,a.L,b,a,a.fa,a.K),pe.mt(a.P),a.l.set(b.initData,
pe))};
SJ=function(a,b){a.A&&a.A.dispose();a.C=b.initData;a.A=new g.P(function(){a.C=null;a.A=null;b.o=!0;a.o.push(b);1<a.o.length||QJ(a)},TJ(b.g));
a.A.start()};
TJ=function(a){return 1E3*Math.max(0,Math.random()*(((0,window.isNaN)(a)?120:a)-30))};
PJ=function(a,b){bv(a.F,b)||(a.F=Wu("auto",b,!1),a.O("qualitychange"))};
UJ=function(a){var b={};this.o=(b.c1a=(0,g.A)(this.B,this),b.c3a=(0,g.A)(this.C,this),b.c6a=(0,g.A)(this.A,this),b);(this.g=a)&&this.g.wj?this.l=g.sr(this.g.wj):this.l=[]};
VJ=function(a,b){this.g=a;this.l=b};
WJ=function(a,b){var c=Zu(Zu(a.g.pj,b.Vi),b.Zi);"auto"!=ev()||(c=a.g.experiments.g("html5_restore_performance_cap")?Zu(c,new Vu(0,gv(),!1)):Zu(c,a.g.mf));return c};
YJ=function(a,b){var c=ev();if("auto"!=c)var d=Wu("auto",c,!1);else if(g.lB(a.g)&&uA(a.g.R,OA))d=Yu;else{var e;c=!!b.Ia.g;oB(a.g)&&(e=window.screen&&window.screen.width?new g.bd(window.screen.width,window.screen.height):null);e||(e=a.g.gg?a.g.gg.clone():a.l.Da());(jB||XJ||c)&&e.scale(g.DB());var f=b.Ia.videoInfos;if(f.length){c=.85;4!=f[0].video.projectionType&&2!=f[0].video.projectionType&&3!=f[0].video.projectionType||AA||(c=.45);f=g.q(f);for(var k=f.next();!k.done&&!(d=k.value.video,null===e||
d.width*c<e.width&&d.height*c<e.height);k=f.next());d=Wu("auto",d.quality,!1)}else d=Yu;e=d.g;(Pr("armv7")||Pr("android"))&&!g.lB(a.g)&&Mu(b.Ia.videoInfos[0])&&(e=Math.min(e,g.Eu.large));!a.g.experiments.g("html5_mweb_client_cap")||!a.g.l||g.qB(a.g)||Yr()||a.g.experiments.g("mweb_uniplayer_auto_quality")||a.g.experiments.g("hls_for_vod")||(e=Math.min(e,g.Eu.medium));e=Math.max(e,g.Eu.medium);a.g.experiments.l("html5_default_quality_cap")&&(c=!0,(f=a.g.experiments.l("html5_quality_cap_min_age_secs"))&&
(c=g.Mt()-a.g.schedule.F>1E3*f),c&&(e=Math.min(e,a.g.experiments.l("html5_default_quality_cap"))));d.g!=e&&(d=new Vu(d.l,e,d.o))}return d};
aK=function(a,b,c,d){a=void 0===a?null:a;b=void 0===b?null:b;c=void 0===c?null:c;d=void 0===d?null:d;g.R.call(this);var e=this;this.I=new g.dt;g.K(this,this.I);this.l=a;ZJ(this);this.B=null;$J(this,b);this.o=c;this.P=d;this.g=window.NaN;this.H=this.C=this.A=null;this.K=this.F=!1;this.L=new g.P(function(){e.O("ctmp","seektimeout",MB(aaa(e)))},2E4);
g.K(this,this.L)};
$J=function(a,b){a.B&&a.B.unsubscribe("seekelementrequired",a.U,a);a.B=b;a.B&&a.B.subscribe("seekelementrequired",a.U,a)};
cK=function(a,b,c){c=void 0===c?!0:c;if(b!=a.g||!a.F){a.F&&bK(a);a.H||(a.H=new EI);if((0,window.isFinite)(b)||!a.o.Ib())b=g.Vc(b,a.tb(),a.kd());a.g=b;a.O("seekto",b,c);c&&(a.F=!0,!a.o.oa&&a.g>=a.kd()?(b=a.kd(),a.O("seekstart"),a.H.resolve(b),a.O("seekend"),bK(a),a.g=b,a.O("ended")):baa(a))}};
baa=function(a){caa(a).then(void 0,function(){bK(a)});
daa(a).then(function(b){a.H.resolve(b);a.O("seekend");bK(a)},function(){bK(a)});
a.L.start();a.O("seekstart")};
caa=function(a){a.C||(a.B?(0,window.isFinite)(a.g)?a.C=a.B.seek(a.g):(a.O("pausemediaelement"),a.C=eJ(a.B).then(function(b){a.g=b;dK(a);a.O("seekto",b,a.F);a.O("resumemediaelement")})):a.C=Nf(a.g));
return a.C};
daa=function(a){a.A||(a.A=new EI,dK(a));return a.A};
dK=function(a){a.A&&(0<a.l.g.readyState||0<a.l.getCurrentTime())&&!(0,window.isNaN)(a.g)&&(0,window.isFinite)(a.g)&&a.l.xb(a.g)};
bK=function(a){a.g=window.NaN;a.A=null;a.C=null;a.H=null;a.F=!1;a.K=!1;a.L.stop()};
ZJ=function(a){if(a.l)for(var b=g.q(["loadedmetadata","seeked","seeking"]),c=b.next();!c.done;c=b.next())a.I.M(a.l,c.value,function(b){switch(b.type){case "seeking":b=a.l.getCurrentTime();if(!a.A||a.K&&b!=a.g)a.A=new EI,a.A.resolve(b),cK(a,b,!0),a.K=!0;break;case "seeked":a.A&&a.A.resolve(a.l.getCurrentTime());break;case "loadedmetadata":dK(a)}})};
aaa=function(a){var b={Ch:a.g};a.B&&g.Ka(b,hJ(a.B));a.l&&g.Ka(b,CE(a.l));return b};
eK=function(a){qE.call(this);this.g=a;this.A={}};
tE=function(a,b){var c=a.ec();a.g.src=b;a.Ce(c)};
yE=function(a){return a.g.buffered||jE()};
SE=function(a){return a.g.error?a.g.error.message:""};
fK=function(){g.J.call(this);this.o={};this.g={};this.l=new g.P(this.sI,250,this);g.K(this,this.l)};
gK=function(a,b){return a.g[b]?cG(a.g[b].g):[]};
hK=function(a,b){return a.g[b]?bG(a.g[b].g):0};
iK=function(a){this.o=a;this.g=new aG(100);this.l=window.NaN};
kK=function(a,b,c,d,e,f){g.R.call(this);this.Ma=new gE;this.P=c;this.bb=d;this.nf=f;c=(0,g.A)(function(a,b){"crn_endcr"!=a||g.T(this.o,32)||jK(this);e(a,b)},this);
this.K=new yI((0,g.A)(this.getCurrentTime,this),(0,g.A)(this.rs,this),(0,g.A)(this.yA,this),c);g.K(this,this.K);this.ma=window.NaN;this.aa=this.H=null;this.A=a;this.sa=new VJ(a,this.bb);this.Gc=!0;this.L=this.B=null;this.X=[];this.Ka=new yH;this.R=new yH;this.Le=this.gd=this.pf=this.Ra=!1;this.zb=window.NaN;this.o=new g.FE;this.Ab=[];this.Za=b;this.ya=null;this.V=window.NaN;this.wa=new g.dt;g.K(this,this.wa);this.g=new g.qD;this.l=null;this.ba=window.NaN;this.C=null;this.Ie=this.Ta=!1;this.Ua=window.NaN;
this.Ga=this.Tc=this.Mb=this.Wa=!1;this.Yb=this.ud=window.NaN;this.fg=a.experiments.g("html5_force_play_on_suspend_event");this.gg=a.experiments.g("html5_force_play_on_suspend_event_limited");this.U=null;this.ia=new fK;g.K(this,this.ia);this.ia.vl("bufferhealth",(0,g.A)(this.Wq,this));this.ia.vl("bandwidth",(0,g.A)(this.Ny,this));this.ia.vl("networkactivity",(0,g.A)(this.Qy,this),!0);this.ia.vl("livelatency",(0,g.A)(this.br,this));this.ia.start();this.Je=!1;this.Bc=!0;this.Sc=!1;this.Ya=window.NaN;
this.wd=!1;this.Ha=1;this.I=null;this.lf=(0,g.A)(this.HH,this);aw(this.lf);this.qf=this.mf=this.xd=0;this.fa=this.F=null};
lK=function(a){g.Tt()?g.Ut(a.Ua):g.qr(a.Ua)};
vK=function(a,b,c,d){d=void 0===d?!0:d;a.X.length=0;a.Ka.reset();a.R.reset();a.ma=window.NaN;a.V=window.NaN;a.Ta=!1;a.Sc=!1;a.Ya=window.NaN;a.Gc=!0;a.l&&a.l.cf();mK(a);nK(a);oK(a);a.F&&(a.F.dispose(),a.F=null);lK(a);a.ia.clear();a.U=null;a.I=null;g.Ee(a.g);if(2==a.Za||Ev(a.A.aa))b.Nr=!0;var e=b.Bb;var f=a.A.o;var k=a.A.ob,l;(l=e.adformat)||(l=(e=e.attrib)&&$b(pK,e)&&$b(qK,e)?qK[e]+"_"+pK[e]:void 0);if(e=l)if((l=e.match(rK))&&5==l.length){l=e.match(rK);var m=(0,window.parseInt)(l[3],10),n=[7,8,10,
5,6];l=!(1==(0,window.parseInt)(l[1],10)&&8==m)&&0<=n.indexOf(m);f=f||k||l?e:null}else f=null;else f=null;f&&(b.adFormat=f);2==a.Za&&(b.Lg=!0);if(a.A.Ka||a.A.o)f=g.tu("yt-player-autonavstate"),b.autonavState=f||(a.A.o?2:a.g.autonavState);a.Bc=d;a.g=b;a.g.subscribe("dataupdated",a.EH,a);a.g.subscribe("dataloaded",a.mq,a);a.g.subscribe("dataloaderror",a.oh,a);a.g.subscribe("onStatusFail",a.DH,a);b.endSeconds&&b.endSeconds>b.startSeconds&&sK(a,b.endSeconds);eaa(a,c);a.Wa=!1;tK(a,"newdata");uK(a,new g.FE)};
eaa=function(a,b){nK(a);if(!a.g.Eh){var c=new cF(a.g,a.A,b,(0,g.A)(a.getDuration,a),(0,g.A)(a.getCurrentTime,a),(0,g.A)(a.Ry,a),(0,g.A)(a.bb.Da,a.bb),(0,g.A)(a.Hn,a),(0,g.A)(a.rs,a),(0,g.A)(a.Em,a),a.nf,(0,g.A)(a.bz,a),function(){return a.P.g("qoes")});
a.C=new vF(c)}};
nK=function(a){if(a.C){var b=a.C;if(!b.ga()&&b.B){b.C="paused";var c=zF(b);c.ba=!0;c.send();c=b.l;"PL"==c.o&&(c.o="N");var d=g.eF(c.g);g.iF(c,d,"vps",[c.o]);c.B(d);g.qr(b.A);b.dispose()}g.Ee(a.C);a.C=null}};
xK=function(a){if(a.g.Nc())return!0;g.wK(a,"api.invalidparam",void 0,"invalidVideodata.1");return!1};
yK=function(a,b){a.Ra=void 0===b?!1:b;if(xK(a)&&!a.Ka.l){a.Ka.start();if(a.C){var c=a.C.l;c.g.g.experiments.g("html5_qoe_unstarted_in_initialization")?g.eF(c.g):g.iF(c,g.eF(c.g),"vps",["N"]);c.g.videoData.Yk?rF(c,"prefetch"):(c.l.user_intent=["0"],c.H=!0);c.g.videoData.Uf&&(kF(c,"reload",c.g.videoData.reloadReason),kF(c,"reloadcount",c.g.videoData.Uf.toString()));c.g.videoData.lh&&rF(c,"monitor");c.g.videoData.oa&&rF(c,"live");c.g.videoData.If&&rF(c,"rqs");c.g.videoData.Vf&&kF(c,"ctrl",c.g.videoData.Vf,
!0);c.g.videoData.gf&&kF(c,"ytp",c.g.videoData.gf,!0);if(c.g.videoData.ov){var d=c.g.videoData.ov.replace(/,/g,".");kF(c,"ytrexp",d,!0)}if(!c.g.g.experiments.g("html5_disable_gpu_reporting")){var e=c.g.g.experiments;d=c.g.videoData;e=e.g("enable_white_noise")||e.g("enable_webgl_noop")||e.g("enable_gpu_logging");var f=d.xg()||d.ue()||d.we()||d.Hd();d=0==d.clientPlaybackNonce.indexOf("gp");(e||f||d)&&(d=(0,g.TE)())&&(c.l.gpu=[d])}c.R=g.pr((0,g.A)(c.B,c),1E4)}a.mq()}};
AK=function(a){a.l&&uE(a.l);yK(a);xK(a)&&!g.T(a.o,128)&&(a.R.l||(a.R.start(),uK(a,LE(LE(a.o,8),1))),zK(a))};
zK=function(a){if(!a.R.g&&a.Ka.g&&!g.T(a.o,128)&&!a.X.length){if(!a.K.B){var b=a.K;b.B=!0;b.o()}if(!BK(a)){a.B&&(b=a.B,a.pf=!!b.fa&&!!b.sa);a.R.g||(a.R.g=!0);!a.g.oa||0<a.g.dn&&!a.g.Ib()||(CK(a,window.Infinity,!0),DK(a,!0),Zv()&&(a.Ie=!0));if(a.C&&(b=a.C,b.g.videoData.enableCardio&&b.g.videoData.enableCardioBeforePlayback&&(b.pl("connected"),DF(b)),b.g.videoData.oa)){b=b.l;var c=b.g.videoData.ka;b.g.videoData.Ib()&&rF(b,"manifestless");c&&tz(c)&&rF(b,"live-segment-"+tz(c).toFixed(1))}a.O("playbackready",
a);aD("pbr","")||(a.P.g("pbr"),g.KC("pbr",void 0,"video_to_ad"))}}};
jK=function(a,b){b=void 0===b?!0:b;EK(a);var c=b?new g.FE(14):new g.FE;uK(a,c)};
sK=function(a,b){a.aa&&(a.K.C(a.aa),a.aa=null);a.aa=new g.JF(1E3*b,0x7ffffffffffff);a.aa.namespace="endcr";zI(a.K,[a.aa])};
HK=function(a,b,c,d){a.g.Ba=c;a.g.Hc=d||c;if(a.C){var e=FK(a);e=new dE(a.g,c,b,e?Ku(e):"");d&&"i"==b&&GK(a,b,d);d=a.C.l;c=g.eF(d.g);g.iF(d,c,"vfs",[e.g.id,e.l,d.ba,"b"==e.reason?"a":e.reason]);d.ba=e.g.id;e=d.g.P();if(0<e.width&&0<e.height){e=[Math.round(e.width),Math.round(e.height)];var f=g.DB();1<f&&e.push(f);g.iF(d,c,"view",e)}g.iF(d,c,"vps",[d.o]);d.B(c);a.A.experiments.g("html5_report_performance_cap")&&"i"==b&&(d=gv())&&a.tc("perfCap",""+d)}a.xd=0;a.O("internalvideoformatchange",a.g,"m"==b)};
FK=function(a){if(!a.g.Ia)return null;var b=Zu(Zu(YJ(a.sa,a.g),IK(a)),JK(a));return g.Pa(a.g.Ia.videoInfos,(0,g.A)(b.A,b))};
GK=function(a,b,c){a.g.Hc=c;if(a.C){var d=a.C.l;c=new dE(a.g,c,b,"");var e=g.eF(d.g);c.g.id!=d.L&&(g.iF(d,e,"afs",[c.g.id,d.L,c.reason]),d.L=c.g.id)}"i"!=b&&a.O("internalaudioformatchange",a.g,"m"==b)};
g.wK=function(a,b,c,d){var e,f;g.ac(faa,c)?e=c:c?f=c:e="YTP_ERROR_GENERIC_WITHOUT_LINK";b={errorCode:b,errorDetail:d,message:f||g.S(e),messageKey:e};uK(a,JE(a.o,128,b));lK(a);oK(a);g.KK(a)};
gaa=function(a,b){a.X=a.X.filter(function(a){return b!=a});
a.R.l&&zK(a)};
BK=function(a){var b;(b=!!a.X.length)||(a=a.K.g.g[0],b=!!a&&-0x8000000000000>=a.start);return b};
NK=function(a,b){a.l&&LK(a);a.o.isError()||uK(a,ME(a.o,512));a.l=b;a.l.g.loop=a.wd;a.l.Ce(a.Ha);haa(a);MK(a);if(a.F){var c=a.F,d=a.l;g.ft(c.I);c.l=d;ZJ(c)}};
MK=function(a){if(a.A.experiments.g("html5_prewarm_mse")&&mA())try{wE(a.l,a.A.C)}catch(b){}};
LK=function(a){OK(a);a.B&&(g.Up(a.B.U),HI(a.B,!1));a.l&&(!a.R.l||a.o.isError()||g.T(a.o,2)||uK(a,LE(a.o,512)),mK(a),g.ft(a.wa),a.l.cf(),a.l=null,a.F&&(a=a.F,g.ft(a.I),a.l=null,ZJ(a)))};
TK=function(a){if(!g.T(a.o,128))if(a.Je)a.Je=!1,PK(a);else if(AK(a),g.T(a.o,64)&&uK(a,LE(a.o,8)),a.R.g&&a.l)if(a.g.Ia){if(a.g.oa){var b=QK(a),c=g.UD(a.g)&&g.T(a.o,4);if(b||c)c?CK(a,window.Infinity,!0):CK(a,a.tb(),!0);RK(a,void 0,!0)?DK(a,!0):a.isPeggedToLive()&&CK(a,window.Infinity,!0);if(a.A.experiments.g("html5_new_seeking")&&g.T(a.o,256)&&a.g.Fd){uK(a,NE(a.o,8,4));return}}SK(a)?a.A.Aj?g.or((0,g.A)(a.Pi,a),0):a.Pi():a.Pi()}else b=a.g.oa&&!g.rA()?"html5.unsupportedlive":a.g.Ob?"fmt.unplayable":"fmt.noneavailable",
g.wK(a,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","selectableFormats.1")};
VK=function(a){mK(a);oK(a);UK(a)};
WK=function(a){if(!a.g.Ia)return[];var b=IK(a);g.lB(a.A)&&(b=Zu(b,YJ(a.sa,a.g)));b=b||Yu;a=(0,g.Gd)(a.g.Ia.videoInfos,(0,g.A)(b.A,b));b=[];for(var c={},d=0;d<a.length;d++){var e=a[d].video;c[e.quality]||(b.push(e),c[e.quality]=!0)}return b};
XK=function(a){return Zu(Zu(Zu(WJ(a.sa,a.g),YJ(a.sa,a.g)),IK(a)),JK(a))};
IK=function(a){return a.H?a.H.F:BD(a.g)&&a.g.Ia.g&&Zy(a.g.ka)?LJ:Yu};
YK=function(a,b,c){if(!a.ga()&&!g.T(a.o,128)&&(c&&(a.g.Zi=c),BD(a.g))){if("m"==b&&c){Xu(c)&&(b="a");a:{var d=a.g;if(d.Ia){var e=g.Eu[ev()];d=d.Ia.videoInfos[0].video.g;if(e>d&&c.g==d)break a}g.ru("yt-player-quality",g.av(c),2592E3)}}c=XK(a);if(a.g.Ia.g){if(a.B&&"i"!=b&&(e=a.B,!e.ga()&&e.g)){(c=eI(e.F,c,b,!1))&&e.O("videoformatchange",c);GI(e);if(gI(e.F)&&"m"==b&&e.F.P||"b"==b)e.l.P?e.O("reattachrequired"):(LH(e.g),LH(e.A));QH(e.g)&&QI(e,e.g,e.A);g.Up(e.U)}}else{e=a.g;a:if(d=a.g.vh,c.g){for(var f=
g.q(d),k=f.next();!k.done;k=f.next()){k=k.value;var l=k.Se(),m=g.Eu[l.video.quality];if((!c.o||"auto"!=l.video.quality)&&m<=c.g){c=k;break a}}c=d[d.length-1]}else c=d[0];e.Tf=c;HK(a,b,a.g.Tf.Se())}a.o.gb()&&TK(a)}};
iaa=function(a){a.I=new hG(a.g,a.A.experiments,function(){return ZK(a,!0)});
a.C&&EF(a.C,jG(a.I))};
g.$K=function(a){vz(a.g.ka,{cpn:a.g.clientPlaybackNonce,c:a.A.B.c,cver:a.A.B.cver});var b=kJ(a.A,a.g);a.A.schedule.policy.A=a.g.Ib()?.5:0;a.B=new FI(a.A.schedule,b,a.g.ka,a.g.Ia,a.K);a.B.subscribe("initsegment",a.wF,a);a.B.subscribe("videoformatchange",a.HF,a);a.B.subscribe("audioformatchange",a.GF,a);a.B.subscribe("error",a.oh,a);a.B.subscribe("ctmp",a.tc,a);a.B.subscribe("seekelementrequired",a.vI,a);a.B.subscribe("seekplayerrequired",(0,g.A)(function(a,b){CK(this,a,!0,void 0,b)},a));
a.B.subscribe("reattachrequired",a.rI,a);a.B.subscribe("metadata",a.xu,a);b=g.Ta(a.X,"spacecast")||a.Ra;var c=a.Hn();c=c.dc.isDefault?void 0:c;a.B.initialize(a.g.startSeconds,XK(a),b,c);a.g.probeUrl&&(a.B.ia=a.g.probeUrl);(a.X.length||a.Ra)&&HI(a.B,!1);a.F&&$J(a.F,a.B)};
jaa=function(a){a.F=new aK(a.l,a.B,a.g,a.I);a.F.subscribe("seekto",function(b,c){aL(a,b);c||bL(a);cL(a,b);a.O("seekto",a,b)});
a.F.subscribe("seekstart",function(){return dL(a)});
a.F.subscribe("ended",function(){return jK(a)});
a.F.subscribe("pausemediaelement",function(){return EK(a,!0)});
a.F.subscribe("resumemediaelement",function(){g.T(a.o,8)&&a.Pi()});
a.F.subscribe("ctmp",a.tc,a)};
JK=function(a){var b=a.A.experiments.l("html5_background_quality_cap");a=a.A.experiments.l("html5_background_cap_idle_secs");return!b||"auto"!=ev()||g.$t()/1E3<a?Yu:Zv()?new Vu(0,b,!1):Yu};
oK=function(a){a.B&&(a.B.dispose(),a.B=null,a.F&&$J(a.F,null));OK(a)};
OK=function(a){a.L&&(a.L.dispose(),a.L=null)};
UK=function(a){if(a.L)return a.L.B;a.B?a.B.seek(a.getCurrentTime()):g.$K(a);try{a.A.experiments.g("html5_prewarm_mse")?a.L=xE(a.l,a.A.C):a.L=vE(a.l,a.A.C)}catch(d){return d.message="window.URL object overwritten by external code",window.setTimeout(function(){throw d;},0),g.wK(a,a.g.Ob?"drm.unavailable":"html5.missingapi","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","updateMs.1"),null}var b=(0,g.A)(a.OF,a),c=(0,g.A)(function(a){g.wK(this,"fmt.unplayable",void 0,"msi.1;ename."+a.name)},a);
a.A.experiments.g("html5_prewarm_mse")?Jx(a.L).then(b).then(void 0,c):(a.L.A=b,a.L.C=c);return a.L.B};
kaa=function(a){return 403==a.details.rc?(a=a.errorCode,"net.badstatus"==a||"manifest.net.retryexhausted"==a):!1};
PK=function(a){!a.g.Fd&&a.g.Uf||a.Mb||(a.Mb=!0,a.O("signatureexpired"))};
eL=function(a){return"net.retryexhausted"==a.errorCode||"net.badstatus"==a.errorCode&&!!a.details.fmt_unav};
laa=function(a,b){if(a.l&&("fmt.unplayable"==b.errorCode||"html5.invalidstate"==b.errorCode)){var c=a.l.Td();b.details.merr=c?c.toString():"0";b.details.msg=SE(a.l)}};
EK=function(a,b){b=void 0===b?!1:b;var c=!a.A.experiments.g("web_player_ended_pause_killswitch")&&g.T(a.o,2);if((g.T(a.o,64)||c)&&!b)if(g.T(a.o,8))uK(a,NE(a.o,4,8));else return;if(a.l||a.A.experiments.g("html5_pause_video_fix"))g.T(a.o,128)||(b?uK(a,LE(a.o,256)):uK(a,NE(a.o,4,8))),a.l&&a.l.pause()};
fL=function(a){EK(a);a.B&&(HI(a.B,!1),JI(a.B,!1))};
g.KK=function(a,b){b=void 0===b?!1:b;if(a.l){try{a.l.pause()}catch(c){return}mK(a);oK(a);a.g&&(a.g.startSeconds=a.getCurrentTime());a.V=window.NaN;a.l.cf();MK(a);g.T(a.o,128)||(b?uK(a,NE(a.o,4,8)):uK(a,JE(a.o)));a.A.L.remove(a.g.videoId)}};
CK=function(a,b,c,d,e){b=void 0===b?0:b;c=void 0===c?!1:c;e=void 0===e?!1:e;if(a.l&&a.R.g){if(b&&!(0,window.isFinite)(b)&&a.I&&a.B){if(a.g.isLowLatencyLiveStream||"LOW"==a.g.latencyClass||"ULTRALOW"==a.g.latencyClass){var f=a.I;if(f.o.length){var k=f.l;1<Math.min.apply(null,f.o)?f.l=gG(f,f.l-1):f.g.o&&(f.l=gG(f,f.l+1));if(k=k!=f.l)f.o=[],f.C=0;f=k}else f=!1;f&&a.C&&EF(a.C,jG(a.I))}a.B.Ha=Math.max(0,a.I.l-1)}if(a.A.experiments.g("html5_new_seeking"))cK(a.F,b,c);else{var l;if(f=b&&!(0,window.isFinite)(b)&&
a.B&&a.g.Ib())f=a.B,f=!(f.g.C||f.A.C)||a.g.Fd&&!a.A.experiments.g("html5_manifestless_no_redundant_seek_to_head");f&&(l=dJ(a.B));l||(l=g.Vc(b||0,a.tb(),ZK(a,e)));aL(a,l);c?a.Pq():bL(a,d);cL(a,l);a.O("seekto",a,l)}}else a.g.startSeconds=b};
aL=function(a,b){if(a.A.experiments.g("html5_new_peg_to_live_v2")&&a.I){var c=a.I;nG(c,b,!1);oG(c,b)}else c=a.g.oa&&!g.T(a.o,4)&&RK(a,b),DK(a,c);a.g.startSeconds=b;a.V=b;c=a.Ma;c.g=b;c.l=!0};
cL=function(a,b){a.aa&&b>a.g.endSeconds&&(0,window.isFinite)(b)&&(a.K.C(a.aa),a.aa=null);b<ZK(a)&&uK(a,ME(a.o,2))};
bL=function(a,b){g.T(a.o,32)||(uK(a,LE(a.o,32)),g.T(a.o,8)&&EK(a,!0),a.O("beginseeking",a));b&&(a.ya||(a.ya=new g.P(a.Pq,b,a)),a.ya.start());gL(a)};
dL=function(a){a.ya&&(a.ya.dispose(),a.ya=null);g.T(a.o,32)&&(uK(a,LE(ME(a.o,32),16)),a.O("endseeking",a))};
hL=function(a){return a.g.ka?uz(a.g.ka,a.getCurrentTime()):window.NaN};
maa=function(a){if(!a.l)return 0;if(g.UD(a.g))return 1;if(VD(a.g)){if(RK(a)||a.isPeggedToLive())return 1;var b=a.l,c=yE(b);b=(0<nE(c)&&b.getDuration()?c.end(c.length-1):0)-a.tb();a=iL(a)-a.tb();return Math.max(0,Math.min(1,b/a))}return BE(a.l)};
jL=function(a,b){var c={};if(void 0===b?0:b){a.C?g.Ka(c,uF(xF(a.C,"playback"))):a.g&&(c.cpn=a.g.clientPlaybackNonce);a.l&&(g.Ka(c,CE(a.l)),g.Ka(c,a.Em()));a.B&&g.Ka(c,hJ(a.B));if(a.H){var d=a.H,e=d.g;e={systemInfo:{flavor:e.flavor,keySystem:e.g},sessions:[]};d=g.q(d.l.values);for(var f=d.next();!f.done;f=d.next()){f=f.value;var k={requestedKeyIds:f.V,cryptoPeriodIndex:f.l};f.A&&(k.keyStatuses=f.g);e.sessions.push(k)}c.drm=e}c.state=a.o.l.toString(16);g.T(a.o,128)&&(c.debug_error=a.o.g);BK(a)&&(c.prerolls=
a.X.join(","));a.g.We&&(c.ismb=a.g.We);"UNKNOWN"!=a.g.latencyClass&&(c.latency_class=a.g.latencyClass);a.g.isLowLatencyLiveStream&&(c.lowlatency="1");a.g.oa&&(a.g.ka&&tz(a.g.ka)&&(c.segduration=tz(a.g.ka)),a.U&&(c.lat=bG(a.U.A)));c.relative_loudness=a.g.relativeLoudness.toFixed(3);if(e=FK(a))c.optimal_format=e.video.qualityLabel;c.user_qual=ev()}c.debug_videoId=a.g.videoId;return c};
tK=function(a,b){a.O("internalvideodatachange",void 0===b?"dataupdated":b,a,a.g)};
haa=function(a){(0,g.G)("loadstart loadeddata loadedmetadata play playing pause ended suspend progress seeking seeked timeupdate durationchange ratechange error waiting abort resize".split(" "),function(a){this.wa.M(this.l,a,this.BA,this)},a);
a.A.nf&&(a.wa.M(a.l,"webkitplaybacktargetavailabilitychanged",a.lE,a),a.wa.M(a.l,"webkitcurrentplaybacktargetiswirelesschanged",a.mE,a))};
kL=function(a){var b=a.getCurrentTime(),c=a.g;!aD("pbs","")&&zC.measure&&zC.getEntriesByName&&(zC.getEntriesByName("mark_nr")[0]?$C("mark_nr"):$C());c.videoId&&a.P.info("docid",c.videoId);c.eventId&&a.P.info("ei",c.eventId);c.clientPlaybackNonce&&a.P.info("cpn",c.clientPlaybackNonce);0<c.startSeconds&&a.P.info("start",c.startSeconds.toString());a.l&&a.l.g.paused&&a.P.info("paused",1);c.Ba?a.P.info("fmt",Ku(c.Ba)):a.P.info("fmt","-1");c.Yk&&a.P.info("yt_pre",a.pf?"2":"1");a.A.Ka&&a.P.info("yt_fs",
"1");a.P.info("cmt",b.toFixed(3));if(a.B){b=a.B;window&&window.performance&&window.performance.getEntriesByName&&(c=window.performance.getEntriesByName(b.sa),c.length&&(c=c[0],b.gc("vri",c.fetchStart),b.gc("vdns",c.domainLookupEnd),b.gc("vreq",c.requestStart),b.gc("fvb",c.responseStart),b.gc("vrc",c.responseEnd)),c=window.performance.getEntriesByName(b.fa),c.length&&(c=c[0],b.gc("ari",c.fetchStart),b.gc("adns",c.domainLookupEnd),b.gc("areq",c.requestStart),b.gc("avb",c.responseStart),b.gc("arc",c.responseEnd)));
b=b.bb;for(var d in b)a.P.g(d,b[d])}};
gL=function(a,b){b=void 0===b?!1:b;if(a.l&&a.g){var c=a.getCurrentTime();if(a.I&&RK(a)){var d=a.I,e=a.Wq();d.C++;3>d.C||(d.o.push(e),50<d.o.length&&d.o.shift())}if(a.A.experiments.g("html5_new_peg_to_live_v2"))a.I&&(d=a.o.gb(),e=a.I,nG(e,c,void 0===d?!0:d),oG(e,c),d&&(d=a.I,d=!lG(d,c)&&d.isPeggedToLive()?window.Infinity:c<d.A.tb()?d.A.tb():window.NaN,(0,window.isNaN)(d)||CK(a,d,!0)));else{if(QK(a)&&a.o.gb()){CK(a,a.tb(),!0);return}if(a.isPeggedToLive()){if(!RK(a,c,!0)){if(a.o.gb()&&(a.g.lh||g.UD(a.g))){CK(a,
window.Infinity,!0);return}a.g.oa&&DK(a,!1)}}else a.g.oa&&RK(a,c)&&DK(a,!0)}a.U&&RK(a)&&(d=a.U,!d.g||c>=d.o&&c<d.B||(e=d.g.Cf(c),-1!=e&&(d.o=d.g.nd(e),d.B=d.o+d.g.getDuration(e),e=(0,g.H)()/1E3-d.g.In(e),d.l&&(e-=d.l()),d.A.add(e))));if(a.B&&(d=a.B,d.o)){d.B!=c&&d.resume();if(d.K&&!Lx(d.o)){e=d.B<=c&&c<d.B+10;var f=0<=lE(d.o.l.buffered,d.B+RI);e&&f&&(d.K=!1)}d.K||(d.B=c);g.Up(d.ma)}5<c&&(a.g.startSeconds=c);(d=g.Tt())?g.Ut(a.Ua):g.qr(a.Ua);!g.QE(a.o)&&a.l.g.paused||g.T(a.o,128)||(e=(0,g.A)(a.nz,a),
a.Ua=0==(a.l.g.played||jE()).length?d?g.Rt(e,100):g.or(e,100):d?g.Rt(e,500):g.or(e,500));a.g.Pe=c;!b&&a.o.gb()&&a.C&&(c=a.C,c.o.update(),c.g.videoData.Wb()&&c.g.videoData.ke&&!c.P&&$E(c.o)>=c.g.videoData.ke&&(c.B&&c.g.videoData.ke&&(d=xF(c,"delayplay"),d.Ga=!0,d.send(),c.P=!0),CF(c)),a.A.experiments.g("html5_new_e2e_latency_tracking")&&RK(a)&&(!a.g.ka||!qz(a.g.ka))&&(0,g.H)()>a.qf+6283&&(c=a.C.l,e=c.g.B(),d=g.eF(c.g),lF(c,d,e),e=e.o,(0,window.isNaN)(e)||g.iF(c,d,"e2el",[e.toFixed(3)]),a.qf=(0,g.H)()));
a.O("progresssync",a,b)}};
uK=function(a,b){if(!g.OE(a.o,b)){var c=new g.UE(b,a.o);a.o=b;var d=!a.Ab.length;a.Ab.push(c);var e=a.l&&a.l.g.seeking;if(0<VE(c,1)&&!g.T(c.g,16)&&!e&&g.T(a.o,8)&&!g.T(a.o,64)&&a.B){a.B.aa=!0;a.g.If&&a.l&&a.tc("rbinfo","rs."+a.l.g.readyState+";lact."+g.$t());e=a.A.experiments.l("html5_nnr_downgrade_count");var f=5<=zE(a.l),k=a.A.experiments.g("html5_perf_cap_for_live")&&a.g.oa;e&&a.l&&(f||k)&&(a.xd++,f=a.g.Ba.video.g,k=360,a.A.experiments.g("html5_mobile_perf_cap_240")&&a.A.l&&(k=240),a.xd==e&&f>
k&&(e=a.sa,e.g.mf=new Vu(0,f-1,!1),e.g.experiments.g("html5_report_performance_cap")&&g.ru("yt-player-performance-cap",f-1,2592E3),YK(a,"b"),a.A.experiments.g("html5_report_performance_cap")&&a.tc("perfDowngrade",""+f)))}0>VE(c,8)&&(g.qr(a.ba),a.ba=window.NaN,DK(a,!1));0<VE(c,8)&&!a.g.Fd&&(0,window.isNaN)(a.ba)&&(a.ba=g.or((0,g.A)(a.uu,a),15E3));0<VE(c,32)&&DK(a,!1);g.T(c.state,2)&&VD(a.g)&&(e=a.getCurrentTime(),a.g.lengthSeconds!=e&&(a.g.lengthSeconds=e,tK(a)),gL(a,!0));0<VE(c,2)&&a.So();a.g.ka&&
a.g.oa&&(0>VE(c,8)?(e=a.g.ka,e.A&&e.A.stop()):0<VE(c,8)&&a.g.ka.resume());0<VE(c,1)&&(a.Yb=g.or((0,g.A)(a.pI,a),5E3));if(a.C&&(e=a.C,!e.ga())){g.T(c.state,2)?(e.C="paused",0<VE(c,2)&&e.B&&zF(e).send()):g.T(c.state,8)?(e.C="playing",e.B&&(0,window.isNaN)(e.F)&&wF(e,!1)):e.C="paused";f=e.l;k=c.state;var l=g.eF(f.g),m=qF(f,c.state);m!=f.o&&(l<f.A||("PL"==f.o?f.K+=l-f.A:"B"==f.o&&f.I&&(f.I=!1,f.P+=l-f.A,!f.U&&10<=f.P&&180>=f.K&&(f.g.H(),f.l.qoealert=["1"],f.U=!0)),"B"!=m||"PL"!=f.o&&"PB"!=f.o||(f.I=!0),
f.A=l),"B"==m&&"PL"==f.o||f.g.videoData.If?mF(f,l):g.iF(f,l,"cmt",[f.g.l().toFixed(3)]),g.iF(f,l,"vps",[m]),f.o=m,f.A=l);g.T(k,128)&&oF(f,l,k.g.errorCode,k.g.errorDetail);(g.T(k,2)||g.T(k,128))&&f.B(l);g.T(k,8)&&f.g.videoData.Yk&&!f.H&&(f.l.user_intent=[g.eF(f.g).toString()],f.H=!0);nF(f);e.A&&g.T(c.state,128)&&(e.pl("error-100"),g.qr(e.A))}if(d)try{for(var n=g.q(a.Ab),p=n.next();!p.done;p=n.next()){var u=p.value,v=a.K;c=u;if(v.B&&!v.I&&(v.o(),g.T(c.g,16))){c=v;var C=xI(c.g,Math.max(c.A-2E3,0));!(0,window.isNaN)(C)&&
0x7ffffffffffff>C&&c.F.start()}a.O("statechange",u)}}finally{a.Ab.length=0}}};
lL=function(a){g.T(a.o,2)||g.T(a.o,32)||(a.V=window.NaN)};
DK=function(a,b){a.g.oa&&a.isPeggedToLive()!=b&&a.I&&!a.A.experiments.g("html5_new_peg_to_live_v2")&&(a.I.B=b)};
mL=function(a,b){uK(a,NE(a.o,1028,9));a.tc("dompaused",b)};
SK=function(a){if(!a.l||!a.g.Ia)return!1;if(a.g.Ia.g){var b=UK(a);a.B.resume()}else oK(a),b=a.g.Tf.g();var c=a.l.l;if(!c||null==b||b.Of!=c.Of){a.P.g("vta");g.KC("vta",void 0,"video_to_ad");uE(a.l,b);a:if(g.KD(a.g)&&a.l)if(b=a.g.xe){if(a.H)if("fairplay"==b.flavor)mK(a);else break a;c=a.l.ha();a.H=new MJ(c,b,a.A.experiments,"widevine"==b.flavor&&!a.g.oa&&!a.g.jn,a.g.drmSessionId);a.H.subscribe("newsession",a.iG,a);a.H.subscribe("licenseerror",a.zF,a);a.H.subscribe("qualitychange",a.BF,a);a.H.subscribe("heartbeatparams",
a.zA,a);a.H.subscribe("keystatuseschange",a.AA,a);a.H.subscribe("hdproberequired",a.AF,a);b=a.H;c=a.g.oauthToken;b.P=c;b.O("oauthtoken",c)}else g.wK(a,"fmt.unplayable","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","drm.1");a.L&&Vt(4);g.qr(a.ba);!a.g.Fd&&IE(a.o)&&(a.ba=g.or((0,g.A)(a.uu,a),15E3));return!0}return!1};
mK=function(a){a.H&&(a.H.dispose(),a.H=null)};
iL=function(a){return a.g.oa&&(RK(a)||a.isPeggedToLive()||g.UD(a.g))?a.getCurrentTime():ZK(a)};
ZK=function(a,b){b=void 0===b?!1:b;return a.A.experiments.g("html5_new_seeking")?a.F?a.F.kd(b):0:a.l?a.g.oa?a.g.Ia&&a.g.Ia.g&&a.I?b?a.g.kd():kG(a.I):rE(a.l)||0:a.g.kd():0};
nL=function(a,b){a.Ha=b;a.l&&a.l.Ce(b)};
RK=function(a,b,c){if(!a.g.oa||!a.I||!(a.Gc||void 0!==c&&c))return!1;void 0==b&&(b=a.getCurrentTime());return lG(a.I,b)};
g.oL=function(a,b){a.Gc=b;if(a.g.ka)if(b)a.g.ka.resume();else{var c=a.g.ka;c.A&&c.A.stop()}a.A.experiments.g("html5_suspend_loader")&&a.B&&(b?a.B.resume():HI(a.B,!0));a.A.experiments.g("html5_fludd_suspend")&&(g.T(a.o,2)||b?g.T(a.o,512)&&b&&uK(a,ME(a.o,512)):uK(a,LE(a.o,512)));a.C&&(c=a.C.l,g.iF(c,g.eF(c.g),"stream",[b?"A":"I"]))};
pL=function(a){a.l&&(a.L?VK(a):(a.g.Tf&&a.g.Tf.o(),a.l.cf()),TK(a))};
QK=function(a){return a.getCurrentTime()<a.tb()-15};
qL=function(a,b){a.A.experiments.g("html5_log_rebuffer_reason")&&a.tc("bufreason","r."+b+";lact."+g.$t())};
rL=function(a,b){FF.call(this,a,b);this.C=null};
g.sL=function(a){return a.app.A};
g.tL=function(a){a=g.sL(a).K;return!!a&&a.zs()};
uL=function(a){a=g.sL(a);var b=a.K;return b&&b.As()?!0:g.TD(a.g.Y(),"ypc_module")};
g.vL=function(a,b){3==a.Ca()?a.O("mdxautoplaycancel"):a.O("autonavcancel",b)};
g.U=function(a){return a.app.g};
g.yL=function(a){var b=a.app;a=a.playerType;return 3==wL(b)?g.xL(b.A).F:g.V(b,a).o};
g.zL=function(a){return a.app.H};
AL=function(a){var b=g.xL(g.sL(a));return a.app.aa&&!a.isFullscreen()||3==a.Ca()&&b.hasNext()&&b.te()||!!a.De()};
g.BL=function(a,b){var c=a.playerType;(c=g.V(a.app,void 0===c?1:c))&&jK(c,b)};
g.CL=function(a){if(Hs())if(a.isFullscreen())Js(a.getRootNode());else{a=a.getRootNode();var b=Gs(["requestFullscreen","webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen"],a);b&&b.call(a)}else a.la("onFullscreenToggled",a.isFullscreen())};
g.DL=function(a){var b={};a=WK(g.V(a.app));a=g.q(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b[c.quality]=c;return b};
g.EL=function(a){return(a=g.V(a.app))?g.av(WJ(a.sa,a.g)):"unknown"};
g.FL=function(a){return(a=g.sL(a).o)?a.eB():{}};
g.GL=function(a,b,c,d){var e=g.V(a.app);c.event=b;a.isFullscreen()&&(c.fs=1);c.ux=1;e.logEvent(c,d)};
g.HL=function(a){a=g.sL(a).A;return!!a&&a.xi()};
g.IL=function(a){a=g.sL(a).A;return!!a&&a.ys()};
g.JL=function(a){var b=a.app.A.I;if(b){a=g.zL(b.g).Da();a=new g.Xg(0,0,a.width,a.height);if(b.A.g&&!b.Bh()){if(g.U(b.g).Tc){var c=b.cd()?b.wa:b.Ga;a.top+=c;a.height-=c}b.o&&(a.height-=b.o.o.cd()?72:50)}return a}b=a.app.H.Da();return new g.Xg(0,0,b.width,b.height)};
KL=function(a){a=g.sL(a).P;return!!a&&a.RA()};
g.ML=function(a,b,c){LL(a.app,b,c||a.playerType)};
g.OL=function(a,b,c){var d=a.app;a=c||a.playerType;if(c=g.V(d,a))c.K.C.apply(c.K,b),a&&wL(d)!=a||NL(d,"cuerangesremoved",b)};
g.PL=function(a,b){var c=a.app,d=a.playerType,e=g.V(c,d);e&&(e=BI(e.K,b),d&&wL(c)!=d||NL(c,"cuerangesremoved",e))};
g.QL=function(a,b){var c=g.V(a.app,a.playerType);c&&gaa(c,b)};
g.RL=function(a){a=a.Y().Ba;return!!a&&!(!a.audio||!a.video)&&"application/x-mpegURL"!=a.mimeType};
g.SL=function(a){a=a.Y();return!!(a.adaptiveFormats||a.hlsFormats||a.hd)};
g.TL=function(a,b,c){a=g.zL(a).element;var d=jb(a.children,function(a){a=(0,window.parseInt)(a.getAttribute("data-layer"),10);return c-a||1});
0>d&&(d=-(d+1));Dd(a,b,d);b.setAttribute("data-layer",c)};
g.UL=function(a){var b=g.U(a);if(!b.xd)return!1;var c=a.Y();if(!c||3==a.Ca())return!1;b=c.oa&&(!b.experiments.g("allow_live_autoplay")||c.isLiveDefaultBroadcast);return!c.ypcPreview&&!b&&!g.Ta(c.rd,"ypc")&&!a.De()};
WL=function(a,b,c,d){if(g.U(a).F){a=a.app.L;g.Ta(a.g,b);g.Wa(a.g,b);var e=String(a.H++);b.setAttribute("data-visual-id",e);VL(a,"onLogClientVeCreated",{id:e,ve_type:d});g.De(c,(0,g.A)(a.F,a,b))}};
XL=function(a,b){return g.U(a).F?g.Ta(a.app.L.g,b):!1};
paa=function(){var a={};a.dt=naa;a.flash=oaa||"0";a:{try{var b=window.top.location.href}catch(e){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}a=(a.frm=b,a);a.u_tz=-(new Date).getTimezoneOffset();var c=void 0===c?L:c;try{var d=c.history.length}catch(e){d=0}a.u_his=d;if(d=!!L.navigator)d="unknown"!==typeof L.navigator.javaEnabled;a.u_java=d&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(a.u_h=L.screen.height,a.u_w=L.screen.width,a.u_ah=L.screen.availHeight,a.u_aw=L.screen.availWidth,
a.u_cd=L.screen.colorDepth);L.navigator&&L.navigator.plugins&&(a.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(a.u_nmime=L.navigator.mimeTypes.length);return a};
YL=function(a){return a.isTimeout?"NO_BID":"ERR_BID"};
qaa=function(){var a=null;ws().then(function(b){return a=b},function(b){return a=YL(b)});
return a};
raa=function(){var a=hg(1E3,"NO_BID");return Uf(g.Wf(Rf([ws(),a]),YL),function(){return a.cancel()})};
saa=function(){var a=null;zs().then(function(b){return a=b},function(){return a="NO_ADS_ID"});
return a};
taa=function(){var a=hg(1E3,"NO_ADS_ID");return Uf(g.Wf(Rf([zs(),a]),function(){return"NO_ADS_ID"}),function(){return a.cancel()})};
ZL=function(a){this.g=a;this.l=1};
$L=function(a,b){a.g.app.I.g(b)};
aM=function(a,b,c,d){c=void 0===c?"":c;d=void 0===d?"":d;var e=a.g.Y(1),f={AD_BLOCK:a.l++,CA_TYPE:uaa?"flash":"image",CPN:e.clientPlaybackNonce,LACT:g.$t(),VIS:a.g.df(),P_H:g.zL(a.g).Da().height,P_W:g.zL(a.g).Da().width},k=paa();Object.keys(k).forEach(function(a){f[a.toUpperCase()]=k[a].toString()});
""!==c&&(f.BISCOTTI_ID=c);""!==d&&(f.MUTSU_ID=d);a=g.Eo(b,f).split("?");if(2!=a.length)return Of(Error("Invalid AdBreakInfo URL"));b=g.q(a);a=b.next().value;c=b.next().value;b={};e.oauthToken&&zr()&&(b.Authorization="Bearer "+e.oauthToken);(e=g.sr(c))&&e.post_data&&(c=g.sr(e.post_data),Object.assign(e,c),delete e.post_data);return gs(a,{format:"RAW",headers:b,method:"POST",jb:e,timeout:2E3,withCredentials:!0})};
g.bM=function(a){g.R.call(this);this.g=a;this.loaded=!1};
cM=function(a,b,c){this.o=a;this.l=null;this.A=b;this.g=0;this.livestream=void 0===c?!1:c};
dM=function(a,b,c,d){g.JF.call(this,b.start,b.end,{id:d,namespace:"ad",priority:2,visible:c});this.o=a.kind||"AD_PLACEMENT_KIND_UNKNOWN";this.g=!1;this.A=null};
eM=function(a){return"AD_PLACEMENT_KIND_START"==a.o};
fM=function(a,b,c){c=void 0===c?!1:c;switch(a.kind){case "AD_PLACEMENT_KIND_START":return new g.ej(-0x8000000000000,-0x8000000000000);case "AD_PLACEMENT_KIND_END":return c?new g.ej(Math.max(0,b.o-b.g),0x7ffffffffffff):new g.ej(0x7ffffffffffff,0x8000000000000);case "AD_PLACEMENT_KIND_MILLISECONDS":var d=a.adTimeOffset;a=(0,window.parseInt)(d.offsetStartMilliseconds,10);d=(0,window.parseInt)(d.offsetEndMilliseconds,10);-1===d&&(d=b.o);c&&(d=a,a=Math.max(0,a-b.g));return new g.ej(a,d);case "AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED":return a=
b.l,d=1E3*a.Pd,c?new g.ej(Math.floor(b.A+Math.random()*Math.max(0,d-b.A-1E4)),d):new g.ej(d,d+(0<a.durationSecs?1E3*a.durationSecs:5E3))}return new g.ej(0,0)};
hM=function(a,b,c){b=void 0===b?null:b;c=void 0===c?{}:c;this.id=gM(a);this.componentType=a;this.macros=c;this.renderer=b};
gM=function(a){return a+g.Yp(g.Xp.getInstance())};
iM=function(a,b,c){this.id=c;this.content=a;this.actionType=b};
jM=function(){this.g=null};
vaa=function(a){return kM(a).then(function(){return new g.Jf(function(a,c){var b=lM();(b=b?mM(b):null)&&"adSizes"in b[0]?a((0,g.I)(b[0].adSizes,function(a){return new g.bd(a.adWidth,a.adHeight)})):c(Error("No slots registered with GPT services"))})})};
waa=function(a){!nM()&&a.g?a.g.cancel():kM(a).then(function(){return oM(null,300,60)})};
oM=function(a,b,c){var d=hg(5E3).then(function(){throw Error("Timed out while waiting for GPT set companion");}),e=new g.Jf(function(d,e){var f=lM();
if(f){var k=mM(f);if(k&&0!=k.length){var n={};n.slotId=k[0].slotId;n.adContent="<div></div>";n.adWidth=b;n.adHeight=c;n.friendlyIframeRendering=!1;n.onAdContentSet=function(b){var c=g.Id(b);c||(c=g.zd("div"),b.appendChild(c));a&&c.appendChild(a);d()};
(f=f.googleSetCompanionAdContents)?f([n]):e(Error("Missing googleSetCompanionAdContents API"))}else e(Error("No slots registered with GPT services"))}else e(Error("Failed to find GPT services"))});
return Rf([e,d])};
kM=function(a){null==a.g&&(a.g=new g.Jf(function(a,c){function b(d){nM()?a():0>=d?c(Error("Timed out while waiting for GPT services")):g.Wf(hg(200).then(function(){b(d-1)}),c)}
b(150)}));
return a.g};
nM=function(){var a=lM();if(!a)return!1;a=mM(a);return g.za(a)&&0!=a.length?null!=g.hd("google_companion_ad_div"):!1};
lM=function(){var a=td();return g.z("googletag.cmd",a)?a:null};
mM=function(a){a=g.t(a.googleGetCompanionAdSlots)?jr(a.googleGetCompanionAdSlots)():void 0;return g.t(a)&&0<a.length?a:null};
xaa=function(){this.url=null;this.height=this.width=0;this.clickTrackingUrls=null};
pM=function(){this.contentVideoId=null;this.macros={};this.imageCompanionAdRenderer=this.iframeCompanionRenderer=null};
qM=function(a,b){this.l=a;this.g=b};
yaa=function(a){return a.g?vaa(a.g):Of("GPT is not enalbed")};
zaa=function(a){this.o=a;this.g={};this.l=ik()?500:2500};
Aaa=function(a,b){return b.reduce(function(b,d){if(!(d&&d.mimeType&&d.maxBitrate&&d.uri))return b;d.mimeType in a.g||(a.g[d.mimeType]=a.o.Qn(d.mimeType));if(!a.g[d.mimeType])return b;if(!b)return d;if(d.delivery!=b.delivery)return"STREAMING"==d.delivery?d:b;var c=b.maxBitrate-a.l,f=d.maxBitrate-a.l;return 0>=c&&0>=f?f>c?d:b:0<c&&0<f?f<c?d:b:0>=f?d:b},null)};
rM=function(a){this.aa=a||{};this.L=String(Math.floor(1E9*Math.random()))};
sM=function(a,b){return a.aa[b]?a.aa[b]:[]};
tM=function(a,b){this.g=a;this.l=b.length;this.adBreakLengthSeconds=b.reduce(function(a,b){return a+b},0);
for(var c=0,d=a+1;d<b.length;d++)c+=b[d];this.adBreakRemainingLengthSeconds=c};
uM=function(a,b){var c;if(c=a.pings){var d={};d.impression=c.impressionPings||[];d.error=c.errorPings||[];d.mute=c.mutePings||[];d.unmute=c.unmutePings||[];d.pause=c.pausePings||[];d.rewind=c.rewindPings||[];d.resume=c.resumePings||[];d.skip=c.skipPings||[];d.close=c.closePings||[];d.progress=c.progressPings||[];d.clickthrough=c.clickthroughPings||[];d.fullscreen=c.fullscreenPings||[];d.active_view_viewable=c.activeViewViewablePings||[];d.active_view_measurable=c.activeViewMeasurablePings||[];d.active_view_fully_viewable_audible_half_duration=
c.activeViewFullyViewableAudibleHalfDurationPings||[];d.end_fullscreen=c.endFullscreenPings||[];d.channel_clickthrough=c.channelClickthroughPings||[];d.abandon=c.abandonPings||[];d.start=c.startPings||[];d.first_quartile=c.firstQuartilePings||[];d.midpoint=c.secondQuartilePings||[];d.third_quartile=c.thirdQuartilePings||[];d.complete=c.completePings||[];c=d}else c={};rM.call(this,c);this.I=new tM(0,[]);this.C=this.B=null;this.F=!1;this.X=b;this.H=[];this.l={};this.A=a;this.V=this.R=null;this.o=0;
this.U=this.K=null;c=this.A.skipOffsetMilliseconds;0<c&&(this.R=c);this.l=g.sr(this.A.playerVars||"");(c=this.A.external)?(this.H=c.mediaFiles||[],c=c.durationMilliseconds,g.va(c)&&(this.o=c/1E3,this.l.length_seconds=this.o.toString()),(c=Aaa(this.X,this.H))?(d=c.mimeType,this.l.url_encoded_third_party_media="url="+(0,window.encodeURIComponent)(c.uri)+"&type="+(0,window.encodeURIComponent)(d)):this.U=Error("Nonplayable third party ad media file.")):(this.K=this.l.video_id,this.B=this.l.ucid||null,
this.F=TA(this.F,this.l.is_listed),this.V=this.l.title||null,this.o=VA(this.o,this.l.length_seconds));this.C=this.A.clickthroughEndpoint||null};
vM=function(a){rM.call(this);this.l=a};
wM=function(a){rM.call(this);this.l=a};
xM=function(a){rM.call(this);this.l=a};
yM=function(){this.g=[];this.l=null;this.o=0};
zM=function(a){a=a.impressionUrls;var b={};a&&(b.impression=a);rM.call(this,b)};
AM=function(){return"ytp-id-"+Baa++};
g.CM=function(a){g.J.call(this);this.Z={};this.Ha={};this.element=BM(this,a)};
BM=function(a,b,c){c=c||"svg"==b.D;if(c){var d=window.document.createElementNS("http://www.w3.org/2000/svg",b.D);g.GB&&(b.N||(b.N={}),b.N.focusable="false")}else d=g.zd(b.D);var e=b.J;if(e){if(e=DM(a,d,"class",e))EM(a,d,"class",e),a.Z[e]=d}else if(e=b.W){for(var f=0;f<e.length;f++)a.Z[e[f]]=d;EM(a,d,"class",e.join(" "))}if(e=b.G)for(var k=f=0;k<e.length;k++){var l=e[k];if(l)if(g.w(l))l=DM(a,d,"child",l),null!=l&&d.appendChild(g.Ad(l));else if(l.element)d.appendChild(l.element);else{var m=l;l=BM(a,
m,c);d.appendChild(l);m.Fa&&(m=AM(),l.id=m,l=window.document.createElementNS("http://www.w3.org/2000/svg","use"),l.setAttribute("class","ytp-svg-shadow"),l.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+m),Dd(d,l,f++))}}if(b=b.N){c=d;for(var n in b)e=b[n],null!=e&&EM(a,c,n,g.w(e)?DM(a,c,n,e):e)}return d};
g.FM=function(a){g.Ed(a.element)};
DM=function(a,b,c,d){return"{{"==d.substr(0,2)?(a.Ha[d]=[b,c],null):d};
EM=function(a,b,c,d){if("child"==c){g.Cd(b);if(!g.za(d)||g.Ca(d)&&g.w(d.D))d=[d];c=[];for(var e=0;e<d.length;e++){var f=d[e];if(null!=f){var k=f.nodeType;if(1==k||3==k)c.push(f);else if(g.Ca(f)&&g.w(f.D))c.push(BM(a,f));else if(f.element)c.push(f.element);else if(g.w(f)&&-1!=f.indexOf("\n"))for(f=f.split("\n"),k=0;k<f.length;k++)0<k&&c.push(g.zd("BR")),c.push(g.Ad(f[k]));else c.push(g.Ad(f))}}for(a=0;a<c.length;a++)b.appendChild(c[a])}else"style"==c?b.style.cssText=d?d:"":null===d?b.removeAttribute(c):
b.setAttribute(c,d.toString())};
GM=function(){rM.call(this)};
g.HM=function(a,b){a&&(a.style.display=b)};
IM=function(a){if(window.document.createRange){var b=window.document.createRange();b.selectNodeContents(a);window.getSelection().removeAllRanges();window.getSelection().addRange(b)}};
g.W=function(a){g.CM.call(this,a);this.aa=!0;this.U=[]};
g.JM=function(a,b){b?a.show():a.hide()};
LM=function(a,b){var c=g.hr("VALID_SESSION_TEMPDATA_DOMAINS",[]),d=g.Ag(window.location.href);d&&c.push(d);d=g.Ag(a);if(g.Ta(c,d)||!d&&g.rb(a,"/"))if(g.es("autoescape_tempdata_url")&&(c=window.document.createElement("a"),g.Sc(c,a),a=c.href),a&&(c=g.yg(a),c=g.wg(null,null,null,null,c[5],c[6],c[7]),d=c.indexOf("#"),c=0>d?c:c.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.vu();if(e){var e=(0,window.parseInt)(e,10);(0,window.isFinite)(e)&&0<e&&(c="ST-"+g.Mb(c).toString(36),d=b?g.Ig(b):"",g.xu(c,d,e||5),
KM(b))}else e="ST-"+g.Mb(c).toString(36),c=b?g.Ig(b):"",g.xu(e,c,5),KM(b)}};
KM=function(a){if(a){a=a.itct||a.ved;var b=g.z("yt.logging.screen.storeParentElement");a&&b&&b(new g.ku(a))}};
g.MM=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=g.Kg(a,b)+c;a=a instanceof Ic?a:Nc(a);d.href=g.Jc(a)};
g.NM=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.hr("EVENT_ID");d&&(b.ei||(b.ei=d));b&&LM(a,b);if(c)return!1;(window.ytspf||{}).enabled?window.spf.navigate(a):g.MM(a);return!0};
g.OM=function(a,b,c){c&&LM(a,c);window.open(a,b||g.Mb(a).toString(36))};
PM=function(a){this.g=a};
Caa=function(a,b){switch(b.action){case "START_LINEAR_AD":g.Df(function(){var b=a.g;b.l&&QM(b.l.g)&&b.l.xt()});
break;case "END_LINEAR_AD":g.Df(function(){var b=a.g;b.l&&QM(b.l.g)&&(b=b.l,QM(b.g)&&b.xf())})}};
SM=function(a,b){(0,g.G)(a,function(a){return RM(a,b)})};
RM=function(a,b){a.loggingUrls&&(0,g.G)(a.loggingUrls,function(a){if(a.baseUrl){a=g.Eo(a.baseUrl,b);if("https:"==window.location.protocol){var c=g.yg(a);a="https"==c[1]?a:g.wg("https",c[2],c[3],c[4],c[5],c[6],c[7])}g.as(a,void 0,dp.yk(a))}});
a.urlEndpoint&&a.urlEndpoint.url&&g.OM(a.urlEndpoint.url)};
TM=function(a,b){g.W.call(this,a);this.o=b;this.g=Daa(this)};
Daa=function(a){var b=a.o;if(b){a=function(a){return{toString:function(){return a()}}};
var c={};c.AD_MT=a(function(){return Math.round(Math.max(0,1E3*b.getCurrentTime(2))).toString()});
c.MT=a(function(){return Math.round(Math.max(0,1E3*b.getCurrentTime(1))).toString()});
c.P_H=a(function(){return b.Gg().height.toString()});
c.PV_H=c.P_H;c.P_W=a(function(){return b.Gg().width.toString()});
c.PV_W=c.P_W;c.CONN="0";c.WT=a(function(){return(0,g.H)().toString()});
c.LACT=a(function(){return g.$t().toString()});
c.VIS=a(function(){return b.df().toString()});
c.VOL=a(function(){return b.getVolume().toString()});
return c}return{}};
UM=function(a,b,c){c=Eaa(b,c);var d={D:"div"};c&&(d={D:"div",J:"image-companion",G:[{D:"img",N:{src:c.url,border:"0",style:"cursor:pointer;"}}]});TM.call(this,d,a);this.l=b;if(a=this.Z["image-companion"])void 0!==c.width&&void 0!==c.height&&g.Fh(a,c.width,c.height),this.ea("click",this.A,this),this.Jc(b.impressionCommands)};
Eaa=function(a,b){if(!a.image||!a.image.thumbnail)return null;var c=a.image.thumbnail;return null==c.thumbnails?null:g.Pa(c.thumbnails||[],function(a){return a.width==b.width&&a.height==b.height})};
VM=function(a){rM.call(this);this.l=a;this.C=(0,g.I)((a.image&&a.image.thumbnail?a.image.thumbnail.thumbnails:null)||[],function(a){return new g.bd(a.width,a.height)})};
WM=function(a){rM.call(this);this.l=a};
XM=function(a){g.Xb(a).filter(g.Ca).forEach(XM);Object.freeze(a)};
YM=function(a){rM.call(this);this.l=g.ic(a);XM(this.l)};
ZM=function(a){if(!a)return[];var b=[];a=g.q(a);for(var c=a.next();!c.done;c=a.next())if(c=c.value,c.loggingUrls){c=g.q(c.loggingUrls);for(var d=c.next();!d.done;d=c.next())b.push({baseUrl:d.value.baseUrl})}return b};
Faa=function(a){var b={};b.impression=ZM(a.impressionCommands)||[];b.complete=ZM(a.completionCommands)||[];return b};
$M=function(a){rM.call(this,Faa(a));this.l=a};
aN=function(a){if(!a)return[];var b=[];a.forEach(function(a){a.command.loggingUrls.forEach(function(c){b.push({baseUrl:c.baseUrl,offsetMilliseconds:a.adVideoOffset.milliseconds})})});
return b};
bN=function(a){return a&&a.adVideoOffset&&a.adVideoOffset.percent||0};
cN=function(a){return"AD_VIDEO_PROGRESS_KIND_PERCENT"==a.adVideoOffset.kind};
Gaa=function(a){a=a.playbackCommands;if(!a)return{};var b={};b.impression=ZM(a.impressionCommands)||[];b.error=ZM(a.errorCommands)||[];b.mute=ZM(a.muteCommands)||[];b.unmute=ZM(a.unmuteCommands)||[];b.pause=ZM(a.pauseCommands)||[];b.rewind=ZM(a.rewindCommands)||[];b.resume=ZM(a.resumeCommands)||[];b.skip=ZM(a.skipCommands)||[];b.close=ZM(a.closeCommands)||[];b.clickthrough=ZM(a.clickthroughCommands)||[];b.fullscreen=ZM(a.fullscreenCommands)||[];b.active_view_viewable=ZM(a.activeViewViewableCommands)||
[];b.active_view_measurable=ZM(a.activeViewMeasurableCommands)||[];b.active_view_fully_viewable_audible_half_duration=ZM(a.activeViewFullyViewableAudibleHalfDurationCommands)||[];b.end_fullscreen=ZM(a.endFullscreenCommands)||[];b.channel_clickthrough=ZM(a.channelClickthroughCommands)||[];b.abandon=ZM(a.abandonCommands)||[];b.progress=aN(a.progressCommands.filter(function(a){return"AD_VIDEO_PROGRESS_KIND_MILLISECONDS"==a.adVideoOffset.kind}));
b.start=aN(a.progressCommands.filter(function(a){return cN(a)&&1E-6>=Math.abs(bN(a)-0)}));
b.first_quartile=aN(a.progressCommands.filter(function(a){return cN(a)&&1E-6>=Math.abs(bN(a)-.25)}));
b.midpoint=aN(a.progressCommands.filter(function(a){return cN(a)&&1E-6>=Math.abs(bN(a)-.5)}));
b.third_quartile=aN(a.progressCommands.filter(function(a){return cN(a)&&1E-6>=Math.abs(bN(a)-.75)}));
b.complete=aN(a.progressCommands.filter(function(a){return cN(a)&&1E-6>=Math.abs(bN(a)-1)}));
return b};
dN=function(a,b){b=void 0===b?!0:b;rM.call(this,Gaa(a));this.A=a;this.o=b;this.l=a.questions?a.questions.reduce(function(a,b){var c=b.instreamSurveyAdSingleSelectQuestionRenderer||b.instreamSurveyAdMultiSelectQuestionRenderer;return c?a+c.surveyAdQuestionCommon.durationMilliseconds/1E3:a},0):0};
eN=function(a){rM.call(this);this.l=a};
fN=function(a){rM.call(this);this.l=a};
hN=function(a,b){yM.call(this);var c=gN(this,a.adVideoStart);c&&this.g.push(c);(c=Haa(this,a.linearAd,b))&&this.g.push(c);(c=gN(this,a.adVideoEnd))&&this.g.push(c);a.persistingOverlay&&a.persistingOverlay.persistingAdOverlayRenderer&&(this.l=new xM(a.persistingOverlay.persistingAdOverlayRenderer))};
Haa=function(a,b,c){if(b){if(b.instreamVideoAdRenderer)return new uM(b.instreamVideoAdRenderer,c);if(b.instreamSurveyAdRenderer)return a=!a.g.some(function(a){return a instanceof eN}),new dN(b.instreamSurveyAdRenderer,a)}return null};
gN=function(a,b){return null==b?null:b.adActionInterstitialRenderer?new $M(b.adActionInterstitialRenderer):b.adTextInterstitialRenderer?new fN(b.adTextInterstitialRenderer):b.surveyTextInterstitialRenderer?(a.o=1,new eN(b.surveyTextInterstitialRenderer)):null};
iN=function(a){rM.call(this);this.l=a};
jN=function(a,b){TM.call(this,{D:"iframe",J:"videowall-companion",N:{marginwidth:"0",marginheight:"0",hspace:"0",vspace:"0",frameborder:"0",scrolling:"no",src:b.iframeUrl}},a);var c=this;this.element.width=g.t(b.iframeWidth)?b.iframeWidth:300;this.element.height=g.t(b.iframeHeight)?b.iframeHeight:250;this.l=b;var d=this.Z["videowall-companion"];d&&d.addEventListener("load",function(){c.Jc(b.impressionCommands);try{var a=d.contentDocument||d.contentWindow.document;var f=a&&a.body}catch(k){g.Q(k),f=
null}f&&g.Ue(f,"click",c.A.bind(c))})};
kN=function(a){rM.call(this);this.l=a};
lN=function(a){return a.length?(0,g.I)(a[0].loggingUrls||[],function(a){return a.baseUrl}):[]};
Iaa=function(a,b){var c=a.instreamVideoAdRenderer,d=a.clientForecastingAdRenderer,e=a.invideoOverlayAdRenderer,f=a.videowallIframeCompanionAdRenderer,k=a.imageCompanionAdRenderer,l=a.instreamSurveyAdRenderer,m=a.plaShelfRenderer,n=a.sandwichedLinearAdRenderer,p=a.shoppingCompanionCarouselRenderer,u=a.backfillMpuCompanionAdRenderer,v=a.actionCompanionAdRenderer;return null!=c&&c.playerVars?new uM(c,b):null!=d?new zM(d):null!=e?new WM(e):null!=f?new kN(f):null!=k?new VM(k):null!=l?new dN(l):null!=n?
new hN(n,b):null!=m?new YM(m):null!=p?new iN(p):null!=u?new wM(u):null!=v?new vM(v):null};
mN=function(a,b,c,d){this.id=b;this.g=[];this.B=[];this.K=[];this.o=[];this.l=[];this.P=[];this.H=[];this.A=[];this.I=[];this.F=[];this.C=[];this.aa=c;this.R=a.placementStartPings||[];this.U=a.placementEndPings||[];b=a.config&&a.config.adPlacementConfig;if(!b)throw Error("Malformed AdPlacementRenderer: missing AdPlacementConfig");c=a.renderer&&a.renderer.adBreakServiceRenderer&&a.renderer.adBreakServiceRenderer||{};this.L=c.getAdBreakUrl||"";d.g=(0,window.parseInt)(c.prefetchMilliseconds,10)||0;c=
g.Yp(g.Xp.getInstance());var e=fM(b,d);e=new dM(b,e,!(d.livestream||d.l),"adcuerange:"+c);var f=null;if(d.l||0<d.g)d=fM(b,d,!0),f=new dM(b,d,!1,"prefetch:"+c),e.A=f,f.A=e;d=[f,e];this.X=d[0];this.V=d[1];Jaa(this,a)};
nN=function(a,b,c,d){var e=null;try{e=new mN(a,b,c,d)}catch(f){g.Q(f)}return e};
oN=function(a){return"AD_PLACEMENT_KIND_MILLISECONDS"==a.Kc().o||"AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED"==a.Kc().o};
QM=function(a){return 0<a.g.length||0<a.B.length||0<a.A.length};
Jaa=function(a,b){var c=0,d;(c=b.renderer)&&c.multipleInstreamVideoAdRenderer&&c.multipleInstreamVideoAdRenderer.renderers?d=c.multipleInstreamVideoAdRenderer.renderers:d=c?[c]:[];c=d.length;a.g=[];a.B=[];a.K=[];a.o=[];a.l=[];a.H=[];a.A=[];a.I=[];a.F=[];a.C=[];for(var e=0;e<c;e++){var f=Iaa(d[e],a.aa);null!=f&&(f instanceof zM?a.K.push(f):f instanceof uM?f.U?a.P.push(f):a.g.push(f):f instanceof WM?a.o.push(f):f instanceof GM?a.l.push(f):f instanceof YM?a.H.push(f):f instanceof iN?a.I.push(f):f instanceof
dN?a.B.push(f):f instanceof hN?a.A.push(f):f instanceof wM?a.F.push(f):f instanceof vM&&a.C.push(f))}0<a.o.length&&QM(a)&&(g.Q(Error("Linear and overlay ads found in ad break")),a.o=[]);var k=(0,g.I)(a.g,function(a){return a.o});
(0,g.G)(a.g,function(a,b){var c=new tM(b,k);a.I=c})};
qN=function(a){var b={};Kaa(a,b);Laa(b);b.LACT=pN(function(){return g.$t().toString()});
b.VIS=pN(function(){return a.df().toString()});
b.SDKV="h.3.0";b.VOL=pN(function(){return a.getVolume().toString()});
b.VED="";return b};
rN=function(a){var b=Object.assign({},{});b.MIDROLL_POS=oN(a)?pN(pf(Math.round(a.Kc().start/1E3).toString())):pN(pf("0"));return b};
sN=function(a,b){var c={};return c.YT_ERROR_CODE=a.toString(),c.ERRORCODE="400",c.ERROR_MSG=b,c};
pN=function(a){return{toString:function(){return a()}}};
tN=function(a){for(var b={},c=g.q(Maa),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];e&&(b[d]=e.toString())}return b};
uN=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];c={};Object.assign.apply(Object,[].concat([c],g.qa(b)));return c};
Kaa=function(a,b){b.CPN=pN(function(){var b;(b=a.Y(1))?b=b.clientPlaybackNonce:(g.Q(Error("Video data is null."),"WARNING"),b=null);return b});
b.AD_MT=pN(function(){return vN(a,2)});
b.MT=pN(function(){return vN(a,1)});
b.P_H=pN(function(){return g.zL(a).Da().height.toString()});
b.P_W=pN(function(){return g.zL(a).Da().width.toString()});
b.PV_H=pN(function(){return g.wN(g.zL(a)).height.toString()});
b.PV_W=pN(function(){return g.wN(g.zL(a)).width.toString()})};
vN=function(a,b){var c=1E3*a.getCurrentTime(b);return Math.round(Math.max(0,c)).toString()};
Laa=function(a){a.CONN=pN(pf("0"));a.WT=pN(function(){return Date.now().toString()})};
xN=function(){g.R.call(this);this.g=new window.Map};
zN=function(){null==yN&&(yN=new xN,Mn.getInstance().o="b");return yN};
Naa=function(a){switch(a){case "fully_viewable_audible_half_duration_impression":return"f";case "measurable_impression":return"b";case "overlay_unmeasurable_impression":return"g";case "overlay_unviewable_impression":return"h";case "overlay_viewable_end_of_session_impression":return"i";case "overlay_viewable_immediate_impression":return"j";case "viewable_impression":return"n";default:return null}};
AN=function(a){a=a.gi();return null!=a&&2==a.getPlayerType()};
BN=function(a){a=a.l||{};a.autoplay="1";return a};
CN=function(a){a=g.U(a);return g.uB(a)&&!g.mB(a)&&"desktop-polymer"==a.g};
EN=function(a,b){var c=g.U(a);oB(c)||"3"!=c.A||(c=g.zL(a),oB(c.app.g),c.H=!b,DN(c))};
FN=function(a){g.J.call(this);this.g=a};
Oaa=function(a){switch(a){case "abandon":return"abandon";case "active_view_fully_viewable_audible_half_duration":return"fully_viewable_audible_half_duration_impression";case "active_view_measurable":return"measurable_impression";case "active_view_viewable":return"viewable_impression";case "complete":return"complete";case "end_fullscreen":return"exitfullscreen";case "first_quartile":return"firstquartile";case "fullscreen":return"fullscreen";case "impression":return"impression";case "midpoint":return"midpoint";
case "mute":return"mute";case "pause":return"pause";case "progress":return"progress";case "resume":return"resume";case "skip":return"skip";case "start":return"start";case "third_quartile":return"thirdquartile";case "unmute":return"unmute"}return null};
GN=function(a,b,c,d){g.J.call(this);this.o=a;this.F=b;g.K(this,this.F);this.g=c;this.H=d;this.I=zr();this.B=Array.from(sM(this.o,"progress"));this.B.sort(function(a,b){return a.offsetMilliseconds-b.offsetMilliseconds});
this.A=0;this.l={};this.C={wx:.25,Ox:.5,Zx:.75}};
IN=function(a){HN(a,"impression");HN(a,"start")};
Paa=function(a,b){b&&b.forEach(function(b){b.baseUrl&&JN(a,b.baseUrl,{})})};
LN=function(a,b,c){for(c=void 0===c?!1:c;a.A<a.B.length;){var d=KN(a,"progress"),e=a.B[a.A];if(e.offsetMilliseconds<=1E3*b||c)(e=e.baseUrl)&&JN(a,e,d),a.A++;else break}};
MN=function(a,b,c,d){d=void 0===d?!1:d;(b>=c*a.C.wx||d)&&HN(a,"first_quartile");(b>=c*a.C.Ox||d)&&HN(a,"midpoint");(b>=c*a.C.Zx||d)&&HN(a,"third_quartile")};
NN=function(a,b){for(var c=KN(a,b),d=g.q(sM(a.o,b)),e=d.next();!e.done;e=d.next())(e=e.value.baseUrl)&&JN(a,e,c);a.l[b]=!0};
HN=function(a,b){a.l.hasOwnProperty(b)||NN(a,b)};
JN=function(a,b,c){for(var d=dp.yk(b),e={},f=qN(a.H),k=g.q(Object.keys(f)),l=k.next();!l.done;l=k.next())l=l.value,e[l]=f[l].toString();e=Object.assign(e,a.g);c&&((f=c.doubleVerifyViewability)&&(e.DV_VIEWABILITY=d?(0,window.encodeURIComponent)(f):f),(f=c.integralAdsViewability)&&(e.IAS_VIEWABILITY=d?(0,window.encodeURIComponent)(f):f),(f=c.googleViewability)&&(e.GOOGLE_VIEWABILITY=f),(f=c.moatInit)&&(e.MOAT_INIT=d?(0,window.encodeURIComponent)(f):f),(f=c.moatViewability)&&(e.MOAT_VIEWABILITY=d?(0,window.encodeURIComponent)(f):
f),(c=c.viewability)&&(e.VIEWABILITY=c));b=g.Eo(b,e);"https:"==window.location.protocol&&(c=g.yg(b),b="https"==c[1]?b:g.wg("https",c[2],c[3],c[4],c[5],c[6],c[7]));c=void 0;(e=a.H.Y())&&e.oauthToken&&a.I&&zr(b)&&Ar(b)&&(c={Authorization:"Bearer "+e.oauthToken});try{g.as(b,void 0,d,c)}catch(m){}};
KN=function(a,b){var c=a.F;var d=a.o;if(d.P()){var e=Oaa(b);if(null==e)d={};else{var f;(f=c.g)&&f.gi?(f=f.gi(),f=null!=f&&2==f.getPlayerType()?f.l?f.l.ha():null:null):f=null;c={opt_adElement:f,opt_fullscreen:c.g.isFullscreen()};d=$n(e,d.L,c)}}else d={};return d?Object.assign({},d):{}};
ON=function(a,b,c,d){d=void 0===d?!1:d;g.R.call(this);this.g=a;this.l=new GN(b,new FN(this.g),c,this.g);g.K(this,this.l);this.A=zN();this.A.g.set(b.L,this);this.A.subscribe("b",this.av,this);this.A.subscribe("f",this.bv,this);this.A.subscribe("g",this.cv,this);this.A.subscribe("h",this.dv,this);this.A.subscribe("i",this.ev,this);this.A.subscribe("j",this.fv,this);this.A.subscribe("n",this.gv,this);this.I=b;this.H=[];this.macros=c;this.F=!1;if(a=d)a=g.U(this.g),g.mB(a)||a.l||g.lB(a)||a.experiments.g("disable_bulleit_adblocker_check")&&
!g.Qk?a=!0:(a=g.kd("video-ads"),a=null!=a&&"none"!=rh(a,"display")),a=!a;this.U=a};
PN=function(a){a.U?a.bd("html5.unsupportedads"):a.ub()};
RN=function(a,b){cb(a.H,b);QN(a,b,1)};
Qaa=function(a,b){var c=[];(0,g.G)(b,function(a){0<=g.Oa(this.H,function(b){return b.componentType==a.componentType})?c.push(a):g.Q(Error("Cannot find UX Component "+a.componentType+" to modify"),"WARNING")},a);
QN(a,c,2)};
SN=function(a){QN(a,a.H,3);a.H=[]};
QN=function(a,b,c){0!=b.length&&(b=(0,g.I)(b,function(a){return new iM(a,c,a.id)}),a.O("onAdUxUpdate",b))};
TN=function(a){return(a=a.g.Y(2))&&a.clientPlaybackNonce||""};
UN=function(a,b){hM.call(this,"action-companion",a,b)};
Raa=function(a){var b=a.renderer;var c=a.renderer;c=c.navigationEndpoint&&c.navigationEndpoint.urlEndpoint&&c.navigationEndpoint.urlEndpoint.url||"";var d=VN(b.bannerImage),e=VN(b.iconImage),f=b.headline&&b.headline.text||"",k=b.description&&b.description.text||"";a=a.renderer;a=(a=a.actionButton&&a.actionButton.buttonRenderer&&a.actionButton.buttonRenderer.text)?g.nD(a):"";return{target:c,bannerImageUrl:d,iconImageUrl:e,headline:f,descriptionText:k,actionTitle:a,impressionEndpoints:b.impressionCommands}};
VN=function(a){return a&&a.thumbnail&&a.thumbnail.thumbnails&&a.thumbnail.thumbnails.length?a.thumbnail.thumbnails[0].url||"":""};
WN=function(a,b,c){ON.call(this,a,b,c);this.o=null};
XN=function(a,b){var c=b.renderer,d=c.iconImage&&c.iconImage.thumbnail&&c.iconImage.thumbnail.thumbnails||null;d&&d.length&&g.tb(g.Hb(d[0].url))&&(d[0].url=a.profilePicture);(d=c.bannerImage&&c.bannerImage.thumbnail&&c.bannerImage.thumbnail.thumbnails||null)&&d.length&&g.tb(g.Hb(d[0].url))&&(d[0].url=a.channelBanner);c=c.headline;null!=c&&g.tb(g.Hb(c.text))&&(c.text=a.author)};
YN=function(a,b){hM.call(this,"ad-action-interstitial",a,b)};
ZN=function(a,b,c){ON.call(this,a,b,c,!0);this.B=b;this.o=b.l.durationMilliseconds||0;this.xa=null};
$N=function(a,b){b.SLOT_POS="1";hM.call(this,"backfill-mpu-companion",a,b)};
aO=function(a,b,c){ON.call(this,a,b,c)};
bO=function(a,b,c){ON.call(this,a,b,c)};
cO=function(a,b){hM.call(this,"invideo-overlay",a,b)};
dO=function(a,b,c){ON.call(this,a,b,c);this.o=b};
eO=function(a){hM.call(this,"persisting-overlay",a)};
fO=function(a,b,c){ON.call(this,a,b,c);this.o=b};
gO=function(a,b){hM.call(this,"pla-shelf",a,b)};
hO=function(a,b,c){ON.call(this,a,b,c);this.o=b};
iO=function(a,b){hM.call(this,"shopping-companion",a,b)};
jO=function(a,b,c){ON.call(this,a,b,c)};
kO=function(a){hM.call(this,"survey",a);this.g=!1};
lO=function(a,b,c){ON.call(this,a,b,c,!0);this.B=b;this.o=null};
mO=function(a,b){hM.call(this,"survey-interstitial",a,b)};
nO=function(a,b,c){ON.call(this,a,b,c,!0);this.o=b};
oO=function(a){hM.call(this,"ad-text-interstitial",a)};
pO=function(a,b){ON.call(this,a,b,{});this.B=b;this.o=b.l.durationMilliseconds||0;this.xa=null};
qO=function(a,b){a.xa&&a.xa.stop();SN(a);a.O(b)};
rO=function(){hM.call(this,"ad-attribution-bar");this.adPodPositionInfoString=null;this.adPodPosition=0;this.adPodLength=1;this.adBreakLengthSeconds=0;this.adBadgeText=null;this.adBreakRemainingLengthSeconds=0;this.adVideoId=null};
sO=function(a){a=void 0===a?null:a;hM.call(this,"ad-channel-thumbnail");this.channelIconThumbnailUrl=a};
tO=function(a){hM.call(this,"skip-button",a)};
uO=function(a){a=void 0===a?null:a;hM.call(this,"ad-title");this.videoTitle=a};
vO=function(a){a=void 0===a?null:a;hM.call(this,"advertiser-name");this.channelName=a};
wO=function(a){hM.call(this,"player-overlay",a)};
xO=function(a){hM.call(this,"visit-advertiser",a);var b={};var c=a.text;a=a.navigationEndpoint;null!=c&&null!=c.runs&&null!=a?(b.runs=[g.hc(c.runs[0])],b.runs[0].navigationEndpoint=a):(b={text:g.S("YTP_VISIT_ADVERTISERS_SITE")},a&&(b.navigationEndpoint=a),b={runs:[b]});this.visitAdvertiserLabel=b};
yO=function(a,b,c,d){ON.call(this,a,b,c,!0);this.o=b;this.C=d;this.B=new g.P(this.fz,15E3,this);g.K(this,this.B)};
Saa=function(a){var b=new rO;b.adBadgeText=g.S("YTP_AD_BADGE");var c=a.o.I;1<c.l&&(b.adPodPositionInfoString=g.S("YTP_AD_POD_POSITION",{AD_INDEX:String(c.g+1),ADS_COUNT:String(c.l)}));b.adBreakLengthSeconds=c.adBreakLengthSeconds;b.adBreakRemainingLengthSeconds=c.adBreakRemainingLengthSeconds;b.adPodPosition=c.g+1;b.adPodLength=c.l;if(a=a.o.K)b.adVideoId=a;return b};
BO=function(a){var b=a.o.A,c=b.playerOverlay&&b.playerOverlay.instreamAdPlayerOverlayRenderer;c||(c={});var d=g.U(a.g);if((g.mB(d)||g.lB(d))&&!c.skipOrPreviewRenderer){var e=1E3*a.g.getDuration(2),f=0<e&&7050>=e;(0,window.isFinite)(e)&&33E3<e&&!a.o.isSkippable()&&!g.mB(d)&&g.Q(Error("Instream ad is skippable by length, but was was marked "+("nonskippable. adLengthMs:"+e+", IVAR: "+JSON.stringify(b))),"ERROR");d={};a.o.isSkippable()&&!f?d.skipAdRenderer=zO(a):d.adPreviewRenderer=AO(a,!1,f);c.skipOrPreviewRenderer=
d}c.skipOrPreviewRenderer&&g.dc(c.skipOrPreviewRenderer)&&g.Q(Error("IAPOR.skipOrPreview was filled, but empty. IVAR: "+JSON.stringify(b)),"ERROR");return c};
CO=function(a,b){a.B.stop();SN(a);EN(a.g,!0);a.O(b)};
zO=function(a){var b={preskipRenderer:{}};b.preskipRenderer.adPreviewRenderer=AO(a,!0,!1);b.skippableRenderer={};a=b.skippableRenderer;var c={message:{}};c.message.text=g.S("YTP_SKIP_AD");a.skipButtonRenderer=c;return b};
AO=function(a,b,c){var d=a.g.Y(1),e={};if(b||c){var f={},k={};c=c?g.S("YTP_AD_PREVIEW_NONSKIPPABLE_COUNTDOWN",{NEW_LINE:"\n",TIME_REMAINING:"{TIME_REMAINING}"}):g.S("YTP_CAN_SKIP_AD_SOON",{NEW_LINE:"\n",TIME_REMAINING:"{TIME_REMAINING}"});k.text=c;k.isTemplated=!0;f.g=5;f.templatedAdText=k;e.templatedCountdown=f}else f={},k=g.S("YTP_AD_PREVIEW_NONSKIPPABLE",{NEW_LINE:"\n"}),f.text=k,f.isTemplated=!1,e.staticPreview=f;b&&(e.durationMilliseconds=5E3);e.thumbnail={};b=e.thumbnail;f={};f.url=AB(g.U(a.g),
d.videoId,"mqdefault.jpg");f.width=320;f.height=180;b.thumbnail={thumbnails:[f]};return e};
DO=function(a,b,c,d){var e=Object.assign({},{});e.FINAL=pN(pf("1"));e.SLOT_POS=pN(pf("0"));c=uN(c,tN(e));return b instanceof uM?(e={},e.SLOT_POS=pN(pf(b.I.g.toString())),c=uN(c,tN(e)),new yO(a,b,c,d)):b instanceof WM?new dO(a,b,c):b instanceof zM?new bO(a,b,c):b instanceof iN?new jO(a,b,c):b instanceof dN?new lO(a,b,c):b instanceof YM?new hO(a,b,c):b instanceof wM?new aO(a,b,c):b instanceof $M?new ZN(a,b,c):b instanceof xM?new fO(a,b,c):b instanceof vM?new WN(a,b,c):b instanceof fN?new pO(a,b):b instanceof
eN?new nO(a,b,c):null};
EO=function(){this.L=g.hr("INNERTUBE_CLIENT_NAME",void 0);this.P=g.hr("INNERTUBE_CLIENT_VERSION",void 0);this.H="AD_PLACEMENT_KIND_UNKNOWN";this.o=this.F=this.B=this.A=null;this.g="unknown_type";this.I=!0;this.K=this.l=this.C=!1};
FO=function(a){a.A=null;a.B=null;a.F=null;a.o=null;a.H="AD_PLACEMENT_KIND_UNKNOWN";a.g="unknown_type";a.C=!1;a.l=!1};
Taa=function(a){a.l=!1;a.K?XC("ad_to_video",["pbresume"]):XC("ad_to_ad",["apbs"])};
Uaa=function(a){a.C&&!a.l&&(a.I=!1,a.l=!0,"ad_to_video"!=a.g&&g.KC("apbs",void 0,a.g))};
HO=function(a,b,c,d,e){g.R.call(this);this.B=a;this.C=b;this.g=d;this.L=uN(e,tN(rN(d)));this.P=d.g.length;this.K=-1;this.l=[];this.H=null;this.F=c;this.I=!1;this.U=(a=b.Y(1))&&a.oa||!1;this.R=0;this.V=!1;GO(this.B,this.g.Kc(),this)};
Vaa=function(a){a.l.forEach(function(a){return a.Xd()})};
IO=function(a){(a=a.baseUrl)&&g.as(a,void 0,dp.yk(a))};
Waa=function(a){if(a.V)return function(a){a.xb(window.Infinity,!0)};
var b=Math.floor((0,g.H)()/1E3)-a.R;return function(a){a.xb(a.getCurrentTime()+b,!0)}};
JO=function(a,b){a.l.forEach(function(a){if(a.F){var c=a.l;a=a.getDuration();0<a&&(LN(c,b),MN(c,b,a))}})};
Xaa=function(a){a.l.forEach(function(a){var b=a.g.isMuted();HN(a.l,b?"mute":"unmute")})};
Yaa=function(a,b){a.l.forEach(function(a){HN(a.l,b?"fullscreen":"end_fullscreen")})};
KO=function(a,b,c,d){g.R.call(this);this.o=a;this.A=b;this.l=c;this.g=null;this.B=uN(d,tN(rN(c)));Zaa(this)};
aba=function(a,b){var c=$aa(b);c.Mr||(c.isEmpty||LO(a.o,c.Up),eM(a.g)||(c=[a.g,a.g.A].filter(function(a){return null!=a}),MO(a.o,c)))};
$aa=function(a){var b=null,c={isEmpty:!0,Mr:!1,Up:[]};try{b=JSON.parse(a.response)}catch(d){return c}if(!b)return c;if((a=b)&&a.adThrottled)return c.Mr=!0,c;a=a.playerAds;if(!a||!a.length)return c;a=a.map(function(a){return a.adPlacementRenderer}).filter(function(a){return a&&null!=a.renderer});
if(g.Ua(a))return c;c.Up=a;c.isEmpty=!1;return c};
Zaa=function(a){[a.l.X,a.l.Kc()].filter(function(a){return null!=a}).forEach(function(b){GO(a.o,b,a)})};
NO=function(a,b,c,d,e){ON.call(this,b,d.l[0],e);this.P=c;this.K=d;this.B=d.l[0];this.L=a;this.o=this.C=null;a=this.K.Kc();a.visible=!1;GO(this.L,a,this)};
OO=function(a,b,c,d,e){HO.call(this,a,b,c,d,e);this.A=0<d.A.length?d.A[0]:null;this.o=null;this.A&&this.A.l&&(this.o=DO(b,this.A.l,e,a),g.K(this,this.o))};
QO=function(a){PO=a&&a.data};
SO=function(a){RO=a&&a.data};
TO=function(){PO=null};
UO=function(a,b){g.R.call(this);var c=this;this.g=a;this.co=null;this.U=b;this.P=new qM(a,CN(a)?null:new jM);this.o=null;this.K=sf(function(){c.g.ga()||g.QL(c.g,"ad")});
this.l=null;this.B=new window.Map;this.A=new window.Set;this.H=[];this.F=this.I=null;this.R=new zaa(a);this.da=new g.dt(this);g.K(this,this.da);this.C=new g.dt(this);g.K(this,this.C);this.L=!1};
bba=function(a){return a&&a.adPlacements?a.adPlacements.map(function(a){return a.adPlacementRenderer}).filter(function(a){return a&&null!=a.renderer}):[]};
cba=function(a,b){return b.filter(function(b){return"AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED"==(b.config&&b.config.adPlacementConfig&&b.config.adPlacementConfig.kind||null)?(a.I=b,!1):!0})};
dba=function(a,b){return b.every(function(b){b=a.B.get(b);return null==b?(g.Q(Error("AdCueRange without a corresponding AdPlacement.")),!0):b instanceof KO?!1:b instanceof HO?!QM(b.g):!0})};
VO=function(a){var b=eba(a);0<b.length?(dba(a,b)&&a.K(),g.Df(function(){if(!a.ga())for(var c=g.q(b),d=c.next();!d.done;d=c.next())a.eo(d.value)})):a.K()};
eba=function(a){for(var b=[],c=g.q(a.A),d=c.next();!d.done;d=c.next())d=d.value,eM(d)&&b.push(d);c=g.q(b);for(d=c.next();!d.done;d=c.next())a.A["delete"](d.value);return b};
LO=function(a,b,c){c=void 0===c?null:c;c=void 0===c?null:c;var d=a.R;var e=1E3*a.g.getDuration(1);var f=a.g.Y(1).oa||!1;e=new cM(e,1E3*a.g.getCurrentTime()||0,f);f=a.H.length;var k=c;f=void 0===f?0:f;k=void 0===k?null:k;c=[];var l=0;if(k){k=g.q(k);for(var m=k.next();!m.done;m=k.next()){m=m.value;var n=e,p=new cM(n.o,n.A,n.livestream),u=n.l;u&&(p.l=new nw(u.Pd,u.durationSecs,u.context));n.g&&(p.g=n.g);n=p;n.l=m;c.push(nN(b[0],f+l,d,n));l++}}else for(b=g.q(b),k=b.next();!k.done;k=b.next())c.push(nN(k.value,
f+l,d,e)),l++;a.H=a.H.concat(c);if(0!=c.length)for(d=tN(qN(a.g)),b=c.length-1;0<=b;b--)e=a,f=a.g,l=a.U,k=a.P,m=c[b],0<m.A.length?new OO(e,f,new EO,m,d):0<m.l.length?new NO(e,f,k,m,d):""==m.L?new HO(e,f,new EO,m,d):new KO(e,l,m,d)};
YO=function(a,b){if(b.wk())g.Ee(a.o),a.o=b;else{if((0<b.g.g.length||0<b.g.B.length)&&a.o&&a.o.Kc().start<b.Kc().start){var c=a.P;if(c.g)c.g&&waa(c.g);else{var d=c.l.Y(1);c.l.la("updatekevlarcompanion",{contentVideoId:d&&d.videoId})}g.Ee(a.o);a.o=null}b.Kr()&&(a.l&&WO(a),a.l=b,QM(b.g)&&(a.C.M(a.g,"presentingplayerstatechange",a.cD),a.C.M(a.g,"internalAbandon",a.YC),a.C.M(a.g,"aduxclicked",a.hE),a.C.M(a.g,"progresssync",a.dD),a.C.M(a.g,"onVolumeChange",a.eD),a.C.M(a.g,"fullscreentoggled",a.bD),g.Lp(a.g.getRootNode(),
["ad-showing","ad-interrupting"]),XO(a.g.app,2)))}};
WO=function(a,b){var c=!!a.l&&QM(a.l.g)&&AN(a.g);a.l&&ZO(a,a.l);a.l=null;if(c&&(g.ft(a.C),g.Mp(a.g.getRootNode(),["ad-showing","ad-interrupting"]),c=g.U(a.g),c.experiments.g("call_release_video_in_bulleit")&&g.KK(g.V(a.g.app,2)),!c.experiments.g("skip_restore_on_abandon_in_bulleit")||!a.L)){c=a.g;if(2==wL(c.app)){c=c.app;var d=g.V(c,2);d&&(d!=c.o?$O(c,c.o):aP(c))}a.g.Oc();b&&b(a.g)}a.K()};
GO=function(a,b,c){if(b instanceof dM){if("AD_PLACEMENT_KIND_MILLISECONDS"==b.o&&g.T(g.yL(a.g),64)){var d=1E3*a.g.getCurrentTime()||0;d!=b.start&&b.contains(d)&&(b.g=!0)}a.B.has(b)?g.Q(Error(b.toString()+" has already been seen")):(a.A.add(b),a.B.set(b,c),"AD_PLACEMENT_KIND_START"!=b.o&&g.ML(a.g,[b],1))}else g.Q(Error("Should use AdCueRange instead of CueRange"))};
MO=function(a,b){g.Df(function(){return g.OL(a.g,b,1)});
for(var c=g.q(b),d=c.next();!d.done;d=c.next())d=d.value,a.A["delete"](d),a.B["delete"](d)};
ZO=function(a,b){for(var c=a.B,d=g.q(c),e=d.next();!e.done;e=d.next()){e=g.q(e.value);var f=e.next().value;if(e.next().value==b){c["delete"](f);break}}g.Ee(b)};
g.bP=function(a){g.W.call(this,a);this.R=new g.R;g.K(this,this.R)};
cP=function(a){g.J.call(this);this.F=a};
dP=function(a,b){if(!a.F)throw Error("This does not support the append operation");a.Oh(b.ha())};
eP=function(a){cP.call(this,!0);this.g=a};
fP=function(a,b){function c(a){return{toString:a}}
var d={};d.CPN=c(function(){var b=a.Y();return b&&b.clientPlaybackNonce||null});
d.AD_CPN=c(function(){return b.co});
d.AD_MT=c(function(){return Math.round(Math.max(0,1E3*a.getCurrentTime(2))).toString()});
d.MT=c(function(){return Math.round(Math.max(0,1E3*a.getCurrentTime(1))).toString()});
d.P_H=c(function(){return a.Gg().height.toString()});
d.PV_H=d.P_H;d.P_W=c(function(){return a.Gg().width.toString()});
d.PV_W=d.P_W;d.CONN="0";d.WT=c(function(){return Date.now().toString()});
d.LACT=c(function(){return g.$t().toString()});
d.VIS=c(function(){return a.df().toString()});
d.VOL=c(function(){return a.getVolume().toString()});
return d};
X=function(a,b,c,d,e){e=void 0===e?null:e;g.bP.call(this,c);this.g=a;this.l=b;this.macros={};this.componentType=d;this.H=null;this.X=e;this.K=null;this.fa=new eP(this.element);g.K(this,this.fa);this.M(this.element,"click",this.onClick)};
gP=function(a,b){a=void 0===a?null:a;b=void 0===b?null:b;if(null==a)return g.Q(Error("Got null or undefined adText object"),"WARNING"),"";var c=g.Hb(a.text);if(!a.isTemplated)return c;if(null==b)return g.Q(Error("Missing required parameters for a templated message"),"WARNING"),c;for(var d=g.q(Object.entries(b)),e=d.next();!e.done;e=d.next()){var f=g.q(e.value);e=f.next().value;f=f.next().value;c=c.replace("{"+e+"}",f)}return c};
jP=function(a,b,c){var d=a.g;g.U(d).F&&g.hP(d.app.L,b,a);a=a.g;g.U(a).F&&g.iP(a.app.L,b,c)};
kP=function(a){return a&&a.thumbnails&&!g.Ua(a.thumbnails||null)&&a.thumbnails[0].url?g.Hb(a.thumbnails[0].url):""};
lP=function(a,b,c){X.call(this,a,b,{D:"img",J:"ytp-ad-image"},"ad-image",void 0===c?null:c);this.hide()};
mP=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-text"},"ad-text",void 0===c?null:c);this.o=null;this.hide()};
g.nP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-cast-desktop-on"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M25,13 L11,13 L11,14.63 C14.96,15.91 18.09,19.04 19.37,23 L25,23 L25,13 L25,13 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",
fill:"#fff"}}]}};
oP=function(){return{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",N:{d:"m 14.8,21.9 -4.2,-4.2 -1.4,1.4 5.6,5.6 12,-12 -1.4,-1.4 -10.6,10.6 z",fill:"#fff"}}]}};
g.pP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-chevron-back"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},G:[{D:"path",N:{d:"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z",fill:"#fff"}}]}};
g.qP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-chevron-forward"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},G:[{D:"path",N:{d:"m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z",fill:"#fff"}}]}};
rP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-clip-clear"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},G:[{D:"path",N:{d:"M14,14 L14,0 L0,0 L0,14 L14,14 Z"}},{D:"path",N:{d:"M7.15,8.35 L9.25,10.45 L10.65,9.05 L8.55,6.95 L10.7,4.8 L9.3,3.4 L7.15,5.55 L5,3.4 L3.6,4.8 L5.75,6.95 L3.65,9.05 L5.05,10.45 L7.15,8.35 Z",fill:"#fff"}}]}};
sP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-clip-end"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M2,14 L5,11 L5,3 L2,0 L9,0 L9,14 L2,14 L2,14 Z",fill:"#eaeaea"}}]}};
tP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-clip-start"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M12,14 L9,11 L9,3 L12,0 L5,0 L5,14 L12,14 Z",fill:"#eaeaea"}}]}};
g.uP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-close"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 24 24",width:"100%"},G:[{D:"path",N:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#fff"}}]}};
vP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-closed-captioning"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M11,11 C9.89,11 9,11.9 9,13 L9,23 C9,24.1 9.89,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M17,17 L15.5,17 L15.5,16.5 L13.5,16.5 L13.5,19.5 L15.5,19.5 L15.5,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L13,21 C12.45,21 12,20.55 12,20 L12,16 C12,15.45 12.45,15 13,15 L16,15 C16.55,15 17,15.45 17,16 L17,17 L17,17 Z M24,17 L22.5,17 L22.5,16.5 L20.5,16.5 L20.5,19.5 L22.5,19.5 L22.5,19 L24,19 L24,20 C24,20.55 23.55,21 23,21 L20,21 C19.45,21 19,20.55 19,20 L19,16 C19,15.45 19.45,15 20,15 L23,15 C23.55,15 24,15.45 24,16 L24,17 L24,17 Z",
fill:"#fff"}}]}};
wP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-forward-five-seconds"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 10,19 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 h -2 c 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 0,-3.3 2.7,-6 6,-6 v 4 l 5,-5 -5,-5 v 4 c -4.4,0 -8,3.6 -8,8 z m 6.7,.9 .2,-2.2 h 2.4 v .7 h -1.7 l -0.1,.9 c 0,0 .1,0 .1,-0.1 0,-0.1 .1,0 .1,-0.1 0,-0.1 .1,0 .2,0 h .2 c .2,0 .4,0 .5,.1 .1,.1 .3,.2 .4,.3 .1,.1 .2,.3 .3,.5 .1,.2 .1,.4 .1,.6 0,.2 0,.4 -0.1,.5 -0.1,.1 -0.1,.3 -0.3,.5 -0.2,.2 -0.3,.2 -0.5,.3 C 18.3,22 18.1,22 17.9,22 17.7,22 17.5,22 17.4,21.9 17.3,21.8 17.1,21.8 16.9,21.7 16.7,21.6 16.7,21.5 16.6,21.3 16.5,21.1 16.5,21 16.5,20.8 h .8 c 0,.2 .1,.3 .2,.4 .1,.1 .2,.1 .4,.1 .1,0 .2,0 .3,-0.1 L 18.4,21 c 0,0 .1,-0.2 .1,-0.3 v -0.6 l -0.1,-0.2 -0.2,-0.2 c 0,0 -0.2,-0.1 -0.3,-0.1 h -0.2 c 0,0 -0.1,0 -0.2,.1 -0.1,.1 -0.1,0 -0.1,.1 0,.1 -0.1,.1 -0.1,.1 h -0.6 z"}}]}};
xP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-link"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",N:{d:"M5.85 18.0c0.0-2.56 2.08-4.65 4.65-4.65h6.0V10.5H10.5c-4.14 .0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h6.0v-2.85H10.5c-2.56 .0-4.65-2.08-4.65-4.65zM12.0 19.5h12.0v-3.0H12.0v3.0zm13.5-9.0h-6.0v2.85h6.0c2.56 .0 4.65 2.08 4.65 4.65s-2.08 4.65-4.65 4.65h-6.0V25.5h6.0c4.14 .0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5z",fill:"#fff"}}]}};
yP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-next"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"}}]}};
g.zP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-notifications-active"]}:{D:"svg",N:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},G:[{D:"path",N:{d:"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}};
AP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-pause"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}};
BP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-play"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}};
CP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-prev"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z"}}]}};
DP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-replay"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"}}]}};
EP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-rewind-five-seconds"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z m -1.3,8.9 .2,-2.2 h 2.4 v .7 h -1.7 l -0.1,.9 c 0,0 .1,0 .1,-0.1 0,-0.1 .1,0 .1,-0.1 0,-0.1 .1,0 .2,0 h .2 c .2,0 .4,0 .5,.1 .1,.1 .3,.2 .4,.3 .1,.1 .2,.3 .3,.5 .1,.2 .1,.4 .1,.6 0,.2 0,.4 -0.1,.5 -0.1,.1 -0.1,.3 -0.3,.5 -0.2,.2 -0.3,.2 -0.4,.3 C 18.5,22 18.2,22 18,22 17.8,22 17.6,22 17.5,21.9 17.4,21.8 17.2,21.8 17,21.7 16.8,21.6 16.8,21.5 16.7,21.3 16.6,21.1 16.6,21 16.6,20.8 h .8 c 0,.2 .1,.3 .2,.4 .1,.1 .2,.1 .4,.1 .1,0 .2,0 .3,-0.1 L 18.5,21 c 0,0 .1,-0.2 .1,-0.3 v -0.6 l -0.1,-0.2 -0.2,-0.2 c 0,0 -0.2,-0.1 -0.3,-0.1 h -0.2 c 0,0 -0.1,0 -0.2,.1 -0.1,.1 -0.1,0 -0.1,.1 0,.1 -0.1,.1 -0.1,.1 h -0.7 z"}}]}};
g.FP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-settings"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z",
fill:"#fff"}}]}};
GP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-stop"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 12,25 19,25 19,11 12,11 z M 19,25 26,25 26,11 19,11 z"}}]}};
HP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-volume-high"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff"}}]}};
IP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-volume-low"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",fill:"#fff"}}]}};
JP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-volume-muted"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}};
KP=function(a){if(!a)return null;switch(a.iconType){case "OPEN_IN_NEW":return{D:"svg",N:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},G:[{D:"path",N:{d:"M0 0h48v48H0z",fill:"none"}},{D:"path",N:{d:"M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z"}}]};case "CHECK_BOX":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-check-box"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 24 24",width:"100%"},
G:[{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",N:{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"#d4d4d4"}}]};case "CHECK_BOX_OUTLINE_BLANK":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-check-box-outline-blank"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 24 24",width:"100%"},G:[{D:"path",N:{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",fill:"#d4d4d4"}},
{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}}]};case "CLOSE":return g.uP();case "INFO_OUTLINE":return{D:"svg",N:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},G:[{D:"path",N:{d:"M0 0h48v48H0z",fill:"none"}},{D:"path",N:{d:"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"}}]};case "REMOVE_CIRCLE":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-remove-circle"]}:
{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 24 24",width:"100%"},G:[{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",N:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z",fill:"#757575"}}]};case "SKIP_NEXT":return yP();case "LIKE":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-like"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 24 24",width:"100%"},G:[{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",N:{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z",
fill:"#fff"}}]};case "DISLIKE":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-dislike"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 24 24",width:"100%"},G:[{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",N:{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",fill:"#fff"}}]};default:return g.Q(Error("Unexpected icon "+a),"WARNING"),null}};
LP=function(a,b,c,d,e){c=void 0===c?[]:c;e=void 0===e?!1:e;X.call(this,a,b,{D:"button",W:["ytp-ad-button"].concat(c)},void 0===d?"button":d);this.B=this.A=this.C=null;this.F=e;this.hide()};
MP=function(a){var b=null;null!=a.B&&(b=[a.B.serviceEndpoint,a.B.navigationEndpoint].filter(function(a){return null!=a}));
return b||[]};
NP=function(a,b){X.call(this,a,b,{D:"div",J:"iv-website-companion",G:[{D:"div",J:"iv-website-companion-block",G:[{D:"div",J:"iv-website-companion-icon"},{D:"div",J:"iv-website-companion-text",G:[{D:"div",J:"iv-website-companion-desc",G:[{D:"span",W:["yt-badge","yt-badge-ad"],G:["{{adBadgeText}}"]}]}]}]}]},"action-companion");this.V=this.Z["iv-website-companion"];this.B=new lP(this.g,this.l,"iv-website-companion-banner");g.K(this,this.B);this.B.ca(this.V,0);this.L=new lP(this.g,this.l);g.K(this,this.B);
this.L.ca(this.Z["iv-website-companion-icon"]);this.F=new mP(this.g,this.l,"iv-website-companion-header");g.K(this,this.F);this.F.ca(this.Z["iv-website-companion-text"],0);this.C=new mP(this.g,this.l,"iv-website-companion-domain");g.K(this,this.C);this.C.ca(this.Z["iv-website-companion-desc"]);this.A=new LP(this.g,this.l,["iv-website-companion-action","yt-uix-button-size-default","yt-uix-button-primary"]);g.K(this,this.A);this.A.ca(this.Z["iv-website-companion-block"]);this.I=null;this.P=[];this.da=
new g.dt;g.K(this,this.da);this.ba=new jM;this.o=null;this.hide()};
OP=function(){g.J.call(this);this.A=this.l=this.B=this.g=this.C=this.o=null};
fba=function(a,b){return PP(a).then(function(a){a.promotionShelfShow(b)})};
gba=function(a){PP(a).then(function(a){a.promotionShelfClear()})};
iba=function(a){window.google_ad_output="html";window.google_ad_height="250";window.google_ad_format="300x250_as";window.google_container_id="google_companion_ad_div";return PP(a).then(function(b){return hba(a,b)}).then(function(b){b();
return QP(a)})};
jba=function(a){return PP(a).then(function(b){b.loadAfc();return QP(a)})};
RP=function(){return g.z("yt.www.watch.ads")};
SP=function(){return g.z("window.google_show_companion_ad")};
PP=function(a){if(a.ga())throw Error("Object is disposed");if(!a.o){var b=RP();a.o=b?Nf(b):(new g.Jf(function(b){a.C=g.xt("watchAdsInit",b)})).then(RP)}return a.o};
hba=function(a,b){if(a.ga())throw Error("Object is disposed");if(!a.g){var c=SP();kba(c,b.getGlobals)?a.g=Nf(c):a.g=(new g.Jf(function(b){a.B=g.xt("showCompanionAdLoaded",b)})).then(SP)}return a.g};
QP=function(a){if(a.ga())throw Error("Object is disposed");a.l||(TP()?Nf():a.l=new g.Jf(function(b,c){a.A=new g.P(function(){TP()?b():c()},2E3,a);
a.A.start()}));
return a.l};
kba=function(a,b){if(!g.Ba(a)||!g.Ba(b))return!1;var c=b();return!(!c||!c.length)};
TP=function(){var a=g.hd("google_companion_ad_div");return a?(a=g.Id(a))&&"IFRAME"==a.tagName?-1!=a.src.indexOf("youtube.com%2Fad_frame"):!1:!1};
UP=function(a,b){X.call(this,a,b,{D:"div"},"backfill-mpu-companion");this.A=new OP;g.K(this,this.A);this.o=null};
VP=function(a,b,c,d,e){X.call(this,a,b,c,d);this.o=e;g.K(this,this.o);this.V=this.C=-1};
WP=function(a){a.o&&-1===a.C&&(a.C=a.o.subscribe("p",a.Ri,a),a.V=a.o.subscribe("o",a.Zk,a),a.Ri())};
XP=function(a){null!=a.o&&-1!==a.C&&(a.o.wc(a.C),a.o.wc(a.V),a.V=-1,a.C=-1)};
YP=function(a,b,c){VP.call(this,a,b,{D:"div",J:"ytp-ad-timed-pie-countdown-container",G:[{D:"svg",J:"ytp-ad-timed-pie-countdown",N:{viewBox:"0 0 20 20"},G:[{D:"circle",J:"ytp-ad-timed-pie-countdown-inner",N:{r:"5",cx:"10",cy:"10"}},{D:"circle",J:"ytp-ad-timed-pie-countdown-outer",N:{r:"10",cx:"10",cy:"10"}}]}]},"timed-pie-countdown",c);this.B=this.Z["ytp-ad-timed-pie-countdown-inner"];this.A=Math.ceil(10*3.14);this.hide()};
ZP=function(a,b){g.R.call(this);this.A=b;this.B=new g.dt(this);g.K(this,this.B);this.l=a;this.xa=new g.fg(100);g.K(this,this.xa);this.B.M(this.xa,"tick",this.C);this.o={seekableStart:0,seekableEnd:a/1E3,current:0};this.F=(0,g.H)();this.xa.start()};
$P=function(a,b){X.call(this,a,b,{D:"div",J:"ytp-ad-action-interstitial",G:[{D:"div",J:"ytp-ad-action-interstitial-background"},{D:"div",J:"ytp-ad-action-interstitial-slot",G:[{D:"div",J:"ytp-ad-action-interstitial-card"}]}]},"ad-action-interstitial");this.A=this.Z["ytp-ad-action-interstitial-card"];this.C=new lP(this.g,this.l,"ytp-ad-action-interstitial-image");g.K(this,this.C);this.C.ca(this.A);this.I=new mP(this.g,this.l,"ytp-ad-action-interstitial-headline");g.K(this,this.I);this.I.ca(this.A);
this.F=new mP(this.g,this.l,"ytp-ad-action-interstitial-description");g.K(this,this.F);this.F.ca(this.A);this.P=this.Z["ytp-ad-action-interstitial-background"];this.B=this.o=null;this.da=new g.dt;g.K(this,this.da);this.L=null;this.hide()};
aQ=function(a,b){X.call(this,a,b,{D:"div",J:"ytp-ad-text-interstitial"},"ad-text-interstitial");this.A=this.Z["ytp-ad-text-interstitial"];this.o=new mP(this.g,this.l,"ytp-ad-text-interstitial-message");g.K(this,this.o);this.o.ca(this.A);this.hide()};
cQ=function(a,b){X.call(this,a,b,{D:"div",J:"ytp-ad-overlay-slot",G:[{D:"div",J:"ytp-ad-overlay-container"}]},"invideo-overlay");this.I=[];this.o=this.L=null;var c=this.Z["ytp-ad-overlay-container"];this.F=new bQ(c,"ytp-overlay-ad-dimmed");g.K(this,this.F);this.M(c,"mouseover",this.F.dG,this.F);this.M(c,"mouseout",this.F.aG,this.F);var d=new g.bP({D:"div",J:"ytp-ad-text-overlay",G:[{D:"div",J:"ytp-ad-close-container",G:[{D:"button",J:"ytp-ad-close-button",G:[g.uP()]}]},{D:"div",J:"ytp-ad-overlay-title",
G:["{{title}}"]},{D:"div",J:"ytp-ad-overlay-desc",G:["{{description}}"]},{D:"div",J:"ytp-ad-overlay-link",G:["{{displayUrl}}"]},{D:"div",J:"ytp-ad-overlay-attribution",G:["{{attribution}}"]}]});this.M(d.Z["ytp-ad-overlay-title"],"click",g.B(this.Li,d.element));this.M(d.Z["ytp-ad-overlay-link"],"click",g.B(this.Li,d.element));this.M(d.Z["ytp-ad-close-container"],"click",this.so);this.M(d.Z["ytp-ad-overlay-attribution"],"click",this.zo);d.hide();this.C=d;g.K(this,this.C);this.C.ca(c);d=new g.bP({D:"div",
W:["ytp-ad-text-overlay","ytp-ad-enhanced-overlay"],G:[{D:"div",J:"ytp-ad-close-container",G:[{D:"button",J:"ytp-ad-close-button",G:[g.uP()]}]},{D:"div",J:"ytp-ad-overlay-text-image",G:[{D:"img",N:{src:"{{imageUrl}}"}}]},{D:"div",J:"ytp-ad-overlay-title",G:["{{title}}"]},{D:"div",J:"ytp-ad-overlay-desc",G:["{{description}}"]},{D:"div",J:"ytp-ad-overlay-link",G:["{{displayUrl}}"]},{D:"div",J:"ytp-ad-overlay-attribution",G:["{{attribution}}"]}]});this.M(d.Z["ytp-ad-overlay-title"],"click",g.B(this.Li,
d.element));this.M(d.Z["ytp-ad-overlay-link"],"click",g.B(this.Li,d.element));this.M(d.Z["ytp-ad-close-container"],"click",this.so);this.M(d.Z["ytp-ad-overlay-attribution"],"click",this.zo);this.M(d.Z["ytp-ad-overlay-text-image"],"click",this.rH);d.hide();this.A=d;g.K(this,this.A);this.A.ca(c);d=new g.bP({D:"div",J:"ytp-ad-image-overlay",G:[{D:"div",J:"ytp-ad-close-container",G:[{D:"button",J:"ytp-ad-close-button",G:[g.uP()]}]},{D:"div",J:"ytp-ad-overlay-image",G:[{D:"img",N:{src:"{{imageUrl}}",width:"{{width}}",
height:"{{height}}"}}]},{D:"div",J:"ytp-ad-overlay-attribution",G:["{{attribution}}"]}]});this.M(d.Z["ytp-ad-overlay-image"],"click",g.B(this.Li,d.element));this.M(d.Z["ytp-ad-close-container"],"click",this.so);this.M(d.Z["ytp-ad-overlay-attribution"],"click",this.zo);d.hide();this.B=d;g.K(this,this.B);this.B.ca(c);this.hide()};
dQ=function(a,b){g.Ih(b.Z["ytp-ad-overlay-attribution"],null!=a.o.attributionText);b.updateValue("attribution",gP(a.o.attributionText))};
eQ=function(a,b){var c=a.g.getRootNode();g.O(c,"ytp-ad-overlay-open",b);g.O(c,"ytp-ad-overlay-closed",!b)};
bQ=function(a,b){g.J.call(this);this.B=a;this.l=!1;this.A=b;this.C=!1;this.g=new g.P(this.Xp,45E3,this);g.K(this,this.g);this.o=new g.P(this.Xp,6E3,this);g.K(this,this.o)};
g.fQ=function(a,b,c,d){g.J.call(this);this.l=a;c||a.hide();this.B=null==d?b:d;this.g=this.A=null;this.o=new g.P(this.Al,0,this);g.K(this,this.o)};
gQ=function(a,b){var c=a.l.element;b?c.setAttribute("aria-hidden",!0):c.removeAttribute("aria-hidden")};
hQ=function(a,b,c){VP.call(this,a,b,{D:"div",J:"ytp-ad-preview-slot"},"ad-preview",c);this.ba=-1;this.B=new g.bP({D:"span",J:"ytp-ad-preview-container"});g.K(this,this.B);this.A=new mP(this.g,this.l,"ytp-ad-preview-text");g.K(this,this.A);this.A.ca(this.B.element);this.I=new g.bP({D:"span",J:"ytp-ad-preview-image"});g.K(this,this.I);this.F=new lP(this.g,this.l);g.K(this,this.F);this.F.ca(this.I.element);this.I.ca(this.B.element);this.B.ca(this.element);this.P=new g.fQ(this.B,400,!1,100);g.K(this,
this.P);this.L=0;this.hide()};
iQ=function(a){a.P.hide(function(){return a.hide()})};
jQ=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-skip-button-slot"},(void 0===c?0:c)?"persisting-skip-button":"skip-button");this.B=null;this.F=!1;this.A=new g.bP({D:"span",J:"ytp-ad-skip-button-container"});g.K(this,this.A);this.A.ca(this.element);this.o=this.C=null;this.I=new g.fQ(this.A,500,!1,100);g.K(this,this.I);this.hide()};
kQ=function(a,b,c,d){d=void 0===d?!1:d;VP.call(this,a,b,{D:"div",J:"ytp-ad-skip-ad-slot"},"skip-ad",c);this.F=!1;this.I=0;this.B=this.A=null;this.L=d;this.hide()};
lQ=function(a,b){if(!a.F)if(a.F=!0,a.A&&(b?iQ(a.A):a.A.hide()),b){var c=a.B;c.I.show();c.show()}else a.B.show()};
mQ=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-persisting-overlay",G:[{D:"div",J:"ytp-ad-persisting-overlay-skip"}]},"persisting-overlay");this.A=this.Z["ytp-ad-persisting-overlay-skip"];this.o=c;g.K(this,this.o);this.hide()};
g.nQ=function(a){var b=Math.abs(Math.floor(a)),c=Math.floor(b/86400),d=Math.floor(b%86400/3600),e=Math.floor(b%3600/60);b=Math.floor(b%60);var f="";0<c&&(f+=c+":",10>d&&(f+="0"));if(0<c||0<d)f+=d+":",10>e&&(f+="0");f+=e+":";10>b&&(f+="0");f+=b;return 0<=a?f:"-"+f};
g.oQ=function(a){return(!g.va(a.button)||0==a.button)&&!a.shiftKey&&!a.altKey&&!a.metaKey&&!a.ctrlKey};
pQ=function(a,b,c){VP.call(this,a,b,{D:"span",J:"ytp-ad-duration-remaining"},"ad-duration-remaining",c);this.A=null;this.hide()};
qQ=function(a,b){X.call(this,a,b,{D:"div",J:"ytp-ad-feedback-dialog-background",G:[{D:"div",J:"ytp-ad-feedback-dialog-container",G:[{D:"div",J:"ytp-ad-feedback-dialog-form",G:[{D:"div",J:"ytp-ad-feedback-dialog-title",G:[{D:"span",G:["{{title}}"]}]},{D:"div",J:"ytp-ad-info-dialog-feedback-options"},{D:"div",J:"ytp-ad-feedback-dialog-confirm-container",G:[{D:"button",J:"ytp-ad-feedback-dialog-cancel-button",G:["{{cancelLabel}}"]},{D:"button",J:"ytp-ad-feedback-dialog-confirm-button",G:["{{confirmLabel}}"]}]}]}]}]},
"ad-info-dialog");this.B=[];this.o=null;this.C=this.Z["ytp-ad-feedback-dialog-cancel-button"];this.F=this.Z["ytp-ad-feedback-dialog-confirm-button"];this.I=this.Z["ytp-ad-info-dialog-feedback-options"];this.L=this.Z["ytp-ad-feedback-dialog-title"];this.A=null;this.hide()};
rQ=function(a,b){this.l=b;this.g=new g.bP({D:"label",J:"ytp-ad-feedback-dialog-reason-label",G:[{D:"input",J:"ytp-ad-feedback-dialog-reason-input",N:{type:"radio",name:"feedback-reason-group"}},{D:"span",J:"ytp-ad-feedback-dialog-reason-text",G:[g.nD(a)]}]});this.o=this.g.Z["ytp-ad-feedback-dialog-reason-input"]};
sQ=function(a,b,c,d){c=void 0===c?[]:c;d=void 0===d?"confirm-dialog":d;X.call(this,a,b,{D:"div",W:["ytp-ad-confirm-dialog-background"],G:[{D:"div",J:"ytp-ad-confirm-dialog-container",G:[{D:"div",W:["ytp-ad-confirm-dialog"].concat(c),G:[{D:"div",J:"ytp-ad-confirm-dialog-title",G:["{{title}}"]},{D:"div",J:"ytp-ad-confirm-dialog-messages"},{D:"div",J:"ytp-ad-confirm-dialog-confirm-container",G:[{D:"button",J:"ytp-ad-confirm-dialog-cancel-button",G:["{{cancelLabel}}"]},{D:"button",J:"ytp-ad-confirm-dialog-confirm-button",
G:["{{confirmLabel}}"]}]}]}]},{D:"button",W:["ytp-ad-confirm-dialog-close-overlay-button","ytp-ad-button","ytp-ad-button-link"],G:[{D:"span",J:"ytp-ad-button-icon",G:[g.uP()]}]}]},d);this.A=this.Z["ytp-ad-confirm-dialog-close-overlay-button"];this.B=this.Z["ytp-ad-confirm-dialog-cancel-button"];this.F=this.Z["ytp-ad-confirm-dialog-confirm-button"];this.C=this.Z["ytp-ad-confirm-dialog-messages"];this.da=new g.dt;g.K(this,this.da);this.o=null;this.hide()};
lba=function(a,b){if(b.title){var c=g.nD(b.title);a.updateValue("title",c)}if(b.dialogMessages){c=g.q(b.dialogMessages);for(var d=c.next();!d.done;d=c.next())d=g.mD(d.value),a.C.appendChild(d)}b.cancelLabel&&(c=g.nD(b.cancelLabel),a.updateValue("cancelLabel",c),a.da.M(a.B,"click",function(b){return a.Co(b)}));
b.confirmLabel&&(c=g.nD(b.confirmLabel),a.updateValue("confirmLabel",c),a.da.M(a.F,"click",function(b){return a.Eo(b)}));
a.da.M(a.A,"click",function(b){return a.Do(b)})};
tQ=function(a,b){sQ.call(this,a,b,[],"ad-mute-confirm-dialog")};
uQ=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-info-dialog-background",G:[{D:"div",J:"ytp-ad-info-dialog-container",G:[{D:"div",J:"ytp-ad-info-dialog-form",G:[{D:"div",J:"ytp-ad-info-dialog-title",G:["{{title}}"]},{D:"div",J:"ytp-ad-info-dialog-ad-reasons"},{D:"div",J:"ytp-ad-info-dialog-mute-container"},{D:"div",J:"ytp-ad-info-dialog-confirm-container",G:[{D:"button",J:"ytp-ad-info-dialog-confirm-button",G:["{{confirmLabel}}"]}]}]}]}]},"ad-info-dialog");this.o=this.B=null;this.I=this.Z["ytp-ad-info-dialog-confirm-button"];
this.P=this.Z["ytp-ad-info-dialog-mute-container"];this.V=this.Z["ytp-ad-info-dialog-ad-reasons"];this.C=this.A=null;this.L=c;this.F=null;this.hide()};
vQ=function(a,b,c){LP.call(this,a,b,["ytp-ad-info-icon-button"],"ad-info-icon-button");this.o=c;g.K(this,this.o);this.hide()};
wQ=function(a,b,c){X.call(this,a,b,{D:"span",J:"ytp-ad-info-overlay"},"ad-info-overlay");this.o=this.B=this.A=null;this.C=c;this.hide()};
xQ=function(a,b,c,d){c=void 0===c?[]:c;d=void 0===d?"toggle-button":d;var e=gM("ytp-ad-toggle-button-input");X.call(this,a,b,{D:"div",W:["ytp-ad-toggle-button"].concat(c),G:[{D:"label",J:"ytp-ad-toggle-button-label",N:{"for":e},G:[{D:"span",J:"ytp-ad-toggle-button-icon",G:[{D:"span",J:"ytp-ad-toggle-button-untoggled-icon",G:["{{untoggledIconTemplateSpec}}"]},{D:"span",J:"ytp-ad-toggle-button-toggled-icon",G:["{{toggledIconTemplateSpec}}"]}]},{D:"input",J:"ytp-ad-toggle-button-input",N:{id:e,type:"checkbox"}},
{D:"span",J:"ytp-ad-toggle-button-text",G:["{{buttonText}}"]},{D:"span",J:"ytp-ad-toggle-button-tooltip",G:["{{tooltipText}}"]}]}]},d);this.B=this.Z["ytp-ad-toggle-button"];this.o=this.Z["ytp-ad-toggle-button-input"];this.P=this.Z["ytp-ad-toggle-button-icon"];this.F=this.Z["ytp-ad-toggle-button-untoggled-icon"];this.C=this.Z["ytp-ad-toggle-button-toggled-icon"];this.L=this.Z["ytp-ad-toggle-button-text"];this.A=null;this.I=!1;this.hide()};
yQ=function(a){a.I&&(a.isToggled()?(g.Ih(a.F,!1),g.Ih(a.C,!0)):(g.Ih(a.F,!0),g.Ih(a.C,!1)))};
mba=function(a,b){var c=null;a.A&&(c=(b?[a.A.defaultServiceEndpoint,a.A.defaultNavigationEndpoint]:[a.A.toggledServiceEndpoint]).filter(function(a){return null!=a}));
return c||[]};
zQ=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-instream-user-sentiment-container"},"instream-user-sentiment",void 0===c?null:c);this.o=null;this.B=new xQ(this.g,this.l,["ytp-ad-instream-user-sentiment-like-button"]);g.K(this,this.B);this.B.ca(this.element);this.A=new xQ(this.g,this.l,["ytp-ad-instream-user-sentiment-dislike-button"]);g.K(this,this.A);this.A.ca(this.element);this.C=new g.fQ(this,400,!1,500);g.K(this,this.C);this.hide()};
nba=function(a){a.C.hide(function(){return a.hide()})};
AQ=function(a,b){X.call(this,a,b,{D:"span",J:"ytp-ad-simple-ad-badge"},"simple-ad-badge");this.hide()};
BQ=function(a,b){LP.call(this,a,b,["ytp-ad-visit-advertiser-button"],"visit-advertiser")};
CQ=function(a,b){this.l=a;this.g=b};
DQ=function(a,b){return a.l+b*a.getLength()};
EQ=function(a,b,c){if(!a.getLength())return null!=c?c:window.Infinity;a=(b-a.l)/a.getLength();return g.Vc(a,0,1)};
FQ=function(a,b){g.bP.call(this,{D:"div",J:"ytp-ad-persistent-progress-bar-container",G:[{D:"div",J:"ytp-ad-persistent-progress-bar"}]});this.o=a;this.l=b;g.K(this,this.l);this.C=this.Z["ytp-ad-persistent-progress-bar"];this.g=-1;this.M(a,"presentingplayerstatechange",this.B);this.hide();this.B()};
GQ=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-player-overlay",G:[{D:"div",J:"ytp-ad-player-overlay-instream-info"},{D:"div",J:"ytp-ad-player-overlay-skip-or-preview"},{D:"div",J:"ytp-ad-player-overlay-progress-bar"},{D:"div",J:"ytp-ad-player-overlay-instream-user-sentiment"}]},"player-overlay");this.A=this.Z["ytp-ad-player-overlay-instream-info"];this.B=this.Z["ytp-ad-player-overlay-skip-or-preview"];this.F=this.Z["ytp-ad-player-overlay-progress-bar"];this.C=this.Z["ytp-ad-player-overlay-instream-user-sentiment"];
this.o=c;g.K(this,this.o);this.hide()};
HQ=function(a,b){cP.call(this,a);this.ac=b};
oba=function(a,b,c){var d=a.ha();g.U(b).F&&g.hP(b.app.L,d,a);g.U(b).F&&g.iP(b.app.L,d,c)};
IQ=function(a){g.J.call(this);this.Nb=a;this.ac=new g.R;g.K(this,this.ac);this.g=new window.Set};
pba=function(a,b,c){if(a.g.has(b))throw Error("View already registered");a.g.add(b);g.De(b,function(){return a.g["delete"](b)});
c&&oba(b,a.Nb,c)};
JQ=function(a,b){for(var c=g.q(a.g),d=c.next();!d.done;d=c.next())a.Va(d.value,b)};
KQ=function(a,b){IQ.call(this,a);this.Ol=b;this.view=this.Pj();g.K(this,this.view);this.B=null;this.l=[];this.macros={};this.A=!1;this.hide()};
LQ=function(a){for(var b={},c=g.q(Object.entries(fP(a.Nb,a.Ol))),d=c.next();!d.done;d=c.next()){var e=g.q(d.value);d=e.next().value;e=e.next().value;b[d]=e.toString()}Object.assign(b,a.macros);return b};
MQ=function(){g.W.call(this,{D:"div",J:"ad-carousel",G:[{D:"div",J:"ad-carousel-clip",G:[{D:"ul",W:["ad-carousel-list","ad-carousel-list-animation"]}]}]});var a=this.Z["ad-carousel"];this.o=new g.W({D:"button",W:["ad-carousel-nav-button","ad-carousel-nav-prev"],N:{type:"button",onclick:"return false;"},G:[{D:"span",W:["ad-carousel-prev-icon","yt-uix-tooltip","yt-sprite"],N:{"data-tooltip-text":"Prev",title:"Prev"}}]});g.K(this,this.o);this.o.ea("click",this.C,this);this.o.ca(a);this.l=new g.W({D:"button",
W:["ad-carousel-nav-button","ad-carousel-nav-next"],N:{type:"button",onclick:"return false;"},G:[{D:"span",W:["ad-carousel-next-icon","yt-uix-tooltip","yt-sprite"],N:{"data-tooltip-text":"Next",title:"Next"}}]});g.K(this,this.l);this.l.ea("click",this.B,this);this.l.ca(a);this.A=this.Z["ad-carousel-list"];this.g=0;this.za=[]};
OQ=function(a){a.A&&g.mh(a.A,"left",(2>a.za.length?0:-a.g*a.za[1].element.clientWidth)+"px");g.JM(a.o,0<a.g);g.JM(a.l,a.g<a.za.length-NQ(a))};
NQ=function(a){return 2>a.za.length?1:Math.round((a.element.clientWidth-a.za[0].element.clientWidth)/a.za[1].element.clientWidth)+1};
PQ=function(a){HQ.call(this,!0,a);this.Uc=new MQ};
QQ=function(a){HQ.call(this,!1,a);this.l=new g.W({D:"div",J:"iv-btp-card",G:[{D:"a",J:"iv-btp-card-content",G:[{D:"div",G:["{{cards}}"]}]}]});g.K(this,this.l);a={D:"div",J:"iv-btp-card-merchant",G:[{D:"span",J:"iv-btp-card-merchant-text",G:["{{merchant}}"]}]};this.A=new g.CM({D:"div",W:["iv-btp-small-card","yt-uix-hovercard-target"],N:{"data-position":"bottomright","data-orientation":"vertical"},G:[{D:"div",W:["iv-btp-card-image","yt-uix-hovercard-anchor"],G:["{{image}}"]},{D:"div",J:"iv-btp-card-info",
G:[{D:"span",J:"iv-btp-card-action",G:["{{price}}"]},a]},{D:"div",W:["yt-uix-hovercard-content","iv-btp-hovercard"],G:["{{hovercard}}"]}]});g.K(this,this.A);this.g=new g.CM({D:"div",J:"iv-btp-large-card",G:[{D:"div",J:"iv-btp-card-image",G:[{D:"span"},{D:"div",J:"iv-btp-card-image-aligned",G:["{{image}}"]}]},{D:"div",J:"iv-btp-card-info",G:[{D:"div",J:"iv-btp-card-text-box",G:[{D:"div",J:"iv-btp-card-text-valign",G:[{D:"div",W:["yt-ui-ellipsis","yt-ui-ellipsis-4","iv-btp-card-headline"],G:["{{headline}}"]}]}]},
{D:"span",J:"iv-btp-card-action",G:["{{price}}"]},a,{D:"div",G:["{{review}}"]}]}]});g.K(this,this.g);this.o=new g.CM({D:"div",J:"iv-btp-hovercard-text-box",G:[{D:"a",G:[{D:"div",W:["yt-ui-ellipsis","yt-ui-ellipsis-4","iv-btp-hovercard-headline"],G:["{{headline}}"]}]},{D:"div",J:"iv-btp-hovercard-info",G:[{D:"span",J:"iv-btp-hovercard-action",G:["{{price}}"]},a]},{D:"div",G:["{{review}}"]}]});g.K(this,this.o);this.B=new g.CM({D:"div",J:"iv-btp-card-review",G:[{D:"div",J:"iv-btp-card-rating",G:[{D:"span",
J:"iv-btp-card-rating-bg",G:[{D:"span",J:"iv-btp-card-rating-fg"}]}]},{D:"span",J:"iv-btp-card-reviews",G:["{{reviewText}}"]}]});g.K(this,this.B);this.A.updateValue("hovercard",this.o);this.l.updateValue("cards",[this.A,this.g]);this.Qd()};
RQ=function(a,b,c){c=c?g.mD(c):null;a.updateValue(b,c)};
SQ=function(a,b){KQ.call(this,a,b);this.o=null;this.Qd()};
TQ=function(a){HQ.call(this,!0,a);this.g=new g.W({D:"div",J:"iv-btp-companion",G:[{D:"div",J:"iv-btp-block-clicks"},{D:"div",J:"iv-btp-attribution",G:[{D:"span",J:"iv-btp-title",G:["{{shopText}}"]},{D:"div",W:["yt-uix-hovercard","ad-info-container"],G:[{D:"span",J:"iv-btp-sponsored",G:[{D:"span",G:["{{sponsoredText}}"]},{D:"span",J:"yt-uix-hovercard-target",N:{"data-position":"topright","data-orientation":"horizontal"},G:[{D:"span",J:"ad-info-icon"}]}]},{D:"div",J:"yt-uix-hovercard-content",G:[{D:"span",
J:"ytp-ad_settings",G:["{{adInfoText}}"]}]}]}]},{D:"div",G:["{{content}}"]}]});g.K(this,this.g);this.o=this.g.Z["iv-btp-block-clicks"];this.l=new OP;g.K(this,this.l);this.A=fba(this.l,this.g.element)};
UQ=function(a,b,c){c=c?g.mD(c):null;a.g.updateValue(b,c)};
WQ=function(a,b){KQ.call(this,a,b);this.da=new g.dt(this);g.K(this,this.da);this.Qd();this.Kg=[];this.Bd=null;this.Uc=new VQ.Il(this.ac);g.K(this,this.Uc);dP(this.view,this.Uc)};
qba=function(a){var b=a.se();g.Ih(b.o,!0);Rf([a.Bd,hg(1E3)]).then(function(){g.Ih(b.o,!1)})};
XQ=function(a){HQ.call(this,!0,a);var b=this;this.A=this.l=0;this.g=new g.W({D:"div",J:"iv-cards-slider",G:[{D:"div",J:"iv-cards-slider-body",G:[{D:"ul",J:"iv-cards-slider-list"}]},{D:"button",W:["iv-cards-slider-button","iv-cards-slider-prev"],N:{type:"button",onclick:";return false;"},G:[{D:"span",W:["iv-cards-slider-prev-icon","yt-sprite"]}]},{D:"button",W:["iv-cards-slider-button","iv-cards-slider-next"],N:{type:"button",onclick:";return false;"},G:[{D:"span",W:["iv-cards-slider-next-icon","yt-sprite"]}]}]});
this.C=g.kd("iv-cards-slider-list",this.g.element);if(this.o=g.kd("iv-cards-slider-prev",this.g.element))this.g.M(this.o,"click",function(){b.ac.O("prevbuttonclick",b)}),g.Ih(this.o,!1);
(this.B=g.kd("iv-cards-slider-next",this.g.element))&&this.g.M(this.B,"click",function(){b.ac.O("nextbuttonclick",b)});
g.K(this,this.g)};
YQ=function(a){a.C.style.left=125*-a.l+"px";a.o&&g.Ih(a.o,0<a.l);a.B&&g.Ih(a.B,a.l<a.A-3)};
ZQ=function(a){HQ.call(this,!0,a);this.g=new g.W({D:"div",J:"iv-cards-companion",G:[{D:"div",J:"iv-cards-attribution",G:[{D:"span",W:["yt-badge","yt-badge-ad"],G:["{{adBadgeText}}"]},{D:"a",J:"ad-companion-clickthrough",N:{target:"_blank"},G:["{{shopText}}"]},{D:"div",W:["yt-uix-hovercard","ad-info-container"],G:[{D:"span",J:"yt-uix-hovercard-target",N:{"data-position":"topright","data-orientation":"horizontal",hidden:"true"},G:[{D:"span",J:"ad-info-icon"}]},{D:"div",J:"yt-uix-hovercard-content",
G:[{D:"p",G:["{{adSettingsText}}"]}]}]}]},{D:"div",G:["{{content}}"]}]});g.K(this,this.g);this.l=new jM;this.o=this.l.showCompanion(this.g.element,300,250);this.Qd()};
$Q=function(a){HQ.call(this,!1,a);this.g=new g.W({D:"li",J:"iv-cards-slider-item",G:[{D:"div",J:"iv-cards-slider-unit",G:[{D:"a",G:[{D:"div",J:"iv-cards-slider-image",G:["{{image}}"]},{D:"span",W:["yt-ui-ellipsis","yt-ui-ellipsis-4","iv-cards-slider-text"],G:["{{headline}}"]},{D:"span",J:"iv-cards-slider-action",G:["{{price}}"]}]}]}]});g.K(this,this.g);this.Qd()};
aR=function(a,b){KQ.call(this,a,b);var c=this;this.o=null;this.ac.subscribe("offerclick",function(){return c.onClick()})};
cR=function(a,b){KQ.call(this,a,b);this.da=new g.dt(this);g.K(this,this.da);this.qq=[];this.wo=null;this.Qd();this.Kg=[];this.Bd=null;this.bh=new bR.Il(this.ac);g.K(this,this.bh);dP(this.view,this.bh)};
dR=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-survey-answer"},"survey-answer");this.C=c;this.A=this.Z["ytp-ad-survey-answer"];this.o=null;this.B="";this.hide()};
eR=function(a,b){X.call(this,a,b,{D:"div",J:"ytp-ad-survey-none-of-the-above"},"survey-none-of-the-above");this.A=this.Z["ytp-ad-survey-none-of-the-above"];this.o=null;this.hide()};
fR=function(a,b){LP.call(this,a,b,["ytp-ad-survey-submit-button"],"survey-submit")};
gR=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-survey-player-overlay",G:[{D:"div",J:"ytp-ad-survey-player-overlay-instream-info"},{D:"div",J:"ytp-ad-survey-player-overlay-skip-preview-submit",G:[{D:"div",J:"ytp-ad-survey-player-overlay-skip-or-preview"},{D:"div",J:"ytp-ad-survey-player-overlay-submit"}]}]},"survey-player-overlay");this.F=this.Z["ytp-ad-survey-player-overlay-instream-info"];this.A={};this.I=this.Z["ytp-ad-survey-player-overlay-skip-or-preview"];this.o=null;this.L=this.Z["ytp-ad-survey-player-overlay-submit"];
this.B=null;this.C=c;g.K(this,this.C);this.hide()};
hR=function(a,b,c,d,e){X.call(this,a,b,{D:"div",J:"ytp-ad-survey-question",G:[{D:"div",W:["ytp-ad-survey-question-text","ytp-ad-survey-question-foreground"]},{D:"div",W:["ytp-ad-survey-answers","ytp-ad-survey-question-foreground"]},{D:"div",W:["ytp-ad-survey-question-player-overlay","ytp-ad-survey-question-foreground"]},{D:"div",J:"ytp-ad-survey-question-background"}]},c);this.L=d;this.question=this.Z["ytp-ad-survey-question"];this.sa=this.Z["ytp-ad-survey-question-background"];this.V=this.Z["ytp-ad-survey-question-text"];
this.answers=this.Z["ytp-ad-survey-answers"];this.ba=this.Z["ytp-ad-survey-question-player-overlay"];this.I=null;this.B=[];this.o=null;this.F=(0,g.H)();this.C=null;this.ma=e};
iR=function(a,b,c){var d=new dR(a.g,a.l,a.L);d.ca(a.answers);d.init(gM("survey-answer"),b,c);a.B.push(d)};
kR=function(a,b){a.C=b;var c=b.background;c&&c.instreamSurveyAdBackgroundImageRenderer&&(c=(c=c.instreamSurveyAdBackgroundImageRenderer.image)&&kP(c)||"",g.tb(c)?g.Q(Error("Found ThumbnailDetails without valid image URL"),"WARNING"):g.mh(a.sa,"backgroundImage","url("+c+")"));a.ma&&jR(a)};
jR=function(a){a.F=(0,g.H)();if(a.C){var b=a.C;if(null==b.durationMilliseconds||void 0==b.durationMilliseconds)g.Q(Error("durationMilliseconds unset for SurveyAdCommon"),"WARNING");else{a.o=new ZP(b.durationMilliseconds,a.l);g.K(a,a.o);if(b.timeoutCommands){var c=b.timeoutCommands;a.o.subscribe("o",function(){return a.L.Jc(c,a.macros)})}if(a.o&&b.instreamAdPlayerOverlay&&b.instreamAdPlayerOverlay.instreamSurveyAdPlayerOverlayRenderer){var d=new gR(a.g,a.l,a.o);
d.ca(a.ba);d.init(gM("survey-player-overlay"),b.instreamAdPlayerOverlay.instreamSurveyAdPlayerOverlayRenderer,a.macros);a.I=d;g.K(a,d);a.lv()}a.o&&b.durationMilliseconds&&0<b.durationMilliseconds&&(b=new FQ(a.g,a.o),b.ca(a.ba),g.K(a,b))}}else g.Q(Error("addCommonComponents() needs to be called before starting countdown."))};
rba=function(a){function b(a){return{toString:function(){return a()}}}
a.macros.SURVEY_LOCAL_TIME_EPOCH_S=b(function(){var a=new Date;return Math.round(a.valueOf()/1E3)+-60*a.getTimezoneOffset()});
a.macros.SURVEY_ELAPSED_MS=b(function(){return(0,g.H)()-a.F})};
lR=function(a,b,c,d){hR.call(this,a,b,"survey-question-multi-select",c,d);this.A=null;this.ia=[];this.P=null;this.hide()};
sba=function(a,b,c){a.A=new eR(a.g,a.l);a.A.ca(a.answers);a.A.init(gM("survey-none-of-the-above"),b,c)};
tba=function(a){a.B.forEach(function(a){a.o.toggleButton(!1)});
mR(a,!0)};
mR=function(a,b){var c=a.I,d=uba(a),e=b;e=void 0===e?!1:e;c.o&&(d?c.o.hide():c.o.show(),e&&c.o instanceof kQ&&!c.o.F&&lQ(c.o,!1));c.B&&(d?c.B.show():c.B.hide())};
uba=function(a){return a.B.some(function(a){return a.o.isToggled()})||a.A.o.isToggled()};
nR=function(a,b,c,d){hR.call(this,a,b,"survey-question-single-select",c,d);this.hide()};
oR=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-survey",G:[{D:"div",J:"ytp-ad-survey-title"},{D:"div",J:"ytp-ad-survey-questions"}]},"survey");this.A=c;this.C=this.Z["ytp-ad-survey-title"];this.B=this.Z["ytp-ad-survey-questions"];this.o=[];this.hide()};
pR=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-survey-interstitial",G:[{D:"div",J:"ytp-ad-survey-interstitial-modal",G:[{D:"div",J:"ytp-ad-survey-interstitial-contents",G:[{D:"div",J:"ytp-ad-survey-interstitial-text"},{D:"div",J:"ytp-ad-survey-interstitial-logo"}]},{D:"div",J:"ytp-ad-survey-interstitial-action"}]}]},"survey-interstitial");this.A=c;this.F=this.Z["ytp-ad-survey-interstitial-action"];this.P=this.Z["ytp-ad-survey-interstitial"];this.o=null;this.L=this.Z["ytp-ad-survey-interstitial-modal"];
this.V=this.Z["ytp-ad-survey-interstitial-text"];this.I=this.Z["ytp-ad-survey-interstitial-logo"];this.C=null;this.da=new g.dt;g.K(this,this.da);this.B=new g.fQ(this,500,!1,300);g.K(this,this.B)};
vba=function(a,b,c){var d={adLifecycleCommand:{action:"START_LINEAR_AD"}},e=[d];c.dismissCommands&&(e=c.dismissCommands);var f=b.target==a.P,k=a.o.element.contains(b.target);a.B.hide(function(){e.length&&f?a.A.Jc(e,a.macros):k&&a.A.Jc([d],a.macros)})};
qR=function(a,b){var c=b&&kP(b)||"";g.tb(c)?kr(Error("Found ThumbnailDetails without valid image URL")):g.mh(a,"backgroundImage","url("+c+")")};
rR=function(a){g.R.call(this);this.o=a;this.l=new g.dt(this);g.K(this,this.l);this.B=wba;this.A=null;this.l.M(this.o,"presentingplayerstatechange",this.C);this.A=this.l.M(this.o,"progresssync",this.F)};
sR=function(a,b,c,d){switch(a){case "invideo-overlay":return new cQ(b,c);case "persisting-overlay":return new mQ(b,c,new rR(b));case "player-overlay":return new GQ(b,c,new rR(b));case "pla-shelf":return new WQ(b,c);case "shopping-companion":return new cR(b,c);case "survey":return new oR(b,c,d);case "backfill-mpu-companion":return new UP(b,c);case "ad-action-interstitial":return new $P(b,c);case "action-companion":return new NP(b,c);case "ad-text-interstitial":return new aQ(b,c);case "survey-interstitial":return new pR(b,
c,d);default:return null}};
tR=function(a){g.dt.call(this);this.Nb=a;this.M(this.Nb,"onAdUxUpdate",this.F)};
uR=function(a,b){tR.call(this,a);this.A=b;this.o=null;this.g=new window.Map};
vR=function(a){tR.call(this,a)};
wR=function(a,b){tR.call(this,a);this.A=a;this.C=b;this.o=null;this.g={};var c=new g.W({D:"div",W:["video-ads","ytp-ad-module"]});g.K(this,c);this.B=new eP(c.element);g.K(this,this.B);g.TL(this.A,c.element,4)};
xR=function(a,b){var c=gc(a.g,b.id,null);null!=c||g.Q(Error("Component not found for element id: "+b.id),"WARNING");return c||null};
yR=function(a){g.bM.call(this,a);var b=this;this.l=null;this.created=!1;var c=g.U(a);g.uB(c)&&!g.BB(c)&&(c=function(){return b.l},g.K(this,new wR(a,c)),g.K(this,CN(a)?new vR(a):new uR(a,c)))};
zR=function(a,b,c){g.J.call(this);this.ia=b;this.ma=c;this.H=this.P=this.F=this.A=this.U=this.V=this.R=this.o=this.K=this.l=null;this.aa={};this.X={};this.fa=null;this.g=a;this.I=this.C=this.L=this.B=null;this.ba=g.U(a).experiments.g("web_player_defer_modules")};
g.AR=function(a){var b=g.U(a.g);if(g.JB(b)||b.Rb||!b.ud&&!b.ia)return!1;var c=a.g.Ca();if(2==c)return!1;if(3==c)return b.experiments.g("desktop_enable_autoplay");a=a.g.Y();return!!a&&(!a.oa||b.experiments.g("allow_live_autoplay"))};
BR=function(a){a.ba&&(a.km(),a.im(),a.jm())};
CR=function(a){if(a=a.g.Y(1).getPlayerResponse())if(a=a.adPlacements)for(var b=0;b<a.length;b++)if(a[b].adPlacementRenderer)return!0;return!1};
FR=function(a,b,c,d){try{if(d){var e=g.DR[b];if(e)return new e(a.g);"creatorendscreen"==b?ER(a,"annotations_module",c):ER(a,b,c)}else g.QL(a.g,b)}catch(f){g.QL(a.g,b),g.Q(f)}return null};
GR=function(a,b){a.l&&(b||a.l.Dc())&&(g.Ee(a.l),a.l=null);a.K&&(b||a.K.Dc())&&(g.Ee(a.K),a.K=null);a.o&&(b||a.o.Dc()?(g.Ee(a.o),a.o=null):a.o.loaded&&a.o.unload());a.R&&(b||a.R.Dc())&&(g.Ee(a.R),a.R=null);a.V&&(b||a.V.Dc())&&(g.Ee(a.V),a.V=null);a.U&&(b||a.U.Dc())&&(g.Ee(a.U),a.U=null);a.A&&(b||a.A.Dc())&&(g.Ee(a.A),a.A=null);a.F&&(b||a.F.Dc())&&(g.Ee(a.F),a.F=null);a.P&&(b||a.P.Dc())&&(g.Ee(a.P),a.P=null);a.H&&(b||a.H.Dc())&&(g.Ee(a.H),a.H=null);a.L&&(b||a.L.Dc())&&(g.Ee(a.L),a.L=null);a.C&&(b||
a.C.Dc())&&(g.Ee(a.C),a.C=null);a.B&&(b||a.B.Dc())&&(g.Ee(a.B),a.B=null)};
g.xL=function(a){return g.U(a.g).Ab?a.L:null};
ER=function(a,b,c){if(a.ia){for(var d=a.ia+b+".js",e=window.document.getElementsByTagName("SCRIPT"),f=!1,k,l=0;l<e.length;l++){var m=e[l];m.src==d&&(k=m)}k||(k=g.zd("SCRIPT"),f=!0);var n=(0,g.A)(function(){this.ga()||c.call(this)},a),p=(0,g.A)(function(){this.ga()||g.QL(this.g,b)},a);
k.onload=g.B(function(a){wf(n);a&&a()},k.onload);
k.onerror=g.B(function(a){wf(p);a&&a()},k.onerror);
k.onreadystatechange=g.B(function(a){switch(k.readyState){case "loaded":case "complete":wf(n,this)}a&&a()},k.onreadystatechange);
f&&((e=g.U(a.g).gj)&&k.setAttribute("nonce",e),g.Tc(k,g.Vd(d)),d=window.document.getElementsByTagName("HEAD")[0]||window.document.body,d.insertBefore(k,d.firstChild),g.De(a,function(){k.parentNode&&k.parentNode.removeChild(k);g.DR[b]=null;"annotations_module"==b&&(g.DR.creatorendscreen=null)}))}};
HR=function(a){var b=a.g,c=["html5-video-player"];b.H&&c.push("ytp-dni");var d=b.experiments.g("web_player_tabindex_killswitch")?"-1":"0";g.W.call(this,{D:"div",W:c,N:{tabindex:d,id:a.ma.attrs.id},G:[{D:"div",J:"html5-video-container",N:{"data-layer":"0"}}]});b.rk&&this.Ik("ytp-transparent");g.Bs(this.element,"version",a.ma.assets.js);this.app=a;this.l=this.Z["html5-video-container"];this.X=!!this.l;this.o=new g.Xg(0,0,0,0);this.g=null;this.B=new g.Xg(0,0,0,0);this.F=this.L=this.K=window.NaN;this.H=
!1;this.C=window.NaN;this.I=!1;this.A=null;this.addEventListener=(0,g.A)(this.element.addEventListener,this.element);this.removeEventListener=(0,g.A)(this.element.removeEventListener,this.element);this.dispatchEvent=function(){};
this.P=(0,g.A)(function(){this.element.focus()},this);
CB(b)&&"blazer"!=b.g&&"mweb-polymer"!=b.g&&window.matchMedia&&(this.R="desktop-polymer"==b.g?[{query:window.matchMedia("(max-width: 656px)"),size:new g.bd(426,240)},{query:window.matchMedia("(max-width: 856px)"),size:new g.bd(640,360)},{query:window.matchMedia("(max-width: 999px)"),size:new g.bd(854,480)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.bd(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.bd(854,480)},{query:window.matchMedia("(min-width: 1000px)"),
size:new g.bd(640,360)}]:[{query:window.matchMedia("(max-width: 656px)"),size:new g.bd(426,240)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.bd(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.bd(854,480)},{query:window.matchMedia("(min-width: 657px)"),size:new g.bd(640,360)}]);this.V=!0;g.Au({YTP_ADVERTISEMENT:"Advertisement",YTP_AD_BADGE:"Ad",YTP_AD_POD_POSITION:"$AD_INDEX of $ADS_COUNT",YTP_AD_PREVIEW_NONSKIPPABLE:"Video will play after ad",
YTP_AD_PREVIEW_NONSKIPPABLE_COUNTDOWN:"Your video will begin in $TIME_REMAINING",YTP_AIRPLAY:"AirPlay",YTP_AUDIO_TRACK_TITLE:"Audio track",YTP_AUTO:"Auto",YTP_CAN_SKIP_AD_SOON:"You can skip to video in $TIME_REMAINING",YTP_CARDS_BUTTON_ARIA_LABEL:"Show cards",YTP_CARDS_BUTTON_INFO:"Info",YTP_CARDS_BUTTON_SHOPPING:"Shopping",YTP_COPY_DEBUG_INFO:"Copy debug info",YTP_COPY_VIDEO_URL:"Copy video URL",YTP_COPY_VIDEO_URL_AT_TIME:"Copy video URL at current time",YTP_GET_DEBUG_INFO:"Get debug info",YTP_GET_VIDEO_URL:"Get video URL",
YTP_GET_VIDEO_URL_AT_TIME:"Get video URL at current time",YTP_GET_EMBED:"Get embed code",YTP_PLAYBACK_SPEED_CHANGED:"Speed is $RATE",YTP_DEFAULT_VIEW:"Default view",YTP_EMBED_COPY:"Copy embed code",YTP_ERROR_GENERIC_WITHOUT_LINK:"An error occurred. Please try again later.",YTP_ERROR_GENERIC_WITH_LINK_AND_CPN:"An error occurred. Please try again later. (Playback ID: $CPN) $BEGIN_LINKLearn More$END_LINK",YTP_EXIT_FULLSCREEN:"Exit full screen",YTP_FULLSCREEN_GENERIC_ERROR:"Full screen is unavailable. $BEGIN_LINKLearn More$END_LINK",
YTP_FULLSCREEN_UNSUPPORTED_ERROR:"Your browser doesn't support full screen. $BEGIN_LINKLearn More$END_LINK",YTP_VOLUME_UNSUPPORTED_ERROR:"Your browser doesn't support changing the volume. $BEGIN_LINKLearn More$END_LINK",YTP_FULLSCREEN:"Full screen",YTP_GOTO_LIVE_TOOLTIP:"Skip ahead to live broadcast.",YTP_LIVE:"Live",YTP_LIVE_NOW:"LIVE NOW",YTP_LOOP:"Loop",YTP_MORE:"More",YTP_MORE_VIDEOS:"More videos",YTP_MDX_TOOLTIP:"Play on TV",YTP_MUTE:"Mute",YTP_NEXT:"Next",YTP_NORMAL_SPEED:"Normal",YTP_ON:"On",
YTP_OFF:"Off",YTP_OPTIONS:"Options",YTP_PREVIOUS:"Previous",YTP_PLAYBACK_STALLED_AT_START:"If playback doesn't begin shortly, try restarting your device.",YTP_MISSING_FORMATS:"Missing options?",YTP_PLAYLIST:"Playlist",YTP_QUALITY_TITLE:"Quality",YTP_REPLAY:"Replay",YTP_TROUBLESHOOT_ISSUE:"Troubleshoot playback issue",YTP_SETTINGS:"Settings",YTP_SHARE:"Share",YTP_SHARE_LINK:"Share link",YTP_SHARE_WITH_PLAYLIST_2:"Include playlist",YTP_SHOW_VIDEO_INFO:"Stats for nerds",YTP_SIGN_IN:"Sign in",YTP_SKIP_AD:"Skip Ad",
YTP_SPEED_TITLE:"Speed",YTP_SUBSCRIBE:"Subscribe",YTP_SUBSCRIBED:"Subscribed",YTP_SUBSCRIBE_NOTIFY_OFF:"Get notified about every new video",YTP_SUBSCRIBE_NOTIFY_ON:"Stop getting notified about every new video",YTP_SUBTITLES:"Subtitles/CC",YTP_SUBTITLES_TOOLTIP:"Subtitles/closed captions",YTP_SUBTITLES_OFF:"Subtitles/closed captions off",YTP_SUBTITLES_ON:"Subtitles/closed captions on",YTP_TAP_TO_UNMUTE_SHORT:"Tap to unmute",YTP_THEATER_MODE:"Theater mode",YTP_UNMUTE:"Unmute",YTP_URL_NAVIGATE_TO:"Watch on $WEBSITE",
YTP_WATCH_ALL:"Watch entire video",YTP_WATCH_LATER_2:"Watch later",YTP_WATCH_LATER_AS_2:"Watch later as $USER_NAME",YTP_ADDED_TO_WATCH_LATER_AS:"Added as $USER_NAME",YTP_PLAY:"Play",YTP_ERROR_LICENSE:"Sorry, there was an error licensing this video.",YTP_ERROR_VIDEO_NOT_FOUND:"This video can not be found.",YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE:"This video has already been downloaded on the maximum number of devices allowed by the copyright holder. Before you can play the video here, it needs to be unpinned on another device.",
YTP_ERROR_PURCHASE_NOT_FOUND:"This video requires payment.",YTP_ERROR_PURCHASE_REFUNDED:"This video's purchase has been refunded.",YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK:"Your account is playing this video in another location. Please reload this page to resume watching.",YTP_ERROR_TOO_MANY_STREAMS_PER_USER:"Playback stopped because too many videos belonging to the same account are playing.",YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT:"Playback stopped because this video has been played on too many devices.",
YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED:"Too many devices/IP addresses have been used over the 24 hour period.",YTP_ERROR_STREAM_LICENSE_NOT_FOUND:"Video playback interrupted. Please try again.",YTP_CLOSE:"Close",YTP_ANNOTATIONS:"Annotations",YTP_SEEK_SLIDER:"Seek slider",YTP_PAUSE:"Pause",YTP_AUTOPLAY:"Autoplay",YTP_RESET:"Reset",YTP_STOP:"Stop live playback",YTP_SCREENREADER_VOLUME_SETTING:"volume",YTP_SCREENREADER_VOLUME_MUTED:"muted",YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK:"This video format is not supported.",
YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK:"Your browser does not currently recognize any of the video formats available. $BEGIN_LINKClick here to visit our frequently asked questions about HTML5 video.$END_LINK",YTP_HTML5_FLASH_DEPRECATED:"Flash videos are no longer supported. For the best experience, please upgrade your browser to the latest version. $BEGIN_LINKLEARN MORE$END_LINK",YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED:"The device in the cast session doesn't match the requested one.",
YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED:"The video in the cast session doesn't match the requested one.",YTP_ERROR_CAST_TOKEN_EXPIRED:"Cast session was expired. Please refresh.",YTP_ERROR_CAST_TOKEN_FAILED:"Cast session not available. Please refresh or try again later.",YTP_ERROR_CAST_TOKEN_MALFORMED:"Invalid cast session. Please refresh or try again later.",YTP_ERROR_GEO_FAILURE:"This video isn't available in your country.",YTP_ERROR_INVALID_DRM_MESSAGE:"The DRM system specific message is invalid.",
YTP_ERROR_RENTAL_EXPIRED:"This video's rental has expired.",YTP_ERROR_RETRYABLE_ERROR:"There was a temporary server error. Please try again later.",YTP_ERROR_SERVER_ERROR:"There was an internal server error. Please try again later.",YTP_ERROR_STREAMING_NOT_ALLOWED:"Playback not allowed because this video is pinned on another device.",YTP_ERROR_UNSUPPORTED_DEVICE:"Playback isn't supported on this device.",YTP_ERROR_VIDEO_FORBIDDEN:"Access to this video is forbidden.",YTP_ERROR_VIDEO_UNAVAILABLE:"Video unavailable",
YTP_ERROR_FORMAT_UNAVALIABLE:"This video isn't avaliable at the selected quality. Please try again later.",YTP_DEVICE_FALLBACK:"Sorry, this video is not available on this device.",YTP_VISIT_ADVERTISERS_SITE:"Visit advertiser's site",YTP_PROGRESS_LABEL_2:"$PLAY_PROGRESS of $DURATION",YTP_PLAYLIST_NAME:"Playlist: $PLAYLIST_NAME",YTP_PLAYLIST_POSITION:"$CURRENT_POSITION/$PLAYLIST_LENGTH",YTP_SHARE_PANEL_ERROR:"An error occurred while retrieving sharing information. Please try again later.",YTP_PLAYLIST_AUTHOR_AND_POSITION:"by $AUTHOR \u2022 $CURRENT_POSITION/$PLAYLIST_LENGTH",
YTP_PLAYER_NORMAL:"YouTube Video Player",YTP_PLAYER_FULLSCREEN:"YouTube Video Player in Fullscreen",YTP_SPONSORED:"Sponsored",YTP_SPONSORED_PRODUCT_INFO:"You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.",YTP_PIP:"Picture in Picture",YTP_AUTO_TRANSLATE:"Auto-translate",YTP_SWITCH_CAMERA:"Switch camera",YTP_MULTICAM_INDEX:"Viewing $CAMERA_INDEX of $CAMERA_COUNT",YTP_MORE_CAMERAS_AVAILABLE:"More cameras available",YTP_VIDEO_SUBTITLES_OVERRIDE:"Video Override",
YTP_VIDEO_SUBTITLES_OVERRIDE_DESC:"Allow for a different caption style if specified by the video.",YTP_WATCH_VIDEO_OR_PLAYLIST:"Watch $TITLE",YTP_FONT_FAMILY:"Font family",YTP_FONT_SIZE:"Font size",YTP_FONT_COLOR:"Font color",YTP_FONT_OPACITY:"Font opacity",YTP_BACKGROUND_COLOR:"Background color",YTP_BACKGROUND_OPACITY:"Background opacity",YTP_WINDOW_COLOR:"Window color",YTP_WINDOW_OPACITY:"Window opacity",YTP_COLOR_WHITE:"White",YTP_COLOR_YELLOW:"Yellow",YTP_COLOR_GREEN:"Green",YTP_COLOR_CYAN:"Cyan",
YTP_COLOR_BLUE:"Blue",YTP_COLOR_MAGENTA:"Magenta",YTP_COLOR_RED:"Red",YTP_COLOR_BLACK:"Black",YTP_FONT_FAMILY_MONO_SERIF:"Monospaced Serif",YTP_FONT_FAMILY_PROP_SERIF:"Proportional Serif",YTP_FONT_FAMILY_MONO_SANS:"Monospaced Sans-Serif",YTP_FONT_FAMILY_PROP_SANS:"Proportional Sans-Serif",YTP_FONT_FAMILY_CASUAL:"Casual",YTP_FONT_FAMILY_CURSIVE:"Cursive",YTP_FONT_FAMILY_SMALL_CAPS:"Small Capitals",YTP_CHAR_EDGE_STYLE:"Character edge style",YTP_EDGE_STYLE_NONE:"None",YTP_EDGE_STYLE_RAISED:"Raised",
YTP_EDGE_STYLE_DEPRESSED:"Depressed",YTP_EDGE_STYLE_OUTLINE:"Outline",YTP_EDGE_STYLE_DROP_SHADOW:"Drop Shadow",YTP_CONTRIBUTE_MENU_ITEM:"Add subtitles/CC",YTP_ASR_SETTINGS_LABEL:"Automatic Captions",YTP_LANGUAGE_OFF:"Off"});xba(this);this.M(a.l,"mutedautoplaychange",this.EB)};
xba=function(a){var b=a.app.l,c=(0,g.A)(a.Fz,a),d=(0,g.A)(a.Gz,a),e=(0,g.A)(a.DB,a),f=(0,g.A)(a.mz,a);b.addEventListener("initializingmode",c);b.addEventListener("videoplayerreset",d);b.addEventListener("videodatachange",e);b.addEventListener("presentingplayerstatechange",f);g.De(a,function(){b.removeEventListener("initializingmode",c);b.removeEventListener("videoplayerreset",d);b.removeEventListener("videodatachange",e);b.removeEventListener("presentingplayerstatechange",f)})};
IR=function(a){a.g&&(a.g.removeEventListener("focus",a.P),g.Ed(a.g),a.g=null)};
JR=function(a,b){if(a.g){var c=a.app.g;nA&&(a.g.setAttribute("x-webkit-airplay","allow"),b.title?a.g.setAttribute("title",b.title):a.g.removeAttribute("title"));a.g.setAttribute("controlslist","nodownload");c.zk&&b.videoId&&(a.g.poster=b.kc(c,"default.jpg"))}c=g.ND(b,"yt:bgcolor");a.l.style.backgroundColor=c?c:"";a.K=YA(g.ND(b,"yt:stretch"));a.L=YA(g.ND(b,"yt:crop"),!0);a.Be()};
g.LR=function(a){var b=a.app.g.experiments.g("html5_aspect_from_adaptive_format");if(b){var c=g.V(a.app);if((c=c?c.g:null)&&c.Ia&&c.Ia.g)return b=c.Ia.videoInfos[0],KR(b.video.width,b.video.height)}return(a=a.g)?KR(a.videoWidth,a.videoHeight):b?16/9:window.NaN};
g.wN=function(a,b){var c=a.Da(),d=MR(a,c,g.LR(a),b);return new g.Xg((c.width-d.width)/2,(c.height-d.height)/2,d.width,d.height)};
MR=function(a,b,c,d){(0,window.isNaN)(a.K)||(c=a.K);var e=c;(0,window.isNaN)(a.F)?(0,window.isNaN)(a.L)||(e=a.L):e=a.F;a=KR(b.width,b.height);(0,window.isFinite)(e)||(e=Math.max(c,a));var f;e>a?f={width:b.width,height:b.width/e,aspectRatio:e}:e<a?f={width:b.height*e,height:b.height,aspectRatio:e}:f={width:b.width,height:b.height,aspectRatio:a};d||(0,window.isNaN)(c)||(c>e?f.width=f.height*c:c<e&&(f.height=f.width/c),f.aspectRatio=c);return f};
KR=function(a,b){return 1>Math.abs(NR*b-a)||1>Math.abs(NR/a-b)?NR:a/b};
OR=function(a){if(1==a.app.R)return!1;var b=g.yL(a.app.l);a=g.T(b,1024)&&!a.app.g.experiments.g("dompaused_video_visible_killswitch");return b&&!g.T(b,2)&&!a&&!PE(b)};
DN=function(a){var b="3"==a.app.g.A&&!a.H&&OR(a)&&!a.app.X;a.g.controls=b;a.g.tabIndex=b?0:-1;b?a.g.removeEventListener("focus",a.P):a.app.g.experiments.g("disable_focus_redirect")||a.g.addEventListener("focus",a.P)};
PR=function(a){var b=g.LR(a),c=a.Da(),d=1,e=!1,f=MR(a,c,b),k=Yr();if(OR(a)){var l=(0,window.isNaN)(b)||Ez;nA&&!g.wc(601)?b=f.aspectRatio:l=l||"3"==a.app.g.A;l?l=new g.Xg(0,0,c.width,c.height):(d=f.aspectRatio/b,l=new g.Xg((c.width-f.width/d)/2,(c.height-f.height)/2,f.width/d,f.height),1==d&&g.Qk&&(b=l.width-c.height*b,0<b&&(l.width+=b,l.height+=b)));k&&(a.g.style.display="");a.I=!0}else b=-c.height,nA?b*=window.devicePixelRatio:g.GB&&(b-=window.screen.height),l=new g.Xg(0,b,c.width,c.height),k&&(a.g.style.display=
"none"),a.I=!1;g.Zg(a.B,l)||(a.B=l,g.BB(a.app.g)?(a.g.style.setProperty("width",l.width+"px","important"),a.g.style.setProperty("height",l.height+"px","important")):g.Fh(a.g,g.ah(l)),g.uh(a.g,g.bh(l)),e=!0);c=new g.Xg((c.width-f.width)/2,(c.height-f.height)/2,f.width,f.height);g.Zg(a.o,c)||(a.o=c,e=!0);g.mh(a.g,"transform",1==d?"":"scaleX("+d+")");return e};
QR=function(a,b){g.J.call(this);this.o=a||window.NaN;this.g=b||null;this.l=[]};
g.RR=function(a){return VF(a)?(a.fetch=0,new g.UF(a)):new g.qD(a)};
SR=function(){this.g=[];this.l=[];this.o=[]};
VR=function(a,b,c){c=g.zd(c?"AUDIO":"VIDEO");g.Ka(c,yba);g.Ss(c,"loadeddata",(0,g.A)(c.l,c));jB&&6<=TR&&g.Ss(c,"webkitbeginfullscreen",(0,g.A)(c.play,c));a.l.push(c);b?a.o.push(c):UR(a,c);return c};
UR=function(a,b){g.Ta(a.l,b)&&!g.Ta(a.g,b)&&(b.src||b.load(),g.Ya(a.o,b)||a.g.push(b))};
WR=function(a){g.J.call(this);this.l=null;for(var b=[],c=0;100>=c;c++)b.push(c/100);b={threshold:b};(this.g=window.IntersectionObserver?new window.IntersectionObserver((0,g.A)(this.o,this),b):null)&&this.g.observe(a)};
XR=function(a,b,c,d){g.R.call(this);this.l=a;this.P=(0,g.A)(b,null);this.g=0;this.C=!1;this.A=new g.Zc(window.NaN,window.NaN);this.da=new g.dt(this);g.K(this,this.da);b=d?4E3:3E3;this.H=new g.P(g.B(this.yb,1,!1),b,this);g.K(this,this.H);this.I=new g.P(g.B(this.yb,2,!1),b,this);g.K(this,this.I);this.L=new g.P(g.B(this.yb,512,!1),0,this);g.K(this,this.L);this.R=c&&0<c.ig.length?5E3:3E3;d||(this.o=this.da.M(a,"mouseover",this.Rn),this.da.M(a,"mousemove",this.HB),this.da.M(a,"mouseleave",this.VD));g.oh?
this.da.M(a,"keypress",this.Vz):this.da.M(a,"focusin",this.Iy);this.B=this.da.M(a,"mousedown",this.Qs);this.F=this.da.M(a,"touchstart",this.Ss,void 0,!0);this.U=null;this.yb(640,!0)};
YR=function(a){a.yb(4,!1);a.K&&(a.da.Pa(a.K),a.K=null,a.o=a.da.M(a.l,"mouseover",a.Rn));a.o&&(a.da.Pa(a.o),a.o=a.da.M(a.l,"mouseover",a.Rn))};
ZR=function(a){var b=!g.U(a).Yb&&3!=a.Ca();return a.isFullscreen()||b};
g.$R=function(a,b,c,d){if((void 0===c||!c)&&g.oQ(a))return g.Ys(a),!0;b.Xb();a=a.currentTarget.getAttribute("href");g.NM(a,d,!0);return!1};
aS=function(a,b,c){if(CB(g.U(b))&&2!=b.Ca()){if(g.oQ(c))return b.isFullscreen()&&g.CL(b),g.Ys(c),!0}else{var d=g.oQ(c);d&&b.Xb();g.NM(a,void 0,!0);d&&(g.OM(a),g.Ys(c))}return!1};
bS=function(){return{D:"div",J:"ytp-spinner-container",G:[{D:"div",J:"ytp-spinner-rotator",G:[{D:"div",J:"ytp-spinner-left",G:[{D:"div",J:"ytp-spinner-circle"}]},{D:"div",J:"ytp-spinner-right",G:[{D:"div",J:"ytp-spinner-circle"}]}]}]}};
cS=function(a){g.W.call(this,{D:"div",J:"ytp-bezel",N:{role:"status","aria-label":"{{label}}"},G:[{D:"div",J:"ytp-bezel-icon",G:["{{icon}}"]}]});this.l=new g.P(this.show,10,this);g.K(this,this.l);this.g=new g.P(this.hide,500,this);g.K(this,this.g);this.o=a;this.hide()};
eS=function(a,b){if(b)g.T(g.yL(a.o),64)||dS(a,BP(),g.S("YTP_PLAY"));else{var c=a.o.Y();c.oa&&!c.Ne?dS(a,GP(),g.S("YTP_STOP")):dS(a,AP(),g.S("YTP_PAUSE"))}};
fS=function(a,b,c){0>=b?(c=JP(),b=g.S("YTP_SCREENREADER_VOLUME_MUTED")):(c=c?IP():HP(),b=Math.floor(b)+"% "+g.S("YTP_SCREENREADER_VOLUME_SETTING"));dS(a,c,b)};
gS=function(a,b,c){c=c?g.Y?{D:"div",W:["ytp-icon","ytp-icon-fast-rewind"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 17,24 V 12 l -8.5,6 8.5,6 z m .5,-6 8.5,6 V 12 l -8.5,6 z"}}]}:g.Y?{D:"div",W:["ytp-icon","ytp-icon-fast-forward"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z"}}]};b=g.S("YTP_PLAYBACK_SPEED_CHANGED",
{RATE:String(b)});dS(a,c,b)};
hS=function(a){dS(a,CP(),g.S("YTP_PREVIOUS"))};
dS=function(a,b,c){a.updateValue("label",void 0===c?"":c);a.updateValue("icon",b);g.Wp(a.g);a.l.start()};
iS=function(a){var b=g.U(a),c=["ytp-large-play-button","ytp-button"];b.H&&b.zb?b=[{D:"div",J:"ytp-large-play-button-circle",N:{style:"background-color: "+b.zb}},g.Y?{D:"div",W:["ytp-icon","ytp-icon-dni-large-play-button"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"4 -6 60 60",width:"100%"},G:[{D:"path",N:{d:"m 26.96,13.67 18.37,9.62 -18.37,9.55 -0.00,-19.17 z",fill:"#fff"}}]}]:b.X&&!b.Rb?b=[g.Y?{D:"div",W:["ytp-icon","ytp-icon-large-play-button-hover"]}:{D:"svg",N:{height:"100%",version:"1.1",
viewBox:"0 0 68 48",width:"100%"},G:[{D:"path",J:"ytp-large-play-button-bg",N:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}},{D:"path",N:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]:(b.l&&c.push("ytp-touch-device"),b=[b.Rb?
g.Y?{D:"div",W:["ytp-icon","ytp-icon-house-brand-large-play-button"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 60 60",width:"100%"},G:[{D:"path",J:"ytp-large-play-button-bg",N:{"clip-rule":"evenodd",d:"M59.6,1.35c0.26,.5,.4,1.13,.4,1.9v53.5c0,.76-0.13,1.4-0.4,1.9c-0.5,.9-1.45,1.35-2.85,1.35H3.25c-1.4,0-2.33-0.43-2.8-1.3C0.15,58.16,0,57.51,0,56.75V3.25c0-0.83,.16-1.5,.5-2C1,.41,1.91,0,3.25,0h53.5C58.15,0,59.1,.45,59.6,1.35z M21,41.65l22.7-11.8L21,18V41.65z",fill:"#1f1f1f","fill-rule":"evenodd"}},
{D:"path",N:{d:"M21,41.65 L21,18 L43.7,29.85 L21,41.65 Z",fill:"#fff"}}]}:g.Y?{D:"div",W:["ytp-icon","ytp-icon-large-play-button"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"},G:[{D:"path",J:"ytp-large-play-button-bg",N:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",
fill:"#212121","fill-opacity":"0.8"}},{D:"path",N:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]);g.W.call(this,{D:"div",J:"ytp-cued-thumbnail-overlay",G:[{D:"div",J:"ytp-cued-thumbnail-overlay-image"},{D:"button",W:c,N:{"aria-label":g.S("YTP_PLAY")},G:b}]});this.A=new g.dt(this);g.K(this,this.A);this.g=a;this.C=this.Z["ytp-cued-thumbnail-overlay-image"];this.B=this.Z["ytp-large-play-button"];this.o=new g.fQ(this,250);g.K(this,this.o);this.l=new g.P(this.Dt,0,this);g.K(this,this.l);this.Dt();this.M(a,
"presentingplayerstatechange",this.mD);this.M(a,"ypcStateChanged",this.TH);nB(g.U(a))&&this.M(a,"videoplayerreset",this.lD)};
kS=function(a,b){g.W.call(this,{D:"canvas",J:"ytp-tv-static"});this.l=this.element.getContext("2d");this.height=this.width=window.NaN;this.H=null;this.I=this.K=this.A=this.o=0;this.B=-75;this.g=new g.Rp(this.F,void 0,this);g.K(this,this.g);this.C=new g.P(this.g.ii,75,this.g);g.K(this,this.C);jS(this,a,b)};
lS=function(a){for(var b=Math.floor(.6*a),c=b;c<a;++c){for(var d=!1,e=2;e<Math.sqrt(c);e++){if(!(c%e)){d=!1;break}d=!0}if(d)return c}return b};
jS=function(a,b,c){if(b&&c){a.width=a.element.width=b;a.height=a.element.height=c;var d=g.zd("CANVAS");d.width=b;d.height=c;for(var e=d.getContext("2d"),f=e.getImageData(0,0,b,c),k=b*c,l=0;l<k;l++){var m=4*l;f.data[m]=f.data[m+1]=f.data[m+2]=Math.floor(35*Math.random());f.data[m+3]=255}e.putImageData(f,0,0);a.H=d;a.K=lS(b);a.I=lS(c/10);a.l.scale(1.5,1.5);a.l.fillStyle="rgba(255, 255, 255, 0.02)"}};
nS=function(a){g.W.call(this,{D:"div",W:["ytp-error"],N:{role:"alert"},G:[{D:"div",J:"ytp-error-content",G:[{D:"div",J:"ytp-error-content-wrap",G:["{{content}}"]}]}]});this.g=a;this.o=[];try{this.l=new kS(1,1),g.K(this,this.l),this.l.ca(this.element,0)}catch(b){}mS(this,g.zL(this.g).Da())};
mS=function(a,b){oS(a,function(a){jS(a,b.width,b.height)})};
oS=function(a,b){if(a.l)try{b.call(a,a.l)}catch(c){a.l.dispose(),a.l=null}};
pS=function(a,b,c,d,e,f){e||(e=g.U(a.g).o);a=d?{CPN:a.g.Y().clientPlaybackNonce}:null;b=g.S(b,a).split(/\$(BEGIN|END)_LINK/);a=[];f&&(f=g.S(f,null))&&a.push({D:"h2",G:[f]});a.push(b[0]);a.push({D:"br"});a.push({D:"a",N:{href:c,target:e?"_blank":null},G:[b[2]]});a.push(b[4]);return{D:"span",G:a}};
rS=function(a,b){g.dt.call(this);this.g=a;this.A=b;this.o=new window.Set;this.l=window.navigator.mediaSession;qS(this,"play",function(){eS(b,!0);a.Oc()});
qS(this,"pause",function(){eS(b,!1);a.Xb()});
qS(this,"seekbackward",function(){dS(b,EP());a.Md(-5*a.ec())});
qS(this,"seekforward",function(){dS(b,wP());a.Md(5*a.ec())});
this.M(a,"videodatachange",this.C);this.M(a,"presentingplayerstatechange",this.B);this.C()};
qS=function(a,b,c){a.l.setActionHandler(b,c?(0,g.A)(c,a):null);a.o.add(b)};
sS=function(a){g.W.call(this,{D:"div",J:"ytp-paid-content-overlay",N:{"aria-live":"assertive","aria-atomic":"true"}});this.C=new g.W({D:"div",W:["ytp-button","ytp-paid-content-overlay-text"]});g.K(this,this.C);this.C.ca(this.element);this.I=a;this.l=null;this.F=!1;this.A=new g.fQ(this.C,250,!1,100);g.K(this,this.A);this.B=this.g=null;this.o={};this.H=0;this.M(a,"videodatachange",this.P);this.M(a,"presentingplayerstatechange",this.L)};
tS=function(a,b){var c=LD(b),d=MD(b);a.g?b.videoId&&b.videoId!=a.l&&(g.Wp(a.g),a.l=b.videoId,c=a.o[b.videoId]||0,a.F=!!d&&3E3>c):c&&d&&(a.g=new g.P(a.K,d,a),g.K(a,a.g),g.Md(g.kd("ytp-paid-content-overlay-text",a.element),c))};
uS=function(a,b){a.g&&g.T(b,8)&&a.F&&(a.F=!1,a.A.show(),a.H=(0,g.H)(),a.g.start())};
xS=function(a){g.W.call(this,{D:"div",J:"ytp-spinner",G:[{D:"div",G:["{{icon}}"]},{D:"div",J:"ytp-spinner-message",G:[g.S("YTP_PLAYBACK_STALLED_AT_START")]}]});this.A=this.Z["ytp-spinner-message"];this.g=a;this.l=new g.P(this.show,500,this);g.K(this,this.l);this.o=!0;vS(this,!1);this.M(a,"presentingplayerstatechange",this.GD);this.M(a,"onFrescaStateChange",this.mF);this.M(a,"playbackstalledatstart",this.wG);this.M(a,"videodatachange",this.mu);this.M(a,"videoplayerreset",this.mu);wS(this,g.yL(a))};
vS=function(a,b){if(b!=a.o){var c;b?c={D:"div",W:["ytp-spinner-container","ytp-fidget-spinner"],G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-fidget-spinner"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 64 64",width:"100%"},G:[{D:"path",J:"ytp-fidget-spinner",N:{d:"m32 2.2c-7.6 0-10.7 7.1-10.7 10.6 0 3.5 1 5.3 2.3 7 1.3 1.7 2.2 4.3-0.2 7.7-2.4 3.5-3.5 2.9-7.9 3.1-4.4 .1-10.5 3.9-10.5 11-0.1 7.1 6.4 10.4 10.4 10.5 4 .1 7.6-2.1 9.4-5.2 2.2-3.8 4-5.4 7.3-5.3 3.3 .1 5.1 1.5 7 4.9 1.8 3.4 5.5 5.6 9.6 5.6 4.2 0 10.5-2.8 10.4-10.8-0.1-8.1-6.6-10.3-10.3-10.5-3.7-0.2-6-0.1-8.1-3.3-2.1-3.2-1.2-5.9-0.1-7.5 1.1-1.7 2.3-3.2 2.3-7.1C42.8 8.7 39.6 2.2 32 2.2zm0.1 4.3c3.6 0 6.5 2.9 6.5 6.5 0 3.6-2.9 6.5-6.5 6.5-3.6 0-6.5-2.9-6.5-6.5 0-3.6 2.9-6.5 6.5-6.5zm0 18.8c3.6 0 6.5 2.9 6.5 6.5 0 3.6-2.9 6.5-6.5 6.5-3.6 0-6.5-2.9-6.5-6.5 0-3.6 2.9-6.5 6.5-6.5zm-16.3 9.4c3.6 0 6.5 2.9 6.5 6.5 0 3.6-2.9 6.5-6.5 6.5-3.6 0-6.5-2.9-6.5-6.5 0-3.6 2.9-6.5 6.5-6.5zm32.7 0c3.6 0 6.5 2.9 6.5 6.5 0 3.6-2.9 6.5-6.5 6.5-3.6 0-6.5-2.9-6.5-6.5 0-3.6 2.9-6.5 6.5-6.5z",
fill:"#fff"}}]}]}:c=bS();a.update({icon:c});a.o=b}};
wS=function(a,b){if(g.T(b,128))var c=0;else!(c=g.T(b,16))&&(c=g.T(b,1))&&(c=g.sL(a.g).H,c=!(c&&c.loaded));c?a.l.start():a.hide()};
yS=function(a,b,c,d){d=void 0===d?!1:d;g.bP.call(this,b);this.V=a;this.ba=d;this.I=null;this.H=new g.dt(this);g.K(this,this.H);this.K=new g.fQ(this,c,!0);g.K(this,this.K);this.A=null};
zS=function(a){a.A&&(window.document.activeElement&&g.Ld(a.element,window.document.activeElement)&&(g.Pd(a.A),a.A.focus()),a.A.removeAttribute("aria-expanded"),a.A=null);g.ft(a.H);a.I=null};
AS=function(a){return a.Na()&&3!=a.K.g};
CS=function(a){var b=g.U(a).experiments.o("mweb_muted_autoplay_animation"),c=[],d=[];"none"!=b&&(c.push("ytp-unmute-animated"),d.push({D:"div",W:["ytp-unmute-box"]}),"expand"==b?c.push("ytp-unmute-expand"):"shrink"==b&&c.push("ytp-unmute-shrink"));yS.call(this,a,{D:"button",W:["ytp-unmute","ytp-popup","ytp-button"].concat(c),G:[{D:"div",J:"ytp-unmute-inner",G:[{D:"div",W:["ytp-unmute-icon"],G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-volume-muted-dark"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",
width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}]},
{D:"div",W:["ytp-unmute-text"],G:[g.S("YTP_TAP_TO_UNMUTE_SHORT")]}].concat(d)}]},100);this.g=a;this.l=this.o=!1;this.M(a,"mutedautoplaychange",this.B,this);this.M(a,"presentingplayerstatechange",this.C);this.ea("click",this.onClick,this);a=a.app.X;g.JM(this,a);a&&BS(this)};
DS=function(a){a.o||(a.o=!0,g.GL(a.g,"mutedAutoplayClick",{}))};
BS=function(a){a.l||(a.l=!0,g.GL(a.g,"mutedAutoplayImpression",{}))};
ES=function(a){g.dt.call(this);var b=g.U(a),c=g.zL(a);this.g=a;this.Ab=!1;this.L=null;this.Ha=!1;this.Ya=new g.P(this.xE,0,this);g.K(this,this.Ya);var d=new iS(a);g.K(this,d);g.TL(a,d.element,4);var e=new xS(a);g.K(this,e);g.TL(a,e.element,4);this.C=new cS(a);g.K(this,this.C);g.TL(a,this.C.element,4);var f=a.Y();this.A=new XR(c,(0,g.A)(this.fD,this),f,b.useTabletControls);g.K(this,this.A);this.A.subscribe("autohideupdate",this.Ao,this);var k=new sS(a);g.K(this,k);g.TL(a,k.element,4);this.ia=new CS(a);
g.K(this,this.ia);g.TL(this.g,this.ia.element,2);this.Za=this.g.app.X;this.M(a,"mutedautoplaychange",this.gD);this.ba=new g.P(this.lo,200,this);g.K(this,this.ba);this.Ka=f.videoId;this.F=null;this.K=!1;this.Wa=null;this.sa=[];f=a.getRootNode();f.setAttribute("aria-label",g.S("YTP_PLAYER_NORMAL"));switch(b.color){case "white":g.M(f,"ytp-color-white")}!g.U(a).experiments.g("disable_mediasession2")&&"mediaSession"in window.navigator&&!window.navigator.mediaSession.metadata&&window.navigator.mediaSession.setActionHandler&&
(f=new rS(a,this.C),g.K(this,f));this.M(a,"appresize",this.fe);this.M(a,"presentingplayerstatechange",this.zG);this.M(a,"videodatachange",this.Bt);this.M(a,"videoplayerreset",this.xG);this.M(a,"autonavvisibility",this.Vg,this);g.U(a).experiments.g("player_minimized_controls_killswitch")&&this.M(a,"minimized",this.hf,this);this.M(a,"onFrescaStateChange",this.hf,this);this.M(c,"click",this.WG,this);this.M(c,"dblclick",this.XG,this);b.ma&&(this.M(c,"gesturechange",this.YG,this),this.M(c,"gestureend",
this.ZG,this));this.bb=[c.l,e.element,d.element,this.C.element]};
FS=function(a){return g.U(a.g).experiments.g("player_minimized_controls_killswitch")?a.g.app.Mb:!1};
GS=function(a,b){if(!b)return!1;var c=a.g.app.B.ha();if(c&&g.Ld(c,b))return c.controls;for(c=0;c<a.bb.length;c++)if(g.Ld(a.bb[c],b))return!1;return g.Kp(b,"ytp-player-content")||g.Kp(b,"html5-endscreen")||b==a.g.getRootNode()?!1:!0};
HS=function(a,b){if(g.oQ(b)&&a.g.app.X){a.g.Ee();2==a.g.Ca()&&a.g.Oc();var c=g.yL(a.g);!g.T(c,4)||g.T(c,8)||g.T(c,2)||a.lo();return!0}return!1};
IS=function(a,b,c){a.g.isFullscreen()?c<1-b&&g.CL(a.g):c>1+b&&g.CL(a.g)};
KS=function(a,b,c){var d={"aria-label":g.S("YTP_CARDS_BUTTON_ARIA_LABEL"),"aria-owns":"iv-drawer","aria-haspopup":"true","data-tooltip-opaque":String(g.U(a).K)},e={D:"span",J:"ytp-cards-button-icon-default",G:[{D:"div",J:"ytp-cards-button-icon",G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-info-card"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M17,16 L19,16 L19,24 L17,24 L17,16 Z M17,12 L19,12 L19,14 L17,14 L17,12 Z"}}]}]},
{D:"div",J:"ytp-cards-button-title",G:[g.S("YTP_CARDS_BUTTON_INFO")]}]};d={D:"button",W:["ytp-button","ytp-cards-button"],N:d,G:[e,{D:"span",J:"ytp-cards-button-icon-shopping",G:[{D:"div",J:"ytp-cards-button-icon",G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-shopping-card"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",J:"ytp-svg-shadow",N:{d:"M 27.99,18 A 9.99,9.99 0 1 1 8.00,18 9.99,9.99 0 1 1 27.99,18 z"}},{D:"path",J:"ytp-svg-fill",N:{d:"M 18,8 C 12.47,8 8,12.47 8,18 8,23.52 12.47,28 18,28 23.52,28 28,23.52 28,18 28,12.47 23.52,8 18,8 z m -4.68,4 4.53,0 c .35,0 .70,.14 .93,.37 l 5.84,5.84 c .23,.23 .37,.58 .37,.93 0,.35 -0.13,.67 -0.37,.90 L 20.06,24.62 C 19.82,24.86 19.51,25 19.15,25 c -0.35,0 -0.70,-0.14 -0.93,-0.37 L 12.37,18.78 C 12.13,18.54 12,18.20 12,17.84 L 12,13.31 C 12,12.59 12.59,12 13.31,12 z m .96,1.31 c -0.53,0 -0.96,.42 -0.96,.96 0,.53 .42,.96 .96,.96 .53,0 .96,-0.42 .96,-0.96 0,-0.53 -0.42,-0.96 -0.96,-0.96 z",
"fill-opacity":"1"}},{D:"path",J:"ytp-svg-shadow-fill",N:{d:"M 24.61,18.22 18.76,12.37 C 18.53,12.14 18.20,12 17.85,12 H 13.30 C 12.58,12 12,12.58 12,13.30 V 17.85 c 0,.35 .14,.68 .38,.92 l 5.84,5.85 c .23,.23 .55,.37 .91,.37 .35,0 .68,-0.14 .91,-0.38 L 24.61,20.06 C 24.85,19.83 25,19.50 25,19.15 25,18.79 24.85,18.46 24.61,18.22 z M 14.27,15.25 c -0.53,0 -0.97,-0.43 -0.97,-0.97 0,-0.53 .43,-0.97 .97,-0.97 .53,0 .97,.43 .97,.97 0,.53 -0.43,.97 -0.97,.97 z",fill:"#000","fill-opacity":"0.15"}}]}]},{D:"div",
J:"ytp-cards-button-title",G:[g.S("YTP_CARDS_BUTTON_SHOPPING")]}]}]};g.W.call(this,d);this.g=a;this.A=b;this.B=c;this.l=null;this.o=new g.fQ(this,250,!0,100);g.K(this,this.o);a=g.U(this.g);b=g.zL(this.g).Da().width;b=a.o&&480<b;a.K&&g.O(this.B,"ytp-show-cards-title",b);this.hide();this.ea("click",this.C);this.ea("mouseover",this.F);JS(this,!0)};
JS=function(a,b){b?a.l=LS(a.A.l,a.element):(a.l(),a.l=null)};
MS=function(a,b){g.W.call(this,{D:"div",J:"ytp-cards-teaser",G:[{D:"div",J:"ytp-cards-teaser-box"},{D:"div",J:"ytp-cards-teaser-text",G:[{D:"span",J:"ytp-cards-teaser-label",G:["{{text}}"]}]}]});this.l=a;this.B=new g.fQ(this,250,!1,250);g.K(this,this.B);this.I=b;this.g=null;this.H=new g.P(this.fG,300,this);g.K(this,this.H);this.F=new g.P(this.cG,2E3,this);g.K(this,this.F);this.K=new g.Dp;this.C=[];this.A=this.o=null;this.M(b.element,"mouseover",this.Ct);this.M(b.element,"mouseout",this.Rf);this.M(a,
"cardsteasershow",this.qH);this.M(a,"cardsteaserhide",this.Ji);this.M(a,"cardstatechange",this.yw);this.M(a,"presentingplayerstatechange",this.yw);this.ea("click",this.LI);this.ea("mouseenter",this.hD)};
zba=function(a,b){a.updateValue("text",b.teaserText);a.element.setAttribute("dir",g.Ep(a.K,b.teaserText));a.B.show();a.o=new g.P(function(){g.M(this.l.getRootNode(),"ytp-cards-teaser-shown")},0,a);
a.o.start();JS(a.I,!1);a.g=new g.P(a.Ji,580+b.durationMs,a);a.g.start();a.C.push(a.ea("mouseover",a.Ct,a));a.C.push(a.ea("mouseout",a.Rf,a))};
g.OS=function(a,b,c,d){g.bP.call(this,a);this.priority=b;c&&g.NS(this,c);d&&this.sb(d)};
g.PS=function(a,b,c){a=void 0===a?{}:a;b=void 0===b?[]:b;c=void 0===c?!1:c;b.push("ytp-menuitem");"role"in a||(a.role="menuitem");c||"tabindex"in a||(a.tabindex="0");return{D:c?"a":"div",W:b,N:a,G:[{D:"div",J:"ytp-menuitem-label",G:["{{label}}"]},{D:"div",J:"ytp-menuitem-content",G:["{{content}}"]}]}};
g.NS=function(a,b){a.updateValue("label",b)};
QS=function(a,b,c,d,e){var f={D:"div",J:"ytp-panel"};if(c){var k="ytp-panel-title";var l={D:"div",J:"ytp-panel-header",G:[{D:"button",W:["ytp-button",k],G:[c]}]};if(e){var m="ytp-panel-options";l.G.push({D:"button",W:["ytp-button",m],G:[d]})}f.G=[l]}g.bP.call(this,f);this.V=b;b.ca(this.element);this.fa=!1;c&&(this.M(this.Z[k],"click",this.ma),this.fa=!0,e&&this.M(this.Z[m],"click",e));b.subscribe("size-change",this.ia,this);this.M(a,"fullscreentoggled",this.ia)};
g.RS=function(a,b,c,d,e){b=void 0===b?null:b;var f={role:"menu"};b&&(f.id=b);b=new g.bP({D:"div",J:"ytp-panel-menu",N:f});QS.call(this,a,b,c,d,e);this.C=b;g.K(this,this.C);this.za=[]};
g.SS=function(a,b,c){if(void 0===c?0:c)a.za.push(b),a.C.element.appendChild(b.element);else{c=g.ib(a.za,b,Aba);if(0<=c)return;c=~c;g.eb(a.za,c,0,b);Dd(a.C.element,b.element,c)}b.subscribe("size-change",a.X,a);a.C.O("size-change")};
g.TS=function(a,b){b.unsubscribe("size-change",a.X,a);a.ga()||(g.Ya(a.za,b),a.C.element.removeChild(b.element),a.C.O("size-change"))};
g.US=function(a){for(var b=g.q(a.za),c=b.next();!c.done;c=b.next())c.value.unsubscribe("size-change",a.X,a);a.za=[];g.Cd(a.C.element);a.C.O("size-change")};
Aba=function(a,b){return b.priority-a.priority};
g.VS=function(a,b){yS.call(this,a,{D:"div",W:["ytp-popup",b||null]},100,!0);this.g=[];this.size=new g.bd(0,0);this.B=this.C=null;this.L=this.P=0;this.ea("keydown",this.pD)};
XS=function(a){g.Fh(a.element,a.P||"100%",a.L||"100%");var b=WS(a);b.element.style.width="";b.element.style.height="";b.element.style.maxWidth="100%";b.element.style.maxHeight="100%";b.V.element.style.height="";var c=g.Hh(b.element);c.width+=1;c.height+=1;b.element.style.width=c.width+"px";b.element.style.height=c.height+"px";b.element.style.maxWidth="";b.element.style.maxHeight="";var d=0;b.fa&&(d=g.Hh(b.Z["ytp-panel-header"]).height);b.V.element.style.height=c.height-d+"px";a.size=c};
g.ZS=function(a,b){var c=a.g[a.g.length-1];a.g.push(b);YS(a,c,b)};
g.$S=function(a){var b=a.g.pop(),c=a.g[0];a.g=[c];YS(a,b,c,!0)};
YS=function(a,b,c,d){aT(a);WS(a);g.Kp(c.element,"ytp-panel-animate-back")||g.Kp(c.element,"ytp-panel-animate-forward");b&&(b.unsubscribe("size-change",a.aj,a),b.unsubscribe("back",a.Od,a));c.subscribe("size-change",a.aj,a);c.subscribe("back",a.Od,a);if(a.Na()){g.M(c.element,d?"ytp-panel-animate-back":"ytp-panel-animate-forward");c.ca(a.element);c.focus();a.element.scrollLeft=0;a.element.scrollTop=0;var e=a.size;XS(a);g.Fh(a.element,e);a.C=new g.P(g.B(a.II,b,c,d),20,a);a.C.start()}else c.ca(a.element),
b&&g.FM(b)};
WS=function(a){return a.g[a.g.length-1]};
aT=function(a){a.C&&g.Vp(a.C);a.B&&g.Vp(a.B)};
bT=function(a){var b=g.PS({"aria-haspopup":"true"});g.OS.call(this,b,a);this.ea("keydown",this.g)};
cT=function(a,b){a.element.setAttribute("aria-haspopup",b)};
dT=function(a,b){var c=g.PS({role:"menuitemcheckbox","aria-checked":"false"});g.OS.call(this,c,b,a,{D:"div",J:"ytp-menuitem-toggle-checkbox"});this.l=!1;this.ea("click",this.I)};
eT=function(a,b){a.l=b;a.element.setAttribute("aria-checked",a.l)};
fT=function(a,b,c){var d={};b&&(d.v=b);c&&(d.list=c);a={name:a,locale:void 0,feature:void 0};for(var e in d)a[e]=d[e];d=g.Kg("/sharing_services",a);g.as(d)};
iT=function(a,b,c){g.RS.call(this,a);this.g=a;this.L=b;this.K=c;this.A=new bT(8);g.K(this,this.A);g.SS(this,this.A,!0);this.A.ea("click",this.sF,this);WL(a,this.A.element,this.A,28659);this.o=new bT(7);g.K(this,this.o);g.SS(this,this.o,!0);this.o.ea("click",this.rF,this);WL(a,this.o.element,this.o,28660);this.l=new bT(6);g.K(this,this.l);g.SS(this,this.l,!0);this.l.ea("click",this.pF,this);WL(a,this.l.element,this.l,28658);this.B=new dT(g.S("YTP_LOOP"),5);g.K(this,this.B);g.SS(this,this.B,!0);this.B.ea("click",
this.KF,this);WL(a,this.B.element,this.B,28661);this.P=new g.OS(g.PS({href:"{{href}}",target:"_blank"},void 0,!0),4,g.S("YTP_TROUBLESHOOT_ISSUE"));g.K(this,this.P);g.SS(this,this.P,!0);this.P.ea("click",this.QG,this);this.I=new bT(3);g.K(this,this.I);g.SS(this,this.I,!0);this.I.ea("click",this.oF,this);b=new g.OS(g.PS(),2,g.S("YTP_SHOW_VIDEO_INFO"));g.K(this,b);g.SS(this,b,!0);b.ea("click",this.hH,this);this.H=new g.bP({D:"div",W:["ytp-copytext","ytp-no-contextmenu"],N:{draggable:"false",tabindex:"1"},
G:["{{text}}"]});g.K(this,this.H);this.H.ea("click",this.VE,this);this.ba=new QS(a,this.H);g.K(this,this.ba);this.F=null;b=window.document.queryCommandSupported&&window.document.queryCommandSupported("copy");g.Px&&g.wc(43)&&(b=!0);g.Hz&&!g.wc(41)&&(b=!1);b&&(this.F=new g.W({D:"textarea",J:"ytp-html5-clipboard"}),g.K(this,this.F),this.F.ca(this.element));this.M(a,"loopchange",this.JF);this.M(a,"videodatachange",this.jD);gT(this);a=this.g.Y();hT(this,a)};
jT=function(a,b){if(a.F){var c=a.F.element;c.value=b;c.select();try{var d=window.document.execCommand("copy")}catch(e){}}d?a.K.qb():(a.H.sb(b,"text"),g.ZS(a.K,a.ba),IM(a.H.element),a.F&&(a.F=null,gT(a)));return d};
hT=function(a,b){var c=g.U(a.g),d=2!=a.g.Ca()||b.isListed;d=!c.I&&!!b.videoId&&d;"play"!=c.g?c="https://support.google.com/youtube/?p=report_playback":(c={contact_type:"playbackissue",html5:1,plid:b.playbackId,ei:b.eventId,v:b.videoId,p:"movies_playback"},b.Ba&&(c.fmt=Ku(b.Ba)),b.clientPlaybackNonce&&(c.cpn=b.clientPlaybackNonce),b.Fe&&(c.partnerid=b.Fe),c=g.Kg("//support.google.com/googleplay/",c));g.JM(a.l,d&&b.allowEmbed);g.JM(a.A,d);g.JM(a.o,d&&!b.oa);a.P.sb(c,"href")};
gT=function(a){var b=!!a.F;g.NS(a.I,g.S(b?"YTP_COPY_DEBUG_INFO":"YTP_GET_DEBUG_INFO"));cT(a.I,!b);g.NS(a.l,g.S(b?"YTP_EMBED_COPY":"YTP_GET_EMBED"));cT(a.l,!b);g.NS(a.A,g.S(b?"YTP_COPY_VIDEO_URL":"YTP_GET_VIDEO_URL"));cT(a.A,!b);g.NS(a.o,g.S(b?"YTP_COPY_VIDEO_URL_AT_TIME":"YTP_GET_VIDEO_URL_AT_TIME"));cT(a.o,!b)};
kT=function(a,b){a.g.Va(a.l.element,b);a.g.Va(a.A.element,b);a.g.Va(a.o.element,b);a.g.Va(a.B.element,b)};
mT=function(a,b){g.VS.call(this,a);this.l=a;this.X=b;this.o=new g.dt(this);g.K(this,this.o);this.F=null;WL(a,this.element,this,28656);g.M(this.element,"ytp-contextmenu");g.U(a).H&&g.M(this.element,"ytp-dni");lT(this);this.hide()};
lT=function(a){g.ft(a.o);"gvn"!=g.U(a.l).g&&a.o.M(g.zL(a.l),"contextmenu",a.UE)};
nT=function(a){a.l.isFullscreen()?g.TL(a.l,a.element,9):a.ca(window.document.body)};
oT=function(a,b,c,d,e,f){g.dt.call(this);this.g=a;this.F=c;this.B=d;this.l=e;this.C=f;this.A=new g.P(g.B(this.Ft,!1),1E3,this);g.K(this,this.A);this.o="";a=g.B(this.Wo,!1);this.M(b,"mousedown",a);this.M(c.element,"mousedown",a);this.M(b,"keydown",this.xr);this.M(c.element,"keydown",this.xr);this.M(b,"keyup",this.yr);this.M(c.element,"keyup",this.yr)};
qT=function(a,b,c){var d=!1,e=g.U(a.g);if(!e.Ie){switch(b){case 80:c&&!e.P&&(hS(a.l),a.g.Ei(),d=!0);break;case 78:c&&!e.P&&(dS(a.l,yP(),g.S("YTP_NEXT")),a.g.sh(),d=!0);break;case 74:a.g.qc()&&(dS(a.l,g.Y?{D:"div",W:["ytp-icon","ytp-icon-rewind-ten-seconds"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z M 16.9,22 H 16 V 18.7 L 15,19 v -0.7 l 1.8,-0.6 h .1 V 22 z m 4.3,-1.8 c 0,.3 0,.6 -0.1,.8 l -0.3,.6 c 0,0 -0.3,.3 -0.5,.3 -0.2,0 -0.4,.1 -0.6,.1 -0.2,0 -0.4,0 -0.6,-0.1 -0.2,-0.1 -0.3,-0.2 -0.5,-0.3 -0.2,-0.1 -0.2,-0.3 -0.3,-0.6 -0.1,-0.3 -0.1,-0.5 -0.1,-0.8 v -0.7 c 0,-0.3 0,-0.6 .1,-0.8 l .3,-0.6 c 0,0 .3,-0.3 .5,-0.3 .2,0 .4,-0.1 .6,-0.1 .2,0 .4,0 .6,.1 .2,.1 .3,.2 .5,.3 .2,.1 .2,.3 .3,.6 .1,.3 .1,.5 .1,.8 v .7 z m -0.9,-0.8 v -0.5 c 0,0 -0.1,-0.2 -0.1,-0.3 0,-0.1 -0.1,-0.1 -0.2,-0.2 -0.1,-0.1 -0.2,-0.1 -0.3,-0.1 -0.1,0 -0.2,0 -0.3,.1 l -0.2,.2 c 0,0 -0.1,.2 -0.1,.3 v 2 c 0,0 .1,.2 .1,.3 0,.1 .1,.1 .2,.2 .1,.1 .2,.1 .3,.1 .1,0 .2,0 .3,-0.1 l .2,-0.2 c 0,0 .1,-0.2 .1,-0.3 v -1.5 z"}}]}),
a.g.Md(-10*a.g.ec()),d=!0);break;case 76:a.g.qc()&&(dS(a.l,g.Y?{D:"div",W:["ytp-icon","ytp-icon-forward-ten-seconds"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 10,19 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 h -2 c 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 0,-3.3 2.7,-6 6,-6 v 4 l 5,-5 -5,-5 v 4 c -4.4,0 -8,3.6 -8,8 z m 6.8,3 H 16 V 18.7 L 15,19 v -0.7 l 1.8,-0.6 h .1 V 22 z m 4.3,-1.8 c 0,.3 0,.6 -0.1,.8 l -0.3,.6 c 0,0 -0.3,.3 -0.5,.3 C 20,21.9 19.8,22 19.6,22 19.4,22 19.2,22 19,21.9 18.8,21.8 18.7,21.7 18.5,21.6 18.3,21.5 18.3,21.3 18.2,21 18.1,20.7 18.1,20.5 18.1,20.2 v -0.7 c 0,-0.3 0,-0.6 .1,-0.8 l .3,-0.6 c 0,0 .3,-0.3 .5,-0.3 .2,0 .4,-0.1 .6,-0.1 .2,0 .4,0 .6,.1 .2,.1 .3,.2 .5,.3 .2,.1 .2,.3 .3,.6 .1,.3 .1,.5 .1,.8 v .7 z m -0.8,-0.8 v -0.5 c 0,0 -0.1,-0.2 -0.1,-0.3 0,-0.1 -0.1,-0.1 -0.2,-0.2 -0.1,-0.1 -0.2,-0.1 -0.3,-0.1 -0.1,0 -0.2,0 -0.3,.1 l -0.2,.2 c 0,0 -0.1,.2 -0.1,.3 v 2 c 0,0 .1,.2 .1,.3 0,.1 .1,.1 .2,.2 .1,.1 .2,.1 .3,.1 .1,0 .2,0 .3,-0.1 l .2,-0.2 c 0,0 .1,-0.2 .1,-0.3 v -1.5 z"}}]}),
a.g.Md(10*a.g.ec()),d=!0);break;case 77:a.g.isMuted()?(a.g.Ee(),fS(a.l,a.g.getVolume(),!1)):(a.g.mute(),fS(a.l,0,!0));d=!0;break;case 75:e.P||(d=!IE(g.yL(a.g)),eS(a.l,d),d?a.g.Oc():a.g.Xb(),d=!0);break;case 190:if(c){if(e.Ga)for(b=a.g.qh(),c=a.g.ec(),e=0;e<b.length-1;e++)b[e]==c&&(d=b[e+1],a.g.Ce(d,!0),gS(a.l,d,!1),d=!0)}else a.g.qc()&&(pT(a,1),d=!0);break;case 188:if(c){if(e.Ga)for(b=a.g.qh(),c=a.g.ec(),e=b.length-1;1<=e;e--)b[e]==c&&(d=b[e-1],a.g.Ce(d,!0),gS(a.l,d,!0),d=!0)}else a.g.qc()&&(pT(a,
-1),d=!0);break;case 70:ZR(a.g)&&(g.CL(a.g),d=!0)}d&&a.B.yb(2,!0)}return d};
sT=function(a,b,c,d){if(g.sL(a.g).l){for(var e=a.g.Hg(),f,k=0;k<g.rT.length;k++){var l=g.rT[k];if(l.option==b){f=l.options;break}}var m;for(k=0;k<f.length;k++)f[k].option==e[b]&&(m=k);if(d)if(c){if(0==m)return!1}else if(m==f.length-1)return!1;d={};d[b]=f[(m+(c?f.length-1:1))%f.length].option;a.g.Lk(d);a.Ft(!0);a.A.start();return!0}return!1};
pT=function(a,b){a.g.qc();if(g.T(g.yL(a.g),4)){var c=a.g.Y().Ba;c&&(c=c.video)&&a.g.Md(b/(c.fps||30))}};
uT=function(a,b){g.W.call(this,{D:"div",J:"ytp-pause-overlay",G:[{D:"div",J:"ytp-suggestions"}]});this.g=a;this.X=b;this.o=new g.dt(this);g.K(this,this.o);this.H=new g.fQ(this,250,!1,100);g.K(this,this.H);var c=g.U(a);this.B=[];this.l=[];this.C=0;this.ba=c.o&&!c.H;this.R=!1;this.L=new g.W({D:"button",W:["ytp-button","ytp-previous"],N:{"aria-label":g.S("YTP_PREVIOUS")},G:[g.pP()]});g.K(this,this.L);this.L.ca(this.element);this.L.ea("click",this.rD,this);c=g.Px||g.ph?{style:"will-change: opacity"}:
null;this.V=new tT((0,g.A)(this.Bw,this));g.K(this,this.V);this.P=this.A=0;this.K=this.Z["ytp-suggestions"];for(var d=0;16>d;d++){var e=new g.W({D:"a",J:"ytp-suggestion-link",N:{href:"{{link}}",target:"_blank"},G:[{D:"div",J:"ytp-suggestion-image"},{D:"div",J:"ytp-suggestion-overlay",N:c,G:[{D:"div",J:"ytp-suggestion-title",G:["{{title}}"]},{D:"div",J:"ytp-suggestion-author",G:["{{author_and_views}}"]},{D:"div",J:"ytp-suggestion-duration",G:["{{duration}}"]}]}]});g.K(this,e);e.ca(this.K);var f=e.Z["ytp-suggestion-link"];
g.mh(f,"transitionDelay",d/20+"s");this.o.M(f,"click",g.B(this.PE,d));this.B.push(e)}this.I=new g.W({D:"button",W:["ytp-button","ytp-next"],N:{"aria-label":g.S("YTP_NEXT")},G:[g.qP()]});g.K(this,this.I);this.I.ca(this.element);this.I.ea("click",this.qD,this);c={"aria-label":g.S("YTP_CLOSE")};c=new g.W({D:"button",W:["ytp-button","ytp-collapse"],N:c,G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-small-close"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 16 16",width:"100%"},G:[{D:"path",N:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",
fill:"#fff"}}]}]});g.K(this,c);c.ca(this.element);c.ea("click",this.LE,this);this.F=new g.W({D:"button",W:["ytp-button","ytp-expand"],G:[g.S("YTP_MORE_VIDEOS")]});g.K(this,this.F);this.F.ca(this.element);this.F.ea("click",this.NE,this);this.o.M(this.g,"appresize",this.Sb);this.o.M(this.g,"fullscreentoggled",this.sD);this.o.M(this.g,"presentingplayerstatechange",this.tD);this.o.M(this.g,"videodatachange",this.uD);this.Sb(g.zL(this.g).Da())};
wT=function(a,b){var c=g.Vc(b,a.C-a.l.length*(a.P+8),0);a.V.start(a.A,c,1E3);a.A=c;vT(a)};
vT=function(a){var b=a.A,c=a.C-a.l.length*(a.P+8);g.O(a.element,"ytp-scroll-min",0<=b);g.O(a.element,"ytp-scroll-max",b<=c)};
Bba=function(a){for(var b=g.U(a.g),c=0;c<a.l.length;c++){var d=a.l[c].Eb(),e=a.B[c],f=d.shortViewCount?d.author+" \u2022 "+d.shortViewCount:d.author;e.element.style.display="";e.update({author_and_views:f,duration:d.lengthSeconds?g.nQ(d.lengthSeconds):0,link:d.kk(b),title:d.title});e=e.Z["ytp-suggestion-image"];d=d.kc(b);e.style.backgroundImage=d?"url("+d+")":""}for(;c<a.B.length;c++)a.B[c].element.style.display="none";vT(a)};
tT=function(a){g.J.call(this);this.B=a;this.A=new dq(0,0,.4,0,.2,1,1,1);this.l=new g.Rp(this.o,window,this);g.K(this,this.l)};
xT=function(a,b,c){var d=b.Eb(c);var e=g.U(a),f=d.kc(e,"default.jpg");g.W.call(this,{D:"a",W:["ytp-video-menu-item","ytp-button"],N:{role:"menuitemradio","aria-label":d.title,href:e.getVideoUrl(d.videoId,b.listId?b.listId.toString():null)},G:[{D:"div",J:"ytp-video-menu-item-index",G:[String(c+1)]},{D:"div",J:"ytp-video-menu-item-now-playing",G:["\u25b6"]},{D:"div",J:"ytp-video-menu-item-thumbnail",N:{style:f?"background-image: url("+f+");":null}},{D:"div",J:"ytp-video-menu-item-title",G:[d.title]},
{D:"div",J:"ytp-video-menu-item-author",G:[d.author]}]});this.g=a;this.Oa=c;this.ea("click",this.l)};
yT=function(a){yS.call(this,a,{D:"div",J:"ytp-playlist-menu",N:{role:"dialog",id:AM()},G:[{D:"div",J:"ytp-playlist-menu-header",G:[{D:"div",J:"ytp-playlist-menu-title",G:[{D:"a",J:"ytp-playlist-menu-title-name",N:{href:"{{playlisturl}}"},G:["{{title}}"]},{D:"button",W:["ytp-playlist-menu-close","ytp-button"],N:{"aria-label":g.S("YTP_CLOSE")},G:[g.uP()]}]},{D:"div",J:"ytp-playlist-menu-subtitle",G:["{{subtitle}}"]}]},{D:"div",J:"ytp-playlist-menu-items",N:{role:"menu"}}]},250);this.M(this.Z["ytp-playlist-menu-close"],
"click",this.qb);this.M(this.Z["ytp-playlist-menu-title-name"],"click",this.sH);this.l=a;this.B=this.F=this.g=null;this.za=this.Z["ytp-playlist-menu-items"];this.C=new g.dt(this);g.K(this,this.C);this.o=[];this.hide()};
zT=function(a,b){if(a.g!=b)if(a.g&&a.g.unsubscribe("shuffle",a.kl,a),a.g=b,a.F=null,b){b.subscribe("shuffle",a.kl,a);var c=b.author;a.update({title:b.title,subtitle:g.S(c?"YTP_PLAYLIST_AUTHOR_AND_POSITION":"YTP_PLAYLIST_POSITION",{AUTHOR:c,CURRENT_POSITION:String(b.Oa+1),PLAYLIST_LENGTH:String(b.getLength())}),playlisturl:a.l.getVideoUrl(!0)});a.kl()}else a.Na()&&a.hide();else a.g&&a.kl()};
AT=function(a,b,c){var d={title:"{{title}}","aria-owns":String(c.element.id),"aria-haspopup":"true","aria-label":g.S("YTP_PLAYLIST")};g.W.call(this,{D:"button",W:["ytp-playlist-menu-button","ytp-button"],N:d,G:[{D:"div",J:"ytp-playlist-menu-button-icon",G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-playlist"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"m 22.53,21.42 0,6.85 5.66,-3.42 -5.66,-3.42 0,0 z m -11.33,0 9.06,0 0,2.28 -9.06,0 0,-2.28 0,0 z m 0,-9.14 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z m 0,4.57 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z",
fill:"#fff"}}]}]},{D:"div",J:"ytp-playlist-menu-button-text",G:["{{text}}"]}]});this.o=a;this.g=null;this.A=b.l;this.M(a,"videodatachange",this.B);this.M(a,"onPlaylistUpdate",this.B);this.M(a,"presentingplayerstatechange",this.l);this.M(a,"appresize",this.l);this.hide();this.B();g.De(this,LS(this.A,this.element));this.ea("click",(0,g.A)(c.ag,c,this.element,!1))};
BT=function(a,b){g.W.call(this,{D:"button",W:["ytp-replay-button","ytp-button"],N:{title:g.S("YTP_REPLAY")},G:[DP()]});this.g=a;this.M(a,"presentingplayerstatechange",this.o);this.ea("click",this.l,this);var c=g.yL(a);g.JM(this,g.T(c,2));LS(b.l,this.element)};
CT=function(a,b){var c=AM();c={D:"div",J:"ytp-share-panel",N:{id:AM(),role:"dialog","aria-labelledby":c},G:[{D:"button",W:["ytp-share-panel-close","ytp-button"],N:{title:g.S("YTP_CLOSE")},G:[g.uP()]},{D:"div",J:"ytp-share-panel-inner-content",G:[{D:"div",J:"ytp-share-panel-title",N:{id:c},G:[g.S("YTP_SHARE")]},{D:"a",W:["ytp-share-panel-link","ytp-no-contextmenu"],N:{href:"{{link}}",target:"_blank",title:g.S("YTP_SHARE_LINK"),"aria-label":g.S("YTP_SHARE_LINK")},G:["{{linkText}}"]},{D:"label",J:"ytp-share-panel-include-playlist",
G:[{D:"input",J:"ytp-share-panel-include-playlist-checkbox",N:{type:"checkbox",checked:!0}},g.S("YTP_SHARE_WITH_PLAYLIST_2")]},{D:"div",J:"ytp-share-panel-loading-spinner",G:[bS()]},{D:"div",J:"ytp-share-panel-service-buttons",G:["{{buttons}}"]},{D:"div",J:"ytp-share-panel-error",G:[g.S("YTP_SHARE_PANEL_ERROR")]}]}]};yS.call(this,a,c,250);this.g=a;this.l=b.l;this.o=[];this.L=this.Z["ytp-share-panel-inner-content"];this.C=this.Z["ytp-share-panel-close"];this.M(this.C,"click",this.qb);g.De(this,LS(this.l,
this.C));this.F=this.Z["ytp-share-panel-include-playlist-checkbox"];this.M(this.F,"click",this.Ht);this.B=this.Z["ytp-share-panel-link"];g.De(this,LS(this.l,this.B));this.ea("click",this.tG);this.M(a,"videoplayerreset",this.hide);this.M(a,"fullscreentoggled",this.AD);this.hide()};
Cba=function(a){switch(a){case "facebook":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-share-facebook"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},G:[{D:"rect",N:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",N:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z m -1.9,3.8 0,5.7 -3.8,0 c -1.04,0 -1.9,.84 -1.9,1.9 l 0,3.8 5.7,0 0,5.7 -5.7,0 0,13.3 -5.7,0 0,-13.3 -3.8,0 0,-5.7 3.8,0 0,-4.75 c 0,-3.67 2.97,-6.65 6.65,-6.65 l 4.75,0 z",
fill:"#39579b"}}]};case "googleplus":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-share-googleplus"]}:{D:"svg",N:{height:"100%",version:"1.0",viewBox:"0 0 38 38",width:"100%"},G:[{D:"rect",N:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",N:{d:"M34.3,0H3.7C1.7,0,0,1.7,0,3.7v30.5c0,2,1.7,3.7,3.7,3.7h30.5c2,0,3.7-1.7,3.7-3.7V3.7C38,1.7,36.3,0,34.3,0z M13.3,28.5c-5.2,0-9.5-4.3-9.5-9.5c0-5.2,4.3-9.5,9.5-9.5c2.6,0,4.7,.9,6.4,2.5l-2.7,2.7c-1-0.9-2.2-1.4-3.6-1.4 c-3.1,0-5.6,2.6-5.6,5.7s2.5,5.7,5.6,5.7c2.8,0,4.7-1.6,5.1-3.8h-5.1v-3.6h8.9c0.1,.6,.2,1.3,.2,2C22.4,24.6,18.8,28.5,13.3,28.5 z M34.2,19.6H31v3.2h-2.2v-3.2h-3.2v-2.2h3.2v-3.2H31v3.2h3.2V19.6z",
fill:"#dc4537"}}]};case "twitter":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-share-twitter"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},G:[{D:"rect",N:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",N:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z M 29.84,13.92 C 29.72,22.70 24.12,28.71 15.74,29.08 12.28,29.24 9.78,28.12 7.6,26.75 c 2.55,.40 5.71,-0.60 7.41,-2.06 -2.50,-0.24 -3.98,-1.52 -4.68,-3.56 .72,.12 1.48,.09 2.17,-0.05 -2.26,-0.76 -3.86,-2.15 -3.95,-5.07 .63,.28 1.29,.56 2.17,.60 C 9.03,15.64 7.79,12.13 9.21,9.80 c 2.50,2.75 5.52,4.99 10.47,5.30 -1.24,-5.31 5.81,-8.19 8.74,-4.62 1.24,-0.23 2.26,-0.71 3.23,-1.22 -0.39,1.23 -1.17,2.09 -2.11,2.79 1.03,-0.14 1.95,-0.38 2.73,-0.77 -0.47,.99 -1.53,1.9 -2.45,2.66 l 0,0 z",
fill:"#01abf0"}}]};default:return null}};
DT=function(a){for(var b=g.q(a.o),c=b.next();!c.done;c=b.next())c=c.value,g.FM(c),g.Ee(c);a.o=[]};
ET=function(a,b,c,d){g.W.call(this,{D:"button",W:["ytp-button","ytp-share-button"],N:{title:g.S("YTP_SHARE"),"aria-haspopup":"true","aria-owns":c.element.id,"data-tooltip-opaque":String(g.U(a).K)},G:[{D:"div",J:"ytp-share-icon",G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-sharrow"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 20.20,14.19 0,-4.45 7.79,7.79 -7.79,7.79 0,-4.56 C 16.27,20.69 12.10,21.81 9.34,24.76 8.80,25.13 7.60,27.29 8.12,25.65 9.08,21.32 11.80,17.18 15.98,15.38 c 1.33,-0.60 2.76,-0.98 4.21,-1.19 z"}}]}]},
{D:"div",J:"ytp-share-title",G:["{{share}}"]}]});this.g=a;this.o=d;this.F=c;this.B=this.l=!1;WL(a,this.element,this,28664);this.ea("click",this.C);this.M(a,"videodatachange",this.A);this.M(a,"appresize",this.A);this.A();g.De(this,LS(b.l,this.element))};
FT=function(a,b){g.W.call(this,{D:"button",W:["ytp-airplay-button","ytp-button"],N:{title:g.S("YTP_AIRPLAY")},G:["{{icon}}"]});this.g=a;this.ea("click",this.o);this.M(a,"airplayactivechange",this.l);this.M(a,"airplayavailabilitychange",this.l);this.l();g.De(this,LS(b.l,this.element))};
GT=function(a,b,c,d,e){var f=b.to/b.rows,k=Math.min(c/(b.uo/b.columns),d/f),l=b.uo*k,m=b.to*k;l=Math.floor(l/b.columns)*b.columns;m=Math.floor(m/b.rows)*b.rows;var n=l/b.columns,p=m/b.rows,u=-b.uq*n,v=-b.Tb*p;e&&45>=f&&(p-=1/k);n-=2/k;a=a.style;a.width=n+"px";a.height=p+"px";e||(d=(d-p)/2,c=(c-n)/2,a.marginTop=Math.floor(d)+"px",a.marginBottom=Math.ceil(d)+"px",a.marginLeft=Math.floor(c)+"px",a.marginRight=Math.ceil(c)+"px");a.background="url("+b.url+") "+u+"px "+v+"px/"+l+"px "+m+"px";if(e)return new g.bd(n,
p)};
HT=function(a,b){g.bP.call(this,{D:"div",J:"ytp-storyboard",G:[{D:"div",J:"ytp-storyboard-filmstrip",G:[{D:"div",J:"ytp-storyboard-thumbnail"}]},{D:"div",J:"ytp-storyboard-lens",G:[{D:"div",J:"ytp-storyboard-lens-thumbnail"},{D:"div",J:"ytp-storyboard-lens-timestamp-wrapper",G:[{D:"span",J:"ytp-storyboard-lens-timestamp"}]}]}]});this.l=a;this.V=b.l;this.L=new g.Hl(this.aA,250,this);g.K(this,this.L);this.H=g.zL(a).Da().width;this.g=this.Z["ytp-storyboard-filmstrip"];this.ba=this.Z["ytp-storyboard-lens"];
this.fa=this.Z["ytp-storyboard-lens-thumbnail"];this.ia=this.Z["ytp-storyboard-lens-timestamp"];this.X=this.Z["ytp-storyboard-thumbnail"];g.Ed(this.X);this.I=0;this.P=!1;this.K=this.A=this.o=window.NaN;this.kb=this.B=null;this.C=new g.dt(this);g.K(this,this.C);this.F=new g.fQ(this,100);g.K(this,this.F);this.M(this.l,"appresize",this.pz);this.M(this.l,"presentingplayerstatechange",this.KB)};
IT=function(a,b){var c=!!a.kb;c&&a.kb.unsubscribe("l",a.Bl,a);a.kb=b&&g.OD(b);a.P=!!b&&b.oa;a.kb?(c||(a.C.M(a.l,"videodatachange",a.LB),a.C.M(a.l,"progresssync",a.Jk),a.C.M(a.l,"videoplayerreset",a.Jk)),a.kb.subscribe("l",a.Bl,a),a.K=window.NaN,a.o=window.NaN,a.A=window.NaN,a.Jk(),a.F.show(200)):(c&&g.ft(a.C),a.L.stop(),g.Ut(a.I),a.F.hide(),a.F.stop())};
JT=function(a,b,c,d){var e=a.X.cloneNode(!1);a=bC(a.kb,b,c);GT(e,a,c,d);return e};
KT=function(a){g.W.call(this,{D:"div",J:"ytp-storyboard-framepreview",G:[{D:"div",J:"ytp-storyboard-framepreview-img"}]});this.B=this.Z["ytp-storyboard-framepreview-img"];this.g=a;this.kb=null;this.A=window.NaN;this.l=new g.dt(this);g.K(this,this.l);this.o=new g.fQ(this,100);g.K(this,this.o);this.M(this.g,"presentingplayerstatechange",this.MB)};
MT=function(a,b){var c=!!a.kb;a.kb=b&&g.OD(b);a.kb?(c||(a.l.M(a.g,"videodatachange",a.OB),a.l.M(a.g,"progresssync",a.NB),a.l.M(a.g,"appresize",a.qz)),a.A=window.NaN,LT(a),a.o.show(200)):(c&&g.ft(a.l),a.o.hide(),a.o.stop())};
LT=function(a){var b=a.g.getCurrentTime(),c=g.zL(a.g).Da(),d=aC(a.kb,c.width);b=a.kb.g[d].Ii(b);b!=a.A&&(a.A=b,dC(a.kb,b,c.width),b=bC(a.kb,b,c.width),GT(a.B,b,c.width,c.height))};
OT=function(a,b){g.W.call(this,{D:"button",W:["ytp-fullscreen-button","ytp-button"],N:{title:"{{title}}"},G:["{{icon}}"]});this.l=a;this.B=b;this.g=null;this.o=LS(b.l,this.element);this.A=new g.P(this.uy,2E3,this);g.K(this,this.A);this.M(a,"fullscreentoggled",this.Jv);this.M(a,"presentingplayerstatechange",this.Et);this.ea("click",this.nD);if(Hs()){var c=g.zL(this.l);this.M(c,Ls(),this.qu);this.M(c,Ks(window.document),this.oD)}g.U(a).ma||NT(this);this.Et();this.Jv(a.isFullscreen())};
NT=function(a){if(!a.g){var b=g.S(null!=Gs(["requestFullscreen","webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen"],window.document.body)?"YTP_FULLSCREEN_GENERIC_ERROR":"YTP_FULLSCREEN_UNSUPPORTED_ERROR").split(/\$(BEGIN|END)_LINK/);a.g=new yS(a.l,{D:"div",W:["ytp-popup","ytp-generic-popup"],N:{role:"alert",tabindex:"0"},G:[b[0],{D:"a",N:{href:"https://support.google.com/youtube/answer/6276924",target:"_blank"},G:[b[2]]},b[4]]},100,!0);a.g.hide();g.K(a,a.g);a.g.subscribe("show",
(0,g.A)(a.B.sm,a.B,a.g));g.TL(a.l,a.g.element,4);a.element.setAttribute("aria-disabled",!0);a.element.setAttribute("aria-haspopup",!0);a.o();a.o=null}};
PT=function(a){var b={D:"div",J:"ytp-multicam-menu",N:{role:"dialog"},G:[{D:"div",J:"ytp-multicam-menu-header",G:[{D:"div",J:"ytp-multicam-menu-title",G:[g.S("YTP_SWITCH_CAMERA"),{D:"button",W:["ytp-multicam-menu-close","ytp-button"],N:{"aria-label":g.S("YTP_CLOSE")},G:[g.uP()]}]}]},{D:"div",J:"ytp-multicam-menu-items"}]};yS.call(this,a,b,250);this.o=new g.dt(this);g.K(this,this.o);this.M(this.Z["ytp-multicam-menu-close"],"click",this.qb);this.g=a;this.za=this.Z["ytp-multicam-menu-items"];this.l=
[];this.hide()};
QT=function(a,b,c){g.W.call(this,{D:"button",W:["ytp-multicam-button","ytp-button"],N:{title:g.S("YTP_SWITCH_CAMERA"),"aria-haspopup":"true","data-preview":"{{preview}}","data-tooltip-text":"{{text}}"},G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-switch-camera"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M 26,10 22.83,10 21,8 15,8 13.17,10 10,10 c -1.1,0 -2,.9 -2,2 l 0,12 c 0,1.1 .9,2 2,2 l 16,0 c 1.1,0 2,-0.9 2,-2 l 0,-12 c 0,-1.1 -0.9,-2 -2,-2 l 0,0 z m -5,11.5 0,-2.5 -6,0 0,2.5 -3.5,-3.5 3.5,-3.5 0,2.5 6,0 0,-2.5 3.5,3.5 -3.5,3.5 0,0 z",
fill:"#fff"}}]}]});this.g=a;this.A=!1;this.l=b.l;this.B=new g.P(this.F,400,this);g.K(this,this.B);this.ea("click",(0,g.A)(c.ag,c,this.element,!1));this.M(a,"presentingplayerstatechange",g.B(this.o,!1));this.M(a,"videodatachange",this.C);this.o(!0);g.De(this,LS(this.l,this.element))};
RT=function(){g.J.call(this);this.B=null;this.A=this.g=0;this.o=new g.Rp(this.l,null,this);g.K(this,this.o)};
ST=function(a,b){if("path"==b.D)return b.N.d;if(b.G)for(var c=0;c<b.G.length;c++){var d=b.G[c];if(d&&!g.w(d)&&(d=ST(a,d)))return d}};
WT=function(a,b,c){c=ST(a,c);var d=b.getElementsByTagName("path")[0],e=d.getAttribute("d");if(d.getAttribute("id")){var f=AM();b=b.getElementsByTagName("use");for(var k=0;k<b.length;k++)b[k].setAttributeNS("http://www.w3.org/1999/xlink","href","#"+f);d.setAttribute("id",f)}var l=TT(e),m=TT(c);UT(a,function(a){d.setAttribute("d",VT(l,m,a))},200)};
UT=function(a,b,c){a.B=b;a.A=g.Mt();a.g=c;a.l()};
TT=function(a){var b=[];a=a.match(Dba);for(var c=0;c<a.length;c++){var d=(0,window.parseFloat)(a[c]);b.push((0,window.isNaN)(d)?a[c]:d)}return b};
VT=function(a,b,c){for(var d="",e=0;e<a.length;e++){var f=a[e];d=g.va(f)?d+(f+(b[e]-f)*c):d+f}return d};
ZT=function(a,b){var c=g.U(a);g.W.call(this,{D:"button",W:["ytp-mute-button","ytp-button"],N:c.U?{title:"{{title}}"}:{"aria-disabled":"true","aria-haspopup":"true"},G:["{{icon}}"]});this.updateValue("icon",JP());this.g=a;this.ba=b.l;this.H=this.K=this.I=this.P=window.NaN;this.C=[];this.B=[];this.F=this.o=!1;g.U(this.g).X||(this.l=new g.CM({D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"defs",G:[{D:"clipPath",N:{id:"ytp-svg-volume-animation-mask"},G:[{D:"path",N:{d:"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"}},
{D:"path",N:{d:"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"}},{D:"path",J:"ytp-svg-volume-animation-mover",N:{d:"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"}}]},{D:"clipPath",N:{id:"ytp-svg-volume-animation-slash-mask"},G:[{D:"path",J:"ytp-svg-volume-animation-mover",N:{d:"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"}}]}]},{D:"path",Fa:!0,W:["ytp-svg-fill","ytp-svg-volume-animation-speaker"],N:{"clip-path":"url(#ytp-svg-volume-animation-mask)",d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",
fill:"#fff"}},{D:"path",Fa:!0,W:["ytp-svg-fill","ytp-svg-volume-animation-hider"],N:{"clip-path":"url(#ytp-svg-volume-animation-slash-mask)",d:"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z",fill:"#fff"}}]}),g.K(this,this.l),this.R=this.l.Z["ytp-svg-volume-animation-speaker"],this.ma=this.R.getAttribute("d"),this.C=g.jd("ytp-svg-volume-animation-mover",this.l.element),this.B=g.jd("ytp-svg-volume-animation-hider",this.l.element));this.A=null;this.V=new RT;g.K(this,this.V);this.L=new RT;g.K(this,this.L);
this.ea("click",this.fa);this.M(a,"appresize",this.Fc);this.M(a,"onVolumeChange",this.ia);var d=null;c.U?g.De(this,LS(b.l,this.element)):(c=g.S("YTP_VOLUME_UNSUPPORTED_ERROR").split(/\$(BEGIN|END)_LINK/),d=new yS(a,{D:"span",W:["ytp-popup","ytp-generic-popup"],N:{tabindex:"0"},G:[c[0],{D:"a",N:{href:"https://support.google.com/youtube/?p=noaudio",target:"_blank"},G:[c[2]]},c[4]]},100,!0),g.K(this,d),d.hide(),d.subscribe("show",(0,g.A)(b.sm,b,d)),g.TL(a,d.element,4));this.X=d;WL(a,this.element,this,
28662);this.Fc(g.zL(a).Da());XT(this,a.getVolume(),a.isMuted())};
XT=function(a,b,c){var d=c?0:b/100,e=g.U(a.g);if(e.X)d=0==d?JP():0<d&&.5>d?IP():HP(),d!=a.A&&(a.updateValue("icon",d),a.A=d);else{b=0==d?1:50<b?1:0;if(a.I!=b){var f=a.P;(0,window.isNaN)(f)?$T(a,b):UT(a.V,(0,g.A)(function(a){$T(this,f+(this.I-f)*a)},a),250);
a.I=b}d=0==d?1:0;if(a.H!=d){var k=a.K;(0,window.isNaN)(k)?aU(a,d):UT(a.L,(0,g.A)(function(a){aU(this,k+(this.H-k)*a)},a),250);
a.H=d}}e.U&&(a.updateValue("title",c?g.S("YTP_UNMUTE"):g.S("YTP_MUTE")),bU(a.ba))};
$T=function(a,b){a.P=b;var c=a.ma;b&&(c+=VT(Eba,Fba,b));a.R.setAttribute("d",c)};
aU=function(a,b){a.K=b;for(var c=20*b,d=0;d<a.C.length;d++)a.C[d].setAttribute("transform","translate("+c+", "+c+")");var e;1==b?e=JP():e=a.l;for(c=0;c<a.B.length;c++)a.B[c].style.display=0==b?"none":"";e!=a.A&&(a.updateValue("icon",e),a.A=e)};
cU=function(a,b){g.W.call(this,{D:"button",W:["ytp-pip-button","ytp-button"],N:{title:g.S("YTP_PIP")},G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-pip"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z",fill:"#fff"}}]}]});
this.g=a;this.ea("click",this.l);g.De(this,LS(b.l,this.element))};
eU=function(a,b){g.W.call(this,{D:"button",W:["ytp-play-button","ytp-button"],N:{title:"{{title}}","aria-label":"{{label}}"},G:["{{icon}}"]});this.l=a;this.o=null;this.A=b.l;this.g=null;this.B=new RT;g.K(this,this.B);this.M(a,"fullscreentoggled",this.C);this.M(a,"presentingplayerstatechange",this.F);this.M(a,"videodatachange",this.C);dU(this,g.yL(a));this.ea("click",this.H,this)};
fU=function(a){switch(a){case 1:return BP();case 2:return AP();case 3:return DP();case 4:return GP();default:return null}};
dU=function(a,b){var c=g.UD(a.l.Y()),d=!1;if(IE(b))var e=c?4:2;else g.T(b,2)?(e=3,d=c):e=1;a.element.disabled=d;if(a.o!=e){switch(e){case 2:var f=g.S("YTP_PAUSE");break;case 3:f=g.S("YTP_REPLAY");break;case 1:f=g.S("YTP_PLAY");break;case 4:f=g.S("YTP_STOP")}3==e?(a.g||(a.g=LS(a.A,a.element)),a.update({title:f,label:null,icon:fU(e)})):(a.g&&(a.g(),a.g=null),a.update({title:null,label:f}),(c=fU(e))&&a.o&&3!=a.o&&!g.U(a.l).X?WT(a.B,a.element,c):a.updateValue("icon",c));bU(a.A);a.o=e}};
hU=function(a,b,c){if(c){var d="ytp-next-button";var e=yP()}else d="ytp-prev-button",e=CP();g.W.call(this,{D:"a",W:[d,"ytp-button"],N:{title:"{{title}}",href:"{{url}}","data-preview":"{{preview}}","data-tooltip-text":"{{text}}","data-duration":"{{duration}}","aria-disabled":"{{disabled}}","data-next":"{{next}}","data-prev":"{{prev}}"},G:[e]});this.g=a;this.K=b.l;this.o=c;this.l=this.C=null;this.I=!1;this.F=this.H=this.A=null;this.B=!1;this.M(a,"fullscreentoggled",this.th);this.M(a,"videodatachange",
this.th);this.M(a,"onPlaylistUpdate",this.th);this.o||this.M(a,"appresize",this.Fc);this.M(a,"mdxpreviousnextchange",function(){gU(this);this.Fc()});
this.th()};
iU=function(a){a.l&&a.l.unsubscribe("shuffle",a.th,a)};
jU=function(a){return!!a.l&&!a.o&&!!a.C&&!a.C.oa&&3<=a.g.getCurrentTime()&&2!=a.g.Ca()};
kU=function(a){var b=g.xL(g.sL(a.g));return b?a.o?b.hasNext():b.te():!1};
gU=function(a){var b={duration:null,preview:null,text:null,title:null,url:null},c=g.U(a.g),d=AL(a.g),e=a.o&&g.UL(a.g),f=kU(a);if(a.B)b.title=g.S("YTP_REPLAY");else if(d){var k=null;a.l&&(k=a.l.Eb(a.o?WF(a.l):XF(a.l)));if(k){if(k.videoId){var l=a.l.listId;b.url=c.getVideoUrl(k.videoId,l?l.toString():void 0)}b.text=k.title;b.duration=k.lengthSeconds?g.nQ(k.lengthSeconds):null;b.preview=k.kc(c,"mqdefault.jpg")}b.title=g.S(a.o?"YTP_NEXT":"YTP_PREVIOUS")}else e&&(a.C.suggestions&&a.C.suggestions.length&&
(k=g.RR(a.C.suggestions[0]),b.url=k.kk(c),b.text=k.title,b.duration=k instanceof g.qD?g.nQ(k.lengthSeconds):null,b.preview=k.kc(c,"mqdefault.jpg")),b.title=g.S("YTP_NEXT"));b.disabled=!e&&!d&&!f;a.update(b);a.I=!!b.url;e||d||a.B||f?a.A||(a.A=LS(a.K,a.element),a.H=a.ea("click",a.wD,a)):a.A&&(a.A(),a.A=null,a.Pa(a.H),a.H=null);bU(a.K)};
lU=function(){this.l=this.position=this.A=this.g=this.B=this.o=this.width=window.NaN};
nU=function(a,b){g.bP.call(this,{D:"div",J:"ytp-progress-bar-container",N:{"aria-disabled":"true"},G:[{D:"div",W:["ytp-progress-bar",g.U(a).l?"ytp-mobile":""],N:{tabindex:"0",role:"slider","aria-label":g.S("YTP_SEEK_SLIDER"),"aria-valuemin":"{{ariamin}}","aria-valuemax":"{{ariamax}}","aria-valuenow":"{{arianow}}","aria-valuetext":"{{arianowtext}}"},G:[{D:"div",J:"ytp-progress-bar-padding"},{D:"div",J:"ytp-progress-list",G:[{D:"div",W:["ytp-play-progress","ytp-swatch-background-color"]},{D:"div",J:"ytp-load-progress"},
{D:"div",J:"ytp-hover-progress"},{D:"div",J:"ytp-clip-start-exclude"},{D:"div",J:"ytp-clip-end-exclude"},{D:"div",J:"ytp-ad-progress-list"},{D:"div",J:"ytp-marker-crenellation-list"},{D:"div",J:"ytp-marker-progress-list"}]},{D:"div",J:"ytp-scrubber-container",G:[{D:"div",W:["ytp-scrubber-button","ytp-swatch-background-color"],G:[{D:"div",J:"ytp-scrubber-pull-indicator"}]}]}]},{D:"div",J:"ytp-bound-time-left",G:["{{boundTimeLeft}}"]},{D:"div",J:"ytp-bound-time-right",G:["{{boundTimeRight}}"]},{D:"div",
J:"ytp-clip-start",N:{title:g.S("YTP_WATCH_ALL")},G:["{{clipstarticon}}"]},{D:"div",J:"ytp-clip-end",N:{title:g.S("YTP_WATCH_ALL")},G:["{{clipendicon}}"]}]});this.updateValue("clipstarticon",tP());this.updateValue("clipendicon",sP());this.l=a;this.Ga=b.l;this.Ma=!1;this.B=this.Ab=0;this.V=1;this.Mb=this.F=0;this.o=null;this.Ua=!1;this.I=this.ma=0;this.Yb=this.Z["ytp-ad-progress-list"];this.Bc=this.Z["ytp-marker-progress-list"];this.Ta=this.Z["ytp-marker-crenellation-list"];this.P={};this.ia={};this.K=
window.Infinity;var c=b.l;this.X=this.Z["ytp-clip-end"];g.De(this,LS(c,this.X));this.sa=new g.ht(this.X,!0);g.K(this,this.sa);this.sa.subscribe("hoverstart",this.iu,this);this.sa.subscribe("hoverend",this.hu,this);this.M(this.X,"click",this.jl);this.Ra=this.Z["ytp-clip-end-exclude"];this.Ec=this.Z["ytp-clip-start-exclude"];this.L=0;this.ba=this.Z["ytp-clip-start"];g.De(this,LS(c,this.ba));this.ya=new g.ht(this.ba,!0);g.K(this,this.ya);this.ya.subscribe("hoverstart",this.iu,this);this.ya.subscribe("hoverend",
this.hu,this);this.M(this.ba,"click",this.jl);this.bb=this.Z["ytp-load-progress"];this.fa=0;this.Gc=this.Z["ytp-play-progress"];this.Ya=this.Z["ytp-hover-progress"];this.C=0;this.zb=this.Z["ytp-progress-bar"];this.A=null;this.Sc=this.Z["ytp-scrubber-button"];this.Tc=this.Z["ytp-scrubber-container"];this.wa=new g.Zc;this.Wa=new lU;this.g=new CQ(0,0);this.H=this.Ka=!1;this.Za=null;this.M(a,"presentingplayerstatechange",this.lz);this.M(a,"videodatachange",this.Gt);this.M(a,"videoplayerreset",this.kz);
this.M(a,"cuerangesadded",this.Aw);this.M(a,"cuerangesremoved",this.mI);this.M(a,"cuerangemarkersupdated",this.Aw);this.M(a,"onPlaybackQualityChange",this.oz);mU(this,a.Y(),!0)};
rU=function(a){if(a.B){var b=a.l.Qf(),c=new CQ(b.seekableStart,b.seekableEnd),d=EQ(c,b.loaded,0);b=EQ(c,b.current,0);var e=a.g.l!=c.l||a.g.g!=c.g;a.g=c;oU(a,b,d);e&&pU(a);qU(a)}};
mU=function(a,b,c){c=void 0===c?!1:c;var d=!!b&&b.Nc();a.Ka=d&&b.Ne;sU(a,a.l.qc());c&&(d?(c=b.clipEnd,a.L=b.clipStart,a.K=c,tU(a),oU(a,a.C,a.fa)):a.jl(),b=a.Ga,1==b.g&&b.Yd());rU(a)};
uU=function(a){return!!a&&a.Nc()&&!!a.Ba&&a.Ba.video.isAccelerated&&a.Ba.video.o};
vU=function(a,b){a.Ua=b;g.O(a.bb,"ytp-fast-load",b)};
wU=function(a,b,c,d){b=g.Vc(b,0,a.H?60:40);a.F=b;var e=a.V,f=Math.max(a.g.getLength()/a.B,1);a.V=b/(a.H?60:40)*(f-1)+1;b=a.B*a.V;a.I=g.Vc(d*b-c,0,b-a.B);e!=a.V&&pU(a)};
pU=function(a){var b=xU(a),c=-b.o/b.g,d=(-b.o+b.width)/b.g,e=g.Hd(a.Ta),f=0;if(a.F>.2*(a.H?60:40)){var k=c*(a.g.getLength()/60),l=d*(a.g.getLength()/60);for(k=Math.ceil(k);k<l;k++){var m=e[f];m||(m=g.zd("DIV"),a.Ta.appendChild(m));f++;m.className=0==k%60?"ytp-60m-progress":0==k%30?"ytp-30m-progress":0==k%15?"ytp-15m-progress":"ytp-1m-progress";var n=(60*k/a.g.getLength()-c)*b.g;m.style.left=n+"px"}}b=a.Ka?a.g.g:0;a.update({boundTimeLeft:g.nQ(DQ(a.g,c)-b),boundTimeRight:g.nQ(DQ(a.g,d)-b)});for(c=e.length-
1;c>=f;c--)g.Ed(e[c]);a.element.style.height=a.F+(a.H?8:5)+"px";a.O("height-change",a.F);a.Sc.style.height=a.F+(a.H?20:13)+"px";for(var p in a.P)yU(a,a.P[p],a.ia[p]);tU(a);oU(a,a.C,a.fa)};
xU=function(a){var b=a.wa.x,c=a.B*a.V;b=g.Vc(b,0,a.B);a.Wa.update(b,a.B,-a.I,-(c-a.I-a.B));return a.Wa};
oU=function(a,b,c){a.C=b;a.fa=c;var d=xU(a),e=a.g.g,f=DQ(a.g,a.C);a.update({ariamin:Math.floor(a.g.l),ariamax:Math.floor(e),arianow:Math.floor(f),arianowtext:g.S("YTP_PROGRESS_LABEL_2",{PLAY_PROGRESS:g.nQ(f),DURATION:g.nQ(e)})});e=EQ(a.g,a.L,0);var k=EQ(a.g,a.K,1);f=g.Vc(b,e,k);c=a.Ua?1:g.Vc(c,e,k);g.mh(a.Tc,"transform","translateX("+(b*d.g+d.o)+"px)");zU(a,a.Gc,d,e,f);zU(a,a.bb,d,e,c)};
zU=function(a,b,c,d,e,f){b.style.left=Math.max(d*c.g+c.o,0)+"px";d=g.Vc((e-d)*c.g+c.o,0,c.width);(void 0===f?0:f)||g.U(a.l).l?b.style.width=d+"px":g.mh(b,"transform","scalex("+(c.width?d/c.width:0)+")")};
tU=function(a){var b=a.L>a.g.l,c=0<a.g.g&&a.K<a.g.g;g.O(a.element,"ytp-clip-start-enabled",b);g.O(a.element,"ytp-clip-end-enabled",c);b=b?EQ(a.g,a.L,0):0;c=c?EQ(a.g,a.K,1):1;a.ba.style.left=Math.round(1E3*b)/10+"%";a.X.style.left=Math.round(1E3*c)/10+"%";a.Ec.style.width=Math.round(1E3*b)/10+"%";a.Ra.style.left=Math.round(1E3*c)/10+"%";a.Ra.style.width=Math.round(1E3*(1-c))/10+"%"};
qU=function(a){var b=xU(a);zU(a,a.Ya,b,a.C,b.l);g.O(a.Ya,"ytp-hover-progress-light",b.l>a.C)};
yU=function(a,b,c){var d=xU(a),e=EQ(a.g,b.start/1E3,0),f=LF(b)/d.width;switch(b.style){case "ytp-chapter-marker":var k=e+f/2;e-=f/2;break;default:k=EQ(a.g,b.end/1E3,1),f!=Number.POSITIVE_INFINITY&&(e=g.Vc(e,0,k-f)),k=Math.min(k,e+f),b.color&&(c.style.background=b.color)}zU(a,c,d,e,k,!0);c.className=b.style};
AU=function(a,b){var c=b.getId();a.P[c]==b&&(g.Ed(a.ia[c]),delete a.P[c],delete a.ia[c])};
sU=function(a,b){b?a.A||(a.element.removeAttribute("aria-disabled"),a.A=new g.ht(a.zb,!0),a.A.subscribe("hovermove",a.EG,a),a.A.subscribe("hoverend",a.DG,a),a.A.subscribe("dragstart",a.CG,a),a.A.subscribe("dragmove",a.GG,a),a.A.subscribe("dragend",a.FG,a),a.Za=a.ea("keydown",a.xD)):a.A&&(a.element.setAttribute("aria-disabled",!0),a.Pa(a.Za),a.A.cancel(),a.A.dispose(),a.A=null)};
BU=function(a,b){dT.call(this,g.S("YTP_ANNOTATIONS"),5);this.A=b;this.o=a;this.g=!1;this.M(a,"videodatachange",this.B);this.M(a,"onApiChange",this.B);this.subscribe("select",this.C,this);this.B()};
g.CU=function(a,b,c,d,e,f){var k=g.PS({"aria-haspopup":"true"});g.OS.call(this,k,b,a);this.o=d;this.H=!1;this.C=null;this.l={};this.B=new g.RS(c,void 0,a,e,f);g.K(this,this.B);this.ea("keydown",this.yD);this.ea("click",this.open)};
g.DU=function(a,b){g.US(a.B);for(var c={},d=!1,e=0;e<b.length;e++){var f=b[e],k=a.l[f],l=f==a.C;l&&(d=!0);k&&k.priority==-e?(l=a,g.NS(l.l[f],l.ce(f,!0)),delete a.l[f]):(k=new g.OS({D:"div",W:["ytp-menuitem"],N:{tabindex:"0",role:"menuitemradio","aria-checked":l?"true":void 0},G:[{D:"div",W:["ytp-menuitem-label"],G:["{{label}}"]}]},-e,a.ce(f,!0)),k.ea("click",(0,g.A)(a.zD,a,f)));c[f]=k;g.SS(a.B,k,!0)}d||(a.C=null);for(var m in a.l)a.l[m].dispose();a.l=c};
EU=function(a,b){g.CU.call(this,g.S("YTP_AUDIO_TRACK_TITLE"),2,a,b);this.g=a;this.I=new g.W({D:"div",G:[{D:"span",G:[g.S("YTP_AUDIO_TRACK_TITLE")]},{D:"span",J:"ytp-menuitem-label-count",G:["{{content}}"]}]});g.NS(this,this.I);this.K={};this.M(a,"videodatachange",this.F);this.M(a,"onPlaybackAudioChange",this.F);this.F()};
FU=function(a,b){dT.call(this,g.S("YTP_AUTOPLAY"),6);this.C=b;this.g=a;this.A=!1;this.o=[];this.M(a,"presentingplayerstatechange",this.B);this.subscribe("select",this.H,this);this.B()};
GU=function(a,b){g.CU.call(this,g.S("YTP_QUALITY_TITLE"),1,a,b);g.M(this.B.element,"ytp-quality-menu");this.g=a;this.I={};this.F="unknown";this.M(a,"videodatachange",this.A);this.M(a,"videoplayerreset",this.A);this.M(a,"onPlaybackQualityChange",this.K);this.A()};
HU=function(a,b,c){a=a.I[b];var d=g.Eu[b];d=a?a.qualityLabel:d?d+"p":g.S("YTP_AUTO");c={D:"span",W:c,G:[]};a&&a.isAccelerated&&a.o&&c.G.push({D:"div",J:"ytp-menuitem-badge-container",G:[{D:"svg",N:{fill:"#00838f",height:"11px",viewBox:"0 0 48 48",width:"11px"},G:[{D:"path",N:{d:"M0 0v48h48V0H0zm10.6 30.64L4 24.05l6.69-6.69 6.6 6.59-6.69 6.69zM24 44l-6.7-6.7 13.35-13.35-13.32-13.28L24 4l20 20-20 20z"}},{D:"path",N:{d:"M 24,44 44,24 24,4 17.33,10.67 30.65,23.95 17.3,37.3 z M 10.6,30.64 17.29,23.95 10.69,17.36 4,24.05 z",
fill:"#fff"}}]}]});c.G.push(d);var e;"highres"==b?e="8K":"hd2880"==b?e="5K":"hd2160"==b?e="4K":0==b.indexOf("hd")&&(e="HD");e&&(c.G.push(" "),c.G.push({D:"sup",J:"ytp-swatch-color",G:[e]}));return c};
IU=function(a,b,c){g.W.call(this,{D:"button",W:["ytp-button","ytp-settings-button"],N:{"aria-haspopup":"true","aria-owns":AM(),title:g.S("YTP_SETTINGS")},G:[g.FP()]});this.o=c;this.g=a;this.A=!0;this.ea("click",this.B);this.M(a,"onPlaybackQualityChange",this.l);this.M(a,"videodatachange",this.l);this.M(a,"webglsettingschanged",this.l);this.M(a,"appresize",this.Fc);g.De(this,LS(b.l,this.element));this.l();this.Fc(g.zL(a).Da())};
JU=function(a,b){a.A=!!b;a.Fc(g.zL(a.g).Da())};
KU=function(a,b){g.CU.call(this,g.S("YTP_SPEED_TITLE"),4,a,b);this.g=a;this.A=null;this.M(a,"presentingplayerstatechange",this.It);this.It()};
LU=function(a){g.VS.call(this,a,"ytp-settings-menu");this.o=a;this.l=new g.RS(a);g.K(this,this.l);this.F=null;this.X=!1;this.hide();g.ZS(this,this.l)};
MU=function(a){if(!a.X){a.X=!0;var b=new GU(a.o,a);g.K(a,b);b=new BU(a.o,a);g.K(a,b);g.U(a.o).Ga&&(b=new KU(a.o,a),g.K(a,b));g.U(a.o).xd&&(b=new FU(a.o,a),g.K(a,b));b=new EU(a.o,a);g.K(a,b);JU(a.F,a.l.za.length)}};
NU=function(a,b){MU(a);g.SS(a.l,b);JU(a.F,a.l.za.length)};
OU=function(a,b){a.Na()&&1>=a.l.za.length&&a.hide();g.TS(a.l,b);JU(a.F,a.l.za.length)};
Gba=function(a,b){a.F=b;var c=a.element;var d=b.element.getAttribute("aria-owns");c.id=d};
PU=function(a,b,c){g.W.call(this,{D:"button",J:"ytp-button",N:{title:g.S("YTP_MDX_TOOLTIP"),"aria-haspopup":"true"},G:["{{icon}}"]});this.g=a;this.A=c;this.o=null;this.M(a,"onMdxReceiversChange",this.l);this.M(a,"presentingplayerstatechange",this.l);this.M(a,"appresize",this.l);this.l();this.ea("click",this.B,this);g.De(this,LS(b.l,this.element))};
QU=function(a,b){g.W.call(this,{D:"button",W:["ytp-size-button","ytp-button"],N:{title:"{{title}}"},G:["{{icon}}"]});this.g=a;this.A=b.l;this.o=null;this.B=new RT;g.K(this,this.B);this.M(a,"sizestylechange",this.l);this.M(a,"fullscreentoggled",this.l);this.M(a,"presentingplayerstatechange",this.l);this.l();this.ea("click",this.C);g.De(this,LS(this.A,this.element))};
RU=function(a,b){g.W.call(this,{D:"button",W:["ytp-subtitles-button","ytp-button"],N:{"aria-pressed":"{{pressed}}",title:g.S("YTP_SUBTITLES_TOOLTIP")},G:[vP()]});this.l=a;this.M(a,"videodatachange",this.g);this.M(a,"appresize",this.g);this.M(a,"onApiChange",this.g);this.M(a,"onCaptionsTrackListChanged",this.g);this.M(a,"captionschanged",this.g);this.g();this.ea("click",this.o);g.De(this,LS(b.l,this.element))};
SU=function(a,b){g.W.call(this,{D:"div",W:["ytp-time-display","notranslate"],G:[{D:"span",J:"ytp-time-current",G:["{{currenttime}}"]},{D:"span",J:"ytp-time-separator",G:[" / "]},{D:"span",J:"ytp-time-duration",G:["{{duration}}"]}]});this.A=new g.W({D:"button",W:["ytp-live-badge","ytp-button"],N:{disabled:"true"},G:[g.S("YTP_LIVE")]});g.K(this,this.A);this.A.ca(this.element);this.B=a;this.I=b.l;this.g=null;this.C=this.l=!1;this.H=this.F=null;this.ea("click",this.K);this.M(a,"presentingplayerstatechange",
this.o);this.M(a,"appresize",this.o);this.M(a,"videodatachange",this.L);var c=a.Y();c&&(this.l=c.oa,g.O(this.element,"ytp-live",this.l));this.o()};
UU=function(a,b,c){g.W.call(this,{D:"div",J:"ytp-volume-panel",N:{role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"{{valuenow}}","aria-valuetext":"{{valuetext}}",tabindex:"0"},G:[{D:"div",J:"ytp-volume-slider",G:[{D:"div",J:"ytp-volume-slider-handle"}]}]});this.g=a;this.C=b;this.L=c;this.I=!1;this.F=b.cd();this.R=this.A=0;this.P=this.Z["ytp-volume-slider"];this.V=this.Z["ytp-volume-slider-handle"];this.H=new g.ht(this.P,!0);g.K(this,this.H);this.H.subscribe("dragstart",this.lH,
this);this.H.subscribe("dragmove",this.kH,this);this.H.subscribe("dragend",this.jH,this);this.K=null;this.l=this.o=this.B=!1;this.M(a,"onVolumeChange",this.LD);this.M(a,"appresize",this.Fc);this.M(a,"fullscreentoggled",this.JD);this.M(a,"onShowControls",this.lq);this.M(a,"onHideControls",this.lq);this.M(this.element,"keydown",this.mH);this.M(this.element,"focus",g.B(this.Nt,!0));this.M(this.element,"blur",g.B(this.Nt,!1));this.Fc(g.zL(a).Da());TU(this,a.getVolume(),a.isMuted())};
TU=function(a,b,c){var d=Math.floor(b),e=d+"% "+g.S("YTP_SCREENREADER_VOLUME_SETTING")+(c?" "+g.S("YTP_SCREENREADER_VOLUME_MUTED"):"");c=c?0:b/100;a.updateValue("valuenow",d);a.updateValue("valuetext",e);a.V.style.left=(a.F?60:40)*c+"px";a.A=b};
VU=function(a,b,c,d,e){var f=a.o||a.B||a.l||a.I;a.o=b;a.B=c;a.l=d;a.I=e;b=a.o||a.B||a.l||a.I;f!=b&&(b?a.K=a.M(a.element,"wheel",a.KD):(a.Pa(a.K),a.K=null),g.O(a.L,"ytp-volume-slider-active",b))};
WU=function(a,b){var c=g.U(a),d=zB(c);0==d.indexOf("www.")&&(d=d.substring(4));var e=["ytp-youtube-button","ytp-button","yt-uix-sessionlink"];(c="gaming"==c.g)&&e.push("ytp-youtube-gaming-button");g.W.call(this,{D:"a",W:e,N:{href:"{{url}}",target:"_blank",title:g.S("YTP_URL_NAVIGATE_TO",{WEBSITE:d}),"data-sessionlink":"feature=player-button"},G:[c?g.Y?{D:"div",W:["ytp-icon","ytp-icon-logo-gaming"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 122 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",
N:{d:"M 45.32 10 L 45.32 25.81 L 47.39 25.81 L 47.64 24.75 L 47.68 24.75 C 47.87 25.13 48.17 25.43 48.56 25.65 C 48.95 25.87 49.37 25.98 49.84 25.98 C 50.69 25.98 51.32 25.59 51.72 24.81 C 52.12 24.03 52.32 22.81 52.32 21.15 L 52.32 19.39 C 52.34 18.13 52.26 17.15 52.11 16.44 C 51.96 15.74 51.72 15.23 51.38 14.91 C 51.04 14.60 50.57 14.44 49.98 14.44 C 49.52 14.44 49.08 14.57 48.68 14.83 C 48.48 14.96 48.31 15.11 48.15 15.29 C 48.00 15.46 47.86 15.65 47.75 15.86 L 47.74 15.86 L 47.74 10 L 45.32 10 z M 94.83 10.25 C 93.91 10.25 93.48 10.61 93.48 11.81 C 93.48 13.05 93.91 13.35 94.83 13.35 C 95.77 13.35 96.19 13.05 96.19 11.81 C 96.19 10.66 95.78 10.25 94.83 10.25 z M 67.44 10.31 C 64.14 10.31 63.40 12.21 63.40 16.34 L 63.40 20.15 C 63.40 24.06 64.21 26.00 66.56 26.00 C 68.00 26.00 68.86 25.31 69.19 23.91 L 69.55 25.81 L 71.03 25.81 L 71.03 18.25 L 71.03 18.24 L 67.41 18.24 L 67.41 20.19 L 68.82 20.19 L 68.82 21.47 C 68.82 23.38 68.38 24.10 67.34 24.10 C 66.32 24.10 66 23.12 66 20.52 L 66 16.22 C 66 13.11 66.37 12.19 67.35 12.19 C 68.01 12.19 68.40 12.58 68.53 14.02 C 68.57 14.50 68.59 15.10 68.58 15.83 L 70.83 15.68 C 71.14 12.21 70.35 10.31 67.44 10.31 z M 14.06 10.55 L 13.01 15.24 C 12.72 16.61 12.54 17.58 12.46 18.16 L 12.39 18.16 C 12.27 17.35 12.08 16.38 11.83 15.23 L 10.83 10.56 L 8.33 10.56 L 11.18 20.86 L 11.18 25.80 L 13.66 25.80 L 13.66 20.85 L 16.55 10.55 L 14.06 10.55 z M 30.33 10.56 L 30.33 12.58 L 32.83 12.58 L 32.83 25.81 L 35.27 25.81 L 35.27 12.58 L 37.76 12.58 L 37.76 10.56 L 30.33 10.56 z M 113.35 13.31 C 112.35 13.40 111.89 14.17 111.65 15.17 C 111.12 14.68 110.37 14.47 109.41 14.47 C 107.10 14.47 106.06 15.76 106.06 18.80 L 106.06 19.03 C 106.06 21.16 106.61 22.30 107.57 22.85 C 106.66 23.21 106.14 23.92 106.16 24.76 C 106.18 25.61 106.75 26.05 107.51 26.34 C 106.45 26.61 105.76 27.27 105.76 28.40 C 105.76 30.03 107.14 30.96 109.36 30.96 C 111.91 30.96 113.39 29.76 113.39 27.74 C 113.39 23.92 108.06 25.30 108.07 23.82 C 108.07 23.59 108.17 23.34 108.44 23.16 C 108.73 23.23 109.06 23.25 109.41 23.25 C 111.54 23.25 112.74 22.21 112.74 19.01 L 112.74 18.77 C 112.74 17.70 112.60 16.84 112.33 16.19 C 112.42 16.12 112.51 16.05 112.60 15.99 C 112.90 15.82 113.25 15.73 113.66 15.73 L 113.35 13.31 z M 85.40 14.43 C 84.45 14.43 83.64 14.88 83.07 15.71 C 82.99 15.82 82.91 15.95 82.84 16.08 L 82.81 16.08 L 82.58 14.66 L 80.60 14.66 L 80.60 25.81 L 83.11 25.81 L 83.11 16.91 C 83.38 16.45 83.77 16.21 84.21 16.21 C 84.75 16.21 84.99 16.66 84.99 17.57 L 84.99 25.81 L 87.5 25.81 L 87.5 17.39 C 87.5 17.23 87.50 17.08 87.48 16.93 C 87.75 16.45 88.14 16.21 88.58 16.21 C 89.12 16.21 89.36 16.66 89.36 17.57 L 89.36 25.81 L 91.88 25.81 L 91.88 17.39 C 91.88 15.52 91.29 14.42 89.77 14.43 C 88.77 14.43 87.91 14.95 87.33 15.91 C 87.05 14.97 86.45 14.43 85.40 14.43 z M 102.56 14.43 C 101.77 14.43 101.08 14.77 100.56 15.38 C 100.38 15.59 100.22 15.82 100.08 16.08 L 100.03 16.08 L 99.82 14.66 L 97.83 14.66 L 97.83 25.81 L 100.34 25.81 L 100.34 16.91 C 100.61 16.45 100.99 16.21 101.43 16.21 C 101.99 16.21 102.24 16.72 102.24 17.63 L 102.24 25.81 L 104.75 25.81 L 104.75 17.39 C 104.75 15.52 104.12 14.42 102.56 14.43 z M 19.43 14.46 C 18.59 14.46 17.92 14.63 17.41 14.96 C 16.89 15.29 16.50 15.82 16.26 16.55 C 16.02 17.28 15.91 18.23 15.91 19.43 L 15.91 21.06 C 15.91 22.24 16.02 23.20 16.23 23.91 C 16.44 24.62 16.80 25.15 17.30 25.49 C 17.80 25.83 18.49 26 19.39 26 C 20.25 26 20.92 25.83 21.42 25.5 C 21.92 25.17 22.29 24.63 22.51 23.91 C 22.74 23.19 22.85 22.25 22.85 21.06 L 22.85 19.43 C 22.85 18.23 22.73 17.28 22.50 16.56 C 22.27 15.84 21.91 15.31 21.41 14.97 C 20.91 14.63 20.25 14.46 19.43 14.46 z M 56.83 14.47 C 55.59 14.47 54.70 14.84 54.19 15.61 C 53.68 16.38 53.42 17.60 53.42 19.27 L 53.42 21.23 C 53.42 22.86 53.67 24.05 54.17 24.83 C 54.55 25.40 55.13 25.77 55.92 25.91 C 56.18 25.96 56.46 25.99 56.77 25.99 C 57.80 25.99 58.60 25.74 59.16 25.23 C 59.73 24.72 60.01 23.94 60.01 22.91 C 60.01 22.74 60.01 22.61 60 22.51 L 57.83 22.39 C 57.81 23.06 57.74 23.54 57.60 23.83 C 57.46 24.12 57.21 24.27 56.83 24.27 C 56.55 24.27 56.35 24.18 56.22 24.02 C 56.09 23.86 56.00 23.61 55.96 23.25 C 55.92 22.89 55.90 22.36 55.90 21.64 L 55.90 21.08 L 60.07 21.08 L 60.07 19.16 C 60.07 17.99 59.97 17.08 59.78 16.41 C 59.59 15.75 59.28 15.25 58.82 14.93 C 58.36 14.62 57.69 14.47 56.83 14.47 z M 75.83 14.47 C 73.32 14.47 72.24 15.61 72.46 18.32 L 74.66 18.5 C 74.68 16.77 74.93 16.18 75.73 16.18 C 76.44 16.18 76.59 16.72 76.59 18.27 L 76.59 19.08 C 73.41 19.93 72.22 21.31 72.22 23.33 C 72.22 25.15 73.30 26.06 74.68 26.06 C 75.79 26.06 76.46 25.44 76.82 24.46 L 76.85 24.46 L 77.10 25.82 L 79.01 25.82 L 79.01 18.38 C 79.01 15.78 78.18 14.45 75.83 14.47 z M 24.15 14.66 L 24.15 22.99 C 24.15 24.02 24.32 24.77 24.67 25.25 C 25.03 25.74 25.58 25.99 26.32 25.99 C 27.39 25.99 28.19 25.47 28.72 24.44 L 28.76 24.44 L 28.99 25.81 L 30.94 25.81 L 30.94 14.66 L 28.44 14.66 L 28.44 23.51 C 28.34 23.72 28.2 23.89 28 24.02 C 27.8 24.15 27.58 24.23 27.36 24.23 C 27.10 24.23 26.93 24.12 26.82 23.91 C 26.71 23.70 26.66 23.34 26.66 22.84 L 26.66 14.66 L 24.15 14.66 z M 37.01 14.66 L 37.01 22.99 C 37.01 24.02 37.20 24.77 37.55 25.25 C 37.82 25.62 38.19 25.85 38.67 25.94 C 38.83 25.97 39.00 25.99 39.18 25.99 C 40.25 25.99 41.05 25.47 41.58 24.44 L 41.64 24.44 L 41.85 25.81 L 43.82 25.81 L 43.82 14.66 L 41.32 14.66 L 41.32 23.51 C 41.22 23.72 41.06 23.89 40.86 24.02 C 40.66 24.15 40.46 24.23 40.24 24.23 C 39.98 24.23 39.79 24.12 39.68 23.91 C 39.57 23.70 39.52 23.34 39.52 22.84 L 39.52 14.66 L 37.01 14.66 z M 93.63 14.66 L 93.63 25.82 L 96.02 25.82 L 96.02 14.66 L 93.63 14.66 z M 56.83 16.15 C 57.10 16.15 57.28 16.23 57.41 16.38 C 57.53 16.53 57.62 16.79 57.67 17.16 C 57.72 17.53 57.75 18.07 57.75 18.78 L 57.75 19.58 L 55.91 19.58 L 55.91 18.78 C 55.91 18.05 55.93 17.52 55.97 17.16 C 56.01 16.81 56.09 16.55 56.22 16.39 C 56.35 16.23 56.55 16.15 56.83 16.15 z M 19.36 16.18 C 19.72 16.18 19.96 16.37 20.10 16.74 C 20.24 17.11 20.32 17.69 20.32 18.49 L 20.32 21.96 C 20.32 22.78 20.24 23.38 20.10 23.74 C 19.97 24.11 19.72 24.28 19.36 24.28 C 19.01 24.28 18.77 24.10 18.64 23.74 C 18.51 23.38 18.43 22.78 18.43 21.96 L 18.43 18.49 C 18.43 17.69 18.51 17.11 18.65 16.74 C 18.79 16.37 19.02 16.18 19.36 16.18 z M 109.41 16.19 C 110.12 16.19 110.33 16.73 110.33 18.75 L 110.33 19.14 C 110.33 21.14 110.09 21.63 109.41 21.63 C 108.73 21.63 108.46 21.14 108.46 19.14 L 108.46 18.75 C 108.46 16.74 108.70 16.19 109.41 16.19 z M 48.84 16.22 C 49.09 16.22 49.29 16.31 49.43 16.51 C 49.57 16.71 49.68 17.05 49.73 17.52 C 49.78 17.99 49.81 18.68 49.81 19.55 L 49.81 21 L 49.82 21 C 49.82 21.81 49.79 22.45 49.72 22.91 C 49.65 23.37 49.54 23.70 49.38 23.89 C 49.22 24.08 49.01 24.17 48.74 24.17 C 48.53 24.17 48.33 24.12 48.16 24.02 C 47.98 23.92 47.85 23.78 47.74 23.58 L 47.74 17.25 C 47.82 16.95 47.96 16.70 48.17 16.50 C 48.38 16.31 48.60 16.22 48.84 16.22 z M 76.60 20.36 L 76.60 23.60 C 76.36 23.99 75.98 24.30 75.58 24.30 C 74.98 24.30 74.74 23.81 74.74 22.88 C 74.74 21.66 75.29 20.78 76.60 20.36 z M 108.67 26.65 C 110.00 26.90 111.34 27.06 111.30 28.02 C 111.28 28.64 110.64 29.16 109.48 29.16 C 108.33 29.16 107.76 28.59 107.76 27.81 C 107.76 27.27 108.11 26.85 108.67 26.65 z"}}]}:
g.Y?{D:"div",W:["ytp-icon","ytp-icon-logo"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 67 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 45.09 10 L 45.09 25.82 L 47.16 25.82 L 47.41 24.76 L 47.47 24.76 C 47.66 25.14 47.94 25.44 48.33 25.66 C 48.72 25.88 49.16 25.99 49.63 25.99 C 50.48 25.99 51.1 25.60 51.5 24.82 C 51.9 24.04 52.09 22.82 52.09 21.16 L 52.09 19.40 C 52.12 18.13 52.05 17.15 51.90 16.44 C 51.75 15.74 51.50 15.23 51.16 14.91 C 50.82 14.59 50.34 14.44 49.75 14.44 C 49.29 14.44 48.87 14.57 48.47 14.83 C 48.27 14.96 48.09 15.11 47.93 15.29 C 47.78 15.46 47.64 15.65 47.53 15.86 L 47.51 15.86 L 47.51 10 L 45.09 10 z M 8.10 10.56 L 10.96 20.86 L 10.96 25.82 L 13.42 25.82 L 13.42 20.86 L 16.32 10.56 L 13.83 10.56 L 12.78 15.25 C 12.49 16.62 12.31 17.59 12.23 18.17 L 12.16 18.17 C 12.04 17.35 11.84 16.38 11.59 15.23 L 10.59 10.56 L 8.10 10.56 z M 30.10 10.56 L 30.10 12.58 L 32.59 12.58 L 32.59 25.82 L 35.06 25.82 L 35.06 12.58 L 37.55 12.58 L 37.55 10.56 L 30.10 10.56 z M 19.21 14.46 C 18.37 14.46 17.69 14.63 17.17 14.96 C 16.65 15.29 16.27 15.82 16.03 16.55 C 15.79 17.28 15.67 18.23 15.67 19.43 L 15.67 21.06 C 15.67 22.24 15.79 23.19 16 23.91 C 16.21 24.62 16.57 25.15 17.07 25.49 C 17.58 25.83 18.27 26 19.15 26 C 20.02 26 20.69 25.83 21.19 25.5 C 21.69 25.17 22.06 24.63 22.28 23.91 C 22.51 23.19 22.63 22.25 22.63 21.06 L 22.63 19.43 C 22.63 18.23 22.50 17.28 22.27 16.56 C 22.04 15.84 21.68 15.31 21.18 14.97 C 20.68 14.63 20.03 14.46 19.21 14.46 z M 56.64 14.47 C 55.39 14.47 54.51 14.84 53.99 15.61 C 53.48 16.38 53.22 17.60 53.22 19.27 L 53.22 21.23 C 53.22 22.85 53.47 24.05 53.97 24.83 C 54.34 25.40 54.92 25.77 55.71 25.91 C 55.97 25.96 56.26 25.99 56.57 25.99 C 57.60 25.99 58.40 25.74 58.96 25.23 C 59.53 24.72 59.81 23.94 59.81 22.91 C 59.81 22.74 59.79 22.61 59.78 22.51 L 57.63 22.39 C 57.62 23.06 57.54 23.54 57.40 23.83 C 57.26 24.12 57.01 24.27 56.63 24.27 C 56.35 24.27 56.13 24.18 56.00 24.02 C 55.87 23.86 55.79 23.61 55.75 23.25 C 55.71 22.89 55.68 22.36 55.68 21.64 L 55.68 21.08 L 59.86 21.08 L 59.86 19.16 C 59.86 17.99 59.77 17.08 59.58 16.41 C 59.39 15.75 59.07 15.25 58.61 14.93 C 58.15 14.62 57.50 14.47 56.64 14.47 z M 23.92 14.67 L 23.92 23.00 C 23.92 24.03 24.11 24.79 24.46 25.27 C 24.82 25.76 25.35 26.00 26.09 26.00 C 27.16 26.00 27.97 25.49 28.5 24.46 L 28.55 24.46 L 28.76 25.82 L 30.73 25.82 L 30.73 14.67 L 28.23 14.67 L 28.23 23.52 C 28.13 23.73 27.97 23.90 27.77 24.03 C 27.57 24.16 27.37 24.24 27.15 24.24 C 26.89 24.24 26.70 24.12 26.59 23.91 C 26.48 23.70 26.43 23.35 26.43 22.85 L 26.43 14.67 L 23.92 14.67 z M 36.80 14.67 L 36.80 23.00 C 36.80 24.03 36.98 24.79 37.33 25.27 C 37.60 25.64 37.97 25.87 38.45 25.96 C 38.61 25.99 38.78 26.00 38.97 26.00 C 40.04 26.00 40.83 25.49 41.36 24.46 L 41.41 24.46 L 41.64 25.82 L 43.59 25.82 L 43.59 14.67 L 41.09 14.67 L 41.09 23.52 C 40.99 23.73 40.85 23.90 40.65 24.03 C 40.45 24.16 40.23 24.24 40.01 24.24 C 39.75 24.24 39.58 24.12 39.47 23.91 C 39.36 23.70 39.31 23.35 39.31 22.85 L 39.31 14.67 L 36.80 14.67 z M 56.61 16.15 C 56.88 16.15 57.08 16.23 57.21 16.38 C 57.33 16.53 57.42 16.79 57.47 17.16 C 57.52 17.53 57.53 18.06 57.53 18.78 L 57.53 19.58 L 55.69 19.58 L 55.69 18.78 C 55.69 18.05 55.71 17.52 55.75 17.16 C 55.79 16.81 55.87 16.55 56.00 16.39 C 56.13 16.23 56.32 16.15 56.61 16.15 z M 19.15 16.19 C 19.50 16.19 19.75 16.38 19.89 16.75 C 20.03 17.12 20.09 17.7 20.09 18.5 L 20.09 21.97 C 20.09 22.79 20.03 23.39 19.89 23.75 C 19.75 24.11 19.51 24.29 19.15 24.30 C 18.80 24.30 18.54 24.11 18.41 23.75 C 18.28 23.39 18.22 22.79 18.22 21.97 L 18.22 18.5 C 18.22 17.7 18.28 17.12 18.42 16.75 C 18.56 16.38 18.81 16.19 19.15 16.19 z M 48.63 16.22 C 48.88 16.22 49.08 16.31 49.22 16.51 C 49.36 16.71 49.45 17.05 49.50 17.52 C 49.55 17.99 49.58 18.68 49.58 19.55 L 49.58 21 L 49.59 21 C 49.59 21.81 49.57 22.45 49.5 22.91 C 49.43 23.37 49.32 23.70 49.16 23.89 C 49.00 24.08 48.78 24.17 48.51 24.17 C 48.30 24.17 48.11 24.12 47.94 24.02 C 47.76 23.92 47.62 23.78 47.51 23.58 L 47.51 17.25 C 47.59 16.95 47.75 16.70 47.96 16.50 C 48.17 16.31 48.39 16.22 48.63 16.22 z "}}]}]});
this.g=a;this.o=this.l=!1;WL(a,this.element,this,28666);this.ea("click",this.B);this.M(a,"videodatachange",this.A);this.A();g.De(this,LS(b.l,this.element))};
XU=function(a,b,c){g.dt.call(this);var d=this,e=g.U(a);this.A=a;this.o=b;this.X=window.NaN;this.aa=null;this.U=c;this.U.subscribe("autohideupdate",this.du,this);c=!PE(g.yL(a));var f=new g.W({D:"div",J:"ytp-gradient-bottom"});g.K(this,f);g.TL(a,f.element,8);this.L=new g.fQ(f,250,c,100);g.K(this,this.L);this.l=new g.W({D:"div",J:"ytp-chrome-bottom",G:[{D:"div",J:"ytp-chrome-controls"}]});g.K(this,this.l);g.TL(a,this.l.element,8);this.K=new g.fQ(this.l,250,c,100);g.K(this,this.K);c=this.l.element.children[0];
e.H&&(c.style.background=e.zb);this.g=new LU(a);g.De(this.g,function(){a.C==d.g&&(a.C=null)});
g.K(this,this.g);a.C=this.g;g.TL(a,this.g.element,6);this.g.subscribe("show",this.cJ,this);this.g.subscribe("show",(0,g.A)(b.FI,b,this.g));this.C=new nU(a,b);g.K(this,this.C);this.C.ca(this.l.element,0);f=new HT(a,b);g.K(this,f);g.TL(a,f.element,4);this.C.subscribe("height-change",f.CI,f);f=new KT(a);g.K(this,f);g.TL(a,f.element,4);f=new g.CM({D:"div",J:"ytp-left-controls"});g.K(this,f);f.ca(c);var k=new hU(a,b,!1);g.K(this,k);k.ca(f.element);e.P||(k=new eU(a,b),g.K(this,k),k.ca(f.element));k=new hU(a,
b,!0);g.K(this,k);k.ca(f.element);var l=new g.W({D:"span"});g.K(this,l);l.ca(f.element);if(!e.fa&&(this.B=new ZT(a,b),g.K(this,this.B),this.B.ca(l.element),e.U)){k=new UU(a,b,this.l.element);g.K(this,k);k.ca(l.element);l=new g.ht(l.element);g.K(this,l);var m=(0,g.A)(k.Kv,k,!0);l.subscribe("hoverstart",m);l=new g.ht(f.element);g.K(this,l);k=(0,g.A)(k.Kv,k,!1);l.subscribe("hoverend",k)}this.R=new SU(a,b);g.K(this,this.R);this.R.ca(f.element);f=new g.CM({D:"div",J:"ytp-right-controls"});g.K(this,f);
f.ca(c);c=new RU(a,b);g.K(this,c);c.ca(f.element);c=new IU(a,b,this.g);g.K(this,c);Gba(this.g,c);c.ca(f.element);c=new PT(a);g.K(this,c);g.TL(a,c.element,5);c.subscribe("show",(0,g.A)(b.rm,b,c));c=new QT(a,b,c);g.K(this,c);c.ca(f.element);e.pf&&(this.F=new WU(a,b),g.K(this,this.F),this.F.ca(f.element));c=new QU(a,b);g.K(this,c);c.ca(f.element);e.Ab&&(c=new PU(a,b,this.g),g.K(this,c),c.ca(f.element));e.nf&&(e=new FT(a,b),g.K(this,e),e.ca(f.element));zx()&&(e=new cU(a,b),g.K(this,e),e.ca(f.element));
this.V=new OT(a,b);g.K(this,this.V);this.V.ca(f.element);this.H=new g.Rp(this.vF,null,this);g.K(this,this.H);this.I=null;this.M(a,"appresize",this.Sb);this.M(a,"fullscreentoggled",this.Sb);this.M(a,"presentingplayerstatechange",this.rp);this.Sb()};
YU=function(a,b){if(PE(g.yL(a.A))||b){if(b){a.K.hide();a.L.hide();if(a.B){var c=a.B;c.F=!1;c.g.Va(c.element,c.o&&!1)}a.F&&(c=a.F,c.o=!1,c.g.Va(c.element,c.l&&!1));a.o.l.ah(a.ha())}}else b||(a.K.show(),a.L.show(),a.B&&(c=a.B,c.F=!0,c.g.Va(c.element,c.o&&!0)),a.F&&(c=a.F,c.o=!0,c.g.Va(c.element,c.l&&!0)),a.du())};
$U=function(a){var b=g.zL(a.A).Da().width;return Math.max(b-2*ZU(a),100)};
ZU=function(a){var b=a.o.cd();return 12*(g.U(a.A).H?0:b?2:1)};
g.aV=function(a,b,c,d,e,f,k,l,m,n,p,u){f&&(a=a.charAt(0)+a.substring(1).toLowerCase(),c=c.charAt(0)+c.substring(1).toLowerCase());if("0"===b||"-1"===b)b=null;if("0"===d||"-1"===d)d=null;if(p){c=g.U(u);p={href:p,"aria-label":a,tabindex:"-1"};if(g.qB(c)||g.rB(c))p.target="_blank";g.W.call(this,{D:"div",W:["ytp-button","ytp-sb"],G:[{D:"a",J:"ytp-sb-subscribe",N:p,G:[{D:"div",J:"ytp-sb-text",G:[{D:"div",J:"ytp-sb-icon"},a]},b?{D:"div",J:"ytp-sb-count",G:[b]}:""]}]});f&&g.M(this.element,"ytp-sb-classic")}else{g.W.call(this,
{D:"div",W:["ytp-button","ytp-sb"],G:[{D:"div",J:"ytp-sb-subscribe",N:{tabindex:"-1","aria-label":a},G:[{D:"div",J:"ytp-sb-text",G:[{D:"div",J:"ytp-sb-icon"},a]},b?{D:"div",J:"ytp-sb-count",G:[b]}:""]},{D:"div",J:"ytp-sb-unsubscribe",N:{tabindex:"-1","aria-label":c},G:[{D:"div",J:"ytp-sb-text",G:[{D:"div",J:"ytp-sb-icon"},c]},d?{D:"div",J:"ytp-sb-count",G:[d]}:""]}]});var v=this;this.g=k;var C=this.Z["ytp-sb-subscribe"],D=this.Z["ytp-sb-unsubscribe"];f&&g.M(this.element,"ytp-sb-classic");if(e){l&&
g.M(this.element,"ytp-sb-subscribed");a=g.U(u);var E=null;"gaming"==a.g&&(E="gaming_channels");if(m){var ea=a.baseYtUrl+"subscription_ajax";var fa=function(){return{method:"POST",hc:{action_create_subscription_to_channel:1,c:v.g},jb:{feature:m,silo_name:E},withCredentials:!0}};
var Za=function(){return{method:"POST",hc:{action_remove_subscriptions:1},jb:{c:v.g,silo_name:E,feature:m},withCredentials:!0}}}else if(n)ea="/subscription_service",fa=function(){return{method:"POST",
hc:{action_subscribe:1},jb:{channel_ids:v.g,itct:n}}},Za=function(){return{method:"POST",
hc:{action_unsubscribe:1},jb:{channel_ids:v.g,itct:n}}};
else return;var Ha=function(){g.Fr(ea,fa());u.la("SUBSCRIBE");D.focus();D.removeAttribute("aria-hidden");C.setAttribute("aria-hidden",!0)},Ja=function(){g.Fr(ea,Za());
u.la("UNSUBSCRIBE");C.focus();C.removeAttribute("aria-hidden");D.setAttribute("aria-hidden",!0)};
this.M(C,"click",Ha);this.M(D,"click",Ja);this.M(C,"keypress",function(a){13==a.keyCode&&Ha(a)});
this.M(D,"keypress",function(a){13==a.keyCode&&Ja(a)});
var si=(0,g.A)(this.l,this),Re=(0,g.A)(this.o,this);u.addEventListener("SUBSCRIBE",si);u.addEventListener("UNSUBSCRIBE",Re);g.De(this,function(){u.removeEventListener("SUBSCRIBE",si);u.removeEventListener("UNSUBSCRIBE",Re)})}else g.M(C,"ytp-sb-disabled"),g.M(D,"ytp-sb-disabled")}};
g.cV=function(a,b,c,d,e,f){b=bV(b,c,f);d=d||375;e=e||440;if(b=window.open(b,"loginPopup","width="+d+",height="+e+",resizable=yes,scrollbars=yes",!0))c=g.vt("LOGGED_IN",function(b){g.wt(g.hr("LOGGED_IN_PUBSUB_KEY",void 0));g.gr("LOGGED_IN",!0);a(b)}),g.gr("LOGGED_IN_PUBSUB_KEY",c),b.moveTo((window.screen.width-d)/2,(window.screen.height-e)/2)};
bV=function(a,b,c){var d="/signin?context=popup";c&&(d=window.document.location.protocol+"//"+c+d);c=window.document.location.protocol+"//"+window.document.domain+"/post_login";a&&(c=Jg(c,"mode",a));a=Jg(d,"next",c);b&&(a=Jg(a,"feature",b));return a};
dV=function(a){var b=new g.W({D:"a",J:"ytp-title-channel-logo",N:{href:"{{channelLink}}",target:"_blank"}});g.W.call(this,{D:"div",J:"ytp-title",G:[{D:"div",J:"ytp-title-channel",G:[b,{D:"div",J:"ytp-title-channel-popup",G:[{D:"div",J:"ytp-title-channel-heading",G:[{D:"h2",J:"ytp-title-channel-text",G:[{D:"a",N:{href:"{{popupChannelLink}}",target:"_blank"},G:["{{popupChannelName}}"]}]},{D:"h3",J:"ytp-title-channel-subtext",G:["{{subscriberCount}}"]}]}]}]},{D:"div",J:"ytp-title-text",G:[{D:"a",W:["ytp-title-link",
"yt-uix-sessionlink"],N:{target:"_blank",href:"{{url}}","data-sessionlink":"feature=player-title"},G:["{{title}}"]},{D:"div",J:"ytp-title-subtext",G:[{D:"a",J:"ytp-title-channel-name",N:{href:"{{channelLink}}",target:"_blank"},G:["{{channelName}}"]},{D:"span",J:"ytp-title-view-count",G:["{{viewCount}}"]}]}]}]});g.K(this,b);this.g=a;this.o=null;this.P=this.Z["ytp-title-link"];this.l=this.Z["ytp-title-channel"];this.C=b;this.I=this.Z["ytp-title-channel-popup"];this.A=null;this.B=!1;this.F=this.L=this.K=
null;WL(a,this.element,this,23851);WL(a,b.element,this,36925);this.M(a,"videodatachange",this.H);this.M(a,"videoplayerreset",this.H);g.U(a).K&&Hba(this);this.H()};
Hba=function(a){var b=new g.W({D:"div",J:"ytp-title-beacon"});g.K(a,b);b.ca(a.l,0);b=g.U(a.g).jc?null:bV();var c=a.g.Y(),d=new g.aV(g.S("YTP_SUBSCRIBE"),null,g.S("YTP_SUBSCRIBED"),null,!0,!1,c.bj,c.subscribed,"embed_title",null,b,a.g);a.A=d;g.K(a,d);d.ca(a.I);WL(a.g,d.element,a,36926);b={D:"div",J:"ytp-title-notifications-on",N:{title:g.S("YTP_SUBSCRIBE_NOTIFY_ON",void 0,"")},G:[g.zP()]};c={title:g.S("YTP_SUBSCRIBE_NOTIFY_OFF",void 0,"")};var e=new g.W({D:"button",W:["ytp-button","ytp-title-notifications"],
G:[b,{D:"div",J:"ytp-title-notifications-off",N:c,G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-notifications-inactive"]}:{D:"svg",N:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},G:[{D:"path",N:{d:"M18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}]}]});g.K(a,e);e.ca(a.I);WL(a.g,e.element,a,36927);a.M(a.g,"SUBSCRIBE",function(){g.M(a.element,
"ytp-subscribed")});
a.M(a.g,"UNSUBSCRIBE",function(){a.B=!1;g.N(a.element,"ytp-subscribed");g.N(a.element,"ytp-notifications-enabled")});
a.M(a.l,"mouseenter",function(){if(524<=a.g.Gg().width){a.F.stop();var b=a.g.getRootNode();g.M(b,"ytp-title-channel-expanded");g.N(b,"ytp-title-channel-collapsed");a.g.Va(d.element,!0);a.g.Va(e.element,!0)}});
a.M(a.l,"mouseleave",function(){a.F.start();a.g.Va(d.element,!1);a.g.Va(e.element,!1)});
a.M(a.l,"click",function(){a.g.sc(a.l)});
a.M(d.element,"click",function(){a.g.sc(d.element)});
a.M(e.element,"click",function(){a.g.sc(e.element);g.Fr("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",jb:{channel_id:a.L,receive_all_updates:!a.B}});a.B=!a.B;g.O(a.element,"ytp-notifications-enabled",a.B)});
a.F=new g.P(function(){var b=a.g.getRootNode();g.Kp(b,"ytp-title-channel-expanded")&&(g.N(b,"ytp-title-channel-expanded"),g.M(b,"ytp-title-channel-collapsed"))},500);
g.K(a,a.F)};
eV=function(a){var b=a.g.Y(),c=2==a.g.Ca()&&b.isListed;c=b.videoId&&(c||g.U(a.g).K);var d=a.g.getRootNode();if(c&&b.videoId==a.K)g.M(d,"ytp-title-extra-info"),a.g.Va(a.C.element,!0);else if(g.N(d,"ytp-title-extra-info"),a.g.Va(a.C.element,!1),c&&b.author&&b.channelPath&&b.profilePicture){c=b.videoId;d=b.bj;var e=b.author,f=b.channelPath,k=b.profilePicture;b=b.bp;f=g.U(a.g).protocol+"://"+yB(g.U(a.g))+f;a.C.element.style.backgroundImage="url("+k+")";a.A&&(a.A.g=d);a.C.updateValue("channelLink",f);
a.updateValue("channelLink",f);2==a.g.Ca()?a.updateValue("channelName",e):a.updateValue("channelName","");a.updateValue("popupChannelLink",f);a.updateValue("popupChannelName",e);a.updateValue("subscriberCount",b);a.L=d;a.K=c;eV(a)}};
fV=function(a,b){var c=g.zL(a).Da();g.W.call(this,{D:"div",G:[{D:"div",J:"ytp-tooltip-bg",G:[{D:"div",J:"ytp-tooltip-duration",G:["{{duration}}"]}]},{D:"div",J:"ytp-tooltip-text-wrapper",G:[{D:"div",J:"ytp-tooltip-image"},{D:"div",J:"ytp-tooltip-title",G:["{{title}}"]},{D:"span",J:"ytp-tooltip-text",G:["{{text}}"]}]}]});this.L=a;this.ma=b;this.ba=g.U(a).l;this.F=this.Z["ytp-tooltip-bg"];this.sa=this.Z["ytp-tooltip-image"];this.ia=(0,g.A)(this.bG,this);this.P=(0,g.A)(this.eG,this);this.R=(0,g.A)(this.Yd,
this);this.l=null;this.H=new g.fQ(this,100);g.K(this,this.H);this.g=null;this.K=!1;this.o=null;this.B=window.NaN;this.C="";this.fa=c.width;this.I=!0;this.A=1;this.V=new g.P(this.cA,250,this);g.K(this,this.V);this.X=new g.P(this.Yd,5E3,this);g.K(this,this.X)};
hV=function(a,b){if(null!=a.g)if(b)switch(a.g){case 3:case 2:gV(a);a.H.show();break;default:a.H.show()}else a.H.hide();a.I=b};
LS=function(a,b){if(a.ba)return g.wa;b.addEventListener("mouseover",a.P);return(0,g.A)(function(){this.l==b&&this.Yd();b.removeEventListener("mouseover",this.P)},a)};
jV=function(a,b,c){if(a.g)if(3==a.g)a.Yd();else return;iV(a,b,3,c)};
iV=function(a,b,c,d){(0,window.isNaN)(a.B)||(a.B=window.NaN,a.F.style.background="");a.l=b;a.K=!!d;d?a.C=d:(a.C=b.getAttribute("title"),b.removeAttribute("title"));a.element.className="ytp-tooltip";if(d=b.getAttribute("data-tooltip-image"))a.sa.style.backgroundImage="url("+d+")";g.O(a.element,"ytp-tooltip-image-enabled",!!d);b=b.getAttribute("data-tooltip-opaque");g.O(a.element,"ytp-tooltip-opaque",!!b);a.g=c;a.L.addEventListener("appresize",a.R);a.I&&(gV(a),a.H.show(0))};
gV=function(a){var b=a.l.getAttribute("data-tooltip-text");if(b&&!a.K){a.updateValue("text",b);var c=a.l.getAttribute("data-duration");a.update({title:a.C,duration:c});var d=a.l.getAttribute("data-preview"),e=160*a.A,f=90*a.A,k=160*a.A,l=90*a.A;a.F.style.width=e+"px";a.F.style.height=f+"px";a.F.style.backgroundImage=d?"url("+d+")":"";a.F.style.backgroundPosition=(e-k)/2+"px "+(f-l)/2+"px";a.F.style.backgroundSize=k+"px "+l+"px";g.Lp(a.element,["ytp-text-detail","ytp-preview"]);g.O(a.element,"ytp-has-duration",
!!c)}else a.updateValue("text",a.C),g.Mp(a.element,["ytp-text-detail","ytp-preview","ytp-has-duration"]);3==a.g?a.element.setAttribute("role","status"):a.element.removeAttribute("role");kV(a,!!b)};
kV=function(a,b,c){a.element.style.maxWidth=b?"":Math.min(a.fa,300*a.A)+"px";lV(a.ma,a.element,a.l,c,1==a.g);a.element.style.top?g.M(a.element,"ytp-bottom"):a.element.style.bottom&&g.M(a.element,"ytp-top");3==a.g&&a.X.start()};
bU=function(a){a.l&&!a.K&&a.l.hasAttribute("title")&&(a.C=a.l.getAttribute("title"),a.l.removeAttribute("title"),a.I&&gV(a))};
mV=function(a,b){g.O(a.element,"ytp-preview",0<=b);if(!(0>b||b==a.B)){a.B=b;var c=160*a.A,d=160*a.A,e=bC(a.o,a.B,c);GT(a.F,e,c,d,!0);a.V.start()}};
Iba=function(a,b,c){nV("add_to_watch_later_list",a,b,c)};
Jba=function(a,b,c){nV("delete_from_watch_later_list",a,b,c)};
nV=function(a,b,c,d){g.Fr(c?c+"playlist_video_ajax?action_"+a+"=1":"/playlist_video_ajax?action_"+a+"=1",{method:"POST",hc:{feature:b.feature||null,authuser:b.jc||null,pageid:b.pageId||null},jb:{video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.NM||null,add_to_playlists:b.EM||null,plid:g.hr("PLAYBACK_ID")||null},context:b.context,onError:b.onError,ib:function(a,c){b.ib.call(this,a,c)},
Ac:b.Ac,withCredentials:!!d})};
qV=function(a,b,c){g.W.call(this,{D:"button",W:["ytp-watch-later-button","ytp-button"],N:{title:"{{title}}","data-tooltip-image":"{{image}}","data-tooltip-opaque":String(g.U(a).K)},G:[{D:"div",J:"ytp-watch-later-icon",G:["{{icon}}"]},{D:"div",J:"ytp-watch-later-title",G:["{{watch_later}}"]}]});this.g=a;this.F=b.l;this.H=c;this.B=null;this.C=this.A=this.o=this.l=!1;WL(a,this.element,this,28665);this.ea("click",this.MD,this);this.M(a,"videoplayerreset",this.ND);this.M(a,"appresize",this.Fc);this.Fc(g.zL(a).Da());
a=g.U(this.g);c=g.tu("yt-player-watch-later-pending");a.o&&c?(fv(),oV(this,c.videoId)):pV(this,2);g.De(this,LS(b.l,this.element))};
oV=function(a,b){if(!a.o){a.o=!0;pV(a,3);var c=g.U(a.g);(a.l?Jba:Iba)({videoIds:b,jc:c.jc,pageId:c.pageId,onError:a.KH,ib:a.l?a.LH:a.JH,context:a},c.baseYtUrl,!0)}};
pV=function(a,b,c){if(b!=a.B){switch(b){case 3:var d=bS();break;case 1:d=oP();break;case 2:d=g.Y?{D:"div",W:["ytp-icon","ytp-icon-watch-later"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M16,19.02 L16,12.00 L18,12.00 L18,17.86 L23.10,20.81 L22.10,22.54 L16,19.02 Z"}}]};break;case 4:d=g.Y?{D:"div",W:["ytp-icon","ytp-icon-alert"]}:
{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M21,7.91 L19.60,20.91 L16.39,20.91 L15,7.91 L21,7.91 Z M18,27.91 C16.61,27.91 15.5,26.79 15.5,25.41 C15.5,24.03 16.61,22.91 18,22.91 C19.38,22.91 20.5,24.03 20.5,25.41 C20.5,26.79 19.38,27.91 18,27.91 Z"}}]}}a.updateValue("icon",d);a.B=b}b=g.U(a.g);c?a.update({title:c,image:null}):b.userDisplayName?(c={USER_NAME:b.userDisplayName},a.update({title:a.l?g.S("YTP_ADDED_TO_WATCH_LATER_AS",
c):g.S("YTP_WATCH_LATER_AS_2",c),image:b.userDisplayImage})):a.update({title:g.S("YTP_WATCH_LATER_2"),image:null});bU(a.F)};
rV=function(a){g.W.call(this,{D:"a",W:["ytp-watermark","yt-uix-sessionlink"],N:{target:"_blank",href:"{{url}}","aria-label":g.S("YTP_URL_NAVIGATE_TO",{WEBSITE:zB(g.U(a))}),"data-sessionlink":"feature=player-watermark"},G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-watermark"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}]});
this.l=a;this.g=null;this.M(a,"videodatachange",this.o);this.M(a,"presentingplayerstatechange",this.B);a=g.yL(a);g.JM(this,!g.T(a,2));this.o()};
sV=function(a){ES.call(this,a);var b=g.U(a),c=g.zL(a);this.Ga=48;this.wa=69;b.K&&(this.Ga=42,this.wa=63);var d=g.U(this.g),e=d.X;if(Bx("ytp-normal-css-loaded")){var f=Bx("ytp-sprite-mode-css-loaded");e!=f&&g.Q(Error("Player sprite mode mismatch. playerInSpriteMode: "+e+", spriteModeCssServed: "+f+", isMobile: "+d.l),"WARNING")}this.U=null;this.H=[];d=new g.W({D:"div",J:"ytp-gradient-top"});g.K(this,d);g.TL(a,d.element,1);this.Ua=new g.fQ(d,250,!0,100);g.K(this,this.Ua);this.B=new g.W({D:"div",J:"ytp-chrome-top"});
g.K(this,this.B);g.TL(a,this.B.element,1);this.Ta=new g.fQ(this.B,250,!0,100);g.K(this,this.Ta);this.fa=[];this.l=new fV(a,this);g.K(this,this.l);g.TL(a,this.l.element,4);b.o&&b.ud&&(this.zb=new uT(a,this),g.K(this,this.zb),g.TL(a,this.zb.element,4));d=new yT(a);g.K(this,d);g.TL(a,d.element,5);d.subscribe("show",(0,g.A)(this.rm,this,d));this.fa.push(d);d=new AT(a,this,d);g.K(this,d);d.ca(this.B.element);this.Ma=new dV(a);g.K(this,this.Ma);this.Ma.ca(this.B.element);d=new g.CM({D:"div",J:"ytp-chrome-top-buttons"});
g.K(this,d);d.ca(this.B.element);b.bk&&(this.ma=new qV(a,this,this.B.element),g.K(this,this.ma),this.ma.ca(d.element));e=new CT(a,this);g.K(this,e);g.TL(a,e.element,5);e.subscribe("show",(0,g.A)(this.rm,this,e));this.fa.push(e);this.Ra=new ET(a,this,e,this.B.element);g.K(this,this.Ra);this.Ra.ca(d.element);this.R=new KS(a,this,this.B.element);g.K(this,this.R);this.R.ca(d.element);e=new MS(a,this.R);g.K(this,e);e.ca(d.element);(this.o="1"==b.A?new XU(a,this,this.A):null)&&g.K(this,this.o);"3"==b.A&&
(d=new BT(a,this),g.K(this,d),g.TL(a,d.element,8));this.I=new mT(a,this);g.K(this,this.I);this.I.subscribe("show",this.ww,this);this.ya=!1;b.qf&&(d=new rV(a),g.K(this,d),g.TL(a,d.element,7));d=new FQ(a,new rR(a));g.K(this,d);g.TL(a,d.element,4);this.aa=new g.W({D:"div",N:{tabindex:"0"}});this.aa.ea("focus",this.Jy,this);g.K(this,this.aa);this.V=new g.W({D:"div",N:{tabindex:"0"}});this.V.ea("focus",this.Ky,this);g.K(this,this.V);(this.X=b.useTabletControls?null:new oT(a,c,this.I,this.A,this.C,(0,g.A)(this.Tj,
this)))&&g.K(this,this.X);this.M(a,"fullscreentoggled",this.iD);this.M(a,"offlineslatestatechange",this.nG,this);this.M(a,"cardstatechange",this.hf,this)};
lV=function(a,b,c,d,e){b.style.left="";b.style.top="";b.style.bottom="";var f=g.Hh(b);e=e||a.o&&g.Ld(a.o.ha(),c);if(null==d||!e){var k=g.Hh(c);var l=g.Dh(c,a.g.getRootNode())}d=(null==d?l.x+k.width/2:d)-f.width/2;e?(k=ZU(a.o),l=$U(a.o),c=g.zL(a.g).Da().height,d=g.Vc(d,k,k+l-f.width),f=c-(a.o.o.cd()?72:50)-f.height):g.Ld(a.B.element,c)?(k=g.zL(a.g).Da().width,d=g.Vc(d,12,k-f.width-12),f=a.cd()?a.wa:a.Ga,"gvn"==g.U(a.g).g&&(f+=20)):(a=g.zL(a.g).Da(),d=g.Vc(d,12,a.width-f.width-12),f=l.y>(a.height-k.height)/
2?l.y-f.height-12:l.y+k.height+12);b.style.top=f+"px";b.style.left=d+"px"};
tV=function(a,b,c){b=c?b.lastElementChild:b.firstElementChild;for(var d=null;b;){if("none"!=rh(b,"display")&&"true"!=b.getAttribute("aria-hidden")){var e=void 0;0<=b.tabIndex?e=b:e=tV(a,b,c);e&&(d?c?e.tabIndex>d.tabIndex&&(d=e):e.tabIndex<d.tabIndex&&(d=e):d=e)}b=c?b.previousElementSibling:b.nextElementSibling}return d};
uV=function(a){this.I=a;this.C=null;this.g=[];this.o=[];this.B=[];this.H=1;this.l=[];this.A=!1};
VL=function(a,b,c){a.A?a.B.push({type:b,data:c}):a.I.O(b,c)};
g.hP=function(a,b,c){g.Ta(a.g,b);g.Wa(a.g,b);var d=String(a.H++);b.setAttribute("data-visual-id",d);g.De(c,(0,g.A)(a.F,a,b))};
g.iP=function(a,b,c){var d=b.getAttribute("data-visual-id");g.Ta(a.g,b);VL(a,"onLogServerVeCreated",{id:d,tracking_params:c})};
vV=function(a,b,c,d,e){g.W.call(this,{D:"div",J:"ytp-horizonchart"});this.l=Math.round(a/c);this.H=b;this.B=c;this.C=d;this.F=e;this.Oa=0;this.element.style.width=this.l*this.B+"px";this.element.style.height=this.H+"em";this.g=-1;this.A=this.o=null};
wV=function(a,b){if(-1==a.g){try{var c=g.zd("CANVAS");a.o=c.getContext("2d")}catch(m){}if(a.o){var d=a.l*a.B;a.A=c;a.A.width=d;a.A.style.width=d+"px";a.element.appendChild(a.A)}else for(a.B=Math.floor(a.B/4),a.l*=4,c=0;c<a.B;c++)d=g.zd("SPAN"),d.style.width=a.l+"px",d.style.left=a.l*c+"px",a.element.appendChild(d)}c=a.element.clientHeight||24;c!=a.g&&(a.g=c,a.o&&(c=1<(window.devicePixelRatio||1)?2:1,a.A.height=a.g*c,a.A.style.height=a.g+"px",a.o.scale(1,c)));c=g.q(b);for(var e=c.next();!e.done;e=
c.next()){d=a;var f=a.Oa,k=e.value;for(e=0;e+2<d.C.length&&d.C[e+1]<k;)e++;k=Math.min(1,(k-d.C[e])/(d.C[e+1]-d.C[e]));if(d.o)d.o.fillStyle=d.F[e],d.o.fillRect(f*d.l,0,d.l,d.g),d.o.fillStyle=d.F[e+1],d.o.fillRect(f*d.l,d.g*(1-k),d.l,d.g);else{f=d.element.children[f];var l=window.devicePixelRatio||1;k=Math.min(d.g,Math.round(d.g*k*l)/l);f.style.height=k+"px";f.style.backgroundColor=d.F[e+1];f.style.borderTop="solid "+(d.g-k)+"px "+d.F[e]}a.Oa=(a.Oa+1)%a.B}c=a.Oa;a.o?a.o.clearRect(c*a.l,0,a.l,a.g):(c=
a.element.children[c],c.style.height="0px",c.style.borderTop="")};
xV=function(a){var b=null;b={D:"button",W:["html5-video-info-panel-close","ytp-button"],N:{title:"close"},G:["[x]"]};g.W.call(this,{D:"div",J:"html5-video-info-panel",G:[b,{D:"div",J:"html5-video-info-panel-content",G:[{D:"div",G:[{D:"div",G:["Video ID / CPN"]},{D:"span",G:["{{video_id_and_cpn}}"]}]},{D:"div",G:[{D:"div",G:["Viewport"]},{D:"span",G:["{{dimensions}}"]}]},{D:"div",G:[{D:"div",G:["Current / Optimal Res"]},{D:"span",G:["{{resolution}}"]}]},{D:"div",G:[{D:"div",G:["Volume / Normalized"]},
{D:"span",G:["{{volume}}"]}]},{D:"div",G:[{D:"div",G:["Codecs"]},{D:"span",G:["{{codecs}}"]}]},{D:"div",N:{style:"{{shader_info_style}}"},G:[{D:"div",G:["Shader Info"]},{D:"span",G:["{{shader_info}}"]}]},{D:"div",N:{style:"{{color_style}}"},G:[{D:"div",G:["Color"]},{D:"span",G:["{{color}}"]}]},{D:"div",N:{style:"{{drm_style}}"},G:[{D:"div",G:["Protected"]},{D:"span",G:["{{drm}}"]}]},{D:"div",G:[{D:"div",G:["Host"]},{D:"span",G:["{{stream_host}}"]}]},{D:"div",G:[{D:"div",G:["Connection Speed"]},{D:"span",
G:[{D:"span",G:["{{bandwidth_chart}}"]},{D:"span",G:["{{bandwidth_kbps}}"]}]}]},{D:"div",G:[{D:"div",G:["Network Activity"]},{D:"span",G:[{D:"span",G:["{{network_activity_chart}}"]},{D:"span",G:["{{network_activity_bytes}}"]}]}]},{D:"div",G:[{D:"div",G:["Buffer Health"]},{D:"span",G:[{D:"span",G:["{{buffer_health_chart}}"]},{D:"span",G:["{{buffer_health_seconds}}"]}]}]},{D:"div",N:{style:"{{live_latency_style}}"},G:[{D:"div",G:["Live Latency"]},{D:"span",G:[{D:"span",G:["{{live_latency_chart}}"]},
{D:"span",G:["{{live_latency_secs}}"]}]}]},{D:"div",N:{style:"{{live_mode_style}}"},G:[{D:"div",G:["Live Mode"]},{D:"span",G:["{{live_mode}}"]}]},{D:"div",G:[{D:"div",G:["Dropped Frames"]},{D:"span",G:["{{dropped_frames}}"]}]}]}]});b&&this.M(this.Z["html5-video-info-panel-close"],"click",this.hide);b=[0,18750,37500,81250,128E3,256E3,512E3,2048E3,8192E3,32768E3,131072E3];var c="#000 #d53e4f #f46d43 #fdae61 #fee08b #e6f598 #abdda4 #66c2a5 #3288bd #124588 #fff".split(" "),d=b.map(function(a){return a/
4});
this.o=new vV(300,1,150,b,c);g.K(this,this.o);this.updateValue("bandwidth_chart",this.o);this.B=new vV(300,1,150,[0,3,10,15,30,60,90],"#000 #66c2a5 #abdda4 #e6f598 #fdae61 #f46d43 #a8330f".split(" "));g.K(this,this.B);this.updateValue("live_latency_chart",this.B);this.A=new vV(300,1,150,[0,15,30,60,90,120],"#000 #fdae61 #e6f598 #66c2a5 #3288bd #fff".split(" "));g.K(this,this.A);this.updateValue("buffer_health_chart",this.A);this.C=new vV(300,1,150,d,c);g.K(this,this.C);this.updateValue("network_activity_chart",
this.C);this.l=new g.P(this.Sn,500,this);g.K(this,this.l);this.g=a};
yV=function(a){var b=/codecs="([^"]*)"/.exec(a.mimeType);return(b&&b[1]?b[1]+" ("+Ku(a)+")":Ku(a))+(a.video&&a.video.isAccelerated?" [acc]":"")};
zV=function(a,b){g.J.call(this);var c=this;this.ma=pt(b);var d=this.ma.args||{};this.g=new wB(d);g.K(this,this.g);this.g.experiments.g("html5_parse_inline_fallback_host")&&(Zx=!0);this.xd=TA(nB(this.g)&&"blazer"!=this.g.g,d.enablesizebutton);this.Bc=TA(!1,d.player_wide);this.Ab=this.Mb=!1;this.aa=this.g.ob&&TA(!1,d.external_list);this.Ga=(this.Sc=this.g.ob&&TA(!1,d.external_play_video))&&this.g.experiments.g("player_unified_fullscreen_transitions");this.P=new g.dt(this);g.K(this,this.P);mg=function(a,
b){g.Q(b,"WARNING")};
this.V=null;this.ba=new g.iq;g.K(this,this.ba);this.fa=new g.iq;g.K(this,this.fa);this.L=new uV(this.fa);this.L.pause();this.l=new rL(this);g.K(this,this.l);this.U=new rL(this,1);g.K(this,this.U);this.H=new HR(this);g.K(this,this.H);this.R=1;this.Ya={};this.K=this.g.storeUserVolume?cv():{volume:100,muted:this.g.mute};this.wd=this.g.ob?new FF(this,1):new Nv(this,1);g.K(this,this.wd);this.B=null;this.Ra={};d={};this.Za=(d.internalvideodatachange=this.rE,d.playbackready=this.sE,d.playbackstarted=this.tE,
d.statechange=this.rA,d.signatureexpired=this.iH,d);this.A=Kba(this);g.K(this,this.A);this.Ec=new g.dt(this);g.K(this,this.Ec);this.I=new GF(this.g,this.A);this.o=Lba(this);d={};this.gd=(d.airplayactivechange=this.jE,d.airplayavailabilitychange=this.kE,d.beginseeking=this.AE,d.endseeking=this.jF,d.internalAbandon=this.xF,d.internalaudioformatchange=this.vE,d.internalvideodatachange=this.Gn,d.internalvideoformatchange=this.FH,d.liveviewshift=this.DF,d.playbackstalledatstart=this.nH,d.progresssync=
this.uA,d.seekto=this.vA,d.onLoadProgress=this.EF,d.onVideoProgress=this.xA,d.onLoadedMetadata=this.FF,d.playbackready=this.vG,d.statechange=this.Pu,d.connectionissue=this.SE,d.newelementrequired=this.hG,d.heartbeatparams=this.sA,d.videoelementevent=this.wA,d.drmoutputrestricted=this.gF,d);this.F=null;this.ya=new QR(10,function(a){a!=g.V(c,a.getPlayerType())&&a.dispose()});
g.K(this,this.ya);this.bb=this.zb=-1;this.Ua=new g.P(this.H.Be,16,this.H);g.K(this,this.Ua);this.Wa=!1;this.ia=!0;this.wa=this.Ma=this.C=null;this.Tc=!1;this.Yb=this.ud=null;this.Ta=this.sa=0;this.X=this.Ka=!1;this.Ha=null;this.P.M(this.l,"crn_appapi",this.pE);this.P.M(this.l,"crx_appapi",this.qE);this.P.M(this.l,"crn_appad",this.au);this.P.M(this.l,"crx_appad",this.au);this.P.M(this.l,"presentingplayerstatechange",this.tA);this.P.M(this.l,"resize",this.TG);this.H.ca(g.hd(a));this.P.M(this.l,"offlineslatestatechange",
this.mG);this.Gc=Mba(this,this.H.element);g.K(this,this.Gc);g.Y=this.g.X;Nba(this);this.I.g("fs");Oba(this);g.BB(this.g)||(this.Ha=new sV(this.l),this.A.I=this.Ha,this.Ha.init())};
Lba=function(a){var b=new kK(a.g,1,a.I,a.H,(0,g.A)(a.ba.O,a.ba),(0,g.A)(a.l.df,a.l));nL(b,a.g.o?1:AV(a,g.tu("yt-player-playback-rate")||1));BV(a,b,a.Za);return b};
Kba=function(a){var b="",c=a.ma.assets.js||"";0==c.indexOf("//")&&(c=a.g.protocol+":"+c);"/base.js"==c.substr(-8)&&(b=c.substr(0,c.length-8)+"/");!a.g.experiments.g("web_player_module_url_debug_killswitch")&&(c=Error().stack)&&(c=c.match(/\((https?:.*?\.js):\d+:\d+\)/))&&(c=c[1],c.includes(b)||g.Q(Error("Player module URL mismatch: "+(c+" vs "+b+".")),"WARNING"));b=new zR(a.l,b,a);c={};a=(c.loaded=(0,g.A)(a.XF,a),c.unloaded=(0,g.A)(a.YF,a),c.destroyed=(0,g.A)(a.yo,a),c);b.fa=a;return b};
DV=function(a,b){var c=!(!a.V||!a.V.Na());a.V||(a.V=new xV(a),g.K(a,a.V),g.TL(a.l,a.V.element,4));g.JM(a.V,b);CV(a)&&c!=b&&g.xL(a.A).ZA();b&&a.F.tc("sfn","1",!0)};
FV=function(a){var b=EV.getTag(!0,!a.g.C);a.B=new eK(b);g.K(a,a.B);a.F&&NK(a.F,a.B);try{if(a.g.fa)a.wa&&a.P.Pa(a.wa),a.wa=a.P.M(a.B,"volumechange",a.VF);else{a.B.setVolume(a.K.volume/100);var c=a.B,d=a.K.muted;Ax();c.g.muted=d}}catch(e){b="setvolume.1;emsg."+(e.message&&e.message.replace(/[;:,]/g,"_"));g.wK(a.o,"html5.missingapi","YTP_ERROR_UNSUPPORTED_DEVICE",b);return}c=a.H;c.g=b;c.H=!1;if(!c.g.parentNode)try{Dd(c.l,c.g,0)}catch(e){throw Error("videoElement_: "+!!c.g+", containerElement: "+!!c.l+
", containerElement.childNodes: "+!(!c.l||!c.l.childNodes)+", containerInitiallyTruthy: "+c.X+", isDisposed: "+c.ga());}c.B=new g.Xg(0,0,0,0);PR(c);DN(c);g.M(c.g,"video-stream");g.M(c.g,"html5-main-video");b=c.app.g;b.Yb&&c.g.setAttribute("data-no-fullscreen",!0);b.lf&&(c.g.setAttribute("webkit-playsinline",""),c.g.setAttribute("playsinline",""));b.oj&&c.g&&c.M(c.g,"click",c.g.play,c.g);try{uE(a.B)}catch(e){b="activate.1;emsg."+(e.message&&e.message.replace(/[;:,]/g,"_")),g.wK(a.o,"html5.missingapi",
"YTP_ERROR_UNSUPPORTED_DEVICE",b)}};
GV=function(a){if(a.B){a.wa&&(a.P.Pa(a.wa),a.wa=null);a.F&&LK(a.F);IR(a.H);var b=a.B.ha();EV.releaseTag(b);a.B=null}};
XO=function(a,b){var c=g.V(a,b);c||(c=HV(a,b),IV(a,c));$O(a,c)};
$O=function(a,b){if(a.F!=b){var c=null;a.F&&(c=a.F.o,GR(a.A),NL(a,"cuerangesremoved",AI(a.F.K)||[]),aP(a));IV(a,b);a.F=b;a.B&&NK(b,a.B);BV(a,b,a.gd);a.Gn("newdata",b,b.g);c&&!g.OE(c,b.o)&&a.Pu(new g.UE(b.o,c));b.Ka.g&&a.Gn("dataloaded",b,b.g);b.g.Ba&&a.l.la("onPlaybackQualityChange",b.g.Ba.video.quality);NL(a,"cuerangesadded",AI(a.F.K)||[]);IE(b.o)&&TK(b)}};
BV=function(a,b,c){for(var d in c)b.subscribe(d,c[d],a)};
IV=function(a,b){if(b!=a.o){var c=b.getPlayerType();a.Ra[c]=b}};
aP=function(a){if(a.B){var b=a.A.o;b&&b.Lr(a.B)&&(GV(a),FV(a))}LK(a.F);b=a.F;var c=a.gd;for(d in c)b.unsubscribe(d,c[d],a);if(a.g.experiments.g("html5_disable_preserve_reference_redux")){var d=a.F;d!=a.o&&(b=d.getPlayerType(),a.Ra[b]==d&&delete a.Ra[b])}a.F=null};
g.V=function(a,b){return b?1==b?a.o:a.Ra[b]||null:a.F};
HV=function(a,b){var c=a.I;2==b&&(c=new GF(a.g));return new kK(a.g,b,c,a.H,(0,g.A)(a.ba.O,a.ba),(0,g.A)(a.l.df,a.l))};
KV=function(a){var b=a.A;if(!b.B)try{CR(b)?(b.B=new yR(b.ma.U),b.B.create()):g.QL(b.g,"ad")}catch(c){g.QL(b.g,"ad"),g.Q(c)}b.Bq();b.ba?g.QL(b.g,"endscreen"):b.km();b.Eq();b.Gq();b.Fq();b.Aq();b.ba?(g.QL(b.g,"annotations_module"),g.QL(b.g,"creatorendscreen")):(b.im(),b.jm());b.zq();b.yq();b.lm();b.Cq();b=JV(a);aE(b,a.g)||BR(a.A);a.Ec.M(a.l,"presentingplayerstatechange",a.AG);a.l.O("videoready",b)};
LV=function(a){var b=vx();return!!(b&&b.canPlayType&&b.canPlayType(a))};
JV=function(a){return a.F.g};
MV=function(a,b){var c=g.V(a,b);return(c=c?c.l:null)?BE(c):0};
Nba=function(a){var b=a.ma.args;a.g.Rb&&OB(b);b=new g.qD(b);g.yu()&&b.rd.push("remote");b.Nc()&&(vK(a.o,b,(0,g.A)(a.Yc,a)),aE(a.o.g,a.g)&&(a.g.wd||a.g.gd)&&yK(a.o))};
Oba=function(a){var b=a.H,c=b.app.g;c.fg||b.Ik("tag-pool-enabled");c.Rb&&b.Ik("house-brand");"gvn"==c.g&&(b.Ik("ytp-gvn"),b.element.style.backgroundColor="transparent");c.ba&&(b.C=g.vt("yt-dom-content-change",b.Be,b));b.M(window,"resize",b.Be,b);b=a.wd;b.o=a.H.element;for(var d in b.A)b.o[d]=b.A[d];(d=Ks(a.H.element))&&a.P.M(a.H,d,a.nF);a.P.M(window,"resize",a.UG);b=a.ma.args;FV(a);d=a.o.g;a.l.la("onVolumeChange",a.K);if(b&&VF(b))if((c=CB(a.g))&&!a.aa&&(b.fetch=0),NV(a,b),c&&!a.aa)OV(a);else if(!d.Nc())a.C.onReady((0,g.A)(a.Go,
a));$O(a,a.o);g.T(a.o.o,128)||(b=yx(a.g.C),"fmt.noneavailable"==b?g.wK(a.o,"html5.missingapi","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nocodecs.1"):"html5.missingapi"==b?g.wK(a.o,b,"YTP_ERROR_UNSUPPORTED_DEVICE","nocanplaymedia.1"):d&&d.Nc()&&aE(a.o.g,a.g)&&(a.g.wd||a.g.gd)?PV(a):g.JB(a.g)||QV(a))};
QV=function(a){a.l.O("initializingmode");g.RV(a,2);a.A.lm()};
PV=function(a){if(g.T(a.o.o,128))return!1;aE(a.o.g,a.g)&&a.g.gd&&(EV.hasTags(void 0)&&a.X?(Rv(a,{muted:!1,volume:a.K.volume},!1),SV(a,!1)):EV.hasTags(void 0)||a.K.muted||(Rv(a,{muted:!0,volume:a.K.volume},!1),SV(a,!0)));TV(a,1,a.o.g.videoId);a.l.O("initializingmode");$O(a,a.o);g.RV(a,3);var b=a.A.o,c;(c=!a.g.fg)||(c=!1);if(c||b&&b.Lr(a.B)&&a.Tc)GV(a),FV(a),NK(a.o,a.B);AK(a.o);if(g.T(a.o.o,128))return!1;UV(a,3);return a.Tc=!0};
CV=function(a){a=g.xL(a.A);return!!a&&a.loaded};
VV=function(a,b){if(a.F==a.o&&a.F.wd!=b){var c=a.F;c.wd=b;c.l&&(c.l.g.loop=b);a.l.O("loopchange",b)}};
WV=function(a,b,c){(0,window.isNaN)(b)||(b=AV(a,b),a.o.Ha!=b&&(nL(a.o,b),c&&!a.g.o&&g.ru("yt-player-playback-rate",b),a.l.la("onPlaybackRateChange",b)))};
AV=function(a,b){var c=1;c=a.l.qh();return c=1>b?g.Pa(c,function(a){return a>=b}):Ra(c,function(a){return a<=b})};
YV=function(a,b){var c=jL(a.o,b);a.F&&a.F!=a.o&&(c=XV(c,jL(a.F,b),"ad_"));if(b&&a.B){c["0sz"]=0==g.Hh(a.B.g).yd();c.op=qh(a.B.g,"opacity");var d=vh(a.B.g).y+g.Hh(a.B.g).height;c.yof=0>=d;c.dis=qh(a.B.g,"display")}(d=b?(0,g.TE)():null)&&(c.gpu=d);c.cgr=!0;c.debug_playbackQuality=a.U.Ci();c.debug_date=(new Date).toString();delete c.uga;delete c.q;(d=a.A.H)&&(c=XV(c,d.Ow(),"fresca_"));return JSON.stringify(c,null,2)};
wL=function(a){return 1==a.R?1:CV(a)?3:g.V(a).getPlayerType()};
ZV=function(a,b){return 3==wL(a)?RE(g.xL(a.A).F):2==b?a.bb:a.zb};
$V=function(a){var b=a.A.B;b&&b.created&&b.destroy();VV(a,!1);a.Ya={};a=a.I;b=a.l;b.X={};b.aa={};a.A=!1};
OV=function(a){var b=aW();if(b)if(b.list){if(a.C&&a.C.listId.toString()==b.list)if(0<=b.index){var c=b.video;a.l.isFullscreen()&&((c=c[a.C.Oa])&&c.encrypted_id!=a.C.Eb().videoId||(b.index=a.C.Oa));ZF(a.C,b);a.Ma&&bW(a,a.Ma)}else a.Ma=null}else a.Lj()};
NV=function(a,b){a.C&&(a.C.unsubscribe("error",a.Lj,a),g.Ee(a.C),a.C=null);b&&(a.aa&&(b.fetch=0),a.C=new g.UF(b),a.C.subscribe("error",a.Lj,a))};
cW=function(a,b,c,d){b in a.Ya||(c=new g.JF(c,d,{id:b,priority:1}),c.namespace="appad",zI(a.o.K,[c]),a.Ya[b]=c)};
g.RV=function(a,b){b!=a.R&&(2==b&&(UV(a,-1),UV(a,5)),a.R=b,a.l.O("appstatechange",b))};
UV=function(a,b){a.F&&2==a.F.getPlayerType()?a.bb!=b&&(a.bb=b,a.l.la("onAdStateChange",b)):a.zb!=b&&(a.zb=b,a.l.la("onStateChange",b))};
dW=function(a,b,c,d,e){c=0!=c;if(e=g.V(a,e))2==a.R&&PV(a),CK(e,b,c,d)};
fW=function(a,b,c,d,e){a.g.Rb&&OB(b);var f=new g.qD(b);d||(b&&VF(b)?(CB(a.g)&&!a.aa&&(b.fetch=0),NV(a,b)):a.C&&NV(a,null),a.aa=TA(!1,b.external_list),CB(a.g)&&!a.aa&&OV(a));return eW(a,f,c,e)};
TV=function(a,b,c){var d=b+c;if(c=a.ya.get(d)){a.ya.remove(d);if(c==g.V(a,b))return c;if(1==c.getPlayerType()){c.g.autonavState=a.o.g.autonavState;b=a.o;d=a.Za;for(var e in d)b.unsubscribe(e,d[e],a);e=a.o.Ha;a.o.dispose();a.o=c;nL(a.o,e);BV(a,c,a.Za);$V(a)}else(e=g.V(a,b))&&e.dispose();a.F.getPlayerType()==c.getPlayerType()?$O(a,c):IV(a,c)}return c};
eW=function(a,b,c,d){aD("_start","")||(PC("p",void 0,""),a.I.info("srt",0));var e=TV(a,c||a.F.getPlayerType(),b.videoId);if(!e){e=g.V(a,c);if(!e)return!1;a.Ua.stop();gW(a,c);vK(e,b,(0,g.A)(a.Yc,a),d)}if(!xK(e))return!1;a.Wa&&(e.Mb=!1,a.Wa=!1);if(e==a.o)return g.RV(a,1),PV(a);AK(e);return!0};
hW=function(a,b,c){c=g.V(a,c);b&&c==a.o&&(c.g.Jf=!0)};
jW=function(a,b,c){a.g.Rb&&OB(b);if(b&&VF(b))if(a.ia=!0,NV(a,b),(b=a.C.Eb())&&b.Nc())iW(a,b,c);else a.C.onReady((0,g.A)(a.Go,a));else c||(c=wL(a)),1==c&&a.Lj(),iW(a,new g.qD(b),c)};
iW=function(a,b,c){var d=g.V(a,c);d&&(gW(a,c),vK(d,b,(0,g.A)(a.Yc,a)),d==a.o&&(g.RV(a,1),QV(a)))};
g.lW=function(a,b,c,d,e,f,k){if(!b&&!d)throw Error("Playback source is invalid");a.l.isFullscreen()&&!a.Ga||!nB(a.g)&&!g.mB(a.g)?(c=a.I,f=c.l,f.X={},f.aa={},c.A=!1,a.I.reset(),b={video_id:b},e&&(b.autoplay="1"),a.g.experiments.g("html5_player_autonav_logging")&&e&&(b.autonav="1"),d?(b.list=d,a.ia=!1,kW(a,b,void 0,void 0,void 0)):fW(a,b,1)):(c=c||{},c.lact=g.$t(),c.vis=a.l.df(),a.Sc||"gaming"==a.g.g?a.l.la("onPlayVideo",{videoId:b,watchEndpoint:k,sessionData:c,listId:d}):(a=f&&JV(a).isLiveDestination?
a.g.aa:a.g.getVideoUrl(b,d),g.z("yt.player.exports.navigate")(a,c)))};
kW=function(a,b,c,d,e){if(g.Ca(b)&&!g.za(b)){c="playlist list listType index startSeconds suggestedQuality".split(" ");d={};for(e=0;e<c.length;e++){var f=c[e];b[f]&&(d[f]=b[f])}b=d}else c={index:c,startSeconds:d,suggestedQuality:e},g.w(b)&&16==b.length?c.list="PL"+b:c.playlist=b,b=c;NV(a,b);a.C.onReady((0,g.A)(a.Go,a))};
g.mW=function(a){if(a.l.app.X)return!1;if(3==wL(a))return!0;CB(a.g)&&!a.aa&&OV(a);return!(!a.C||!a.C.hasNext())};
nW=function(a,b,c){var d=g.V(a,1).g.suggestions;g.UL(a.l)&&d?(d=g.I(d,g.RR),b=d[0],d=c?b.Oq:b.fd,g.lW(a,b.Eb().videoId,d,b.getPlaylistId(),c)):!a.aa||a.l.isFullscreen()&&!a.Ga?3==wL(a)?g.xL(a.A).XA():a.C&&(CB(a.g)&&!a.l.isFullscreen()?bW(a,"yt.www.watch.lists.next"):(a.C.hasNext(b)&&YF(a.C,WF(a.C)),a.C.ye?(b=c&&a.g.experiments.g("html5_player_autonav_logging"),eW(a,a.C.Eb(void 0,c,b),1)):a.ia=!1)):a.l.la("onPlaylistNext")};
oW=function(a,b){!a.aa||a.l.isFullscreen()&&!a.Ga?3==wL(a)?g.xL(a.A).YA():a.C&&(CB(a.g)&&!a.l.isFullscreen()?bW(a,"yt.www.watch.lists.prev"):(a.C.te(b)&&YF(a.C,XF(a.C)),a.C.ye?eW(a,a.C.Eb(),1):a.ia=!1)):a.l.la("onPlaylistPrevious")};
bW=function(a,b){var c=g.z(b);if(c){var d=aW();d&&d.list&&c();a.Ma=null}else a.Ma=b};
aW=function(){var a=g.z("yt.www.watch.lists.getState");return a?a():null};
pW=function(a,b,c,d,e,f){b={id:b};"chapter"==f?(b.style="ytp-chapter-marker",b.visible=!0):(0,window.isNaN)(e)||("ad"==f?b.style="ytp-ad-progress":(b.style="ytp-time-marker",b.color=e),b.visible=!0);c=new g.JF(1E3*c,1E3*d,b);c.namespace="appapi";LL(a,[c],1);return!0};
LL=function(a,b,c){var d=g.V(a,c);d&&(zI(d.K,b),c&&wL(a)!=c||NL(a,"cuerangesadded",b))};
qW=function(a){var b=g.Mt(),c=a.getCurrentTime();a=JV(a);return b-Math.max(1E3*(c-a.startSeconds),0)};
Rv=function(a,b,c){a.g.U&&(a.K=b,b.muted||SV(a,!1),c&&a.g.storeUserVolume&&!a.g.fa&&(c={volume:Math.floor(b.volume),muted:b.muted},c.unstorable||(g.ru("yt-player-volume",c),g.ru("yt-player-volume",c,2592E3))),rW(a),c=g.Px&&!a.B.Zc(),!a.g.fa||c)&&(b=g.hc(b),a.g.storeUserVolume||(b.unstorable=!0),a.l.la("onVolumeChange",b))};
rW=function(a){var b=JV(a);b.xj||(b=a.g.fa?1:cE(b,a.g),a.B.setVolume(a.K.volume*b/100),b=a.B,a=a.K.muted,Ax(),b.g.muted=a)};
SV=function(a,b){b!=a.X&&(a.X=b,a.l.O("mutedautoplaychange",b))};
tW=function(a,b){var c=window.screen&&window.screen.orientation;if(a.g.experiments.g("lock_fullscreen2")&&c&&c.lock&&(!g.Px||!g.sW))if(b){var d=0==c.type.indexOf("portrait"),e=g.LR(a.H),f=d;1>e?f=!0:1<e&&(f=!1);if(!a.Ka||f!=d){if(c=c.lock(f?"portrait":"landscape"))c["catch"](g.wa);a.Ka=!0}}else a.Ka&&(a.Ka=!1,c.unlock())};
uW=function(a,b){var c=!!b,d=!!a.Ta!=c;a.Ta=b;a.g.Ka=c;a.H.Be();d&&a.I.g("fsc");d&&(a.l.O("fullscreentoggled",c),d=a.o.g,c={fullscreen:c,videoId:d.ypcOrigin||d.videoId,time:a.getCurrentTime()},a.U.getPlaylistId()&&(c.listId=a.U.getPlaylistId()),a.l.la("onFullscreenChange",c))};
NL=function(a,b,c){a.l.O(b,c);var d=g.lB(a.g)||g.BB(a.g);if(c&&d){switch(b){case "cuerangemarkersupdated":var e="onCueRangeMarkersUpdated";break;case "cuerangesadded":e="onCueRangesAdded";break;case "cuerangesremoved":e="onCueRangesRemoved"}e&&a.l.la(e,c)}};
wW=function(a,b){var c=g.V(a,b);c&&(2==a.R?PV(a):a.g.experiments.g("html5_restore_userreload_killswitch")&&c.o.isError()?vW(a,"user"):(null!=a.V&&a.V.Na()&&a.V.start(),g.T(c.o,2)?(dW(a,0),a.g.experiments.g("html5_ignore_playing_evt")&&TK(c)):TK(c)))};
gW=function(a,b){g.xC(a.sa);a.sa=0;var c=g.V(a,b);if(c&&1!=a.R&&2!=a.R){(a.g.experiments.g("html5_disable_module_ownership")||c==a.F)&&GR(a.A);if(1==b){a.g.experiments.g("html5_stop_video_in_cancel_playback")&&fL(c);var d=a.A.B;d&&d.created&&d.destroy()}g.KK(c);d=a.g.experiments.g("html5_disable_non_presenting_cueranges")?a.F:c;NL(a,"cuerangesremoved",AI(d.K)||[]);c.K.reset()}};
xW=function(a,b,c,d,e){c=0!=c;var f=g.V(a,e);if(!f||2!=f.getPlayerType()&&!g.UD(f.g))3==wL(a)?g.xL(a.A).yi("control_seek",b,c):dW(a,b,c,d,e)};
vW=function(a,b,c){if(!a.Wa){c&&(GV(a),FV(a));a.Wa=!0;c=g.V(a);c.Mb=!0;c.tc("reloading","reason."+b);c=JV(a);var d={};d.video_id=c.videoId;d.adformat=c.adFormat;c.oa||(d.start=g.V(a).getCurrentTime(),d.resume="1");c.He&&(d.vvt=c.He);c.vssCredentialsToken&&(d.vss_credentials_token=c.vssCredentialsToken,d.vss_credentials_token_type=c.Hl);c.oauthToken&&(d.oauth_token=c.oauthToken);d.autoplay=1;d.reload_count=c.Uf+1;d.reload_reason=b;c.Gh&&(d.unplugged_partner_opt_out=c.Gh);fW(a,d)}};
yW=function(a,b){a.o.g.autonavState=b;g.ru("yt-player-autonavstate",b);a.l.O("autonavchange",b)};
zW=function(a){var b=JV(a).xj,c=a.g.tf;b||c?(a=a.B,a.C=!0,Ax(),a.g.muted=!0):(a.B.C=!1,Rv(a,a.K))};
Mba=function(a,b){return a.g.experiments.g("html5_enable_embedded_player_visibility_signals")&&a.g.o?new WR(b):null};
XV=function(a,b,c){for(var d in b)a[c+d]=b[d];return a};
aa=[];ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ha="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;ia=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
oa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)AW=Object.setPrototypeOf;else{var BW;a:{var Pba={xc:!0},CW={};try{CW.__proto__=Pba;BW=CW.xc;break a}catch(a){}BW=!1}AW=BW?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=AW;
ra("Array.prototype.find",function(a){return a?a:function(a,c){a:{var b=this;b instanceof String&&(b=String(b));for(var e=b.length,f=0;f<e;f++){var k=b[f];if(a.call(c,k,f,b)){b=k;break a}}b=void 0}return b}});
ra("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=sa(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
ra("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)ta(e,f)&&(a[f]=e[f])}return a}});
ra("Promise",function(a){function b(a){this.g=0;this.o=void 0;this.l=[];var b=this.A();try{a(b.resolve,b.reject)}catch(m){b.reject(m)}}
function c(){this.g=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.l=function(a){null==this.g&&(this.g=[],this.A());this.g.push(a)};
c.prototype.A=function(){var a=this;this.o(function(){a.C()})};
var e=ha.setTimeout;c.prototype.o=function(a){e(a,0)};
c.prototype.C=function(){for(;this.g&&this.g.length;){var a=this.g;this.g=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(n){this.B(n)}}}this.g=null};
c.prototype.B=function(a){this.o(function(){throw a;})};
b.prototype.A=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.K),reject:a(this.B)}};
b.prototype.K=function(a){if(a===this)this.B(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.L(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.I(a):this.C(a)}};
b.prototype.I=function(a){var b=void 0;try{b=a.then}catch(m){this.B(m);return}"function"==typeof b?this.P(b,a):this.C(a)};
b.prototype.B=function(a){this.F(2,a)};
b.prototype.C=function(a){this.F(1,a)};
b.prototype.F=function(a,b){if(0!=this.g)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.g);this.g=a;this.o=b;this.H()};
b.prototype.H=function(){if(null!=this.l){for(var a=this.l,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.l=null}};
var f=new c;b.prototype.L=function(a){var b=this.A();a.Ej(b.resolve,b.reject)};
b.prototype.P=function(a,b){var c=this.A();try{a.call(b,c.resolve,c.reject)}catch(n){c.reject(n)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(E){f(E)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.Ej(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Ej=function(a,b){function c(){switch(d.g){case 1:a(d.o);break;case 2:b(d.o);break;default:throw Error("Unexpected state: "+d.g);}}
var d=this;null==this.l?f.l(c):this.l.push(function(){f.l(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.q(a),f=e.next();!f.done;f=e.next())d(f.value).Ej(b,c)})};
b.all=function(a){var c=g.q(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Ej(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
ra("Math.trunc",function(a){return a?a:function(a){a=Number(a);if((0,window.isNaN)(a)||window.Infinity===a||-window.Infinity===a||0===a)return a;var b=Math.floor(Math.abs(a));return 0>a?-b:b}});
ra("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
ra("WeakMap",function(a){function b(a){this.Aa=(f+=Math.random()+1).toString();if(a){da();ma();a=g.q(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){ta(a,e)||ka(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!ta(a,e))throw Error("WeakMap key fail: "+a);a[e][this.Aa]=b;return this};
b.prototype.get=function(a){return ta(a,e)?a[e][this.Aa]:void 0};
b.prototype.has=function(a){return ta(a,e)&&ta(a[e],this.Aa)};
b.prototype["delete"]=function(a){return ta(a,e)&&ta(a[e],this.Aa)?delete a[e][this.Aa]:!1};
return b});
ra("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.g;return na(function(){if(c){for(;c.head!=a.g;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.l[c];if(d&&ta(a.l,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,Ic:l}}return{id:c,list:d,index:-1,Ic:void 0}}
function e(a){this.l={};this.g=b();this.size=0;if(a){a=g.q(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.q([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(u){return!1}}())return a;
da();ma();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.l[c.id]=[]);c.Ic?c.Ic.value=b:(c.Ic={next:this.g,previous:this.g.previous,head:this.g,key:a,value:b},c.list.push(c.Ic),this.g.previous.next=c.Ic,this.g.previous=c.Ic,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.Ic&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.l[a.id],a.Ic.previous.next=a.Ic.next,a.Ic.next.previous=a.Ic.previous,a.Ic.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.l={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).Ic};
e.prototype.get=function(a){return(a=d(this,a).Ic)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
ra("Set",function(a){function b(a){this.g=new window.Map;if(a){a=g.q(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.g.size}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.q([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
da();ma();b.prototype.add=function(a){this.g.set(a,a);this.size=this.g.size;return this};
b.prototype["delete"]=function(a){a=this.g["delete"](a);this.size=this.g.size;return a};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(a){return this.g.has(a)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.g.forEach(function(d){return a.call(b,d,d,c)})};
return b});
ra("Array.from",function(a){return a?a:function(a,c,d){ma();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var k=0;k<f;k++)b.push(c.call(d,a[k]))}return b}});
ra("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
ra("Array.prototype.includes",function(a){return a?a:function(a,c){var b=this;b instanceof String&&(b=String(b));for(var e=b.length,f=c||0;f<e;f++)if(b[f]==a||Object.is(b[f],a))return!0;return!1}});
ra("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==sa(this,a,"includes").indexOf(a,c||0)}});
ra("Object.values",function(a){return a?a:function(a){var b=[],d;for(d in a)ta(a,d)&&b.push(a[d]);return b}});
var Qba=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
ra("Reflect.construct",function(){return Qba});
ra("Object.entries",function(a){return a?a:function(a){var b=[],d;for(d in a)ta(a,d)&&b.push([d,a[d]]);return b}});
ra("Math.log2",function(a){return a?a:function(a){return Math.log(a)/Math.LN2}});
g.DW=g.DW||{};g.x=this;Da="closure_uid_"+(1E9*Math.random()>>>0);Ea=0;g.H=Date.now||function(){return+new Date};g.F(La,Error);La.prototype.name="CustomError";var fd;var Xk;g.Sa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.w(a))return g.w(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.Rba=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.w(a))return g.w(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.w(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Gd=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.w(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.I=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.w(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
Xk=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
(0,g.G)(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
g.lk=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Kn=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var Jb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},wb=/&/g,xb=/</g,yb=/>/g,zb=/"/g,Ab=/'/g,Bb=/\x00/g,vb=/[\x00&<>"']/,Fb=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var EW=g.x.navigator;if(EW){var FW=EW.userAgent;if(FW){g.Qb=FW;break a}}g.Qb=""};var jc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");qc[" "]=g.wa;var Ez,XJ,GW,HW,Sba,IW;g.ph=Rb("Opera");g.qd=Rb("Trident")||Rb("MSIE");Ez=Rb("Edge");g.GB=Ez||g.qd;g.oh=Rb("Gecko")&&!(Eb(g.Qb,"WebKit")&&!Rb("Edge"))&&!(Rb("Trident")||Rb("MSIE"))&&!Rb("Edge");g.sd=Eb(g.Qb,"WebKit")&&!Rb("Edge");XJ=Rb("Macintosh");g.sW=Rb("Windows");g.sB=Rb("Android");GW=oc();HW=Rb("iPad");Sba=Rb("iPod");g.Ok=pc();
a:{var JW="",KW=function(){var a=g.Qb;if(g.oh)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ez)return/Edge\/([\d\.]+)/.exec(a);if(g.qd)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.sd)return/WebKit\/(\S+)/.exec(a);if(g.ph)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
KW&&(JW=KW?KW[1]:"");if(g.qd){var LW=uc();if(null!=LW&&LW>(0,window.parseFloat)(JW)){IW=String(LW);break a}}IW=JW}var vc=IW,sc={},MW;var NW=g.x.document;MW=NW&&g.qd?uc()||("CSS1Compat"==NW.compatMode?(0,window.parseInt)(vc,10):5):void 0;var xc=MW;var ud,Fd,Jd;ud=!g.qd||g.yc(9);Fd=!g.oh&&!g.qd||g.qd&&g.yc(9)||g.oh&&g.wc("1.9.1");g.OW=g.qd&&!g.wc("9");Jd=g.qd||g.ph||g.sd;Ac.prototype.ug=!0;Ac.prototype.Df=function(){return this.g};
Ac.prototype.toString=function(){return"Const{"+this.g+"}"};
var zc={};g.Cc("");var Tba=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),Uba=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),Vba=/^http:\/\/.*/,Wba=/\s+/,Xba=/[\d\u06f0-\u06f9]/;Ec.prototype.ug=!0;Ec.prototype.Df=function(){return this.g};
Ec.prototype.Zm=!0;Ec.prototype.xm=function(){return 1};
var Dc={};Ic.prototype.ug=!0;Ic.prototype.Df=function(){return this.g};
Ic.prototype.Zm=!0;Ic.prototype.xm=function(){return 1};
var Kc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Hc={};Lc("about:blank");g.Pc.prototype.Zm=!0;g.Pc.prototype.xm=function(){return this.l};
g.Pc.prototype.ug=!0;g.Pc.prototype.Df=function(){return this.g};
var Oc={};Rc("<!DOCTYPE html>",0);Rc("",0);Rc("<br>",0);g.h=g.Zc.prototype;g.h.clone=function(){return new g.Zc(this.x,this.y)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.scale=function(a,b){var c=g.va(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.bd.prototype;g.h.clone=function(){return new g.bd(this.width,this.height)};
g.h.yd=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.yd()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.va(b)?b:a;this.width*=a;this.height*=c;return this};var ld={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.h=dd.prototype;g.h.ha=function(){return g.w(void 0)?this.g.getElementById(void 0):void 0};
g.h.getElementsByTagName=function(a,b){return(b||this.g).getElementsByTagName(String(a))};
g.h.createElement=function(a){return this.g.createElement(String(a))};
g.h.appendChild=g.Bd;g.h.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
g.h.removeNode=g.Ed;g.h.contains=g.Ld;var Ud=g.wa;var jB,iB,kB;g.Hz=Rb("Firefox");jB=oc()||Rb("iPod");iB=Rb("iPad");kB=g.nc();g.Px=lc();g.Qk=mc()&&!pc();var $d=null,ee=null,Zd=null;var he=[];ge.prototype.clone=function(){return ie(this.l,this.A,this.o-this.A)};
ge.prototype.clear=function(){this.l=null;this.g=this.o=this.A=0;this.B=!1};
ge.prototype.reset=function(){this.g=this.A};
ge.prototype.getError=function(){return this.B||0>this.g||this.g>this.o};ke.prototype.getError=function(){return this.A||this.g.getError()};
ke.prototype.reset=function(){this.g.reset();this.l=this.o=-1};var re="function"==typeof window.Uint8Array,se=[];qe.prototype.toString=function(){Ae(this);return this.l.toString()};
qe.prototype.getExtension=function(a){if(this.o){this.g||(this.g={});var b=a.o;if(a.A){if(a.l())return this.g[b]||(this.g[b]=(0,g.I)(this.o[b]||[],function(b){return new a.g(b)})),this.g[b]}else if(a.l())return!this.g[b]&&this.o[b]&&(this.g[b]=new a.g(this.o[b])),this.g[b];
return this.o[b]}};
qe.prototype.clone=function(){return new this.constructor(Be(ze(this)))};window.console&&"function"===typeof window.console.log&&(0,g.A)(window.console.log,window.console);var df=!g.qd||g.yc(9),Yba=g.qd&&!g.wc("9"),$e=function(){if(!g.x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.x.addEventListener("test",g.wa,b);g.x.removeEventListener("test",g.wa,b);return a}();g.J.prototype.rb=!1;g.J.prototype.ga=function(){return this.rb};
g.J.prototype.dispose=function(){this.rb||(this.rb=!0,this.T())};
g.J.prototype.T=function(){if(this.nb)for(;this.nb.length;)this.nb.shift()()};g.Ge.prototype.stopPropagation=function(){this.Ng=!0};
g.Ge.prototype.preventDefault=function(){this.defaultPrevented=!0;this.xv=!1};g.F(He,g.Ge);var Zba={2:"touch",3:"pen",4:"mouse"};
He.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.oh&&(rc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.offsetX=g.sd||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=g.sd||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?
a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=g.w(a.pointerType)?
a.pointerType:Zba[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
He.prototype.stopPropagation=function(){He.ua.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
He.prototype.preventDefault=function(){He.ua.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Yba)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Ke;g.Ie="closure_listenable_"+(1E6*Math.random()|0);Ke=0;Ne.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var k=Qe(a,b,d,e);-1<k?(b=a[k],c||(b.Dj=!1)):(b=new Le(b,this.src,f,!!d,e),b.Dj=c,a.push(b));return b};
Ne.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Qe(e,b,c,d);return-1<b?(Me(e[b]),g.Xa(e,b),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
Ne.prototype.ci=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Qe(a,b,c,d));return-1<e?a[e]:null};
Ne.prototype.hasListener=function(a,b){var c=g.t(a),d=c?a.toString():"",e=g.t(b);return Ub(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Ye="closure_lm_"+(1E6*Math.random()|0),gf={},bf=0,kf="__closure_events_fn_"+(1E9*Math.random()>>>0);g.F(g.lf,g.J);g.lf.prototype[g.Ie]=!0;g.h=g.lf.prototype;g.h.Xo=function(a){this.K=a};
g.h.addEventListener=function(a,b,c,d){g.Ue(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.ef(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.K;if(b){var c=[];for(var d=1;b;b=b.K)c.push(b),++d}b=this.fa;d=a.type||a;if(g.w(a))a=new g.Ge(a,b);else if(a instanceof g.Ge)a.target=a.target||b;else{var e=a;a=new g.Ge(d,b);g.kc(a,e)}e=!0;if(c)for(var f=c.length-1;!a.Ng&&0<=f;f--){var k=a.currentTarget=c[f];e=mf(k,d,!0,a)&&e}a.Ng||(k=a.currentTarget=b,e=mf(k,d,!0,a)&&e,a.Ng||(e=mf(k,d,!1,a)&&e));if(c)for(f=0;!a.Ng&&f<c.length;f++)k=a.currentTarget=c[f],e=mf(k,d,!1,a)&&e;return e};
g.h.T=function(){g.lf.ua.T.call(this);this.Ed&&g.Pe(this.Ed);this.K=null};
g.h.ea=function(a,b,c,d){return this.Ed.add(String(a),b,!1,c,d)};
g.h.Ek=function(a,b,c,d){return this.Ed.add(String(a),b,!0,c,d)};
g.h.Pa=function(a,b,c,d){this.Ed.remove(String(a),b,c,d)};
g.h.ci=function(a,b,c,d){return this.Ed.ci(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.Ed.hasListener(g.t(a)?String(a):void 0,b)};nf.prototype.get=function(){if(0<this.l){this.l--;var a=this.g;this.g=a.next;a.next=null}else a=this.o();return a};var uf;var Ff=new nf(function(){return new yf},function(a){a.reset()});
xf.prototype.add=function(a,b){var c=Ff.get();c.set(a,b);this.l?this.l.next=c:this.g=c;this.l=c};
xf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.l=null),a.next=null);return a};
yf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
yf.prototype.reset=function(){this.next=this.scope=this.g=null};var zf,Bf=!1,Cf=new xf;Kf.prototype.reset=function(){this.context=this.l=this.A=this.g=null;this.o=!1};
var Lf=new nf(function(){return new Kf},function(a){a.reset()});
g.Jf.prototype.then=function(a,b,c){return Vf(this,g.Ba(a)?a:null,g.Ba(b)?b:null,c)};
Gf(g.Jf);g.Jf.prototype.cancel=function(a){0==this.g&&g.Df(function(){var b=new ag(a);Xf(this,b)},this)};
g.Jf.prototype.I=function(a){this.g=0;If(this,2,a)};
g.Jf.prototype.K=function(a){this.g=0;If(this,3,a)};
g.Jf.prototype.H=function(){for(var a;a=Yf(this);)Zf(this,a,this.g,this.F);this.C=!1};
var eg=tf;g.F(ag,La);ag.prototype.name="cancel";g.F(g.fg,g.lf);g.h=g.fg.prototype;g.h.enabled=!1;g.h.xa=null;g.h.setInterval=function(a){this.Hb=a;this.xa&&this.enabled?(this.stop(),this.start()):this.xa&&this.stop()};
g.h.gc=function(){if(this.enabled){var a=(0,g.H)()-this.vn;0<a&&a<.8*this.Hb?this.xa=this.Fh.setTimeout(this.Ul,this.Hb-a):(this.xa&&(this.Fh.clearTimeout(this.xa),this.xa=null),this.dispatchEvent("tick"),this.enabled&&(this.xa=this.Fh.setTimeout(this.Ul,this.Hb),this.vn=(0,g.H)()))}};
g.h.start=function(){this.enabled=!0;this.xa||(this.xa=this.Fh.setTimeout(this.Ul,this.Hb),this.vn=(0,g.H)())};
g.h.stop=function(){this.enabled=!1;this.xa&&(this.Fh.clearTimeout(this.xa),this.xa=null)};
g.h.T=function(){g.fg.ua.T.call(this);this.stop();delete this.Fh};var mg=g.wa,tg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},sg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.h=ug.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.t(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.H)()+1E3*c)).toUTCString();this.g.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Jb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.t(this.get(a));this.set(a,"",0,b,c);return d};
g.h.jd=function(){return vg(this).keys};
g.h.Vb=function(){return vg(this).values};
g.h.isEmpty=function(){return!this.g.cookie};
g.h.Sd=function(){return this.g.cookie?(this.g.cookie||"").split(";").length:0};
g.h.clear=function(){for(var a=vg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.wu=new ug("undefined"==typeof window.document?null:window.document);g.wu.l=3950;var xg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,Ng=/#|$/,Og=/[?&]($|#)/;Sg.prototype.remove=function(a){fc(this.g,a)};
Sg.prototype.set=function(a,b){this.g[a]=b};
Sg.prototype.get=function(a){return gc(this.g,a,null)};g.h=g.Ug.prototype;g.h.Vd=function(){return this.right-this.left};
g.h.getHeight=function(){return this.bottom-this.top};
g.h.clone=function(){return new g.Ug(this.top,this.right,this.bottom,this.left)};
g.h.contains=function(a){return this&&a?a instanceof g.Ug?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
g.h.expand=function(a,b,c,d){g.Ca(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=Number(b),this.bottom+=Number(c),this.left-=Number(d));return this};
g.h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
g.h.scale=function(a,b){var c=g.va(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};g.h=g.Xg.prototype;g.h.clone=function(){return new g.Xg(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Zc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.va(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};var ih=null;dh.prototype.getValue=function(){return this.g};
dh.prototype.l=function(){return String(this.g)};
g.F(fh,dh);fh.prototype.l=function(){return this.g?"1":"0"};
g.F(gh,dh);gh.prototype.l=function(){return this.g?Math.round(this.g.top)+"."+Math.round(this.g.left)+"."+(Math.round(this.g.top)+Math.round(this.g.height))+"."+(Math.round(this.g.left)+Math.round(this.g.width)):""};var nh={},Mh={thin:2,medium:4,thick:6};new g.fg(200);Vh("d");Wh("d");Xh("d");Vh("f");Wh("f");Xh("f");Vh("i");Wh("i");Xh("i");Vh("j");Wh("j");Xh("j");Xh("j");Vh("u");Wh("u");Xh("u");Vh("v");Wh("v");Xh("v");Xh("v");Vh("b");Wh("b");Xh("b");Vh("e");Wh("e");Xh("e");Vh("s");Wh("s");Xh("s");Vh("B");Wh("B");Xh("B");Vh("x");Wh("x");Xh("x");Vh("y");Wh("y");Xh("y");Vh("g");Wh("g");Xh("g");Vh("h");Wh("h");Xh("h");Vh("n");Wh("n");Xh("n");Vh("o");Wh("o");Xh("o");Xh("o");var li=window.document,L=window;var ai=/https?:\/\/[^\/]+/;var ei=g.rf(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.x.addEventListener("test",null,b)}catch(c){}return a});var ji=!!window.google_async_iframe_id,ki=ji&&window.parent||window;var $ba=[0,2,1],PW=null;window.document.addEventListener&&window.document.addEventListener("mousedown",function(a){PW=a},!0);
window.mb=function(a){if(a){var b;if(b=window.event||PW){var c;(c=b.which?1<<$ba[b.which-1]:b.button)&&b.shiftKey&&(c|=8);c&&b.altKey&&(c|=16);c&&b.ctrlKey&&(c|=32);b=c}else b=null;b&&(window.css?(0,window.css)(a.id,"mb",b,void 0,void 0):a&&(a.href=Yh(a.href,"mb",b,void 0)))}};var rk={NONE:0,oK:1},ck={cK:0,tK:1};oi.prototype.isVisible=function(){return this.Xe?.3<=this.g:.5<=this.g};pi.prototype.getValue=function(){return this.g};qi.prototype.enable=function(){this.o=!0};
qi.prototype.isEnabled=function(){return this.o};
qi.prototype.reset=function(){this.g={};this.o=!0;this.l={}};var ui=(0,g.H)(),yi=-1,wi=-1,QW,zi=-1,xi=!1;var Ci={},Di=null;Ci.le=0;Ci.nt=2;Ci.Fr=3;Ci.Po=5;Ci.me=1;Ci.om=4;Fi.prototype.update=function(a,b,c){a&&(this.g+=b,this.l+=b,this.A+=b,this.o=Math.max(this.o,this.A));if(void 0===c?!a:c)this.A=0};Gi.prototype.update=function(a,b,c,d,e,f){f=void 0===f?!0:f;b=e?Math.min(a,b):b;for(e=0;e<this.l.length;e++){var k=this.l[e],l=0<b&&b>=k;k=!(0<a&&a>=k)||c;this.g[e].update(f&&l,d,!f||k)}};Qi.prototype.update=function(a,b,c,d,e){this.F=-1!=this.F?Math.min(this.F,b.g):b.g;e&&(this.P=Math.max(this.P,b.g));this.g.update(b.g,c.g,b.o,a,d);c=d||c.Xe!=b.Xe?c.isVisible()&&b.isVisible():c.isVisible();this.V.update(c,a,!b.isVisible())};
Qi.prototype.Kf=function(){return this.V.o>=this.ba};Ri.prototype.Nc=function(){return!!this.l||!!this.g};
Ri.prototype.toString=function(){return this.l+(this.g?"-":"")+this.g};
Ri.prototype.matches=function(a){return this.g||a.g?this.g==a.g:this.l||a.l?this.l==a.l:!1};var Wi=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;Yi.prototype.wb=function(a,b,c,d){a=a+"//"+b+c;var e=cj(this)-c.length-d.length;if(0>e)return"";this.g.sort(function(a,b){return a-b});
c=null;b="";for(var f=0;f<this.g.length;f++)for(var k=this.g[f],l=this.l[k],m=0;m<l.length;m++){if(!e){c=null==c?k:c;break}var n=aj(l[m],this.o,",$");if(n){n=b+n;if(e>=n.length){e-=n.length;a+=n;b=this.o;break}else this.B&&(b=e,n[b-1]==this.o&&--b,a+=n.substr(0,b),b=this.o,e=0);c=null==c?k:c}}f="";this.A&&null!=c&&(f=b+this.A+"="+c);return a+f+d};g.ej.prototype.clone=function(){return new g.ej(this.start,this.end)};
g.ej.prototype.getLength=function(){return this.end-this.start};var RW=null;var lj=g.x.performance,aca=!!(lj&&lj.mark&&lj.measure&&lj.clearMarks),jj=g.rf(function(){var a;if(a=aca){var b;if(null===RW){RW="";try{a="";try{a=g.x.top.location.hash}catch(c){a=g.x.location.hash}a&&(RW=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=RW;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
kj.prototype.l=function(){this.g=!1;this.events!=this.o.google_js_reporting_queue&&(jj()&&(0,g.G)(this.events,mj),this.events.length=0)};
kj.prototype.A=function(a){this.g&&this.events.push(a)};
kj.prototype.start=function(a,b){if(!this.g)return null;var c=gj()||fj();c=new hj(a,b,c);var d="goog_"+c.uniqueId+"_start";jj()&&lj.mark(d);return c};
kj.prototype.end=function(a){if(this.g&&g.va(a.value)){var b=gj()||fj();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";jj()&&lj.mark(b);this.A(a)}};pj.prototype.F=function(){this.l=bca};
pj.prototype.A=function(a,b,c,d){try{if(this.xa&&this.xa.g){var e=this.xa.start(a.toString(),3);var f=b();this.xa.end(e)}else f=b()}catch(l){b=this.l;try{mj(e);var k=sj(l);b=(d||this.B).call(this,a,k,void 0,c)}catch(m){this.g(217,m)}if(!b)throw l;}return f};
pj.prototype.C=function(a,b,c,d){var e=this;return function(f){for(var k=[],l=0;l<arguments.length;++l)k[l-0]=arguments[l];return e.A(a,function(){return b.apply(c,k)},d,void 0)}};
pj.prototype.g=function(a,b,c,d,e){e=e||"jserror";try{var f=new Yi;f.B=!0;bj(f,1,"context",a);b.error&&b.meta&&b.id||(b=sj(b));b.msg&&bj(f,2,"msg",b.msg.substring(0,512));b.file&&bj(f,3,"file",b.file);0<b.line&&bj(f,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(m){}b=[k];f.g.push(5);f.l[5]=b;var l=Xi();l.l&&bj(f,6,"top",l.l.url||"");bj(f,7,"url",l.g.url||"");dj(this.o,e,f,c)}catch(m){try{dj(this.o,e,{context:"ecmserr",rctx:a,msg:rj(m),url:l.g.url},c)}catch(n){}}return this.l};
g.r(qj,Si);var oj,tj,ij=mi(),nj=new kj;oj=new function(){var a=void 0===a?L:a;this.A="http:"===a.location.protocol?"http:":"https:";this.l="pagead2.googlesyndication.com";this.o="/pagead/gen_204?id=";this.g=.01};
tj=new pj;"complete"==ij.document.readyState?ij.google_measure_js_timing||nj.l():nj.g&&gi(ij,"load",function(){ij.google_measure_js_timing||nj.l()});
var uj=tj.g;if(li&&li.URL){var ci=li.URL,bca=!(ci&&0<di().length);tj.F()};g.SW=!g.qd&&!mc();Mj.prototype.getStatus=function(){return"u"};
g.r(Qj,Mj);var Wj=[3,7,8,5,5],Xj=[3,4,4,5,6],Yj=[3,4,5,6],Zj=[3,5];Rj.prototype.A=function(a){if(this.g&&this.g.contentWindow){var b=wj(245,this.A,this);this.g.contentWindow.requestAnimationFrame(b);this.l||(this.l=(0,g.H)()-a);this.o=a}};
Rj.prototype.isVisible=function(a){return 50>a-this.l-this.o};
Rj.prototype.remove=function(){try{g.Ed(this.g)}catch(a){}this.g=null};g.xa(dk);fk.prototype.Te=function(){return this.C};
fk.prototype.ha=function(){return this.A};gk.prototype.cancel=function(){L.clearTimeout(this.g);this.g=null};
gk.prototype.schedule=function(){var a=this;L&&(this.g=L.setTimeout(wj(143,function(){a.l.yv()}),Ai(dk.getInstance().I)))};g.h=jk.prototype;g.h.Qh=function(){return!0};
g.h.initialize=function(){};
g.h.Cg=function(){return"geo"};
g.h.sg=function(){return{}};
g.h.yv=function(){};
g.h.gp=function(){};
g.h.Te=function(){return this.g};
g.h.oi=function(a){var b=this.l;this.P=a>=this.I;this.l=Math.max(this.I,a);!this.P||1==a&&0!=this.I||this.gp();this.l!=b&&ok(this)};
g.h.ni=function(a){var b=this.g,c=this.H;b=!(a&&(void 0===c||!c||b.volume==a.volume)&&b.A==a.A&&Vg(b.g,a.g));this.g=a;b&&nk(this)};
g.h.zh=function(){return this.H};
g.h.dispose=function(){this.U=!0};
g.h.ga=function(){return this.U};g.h=pk.prototype;g.h.Xl=function(){this.o=new fk(this.g.Te(),this.element,this.o.g,this.o.o,this.o.l,this.o.B)};
g.h.dispose=function(){if(!this.ga()){var a=this.g;g.Ya(a.B,this);a.H&&this.zh()&&mk(a);this.A=!0}};
g.h.ga=function(){return this.A};
g.h.sg=function(){return this.g.sg()};
g.h.oi=function(){};
g.h.ni=function(){this.Xl()};
g.h.zh=function(){return this.Kj};var qk=new g.Ug(0,0,0,0),Ek={threshold:[0,.3,.5,.75,1]};g.h=sk.prototype;g.h.Kj=function(){return!1};
g.h.fk=function(){return new Qi};
g.h.Lc=function(){return this.An};
g.h.Xr=function(){};
g.h.Wr=function(){};
g.h.tr=function(){};
g.h.Cl=function(){};
g.h.kf=function(a,b,c,d,e,f,k){k=void 0===k?{}:k;var l=this.hr(c,k);k=this.Vl(a,b,d,k);g.va(b)||(this.Zt=new g.Zc(a.left-b.left,a.top-b.top),this.cj=new g.bd(b.right-b.left,b.bottom-b.top));e=e&&this.Kb.g>=(this.Xe()?.3:.5);this.qp(l,k,e,f);this.Ag=c;0<k.g&&-1===this.bw&&(this.bw=c);-1==this.cw&&this.Kf()&&(this.cw=c);if(-2==this.xn)try{a:{var m=g.va(b)?null:b;if(a&&a!=qk&&0!=this.yd){if(!m){if(!this.cj){var n=-1;break a}m=new g.Ug(0,this.cj.width,this.cj.height,0)}n=m.Vd&&0<m.Vd()&&m.getHeight&&
0<m.getHeight()?this.Vh(a,m):-1}else n=-1}this.xn=n}catch(p){xj(207,p)}this.Kb=k;d&&(this.Kb.g=0);this.Bn(this)};
g.h.qp=function(a,b,c,d){this.Lc().update(a,b,this.Kb,c,d)};
g.h.Cm=function(){return new oi};
g.h.Vl=function(a,b,c){var d=this.Cm();d.o=c;c=Bi();d.l=0==c?-1:1==c?0:1;d.g=g.va(b)?this.Vh(b):this.Vh(a,b);d.Xe=this.Xe();return d};
g.h.hr=function(a){if(-1==this.Ag)return 0;a=a-this.Ag||1;return 1E4<a?1:a};
g.h.Vh=function(a,b){if(0===this.opacity&&1===ti(this.Wc,"opac"))return 0;if(g.va(a))return a;if(b){var c=Ij(a,b),d=1==ti(this.Wc,"od");return 0>=this.yd||Lj(c,b,this.oe,d)?0:(c.bottom-c.top)*(c.right-c.left)/this.yd}return 0};
g.h.Xe=function(){return!1};
g.h.re=function(){return 0};
g.h.Kf=function(){return this.An.Kf()};
g.h.Zo=function(a){a=void 0===a?1:a;if(!this.oe)return!1;var b=this.Xe();b&&(a=4);b=new Qj(b,a);if(a=Tj(b,this.oe))this.Og=b;return a};var Kk="StopIteration"in g.x?g.x.StopIteration:{message:"StopIteration",stack:""};Jk.prototype.next=function(){throw Kk;};
Jk.prototype.Me=function(){return this};g.Pk=function(){if(g.sW){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(g.Qb))?a[1]:"0"}return XJ?(a=/10[_.][0-9_.]+/,(a=a.exec(g.Qb))?a[0].replace(/_/g,"."):"10"):g.sB?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(g.Qb))?a[1]:""):GW||HW||Sba?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(g.Qb))?a[1].replace(/_/g,"."):""):""}();Vk.prototype.add=function(a,b,c){++this.o;var d=this.o/4096;this.g.push(Tk(new Sk(a,b,c),d));this.l=!0;return this};var TW=new Date(0);g.Gb(TW.getUTCFullYear(),4);g.Gb(TW.getUTCMonth()+1,2);g.Gb(TW.getUTCDate(),2);g.Gb(TW.getUTCHours(),2);g.Gb(TW.getUTCMinutes(),2);var en={currentTime:1,duration:2,isVpaid:4,volume:8,isYouTube:16,isPlaying:32},dn={Vx:"start",xx:"firstquartile",Gx:"midpoint",ay:"thirdquartile",ax:"complete",Fx:"metric",PAUSE:"pause",Mx:"resume",Sx:"skip",ey:"viewable_impression",Hx:"mute",by:"unmute",yx:"fullscreen",vx:"exitfullscreen",zx:"fully_viewable_audible_half_duration_impression",Ex:"measurable_impression",Vw:"abandon",qx:"engagedview",Cx:"impression",kx:"creativeview",Dx:"loaded",GL:"progress",CLOSE:"close",ZJ:"collapse",tL:"overlay_resize",
uL:"overlay_unmeasurable_impression",vL:"overlay_unviewable_impression",xL:"overlay_viewable_immediate_impression",wL:"overlay_viewable_end_of_session_impression",lx:"custom_metric_viewable"},Tn="start firstquartile midpoint thirdquartile resume loaded".split(" "),Un=["start","firstquartile","midpoint","thirdquartile"],Bl=["abandon"],bn={UNKNOWN:-1,Vx:0,xx:1,Gx:2,ay:3,ax:4,Fx:5,PAUSE:6,Mx:7,Sx:8,ey:9,Hx:10,by:11,yx:12,vx:13,zx:14,Ex:15,Vw:16,qx:17,Cx:18,kx:19,Dx:20,lx:21};g.r(fl,oi);hl.prototype.g=function(a){var b=this.o[a],c=b[1];this.A+=b[0];0<c&&0==this.l[a]&&(this.l[a]=1)};g.xa(ll);nl.prototype.getValue=function(){return this.l};
nl.prototype.update=function(a,b){32<=a||(this.g&1<<a&&!b?this.l&=~(1<<a):this.g&1<<a||!b||(this.l|=1<<a),this.g|=1<<a)};g.r(ol,Qi);
ol.prototype.update=function(a,b,c,d,e){if(!b.paused){Qi.prototype.update.call(this,a,b,c,d,e);e=gl(b)&&gl(c);var f=.5<=(d?Math.min(b.g,c.g):c.g);Hj(b.volume)&&(this.A=-1!=this.A?Math.min(this.A,b.volume):b.volume,this.C=Math.max(this.C,b.volume));f&&(this.L+=a,this.I+=e?a:0);this.o.update(b.g,c.g,b.o,a,d,e);this.l.update(!0,a);this.B.update(e,a);this.K.update(c.fullscreen,a);this.fa.update(e&&!f,a);a=Math.floor(b.A/1E3);this.U.update(a,b.isVisible());this.X.update(a,1<=b.g);this.aa.update(a,gl(b))}};g.r(rl,ql);rl.prototype.A=function(){return!0};
rl.prototype.o=function(){return!1};
rl.prototype.getId=function(){var a=this,b=bc(dn,function(b){return b==a.B});
return bn[b].toString()};
rl.prototype.toString=function(){var a="";this.o()&&(a+="c");this.g&&(a+="s");0<this.l&&(a+=":"+this.l);return this.getId()+a};var cca=new g.Ug(0,0,0,0);g.r(tl,sk);g.h=tl.prototype;g.h.Kj=function(){return!0};
g.h.Zo=function(a){a=void 0===a?3:a;var b=ll.getInstance(),c=ml(b,509445013);b=ml(b,509445011);return c||b?(this.Ya=!0,sk.prototype.Zo.call(this,a)):!1};
g.h.Xr=function(a){var b=this,c=a-this.Ua;this.wa&&1E3>=c||(c=g.z("ima.bridge.getNativeViewability"),g.Ba(c)&&(c(this.uc,function(a){b.wa=!1;b.K&&(b.Ka=!0);g.dc(a)&&b.Ga++;b.Cl(a)}),this.wa=!0,this.Ua=a))};
g.h.Wr=function(a){var b=dk.getInstance();a-this.Ta>Ai(b.I)&&(a=g.z("ima.admob.getViewability"),g.Ba(a)&&a(this.uc))};
g.h.tr=function(a){this.Ta=vi();this.Cl(a)};
g.h.Cl=function(a){var b=a.opt_nativeViewBounds||{},c=a.opt_nativeViewVisibleBounds||{},d=a.opt_nativeTime||-1,e=a.opt_nativeVolume,f=a.opt_nativeViewAttached;a=a.opt_nativeViewHidden;void 0!==f&&(this.ma=!!f);b=new g.Ug(b.top||0,b.left+b.width||0,b.top+b.height||0,b.left||0);c=a?cca.clone():new g.Ug(c.top||0,c.left+c.width||0,c.top+c.height||0,c.left||0);f=void 0;if("n"==this.A||"ml"==this.A)f={volume:e};e=f;e=void 0===e?{}:e;this.yd=(b.bottom-b.top)*(b.right-b.left);this.position=b;this.kf(b,c,
d,!1,!0,!0,e)};
g.h.kf=function(a,b,c,d,e,f,k){var l=this;k=void 0===k?{}:k;var m=this.ya(this)||{};g.kc(m,k);this.B=m.duration||this.B;this.nb=m.isVpaid||this.nb;this.P=m.isYouTube||this.P;this.ba=f;sk.prototype.kf.call(this,a,b,c,d,e,f,m);(0,g.G)(this.F,function(a){a.g||(a.g=sl(a,l))})};
g.h.qp=function(a,b,c,d){sk.prototype.qp.call(this,a,b,c,d);this.H[this.H.length-1].update(a,b,this.Kb,c,d);this.sa=gl(this.Kb)&&gl(b);-1==this.V&&this.Ma&&(this.V=this.Lc().l.g);this.Ub.A=0;a=this.Kb;b=this.Kf();.5<=a.g&&this.Ub.g("vs");b&&this.Ub.g("vw");Hj(a.volume)&&this.Ub.g("am");this.sa&&this.Ub.g("a");this.Zd&&this.Ub.g("f");-1!=a.l&&(this.Ub.g("bm"),1==a.l&&this.Ub.g("b"));this.sa&&b&&this.Ub.g("avw");this.ba&&this.Ub.g("cm");this.ba&&0<a.g&&this.Ub.g("pv");xl(this,this.Lc().l.g,!0)&&this.Ub.g("gdr");
2E3<=Mi(this.Lc().g,1)&&this.Ub.g("pmx")};
g.h.fk=function(){return new ol};
g.h.Lc=function(){return this.An};
g.h.Cm=function(){return new fl};
g.h.Vl=function(a,b,c,d){a=sk.prototype.Vl.call(this,a,b,c,d);a.fullscreen=this.Zd;a.paused=this.C;a.volume=d.volume;Hj(a.volume)||(this.Za++,b=this.Kb,Hj(b.volume)&&(a.volume=b.volume));d=d.currentTime;a.A=g.t(d)&&0<=d?d:-1;return a};
g.h.hr=function(a,b){var c=g.t(b.currentTime)?b.currentTime:this.U;if(-1==this.Ag||this.C)var d=0;else{d=a-this.Ag||1;var e=1E4;g.t(this.B)&&-1!=this.B&&(e=Math.max(e,this.B/3));d=d>e?1:d}e=c-this.U;var f=0;0<=e?(this.L+=d,this.aa+=Math.max(d-e,0),f=Math.min(e,this.L)):this.rb+=Math.abs(e);0!=e&&(this.L=0);-1==this.Ha&&0<e&&(this.Ha=0<=zi?vi()-zi:-1);this.U=c;return 1==(ml(ll.getInstance(),668123009)||this.P?1:0)?f:d};
g.h.Vh=function(a,b){return this.K?0:this.Zd?1:sk.prototype.Vh.call(this,a,b)};
g.h.re=function(){return 1};
g.h.getDuration=function(){return this.B};
g.h.jk=function(a,b,c){if(this.Ye)return{"if":0};var d=this.position.clone();d.round();var e=(0,g.I)(this.l,function(a){return 100*a.dJ|0}),f=dk.getInstance(),k=this.Lc(),l={};
this.Ya&&(l.avms="raf");l["if"]=f.l?1:void 0;l.sdk=this.A?this.A:void 0;l.t=this.QI;l.p=[d.top,d.left,d.bottom,d.right];l.tos=Ii(k.g,!1);l.mtos=Li(k.g);l.mcvt=k.V.o;l.ps=void 0;l.pt=e;d=pl(k,vi(),!!this.C);l.vht=d;l.mut=k.fa.o;l.a=vl(this.Kb.volume);l.mv=vl(k.C);l.fs=this.Zd?1:0;l.ft=k.K.g;l.at=k.B.g;l.as=.1<=k.A?1:0;l.atos=Ii(k.o);l.amtos=Li(k.o);l.uac=this.Za;l.vpt=k.l.g;"nio"==f.fb&&(l.nio=1,l.avms="nio");l.gmm="4";l.gdr=xl(this,k.l.g,!0)?1:0;this.tp&&(l.efpf=this.qm);0<this.Ga&&(l.nnut=this.Ga);
l.tcm=ml(ll.getInstance(),668123009)||this.P?1:0;l.nmt=this.rb;l.bt=this.aa;l.pst=this.Ha;l.vpaid=this.nb;l.dur=this.B;l.vmtime=this.U;l.is=this.Ub.A;1<=this.l.length&&(l.i0=this.l[0].uk);2<=this.l.length&&(l.i1=this.l[1].uk);3<=this.l.length&&(l.i2=this.l[2].uk);4<=this.l.length&&(l.i3=this.l[3].uk);l.cs=kl(this.Ub);a&&(l.ic=jl(this.Ub),l.dvpt=k.l.l,l.dvs=Ni(k.g,.5),l.dfvs=Ni(k.g,1),l.davs=Ni(k.o,.5),l.dafvs=Ni(k.o,1),b&&(k.l.l=0,Oi(k.g),Oi(k.o)),this.Kf()&&(l.dtos=k.L,l.dav=k.I,l.dtoss=this.X+1,
b&&(k.L=0,k.I=0,this.X++)),l.dat=k.B.l,l.dft=k.K.l,b&&(k.B.l=0,k.K.l=0));f.A&&(l.ps=[f.A.width,f.A.height]);f.g&&(l.bs=[f.g.width,f.g.height]);f.C&&(l.scs=[f.C.width,f.C.height]);l.dom=f.domain;this.Jh&&(l.vds=this.Jh);if(0<this.F.length||this.ti)a=g.bb(this.F),this.ti&&a.push(this.ti),l.pings=(0,g.I)(a,function(a){return a.toString()});
l.ces=(0,g.I)((0,g.Gd)(this.F,function(a){return a.o()}),function(a){return a.getId()});
this.g&&(l.vmer=this.g);this.I&&(l.vmmk=this.I);this.R&&(l.vmiec=this.R);this.fb&&(l.avms=this.fb.Cg(),g.kc(l,this.fb.sg()));"exc"==f.fb&&(l.femt=this.ia,l.femvt=this.bb,l.emc=this.Wa,l.emb=Ii(this.Ra,!1),l.emuc=this.fa,l.avms="exc");c?(l.c=Ck(this.Kb.g,2),l.ss=Ck(Dl(this),2)):l.tth=vi()-QW;l.mc=Ck(k.P,2);l.nc=Ck(k.F,2);l.mv=vl(k.C);l.nv=vl(k.A);l.lte=Ck(this.xn,2);c=this.H[this.H.length-1];Li(k.g);l.qmtos=Li(c.g);l.qnc=Ck(c.F,2);l.qmv=vl(c.C);l.qnv=vl(c.A);l.qas=.1<=c.A?1:0;l.qi=this.uc;null!==this.ma&&
(l.nvat=this.ma?1:0);l.avms||(l.avms="geo");l.psm=k.U.g;l.psv=k.U.getValue();l.psfv=k.X.getValue();l.psa=k.aa.getValue();k=ll.getInstance().g;k.length&&(l.veid=k);return l};g.h=El.prototype;g.h.create=function(a,b,c,d){var e=null;this.g&&(e=new sm(a,this.g,b,void 0===c?!1:c,void 0===d?function(){return null}:d),kk(this.g,e));
return e};
g.h.Qh=function(){return!1};
g.h.init=function(){return!0};
g.h.dispose=function(){this.B=!0};
g.h.ga=function(){return this.B};
g.h.sg=function(){return{}};g.xa(Fl);g.F(g.Hl,g.J);g.h=g.Hl.prototype;g.h.hh=!1;g.h.ji=0;g.h.xa=null;g.h.gh=function(a){this.g=arguments;this.xa||this.ji?this.hh=!0:Il(this)};
g.h.stop=function(){this.xa&&(g.x.clearTimeout(this.xa),this.xa=null,this.hh=!1,this.g=[])};
g.h.pause=function(){this.ji++};
g.h.resume=function(){this.ji--;this.ji||!this.hh||this.xa||(this.hh=!1,Il(this))};
g.h.T=function(){g.Hl.ua.T.call(this);this.stop()};
g.h.Xy=function(){this.xa=null;this.hh&&!this.ji&&(this.hh=!1,Il(this))};g.h=Kl.prototype;g.h.Yr=function(){Pl(this,!1);this.Qm()};
g.h.Qm=function(){Rl(this,Zl(this),!1)};
g.h.yv=function(){Rl(this,Zl(this),!1)};
g.h.zr=function(){var a=Wl(this),b=vi();a?(xi||(yi=b,(0,g.G)(this.g,function(a){var c=a.Lc();c.R=pl(c,b,!!a.C)})),xi=!0,Pl(this,!0)):(this.R=am(this,b),xi=!1,QW=b,(0,g.G)(this.g,function(a){a.ng&&(a.Lc().H=b)}));
Rl(this,Zl(this),!a)};
g.h.TI=function(a){var b;if(b=null!=a.IntersectionObserver){if(a=bm(a,"nio",Zl(this)))dk.getInstance().fb="nio";b=a}return b};
g.h.UI=function(a){return Rk()&&cm(this,a)};
g.h.SI=function(a){if(g.oh&&g.va(a.screenX)&&g.va(a.mozInnerScreenX)&&g.va(a.outerWidth)){a=a.navigator.userAgent;var b=a.indexOf("Firefox/");if(0<=b){b=Math.floor(a.substr(b+8))||-1;var c=a.indexOf("Mac OS X 10."),d=-1;0<=c&&(d=Number(a.substr(c+12,1))||-1);var e=0<d?-1:a.indexOf("Windows NT ");c=-1;0<=e&&(c={"6.0":0,"6.1":1,"6.2":2}[a.substr(e+11,3)]||-1);a=148;5<=d?a=4<=b?108:3<=b?127:108:0<=c&&(16==b||17==b||18==b)&&(a=[[146,146,146],[148,147,148],[131,130,136]][c][b-16])}else a=null;null!==a&&
(this.I=a,dk.getInstance().fb="xde");return!0}return!1};
g.h.RI=function(a){return g.qd&&g.wc(8)&&g.Ba(Ei(a&&a.document))?(dk.getInstance().fb="iem",!0):!1};
g.h.reset=function(){this.g=[];this.o=[]};
g.xa(Kl);var Ml=Kl.getInstance();var Om=null,Um="",Qm=!1;var lm=function(a,b){return function(c){for(var d=0;d<b.length;d++)if(b[d]===c[a]||!g.t(b[d])&&!c.hasOwnProperty(a))return!0;return!1}}("e",[void 0,
1,2,3,4,8,16]),dca={sv:"sv",cb:"cb",e:"e",nas:"nas",msg:"msg","if":"if",sdk:"sdk",p:"p",tos:"tos",mtos:"mtos",mcvt:"mcvt",ps:"ps",scs:"scs",bs:"bs",pt:"pt",vht:"vht",mut:"mut",a:"a",ft:"ft",dft:"dft",at:"at",dat:"dat",as:"as",vpt:"vpt",gmm:"gmm",std:"std",efpf:"efpf",swf:"swf",nio:"nio",px:"px",nnut:"nnut",vmer:"vmer",vmmk:"vmmk",vmiec:"vmiec",nmt:"nmt",tcm:"tcm",bt:"bt",pst:"pst",vpaid:"vpaid",dur:"dur",vmtime:"vmtime",dtos:"dtos",dtoss:"dtoss",dvs:"dvs",dfvs:"dfvs",dvpt:"dvpt",fmf:"fmf",vds:"vds",
is:"is",i0:"i0",i1:"i1",i2:"i2",i3:"i3",ic:"ic",cs:"cs",c:"c",mc:"mc",nc:"nc",mv:"mv",nv:"nv",qmt:mm("qmtos"),qnc:mm("qnc"),qmv:mm("qmv"),qnv:mm("qnv"),raf:"raf",rafc:"rafc",lte:"lte",ces:"ces",tth:"tth",femt:"femt",femvt:"femvt",emc:"emc",emuc:"emuc",emb:"emb",avms:"avms",nvat:"nvat",qi:"qi",psm:"psm",psv:"psv",psfv:"psfv",psa:"psa",pnk:"pnk",pnc:"pnc",pnmm:"pnmm",pns:"pns",ptlt:"ptlt",dc_rfl:"urlsigs",pngs:"pings",obd:"obd",veid:"veid"},eca={c:hm("c"),at:"at",atos:km("atos",[0,2,4]),ta:function(a,
b){return function(c){if(!g.t(c[a]))return b}}("tth","1"),
a:"a",dur:"dur",p:"p",tos:jm(),j:"dom",mtos:km("mtos",[0,2,4]),gmm:"gmm",gdr:"gdr",ss:hm("ss"),vsv:pf("w2"),t:"t"},fca={atos:"atos",amtos:"amtos",avt:km("atos",[2]),davs:"davs",dafvs:"dafvs",dav:"dav",ss:hm("ss"),t:"t"},gca={a:"a",tos:jm(),at:"at",c:hm("c"),mtos:km("mtos",[0,2,4]),dur:"dur",fs:"fs",p:"p",vpt:"vpt",vsv:pf("ias_w2"),dom:"dom",gmm:"gmm",gdr:"gdr",t:"t"},hca={tos:jm(),at:"at",c:hm("c"),mtos:km("mtos",[0,2,4]),p:"p",vpt:"vpt",vsv:pf("dv_w4"),gmm:"gmm",gdr:"gdr",dom:"dom",t:"t",mv:"mv",
qmpt:km("qmtos",[0,2,4]),qvs:function(a,b){return function(c){var d=c[a];if(g.va(d))return(0,g.I)(b,function(a){return 0<d&&d>=a?1:0})}}("qnc",[1,
.5,0]),qmv:"qmv",qa:"qas",a:"a"};g.r(nm,rl);nm.prototype.A=function(a){return a.Lc().Kf()};g.r(rm,pm);rm.prototype.g=function(a){var b=new om;b.g=qm(a,dca);b.o=qm(a,fca);return b};g.r(sm,pk);
sm.prototype.Xl=function(){if(this.element){var a=this.element.getBoundingClientRect(),b=a.right-a.left;a=a.bottom-a.top;var c=g.Bh(this.element,this.g.A),d=c.x;c=c.y;this.l=new g.Ug(Math.round(c),Math.round(d+b),Math.round(c+a),Math.round(d))}(b=this.g.Te().g)?(b=Ij(this.l,b),b=b.top>=b.bottom||b.left>=b.right?new g.Ug(0,0,0,0):Wg(b,-this.l.left,-this.l.top)):b=new g.Ug(0,0,0,0);var e=this.g.Te().g;d=a=0;var f=1==ti(this.Wc,"od");c=(this.l.bottom-this.l.top)*(this.l.right-this.l.left);e&&b&&0<c&&
(Lj(b,e,this.element,f)?b=new g.Ug(0,0,0,0):(f=(b.bottom-b.top)*(b.right-b.left),e=(e.bottom-e.top)*(e.right-e.left),a=f/c,e&&(d=f/e)));this.o=new fk(this.g.Te(),this.element,this.l,b,a,d)};
sm.prototype.Cg=function(){return this.o.Te().o.Cg()};g.r(um,El);g.h=um.prototype;g.h.Cg=function(){return this.l?this.l.Cg():this.g?this.g.Cg():"none"};
g.h.sg=function(){return this.l?this.l.sg():this.g?this.g.sg():{}};
g.h.init=function(a){this.A=a;return this.g?((0,g.G)(this.o,function(a){return a.initialize()}),kk(this.g,this),!0):!1};
g.h.dispose=function(){(0,g.G)(this.o,function(a){a.gp();a.dispose()});
El.prototype.dispose.call(this)};
g.h.Qh=function(){return(0,g.lk)(this.o,function(a){return a.Qh()})};
g.h.oi=function(a){0==a&&this.A(this.g.F,this)};
g.h.ni=function(a){this.l=a.o};
g.h.zh=function(){return!1};g.r(vm,jk);vm.prototype.Cg=function(){return"osd"};
vm.prototype.initialize=function(){var a=this;if(this.C.Nc()){yj(g.x,"message",function(b){if(null!=b&&b.data&&g.w(b.data)){var c=b.data;if(g.w(c)){var e={};c=c.split("\n");for(var f=0;f!=c.length;++f){var k=c[f],l=k.indexOf("=");if(!(0>=l)){var m=Number(k.substr(0,l));k=k.substr(l+1);switch(m){case 26:case 15:case 8:case 11:case 16:case 5:case 18:k="true"==k;break;case 4:case 6:case 25:case 28:case 29:case 24:case 23:case 22:case 7:case 21:case 20:k=Number(k);break;case 19:case 3:if(g.Ba(window.decodeURIComponent))try{k=
(0,window.decodeURIComponent)(k)}catch(p){throw Error("Error: URI malformed: "+k);}}e[m]=k}}e=e[0]?e:null}else e=null;if(e&&a.C.matches(new Ri(e[4],e[12]))&&(c=e[29],f=e[0],g.Ta(["goog_acknowledge_monitoring","goog_get_mode","goog_update_data","goog_image_request"],f))){Lm(a,e);if("goog_get_mode"==f&&b.source){m={};zj(a.C,m);m[0]="goog_provide_mode";m[6]=a.V;m[19]=a.L;m[16]=a.R;try{var n=Aj(m);b.source.postMessage(n,b.origin)}catch(p){}}if("goog_get_mode"==f||"goog_acknowledge_monitoring"==f)Am(a,
e[28]),a.K=2,ym(a);if(a.o.length||a.B.length)switch(4!=c&&(k=e[0],m=!1,b=a.g.l,n=a.g.volume,c=a.g.g,f=vi(),"goog_acknowledge_monitoring"==k&&(a.l=e[8]?0:2,ok(a)),(0,window.isNaN)(e[22])||(0,window.isNaN)(e[23])||(m=!0,b=new g.bd(e[22],e[23])),e[9]&&(m=!0,k=e[9].split("-"),4==k.length&&(c=new g.Ug(Nb(k[0]),Nb(k[3]),Nb(k[2]),Nb(k[1])))),m&&(m=Wl(Ml),a.g=new ek(f,b,c,m,a,n),nk(a))),b=e[0],n=100*e[25],g.va(n)&&!(0,window.isNaN)(n)&&Fm(a,n),void 0!=e[18]&&Gm(a,e[18]),void 0!=e[7]&&0<e[7]&&Hm(a,e[7]),n=
!!e[5],c=!!e[11],f=!1,"goog_update_data"==b&&(f=!!e[15],Em(a,e[3])),b){case "goog_image_request":Im(a,n,c);case "goog_update_data":n&&Jm(a,f),c&&Km(a)}}}},118);
var b=wj(197,function(){zm(a,a.V,a.C,a.R,a.L,function(){a.l=0;ok(a)})});
this.K=1;this.X=this.A.setInterval(b,500)}else this.l=0,this.F="ib",this.I=this.l=0,ok(this)};
vm.prototype.gp=function(){var a={};zj(this.C,a);a[0]="goog_stop_monitoring";a=Aj(a);var b=wm(this,!1),c=!b;c&&(b=this.A.parent);if(b&&b.postMessage)try{b.postMessage(a,"*"),c&&this.A.postMessage(a,"*")}catch(d){}};
g.xa(vm);g.h=Mm.prototype;g.h.ik=function(){};
g.h.Hm=function(){return[new nm("viewable_impression",this.g)]};
g.h.oi=function(a){switch(a){case 0:dk.getInstance().o=!1;Pm();break;case 2:Ol()}};
g.h.ni=function(a){var b=dk.getInstance();b.g=a.l;b.B=a.g};
g.h.zh=function(){return!1};
g.h.Dz=function(a){Al(a,0);return Cl(a,"start",Wl(Ml))};
g.h.Hh=function(a,b,c){Rl(Ml,[a],!Wl(Ml),b);return this.Ef(a,b,c)};
g.h.Ef=function(a,b,c){return Cl(a,c,Wl(Ml))};
g.h.xz=function(a,b){return Wm(a,"firstquartile",1,b)};
g.h.zz=function(a,b){a.Ma=!0;return Wm(a,"midpoint",2,b)};
g.h.Ez=function(a,b){return Wm(a,"thirdquartile",3,b)};
g.h.vz=function(a,b){var c=Wm(a,"complete",4,b);a.Zd=!1;Ym(1,a.uc);return c};
g.h.Bz=function(a,b){var c=Wl(Ml);if(a.C&&!c){var d=vi();a.Lc().H=d}Rl(Ml,[a],!c,b);a.C=!1;return Cl(a,"resume",c)};
g.h.Cz=function(a,b){var c=this.Hh(a,b||{},"skip");a.Zd=!1;Ym(1,a.uc);return c};
g.h.yz=function(a,b){a.Zd=!0;return this.Hh(a,b||{},"fullscreen")};
g.h.wz=function(a,b){a.Zd=!1;return this.Hh(a,b||{},"exitfullscreen")};
g.h.Uu=function(a,b,c){var d=a.Lc(),e=vi();d.R=pl(d,e,!!a.C);Rl(Ml,[a],!Wl(Ml),b);a.C=!0;return Cl(a,c,Wl(Ml))};
g.h.Az=function(a,b){Rl(Ml,[a],!Wl(Ml),b);return a.l()};
g.h.Vm=function(a,b){Rl(Ml,[a],!Wl(Ml),b);this.qv(a);Ym(2,a.uc);return a.l()};
g.h.Tm=function(){};
g.h.jk=function(a,b){if(Qm)return cn("ue");var c=this.ik(a,b);if(!c)return cn("nf");var d=cn();g.kc(d,c.jk(!0,!1));return d};
g.h.Mo=function(){};
g.h.qv=function(){};
g.h.ks=function(){};
g.h.To=function(){};
g.h.Dq=function(){};var jn={uK:"visible",DJ:"audible",hM:"time",iM:"timetype"},kn={visible:function(a){return/^(100|[0-9]{1,2})$/.test(a)},
audible:function(a){return"0"==a||"1"==a},
timetype:function(a){return"mtos"==a||"tos"==a},
time:function(a){return/^(100|[0-9]{1,2})%$/.test(a)||/^([0-9])+ms$/.test(a)}};g.r(nn,rl);nn.prototype.getId=function(){return this.Aa};
nn.prototype.o=function(){return!0};
nn.prototype.A=function(a){var b=a.Lc(),c=a.getDuration();return(0,g.lk)(this.C,function(a){if(void 0!=a.g)var d=mn(a,b);else b:{switch(a.B){case "mtos":d=a.l?b.B.o:b.l.g;break b;case "tos":d=a.l?b.B.g:b.l.g;break b}d=0}0==d?a=!1:(a=-1!=a.o?a.o:g.t(c)&&0<c?a.A*c:-1,a=-1!=a&&d>=a);return a})};g.r(on,rl);on.prototype.A=function(a){var b=Ki(a.Lc().o,1);return xl(a,b)};var qn=(0,g.H)(),xn=!1,yn=!1,zn=!1,tn=[function(a){return!(!a.chrome||!a.chrome.webstore)},
function(a){return!!a.document.documentMode},
function(a){return!!a.document.fonts.ready},
function(){return rn(0)},
function(a){return!!a.ActiveXObject},
function(a){return!!a.chrome},
function(a){return!!a.navigator.serviceWorker},
function(a){return!!a.opera},
function(a){return!!a.sidebar},
function(){return!+"\v1"},
function(){return rn(1)},
function(a){return!a.ActiveXObject},
function(a){return"-ms-ime-align"in a.document.documentElement.style},
function(a){return"-ms-scroll-limit"in a.document.documentElement.style},
function(a){return"-webkit-font-feature-settings"in a.document.body.style},
function(){return rn(2)},
function(a){return"ActiveXObject"in a},
function(a){return"MozAppearance"in a.document.documentElement.style},
function(a){return"_phantom"in a},
function(a){return"callPhantom"in a},
function(a){return"content"in a.document.createElement("template")},
function(a){return"getEntriesByType"in a.performance},
function(){return rn(3)},
function(a){return"image-rendering"in a.document.body.style},
function(a){return"object-fit"in a.document.body.style},
function(a){return"open"in a.document.createElement("details")},
function(a){return"orientation"in a.screen},
function(a){return"performance"in a},
function(a){return"shape-image-threshold"in a.document.body.style},
function(){return rn(4)},
function(a){return"srcset"in a.document.createElement("img")},
function(){return yn},
function(){return zn},
function(){return rn(5)},
function(a){a=a.document.createElement("div");a.style.width="1px";a.style.width="-webkit-min-content";a.style.width="min-content";return"1px"!=a.style.width},
function(a){a=a.document.createElement("div");a.style.width="1px";a.style.width="calc(1px - 1px)";a.style.width="-webkit-calc(1px - 1px)";return"1px"!=a.style.width},
function(){var a=!1;eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');try{(0,window.DummyFunction1)()}catch(b){a=!0}return a},
function(){var a=!1;try{(0,window.DummyFunction2)()}catch(b){a=!0}return a},
function(){return!1},
function(){return rn(6)},
function(a){var b=a.document.createElement("canvas");b.width=b.height=1;b=b.getContext("2d");b.globalCompositeOperation="multiply";b.fillStyle="rgb(0,255,255)";b.fillRect(0,0,1,1);b.fill();b.fillStyle="rgb(255,255,0)";b.fillRect(0,0,1,1);b.fill();b=b.getImageData(0,0,1,1).data;return b[0]==b[2]&&b[1]==b[3]||pn(a.navigator.vibrate)},
function(a){a=a.document.createElement("canvas");a.width=a.height=1;a=a.getContext("2d");a.globalCompositeOperation="multiply";a.fillStyle="rgb(0,255,255)";a.fillRect(0,0,1,1);a.fill();a.fillStyle="rgb(255,255,0)";a.fillRect(0,0,1,1);a.fill();a=a.getImageData(0,0,1,1).data;return a[0]==a[2]&&a[1]==a[3]},
function(a){a=a.document.createElement("div");return pn(a.matches)},
function(a){a=a.document.createElement("input");a.setAttribute("type","range");return"text"!==a.type},
function(a){return a.CSS.supports("image-rendering","pixelated")},
function(a){return a.CSS.supports("object-fit","contain")},
function(){return rn(7)},
function(a){return a.CSS.supports("object-fit","inherit")},
function(a){return a.CSS.supports("shape-image-threshold","0.9")},
function(a){return a.CSS.supports("word-break","keep-all")},
function(){return eval("1 == [for (item of [1,2,3]) item][0]")},
function(a){return pn(a.CSS.supports)},
function(){return pn(window.Intl.Collator)},
function(a){return pn(a.document.createElement("dialog").show)},
function(){return rn(8)},
function(a){return pn(a.document.createElement("div").animate([{transform:"scale(1)",Cy:"ease-in"},{transform:"scale(1.3)",Cy:"ease-in"}],{duration:1300,KM:1}).reverse)},
function(a){return pn(a.document.createElement("div").animate)},
function(a){return pn(a.document.documentElement.webkitRequestFullScreen)},
function(a){return pn(a.navigator.getBattery)},
function(a){return pn(a.navigator.permissions.query)},
function(){return!1},
function(){return rn(9)},
function(){return pn(window.webkitRequestAnimationFrame)},
function(a){return pn(a.BroadcastChannel.call)},
function(a){return pn(a.FontFace)},
function(a){return pn(a.Gamepad)},
function(){return rn(10)},
function(a){return pn(a.MutationEvent)},
function(a){return pn(a.MutationObserver)},
function(a){return pn(a.crypto.getRandomValues)},
function(a){return pn(a.document.body.createShadowRoot)},
function(a){return pn(a.document.body.webkitCreateShadowRoot)},
function(a){return pn(a.fetch)},
function(){return rn(11)},
function(a){return pn(a.navigator.serviceWorker.register)},
function(a){return pn(a.navigator.webkitGetGamepads)},
function(a){return pn(a.speechSynthesis.speak)},
function(a){return pn(a.webkitRTCPeerConnection)},
function(a){return a.CSS.supports("--fake-var","0")},
function(){return rn(12)},
function(a){return a.CSS.supports("cursor","grab")},
function(a){return a.CSS.supports("cursor","zoom-in")},
function(a){return a.CSS.supports("image-orientation","270deg")},
function(){return rn(13)},
function(a){return a.CSS.supports("position","sticky")},
function(a){return void 0===a.document.createElement("style").scoped},
function(a){return a.performance.getEntriesByType("resource")instanceof Array},
function(){return"undefined"==typeof window.InstallTrigger},
function(){return"object"==typeof(new window.Intl.Collator).resolvedOptions()},
function(a){return"boolean"==typeof a.navigator.onLine},
function(){return rn(14)},
function(a){return"undefined"==typeof a.navigator.OM},
function(a){return"number"==typeof a.performance.now()},
function(){return 0==(new window.Uint16Array(1))[0]},
function(a){return-1==a.ActiveXObject.toString().indexOf("native")},
function(a){return-1==Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")}],un=[function(a){a=a.document.createElement("div");
var b=null,c=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];try{a.style.behavior="url(#default#clientcaps)"}catch(e){}for(var d=0;d<c.length;d++){try{b=a.getComponentVersion(c[d],"componentid").replace(/,/g,".")}catch(e){}if(b)return b.split(".")[0]}return!1},
function(){return(new Date).getTimezoneOffset()},
function(a){return(a.innerWidth||a.document.documentElement.clientWidth||a.document.body.clientWidth)/(a.innerHeight||a.document.documentElement.clientHeight||a.document.body.clientHeight)},
function(a){return(a.outerWidth||a.document&&a.document.body&&a.document.body.offsetWidth)/(a.outerHeight||a.document&&a.document.body&&a.document.body.offsetHeight)},
function(a){return a.screen.availWidth/a.screen.availHeight},
function(a){return a.screen.width/a.screen.height}],vn=[function(a){return a.navigator.userAgent},
function(a){return a.navigator.platform},
function(a){return a.navigator.vendor}];g.F(An,kg);An.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.A=this.o=0};
An.prototype.update=function(a,b){g.t(b)||(b=a.length);for(var c=b-this.l,d=this.B,e=this.o,f=0;f<b;){if(0==e)for(;f<=c;)Bn(this,a,f),f+=this.l;if(g.w(a))for(;f<b;){if(d[e++]=a.charCodeAt(f++),e==this.l){Bn(this,d);e=0;break}}else for(;f<b;)if(d[e++]=a[f++],e==this.l){Bn(this,d);e=0;break}}this.o=e;this.A+=b};
An.prototype.digest=function(){var a=Array((56>this.o?this.l:2*this.l)-this.o);a[0]=128;for(var b=1;b<a.length-8;++b)a[b]=0;var c=8*this.A;for(b=a.length-8;b<a.length;++b)a[b]=c&255,c/=256;this.update(a);a=Array(16);for(b=c=0;4>b;++b)for(var d=0;32>d;d+=8)a[c++]=this.g[b]>>>d&255;return a};g.r(Cn,rm);Cn.prototype.g=function(a){var b=rm.prototype.g.call(this,a);var c=qn=(0,g.H)();var d=rn(5);c=(yn?!d:d)?c|2:c&-3;d=rn(2);c=(zn?!d:d)?c|8:c&-9;c={s1:(c>>>0).toString(16)};this.l||(this.l=wn());b.B=this.l;b.C=qm(a,eca,c,"h",Dn("kArwaWEsTs"));b.A=qm(a,gca,{},"h",Dn("b96YPMzfnx"));b.l=qm(a,hca,{},"h",Dn("yb8Wev6QDg"));return b};En.prototype.g=function(a,b){var c=this.l(b);if(g.Ba(c)){var d={};d=(d.sv="644",d.cb="j",d.e=Fn(a),d);var e=Cl(b,a,Wl(Ml));g.kc(d,e);b.hs[a]=e;d=2==b.re()?al(d).join("&"):this.A.g(d).g;try{return c(b.uc,d,a),0}catch(f){return 2}}else return 1};
En.prototype.l=function(){return g.z(this.o)};g.r(Gn,En);Gn.prototype.l=function(a){if(!a.Sf)return En.prototype.l.call(this,a);var b=this.B[a.Sf];if(b)return function(a,d,e){b.l(a,d,e)};
xj("lidar::missingPlayerCallback",Error());return null};g.r(Mn,Mm);g.h=Mn.prototype;g.h.ik=function(a,b){var c=this;switch(dk.getInstance().fb){case "nis":var d=Qn(this,a,b);break;case "gsv":d=Pn(this,a,b);break;case "exc":d=Rn(this,a);break;default:b.opt_overlayAdElement?d=void 0:b.opt_adElement?d=$m(this,a,b.opt_adElement,b.opt_osdId):d=Yl(a)||void 0}d&&1==d.re()&&(d.ya==g.wa&&(d.ya=function(a){return c.ks(a)}),Nn(this,d,b));
return d};
g.h.ks=function(a){var b=dk.getInstance();a.g=0;a.R=0;if("h"==a.A||"n"==a.A){if("exc"==b.fb||"nis"==b.fb)var c=g.z("ima.bridge.getVideoMetadata");else if(a.Sf&&Xn(this)){var d=this.H[a.Sf];d?c=function(a){d.g(a)}:null!==d&&xj("lidar::missingPlayerCallback",Error())}else c=g.z("ima.common.getVideoMetadata");
if(g.Ba(c))try{var e=c(a.uc)}catch(f){a.g|=4}else a.g|=2}else if("b"==a.A)if(b=g.z("ytads.bulleit.getVideoMetadata"),g.Ba(b))try{e=b(a.uc)}catch(f){a.g|=4}else a.g|=2;else if("ml"==a.A)if(b=g.z("ima.common.getVideoMetadata"),g.Ba(b))try{e=b(a.uc)}catch(f){a.g|=4}else a.g|=2;else a.g|=1;a.g||(g.t(e)?null===e?a.g|=16:g.dc(e)?a.g|=32:null!=e.errorCode&&(a.R=e.errorCode,a.g|=64):a.g|=8);null!=e||(e={});gn(e,a);Hj(e.volume)&&Hj(this.C)&&(e.volume*=this.C);return e};
g.h.Dq=function(){if(Xn(this))return new Gn("ima.common.triggerExternalActivityEvent",this.l,this.H);var a=Sn(this);return null!=a?new En(a,this.l):null};
g.h.Hm=function(){var a=this.g,b=Mm.prototype.Hm.call(this);b.push(new on(a));return b};
g.h.Mo=function(a){!a.g&&a.Ye&&Tm(this,a,"overlay_unmeasurable_impression")&&(a.g=!0)};
g.h.qv=function(a){a.cp&&(a.Kf()?Tm(this,a,"overlay_viewable_end_of_session_impression"):Tm(this,a,"overlay_unviewable_impression"),a.cp=!1)};
g.h.Tm=function(a){if(this.F){var b=this.K,c=b.g,d=vi();c.B=d;this.B=b.g}this.A&&1==a.re()&&Yn(this,a)};
g.h.To=function(a){this.A&&1==a.re()&&Yn(this,a)};
g.xa(Mn);var ica=wj(193,$n,void 0,function(){var a=dk.getInstance(),b={};return b.sv="644",b["if"]=a.l?"1":"0",b.nas=String(Ml.g.length),b});
g.y("Goog_AdSense_Lidar_sendVastEvent",ica,void 0);var jca=wj(194,function(a,b){b=void 0===b?{}:b;var c=Vn(Mn.getInstance(),a,b);return Zn(c)});
g.y("Goog_AdSense_Lidar_getViewability",jca,void 0);var kca=wj(195,function(){return Ln()});
g.y("Goog_AdSense_Lidar_getUrlSignalsArray",kca,void 0);var lca=wj(196,function(){return g.qg(Ln())});
g.y("Goog_AdSense_Lidar_getUrlSignalsList",lca,void 0);var naa=(new Date).getTime();g.h=g.go.prototype;g.h.Sd=function(){return this.va};
g.h.Vb=function(){io(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.l[this.g[b]]);return a};
g.h.jd=function(){io(this);return this.g.concat()};
g.h.isEmpty=function(){return 0==this.va};
g.h.clear=function(){this.l={};this.eg=this.va=this.g.length=0};
g.h.remove=function(a){return ho(this.l,a)?(delete this.l[a],this.va--,this.eg++,this.g.length>2*this.va&&io(this),!0):!1};
g.h.get=function(a,b){return ho(this.l,a)?this.l[a]:b};
g.h.set=function(a,b){ho(this.l,a)||(this.va++,this.g.push(a),this.eg++);this.l[a]=b};
g.h.forEach=function(a,b){for(var c=this.jd(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.go(this)};
g.h.Me=function(a){io(this);var b=0,c=this.eg,d=this,e=new Jk;e.next=function(){if(c!=d.eg)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)throw Kk;var e=d.g[b++];return a?e:d.l[e]};
return e};g.jo.prototype.toString=function(){var a=[],b=this.A;b&&a.push(ro(b,UW,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.H)&&a.push(ro(b,UW,!0),"@"),a.push((0,window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.B,null!=c&&a.push(":",String(c));if(c=this.l)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(ro(c,"/"==c.charAt(0)?mca:nca,!0));(c=this.o.toString())&&a.push("?",c);(c=this.C)&&a.push("#",ro(c,oca));return a.join("")};
g.jo.prototype.resolve=function(a){var b=this.clone(),c=!!a.A;c?g.ko(b,a.A):c=!!a.H;c?b.H=a.H:c=!!a.g;c?g.lo(b,a.g):c=null!=a.B;var d=a.l;if(c)g.mo(b,a.B);else if(c=!!a.l){if("/"!=d.charAt(0))if(this.g&&!this.l)d="/"+d;else{var e=b.l.lastIndexOf("/");-1!=e&&(d=b.l.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=g.rb(e,"/");e=e.split("/");for(var f=[],k=0;k<e.length;){var l=e[k++];"."==l?d&&k==e.length&&f.push(""):".."==l?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&k==e.length&&f.push("")):(f.push(l),d=!0)}d=f.join("/")}else d=e}c?b.l=d:c=""!==a.o.toString();c?no(b,a.o.clone()):c=!!a.C;c&&(b.C=a.C);return b};
g.jo.prototype.clone=function(){return new g.jo(this)};
g.jo.prototype.I=function(){return this.o.toString()};
var UW=/[#\/\?@]/g,nca=/[#\?:]/g,mca=/[#\?]/g,so=/[#\?@]/g,oca=/#/g;g.h=g.po.prototype;g.h.Sd=function(){wo(this);return this.va};
g.h.add=function(a,b){wo(this);this.l=null;a=xo(this,a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.va=this.va+1;return this};
g.h.remove=function(a){wo(this);a=xo(this,a);return ho(this.g.l,a)?(this.l=null,this.va=this.va-this.g.get(a).length,this.g.remove(a)):!1};
g.h.clear=function(){this.g=this.l=null;this.va=0};
g.h.isEmpty=function(){wo(this);return 0==this.va};
g.h.forEach=function(a,b){wo(this);this.g.forEach(function(c,d){(0,g.G)(c,function(c){a.call(b,c,d,this)},this)},this)};
g.h.jd=function(){wo(this);for(var a=this.g.Vb(),b=this.g.jd(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.h.Vb=function(a){wo(this);var b=[];if(g.w(a))yo(this,a)&&(b=g.ab(b,this.g.get(xo(this,a))));else{a=this.g.Vb();for(var c=0;c<a.length;c++)b=g.ab(b,a[c])}return b};
g.h.set=function(a,b){wo(this);this.l=null;a=xo(this,a);yo(this,a)&&(this.va=this.va-this.g.get(a).length);this.g.set(a,[b]);this.va=this.va+1;return this};
g.h.get=function(a,b){var c=a?this.Vb(a):[];return 0<c.length?String(c[0]):b};
g.h.toString=function(){if(this.l)return this.l;if(!this.g)return"";for(var a=[],b=this.g.jd(),c=0;c<b.length;c++){var d=b[c],e=(0,window.encodeURIComponent)(String(d));d=this.Vb(d);for(var f=0;f<d.length;f++){var k=e;""!==d[f]&&(k+="="+(0,window.encodeURIComponent)(String(d[f])));a.push(k)}}return this.l=a.join("&")};
g.h.clone=function(){var a=new g.po;a.l=this.l;this.g&&(a.g=this.g.clone(),a.va=this.va);return a};var dp={Ax:5E3,Bx:15E3,Ep:"://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/sul www.google.com/pagead/xsul www.youtube.com/pagead/sul www.youtube.com/pagead/psul www.youtube.com/pagead/slav".split(" "),Lx:/\bocr\b/,hm:0,ff:{},zI:function(a,b,c){a&&(dp.yk(a)?dp.AI(a,b):dp.yI(a,b,c))},
yk:function(a){if(g.tb(g.Hb(a)))return!1;if(0<=a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&"))return!0;try{var b=new g.jo(a)}catch(c){return null!=g.Pa(dp.Ep,function(b){return 0<a.search(b)})}return b.C.match(dp.Lx)?!0:null!=g.Pa(dp.Ep,function(b){return null!=a.match(b)})},
AI:function(a,b){if(a&&(a=dp.Py(a),!g.tb(a))){var c='javascript:"<body><img src=\\""+'+a+'+"\\"></body>"';b?dp.Jr(function(b){dp.Ev(b?c:'javascript:"<body><object data=\\""+'+a+'+"\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')}):dp.Ev(c)}},
Ev:function(a){var b=g.wd("IFRAME",{src:a,style:"display:none"});a=g.ed(b).body;var c=g.gg(function(){g.ff(d);g.Ed(b)},dp.Bx);
var d=Te(b,["load","error"],function(){g.gg(function(){g.x.clearTimeout(c);g.Ed(b)},dp.Ax)});
a.appendChild(b)},
Jr:function(a,b){var c=dp.ff.imageLoadingEnabled;if(null!=c)a(c);else{var d=!1;c=function(b,c){delete dp.ff[c];d||(d=!0,null!=dp.ff.imageLoadingEnabled||(dp.ff.imageLoadingEnabled=b),a(b))};
b?b(c):dp.dA(c)}},
dA:function(a){var b=new window.Image,c=""+dp.hm++;dp.ff[c]=b;b.onload=function(){(0,window.clearTimeout)(d);a(!0,c)};
var d=(0,window.setTimeout)(function(){a(!1,c)},300);
b.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="},
xI:function(a){if(a){var b=g.zd("OBJECT");b.data=a;b.width="1";b.height="1";b.style.visibility="hidden";var c=""+dp.hm++;dp.ff[c]=b;b.onload=b.onerror=function(){delete dp.ff[c]};
window.document.body.appendChild(b)}},
Fv:function(a){if(a){var b=new window.Image,c=""+dp.hm++;dp.ff[c]=b;b.onload=b.onerror=function(){delete dp.ff[c]};
b.src=a}},
yI:function(a,b,c){if(a){if(c)try{if(g.x.navigator&&g.x.navigator.sendBeacon&&g.x.navigator.sendBeacon(a,""))return}catch(d){}b?dp.Jr(function(b){b?dp.Fv(a):dp.xI(a)}):dp.Fv(a)}},
Py:function(a){var b=g.Jc(g.Mc(a));if("about:invalid#zClosurez"===b)return"";b instanceof g.Pc?a=b:(a=null,b.Zm&&(a=b.xm()),b=g.Cb(b.ug?b.Df():String(b)),a=Rc(b,a));a=g.Qc(a);return(0,window.encodeURIComponent)(String(g.qg(a)))}};g.F(g.Ao,g.J);var VW=[];g.h=g.Ao.prototype;g.h.ea=function(a,b,c,d){g.za(b)||(b&&(VW[0]=b.toString()),b=VW);for(var e=0;e<b.length;e++){var f=g.Ue(a,b[e],c||this.handleEvent,d||!1,this.l||this);if(!f)break;this.g[f.key]=f}return this};
g.h.Ek=function(a,b,c,d){return Bo(this,a,b,c,d)};
g.h.Pa=function(a,b,c,d,e){if(g.za(b))for(var f=0;f<b.length;f++)this.Pa(a,b[f],c,d,e);else c=c||this.handleEvent,d=g.Ca(d)?!!d.capture:!!d,e=e||this.l||this,c=Ve(c),d=!!d,b=g.Je(a)?a.ci(b,c,d,e):a?(a=g.Xe(a))?a.ci(b,c,d,e):null:null,b&&(g.ff(b),delete this.g[b.key])};
g.h.T=function(){g.Ao.ua.T.call(this);g.Co(this)};
g.h.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var Do=/(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g;g.F(Fo,g.Ge);Ko.prototype.g=function(){return!1};
Ko.prototype.getPlayerType=function(){return""};
var Lo=new Ko;Mo.prototype.getId=function(){return this.Aa};No.prototype.getId=function(){return this.Aa};var To=null;var Yo=["*.youtu.be","*.youtube.com"],cp="ad.doubleclick.net bid.g.doubleclick.net corp.google.com ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),bp=["c.googlesyndication.com"];var gp=function(){if(g.Hz)return fp(/Firefox\/([0-9.]+)/);if(g.qd||Ez||g.ph)return vc;if(g.Px)return pc()?fp(/CriOS\/([0-9.]+)/):fp(/Chrome\/([0-9.]+)/);if(g.Qk&&!pc())return fp(/Version\/([0-9.]+)/);if(jB||iB){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(g.Qb);if(a)return a[1]+"."+a[2]}else if(kB)return(a=fp(/Android\s+([0-9.]+)/))?a:fp(/Version\/([0-9.]+)/);return""}();var WW;
WW={tx:["BC","AD"],rx:["Before Christ","Anno Domini"],Ix:"JFMAMJJASOND".split(""),Tx:"JFMAMJJASOND".split(""),Dp:"January February March April May June July August September October November December".split(" "),Hp:"January February March April May June July August September October November December".split(" "),Fp:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ip:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Pp:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Kp:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Gp:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Jp:"Sun Mon Tue Wed Thu Fri Sat".split(" "),iL:"SMTWTFS".split(""),Ux:"SMTWTFS".split(""),Px:["Q1","Q2","Q3","Q4"],Kx:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Ap:["AM","PM"],Jl:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],Op:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],nx:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],Kl:6,fy:[5,6],Ll:5};g.XW=WW;g.XW=WW;g.h=g.kp.prototype;g.h.Wj=g.XW.Kl;g.h.Yj=g.XW.Ll;g.h.clone=function(){var a=new g.kp(this.date);a.Wj=this.Wj;a.Yj=this.Yj;return a};
g.h.getFullYear=function(){return this.date.getFullYear()};
g.h.getMonth=function(){return this.date.getMonth()};
g.h.getDate=function(){return this.date.getDate()};
g.h.getTime=function(){return this.date.getTime()};
g.h.getDay=function(){return this.date.getDay()};
g.h.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.h.getUTCMonth=function(){return this.date.getUTCMonth()};
g.h.getUTCDate=function(){return this.date.getUTCDate()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.h.add=function(a){if(a.l||a.months){var b=this.getMonth()+a.months+12*a.l,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(a=new Date((new Date(this.getFullYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),this.date.setFullYear(a.getFullYear()),
this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),jp(this,a.getDate()))};
g.h.lk=function(a){return[this.getFullYear(),g.Gb(this.getMonth()+1,2),g.Gb(this.getDate(),2)].join(a?"-":"")+""};
g.h.toString=function(){return this.lk()};
g.h.valueOf=function(){return this.date.valueOf()};var mp=new lp;lp.prototype.clear=function(){this.g=null;this.o="";this.l=null};g.xa(op);op.prototype.g=function(a,b,c){if(this.l||c){b=b||{};b.lid=a;b.sdkv=np();a=Xo();g.tb(g.Hb(a))||(b.e=a);b=qp(this,b);var d=new g.jo("http://pagead2.googlesyndication.com/pagead/gen_204");g.Sb(b,function(a,b){g.to(d,b,null!=a?"boolean"==typeof a?a?"t":"f":""+a:"")},this);
a=pp();g.ko(d,a.A);ep(d.toString())}};
op.prototype.isLoggingEnabled=function(){return this.l};g.F(rp,g.lf);var sp=null;rp.prototype.destroy=function(){this.da.Pa(this.l,"activityMonitor",this.B);this.l=null};
rp.prototype.B=function(a){var b=a.g;switch(a.l){case "appStateChanged":Wn(Mn.getInstance(),b.appState,b.nativeTime);break;case "externalActivityEvent":wp(b.queryId,b.viewabilityString,b.eventName);break;case "measurableImpression":up(b.queryId,b.viewabilityString);break;case "viewableImpression":vp(b.queryId,b.viewabilityString);break;case "engagementData":b=b.engagementString;tp().A=b;tp().o=(0,g.H)();break;case "viewability":a=b.eventId;window.clearTimeout(a);var c=this.g.get(a);c&&(this.g.remove(a),
c(b.viewabilityData));break;case "viewabilityMeasurement":var d=Mn.getInstance(),e=b.queryId;b=b.viewabilityData;a=dk.getInstance();if("exc"==a.fb){d.C=b.nativeVolume;c=b.exposure||0;var f=b.unmeasurable;null!=b.userActivity&&(d.B=b.userActivity);d=d.ik(e,{});-1==d.ia&&(d.ia=vi(),d.bb=d.Lc().l.g);d.fa+=f?1:0;d.Wa++;d.Ra.update(c,c,!1,1,!1);e=b.insideIframe;g.t(e)&&0==e&&(a.l=!1);d.Ye=f||d.Ye;b.position&&uk(d,L,a.l,new g.Ug(b.position.top,b.position.right,b.position.bottom,b.position.left));b.documentSize&&
(a.A=new g.bd(b.documentSize.width,b.documentSize.height));b.viewportSize&&(a.g=new g.bd(b.viewportSize.width,b.viewportSize.height));d.Kb.g=g.Vc(c,0,1);d.tn=d.Kb.g}break;case "engagement":a=b.eventId,window.clearTimeout(a),c=this.g.get(a),op.getInstance().isLoggingEnabled()&&(f=-1,this.C&&(f=(0,g.H)()-this.C),d=!1,c||(d=!0),$b(b,"loggingId")&&op.getInstance().g(43,{step:"receivedResponse",time:(0,g.H)(),timeout:d,logid:b.loggingId,timediff:f})),c&&(this.g.remove(a),c(b.engagementString))}};
g.y("ima.bridge.getNativeViewability",function(a,b){tp();b({})},void 0);
g.y("ima.bridge.getVideoMetadata",function(){var a=(tp(),null);return g.Ba(a)?a():{}},void 0);
g.y("ima.bridge.triggerViewEvent",vp,void 0);g.y("ima.bridge.triggerMeasurableEvent",up,void 0);g.y("ima.bridge.triggerExternalActivityEvent",wp,void 0);var YW=!1,ZW="";
(function(){if(window.navigator.plugins&&window.navigator.plugins.length){var a=window.navigator.plugins["Shockwave Flash"];if(a&&(YW=!0,a.description)){ZW=xp(a.description);return}if(window.navigator.plugins["Shockwave Flash 2.0"]){YW=!0;ZW="2.0.0.11";return}}if(window.navigator.mimeTypes&&window.navigator.mimeTypes.length&&(a=window.navigator.mimeTypes["application/x-shockwave-flash"],YW=!(!a||!a.enabledPlugin))){ZW=xp(a.enabledPlugin.description);return}try{var b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");YW=
!0;ZW=xp(b.GetVariable("$version"));return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");YW=!0;ZW="6.0.21";return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),YW=!0,ZW=xp(b.GetVariable("$version"))}catch(c){}})();
var uaa=YW,oaa=ZW;g.F(yp,g.lf);var zp=null;yp.prototype.destroy=function(){this.da.Pa(this.g,"activityMonitor",this.A);this.l=!1;this.C.clear()};
yp.prototype.T=function(){this.destroy();yp.ua.T.call(this)};
yp.prototype.init=function(a){if(!this.l){if(this.g=a||null)this.da.ea(this.g,"activityMonitor",this.A),Bp(this);if(!(g.x.ima&&g.x.ima.video&&g.x.ima.video.client&&g.x.ima.video.client.tagged)){g.y("ima.video.client.sdkTag",!0,void 0);var b=g.x.document;a=b.createElement("script");var c=b.location.protocol;"http:"!=c&&"https:"!=c&&(c="");a.src=c+"//s0.2mdn.net/instream/video/client.js";a.async=!0;a.type="text/javascript";b=b.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}(a=Lo.g())||
(a=!1);a||(Mn.getInstance().A=!0);this.o=(g.Ba(null),null);this.l=!0}};
yp.prototype.A=function(a){var b=a.g,c=b.queryId,d={};d.eventId=b.eventId;switch(a.l){case "getPageSignals":Bp(this);break;case "reportVastEvent":a=b.vastEvent;var e=b.osdId,f={};f.opt_fullscreen=b.isFullscreen;b.isOverlay&&(f.opt_bounds=b.overlayBounds);if(this.l)if(this.o)c=this.o(a,c,f);else{b=f||{};if(e=e?this.B.get(e):Lo.o){if(null==b.opt_fullscreen){if(null==e)f=!1;else if((GW&&!HW||Eb(g.Qb,"iPod"))&&null!=e.webkitDisplayingFullscreen)f=e.webkitDisplayingFullscreen;else{f=window.screen.availWidth||
window.screen.width;var k=window.screen.availHeight||window.screen.height;var l=g.Ba(e.getBoundingClientRect)&&g.Ld(g.ed(e),e)?e.getBoundingClientRect():{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight};f=0>=f-l.width&&42>=k-l.height}b.opt_fullscreen=f}null!=b.opt_adElement||(b.opt_adElement=e)}c=vj("lidar::handlevast_html5",g.B($n,a,c,b))||{}}else c={};d.viewabilityData=c;this.g.send("activityMonitor","viewability",d);break;case "fetchAdTagUrl":c={},c.eventId=b.eventId,
e=b.osdId,d=null,$b(b,"isFullscreen")&&(d=b.isFullscreen),$b(b,"loggingId")&&(a=b.loggingId,c.loggingId=a,op.getInstance().g(43,{step:"beforeLookup",logid:a,time:(0,g.H)()},!0)),c.engagementString=Cp(this,e,d),this.g.send("activityMonitor","engagement",c)}};
g.y("ima.common.getVideoMetadata",function(a){a=Ap().C.get(a);return g.Ba(a)?a():{}},void 0);
g.y("ima.common.triggerViewEvent",function(a,b){var c={};c.queryId=a;c.viewabilityString=b;var d=Ap().g;d?d.send("activityMonitor","viewableImpression",c):Ap().dispatchEvent(new Fo("viewable_impression",null,c))},void 0);
g.y("ima.common.triggerViewabilityMeasurementUpdate",function(a,b){var c=Ap().g,d={};d.queryId=a;d.viewabilityData=b;c&&c.send("activityMonitor","viewabilityMeasurement",d)},void 0);
g.y("ima.common.triggerMeasurableEvent",function(a,b){var c={};c.queryId=a;c.viewabilityString=b;var d=Ap().g;d?d.send("activityMonitor","measurableImpression",c):Ap().dispatchEvent(new Fo("measurable_impression",null,c))},void 0);
g.y("ima.common.triggerExternalActivityEvent",function(a,b,c){var d={};d.queryId=a;d.viewabilityString=b;d.eventName=c;(a=Ap().g)?a.send("activityMonitor","externalActivityEvent",d):Ap().dispatchEvent(new Fo("externalActivityEvent",null,d))},void 0);
Ap();g.Dp.prototype.g=function(a){var b=0,c=0,d=!1;a=a.split(Wba);for(var e=0;e<a.length;e++){var f=a[e];Uba.test(f)?(b++,c++):Vba.test(f)?d=!0:Tba.test(f)?c++:Xba.test(f)&&(d=!0)}return 0==c?d?1:0:.4<b/c?-1:1};Fp.prototype.g=null;Fp.prototype.toString=function(){return this.content};
g.F(Gp,Fp);(function(a){function b(a){this.content=a}
b.prototype=a.prototype;return function(a,d){var c=new b(String(a));void 0!==d&&(c.g=d);return c}})(Gp);
var Hp={};(function(a){function b(a){this.content=a}
b.prototype=a.prototype;return function(a,d){var c=String(a);if(!c)return"";c=new b(c);void 0!==d&&(c.g=d);return c}})(Gp);var pca=g.qd?Gc(Bc(g.Cc('javascript:""'))):Gc(Bc(g.Cc("about:blank")));Fc(pca);var qca=g.qd?Gc(Bc(g.Cc('javascript:""'))):Gc(Bc(g.Cc("javascript:undefined")));Fc(qca);Ip("a","");Ip("a","fixedDirectionality");Ip("a","redesign2014q4");Ip("b","");Ip("b","redesign2014q4");Ip("b","forcedlinebreak");var Pp=g.qd&&Op();g.F(g.Rp,g.J);g.h=g.Rp.prototype;g.h.start=function(){this.stop();this.o=!1;var a=Sp(this),b=Tp(this);a&&!b&&this.g.mozRequestAnimationFrame?(this.Aa=g.Ue(this.g,"MozBeforePaint",this.l),this.g.mozRequestAnimationFrame(null),this.o=!0):this.Aa=a&&b?a.call(this.g,this.l):this.g.setTimeout(qf(this.l),20)};
g.h.ii=function(){this.isActive()||this.start()};
g.h.stop=function(){if(this.isActive()){var a=Sp(this),b=Tp(this);a&&!b&&this.g.mozRequestAnimationFrame?g.ff(this.Aa):a&&b?b.call(this.g,this.Aa):this.g.clearTimeout(this.Aa)}this.Aa=null};
g.h.isActive=function(){return null!=this.Aa};
g.h.Uy=function(){this.o&&this.Aa&&g.ff(this.Aa);this.Aa=null;this.B.call(this.A,(0,g.H)())};
g.h.T=function(){this.stop();g.Rp.ua.T.call(this)};g.F(g.P,g.J);g.h=g.P.prototype;g.h.Aa=0;g.h.T=function(){g.P.ua.T.call(this);this.stop();delete this.g;delete this.l};
g.h.start=function(a){this.stop();this.Aa=g.gg(this.o,g.t(a)?a:this.Hb)};
g.h.stop=function(){this.isActive()&&g.x.clearTimeout(this.Aa);this.Aa=0};
g.h.isActive=function(){return 0!=this.Aa};
g.h.lr=function(){this.Aa=0;this.g&&this.g.call(this.l)};g.xa(g.Xp);g.Xp.prototype.g=0;g.F(g.Zp,g.lf);g.h=g.Zp.prototype;g.h.Nz=g.Xp.getInstance();g.h.getId=function(){return this.Aa||(this.Aa=g.Yp(this.Nz))};
g.h.ha=function(){return this.l};
g.h.Xo=function(a){if(this.I&&this.I!=a)throw Error("Method not supported");g.Zp.ua.Xo.call(this,a)};
g.h.Om=ba(0);g.h.Xh=function(){$p(this,function(a){a.vg&&a.Xh()});
this.B&&g.Co(this.B);this.vg=!1};
g.h.T=function(){this.vg&&this.Xh();this.B&&(this.B.dispose(),delete this.B);$p(this,function(a){a.dispose()});
this.l&&g.Ed(this.l);this.I=this.l=this.C=this.H=null;g.Zp.ua.T.call(this)};
g.h.bi=ba(1);g.h.removeChild=function(a,b){if(a){var c=g.w(a)?a:a.getId();a=this.C&&c?gc(this.C,c)||null:null;if(c&&a){fc(this.C,c);g.Ya(this.H,a);b&&(a.Xh(),a.l&&g.Ed(a.l));c=a;if(null==c)throw Error("Unable to set parent component");c.I=null;g.Zp.ua.Xo.call(c,null)}}if(!a)throw Error("Child is not in parent component");return a};Gc(Bc(g.Cc("https://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Gc(Bc(g.Cc("http://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Gc(Bc(g.Cc("https://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Gc(Bc(g.Cc("http://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));bq.prototype.g=null;g.F(cq,bq);g.$W=new cq;new g.go;var aX=[];g.y("onYouTubeIframeAPIReady",function(){(0,g.G)(aX,function(a){a()});
Va(aX)},window);dq.prototype.clone=function(){return new dq(this.g,this.F,this.o,this.B,this.A,this.C,this.l,this.H)};gq.prototype.l=0;gq.prototype.reset=function(){this.g=this.o=this.A;this.l=0};
gq.prototype.getValue=function(){return this.o};g.F(g.iq,g.J);g.h=g.iq.prototype;g.h.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.Jb;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.Jb=e+3;d.push(e);return e};
g.h.unsubscribe=function(a,b,c){if(a=this.l[a]){var d=this.g;if(a=g.Pa(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.wc(a)}return!1};
g.h.wc=function(a){var b=this.g[a];if(b){var c=this.l[b];0!=this.A?(this.o.push(a),this.g[a+1]=g.wa):(c&&g.Ya(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
g.h.O=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var k=c[e];jq(this.g[k+1],this.g[k+2],d)}else{this.A++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.g[k+1].apply(this.g[k+2],d)}finally{if(this.A--,0<this.o.length&&0==this.A)for(;c=this.o.pop();)this.wc(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.l[a];b&&((0,g.G)(b,this.wc,this),delete this.l[a])}else this.g.length=0,this.l={}};
g.h.Sd=function(a){if(a){var b=this.l[a];return b?b.length:0}a=0;for(b in this.l)a+=this.Sd(b);return a};
g.h.T=function(){g.iq.ua.T.call(this);this.clear();this.o.length=0};g.mq.prototype.set=function(a,b){g.t(b)?this.g.set(a,g.qg(b)):this.g.remove(a)};
g.mq.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.mq.prototype.remove=function(a){this.g.remove(a)};g.F(nq,g.mq);nq.prototype.set=function(a,b){nq.ua.set.call(this,a,pq(b))};
nq.prototype.l=function(a){a=nq.ua.get.call(this,a);if(!g.t(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
nq.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,!g.t(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.F(qq,nq);qq.prototype.set=function(a,b,c){if(b=pq(b)){if(c){if(c<(0,g.H)()){qq.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.H)()}qq.ua.set.call(this,a,b)};
qq.prototype.l=function(a,b){var c=qq.ua.l.call(this,a);if(c)if(!b&&g.rq(c))qq.prototype.remove.call(this,a);else return c};g.F(g.sq,qq);g.F(uq,tq);uq.prototype.Sd=function(){var a=0;g.Mk(this.Me(!0),function(){a++});
return a};
uq.prototype.clear=function(){var a=Nk(this.Me(!0)),b=this;(0,g.G)(a,function(a){b.remove(a)})};g.F(vq,uq);g.h=vq.prototype;g.h.isAvailable=function(){if(!this.g)return!1;try{return this.g.setItem("__sak","1"),this.g.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.g.getItem(a);if(!g.w(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.g.removeItem(a)};
g.h.Sd=function(){return this.g.length};
g.h.Me=function(a){var b=0,c=this.g,d=new Jk;d.next=function(){if(b>=c.length)throw Kk;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.w(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.g.clear()};
g.h.key=function(a){return this.g.key(a)};g.F(wq,vq);g.F(xq,vq);g.F(yq,uq);yq.prototype.set=function(a,b){this.l.set(this.g+a,b)};
yq.prototype.get=function(a){return this.l.get(this.g+a)};
yq.prototype.remove=function(a){this.l.remove(this.g+a)};
yq.prototype.Me=function(a){var b=this.l.Me(!0),c=this,d=new Jk;d.next=function(){for(var d=b.next();d.substr(0,c.g.length)!=c.g;)d=b.next();return a?d.substr(c.g.length):c.l.get(d)};
return d};Aq.prototype.getValue=function(){return this.g};
Aq.prototype.clone=function(){return new Aq(this.Jb,this.g)};g.h=Bq.prototype;g.h.remove=function(){var a=this.g,b=a.length,c=a[0];if(!(0>=b)){if(1==b)Va(a);else{a[0]=a.pop();a=0;b=this.g;for(var d=b.length,e=b[a];a<d>>1;){var f=2*a+1,k=2*a+2;f=k<d&&b[k].Jb<b[f].Jb?k:f;if(b[f].Jb>e.Jb)break;b[a]=b[f];a=f}b[a]=e}return c.getValue()}};
g.h.Vb=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].getValue());return b};
g.h.jd=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].Jb);return b};
g.h.clone=function(){return new Bq(this)};
g.h.Sd=function(){return this.g.length};
g.h.isEmpty=function(){return g.Ua(this.g)};
g.h.clear=function(){Va(this.g)};g.F(Dq,Bq);var Fq=/^\.google\.(com?\.)?[a-z]{2,3}$/,Gq=/\.(cn|com\.bi|do|sl)$/,Kq=g.x,Iq,Lq,Oq={Am:function(){return 0<Lq[8]},
hI:function(){Lq[8]++},
iI:function(){0<Lq[8]&&Lq[8]--},
jI:function(){Lq[8]=0},
shouldRetry:function(){return!1},
Xq:function(){return Lq[5]},
aq:function(a){try{a()}catch(b){g.x.setTimeout(function(){throw b;},0)}},
Lo:function(){if(!Oq.Am()){var a=g.x.document,b=function(b){var c=Jq(b);Eq(a,c);b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return g.x.processGoogleToken({},2)};
c=g.Vd(c);g.Tc(b,c);try{(a.head||a.body||a.documentElement).appendChild(b),Oq.hI()}catch(k){}},c=Lq[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);g.x.setTimeout(function(){return g.x.processGoogleToken(d,1)},1E3)}}};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
Rq.prototype.cancel=function(a){if(this.g)this.o instanceof Rq&&this.o.cancel();else{if(this.l){var b=this.l;delete this.l;a?b.cancel(a):(b.H--,0>=b.H&&b.cancel())}this.P?this.P.call(this.L,this):this.I=!0;this.g||(a=new $q(this),Vq(this),Tq(this,!1,a))}};
Rq.prototype.K=function(a,b){this.F=!1;Tq(this,a,b)};
Rq.prototype.Fj=function(a){Vq(this);Tq(this,!0,a)};
Rq.prototype.then=function(a,b,c){var d,e,f=new g.Jf(function(a,b){d=a;e=b});
Wq(this,d,function(a){a instanceof $q?f.cancel():e(a)});
return f.then(a,b,c)};
Gf(Rq);Rq.prototype.isError=function(a){return a instanceof Error};
g.F(Uq,La);Uq.prototype.message="Deferred has already fired";Uq.prototype.name="AlreadyCalledError";g.F($q,La);$q.prototype.message="Deferred was canceled";$q.prototype.name="CanceledError";Zq.prototype.l=function(){delete Yq[this.Aa];throw this.g;};
var Yq={};g.F(ar,qe);g.F(dr,qe);var cr=[2,11];g.Mt=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};g.fr=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.y("yt.config_",g.fr,void 0);(0,g.H)();var lr=g.t(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.t(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var Br={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Jr=!1;var nA=jB||iB;var ds={},cs=0;g.r(fs,La);is.prototype.then=function(a,b,c){return this.o?this.o.then(a,b,c):1===this.l&&a?(a=a.call(c,this.g),Hf(a)?a:ks(a)):2===this.l&&b?(a=b.call(c,this.g),Hf(a)?a:js(a)):this};
is.prototype.getValue=function(){return this.g};
Gf(is);g.r(ms,La);ms.prototype.name="BiscottiError";g.r(ls,La);ls.prototype.name="BiscottiMissingError";var ps={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},os=null;g.r(xs,La);xs.prototype.name="MutsuError";var Ds={};var rca,Es;rca=0;Es=g.sd?"webkit":g.oh?"moz":g.qd?"ms":g.ph?"o":"";g.bX=g.z("ytDomDomGetNextId")||function(){return++rca};
g.y("ytDomDomGetNextId",g.bX,void 0);var Ms={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};Ns.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ns.prototype.Hr=function(){return this.event?!1===this.event.returnValue:!1};
Ns.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ns.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ps=g.z("ytEventsEventsListeners")||{};g.y("ytEventsEventsListeners",Ps,void 0);var Rs=g.z("ytEventsEventsCounter")||{count:0};g.y("ytEventsEventsCounter",Rs,void 0);var sca=g.rf(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.F(ct,g.J);ct.prototype.K=function(a){g.t(a.g)||Os(a);var b=a.g;g.t(a.l)||Os(a);this.g=new g.Zc(b,a.l)};
ct.prototype.C=function(){if(this.g){var a=g.Mt();if(0!=this.A){var b=this.B,c=this.g,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.A);this.l[this.Oa]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.H();this.o=d}this.A=a;this.B=this.g;this.Oa=(this.Oa+1)%4}};
ct.prototype.T=function(){window.clearInterval(this.I);g.Ts(this.F)};g.r(g.dt,g.J);g.dt.prototype.M=function(a,b,c,d,e){c=jr((0,g.A)(c,d||this.Mb));c={target:a,name:b,Fj:c};var f;e&&sca()&&(f={passive:!0});a.addEventListener(b,c.Fj,f);this.P.push(c);return c};
g.dt.prototype.Pa=function(a){for(var b=0;b<this.P.length;b++)if(this.P[b]==a){this.P.splice(b,1);a.target.removeEventListener(a.name,a.Fj);break}};
g.dt.prototype.T=function(){g.ft(this);g.J.prototype.T.call(this)};g.F(g.R,g.J);g.h=g.R.prototype;g.h.subscribe=function(a,b,c){return this.ga()?0:this.fc.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.ga()?!1:this.fc.unsubscribe(a,b,c)};
g.h.wc=function(a){return this.ga()?!1:this.fc.wc(a)};
g.h.O=function(a,b){return this.ga()?!1:this.fc.O.apply(this.fc,arguments)};
g.h.Af=ba(3);g.r(g.ht,g.R);g.h=g.ht.prototype;g.h.cancel=function(){this.A&&(this.A=!1,this.O("dragend",0,0,null));this.l&&(this.l=!1,this.O("hoverend",0,0,null),g.ft(this.g),gt(this))};
g.h.os=function(a){g.ft(this.g);it(this,jt("move"),this.ls);it(this,jt("out"),this.ms);it(this,"touchstart",this.Fn);this.o&&it(this,jt("down"),this.En);var b=g.Us(a);a=Xs(a);this.l=!0;this.O("hoverstart",a.x,a.y,b);this.O("hovermove",a.x,a.y,b)};
g.h.ls=function(a){var b=g.Us(a);a=Xs(a);if(this.B){var c=this.B;this.B=null;if(Ws(c)==b&&$c(Xs(c),a))return}this.O("hovermove",a.x,a.y,b)};
g.h.ms=function(a){var b=Xs(a),c=Ws(a);c&&g.Ld(this.C,c)?(this.B=a,this.O("hovermove",b.x,b.y,c)):(g.ft(this.g),gt(this),this.l=!1,this.O("hoverend",b.x,b.y,c))};
g.h.UD=function(a){this.os(a);this.En(a)};
g.h.En=function(a){if(!g.va(a.button)||0==a.button){g.ft(this.g);this.g.M(window.document,jt("move"),this.TD);this.g.M(window.document,jt("up"),this.pA);var b=g.Us(a);if(g.sd)it(this,"dragstart",this.Ay);else if(g.Ys(a),(g.GB||g.oh)&&b)a:{for(var c=b;c;){if(g.Pd(c)||"-1"===c.getAttribute("tabindex")){c.focus();break a}c=c.parentElement}window.document.activeElement.blur()}this.A=!0;a=Xs(a);this.O("dragstart",a.x,a.y,b);this.O("dragmove",a.x,a.y,b)}};
g.h.Ay=function(a){g.Ys(a)};
g.h.TD=function(a){var b=g.Us(a);b==window.document&&(b=null);a=Xs(a);this.O("hovermove",a.x,a.y,b);this.O("dragmove",a.x,a.y,b)};
g.h.pA=function(a){g.ft(this.g);this.A=!1;var b=Vs(a),c=g.Us(a);a=Xs(a);b&&g.Ld(this.C,b)?(it(this,jt("move"),this.ls),it(this,jt("out"),this.ms),it(this,jt("down"),this.En),it(this,"touchstart",this.Fn),this.O("dragend",a.x,a.y,c)):(gt(this),this.l=!1,this.O("dragend",a.x,a.y,c),this.O("hoverend",a.x,a.y,c))};
g.h.Fn=function(a){var b=a.changedTouches[0];b&&(g.ft(this.g),it(this,"touchmove",this.qA),it(this,"touchend",this.qs),it(this,"touchcancel",this.qs),this.F=b.identifier,a=g.Us(a),this.l||(this.l=!0,this.O("hoverstart",b.pageX,b.pageY,a)),this.O("hovermove",b.pageX,b.pageY,a),this.o&&(this.A=!0,this.O("dragstart",b.pageX,b.pageY,a),this.O("dragmove",b.pageX,b.pageY,a)))};
g.h.qA=function(a){var b=kt(this,a);b&&(this.o&&g.Ys(a),a=g.Us(a),this.O("hovermove",b.pageX,b.pageY,a),this.o&&this.O("dragmove",b.pageX,b.pageY,a))};
g.h.qs=function(a){var b=kt(this,a);if(b){g.ft(this.g);gt(this);this.l=!1;var c=g.Us(a);this.o&&(this.H||g.Ys(a),this.A=!1,this.O("dragend",b.pageX,b.pageY,c));this.O("hoverend",b.pageX,b.pageY,c)}};
g.h.T=function(){this.o&&(g.sd&&this.C.removeAttribute("draggable"),this.C.style.touchAction="");g.ft(this.g);g.R.prototype.T.call(this)};var lt={enablejsapi:1},mt={},nt={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};ot.prototype.clone=function(){var a=new ot,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==ya(c)?a[b]=g.hc(c):a[b]=c}return a};var ju={},iu=0;var tca=g.z("ytPubsubPubsubInstance")||new g.iq;g.iq.prototype.subscribe=g.iq.prototype.subscribe;g.iq.prototype.unsubscribeByKey=g.iq.prototype.wc;g.iq.prototype.publish=g.iq.prototype.O;g.iq.prototype.clear=g.iq.prototype.clear;g.y("ytPubsubPubsubInstance",tca,void 0);g.rt=g.z("ytPubsubPubsubSubscribedKeys")||{};g.y("ytPubsubPubsubSubscribedKeys",g.rt,void 0);g.ut=g.z("ytPubsubPubsubTopicToKeys")||{};g.y("ytPubsubPubsubTopicToKeys",g.ut,void 0);var tt=g.z("ytPubsubPubsubIsSynchronous")||{};
g.y("ytPubsubPubsubIsSynchronous",tt,void 0);var Kt={log_event:"events",log_interaction:"interactions"},cX=Object.create(null);cX.log_event="GENERIC_EVENT_LOGGING";cX.log_interaction="INTERACTION_LOGGING";var Jt={},Bt={},Ht=0,It=g.z("ytLoggingTransportLogPayloadsQueue_")||{};g.y("ytLoggingTransportLogPayloadsQueue_",It,void 0);var Ct=g.z("ytLoggingTransportTokensToCttTargetIds_")||{};g.y("ytLoggingTransportTokensToCttTargetIds_",Ct,void 0);var Lt=g.z("ytLoggingTransportDispatchedStats_")||{};g.y("ytLoggingTransportDispatchedStats_",Lt,void 0);
g.y("ytytLoggingTransportCapturedTime_",g.z("ytLoggingTransportCapturedTime_")||{},void 0);g.r(St,Pt);St.prototype.start=function(){var a=g.z("yt.scheduler.instance.start");a&&a()};
St.prototype.pause=function(){var a=g.z("yt.scheduler.instance.pause");a&&a()};
g.xa(St);St.getInstance();var Zt={};var fu=g.z("ytLoggingLatencyUsageStats_")||{};g.y("ytLoggingLatencyUsageStats_",fu,void 0);var gu=0;var lu=(0,g.H)().toString();nu();var dX;dX=new wq;g.pu=dX.isAvailable()?new g.sq(dX):null;var qu,eX=new xq;qu=eX.isAvailable()?new g.sq(eX):null;var zu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.y("yt.msgs_",zu,void 0);var NR=16/9,uca=[.25,.5,.75,1,1.25,1.5,2];var Ju={0:"f",160:"h",133:"h",134:"h",135:"h",136:"h",137:"h",264:"h",266:"h",138:"h",298:"h",299:"h",304:"h",305:"h",140:"a",327:"sa",258:"m",161:"H",142:"H",143:"H",144:"H",222:"H",223:"H",145:"H",224:"H",225:"H",146:"H",226:"H",147:"H",384:"H",376:"H",385:"H",377:"H",149:"A",261:"M",278:"9",242:"9",243:"9",244:"9",247:"9",248:"9",271:"9",313:"9",272:"9",302:"9",303:"9",308:"9",315:"9",330:"9h",331:"9h",332:"9h",333:"9h",334:"9h",335:"9h",336:"9h",337:"9h",171:"v",338:"so",250:"o",251:"o",194:"*",
195:"*",220:"*",221:"*",196:"*",197:"*",198:"V",279:"(",280:"(",317:"(",318:"(",273:"(",274:"(",357:"(",358:"(",275:"(",359:"(",360:"(",276:"(",314:"(",277:"(",362:"(h",363:"(h",364:"(h",365:"(h",366:"(h",367:"(h",368:"(h"};var NA={name:"width",video:!0,valid:640,wg:99999},OA={name:"height",video:!0,valid:360,wg:99999},LA={name:"framerate",video:!0,valid:30,wg:9999},PA={name:"bitrate",video:!0,valid:3E5,wg:2E9},MA={name:"eotf",video:!0,valid:"bt709",wg:"catavision"},vA={name:"channels",video:!1,valid:2,wg:99},wA={name:"cryptoblockformat",video:!0,valid:"subsample",wg:"invalidformat"},QA={yM:NA,EK:OA,xK:LA,JJ:PA,qK:MA,WJ:vA,eK:wA};Cu.prototype.l=function(){return this.name};
Cu.prototype.getId=function(){return this.id};
Cu.prototype.g=function(){return this.isDefault};
Cu.prototype.toString=function(){return this.name};
Cu.prototype.getName=Cu.prototype.l;Cu.prototype.getId=Cu.prototype.getId;Cu.prototype.getIsDefault=Cu.prototype.g;var $u={GJ:"auto",jM:"tiny",YK:"light",ZL:"small",eL:"medium",WK:"large",DK:"hd720",zK:"hd1080",AK:"hd1440",BK:"hd2160",CK:"hd2880",IK:"highres",UNKNOWN:"unknown"};var fX;fX={};g.Eu=(fX.auto=0,fX.tiny=144,fX.light=144,fX.small=240,fX.medium=360,fX.large=480,fX.hd720=720,fX.hd1080=1080,fX.hd1440=1440,fX.hd2160=2160,fX.hd2880=2880,fX.highres=4320,fX);var Iu="highres hd2880 hd2160 hd1440 hd1080 hd720 large medium small tiny".split(" ");Su.prototype.g=function(a){return"true"==this.flags[a]};
Su.prototype.l=function(a){return(0,window.parseFloat)(this.flags[a])||0};
Su.prototype.o=function(a){return(a=this.flags[a])?a.toString():""};Tu.prototype.dispose=function(){if(!this.l){if(this.g)try{window.URL.revokeObjectURL(this.Of)}catch(a){}this.l=!0}};
Tu.prototype.ga=function(){return this.l};Uu.prototype.Se=function(){return this.yf};
Uu.prototype.g=function(){return null};
Uu.prototype.o=function(){};
var jA={52:!0,53:!0,54:!0,55:!0,60:!0,79:!0,87:!0};Vu.prototype.isLocked=function(){return this.o&&!!this.l&&this.l==this.g};
Vu.prototype.A=function(a){return a.video?bv(this,a.video.quality):!1};
var LJ=Wu("auto","large",!1),Yu=Wu("auto","auto",!1);Wu("small","auto",!1);var gX={},hX=(gX["api.invalidparam"]=2,gX.auth=150,gX["drm.auth"]=150,gX["heartbeat.net"]=150,gX["heartbeat.servererror"]=150,gX["heartbeat.stop"]=150,gX["html5.unsupportedads"]=5,gX["fmt.noneavailable"]=5,gX["fmt.decode"]=5,gX["fmt.unplayable"]=5,gX["html5.missingapi"]=5,gX["html5.unsupportedlive"]=5,gX["drm.unavailable"]=5,gX);var vv=/^https?:\/\/([^.]*\.moatads\.com\/|e[0-9]+\.yt\.srs\.doubleverify\.com|pagead2\.googlesyndication\.com\/pagead\/gen_204\?id=yt3p&sr=1&|pm\.adsafeprotected\.com\/youtube|pm\.test-adsafeprotected\.com\/youtube|youtube[0-9]+\.moatpixel\.com\/)/,qv=/^http:\/\/0\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.l2gfe\.[a-z0-9_]+\.([a-z]{2}|i)\.borg\.google\.com(:[0-9]+)?\/|^https?:\/\/((?:uytfe\.corp|dev-uytfe\.corp|uytfe\.sandbox)\.google\.com\/|([-\w]*www[-\w]*\.|[-\w]*web[-\w]*\.|[-\w]*canary[-\w]*\.|[-\w]*dev[-\w]*\.|[-\w]{1,3}\.)+youtube(education|-nocookie)?\.com\/|([a-z]+\.)?[a-z0-9\-]{1,63}\.([a-z]{3}|i)\.corp\.google\.com(:[0-9]+)?\/|(docs|drive)\.google\.com\/(a\/[^/\\%]+\/|)|[A-Za-z0-9]+(-v6)?\.prod\.google\.com(:[0-9]+)?\/|m?web-ppg\.corp\.google\.com\/|play\.google\.com\/)/,
xv=/^https?:\/\/(www\.google\.com\/pagead\/sul|www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/psul|www\.youtube\.com\/pagead\/slav|www\.youtube\.com\/pagead\/sul)/,Hv=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|docs\.google\.com|drive\.google\.com|prod\.google\.com|plus\.google\.com|mail\.google\.com|youtube\.com|youtube\-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/,yJ=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|prod\.google\.com|youtube\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/,
eB=/^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|prod\.google\.com|video\.google\.com|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?\/\/*embed(\/+|\?|#|$)/,Bv=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|play\.google\.com|prod\.google\.com|plus\.google\.com|video\.google\.com|youtube\.com|ytimg\.com|chat\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b)|s2\.googleusercontent\.com\/s2\/favicons\?|yt[3-4]\.ggpht\.com\/)/,
tv=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/,Fv=/^https?:\/\/(googleads\.g\.doubleclick\.net\/(aclk|pagead\/conversion)|www\.google\.com\/(aclk|pagead\/conversion)|www\.googleadservices\.com\/(aclk|pagead\/(aclk|conversion)))/,zv=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(ba\.l\.google\.com|c\.googlesyndication\.com|corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|googlevideo\.com|play\.google\.com|prod\.google\.com|c\.lh3\.googleusercontent\.com|plus\.google\.com|mail\.google\.com|ed\.video\.google\.com|vp\.video\.l\.google\.com|youtube\.com|youtubeeducation\.com|xfx7\.com|yt\.akamaized\.net|chat\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/,
Dv=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|2mdn\.net|googlesyndication\.com|corp\.google\.com|borg\.google\.com|googleads\.g\.doubleclick\.net|prod\.google\.com|static\.doubleclick\.net|static\.googleadsserving\.cn|studioapi\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com|ytimg\.com)(:[0-9]+)?\/|lightbox-(demos|builder)\.appspot\.com\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|tpc\.googlesyndication\.com\/safeframe\/|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/ytplayer)/,
fB=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleads\.g\.doubleclick\.net|googleplex\.com|play\.google\.com|prod\.google\.com|photos\.google\.com|picasaweb\.google\.com|get\.google\.com|lh2\.google\.com|plus\.google\.com|spaces\.google\.com|books\.googleusercontent\.com|blogger\.com|mail\.google\.com|play\-books\-internal\-sandbox\.googleusercontent\.com|talkgadget\.google\.com|survey\.g\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com|vevo\.com|jamboard\.google\.com|chat\.google\.com|meet\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b)|(www\.|encrypted\.)?google\.(cat|com(\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))\/(search|webhp)\?|24e12c4a-a-95274a9c-s-sites\.googlegroups\.com\/a\/google\.com\/flash-api-test-harness\/apiharness\.swf|lightbox-(demos|builder)\.appspot\.com\/|s0\.2mdn\.net\/instream\/html5\/native\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|tpc\.googlesyndication\.com\/safeframe\/|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris)/;g.r(Nv,g.J);g.h=Nv.prototype;g.h.dC=function(a,b,c){var d=this.I[a];d||(d=this.K[a])&&(c&&fB.test(c+"/")||kr(Error('API call from an untrusted origin: "'+c+'"')));if(d)return d.apply(this,b);throw Error('Unknown API method: "'+a+'".');};
g.h.VB=function(){return this.H.slice()};
g.h.WB=function(){return g.Yb(this.A)};
g.h.ha=function(){return this.o};
g.h.addEventListener=function(a,b){if(g.w(b)){var c=function(){g.z(b).apply(window,arguments)};
this.F[b]=c}else c=b;this.app.fa.subscribe(a,c)};
g.h.Gy=function(a,b){var c=this,d=g.w(b)?a+b:a+g.Fa(b);if(!this.B[d]){var e;g.w(b)?e=function(){g.z(b).apply(window,arguments)}:e=b;
var f=function(a){e({target:c.l,data:a})};
this.B[d]=f;this.app.fa.subscribe(a,f)}};
g.h.removeEventListener=function(a,b){if(g.w(b)){var c=this.F[b];fc(this.F,b);b=c}this.app.fa.unsubscribe(a,b)};
g.h.Hy=function(a,b){var c=g.w(b)?a+b:a+g.Fa(b),d=this.B[c];d&&(this.app.fa.unsubscribe(a,d),fc(this.B,c))};
g.h.rh=function(){return ZV(this.app)};
g.h.xb=function(a,b){this.g&&hW(this.app,!0,this.playerType);xW(this.app,a,b,void 0,this.playerType)};
g.h.getCurrentTime=function(){return this.app.getCurrentTime(this.playerType)};
g.h.XB=function(){var a=g.V(this.app,this.playerType);if(!a)return 0;a=hL(a);return(0,window.isNaN)(a)?this.getCurrentTime():a};
g.h.getDuration=function(){return this.app.getDuration(this.playerType)};
g.h.getVolume=function(){return this.app.K.volume};
g.h.setVolume=function(a){Sv(this,a)};
g.h.isMuted=function(){return this.app.K.muted};
g.h.mute=function(){Tv(this)};
g.h.Ee=function(){Uv(this)};
g.h.Oc=function(){this.g&&hW(this.app,!0,this.playerType);var a=wL(this.app);2==a?(a=this.app.A.B)&&a.Fs("control_play"):3==a?g.xL(this.app.A).yi("control_play"):wW(this.app,this.playerType)};
g.h.Xb=function(){var a=wL(this.app);2==a?(a=this.app.A.B)&&a.Fs("control_pause"):3==a?g.xL(this.app.A).yi("control_pause"):(a=g.V(this.app,this.playerType))&&EK(a)};
g.h.cf=function(){var a=this.app;a.g.ba&&(a.l.isFullscreen()&&!a.g.experiments.g("player_external_control_on_classic_desktop")&&g.CL(a.l),a.l.O("pageTransition"));var b=a.o.g,c=new g.qD({video_id:b.videoId,oauth_token:b.oauthToken});a.g.experiments.g("html5_stopVideo_copy_thumbs_killswitch")||(c.Zf=g.hc(b.Zf));iW(a,c,1);null!=a.V&&a.V.stop()};
g.h.RB=function(){};
g.h.ec=function(){return g.V(this.app,1).Ha};
g.h.Ce=function(a){WV(this.app,a)};
g.h.qh=function(){return this.app.g.Ga?uca:[1]};
g.h.Ci=function(){var a=g.V(this.app,this.playerType);if(a){var b="unknown";a.g.Ba&&(b=a.g.Ba.video.quality,"auto"==b&&a.l&&(a=a.l?a.l.ha():null)&&0<a.videoHeight&&(b=Du(a.videoWidth,a.videoHeight)))}else b="unknown";return b};
g.h.Fi=function(a){if(!this.app.g.experiments.g("html5_ignore_public_setPlaybackQuality")&&!this.app.g.l){var b=g.V(this.app,this.playerType);b&&(a=Wu(a,a,!0),YK(b,"p",a))}};
g.h.Tn=function(){var a=g.V(this.app,this.playerType);return a?(a=(0,g.I)(WK(a),function(a){return a.quality}),a.length&&("auto"==a[0]&&a.shift(),a=a.concat(["auto"])),a):[]};
g.h.aC=function(){return this.Un()};
g.h.bC=function(){return 1};
g.h.Un=function(){return MV(this.app)};
g.h.cC=function(){return 0};
g.h.setSize=function(){this.app.H.Be()};
g.h.Zs=function(a){this.Vn(a?2:1)};
g.h.Vn=function(a){yW(this.app,a)};
g.h.PB=function(){this.la("SUBSCRIBE")};
g.h.QB=function(){this.la("UNSUBSCRIBE")};
g.h.Di=function(a){"captions"==a&&(a=this.app.A.l)&&!a.loaded&&a.load()};
g.h.Kk=function(a){"captions"==a&&(a=this.app.A.l)&&a.loaded&&a.WI()};
g.h.hC=function(a,b,c){a=fW(this.app,iv(a,b,c),this.playerType);this.g&&hW(this.app,a,this.playerType)};
g.h.Us=function(a,b,c){jW(this.app,iv(a,b,c),this.playerType)};
g.h.iC=function(a,b,c){a=jv(a,b,c);a=fW(this.app,a,this.playerType);this.g&&hW(this.app,a,this.playerType)};
g.h.TB=function(a,b,c){a=jv(a,b,c);jW(this.app,a,this.playerType)};
g.h.getVideoUrl=function(){var a=this.app.g;if(a.I)return"";var b=this.app.o.g,c=void 0;b.oa||(c=Math.floor(this.app.getCurrentTime(1)));return a.getVideoUrl(b.videoId,this.getPlaylistId()||void 0,c)};
g.h.Bi=function(){return YV(this.app)};
g.h.Ws=function(){var a=this.app.g;if(a.I)var b="";else{var c=this.app.o.g.videoId;b=this.app.H.Da();var d=this.getPlaylistId()||void 0;c="https://"+zB(a)+"/embed/"+c;d&&(c=g.Kg(c,{list:d}));d=!a.experiments.g("enable_responsive_embed_snippet");a.experiments.g("embed_snippet_includes_version")&&(c=g.Kg(c,{ecver:d?"1":"2"}));a=b.width;b=b.height;d?(d=g.Cb(c),b='<iframe width="'+a+'" height="'+b+'" src="'+d+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'):(d=Math.round(360*
a/b),b='<div style="position:relative;height:0;padding-bottom:'+Math.round(1E4*b/a)/100+'%"><iframe src="'+g.Cb(c)+'" style="position:absolute;width:100%;height:100%;left:0" width="'+d+'" height="360" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>')}return b};
g.h.Ts=function(a,b,c){return pW(this.app,a,b,c)};
g.h.Ys=function(a){a:{for(var b=this.app,c=AI(b.o.K)||[],d=0;d<c.length;d++){var e=c[d];if(e.getId()==a){b.o.K.C(e);NL(b,"cuerangesremoved",[e]);a=!0;break a}}a=!1}return a};
g.h.gC=function(a,b,c,d){var e=this.app;e.ia=!1;kW(e,a,b,c,d);this.g&&hW(this.app,!0,this.playerType)};
g.h.SB=function(a,b,c,d){var e=this.app;e.ia=!0;kW(e,a,b,c,d)};
g.h.sh=function(){nW(this.app);this.g&&hW(this.app,!0,this.playerType)};
g.h.Ei=function(){oW(this.app);this.g&&hW(this.app,!0,this.playerType)};
g.h.Xs=function(a){var b=this.app;!b.aa||b.l.isFullscreen()&&!b.Ga?b.C&&(b.C.ye?eW(b,b.C.Eb(a),1):b.ia=!1,YF(b.C,a)):b.l.la("onPlaylistIndex",a);this.g&&hW(this.app,!0,this.playerType)};
g.h.setShuffle=function(a){var b=this.app.C;b&&b.setShuffle(a)};
g.h.kC=function(a){var b=this.app.C;b&&(b.loop=a)};
g.h.De=function(){var a=this.app.C;if(!a)return null;for(var b=[],c=0;c<a.getLength();c++){var d=a.Eb(c);d&&b.push(d.videoId)}return b};
g.h.Vs=function(){var a=this.app.C;return a?a.Oa:-1};
g.h.getPlaylistId=function(){var a=this.app.C;return a&&a.listId?a.listId.toString():null};
g.h.Pc=function(a,b,c){if(!b)return null;var d=this.app.A;return"captions"==a?(a=d.l)&&a.Mn(b,c):null};
g.h.Lb=function(a,b,c){return this.Pc(a,b,c)};
g.h.Fg=function(a){var b=this.app.A;return"captions"==a?(b=b.l)&&b.aB():a?null:(a=[],b.l&&a.push("captions"),a)};
g.h.Y=function(){var a={},b=g.V(this.app,this.playerType);if(b&&(b=b.g,a.video_id=b.videoId,a.author=b.author,a.title=b.title,b.Ba)){a.video_quality=b.Ba.video.quality;b=b.Ba.video;var c=[];32<b.fps&&c.push("hfr");Hu(b)&&c.push("hdr");"bt2020"==b.primaries&&c.push("wcg");a.video_quality_features=c}(b=this.getPlaylistId())&&(a.list=b);return a};
g.h.gt=function(){DV(this.app,!0)};
g.h.eC=function(){DV(this.app,!1)};
g.h.UB=function(){return-1};
g.h.fC=function(a){if(a!=this.app.ma.args.video_id)return!1;a=(a=g.V(this.app,1))?a.o:null;return!(!a||!g.T(a,128)||5!=hX[a.g.errorCode])};
g.h.ZB=function(){var a=this.app.ma.clone();g.Ka(a.args,WD(this.app.o.g));return a};
g.h.lC=function(){this.app.g.F&&this.app.L.resume()};
g.h.YB=function(){var a=this.app.A.o;return a?a.fB():{}};
g.h.ct=function(a){if(a){var b=this.app.A.o;b&&b.Cs(a,!0)}};
g.h.destroy=function(){this.app.dispose()};
g.h.jC=function(){var a=g.V(this.app);a&&!g.T(a.o,128)&&(a.O("internalAbandon"),nK(a),lK(a))};
g.h.O=function(a,b){for(var c=1;c<arguments.length;++c);this.app.g.ob&&("videodatachange"==a||"audiotrackchanged"==a||"resize"==a||"cardstatechange"==a)&&this.app.fa.O.apply(this.app.fa,arguments);this.app.ba.O.apply(this.app.ba,arguments)};
g.h.la=function(a,b){this.app.fa.O.apply(this.app.fa,arguments);this.app.ba.O.apply(this.app.ba,arguments)};
g.h.T=function(){if(this.o){for(var a in this.A)this.o[a]=null;this.o=null}this.F=this.B=null;g.J.prototype.T.call(this)};g.Vv.prototype.toString=function(){return this.languageCode+"_"+this.languageName+"_"+this.g+"_"+this.id+"_"+this.isDefault};g.Wv.prototype.wb=function(){return this.I};
g.Wv.prototype.toString=function(){return this.l+": "+g.Xv(this)+" - "+this.F};
g.Wv.prototype.K=ba(4);g.Wv.prototype.Nc=function(){return!(!this.l||this.g&&!this.g.languageCode)};Yv.prototype.l=function(){return this.dc};
Yv.prototype.toString=function(){return this.dc.name};
Yv.prototype.getLanguageInfo=Yv.prototype.l;g.h=g.cw.prototype;g.h.ts=function(a){this.segments.push(a)};
g.h.getDuration=function(a){return(a=this.pg(a))?a.duration:0};
g.h.ym=function(a){return this.getDuration(a)};
g.h.Re=function(){return this.segments.length?this.segments[0].na:-1};
g.h.In=function(a){return(a=this.pg(a))?a.ingestionTime:window.NaN};
g.h.Pb=function(){return this.segments.length?this.segments[this.segments.length-1].na:-1};
g.h.ek=function(){var a=this.segments[this.segments.length-1];return a?a.endTime:window.NaN};
g.h.tb=function(){return this.segments[0].startTime};
g.h.fh=function(){return this.segments.length};
g.h.Fk=function(){return 0};
g.h.Cf=function(a){return(a=this.Vj(a))?a.na:-1};
g.h.gr=function(a){return(a=this.pg(a))?a.sourceURL:""};
g.h.nd=function(a){return(a=this.pg(a))?a.startTime:0};
g.h.gk=ba(6);g.h.Wb=function(){return 0<this.segments.length};
g.h.pg=function(a){a=g.ib(this.segments,new bw(a,0,0,0,""),function(a,c){return a.na-c.na});
return 0<=a?this.segments[a]:null};
g.h.Vj=function(a){a=g.ib(this.segments,{startTime:a},function(a,c){return a.startTime-c.startTime});
return 0<=a?this.segments[a]:this.segments[Math.max(0,-a-2)]};
g.h.dr=function(){return 0};ew.prototype.skip=function(a){this.g+=a};jw.prototype.Nj=function(a,b,c){(new window.Uint8Array(this.data.buffer,this.g,c)).set(new window.Uint8Array(a.buffer,b+a.byteOffset,c));this.g+=c};g.Kw.prototype.toString=function(){return this.start+"-"+(null==this.end?"":this.end)};px.prototype.verify=function(){if(this.info.Ja!=this.range.length)return!1;if(1==this.info.g.info.containerType){if(8>this.info.Ja||4==this.info.type)return!0;var a=qx(this),b=a.getUint32(0,!1);a=a.getUint32(4,!1);if(2==this.info.type)return b==this.info.Ja&&1936286840==a;if(3==this.info.type&&0==this.info.l)return 1836019558==a||1936286840==a||1937013104==a||1718909296==a||1701671783==a||1936419184==a}else if(2==this.info.g.info.containerType){if(4>this.info.Ja||4==this.info.type)return!0;b=qx(this).getUint32(0,
!1);if(3==this.info.type&&0==this.info.l)return 524531317==b||440786851==b}return!0};var iX={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},jX;var kX=g.Qb;kX=kX.toLowerCase();if(-1!=kX.indexOf("android")){var lX=kX.match(/android\D*(\d\.\d)[^;|\)]*[;\)]/);if(lX)jX=(0,window.parseFloat)(lX[1]);else{var mX=kX.match("("+g.Yb(iX).join("|")+")");jX=mX?iX[mX[0]]:0}}else jX=void 0;var iA=jX,AA=0<=iA;var wx=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],xx=['audio/mp4; codecs="mp4a.40.2"'];Cx.prototype.start=function(){return 0};
Cx.prototype.end=function(){return window.Infinity};g.h=Dx.prototype;g.h.addEventListener=function(){};
g.h.removeEventListener=function(){};
g.h.dispatchEvent=function(){return!1};
g.h.abort=function(){};
g.h.remove=function(){};
g.h.appendBuffer=function(){};g.h=Ex.prototype;g.h.append=function(a){this.l.webkitSourceAppend(this.o,a)};
g.h.abort=function(){this.l.webkitSourceAbort(this.o)};
g.h.gJ=function(){return this.l.webkitSourceState==this.l.SOURCE_CLOSED?new Fx:this.l.webkitSourceBuffered(this.o)};
g.h.iJ=function(){return this.A};
g.h.mJ=function(a){this.A=a;this.l.webkitSourceTimestampOffset(this.o,a)};g.h=Gx.prototype;g.h.addEventListener=function(a,b,c){this.g.addEventListener(a,b,c)};
g.h.removeEventListener=function(a,b,c){this.g.removeEventListener(a,b,c)};
g.h.GB=function(){return this.g.webkitMediaSourceURL};
g.h.addSourceBuffer=function(a){var b=(this.o++).toString();this.g.webkitSourceAddId(b,a);a=new Ex(this.g,b);this.sourceBuffers.push(a);return a};
g.h.removeSourceBuffer=function(a){for(var b=0;b<this.sourceBuffers.length;b++)if(a===this.sourceBuffers[b]){this.g.webkitSourceRemoveId(a.o);for(a=b+1;a<this.sourceBuffers.length;a++)this.sourceBuffers[a-1]=this.sourceBuffers[a];this.sourceBuffers.pop();break}};
g.h.jJ=function(){switch(this.g.webkitSourceState){case this.g.SOURCE_CLOSED:return"closed";case this.g.SOURCE_OPEN:return"open";case this.g.SOURCE_ENDED:return"ended"}return""};
g.h.endOfStream=function(){this.g.webkitSourceEndOfStream(this.g.EOS_NO_ERROR)};
g.h.kJ=function(){Va(this.sourceBuffers)};
g.h.hJ=function(){return this.l};
g.h.lJ=function(a){this.l=a;this.g.webkitSourceSetDuration&&this.g.webkitSourceSetDuration(a)};g.r(Ix,g.J);Ix.prototype.L=function(){if(!this.ga()&&Kx(this))try{this.A&&(this.A(this),this.A=null)}catch(a){this.C&&this.C(a)}};
Ix.prototype.K=function(){this.dispose()};g.Vx.prototype.set=function(a,b){this.g[a]!==b&&(this.g[a]=b,this.o="")};
g.Vx.prototype.get=function(a){Wx(this);return this.g[a]||null};
g.Vx.prototype.wb=function(){this.o||(this.o=cy(this));return this.o};
g.Vx.prototype.clone=function(){var a=new g.Vx(this.A);a.C=this.C;a.l=this.l;a.B=this.B;a.g=g.hc(this.g);a.o=this.o;return a};
var Zx=!1;ey.prototype.set=function(a,b){this.g.get(a);this.l[a]=b;this.o=""};
ey.prototype.get=function(a){return this.l[a]||this.g.get(a)};
ey.prototype.wb=function(){this.o||(this.o=gy(this));return this.o};var vca=0;g.h=ty.prototype;g.h.Cd=function(){};
g.h.Ib=function(){};
g.h.mn=function(){return!1};
g.h.Mc=function(){return!!this.g&&!!this.index&&this.index.Wb()};
g.h.Eg=function(){};
g.h.ws=function(){return!1};
g.h.di=function(){};
g.h.Dg=function(){};
g.h.wi=function(){};
g.h.Bf=function(){};
g.h.Um=function(){};
g.h.xs=function(a){return[a]};
g.h.ll=function(a){return[a]};
g.h.Jo=function(){};
g.h.Bm=function(){};g.r(vy,ty);g.h=vy.prototype;g.h.Cd=function(){return!1};
g.h.Ib=function(){return!1};
g.h.ws=function(){return this.l};
g.h.di=function(){if(this.l)return[];var a=new Ow(1,this,this.initRange);return[new oy([a],this.I)]};
g.h.Dg=function(){return null};
g.h.wi=function(a){this.Eg(a);return this.Oj(a.o?a.na+1:a.na,!1)};
g.h.Bf=function(a,b){b=void 0===b?!1:b;var c=this.index.Cf(a);b&&(c=Math.min(this.index.Pb(),c+1));return this.Oj(c,!0)};
g.h.Um=function(a){this.g=new window.Uint8Array(qx(a).buffer)};
g.h.mn=function(){return!1};
g.h.Eg=function(a){return 0==a.Ja?!0:this.index.Pb()>a.na&&this.index.Re()<=a.na+1};
g.h.update=function(a,b,c){var d=this.index;if(0!=a.length)if(a=g.bb(a),0==d.segments.length)d.segments=a;else{var e=d.segments.length?g.Ma(d.segments).endTime:0,f=a[0].na-d.Pb();1<f&&Va(d.segments);for(f=0<f?0:-f+1;f<a.length;f++){var k=a[f];k.startTime=e;k.endTime=k.startTime+k.duration;e+=a[f].duration;d.segments.push(a[f])}}dw(this.index,c);this.H=b};
g.h.Mc=function(){return this.l?!0:ty.prototype.Mc.call(this)};
g.h.Oj=function(a,b){var c=this.index.gr(a),d=this.index.nd(a),e=this.index.getDuration(a),f;b?e=f=0:f=0<this.info.g?this.info.g*e:1E3;d=new Ow(3,this,null,a,d,e,0,f,a==this.index.Pb()&&!this.H&&0<f);return new oy([d],c)};
g.h.Bm=function(){return this.l?0:this.initRange.length};
g.h.Jo=function(){return!1};g.r(wy,g.cw);g.h=wy.prototype;g.h.Re=function(){return this.g?this.segments.length?this.Vj(this.tb()).na:-1:g.cw.prototype.Re.call(this)};
g.h.tb=function(){return this.g?this.segments.length?Math.max(g.Ma(this.segments).endTime-this.o,0):0:g.cw.prototype.tb.call(this)};
g.h.fh=function(){return this.g?this.segments.length?this.Pb()-this.Re()+1:0:g.cw.prototype.fh.call(this)};
g.h.ts=function(a){var b=yy(this,a.na);0<=b?this.segments[b]=a:this.segments.splice(-(b+1),0,a)};
g.h.Vj=function(a){if(!this.g)return g.cw.prototype.Vj.call(this,a);if(!this.segments.length)return null;var b=g.ib(this.segments,{startTime:a},function(a,b){return a.startTime-b.startTime}),c=this.segments[0<=b?b:Math.max(-(b+2),0)];
return c.startTime+c.duration>a&&c.startTime<=a?c:-1==b?Ay(this,c.na-Math.ceil((c.startTime-a)/this.l),c):Ay(this,c.na+Math.ceil((a-c.endTime)/this.l),c)};
g.h.pg=function(a){if(!this.g)return g.cw.prototype.pg.call(this,a);if(!this.segments.length)return null;var b=yy(this,a);return 0<=b?this.segments[b]:Ay(this,a,this.segments[Math.max(-(b+2),0)])};g.r(By,vy);g.h=By.prototype;g.h.Ib=function(){return!0};
g.h.Mc=function(){return!0};
g.h.Eg=function(){return!0};
g.h.di=function(){return[]};
g.h.Bf=function(a,b){if(g.va(a)&&!(0,window.isFinite)(a)){var c=new Ow(3,this,null,-1,void 0,this.B,void 0,this.B*this.info.g);return new oy([c],"")}return vy.prototype.Bf.call(this,a,b)};
g.h.Oj=function(a,b){if(zy(this.index,a))return vy.prototype.Oj.call(this,a,b);var c=this.index.nd(a);c=new Ow(3,this,null,a,c,void 0,void 0,b?0:this.B*this.info.g);return new oy([c],0<=a?"sq/"+a:"")};Hy.prototype.update=function(a,b){var c=void 0;this.l&&(c=this.l);var d=new Hy,e=a.getElementsByTagName("S");if(e.length){var f=+Dy(a,"timescale")||1,k=(+e[0].getAttribute("t")||0)/f,l=+Dy(a,"startNumber")||0;var m=k;var n=+Dy(a,"presentationTimeOffset")||0;m=c?c.Pd+c.durationSecs:b?m-n/f:0;n=Date.parse(Gy(Dy(a,"yt:segmentIngestTime")))/1E3;d.o="SegmentTemplate"==a.parentNode.tagName;d.o&&(d.C=Dy(a,"media"));var p=c?l-c.na:1;d.B=0<p?0:-p+1;e=g.q(e);for(p=e.next();!p.done;p=e.next()){p=p.value;for(var u=
+p.getAttribute("d")/f,v=(+p.getAttribute("yt:sid")||0)/f,C=+p.getAttribute("r")||0,D=0;D<=C;D++)if(c&&l<=c.na)l++;else{var E=new Cy(l,m,u,n+v,k);d.g.push(E);var ea=E.Pd,fa=p.getAttribute("yt:cuepointTimeOffset");E=p.getAttribute("yt:cuepointDuration");fa&&E?(ea=+fa/f+ea,E=+E/f,fa=p.getAttribute("yt:cuepointContext")||null,E=new nw(ea,E,fa)):E=null;E&&d.A.push(E);l++;m+=u;k+=u;n+=u+v}}d.g.length&&(d.l=g.Ma(d.g))}this.B=d.B;this.l=d.l||this.l;cb(this.g,d.g);cb(this.A,d.A);this.o=d.o;this.C=d.C};
Hy.prototype.F=function(a,b,c,d){for(var e=this.C.split("$$"),f=0;f<e.length;f++)e[f]=e[f].replace("$RepresentationID$",a),e[f]=e[f].replace("$Number$",c.toString()),e[f]=e[f].replace("$Bandwidth$",b.toString()),e[f]=e[f].replace("$Time$",d.toString());return e.join("$")};g.h=g.Py.prototype;g.h.Fk=function(a){return this.g[a]};
g.h.nd=function(a){return this.l[a]/this.A};
g.h.gk=ba(5);g.h.In=function(){return window.NaN};
g.h.getDuration=function(a){a=this.ym(a);return 0<=a?a/this.A:-1};
g.h.ym=function(a){return a+1<this.va||this.o?this.l[a+1]-this.l[a]:-1};
g.h.Re=function(){return 0};
g.h.Pb=function(){return this.va-1};
g.h.ek=function(){return this.o?this.l[this.va]/this.A:window.NaN};
g.h.tb=function(){return 0};
g.h.fh=function(){return this.va};
g.h.gr=function(){return""};
g.h.Cf=function(a){a=g.ib(this.l.subarray(0,this.va),a*this.A);return 0<=a?a:Math.max(0,-a-2)};
g.h.Wb=function(){return 0<=this.Pb()};
g.h.dr=function(a,b){if(a>=this.Pb())return 0;for(var c=0,d=this.nd(a)+b,e=a;e<this.Pb()&&d>this.nd(e);e++)c=Math.max(c,(e+1<this.va||this.o?this.g[e+1]-this.g[e]:-1)/this.getDuration(e));return c};
g.h.cap=function(a,b){Qy(this);this.o=!0;this.l[this.va]=b;this.g[this.va]=a};g.r(g.Ry,ty);g.h=g.Ry.prototype;g.h.di=function(a){var b=new Ow(1,this,this.initRange),c=new Ow(2,this,this.indexRange),d=[],e=[b];Rw(b,c)?e.push(c):(d.push(new oy([c])),a=0);(0,window.isNaN)(this.l)&&(a=0);b=e[e.length-1];a=Math.min(a,this.l-(b.range.end-e[0].range.start+1));0<a&&(a=Mw(b.range.end+1,a),e.push(new Ow(4,this,a)));d.push(new oy(e));return d};
g.h.Um=function(a){if(1==a.info.type){if(this.g)return;if(a.g.slice)var b=new window.Uint8Array(a.g.slice(a.range.start,a.range.end+1));else b=new window.Uint8Array(a.g,a.range.start,a.range.end+1),b=new window.Uint8Array(b);this.g=b}else if(2==a.info.type){if(this.B||0<=this.index.Pb())return;if(Ou(this.info)){b=this.index;var c=qx(a),d=a.info.range.start;a=0;var e=c.getUint32(0,!1),f=c.getUint8(a+8);a+=12;var k=c.getUint32(a+4,!1);b.A=k;a+=8;0==f?(f=c.getUint32(a,!1),k=c.getUint32(a+4,!1),a+=8):
(f=4294967296*c.getUint32(a,!1)+c.getUint32(a+4,!1),k=4294967296*c.getUint32(a+8,!1)+c.getUint32(a+12,!1),a+=16);b.g[0]=k+(e+d);b.l[0]=f;b.o=!0;d=c.getUint16(a+2,!1);a+=4;for(e=0;e<d;e++){f=c.getUint32(a,!1);k=c.getUint32(a+4,!1);a+=12;var l=b;l.va++;Qy(l);l.g[l.va]=l.g[l.va-1]+f;l.l[l.va]=l.l[l.va-1]+k}}else this.B=qx(a)}if(2==this.info.containerType&&this.g&&this.B){a=new window.DataView(this.g.buffer);b=this.index;k=this.B;c=this.indexRange.end;a=new Yw(a);if(bx(a,440786851)&&(hx(a),bx(a,408125543)&&
(e=a,f=e.g,d=cx(e,!0),e.g=f,a=ax(a),e=a.o+a.g,bx(a,357149030)))){a=ax(a);l=1E6;var m=1E9;for(f=0;!Zw(a);){var n=cx(a,!1);2807729==n?l=gx(a):2807730==n?m=gx(a):17545==n?f=ix(a):hx(a)}b.A=m/l;a=new Yw(k);if(bx(a,475249515)){a=ax(a);k=!0;for(l=!1;bx(a,187);){m=ax(a);if(bx(m,179))if(n=gx(m),bx(m,183)){m=ax(m);for(var p=e;bx(m,241);)p=gx(m)+e;m=[p,n]}else m=null;else m=null;p=m;k&&c==p[0]&&(l=!0);k=!1;l&&(p[0]+=1);m=b;n=p[0];p=p[1];Qy(m);m.g[m.va]=n;m.l[m.va]=p;m.va++}b.cap(d+e,f)}}this.B=null}};
g.h.xs=function(a){for(var b=this.ll(a.info),c=[],d=a.pd,e=0;e<b.length;e++){var f=Mw(b[e].range.start+b[e].l-a.info.range.start+a.range.start,b[e].Ja);c.push(new px(b[e],a.g,f,a.o,d));d=!1}return c};
g.h.ll=function(a){for(var b=0;b<this.index.Pb()&&a.range.start>=this.index.Fk(b+1);)b++;return Sy(this,b,a.range.start,a.range.length).ra};
g.h.Eg=function(a){return this.Mc()?!0:(0,window.isNaN)(this.l)?!1:a.range.end+1<this.l};
g.h.Dg=function(a,b){this.Eg(a);if(!this.Mc()){var c=Mw(a.range.end+1,b);c.end+1>this.l&&(c=new g.Kw(c.start,this.l-1));c=[new Ow(4,a.g,c)];return new oy(c)}4==a.type&&(c=this.ll(a),a=c[c.length-1]);c=0;var d=a.range.start+a.l+a.Ja;3==a.type&&(c=a.na,d==a.range.end+1&&(c+=1));return Sy(this,c,d,b)};
g.h.wi=function(){return null};
g.h.Bf=function(a,b){var c=this.index.Cf(a);b&&(c=Math.min(this.index.Pb(),c+1));return Sy(this,c,this.index.Fk(c),0)};
g.h.mn=function(){var a;if(a=this.Mc()&&!(0,window.isNaN)(this.l))a=this.index,a=(a.o?a.g[a.va]:-1)!=this.l;return a};
g.h.Cd=function(){return!0};
g.h.Ib=function(){return!1};
g.h.Bm=function(){return this.indexRange.length+this.initRange.length};
g.h.Jo=function(){return this.indexRange&&this.initRange&&this.initRange.end+1==this.indexRange.start?!0:!1};var Wy={I4:function(a,b){a.splice(0,b)},
oY:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b]=c},
bA:function(a){a.reverse()}};g.r(Yy,g.R);g.h=Yy.prototype;g.h.ue=function(){return Ub(this.g,function(a){return a.info.video?2==a.info.video.projectionType:!1})};
g.h.we=function(){return Ub(this.g,function(a){return a.info.video?3==a.info.video.projectionType:!1})};
g.h.Hd=function(){return Ub(this.g,function(a){return a.info.video?4==a.info.video.projectionType:!1})};
g.h.xg=function(){return Ub(this.g,function(a){return a.info.video?1==a.info.video.stereoLayout:!1})};
g.h.WH=function(a){var b=a.getElementsByTagName("Representation");if(0<a.getElementsByTagName("SegmentList").length||0<a.getElementsByTagName("SegmentTemplate").length){this.o=!0;this.B||(this.B=new Jy);Ny(this.B,a,this.fa);this.O("refresh");for(a=0;a<b.length;a++){var c=mz(this,b[a]),d=this.isLive&&Ou(c)&&this.ia;if(!this.g[c.id]){var e=fz(Ey(b[a],"BaseURL").textContent),f=Ey(b[a],"Initialization"),k=Dy(f,"sourceURL");f=Lw(Dy(f,"range"));d&&(k="",f=void 0);this.g[c.id]=new vy(e,c,k,null===f?void 0:
f)}c=this.g[c.id];e=Dy(b[a],"id","AdaptationSet");e=""!=e?e:Dy(b[a],"mimetype","AdaptationSet");k=this.B;e=k.o[c.info.id]||k.l[e]||k.g||null;k=e.g;if(e.o)for(d=[],k=g.q(k),f=k.next();!f.done;f=k.next()){f=f.value;var l=e.F(c.info.id,8*c.info.g,f.na,f.Pd);d.push(new bw(f.na,f.Pd,f.durationSecs,f.g,l,null,f.l))}else{e=g.db(Ey(b[a],"SegmentList").getElementsByTagName("SegmentURL"),e.B);f=[];for(l=0;l<e.length;l++)f.push(pz(e[l],k[l],d));d=f}c.update(d,this.isLive,this.R)}Oy(this.B);return!0}this.duration=
Fy(Dy(a,"mediaPresentationDuration"));a:{for(a=0;a<b.length;a++){k=b[a];c=mz(this,k);e=Ey(k,"BaseURL");d=fz(e.textContent);f=Ey(k,"SegmentBase");k=Lw(f.attributes.indexRange.value);f=Lw(f.getElementsByTagName("Initialization")[0].attributes.range.value);e=(0,window.parseInt)(e.getAttribute(iz(this,"contentLength")),10);c=new g.Ry(d,c,f,k,e,window.NaN);if(!c){b=!1;break a}this.g[c.info.id]=c}b=!0}return b};
g.h.Oy=function(a){return this.B?g.db(this.B.A,a):this.L.length?g.db(this.L,a):[]};
g.h.az=function(a){if(this.ga())return this;this.P=a.status;a=a.responseText;a=(new window.DOMParser).parseFromString(a,"text/xml").getElementsByTagName("MPD")[0];this.F=1E3*Fy(Dy(a,"minimumUpdatePeriod"))||window.Infinity;if(!this.U){var b;a:{for(b=0;b<a.attributes.length;b++)if("http://youtube.com/yt/2012/10/10"==a.attributes[b].value){b=a.attributes[b].name.split(":")[1];break a}b=""}this.aa=b}this.isLive=window.Infinity>this.F&&this.ma;this.R=(0,window.parseInt)(Dy(a,iz(this,"earliestMediaSequence")),
10)||0;if(b=Date.parse(Gy(Dy(a,iz(this,"mpdResponseTime")))))this.H=((0,g.H)()-b)/1E3;this.isLive&&0>=a.getElementsByTagName("SegmentTimeline").length||(0,g.Kn)(a.getElementsByTagName("Period"),this.WH,this);this.C=2;this.O("loaded");rz(this);return this};
g.h.cz=function(a){this.P=a.g.status;this.C=3;this.O("loaderror");return Of(a.g)};
g.h.us=function(){if(1!=this.C&&!this.ga()){var a=g.Kg(this.V,{start_seq:sz(this).toString()});g.Wf(nz(this,a),function(){})}};
g.h.resume=function(){rz(this)};
g.h.kd=function(){var a=this.g,b=window.NaN,c;for(c in a){var d=a[c].index;d&&d.Wb()&&((0,window.isNaN)(b)||d.ek()<b)&&(b=d.ek())}return b};
g.h.tb=function(){var a=this.g,b;for(b in a){var c=a[b].index;if(c&&c.Wb())return c.tb()}return 0};
g.h.CA=function(){return this.H};
var yz=null,lz={commentary:1,alternate:2,dub:3,main:4};var nX={},Lz=(nX.playready=["com.youtube.playready","com.microsoft.playready"],nX.widevine=["com.widevine.alpha"],nX),Mz=g.ab(Lz.widevine,Lz.playready);g.r(Kz,g.J);Kz.prototype.F=function(){(this.C=this.A.g("html5_widevine_robustness_strings")&&!this.C&&"widevine"==this.g[this.l[0]].flavor)||this.l.shift();Nz(this)};
Kz.prototype.H=function(a,b){this.ga()||(a.l=b,Oz(this,a),this.B(a))};var pB={ML:"red",wM:"white"};Sz.prototype.g=function(a,b){var c=Math.pow(this.B,a);this.o=b*(1-c)+c*this.o;this.A+=a};
Sz.prototype.l=function(){return this.o/(1-Math.pow(this.B,this.A))};Tz.prototype.g=function(a,b){var c=Math.max(1,Math.round(a*this.L));c+this.A>=this.o&&(this.I=!0);for(;c--;)this.B[this.A]=b,this.A=(this.A+1)%this.o;this.H=!0};
Tz.prototype.l=function(){return this.F?(Uz(this,this.C-this.F)+Uz(this,this.C)+Uz(this,this.C+this.F))/3:Uz(this,this.C)};var gB={BJ:"adunit",iK:"detailpage",nK:"editpage",pK:"embedded",XK:"leanback",DL:"previewpage",FL:"profilepage",pM:"unplugged"};var zA="9h 9 h 8 (h ( H *".split(" "),yA="9h 9 h 8 ( H *".split(" "),BA="h98H(*".split(""),DA="oMavAV".split(""),GA=["so","sa"],FA="moMavAV".split(""),EA="aoMvAV".split(""),CA=["f"],pA={'video/mp4; codecs="avc1.42001E, mp4a.40.2"':"maybe"},qA={"application/x-mpegURL":"maybe"},oA={"application/x-mpegURL":"maybe"};var tB={ZK:1,aL:2,bL:3};g.r(SA,g.R);SA.prototype.add=function(a,b){if(!this.za[a]&&(b.Ij||b.Jj||b.kp)){var c=this.za,d=b;Object.isFrozen&&!Object.isFrozen(b)&&(d=Object.create(b),Object.freeze(d));c[a]=d;this.O("vast_info_card_add",a)}};
SA.prototype.remove=function(a){var b=this.get(a);delete this.za[a];return b};
SA.prototype.get=function(a){return this.za[a]||null};
SA.prototype.isEmpty=function(){return g.dc(this.za)};var XA=/^([0-9\.]+):([0-9\.]+)$/;var aB=g.z("ytglobal.prefsUserPrefsPrefs_")||{};g.y("ytglobal.prefsUserPrefsPrefs_",aB,void 0);g.h=bB.prototype;g.h.get=function(a,b){dB(a);cB(a);var c=void 0!==aB[a]?aB[a].toString():null;return null!=c?c:b?b:""};
g.h.set=function(a,b){dB(a);cB(a);if(null==b)throw Error("ExpectedNotNull");aB[a]=b.toString()};
g.h.remove=function(a){dB(a);cB(a);delete aB[a]};
g.h.save=function(){var a=this.g,b=[],c;for(c in aB)b.push(c+"="+(0,window.encodeURIComponent)(String(aB[c])));g.xu(a,b.join("&"),63072E3)};
g.h.clear=function(){g.ec(aB)};
g.xa(bB);var hB="blogger books docs google-live play chat picasaweb gmail jamboard".split(" ");g.r(wB,g.J);
wB.prototype.jf=function(a){this.ya=WA(this.ya,a.video_id);this.Ya=WA(this.Ya,a.eventid);this.sa=a.oauth_token;for(var b in oX){var c=oX[b],d=a[c];void 0!=d&&(this.B[c]=d)}!this.Ta&&a.cl&&(this.Ta=+a.cl);this.userAge=VA(this.userAge,a.user_age);this.userDisplayImage=WA(this.userDisplayImage,a.user_display_image);g.Cv(this.userDisplayImage)||(this.userDisplayImage="");this.userDisplayName=WA(this.userDisplayName,a.user_display_name);this.userGender=WA(this.userGender,a.user_gender);this.csiPageType=
WA(this.csiPageType,a.csi_page_type);this.Za=WA(this.Za,a.csi_service_name);this.Sc=TA(this.Sc,a.enablecsi);a.enabled_engage_types&&(this.Mb=new window.Set(a.enabled_engage_types.split(",")))};
wB.prototype.getVideoUrl=function(a,b,c,d,e){b={list:b};c&&(e?b.time_continue=c:b.t=c);c=zB(this);d&&"www.youtube.com"==c?d="https://youtu.be/"+a:g.BB(this)?(d="https://"+c+"/fire",b.v=a):(d=this.protocol+"://"+c+"/watch",b.v=a,nA&&(a=g.z("yt.ads.biscotti.lastId_")||"")&&(b.ebc=a));return g.Kg(d,b)};
var oX={KJ:"cbrand",LJ:"cbr",MJ:"cbrver",PK:"c",SK:"cver",RK:"ctheme",QK:"cplayer",fL:"cmodel",jL:"cnetwork",qL:"cos",rL:"cosver",zL:"cplatform"};var NB=new window.Set("BASE_URL BASE_YT_URL abd allow_embed authuser autoplay captions_load_policy cc_load_policy cc3_module dash dashmpd disable_native_context_menu docid el enable_cardio enablecastapi enablepostapi fmt_list fmt_stream_map hl hlsdvr hlsrange hlsvp html5 iurl iurlhq iurlmq length_seconds live_playback nohtml5 origin override_hl partnerid plid postid ps public rel reload_count reload_reason reportabuseurl resume start status streaminglib_load_policy streaminglib_preroll t timestamp title token ttsurl use_native_controls url_encoded_fmt_stream_map video_id videoid wmode".split(" "));g.r(TB,Uu);
TB.prototype.g=function(){if(!this.l||this.l.ga()){var a=this.A;QB(a);for(var b=["#EXTM3U","#EXT-X-INDEPENDENT-SEGMENTS"],c={},d=0,e=a.l.length;d<e;++d){var f=a.l[d];c[f.itag]=f;b.push('#EXT-X-MEDIA:TYPE=AUDIO,NAME="audio",DEFAULT=YES,AUTOSELECT=YES,'+('GROUP-ID="'+f.itag.toString()+'",')+('URI="'+f.url+'"'))}d=0;for(e=a.g.length;d<e;++d){f=a.g[d];var k=c[f.audioItag];b.push("#EXT-X-STREAM-INF:BANDWIDTH="+(f.bitrate+k.bitrate)+","+('CODECS="'+f.tq+","+k.tq+'",')+("RESOLUTION="+f.width+"x"+f.height+
",")+('AUDIO="'+k.itag.toString()+'",')+"CLOSED-CAPTIONS=NONE");b.push(f.url)}a="data:application/x-mpegurl;charset=utf-8,"+(0,window.encodeURIComponent)(b.join("\n"));this.l=new Tu(a)}return this.l};var wca={UNKNOWN:"UNKNOWN",NORMAL:"NORMAL",cL:"LOW",oM:"ULTRALOW"};g.r(WB,Uu);WB.prototype.g=function(){return new Tu(this.l.wb())};
WB.prototype.o=function(){this.l=$x(this.l)};g.h=g.YB.prototype;g.h.Vd=function(){return this.C};
g.h.getHeight=function(){return this.B};
g.h.ar=ba(7);g.h.zm=function(){return this.l};
g.h.isDefault=function(){return-1!=this.A.indexOf("default")};
g.h.Wb=function(a){return this.ye.has(a)};
g.h.wb=function(a){var b=this.K;b=b.replace("$N",this.A);b=b.replace("$L",this.I.toString());b=b.replace("$M",a.toString());this.F&&(b=g.Kg(b,{sigh:this.F}));return Kv(b)};
g.h.Ii=function(a){var b=this.zm()-1;return g.Vc(0==this.o?Math.round(a*this.l/this.L):Math.round(1E3*a/this.o),0,b)};
g.h.Mk=function(){return this.l-1};
g.h.zt=function(){return this.l?0:-1};
g.h.At=function(){};g.r($B,g.R);$B.prototype.K=function(a,b){this.l=this.l.onload=null;var c=this.g[a];c.ye.add(b);cC(this);var d=c.columns*c.rows;var e=b*d;c=Math.min(e+d-1,c.zm()-1);e=[e,c];this.O("l",e[0],e[1])};
$B.prototype.T=function(){this.l&&(this.l=this.l.onload=null);g.R.prototype.T.call(this)};g.r(eC,$B);eC.prototype.o=function(a,b){for(var c=[],d=a.split("|"),e=d[0],f=1;f<d.length;f++){var k=this.C(f-1,e,d[f],b);180>k.getHeight()&&c.push(k)}return c};
eC.prototype.C=function(a,b,c,d){return new g.YB(a,b,c,d)};
eC.prototype.I=function(){};g.r(fC,g.YB);g.h=fC.prototype;g.h.zm=function(){return this.g?this.g.fh():-1};
g.h.Ii=function(a){var b=this.rows*this.columns*this.H,c=-1,d=-1,e=this.g;e&&(c=e.Pb(),d=e.Cf(a));return d>c-b?-1:d};
g.h.Mk=function(){return this.g?this.g.Pb():-1};
g.h.zt=function(){return this.g?this.g.Re():-1};
g.h.At=function(a){this.g=a};g.r(gC,eC);gC.prototype.o=function(a,b){return eC.prototype.o.call(this,"$N|"+a,b)};
gC.prototype.C=function(a,b,c){return new fC(a,b,c,this.isLive)};
gC.prototype.I=function(a){for(var b=0;b<this.g.length;b++)this.g[b].At(a)};g.r(hC,Uu);hC.prototype.g=function(){return new Tu(this.l)};var jC={iurl:"default.jpg",iurlmq:"mqdefault.jpg",iurlhq:"hqdefault.jpg",iurlsd:"sddefault.jpg",iurlpop1:"pop1.jpg",iurlpop2:"pop2.jpg",iurlhq720:"hq720.jpg",iurlmaxres:"maxresdefault.jpg"},mC={120:"default.jpg",320:"mqdefault.jpg",480:"hqdefault.jpg",560:"pop1.jpg",640:"sddefault.jpg",854:"pop2.jpg",1280:"hq720.jpg"};g.pC.prototype.toString=function(){return this.topic};var xca=g.z("ytPubsub2Pubsub2Instance")||new g.iq;g.iq.prototype.subscribe=g.iq.prototype.subscribe;g.iq.prototype.unsubscribeByKey=g.iq.prototype.wc;g.iq.prototype.publish=g.iq.prototype.O;g.iq.prototype.clear=g.iq.prototype.clear;g.y("ytPubsub2Pubsub2Instance",xca,void 0);var sC=g.z("ytPubsub2Pubsub2SubscribedKeys")||{};g.y("ytPubsub2Pubsub2SubscribedKeys",sC,void 0);var uC=g.z("ytPubsub2Pubsub2TopicToKeys")||{};g.y("ytPubsub2Pubsub2TopicToKeys",uC,void 0);
var tC=g.z("ytPubsub2Pubsub2IsAsync")||{};g.y("ytPubsub2Pubsub2IsAsync",tC,void 0);g.y("ytPubsub2Pubsub2SkipSubKey",null,void 0);var zC=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.r(DC,g.oC);g.r(EC,g.oC);var gD=new g.pC("aft-recorded",DC),wC=new g.pC("timing-sent",EC);var hD={vc:!0},RC={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},bD={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",
yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},dD="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
TC={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",
prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT",
"video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR"},cD="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),fD=!1,GC=(0,g.A)(zC.clearResourceTimings||zC.webkitClearResourceTimings||zC.mozClearResourceTimings||zC.msClearResourceTimings||zC.oClearResourceTimings||g.wa,zC);var pX;var qX=g.Qb,rX=qX.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!rX||2>rX.length)pX=void 0;else{var sX=qX.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);pX=sX&&6==sX.length?Number(sX[5].replace("_",".")):0}var TR=pX,tX=0<=TR;tX&&0<=g.Qb.search("Safari")&&g.Qb.search("Version");var SD={0:"UNKNOWN",1:"OFF",2:"ON",3:"FORCED_ON"},uX={},yca=(uX.ALWAYS=1,uX.BY_REQUEST=3,uX),yD,rD;g.r(g.qD,g.R);g.h=g.qD.prototype;g.h.jf=function(a,b){b?(this.setData(a),QD(this)&&FD(this)):(zD(this,a,!0),this.O("dataupdated"))};
g.h.setData=function(a){a=a||{};a.player_response&&(this.Xa=g.aq(a.player_response));this.Ne="1"!=a.hlsdvr?!1:mA()?!0:iB&&5>TR?!1:!0;this.adQueryId=a.ad_query_id;this.adSafetyReason=a.encoded_ad_safety_reason;this.ky=a.agcid;this.xj="1"==a.infringe||"1"==a.muted;this.authKey=a.authkey;this.jc=a.authuser;this.clientPlaybackNonce||(this.clientPlaybackNonce=a.cpn||nu());this.enableCardio=TA(this.enableCardio,a.enable_cardio);this.enableCardioBeforePlayback=TA(this.enableCardioBeforePlayback,a.enable_cardio_before_playback);
this.endSeconds=VA(this.endSeconds,a.end||a.endSeconds);this.kh=WA(this.kh,a.itct);this.ln=TA(this.ln,a.noiba);this.lh="1"==a.livemonitor;this.oa="1"==a.live_playback||!!a.fresca_preroll||!!a.heartbeat_preroll;this.isLiveDestination=TA(this.isLiveDestination,a.is_live_destination);this.isLiveDefaultBroadcast="1"==a.live_default_broadcast;this.isLowLatencyLiveStream="1"==a.is_low_latency_live_stream;a.latency_class&&(this.latencyClass=UA("UNKNOWN",a.latency_class,wca));this.isMdxPlayback=TA(this.isMdxPlayback,
a.mdx);a.mdx_control_mode&&(this.mdxControlMode=Nb(a.mdx_control_mode));this.kn=TA(this.kn,a.is_inline_playback_no_ad);this.Uf=VA(this.Uf,a.reload_count);this.reloadReason=WA(this.reloadReason,a.reload_reason);this.ep=TA(this.ep,a.show_content_thumbnail);this.qn=TA(this.qn,a.utpsa);this.cycToken=a.cyc;this.dw=a.tkn;this.Zf="1"==a.innertube_thumbnail&&this.Xa.videoDetails.thumbnail?nC(this.Xa.videoDetails.thumbnail):kC(a);this.He=WA(this.He,a.vvt);this.revocableUnlistedToken=a.revocable_unlisted_token;
this.mdxEnvironment=WA(this.mdxEnvironment,a.mdx_environment);this.aE=a.osig;this.Ru=a.ptchn;this.Su=a.oid;this.Wk=a.ptk;this.Tu=a.pltype;this.playbackId=a.plid;this.eventId=a.eventid;this.osid=a.osid;this.videoMetadata=a.vm;this.Io=a.of;this.yl=a.upt;this.playlistId=WA(this.playlistId,a.list);this.Zu=a.pyv_view_beacon_url;this.bI=a.pyv_quartile25_beacon_url;this.cI=a.pyv_quartile50_beacon_url;this.dI=a.pyv_quartile75_beacon_url;this.aI=a.pyv_quartile100_beacon_url;a.remarketing_url&&(this.remarketingUrl=
a.remarketing_url);this.Xa&&this.Xa.playbackTracking&&this.Xa.playbackTracking.youtubeRemarketingUrl&&(this.youtubeRemarketingUrl=this.Xa.playbackTracking.youtubeRemarketingUrl.baseUrl);this.Xa&&this.Xa.playbackTracking&&this.Xa.playbackTracking.googleRemarketingUrl&&(this.googleRemarketingUrl=this.Xa.playbackTracking.googleRemarketingUrl.baseUrl);a.ppv_remarketing_url&&(this.ppvRemarketingUrl=a.ppv_remarketing_url);this.il=a.sdetail;!this.Ko&&a.session_data&&(this.Ko=g.rr(a.session_data).feature);
this.isFling=1==VA(this.isFling?1:0,a.is_fling);this.vnd=VA(this.vnd,a.vnd);this.tm=WA(this.tm,a.force_ads_url);this.Vf=WA(this.Vf,a.ctrl);this.gf=WA(this.gf,a.ytr);this.wq=a.ytrcc;this.ov=a.ytrexp;this.Vi=ZA(this.Vi,a.vq);this.Zi=ZA(this.Zi,a.suggestedQuality);this.tl=TA(this.tl,a.ssrt);this.videoId=$A(a)||this.videoId;this.vssCredentialsToken=WA(this.vssCredentialsToken,a.vss_credentials_token);this.Hl=WA(this.Hl,a.vss_credentials_token_type);this.heartbeatToken=WA(this.heartbeatToken,a.heartbeat_token);
this.heartbeatInterval=VA(this.heartbeatInterval,a.heartbeat_interval);this.heartbeatRetries=VA(this.heartbeatRetries,a.heartbeat_retries);this.heartbeatSoftFail=TA(this.heartbeatSoftFail,a.heartbeat_soft_fail);this.jn=TA(this.jn,a.ithb);this.relativeLoudness=VA(this.relativeLoudness,a.relative_loudness);AD(this.Xa)&&(this.adModule=!0,this.rd.push("ad"));a.adaptive_fmts&&(this.adaptiveFormats=a.adaptive_fmts);void 0!=a.atc&&(this.wj=a.atc);a.license_info&&(this.Ob=RD(a.license_info));a.allow_embed&&
(this.allowEmbed="1"==a.allow_embed);a.backgroundable&&(this.backgroundable="1"==a.backgroundable);a.autonav&&(this.vk="1"==a.autonav);a.autoplay&&(this.Lg="1"==a.autoplay);if(a.iv_load_policy)this.sf=UA(this.sf,a.iv_load_policy,tB);else{var b=sD(this.Xa);b&&b.loadPolicy&&(this.sf=yca[b.loadPolicy])}a.cc_lang_pref&&(this.uf=WA(a.cc_lang_pref,this.uf));a.cc_load_policy&&(this.vf=UA(this.vf,a.cc_load_policy,tB));a.cached_load&&(this.Wl=TA(this.Wl,a.cached_load));"0"==a.dash&&(this.Hq=!0);if(a.dashmpd){this.hd=
g.Kg(a.dashmpd,{cpn:this.clientPlaybackNonce});b=/\/s\/([0-9A-F.]+)/;var c=b.exec(this.hd);c&&(c=Xy(c[1]),this.hd=this.hd.replace(b,"/signature/"+c))}a.delay&&(this.ke=Nb(a.delay));a.drm_session_id&&(this.drmSessionId=a.drm_session_id);void 0!=a.end&&(this.clipEnd=a.end);a.fair_play_cert&&window.atob&&(this.fairPlayCert=(0,window.atob)(a.fair_play_cert));a.fmt_list&&(this.fmtList=a.fmt_list);a.fresca_preroll&&this.rd.push("fresca");a.heartbeat_preroll&&this.rd.push("heartbeat");a.idpj&&(this.jh=Nb(a.idpj));
a.ismb&&(this.We=Nb(a.ismb));a.is_listed&&(this.isListed=TA(this.isListed,a.is_listed));a.paid_content_overlay_duration_ms&&(this.Qu=Nb(a.paid_content_overlay_duration_ms));a.paid_content_overlay_text&&(this.VH=a.paid_content_overlay_text);a.url_encoded_fmt_stream_map&&(this.Ih=a.url_encoded_fmt_stream_map);a.hls_formats&&(this.hlsFormats=a.hls_formats);a.hlsvp&&(this.hlsvp=a.hlsvp);a.length_seconds&&(this.lengthSeconds=Nb(a.length_seconds));a.live_chunk_readahead&&(this.liveChunkReadahead=VA(this.liveChunkReadahead,
a.live_chunk_readahead));a.live_start_walltime&&(this.liveStartWalltime=Nb(a.live_start_walltime));a.live_manifest_duration&&(this.wn=Nb(a.live_manifest_duration));a.ldpj&&(this.si=Nb(a.ldpj));a.player_params&&(this.playerParams=a.player_params);a.partnerid&&(this.Fe=Nb(a.partnerid));a.probe_url&&(this.probeUrl=Kv(g.Kg(a.probe_url,{cpn:this.clientPlaybackNonce})));a.profile_picture&&(this.profilePicture=WA(a.profile_picture,this.profilePicture));a.pyv_billable_url&&g.Gv(a.pyv_billable_url)&&(this.al=
a.pyv_billable_url);a.pyv_conv_url&&g.Gv(a.pyv_conv_url)&&(this.bl=a.pyv_conv_url);a.video_masthead_ad_quartile_urls&&(b=a.video_masthead_ad_quartile_urls,this.Cn=b.quartile_0_url,this.ds=b.quartile_25_url,this.es=b.quartile_50_url,this.gs=b.quartile_75_url,this.Zr=b.quartile_100_url);"1"==a.spacecast_playback&&(this.rd.push("spacecast"),this.spacecastModule=!0,this.Rg.XH=!0);a.spacecast_addrs&&(this.spacecastModule=!0,b={},b.addresses=a.spacecast_addrs.split(","),b.probe=!0,a.spacecast_query_params&&
(b.applianceQueryParams=a.spacecast_query_params),this.Rg.init=b);0<this.startSeconds||(this.dn=this.startSeconds=VA(this.startSeconds,a.start||a.startSeconds));null!=a.live_utc_start&&(this.liveUtcStartSeconds=(0,window.parseInt)(a.live_utc_start,10));void 0==a.start||"1"==a.resume||this.oa||(this.clipStart=a.start);a.two_stage_token&&(this.cg=a.two_stage_token);a.url_encoded_third_party_media&&(this.Eh=tr(a.url_encoded_third_party_media));a.watch_ajax_token&&(this.watchAjaxToken=a.watch_ajax_token);
a.ypc_module&&this.rd.push("ypc");a.ypc_clickwrap_module&&this.rd.push("ypc_clickwrap");a.ypc_offer_button_formatted_text&&(this.ypcOfferButtonFormattedText=g.aq(a.ypc_offer_button_formatted_text)||null);this.bj=WA(this.bj,a.ucid);(0,g.G)("baseUrl uid oeid ieid ppe engaged subscribed".split(" "),function(b){a[b]&&(this.Dd[b]=a[b])},this);
this.Dd.focEnabled=TA(this.Dd.focEnabled,a.focEnabled);this.Dd.rmktEnabled=TA(this.Dd.rmktEnabled,a.rmktEnabled);this.Bb=a;zD(this,a,!1);DD(this)?Ur()&&this.fairPlayCert&&(this.zg=!0):this.adaptiveFormats&&!this.oa?(GD(this,dz(HD(this,this.adaptiveFormats),this.Ob,this.lengthSeconds,void 0)),Zy(this.ka)&&(this.zg=!0)):this.hd&&(this.Wh=!0);a.adpings&&(this.Tp=a.adpings?g.sr(a.adpings):null);a.feature&&(this.Ti=a.feature);a.referrer&&(this.referrer=a.referrer);a.multifeed_metadata_list&&(this.ig=tr(a.multifeed_metadata_list));
this.clientScreenNonce=WA(this.clientScreenNonce,a.csn);this.rootVeType=VA(this.rootVeType,a.root_ve_type);this.Ak=VA(this.Ak,a.kids_age_up_mode);a.unplugged_location_info&&(this.dg=a.unplugged_location_info);a.unplugged_partner_opt_out&&(this.Gh=WA("",a.unplugged_partner_opt_out));a.partial_spherical&&(this.partialSpherical="1"==a.partial_spherical);a.fflags&&(b=g.rr(a.fflags),b.enable_spherical_kabuki&&(this.Mq="true"==b.enable_spherical_kabuki));this.pi=WA(this.pi,a.internal_ip_override);this.innertubez=
WA(this.innertubez,a.innertubez)};
g.h.qc=function(){return!this.oa||this.Ne};
g.h.Wz=function(a){(this.xe=a)&&"fairplay"==this.xe.flavor&&(this.xe.fairPlayCert=this.fairPlayCert);FD(this)};
g.h.Ib=function(){return!(!this.ka||!this.ka.l)};
g.h.XE=function(a){if(!this.ga()){if(this.ul){var b=oz(a,this.ul);b&&(a=b)}GD(this,a);this.oa&&this.ka.subscribe("refresh",this.lu,this);g.KC("mrc");Zy(this.ka)&&(this.zg=!0);FD(this)}};
g.h.WE=function(a){this.ga()||(this.ze=!1,this.O("dataloaderror",new g.LB("manifest.net.retryexhausted",!0,{backend:"manifest",rc:a.status})))};
g.h.lu=function(){this.ga()||(this.ka.isLive||this.ka.unsubscribe("refresh",this.lu,this),this.kq())};
g.h.kq=function(){var a=this.ka.Oy(this.un);0<a.length&&(this.O("cuepointupdated",a),this.un+=a.length)};
g.h.jA=function(a){if(this.spacecastFormatMap){var b=HD(this,this.spacecastFormatMap);return XB(a,this.isAd(),b,JD(this,a)).then(this.rl,void 0,this).then(this.Rq,void 0,this)}return js()};
g.h.gA=function(a,b){var c=b||DD(this);if(this.ka&&!c){if(!a.C){c=this.ka;var d=this.oa;if(!c.g["0"]){var e=new Fu(0,0,0,void 0,void 0,"auto");e=new Lu("0","",void 0,e);c.g["0"]=d?new vy(new g.Vx("http://www.youtube.com/videoplayback"),e,"fake"):new g.Ry(new g.Vx("http://www.youtube.com/videoplayback"),e,new g.Kw(0,0),new g.Kw(0,0),0,window.NaN)}}return KA(a.R,this.ka,this.xe,!1,IB(a)).then(this.Yo,void 0,this)}return js()};
g.h.hA=function(a){if(this.hlsFormats){var b=HD(this,this.hlsFormats);return VB(a,this.isAd(),b,this.We).then(this.rl,void 0,this)}return js()};
g.h.kA=function(a){if(this.Eh&&this.Nr){var b=this.isAd(),c=iC(this.Eh);a=lA(a.R,c,xB(a,b)).then(this.rl,void 0,this)}else a=js();return a};
g.h.iA=function(a){var b=HD(this,this.Ih,this.fmtList);if(this.hlsvp){var c=this.hlsvp;var d=this.We,e={cpn:this.clientPlaybackNonce};-1==c.indexOf("/ibw/")&&(e.ibw=d?String(d):"1369843");c={url:g.Kg(c,e),type:"application/x-mpegURL",quality:"auto",itag:"93"};b.push(c)}return XB(a,this.isAd(),b,JD(this,a)).then(this.rl,void 0,this)};
g.h.Yo=function(a){this.Ia=a;/^r/.test(this.clientPlaybackNonce)&&(this.Ia.videoInfos.length&&1080<this.Ia.videoInfos[0].video.g&&(this.If=!0),this.Ib()&&(this.If=!0));a=this.Ia?this.Ia.audioTracks:[];a=a.concat(this.Rj);for(var b=0;b<this.Sh.length;b++)for(var c=this.Sh[b],d=0;d<a.length;d++){var e=a[d],f=e.dc.id==c.audioTrackId;if(e.dc.isDefault&&b==this.Yl||f){if(c.captionTrackIndices)for(f=0;f<c.captionTrackIndices.length;f++)e.captionTracks[f]=this.captionTracks[c.captionTrackIndices[f]];g.t(c.defaultCaptionTrackIndex)&&
(e.pm=this.captionTracks[c.defaultCaptionTrackIndex]);g.t(c.forcedCaptionTrackIndex)&&(e.ai=this.captionTracks[c.forcedCaptionTrackIndex]);e.bq=c.visibility||"UNKNOWN"}}};
g.h.rl=function(a){this.vh=a;this.Yo(new gA((0,g.I)(this.vh,function(a){return a.Se()})))};
g.h.Rq=function(){var a=Xk(this.Ia.videoInfos,function(a,c){return c.video.isAccelerated&&(!a||a.height<c.video.height)?c.video:a},null);
a&&(this.Zi=this.Vi=a=Wu(a.quality,a.quality,!0))};
g.h.Yc=function(){var a={};this.Ba&&(a.fmt=Ku(this.Ba),this.Hc&&Ku(this.Hc)!=Ku(this.Ba)&&(a.afmt=Ku(this.Hc)));a.plid=this.playbackId;a.ei=this.eventId;a.list=this.playlistId;a.cpn=this.clientPlaybackNonce;this.videoId&&(a.v=this.videoId);this.xj&&(a.infringe=1);this.Jf&&(a.splay=1);this.oa&&(a.live=this.Ne?"dvr":"live");this.Lg&&(a.autoplay=1);this.il&&(a.sdetail=this.il);this.Fe&&(a.partnerid=this.Fe);this.osid&&(a.osid=this.osid);return a};
g.h.getStoryboardFormat=function(){if(this.Xa&&this.Xa.storyboards){var a=this.Xa.storyboards;return(a=a.playerStoryboardSpecRenderer||a.playerLiveStoryboardSpecRenderer)&&a.spec||null}return this.Bb.storyboard_spec||this.Bb.live_storyboard_spec};
g.h.kd=function(){return this.ka&&!(0,window.isNaN)(this.ka.kd())?this.ka.kd():this.Ib()?0:this.lengthSeconds};
g.h.tb=function(){return this.ka&&!(0,window.isNaN)(this.ka.tb())?this.ka.tb():0};
g.h.Nc=function(){return!this.ga()&&!(!this.videoId&&!this.Eh)};
g.h.Wb=function(){return QD(this)&&!this.Wh&&!this.zg};
g.h.Dv=function(){var a={format:"RAW",method:"GET",withCredentials:this.rv};this.Ah&&this.visitorData&&(a.headers={"X-Goog-Visitor-Id":this.visitorData});0<this.Fm&&(a.timeout=this.Fm);var b=this.Gm;0<this.nl&&(b=g.xr(b,{playerretry:this.nl}));this.jr?Ty(gs,b,a).then(jr(this.ru),jr(this.qF),this):(a.context=this,a.ib=this.ru,a.onError=this.Sm,g.Fr(b,a));g.KC("vir");g.KC("vir",void 0,"video_to_ad");this.ir=g.Mt()};
g.h.kc=function(a,b){if(30==this.Fe){var c=this.Zf["default.jpg"];return c?c:this.videoId?g.Kg("//docs.google.com/vt",{id:this.videoId,authuser:this.jc,authkey:this.authKey}):"//docs.google.com/images/doclist/cleardot.gif"}b||(b="hqdefault.jpg");return(c=this.Zf[b])||a.I||"pop1.jpg"==b||"pop2.jpg"==b||"sddefault.jpg"==b||"hq720.jpg"==b||"maxresdefault.jpg"==b?c:AB(a,this.videoId,b)};
g.h.ru=function(a){if(!this.ga()){var b=a.responseText;if(b){this.ze=!1;var c=g.sr(b);this.Ir&&OB(c);"fail"==c.status?this.O("onStatusFail",c):(g.KC("virc"),g.KC("virc",void 0,"video_to_ad"),(0,g.G)(g.vX,function(a){a in this.Bb&&(c[a]=this.Bb[a])},this),this.setData(c),QD(this)?FD(this):this.O("dataloaderror",new g.LB("manifest.net.retryexhausted",!0,{successButUnplayable:"1"})))}else this.Sm(a)}};
g.h.qF=function(a){this.Sm(a.g)};
g.h.Sm=function(a){if(!this.ga()){var b=a?a.status:-1;a=this.nl>=this.Oo||400==b;var c=200<b?"manifest.net.badstatus":"manifest.net.connect",d=((g.Mt()-this.ir)/1E3).toFixed(3);b={backend:"gvi",rc:b,rt:d};a&&this.Oo?(c="manifest.net.retryexhausted",b.urllen=String(this.Gm.length)):a||(this.nl++,this.Cv.start());this.O("dataloaderror",new g.LB(c,a,b))}};
g.h.getPlayerResponse=function(){return this.Xa};
g.h.getPlaylistId=function(){return null};
g.h.Eb=function(){return this};
g.h.kk=function(a){return a.getVideoUrl(this.videoId)};
g.h.ue=function(){return!!this.ka&&this.ka.ue()};
g.h.we=function(){return!!this.ka&&this.ka.we()};
g.h.Hd=function(){return!!this.ka&&this.ka.Hd()};
g.h.xg=function(){return!!this.ka&&this.ka.xg()};
g.h.isAd=function(){return!!this.adFormat};
g.vX="oauth_token ypc_buy_url ypc_full_video_message ypc_item_thumbnail ypc_item_title ypc_item_url ypc_module ypc_offer_button_text ypc_offer_button_formatted_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_offer_type ypc_overlay_timeout ypc_preview ypc_signin_message ypc_vid".split(" ");yD="author cc_asr cc_load_policy iv_load_policy iv_new_window keywords oauth_token requires_purchase rvs subscribed title ttsurl ypc_buy_url ypc_full_video_length ypc_item_thumbnail ypc_item_title ypc_item_url ypc_offer_button_text ypc_offer_button_formatted_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_preview ypc_price_string ypc_video_rental_bar_text".split(" ");
rD=["annotations","captions","storyboard"];var faa={CJ:"YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE",AUTHENTICATION_EXPIRED:"ERROR_AUTHENTICATION_EXPIRED",EJ:"ERROR_AUTHENTICATION_MALFORMED",FJ:"ERROR_AUTHENTICATION_MISSING",IJ:"ERROR_BAD_REQUEST",UJ:"ERROR_CGI_PARAMS_MALFORMED",VJ:"ERROR_CGI_PARAMS_MISSING",jK:"YTP_DEVICE_FALLBACK",rK:"YTP_ERROR_LICENSE",sK:"YTP_ERROR_VIDEO_UNAVAILABLE",wK:"YTP_ERROR_FORMAT_UNAVALIABLE",yK:"YTP_ERROR_GEO_FAILURE",LK:"YTP_ERROR_GENERIC_WITHOUT_LINK",MK:"YTP_HTML5_FLASH_DEPRECATED",NK:"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK",
TK:"YTP_ERROR_INVALID_DRM_MESSAGE",IL:"YTP_ERROR_PURCHASE_NOT_FOUND",JL:"YTP_ERROR_PURCHASE_REFUNDED",OL:"YTP_ERROR_RENTAL_EXPIRED",PJ:"YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED",QJ:"YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED",SJ:"YTP_ERROR_CAST_TOKEN_FAILED",RJ:"YTP_ERROR_CAST_TOKEN_EXPIRED",TJ:"YTP_ERROR_CAST_TOKEN_MALFORMED",SL:"YTP_ERROR_SERVER_ERROR",cM:"YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK",fM:"YTP_ERROR_STREAM_LICENSE_NOT_FOUND",dM:"YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",eM:"YTP_ERROR_STREAMING_NOT_ALLOWED",
QL:"YTP_ERROR_RETRYABLE_ERROR",mM:"YTP_ERROR_TOO_MANY_STREAMS_PER_USER",lM:"YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",qM:"YTP_ERROR_UNSUPPORTED_DEVICE",rM:"YTP_ERROR_VIDEO_FORBIDDEN",sM:"YTP_ERROR_VIDEO_NOT_FOUND"},eE={300:"YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",301:"YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE",303:"YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK",304:"YTP_ERROR_TOO_MANY_STREAMS_PER_USER",305:"YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",400:"YTP_ERROR_VIDEO_NOT_FOUND",401:"YTP_ERROR_GEO_FAILURE",
402:"YTP_ERROR_STREAMING_NOT_ALLOWED",403:"YTP_ERROR_UNSUPPORTED_DEVICE",405:"YTP_ERROR_VIDEO_FORBIDDEN",500:"YTP_ERROR_PURCHASE_NOT_FOUND",501:"YTP_ERROR_RENTAL_EXPIRED",502:"YTP_ERROR_PURCHASE_REFUNDED",5E3:"ERROR_BAD_REQUEST",5001:"ERROR_CGI_PARAMS_MISSING",5002:"ERROR_CGI_PARAMS_MALFORMED",5100:"ERROR_AUTHENTICATION_MISSING",5101:"ERROR_AUTHENTICATION_MALFORMED",5102:"ERROR_AUTHENTICATION_EXPIRED",5200:"YTP_ERROR_CAST_TOKEN_MALFORMED",5201:"YTP_ERROR_CAST_TOKEN_EXPIRED",5202:"YTP_ERROR_CAST_TOKEN_FAILED",
5203:"YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED",5204:"YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED",6E3:"YTP_ERROR_INVALID_DRM_MESSAGE",7E3:"YTP_ERROR_SERVER_ERROR",8E3:"YTP_ERROR_RETRYABLE_ERROR"};var zca=tX&&4>TR?.1:0,yba=new pE;pE.prototype.g=null;pE.prototype.getDuration=function(){return this.duration||0};
pE.prototype.getCurrentTime=function(){return this.currentTime||0};
pE.prototype.l=function(){this.hasAttribute("controls")&&this.setAttribute("controls","true")};g.r(qE,g.J);g.h=qE.prototype;g.h.Oc=function(){this.g.ended&&this.xb(0);!this.Zc()&&this.l&&(g.Q(Error("playVideo without src")),tE(this,this.l.Of),this.l.g||this.load());var a=this.play();!a&&tX&&7<=TR&&g.at(this,"playing",(0,g.A)(function(){g.or((0,g.A)(this.Uq,this,this.getCurrentTime(),0),500)},this));
return a};
g.h.Uq=function(a,b){this.g.paused||this.getCurrentTime()>a||10<b||(this.play(),g.or((0,g.A)(this.Uq,this,this.getCurrentTime(),b+1),500))};
g.h.xb=function(a){0<this.g.readyState&&(tX&&4>TR&&(a=Math.max(.1,a)),this.g.currentTime=a)};
g.h.cf=function(){!this.o&&this.Zc()&&(nA&&0<this.getCurrentTime()&&this.xb(0),this.g.removeAttribute("src"),this.load(),sE(this,null))};
g.h.addEventListener=function(a,b){this.B.ea(a,b,!1,this);if(!this.A[a]){var c=(0,g.A)(this.FB,this);this.g.addEventListener(a,c);this.A[a]=c}};
g.h.removeEventListener=function(a,b){this.B.Pa(a,b,!1,this)};
g.h.dispatchEvent=function(a){return this.B.dispatchEvent(a)};
g.h.nq=function(){this.C&&!this.g.muted&&(Ax(),this.g.muted=!0)};
g.h.T=function(){this.F&&this.removeEventListener("volumechange",this.nq);g.J.prototype.T.call(this)};g.r(EE,g.Ge);EE.prototype.preventDefault=function(){g.Ge.prototype.preventDefault.call(this);this.g&&this.g.preventDefault()};
EE.prototype.stopPropagation=function(){g.Ge.prototype.stopPropagation.call(this);this.g&&this.g.stopPropagation()};g.TE=g.rf(function(){var a="";try{var b=g.zd("CANVAS").getContext("webgl");b&&(b.getExtension("WEBGL_debug_renderer_info"),a=b.getParameter(37446),a=a.replace(/[ :]/g,"_"))}catch(c){}return a});g.FE.prototype.gb=function(){return g.T(this,8)&&!g.T(this,64)&&!g.T(this,2)};
g.FE.prototype.isError=function(){return g.T(this,128)};
var GE=!1;WE.prototype.isEmpty=function(){return this.endTime==this.startTime};YE.prototype.update=function(){var a=this.l.l()||0,b=g.eF(this.l);if(a!=this.g||bF(this,a,b)){var c;if(!(c=a<this.g||a-this.g>b-this.C+2||bF(this,a,b))){var d=this.l.Yc();c=d.volume;var e=c!=this.K;d=d.muted;d!=this.I?(this.I=d,c=!0):(!e||0<=this.B||(this.K=c,this.B=b),c=b-this.B,0<=this.B&&2<c?(this.B=-1,c=!0):c=!1)}c&&(g.ZE(this),this.o=a);this.C=b;this.g=a}};var gF={other:1,none:2,wifi:3,cellular:7};g.r(jF,g.J);
jF.prototype.B=function(a){if(!this.ga()&&(a=0<=a?a:g.eF(this.g),"PL"==this.o&&(!g.dc(this.l)||a>=this.A+30)&&(g.iF(this,a,"vps",[this.o]),this.A=a),!g.dc(this.l)&&!this.sa)){mF(this,a);var b=a,c=this.g.F(),d=c.droppedVideoFrames,e=d-this.aa;if(d>c.totalVideoFrames||5E3<e)this.onError("html5.badframedropcount","df."+d+";tf."+c.totalVideoFrames);else 0<e&&g.iF(this,b,"df",[e]);this.aa=d;!this.g.g.experiments.g("disable_webgl_reporting")&&0<this.C&&(g.iF(this,a,"glf",[this.C]),this.C=0);a={event:"streamingstats"};
this.g.videoData.Ba&&(a.fmt=Ku(this.g.videoData.Ba),(b=this.g.videoData.Hc)&&Ku(b)!=a.fmt&&(a.afmt=Ku(b)));a.cpn=this.g.videoData.clientPlaybackNonce;a.ei=this.g.videoData.eventId;a.el=ZD(this.g.videoData,this.g.g);a.docid=this.g.videoData.videoId;a.ns=this.g.g.Wa;a.fexp=this.g.g.experiments.experimentIds.toString();a.cl=this.g.g.Ta;this.g.videoData.adFormat&&(a.adformat=this.g.videoData.adFormat);this.g.videoData.oa&&(a.live=this.g.videoData.Ne?"dvr":"live");a.seq=this.ya++;g.kc(a,this.g.g.B);a=
g.Kg("//"+this.g.g.Nh+"/api/stats/qoe",a);b="";for(var f in this.l)null==this.l[f]?g.Q(Error("Stats report key has invalid value: "+f),"WARNING"):b+="&"+f+"="+this.l[f].join(",");this.g.g.experiments.g("html5_qoe_post")?bs(a,void 0,b):bs(a+b);this.l={}}};
jF.prototype.ma=function(){this.g.videoData.xe&&rF(this,"drm-"+this.g.videoData.xe.flavor)};
jF.prototype.onError=function(a,b){var c=g.eF(this.g);oF(this,c,a,b);mF(this,c);nF(this)};
jF.prototype.T=function(){g.J.prototype.T.call(this);window.clearInterval(this.R)};
var wX={},pF=(wX[5]="N",wX[-1]="N",wX[3]="B",wX[0]="EN",wX[2]="PA",wX[1]="PL",wX);sF.prototype.send=function(a){if(!this.R){var b=uF(this);b=g.Kg(this.zb,b);if(this.F)this.K&&(a={method:"POST",jb:{atr:this.K}},this.Ah&&this.visitorData&&(a.headers={"X-Goog-Visitor-Id":this.visitorData}),g.Fr(b,a));else{if(this.F)var c=null;else{c=this.I&&zr();var d=this.Ah&&!!this.visitorData;if(c||d){var e={};c&&(e.Authorization="Bearer "+this.I);d&&(e["X-Goog-Visitor-Id"]=this.visitorData);c={headers:e,withCredentials:!0,Ac:a}}else c=null}c?g.Fr(b,c):g.as(b,a)}this.R=!0}};
sF.prototype.g=function(a){void 0==a&&(a=window.NaN);return(1*a.toFixed(3)).toString()};g.r(vF,g.J);g.h=vF.prototype;g.h.ZE=function(a,b){if(!this.ga()){this.F=window.NaN;this.o.update();var c=aF(this.o),d=yF(this,c);b&&(d.B=a);var e=400<this.K;!(1<c.length)&&c[0].isEmpty()||e||(d.l=wF(this,!0,a));d.send();this.K++}};
g.h.onError=function(a,b){if(!this.ga())this.l.onError(a,b)};
g.h.pl=function(a){var b=this.g.g,c=this.g.videoData,d={ns:b.Wa,el:ZD(c,b),eurl:b.Ra,fmt:c.Ba?Ku(c.Ba):0,html5:1,list:c.playlistId,plid:c.playbackId,cpn:c.clientPlaybackNonce,ei:c.eventId,ps:b.g,noflv:1,st:this.g.l(),video_id:c.videoId,metric:a};bE(c,b)&&(d.autoplay="1");"heartbeat"==a&&(d.tpmt=$E(this.o));g.Ka(d,b.B);a=b.baseYtUrl;if(b.l||b.experiments.g("player_cardio_base_url_killswitch")&&(g.BB(b)||"gaming"==b.g))a=b.protocol+"://www.youtube.com/";AF(this,g.Kg(a+"live_204",d))};
g.h.Ze=function(){};
g.h.T=function(){g.J.prototype.T.call(this);g.qr(this.F);this.F=window.NaN;var a=this.o;window.clearInterval(a.F);a.F=window.NaN;g.qr(this.A)};g.r(FF,Nv);g.h=FF.prototype;g.h.Ca=function(){return wL(this.app)};
g.h.Ts=function(a,b,c,d,e){return pW(this.app,a,b,c,d,e)};
g.h.mC=function(a,b,c){this.app.g.L.add(a,{Jj:b,kp:c})};
g.h.nC=function(a,b){jW(this.app,a,b||this.playerType)};
g.h.rh=function(a){return ZV(this.app,a)};
g.h.Gi=function(a,b,c,d){fW(this.app,a,c||this.playerType,b,d)};
g.h.Yn=function(a,b,c){var d=this.app;b=b||this.playerType||1;c=c||!1;d.ya.get(b+$A(a))||(d.g.Rb&&OB(a),a=new g.qD(a),d.ya.get(b+a.videoId)||(a.Yk=!0,c?(c=g.V(d,b),gW(d,b)):c=HV(d,b),vK(c,a,(0,g.A)(d.Yc,d)),yK(c,!0),d.ya.set(b+a.videoId,c)))};
g.h.sh=function(a,b){nW(this.app,a,b)};
g.h.Ei=function(a){oW(this.app,a)};
g.h.Md=function(a,b,c){xW(this.app,this.app.getCurrentTime()+a,b,c,this.playerType)};
g.h.JC=function(a){if(a){var b=this.getPlaylistId();if(!b||b==a.list){var c=a.video;(b=this.app.C)?this.isFullscreen()&&((c=c[b.Oa])&&c.encrypted_id!=b.Eb().videoId||(a.index=b.Oa)):NV(this.app,{list:a.list,index:a.index,playlist_length:c.length});ZF(this.app.C,a);this.la("onPlaylistUpdate")}}else a=this.app,OV(a),a.l.la("onPlaylistUpdate")};
g.h.IC=function(){Wt()};
g.h.KC=function(a,b){var c=g.V(this.app,this.playerType||1);c&&c.g.jf(a,b)};
g.h.getPlayerResponse=function(){var a=g.V(this.app,this.playerType);return a?a.g.getPlayerResponse():null};
g.h.getStoryboardFormat=function(){return JV(this.app).getStoryboardFormat()};
g.h.qC=function(){var a=this.app.g;return{Rb:a.Rb,ob:a.ob}};
g.h.Y=function(){var a=Nv.prototype.Y.call(this),b=g.V(this.app,this.playerType);b&&(b=b.g,a.backgroundable=b.backgroundable,a.eventId=b.eventId,a.cpn=b.clientPlaybackNonce,a.isLive=b.oa,a.itct=b.kh,a.paidContentOverlayText=LD(b),a.paidContentOverlayDurationMs=MD(b),null!=b.liveUtcStartSeconds&&(a.liveUtcStartSeconds=b.liveUtcStartSeconds));return a};
g.h.getCurrentTime=function(a){return a?this.app.getCurrentTime(a):Nv.prototype.getCurrentTime.call(this)};
g.h.getDuration=function(a){return a?this.app.getDuration(a):Nv.prototype.getDuration.call(this)};
g.h.Qf=function(a){if(3==this.Ca())return g.xL(this.app.A).WA();var b=JV(this.app),c=g.V(this.app,a)||g.V(this.app),d=this.app.qc(),e=b.clipEnd;b=b.clipStart;var f=this.getCurrentTime(a);a=this.getDuration(a);var k=hL(c),l=RK(c),m=g.V(this.app,void 0);if(m){var n=window.NaN;m.l&&(n=AE(m.l));m=0<=n?n:m.getCurrentTime()}else m=0;return{allowSeeking:d,clipEnd:e,clipStart:b,current:f,displayedStart:-1,duration:a,ingestionTime:k,isPeggedToLive:l,loaded:m,seekableEnd:iL(c),seekableStart:c.tb()}};
g.h.Un=function(a){return MV(this.app,a)};
g.h.Qn=function(a){return LV(a)};
g.h.it=function(a,b){var c=g.V(this.app,this.playerType);if(c){var d=Wu(a,b||a,!0);YK(c,"m",d)}};
g.h.pC=function(){var a=JV(this.app);var b=this.app.getCurrentTime();if(a.ka&&a.oa&&a.Ba){var c=a.ka.g[a.Ba.id];c&&c.index?(a=c.index.Cf(b),c=c.index.nd(a),b={sequence:a,elapsed:Math.floor(1E3*(b-c))}):b=null}else b=null;return b};
g.h.Ig=function(a){var b=this.app,c=g.V(b,this.playerType);c&&b.g.Mb.has(a.toString())&&c.C&&(b=xF(c.C,"engage"),b.C=a,b.send(void 0))};
g.h.Hi=function(a,b,c){var d=this.app.A.A;d&&d.xi()&&d.Kn(a,b,c)};
g.h.uC=function(a,b){var c=this.app.A.I;c&&c.X&&qT(c.X,a,b)};
g.h.Pf=function(){var a=g.V(this.app,this.playerType);return a?a.Hn():JV(this.app).Rj};
g.h.ao=function(a){3==this.Ca()&&g.xL(this.app.A).yi("control_set_audio_track",a);var b=g.V(this.app,this.playerType),c;if(c=b)if(c=!b.ga()&&!g.T(b.o,128)&&!!b.g.Ia.g){c=b.B;if(c.ga())a=!0;else{var d=c.F;a=a.id;d.A="m";d.B=d.H.g[a];d.U=d.B;c.O("audioformatchange",new $F(d.U,d.o,d.A));c.o&&!c.o.g.remove?a=!1:(GI(c),LH(c.g),LH(c.A),g.Up(c.U),a=!0)}c=!a}c&&(VK(b),TK(b))};
g.h.Xn=function(){var a=g.V(this.app,this.playerType);return a.g.Ia?a.g.Ia.audioTracks:[]};
g.h.rC=function(){var a=g.V(this.app,this.playerType);return a&&a.g.Ba?g.av(YJ(a.sa,a.g)):"unknown"};
g.h.sC=function(){return ev()};
g.h.EC=function(a,b){var c=this.app;c.xd=a;c.Bc=b;c.l.O("sizestylechange",a,b);c.H.Be()};
g.h.oC=function(){var a=this.app.A.H;a&&a.My()};
g.h.HC=function(){var a=this.app.A.I;a&&(a.Ha=!1,a.hf())};
g.h.vC=function(){var a=this.app.A.I;a&&(a.Ha=!0,a.hf())};
g.h.df=function(){var a=this.isFullscreen()||oB(this.app.g);return this.Ai()?4:Zv()?3:a?2:this.app.Mb?1:this.app.Ab?5:0};
g.h.isFullscreen=function(){return this.app.g.Ka};
g.h.xC=function(){return this.app.Ab};
g.h.Ai=function(){var a=g.V(this.app,this.playerType);return!!a&&a.Ga};
g.h.GC=function(){return!0};
g.h.ht=function(a){a=g.wN(this.app.H,a);return{left:a.left,top:a.top,width:a.width,height:a.height}};
g.h.DC=function(a){this.app.g.enableSafetyMode=a};
g.h.zC=function(a){Hs();uW(this.app,a?2:0)};
g.h.Wn=function(){var a=this.app.A.B;a&&a.created&&a.destroy();(a=g.V(this.app))&&fL(a);(a=this.app.A.K)&&a.Qz()&&g.vL(this.app.U,!0)};
g.h.cf=function(){var a=this.app.g;!a.experiments.g("disable_new_pause_state3")&&CB(a)&&"blazer"!=a.g?this.Wn():Nv.prototype.cf.call(this)};
g.h.kr=function(){return jL(g.V(this.app,this.playerType),!0)};
g.h.Lk=function(a){this.app.A.l.sp(a,!0)};
g.h.Hg=function(){var a=this.app.A.l;return a?a.Dm():null};
g.h.Zn=function(){this.app.A.l.vv()};
g.h.wC=function(){var a=g.V(this.app,this.playerType);if(!a)return!1;a=a.g;return!!a&&a.Nc()&&!!a.Ba&&a.Ba.video.isAccelerated&&a.Ba.video.o};
g.h.isPeggedToLive=function(a){return this.app.isPeggedToLive(void 0===a?!0:a)};
g.h.CC=function(a){var b=this.app;b.Mb=a;b.l.O("minimized")};
g.h.BC=function(a){this.app.Ab=a};
g.h.Bi=function(a){return YV(this.app,a)};
g.h.ct=function(a){if(a){var b=this.app.A.o;b&&b.Cs(a,!1)}};
g.h.yC=function(a){var b=this.app;b.g.tf=a;b.F&&(a=b.F,a.C&&g.ZE(a.C.o),b.g.U&&zW(b))};
g.h.ae=function(a){this.O("aduxclicked",a)};
g.h.setVolume=function(a,b){Sv(this,a,b)};
g.h.mute=function(a){Tv(this,a)};
g.h.Ee=function(a){Uv(this,a)};
g.h.Rz=function(){return this.app.X};
g.h.Di=function(a){if("annotations_module"==a){var b=this.app.A.A;b&&!b.loaded&&b.load()}Nv.prototype.Di.call(this,a)};
g.h.Kk=function(a){if("annotations_module"==a){var b=this.app.A.A;b&&b.loaded&&b.unload()}Nv.prototype.Kk.call(this,a)};
g.h.Pc=function(a,b,c){if(!b)return null;var d=this.app.A;switch(a){case "ad":return(a=d.B)&&a.Ds&&a.Ds(b,c);case "remote":return(a=g.xL(d))&&a.VA(b,c);case "unplugged":return(a=g.BB(g.U(d.g))?d.C:null)&&a.B(b,c);case "spacecast":return(c=d.U)&&c.C(b);case "annotations_module":return(a=d.A)&&a.DA(b,c);case "creatorendscreen":return(a=d.F)&&a.JA(b,c)}return Nv.prototype.Pc.call(this,a,b,c)};
g.h.Fg=function(a){var b=this.app.A;switch(a){case "ad":return(b=b.B)&&b.Es&&b.Es();case "remote":return g.xL(b)&&["casting","receivers","currentReceiver","quickCast"];case "annotations_module":return(b=b.A)&&b.EA();case "creatorendscreen":return(b=b.F)&&b.KA();case "unplugged":return(g.BB(g.U(b.g))?b.C:null)&&"settingsMenuShown hideSettingsMenu showSettingsMenu getStoryboardFrameData getStoryboardFrameIndex getStoryboardFrameIntervalSeconds getStoryboardMaxFrameIndex".split(" ")}return a?Nv.prototype.Fg.call(this,
a):(a=Nv.prototype.Fg.call(this),b.B&&a.push("ad"),g.xL(b)&&a.push("remote"),b.A&&a.push("annotations_module"),b.F&&a.push("creatorendscreen"),g.BB(g.U(b.g))&&b.C&&a.push("unplugged"),a)};
g.h.Gg=function(){var a=this.app.H.Da();return{width:a.width,height:a.height}};
g.h.AC=function(a){var b=this.app.H;b.F=YA(a,!0);b.Be()};
g.h.eJ=function(){var a=this.app.A.I;a&&a.A.yb(2,!0)};
g.h.tC=function(){return g.LR(this.app.H)};
g.h.FC=function(a){var b=this.app.H;b.V=a;b.Be()};GF.prototype.reset=function(){IC("")};
GF.prototype.g=function(a,b){g.KC(a,b,"")};
GF.prototype.info=function(a,b){g.LC(a,b,"")};g.JF.prototype.Af=ba(2);g.JF.prototype.getId=function(){return this.Aa};
g.JF.prototype.toString=function(){return"CueRange{"+this.namespace+":"+this.Aa+"}["+KF(this.start)+", "+KF(this.end)+"]"};
g.JF.prototype.contains=function(a,b){return a>=this.start&&(a<this.end||a==this.end&&this.start==this.end)&&(null==b||a<b&&b<=this.end)};
var IF=1;g.JF.prototype.getId=g.JF.prototype.getId;NF.prototype.toString=function(){return this.type+this.id};g.r(g.UF,g.R);g.h=g.UF.prototype;g.h.hasNext=function(a){return this.loop||!!a||this.Oa+1<this.Lf};
g.h.te=function(a){return this.loop||!!a||0<=this.Oa-1};
g.h.Eb=function(a,b,c){a=void 0!=a?a:this.Oa;a=this.za&&a in this.za?this.za[this.ed[a]]:null;var d=null;a&&(b&&(a.autoplay="1"),c&&(a.autonav="1"),d=new g.qD(a),d.startSeconds=this.startSeconds||d.clipStart||0,this.listId&&(d.playlistId=this.listId.toString()));return d};
g.h.setShuffle=function(a){this.Sv=a;a=this.ed&&null!=this.ed[this.Oa]?this.ed[this.Oa]:this.Oa;this.ed=[];for(var b=0;b<this.za.length;b++)this.ed.push(b);this.Oa=a;this.Ck++;if(this.Sv){a=this.ed[this.Oa];for(b=1;b<this.ed.length;b++){var c=Math.floor(Math.random()*(b+1)),d=this.ed[b];this.ed[b]=this.ed[c];this.ed[c]=d}for(b=0;b<this.ed.length;b++)this.ed[b]==a&&(this.Oa=b);this.Ck++}this.O("shuffle")};
g.h.kc=function(a,b){b=b||"hqdefault.jpg";var c=this.Zf[b];if(c||a.I||"sddefault.jpg"==b||"hq720.jpg"==b||"maxresdefault.jpg"==b)return c;if(this.aw.length)return AB(a,this.aw[0],b)};
g.h.getLength=function(){return this.Lf};
g.h.Zh=function(a){if(a&&(a=a.videoId,!this.za[this.Oa]||this.za[this.Oa].video_id!=a))for(var b=0;b<this.za.length;b++)if(this.za[b].video_id==a){this.Oa=b;break}};
g.h.onReady=function(a){this.Si=a;this.ye&&g.or(this.Si,0)};
g.h.getPlaylistId=function(){return this.listId?this.listId.toString():null};
g.h.kk=function(a){return a.getVideoUrl(this.Eb().videoId,this.getPlaylistId())};
g.h.T=function(){this.Si=null;g.Fe(this.za);g.R.prototype.T.call(this)};aG.prototype.add=function(a){this.g=(this.g+1)%this.l.length;this.l[this.g]=a};
aG.prototype.clear=function(){for(var a=this.l.length,b=0;b<a;b++)this.l[b]=0;this.o=this.g=this.l.length-1};g.r(hG,g.R);hG.prototype.isPeggedToLive=function(){return this.B};qG.prototype.reset=function(){this.U=sG(this);this.F=window.NaN;this.K=0;this.g=new pG(0,0,null);this.B=8;this.A=[];this.o=[];this.C=this.H=window.NaN;this.l=this.I=0;this.L=!1};
qG.prototype.process=function(a){if(this.A.length){if(vG(this)&&this.A.length+a.byteLength<this.B){wG(this,a,0);return}var b=this.A.length,c=new window.Uint8Array(b+a.byteLength);c.set(this.A,0);c.set(new window.Uint8Array(a.buffer,a.byteOffset,a.byteLength),b);this.A=[];a=new window.DataView(c.buffer)}for(b=0;b<a.byteLength;){c=a.byteLength-b;var d=window.NaN;if(vG(this)){if(c<this.B){wG(this,a,b);return}switch(this.g.type){case 0:case 1836019574:case 1836019558:d=tG(this,a,b);break;case 1953653094:c=
a;d=b;this.I||(this.I=uw(xG(this,c,d),this.l));d=tG(this,c,d);break;case 1836476516:this.l=ww(xG(this,a,b));uG(this);d=this.g.size-8;break;case 1952867444:(0,window.isNaN)(this.C)||(c=xG(this,a,b),d=this.P?this.C:Dw(c),this.P&&Cw(c,d),(0,window.isNaN)(this.F)&&(this.F=d),this.C+=this.I,this.K+=this.I);d=this.g.size-8;break;case 1936286840:c=xG(this,a,b),d=Fw(c),this.l=Ew(c),uG(this),this.I=d,d=this.g.size-8}}else d=Math.min(this.B,c);this.g.offset+=d;this.B-=d;b+=d;if(0==this.B){for(;0!=this.g.type&&
this.g.offset==this.g.size&&this.g.g;)1835295092==this.g.type&&(this.L=!0),this.g.g.offset+=this.g.size,this.g=this.g.g;switch(this.g.type){case 0:case 1836019574:case 1836019558:case 1953653094:this.B=8;break;default:this.B=this.g.size-8}}}0<a.byteLength&&this.o.push(a)};var HG=0;g.h=IG.prototype;g.h.fI=function(a){this.status=a.status;a.ok?(this.C=a.body.getReader(),this.B?(this.I=a.headers,this.V(),this.l=new window.Uint8Array(KG(this)),OG(this)):this.C.cancel("Cancelling")):QG(this)};
g.h.JE=function(a){if(this.B){var b=a.value?a.value:null;(0,g.H)();a.done?(this.C=null,QG(this)):(this.F.sa&&PG(this)?(NG(this,b),this.B({timeStamp:(0,g.H)(),loaded:this.o})):(this.B({timeStamp:(0,g.H)(),loaded:this.o}),NG(this,b)),OG(this))}};
g.h.lt=function(a){this.K=""+a;this.L=!0;QG(this)};
g.h.be=function(a){return this.I.get(a)};
g.h.Xm=function(){return!!this.I};
g.h.wm=function(){return this.o};
g.h.ck=function(){return+this.be("content-length")};
g.h.Ar=function(){return 200<=this.status&&300>this.status&&!!this.o};
g.h.yg=function(){return!!this.A.length||(this.H||this.F.sa&&PG(this))&&0<this.g};
g.h.Nv=function(){this.yg();this.A.length||LG(this);return this.A.shift()};
g.h.jt=function(){this.yg();this.A.length||LG(this);return this.A[0]};
g.h.abort=function(){this.C&&this.C.cancel("Cancelling");this.U=this.B=null};
g.h.Vv=function(){return!0};
g.h.kv=function(){return this.L};
g.h.bo=function(){return this.K};g.h=RG.prototype;g.h.LC=function(a){if(!this.l){this.status=this.g.status;try{this.response=this.g.response}catch(b){}this.o=!0;this.A(a)}};
g.h.NC=function(){2==this.g.readyState&&this.B()};
g.h.MC=function(a){this.l||(this.status=this.g.status,this.C(a))};
g.h.Xm=function(){return 2<=this.g.readyState};
g.h.be=function(a){try{return this.g.getResponseHeader(a)}catch(b){return g.Q(b),""}};
g.h.ck=function(){return+this.be("content-length")};
g.h.wm=function(){return this.response.byteLength};
g.h.Ar=function(){return 200<=this.status&&300>this.status&&!!this.response&&!!this.response.byteLength};
g.h.yg=function(){return this.o&&!!this.response&&!!this.response.byteLength};
g.h.Nv=function(){this.yg();var a=this.response;this.response=null;return new window.Uint8Array(a)};
g.h.jt=function(){this.yg();return new window.Uint8Array(this.response)};
g.h.abort=function(){this.l=!0;this.g.abort()};
g.h.Vv=function(){return!1};
g.h.kv=function(){return!1};
g.h.bo=function(){return""};g.h=SG.prototype;g.h.wb=function(){return this.o?this.o.wb():""};
g.h.Td=function(){return this.A};
g.h.start=function(a){var b=this;WG(this,2);this.K=vca++;this.l?(this.F=sy(this.info,this.l.o,this.l.length),this.o=g.qy(this.info,this.R,this.F)):(this.F=this.info.range,this.o=g.qy(this.info,this.R));if(this.C.Wa&&2>this.info.g.g){var c=this.o.get("aitags");if(c&&(py(this.info)||Qw(this.info.ra[0]))&&this.V&&hv()){c=ub(c).split(",");var d=[];(0,g.G)(c,function(a){g.Ta(b.V,a)&&d.push(a)});
0<d.length&&this.o.set("altitags",(0,window.encodeURIComponent)(String(d.join(","))))}}this.o.set("rn",this.K.toString());0<=a&&this.o.set("rbuf",(1E3*a).toFixed().toString());a=this.o.wb();try{this.g=cH(this,a)}catch(e){this.A="net.ssl";XG(this);return}0<this.C.F&&this.L.start()};
g.h.RH=function(){this.P=0;this.info.g.A=g.Mt();var a=VG(this);a.o=g.Mt();a.l+=1;a=this.timing;a.l=(0,g.H)();a.C=a.l;a.o=0;a.L=a.l;a.K=0;a.F&&(a.F=[]);a.V=!1;a.aa=!1;a.B=0;a.H=eA(a.g);GG(a);a.P=(a.U-a.l)/1E3};
g.h.QH=function(a){if(!this.ga()){this.B=this.g.status;eH(this,!1);var b=this.timing,c=a.timeStamp;a=a.loaded;c=c>b.l&&4E12>c?c:(0,g.H)();DG(b,c,a);50>c-b.C&&EG(b)||CG(b,c,a);b=this.timing;b.o>b.ia&&b.o>b.g.policy.l&&4>this.state?WG(this,4):aH(this)&&dH(this)&&WG(this,Math.max(3,this.state))}};
g.h.PH=function(){if(!this.ga()){if(!this.I&&this.g.Xm()&&this.g.be("X-Walltime-Ms")){var a=(0,window.parseInt)(this.g.be("X-Walltime-Ms"),10);this.I=((0,g.H)()-a)/1E3}this.g.Xm()&&this.g.be("X-Restrict-Formats-Hint")&&this.C.Or&&!hv()&&g.ru("yt-player-headers-readable",!0,2592E3)}};
g.h.OH=function(){var a=this.g;if(!this.ga()&&a){this.L.stop();this.B=a.status;var b=!1;if(400<=a.status)b=!0,this.A="net.badstatus";else if(a.Ar()){var c="";bH(this)&&(c=a.jt(),2048<c.length?c="":(c=String.fromCharCode.apply(String,c),c=Av(c)?c:""));if(c){a=VG(this);g.Mt();a.l=0;a.Ge=0;a.g=0;a=this.info;var d=this.o;g.ny(a.g,d,c);a.requestId=d.get("req_id");WG(this,5)}else if(c=a.wm(),(d=!!this.F&&this.F.length)&&d!=c||a.kv())b=!0,this.A="net.closed";else{eH(this,!0);var e=ZG(this)?this.g.be("X-Bandwidth-Est"):
0;if(a=ZG(this)?this.g.be("X-Bandwidth-Est3"):0)this.aa=!0,this.C.mj&&(e=a);a=this.timing;d=(0,g.H)();e=e?(0,window.parseInt)(e,10):0;if(!a.V){a.V=!0;d=d>a.l&&4E12>d?d:(0,g.H)();DG(a,d,c);CG(a,d,c);a.I&&e?Xz(a.g,a.o/e,a.o):(e=(d-a.l)/1E3,(e<=a.g.policy.A||!a.g.policy.A)&&!a.aa&&EG(a)&&Xz(a.g,e,c),EG(a)&&Zz(a.g,c,a.B));c=a.g;d=(d-a.l)/1E3;e=a.P;var f=a.ba;c.B.g(d,a.o/d);c.o=g.Mt();f||c.g.g(1,d-e);a.A&&(a.A=!1)}a=VG(this);g.Mt();a.l=0;a.Ge=0;a.g=0;this.info.g.g=0;WG(this,6)}}else b=!0,this.A=204==a.status?
"net.nocontent":"net.connect";b&&XG(this)}};
g.h.oI=function(){if(!this.ga()){var a=(0,g.H)(),b=!1;EG(this.timing)?(a=this.timing.U,GG(this.timing),this.timing.U-a>=.8*this.C.F?(this.P++,b=5<=this.P):this.P=0):(b=this.timing,b=a-(b.l+1E3*b.H.delay)>1E3*this.C.Ma);b?($G(this),this.A="net.timeout",XG(this)):this.L.start()}};
g.h.ga=function(){return-1==this.state};
g.h.dispose=function(){Qw(this.info.ra[0])&&6!=this.state&&(this.info.ra[0].g.F=!1);WG(this,-1);this.H=null;this.L.dispose();$G(this)};
SG.DEBUG=!1;g.r(iH,g.R);yH.prototype.start=function(){this.l=!0};
yH.prototype.reset=function(){this.g=this.l=!1};zH.prototype.aa=function(a,b){switch(b.info.type){case 1:case 2:this.R(b);break;case 4:var c=b.info.g.xs(b),d=b.info,e=this.g;e&&e.g==d.g&&e.type==d.type&&(d.range&&e.range?e.range.start==d.range.start&&e.range.end==d.range.end:e.range==d.range)&&e.na==d.na&&e.l==d.l&&e.Ja==d.Ja&&(this.g=g.Ma(c).info);(0,g.G)(c,(0,g.A)(this.aa,this,a));break;case 3:mH(this.l,a,b)}};
zH.prototype.R=function(a){var b=this.l;if(1==a.info.type){var c=qx(a);Mu(a.info.g.info)&&!Nu(a.info.g.info)&&(ex(new Yw(c)),dx(21936,c));!b.o.nj&&Nu(a.info.g.info)&&"bt2020"==a.info.g.info.video.primaries&&(b=new Yw(c),$w(b,[408125543,374648427,174,224,21936,21937])&&(b=b.o+b.g,129==c.getUint8(b)&&1==c.getUint8(b+1)&&c.setUint8(b+1,9)));a.info.g.info.video&&uy(a.info.g,c);2==a.info.g.info.containerType&&a.info.g.info.video&&fx(c)}a.info.g.Um(a)};
zH.prototype.ba=function(a){a=a.info;this.A&&(this.V=this.A);this.A=a;this.H&&this.A.o&&(this.H=!1);a.g.info.g>=this.L&&(this.L=a.g.info.g)};
zH.prototype.getDuration=function(){return this.Ea.index.ek()};oI.prototype.send=function(){g.Fr(this.l,{format:"RAW",responseType:"arraybuffer",timeout:1E4,Ac:this.o,Qc:this.o,context:this});this.g=g.Mt()};
oI.prototype.o=function(a){var b={rc:a.status,lb:a.response?a.response.byteLength:0,rt:((g.Mt()-this.g)/1E3).toFixed(3),shost:g.Ag(this.l),trigger:this.C};204==a.status||a.response?this.A&&this.A(MB(b)):this.B(new g.LB("pathprobe.net",!1,b))};var Aca=1024/48E3;g.r(yI,g.J);yI.prototype.C=function(a){if(!this.ga()){for(var b=arguments.length-1;0<=b;b--){var c=arguments[b];if(c){g.Ya(this.l,c);var d=this.g,e=d.g;c=g.ib(e,c,d.l);0<=c&&g.Xa(e,c)}}this.o()}};
yI.prototype.reset=function(){this.B=this.I=!1;this.F.stop();this.g.g=[];this.l=[];this.o();this.H=null};
yI.prototype.o=function(){this.K=!0;if(!this.L){for(var a=3;this.K&&a;){this.K=!1;this.L=!0;if(this.B&&!this.I&&!this.ga()){this.F.stop();var b=this.P();g.T(b,32)&&this.R.start();for(var c=g.T(this.P(),2)?0x8000000000000:1E3*this.aa(),d=g.T(b,2),e=[],f=[],k=0;k<this.l.length;k++){var l=this.l[k];l.active&&(d?0x8000000000000>l.end:!l.contains(c))&&f.push(l)}e=e.concat(DI(this,f));if(d)b=uI(this.g,0x7ffffffffffff),b=b.concat(wI(this.g));else if(this.A<=c&&b.gb()&&!g.T(b,16)&&!g.T(b,32)){b=this.g;d=
c;f=[];for(k=vI(b,this.A);k<b.g.length&&!(l=b.g[k],(l.end<=d||l.contains(d))&&f.push(l),l.start>d);++k);b=f}else b=uI(this.g,c);e=e.concat(CI(this,b));this.A=c;!this.I&&this.H&&(this.H=null);c=g.q(e);for(e=c.next();!e.done;e=c.next())e=e.value,b=e[1],1==e[0]?(b.l&&b.l.O("onEnter",b),this.U("crn_"+b.namespace,b)):(b.l&&b.l.O("onExit",b),this.U("crx_"+b.namespace,b))}this.L=!1;a--}this.P().gb()&&(a=xI(this.g,this.A),!(0,window.isNaN)(a)&&0x7ffffffffffff>a&&(a=(a-this.A)/this.V(),this.F.start(a)))}};
yI.prototype.T=function(){this.l=[];this.g.g=[];this.H=null;g.J.prototype.T.call(this)};EI.prototype.then=function(a,b){return this.o.then(a,b)};
EI.prototype.resolve=function(a){this.g(a)};
EI.prototype.reject=function(a){this.l(a)};g.r(FI,g.R);g.h=FI.prototype;g.h.initialize=function(a,b,c,d){a=a||0;var e=this.F;d=d&&d.id;e.A="i";"auto"!=ev()&&(e.A="s");aI(e,b);jI(e,d);e.U=e.B;kI(e);e.o=e.l;b=iI(e);this.A=new zH(this.l,b.audio);this.g=new zH(this.l,b.video);cJ(this,this.A);cJ(this,this.g);this.g.l.U=this.A.l;this.O("videoformatchange",b);this.X=this.g.C;this.l.H&&this.Ae("streaming","1",!0);this.B=a;c?(HI(this,!1),g.Up(this.ma)):(a=0==this.B,gJ(this,this.g,this.g.Ea,a),gJ(this,this.A,this.A.Ea,a),this.seek(this.B),this.gc("gv"))};
g.h.resume=function(){if(this.R||this.aa)this.ya=this.aa=this.R=!1};
g.h.SG=function(a){if(!this.ga()&&3<=a.state){var b=a.info.ra[0].g,c=!this.sa&&b.info.video;b=!this.fa&&b.info.audio;5==a.state?c?this.gc("vrr"):b&&this.gc("arr"):6==a.state?c?(this.sa=a.wb(),Vt(4)):b&&(this.fa=a.wb()):4==a.state&&c&&Vt(4);if(5<=a.state){if(this.l.V){c=BG(a.timing);b=a.timing;c={rn:a.K.toString(),rt:c.rt,pt:c.pt,stall:c.stall,elt:c.elbowTime,elb:c.elbowBytes,rqd:b.F?b.F.join(""):""};b=c.rqd;delete c.rqd;if(b)for(var d=0;256*d<b.length;d++)this.Ae("rqd",MB({rn:c.rn,ix:String(d),d:b.substring(256*
d,256*(d+1))}));this.Ae("rqs",MB(c))}a.aa&&this.Ae("sbwe3","1",!0)}if(5==a.state)a.start(Math.max(0,a.info.ra[0].B-this.B));else if(5<=a.state&&5==a.info.ra[0].type)a.dispose();else{if(this.l.Wa&&6==a.state&&(c=a.g?a.g.be("X-Response-Itag"):null)&&(c=lI(this.F,c),b=c.di(a.info.range.length-c.Bm())[0],a.info=b,a.l))for(c=a.l,b=b.ra,c.l=b,d=0;d<c.g.length;d++)c.g[d].info=b[d],c.g[d].range.start=b[d].range.start,c.g[d].range.end=b[d].range.end,c.g[d].range.length=b[d].range.length;if(6==a.state||this.l.H&&
3<=a.state&&!(5<=a.state)){c=a.info.ra[0].g;b=c.info.video?this.g:this.A;this.C.l&&(b.C=!1,a.I&&this.Ma.g(1,a.I));if(d=Qw(a.info.ra[0]))d=a.info,d=!!Qw(d.ra[d.ra.length-1]);d&&((0,g.G)(a.l.g,b.R,b),this.l.wd||this.O("metadata",c))}else if(7==a.state)if(b=a.info.ra[0].g,YG(a)){d=(b.info.video&&1<b.A.g||410==a.B||500==a.B||503==a.B)&&!fI(this.F);var e=UG(a);c=b.info.video?this.g:this.A;d&&(e.stun="1");VI(this,!1,a.Td(),e);if(!this.ga()){d&&(d=this.F,b=b.info,fI(d),d.ia=b,d.V=g.Mt(),d.R=-1,aI(d,d.F));
for(b=0;b<c.o.length&&a!==c.o[b];b++);if(b==c.o.length)GH(c,a);else{for(;b<c.o.length;)GH(c,c.o.pop());3==a.info.ra[0].type?(a.l&&a.l.A?(b=a.l.A,b=new Ow(b.type,b.g,b.range,b.na,b.startTime+b.duration,0,b.l+b.Ja,0,!1)):(b=a.info.ra[0],b=new Ow(b.type,b.g,b.range,b.na,b.startTime,0,b.l,0,!1)),c.g=b):c.g=null}this.Nd()}}else Qw(a.info.ra[0])?(b.C=!0,this.Nd()):VI(this,!0,"net.retryexhausted",UG(a));this.Nd();if(5<=a.state&&YG(a)&&ky(a.info.g,this.Ra)&&(c=Ux(this.Ra,Xx(a.info.g.o)),b=5E3*Math.pow(1.6,
c.l),!(c.g||c.o+b>g.Mt()))){a:{a=a.info;c=this.l.Le;b=null;d=a.ra[0];if(a.range)b=Mw(a.range.start,Math.min(4096,a.range.length));else if(!c||d.g.info.video){a=null;break a}a=new Ow(5,d.g,b,d.na);a=new oy([a]);a.A=!1}a&&SI(this,a)}}}};
g.h.Nd=function(){LI(this);if(this.o&&Kx(this.o)&&!Mx(this.o)){var a=this.l.Je&&this.g.A&&this.g.A.C;this.C.isLive&&!a?(0,window.isNaN)(this.I)?(this.I=this.B+3600,this.o.o.duration=this.I):this.I<=this.B+1800&&(this.I=Math.max(this.I+1800,this.B+3600),this.o.o.duration=this.I):(a=Math.max(this.A.getDuration(),this.g.getDuration()),(!(0,window.isFinite)(this.I)||this.I!=a)&&0<a&&(this.I=this.o.o.duration=a))}if(!this.ga())if(qz(this.C)&&3==this.C.C)VI(this,!0,"manifest.net.retryexhausted",{rc:this.C.P.toString()});
else if(this.C.isLive&&(SH(this.g)||SH(this.A)))this.l.Ec||JI(this,!0),this.O("seekplayerrequired",window.Infinity);else if(LI(this),CH(this.g,this.B),!this.ga()&&(CH(this.A,this.B),!this.ga())){this.C.l&&(TH(this.g),TH(this.A),XI(this),(a=jH(this.g.l))&&a.l&&(this.V=jH(this.g.l).l.C,this.Ae("strm",this.V?"1":"0",!0)));if(this.o){a=this.o.g;var b=this.o.l;if(!MI(this,this.A,a)&&!MI(this,this.g,b))if(YI(this)){if(this.l.Yb){if(!a.g){var c=jH(this.A.l);c&&ZI(this,a,c)}b.g||(a=jH(this.g.l))&&ZI(this,
b,a)}}else{if(this.L){c=!!this.L.g;var d=this.L;var e=this.A,f=nE(this.o.l.buffered);if(d.g)d=sI(d,e,f);else{if(f=jH(e.l)){var k=f.l;if(k&&k.C&&k.B&&(e=e.o.length?e.o[0]:null)&&3<=e.state&&7!=e.state&&aH(e)&&0==e.info.l&&qI(d,k,f.info)){var l=d.l.hv*Aca;d.g=e;d.H=f;d.C=k;d.F=f.info;d.o=l;d.A=(0,g.H)()/1E3}}d=window.NaN}f=!!this.L.g;c!=f&&this.Ae("ssr",f?"start":"stop."+d);d&&this.O("seekplayerrequired",d,!0)}(c=aJ(this,this.g,b,null))&&!this.Ga&&(this.Ga=(0,g.H)(),this.gc("vda"),g.KC("vda",void 0,
"video_to_ad"),this.wa&&Vt(4));if(!Lx(this.o)){b=mE(b.buffered,this.B+RI);if(!(0,window.isNaN)(b)||EH(this.g)||!a.buffered.length){if(EH(this.g)||this.l.gj)b=window.NaN;a=aJ(this,this.A,a,b);c=c||a;a&&!this.wa&&(this.wa=(0,g.H)(),this.gc("ada"),g.KC("ada",void 0,"video_to_ad"),this.Ga&&Vt(4))}EH(this.g)&&EH(this.A)&&Kx(this.o)&&!Mx(this.o)&&(a=this.o,Kx(a)&&a.o.endOfStream(),a=this.P,dv(eA(a)),a.A=g.Mt());c&&!Ox(this.o)&&g.Up(this.U)}}}GI(this);gJ(this,this.g,this.g.Ea,!1);gJ(this,this.A,this.A.Ea,
!1);this.g.Ea.C||this.A.Ea.C?VI(this,!0,"net.retryexhausted",{metadata:"1",video:this.g.Ea.C?"1":"0",audio:this.A.Ea.C?"1":"0"}):(PI(this,this.g,this.A)&&TI(this,this.g,this.A),PI(this,this.A,this.g)&&TI(this,this.A,this.g),this.l.hj&&this.ia&&!this.R&&fA(this.P)&&(a=this.ia,b=(0,g.A)(this.O,this,"error"),c=this.l.qj?(0,g.A)(this.Ae,this,"pathprobe"):null,(new oI(a,"cms",c,b)).send(),this.ia=""),this.C.o&&g.Up(this.ma),this.L&&(a=this.L,a.g?(b=0,a.g.ga()||5<=a.g.state||(b=1E3*(a.o-FG(a.g.timing))),
a=0<b?b+1:a.B?Math.max(0,1E3*(a.A+a.l.zb)-(0,g.H)()):0):a=window.NaN,(0,window.isNaN)(a)||g.Up(this.Za,a)),g.Up(this.Ta))}};
g.h.Pk=function(a){var b=a?this.A:this.g;a=b&&b.A;var c=b&&b.V;b=void 0;a&&(b=Uw(a));if(c){b=b||{};a=Uw(c);for(var d in a)b["prev_"+d]=a[d]}VI(this,!0,"fmt.unplayable",b)};
g.h.QF=function(a){VI(this,!0,"fmt.unparseable",a)};
g.h.UF=function(a){VI(this,!1,"qoe.avsync",a)};
g.h.RF=function(a,b){this.C.l&&bJ(this,b,a==this.g)};
g.h.SF=function(a,b){this.C.l&&xz(this.C,b.na,a==this.g)};
g.h.TF=function(a,b){this.C.l&&bJ(this,b,a==this.g)};
g.h.PF=function(a,b){if(this.g.Ea.index.Pb()<=b){var c=this.C;c.L.push(a);c.O("cuepointsadded")}};
g.h.seek=function(a){if(this.ga())return Of();if(this.g.C||this.A.C)return Nf();LI(this);this.Wa=g.Mt();GI(this,a);var b=this.g.g,c=fJ(this,this.g,a,this.o&&this.o.l),d=fJ(this,this.A,c,this.o&&this.o.g);this.B=Math.max(a,c,d);this.K=!0;this.C.l&&this.l.nb&&(c=this.g.g.na,zy(this.g.Ea.index,c)||b&&b.na==c||(this.X=!0));g.Up(this.U);return Nf(a)};
g.h.T=function(){KI(this);this.A&&(HH(this.A),HH(this.g));g.R.prototype.T.call(this)};
g.h.gc=function(a,b){this.bb[a]=b?window.performance.timing.navigationStart+b:g.Mt()};
g.h.kt=function(){return this.Ma.l()||0};
g.h.Ae=function(a,b,c){this.O("ctmp",a,b,void 0===c?!1:c)};
var RI=2/24;g.r(pJ,g.J);g.h=pJ.prototype;g.h.SC=function(a){this.C.call(this.o,new window.Uint8Array(a.message))};
g.h.TC=function(){this.I.call(this.o,this.g.keyStatuses)};
g.h.cu=function(a,b){g.Q(b);var c=a;b instanceof window.DOMException&&(c+=";n."+b.name+";m."+b.message);this.B.call(this.o,c)};
g.h.Bu=function(a){this.C.call(this.o,a.message)};
g.h.Au=function(a){if(this.l){var b=this.l.error.code;a=this.l.error.systemCode}else b=a.errorCode&&a.errorCode.code,a=a.systemCode;this.B.call(this.o,"t.prefixedKeyError;c."+b+";sc."+a)};
g.h.zu=function(){this.H.call(this.o)};
g.h.update=function(a){if(this.g)return this.g.update(a).then(null,jr((0,g.A)(this.cu,this,"t.update")));this.l?this.l.update(a):this.A.addKey?this.A.addKey(this.K.g,a,this.F,this.sessionId):this.A.webkitAddKey(this.K.g,a,this.F,this.sessionId);return ks()};
g.h.T=function(){this.g&&this.g.close();this.A=null;g.J.prototype.T.call(this)};g.r(rJ,g.J);g.h=rJ.prototype;
g.h.createSession=function(a){var b=a.initData;if(this.g.l){var c=this.B.createSession();"com.youtube.fairplay"==this.g.g&&(b=uJ(this,b));b=c.generateRequest(a.contentType,b);c=new pJ(null,null,null,c,null);b.then(null,jr((0,g.A)(c.cu,c,"t.generateRequest")));return c}if(Cz(this.g)){c=new window.Uint8Array(270);for(a=0;135>a;a++)c[2*a]='<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="true"></LicenseAcquisition></PlayReadyCDMData>'.charCodeAt(a);b=this.o.createSession("video/mp4",
b,c);return new pJ(null,null,null,null,b)}if(Gz(this.g))return b=uJ(this,b),b=this.o.createSession("video/mp4",b),new pJ(null,null,null,null,b);this.l.generateKeyRequest?this.l.generateKeyRequest(this.g.g,b):this.l.webkitGenerateKeyRequest(this.g.g,b);return this.A=new pJ(this.l,this.g,b,null,null)};
g.h.WC=function(a){var b=vJ(this,a);b&&b.Bu(a)};
g.h.VC=function(a){var b=vJ(this,a);b&&b.Au(a)};
g.h.UC=function(a){var b=vJ(this,a);b&&b.zu(a)};
g.h.T=function(){this.l=null;g.J.prototype.T.call(this)};g.r(xJ,g.J);g.h=xJ.prototype;g.h.mt=function(a){this.L=a};
g.h.QC=function(a){if(!this.ga()){this.I||(g.KC("drm_gk_f"),this.I=!0,this.fc.O("newsession",this));Dz(this.o)&&(a=BJ(a));if("fairplay"==this.o.flavor){var b=g.ae(a);a=new window.Uint8Array(new window.ArrayBuffer(b.length));for(var c=0;c<b.length;c++)a[c]=b.charCodeAt(c)}a=new mJ(a,++this.P);this.Gv(a)}};
g.h.OC=function(){this.ga()||this.F||(this.fc.O("sessionready"),this.F=!0)};
g.h.RC=function(a){var b=this;this.ga()||(a.forEach(function(a,d){var c=Dz(b.o)?d:a,f=new window.Uint8Array(Dz(b.o)?a:d);Dz(b.o)&&GJ(f);var k=hH(f);GJ(f);f=hH(f);b.g[k]?b.g[k].status=c:b.g[f]?b.g[f].status=c:b.g[k]={type:"",status:c}}),ir("Key statuses changed: "+HJ(this,",")),this.fc.O("keystatuseschange",this))};
g.h.Gv=function(a){g.KC("drm_net_s");a={format:"RAW",method:"POST",postBody:a.message,responseType:"arraybuffer",withCredentials:!0,timeout:3E4,ib:(0,g.A)(this.CF,this,a),onError:(0,g.A)(this.tu,this,a)};var b=this.U;this.L&&(b=Qg(b,"access_token",this.L));(0,window.isNaN)(this.l)||(b=Qg(b,"cpi",this.l));g.Fr(b,a)};
g.h.CF=function(a,b){if(!this.ga())if(0!=b.status&&b.response){g.KC("drm_net_r");var c=new window.Uint8Array(b.response);if(c=oJ(c))if(0!=c.statusCode)zJ(this,"drm.auth",!0,"t.f;c."+c.statusCode,g.fE(c.statusCode));else{g.KC("drm_kr_s");var d=null,e=c.headers["Heartbeat-Url"];e&&(d=new lJ(e,(0,window.parseInt)(c.headers["Heartbeat-Interval-Secs"],10)||60,(0,window.parseInt)(c.headers["Heartbeat-Num-Retries"],10)||4));d&&this.fc.O("newlicense",d);if(d=c.headers["Authorized-Format-Types"])this.B=d.split(","),
CJ(this)||(Fz(this.o)?(d=DJ(this.B),480<g.Eu[d]&&this.fc.O("hdentitled",this)):this.fc.O("keystatuseschange",this));c.headers["Key-Ids"]&&(this.g=FJ(c.headers["Key-Ids"]));Gz(this.o)&&(c.message=new window.Uint8Array(ce(String.fromCharCode.apply(null,c.message))));this.A.update(c.message).then(function(){g.KC("drm_kr_f")});
this.F&&(this.K=g.Mt())}else zJ(this,"drm.net",!0,"t.p","YTP_ERROR_SERVER_ERROR")}else this.tu(a,b)};
g.h.PC=function(a){this.ga()||zJ(this,"drm.keyerror",!0,a)};
g.h.tu=function(a,b){var c=!1;if(3<=a.g.l||this.R&&36E4<g.Mt()-this.K){var d="drm.net.retryexhausted";c=!0}else d=b.status?"drm.net.badstatus":"drm.net.connect";zJ(this,d,c,"t.r;c."+b.status);if(this.R&&this.F?0:!c&&this.P==a.number)d=a.g.getValue(),d=new g.P((0,g.A)(this.Gv,this,a),d),g.K(this,d),d.start(),d=a.g,d.g=Math.min(2E4,2*d.g),d.o=Math.min(2E4,d.g+Math.round(.4*(Math.random()-.5)*d.g)),d.l++};
g.h.T=function(){this.fc=null;g.J.prototype.T.call(this)};
g.h.Se=function(){var a=this.B.join();if(CJ(this)){var b=[],c;for(c in this.g)"usable"!=this.g[c].status&&b.push(this.g[c].type);a+="/UKS:"+b}return a};KJ.prototype.get=function(a){a=this.Zh(a);return-1!=a?this.values[a]:null};
KJ.prototype.remove=function(a){a=this.Zh(a);-1!=a&&(this.keys.splice(a,1),this.values.splice(a,1))};
KJ.prototype.set=function(a,b){var c=this.Zh(a);-1!=c?this.values[c]=b:(this.keys.push(a),this.values.push(b))};
KJ.prototype.Zh=function(a){return g.Qa(this.keys,function(b){return g.ob(a,b)})};g.r(MJ,g.R);g.h=MJ.prototype;g.h.iF=function(a){a=new qJ(new window.Uint8Array(a.initData),a.initDataType);RJ(this,a,!0)};
g.h.gG=function(a){RJ(this,new qJ(a.initData,a.contentType),!0)};
g.h.NF=function(){this.ga()||(this.H=!0,QJ(this))};
g.h.uE=function(a){if(!this.ga()){g.Q(a);var b="t.a";a instanceof window.DOMException&&(b+=";n."+a.name+";m."+a.message);this.O("licenseerror","drm.unavailable",!0,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK")}};
g.h.jG=function(a){this.ga()||!a||this.aa||(this.aa=a,this.O("heartbeatparams",a))};
g.h.kG=function(){this.ga()||(this.o.shift(),QJ(this))};
g.h.eH=function(){if(Cz(this.g)&&(this.X--,0==this.X)){var a=this.B;a.l.msSetMediaKeys(a.o)}};
g.h.XC=function(a){this.ga()||PJ(this,EJ(a,this.R))};
g.h.tF=function(){this.ga()||!this.U&&Fz(this.g)&&this.O("hdproberequired")};
g.h.T=function(){this.g.l&&this.I.setMediaKeys(null);this.I=null;this.o=[];for(var a=g.q(this.l.values),b=a.next();!b.done;b=a.next())b.value.dispose();a=this.l;a.keys=[];a.values=[];this.A&&(this.A.dispose(),this.A=null);this.C=null;g.R.prototype.T.call(this)};
g.h.Se=function(){return 0>=this.l.values.length?"no session":this.l.values[0].Se()};UJ.prototype.B=function(){var a=g.z("yt.abuse.botguardInitialized");return a&&a()?(a=g.z("yt.abuse.invokeBotguard")())?"r1a="+a:null:null};
UJ.prototype.C=function(a){return"r3a="+Math.floor(this.g.lengthSeconds%Nb(a.c3a))};
UJ.prototype.A=function(a){a=Nb(a.c);var b=g.z("yt.abuse.dclkstatus.checkDclkStatus")();return"r6a="+(a^b)};g.r(aK,g.R);aK.prototype.getCurrentTime=function(){return!(0,window.isNaN)(this.g)&&(0,window.isFinite)(this.g)?this.g:this.l?this.l.getCurrentTime():window.NaN};
aK.prototype.kd=function(a){return this.l&&this.o?this.o.oa?this.o&&this.o.Ia&&this.o.Ia.g&&this.P?a?this.o.kd():kG(this.P):rE(this.l)||0:this.o.kd():0};
aK.prototype.tb=function(){return this.o?this.o.tb():0};
aK.prototype.U=function(){var a=this.getCurrentTime()+.1;this.C=Nf(a);cK(this,a,!0)};var pK={"ad-trueview-indisplay-pv":6,"ad-trueview-insearch":7},qK={"ad-trueview-indisplay-pv":2,"ad-trueview-insearch":2},rK=/^(\d*)_((\d*)_?(\d*))$/;g.r(eK,qE);g.h=eK.prototype;g.h.ha=function(){return this.g};
g.h.Zc=function(){return this.g.src};
g.h.ec=function(){try{return 0<=this.g.playbackRate?this.g.playbackRate:1}catch(a){return 1}};
g.h.Ce=function(a){this.ec()!=a&&(this.g.playbackRate=a);return a};
g.h.Qn=function(a,b){return this.g.canPlayType(a,b)};
g.h.getCurrentTime=function(){return this.g.currentTime};
g.h.getDuration=function(){return this.g.duration};
g.h.load=function(){var a=this.g.playbackRate;this.g.load&&this.g.load();this.g.playbackRate=a};
g.h.pause=function(){this.g.pause()};
g.h.play=function(){var a=this.g.play();return a&&a.then?a:null};
g.h.Td=function(){return this.g.error?this.g.error.code:null};
g.h.Ai=function(){return!!this.g.webkitCurrentPlaybackTargetIsWireless};
g.h.setSize=function(a){return g.Fh(this.g,a)};
g.h.getVolume=function(){return this.g.volume};
g.h.setVolume=function(a){Ax();this.g.volume=a};
g.h.FB=function(a){this.dispatchEvent(new EE(this,a.type,a))};
g.h.setAttribute=function(a,b){this.g.setAttribute(a,b)};
g.h.removeAttribute=function(a){this.g.removeAttribute(a)};
g.h.hasAttribute=function(a){return this.g.hasAttribute(a)};
g.h.T=function(){for(var a in this.A)this.g.removeEventListener(a,this.A[a]);qE.prototype.T.call(this)};g.r(fK,g.J);g.h=fK.prototype;g.h.start=function(){this.l.start()};
g.h.stop=function(){this.l.stop()};
g.h.vl=function(a,b,c){this.o[a]=b;this.g[a]=new iK(!!c)};
g.h.clear=function(){for(var a in this.g)this.g[a].clear()};
g.h.sI=function(){for(var a in this.o)this.g[a].update(this.o[a]());this.l.start()};
iK.prototype.update=function(a){this.o?(this.g.add(a-this.l||0),this.l=a):this.g.add(a)};
iK.prototype.clear=function(){this.g.clear();this.l=0};g.r(kK,g.R);g.h=kK.prototype;g.h.T=function(){g.qr(this.ba);window.clearInterval(this.zb);g.qr(this.Yb);var a=$v();a&&window.document.removeEventListener(a,this.lf,!1);nK(this);oK(this);this.F&&(this.F.dispose(),this.F=null);lK(this);LK(this);g.Fe(this.ya,this.g);this.aa=null;this.Wa=!1;g.R.prototype.T.call(this)};
g.h.mq=function(){if(this.g.Wb())g.T(this.o,128)||(this.g.Wb(),this.Bc=this.Ka.g=!0,4!=this.Za&&(this.X=g.bb(this.g.rd)),g.ID(this.g,this.A,this.Ga).then(this.Sq,this.Sq,this),this.tc("loudness",""+this.g.relativeLoudness.toFixed(3),!0));else{var a=this.g;if(a.oa&&a.adaptiveFormats&&!a.Br&&(g.UD(a)||this.A.experiments.g("html5_manifestless_always"))){a=this.g;var b=this.A.experiments;if(!DD(a)){a.Br=!0;var c=dz(HD(a,a.adaptiveFormats),a.Ob,a.lengthSeconds,!0,b);!b.g("html5_manifestless_vp9")&&CD(c)||
!b.g("html5_manifestless_captions")&&a.Wm?c.dispose():(a.Wh=!1,GD(a,c),c.subscribe("cuepointsadded",a.kq,a),Zy(a.ka)&&(a.zg=!0));FD(a)}}else if(this.g.Wh){a=this.g;b=this.A.experiments;a.ze=!0;a.Wh=!1;Av(a.hd)||g.Q(Error("DASH MPD Origin invalid: "+a.hd),"WARNING");c=a.hd;var d=b.l("dash_manifest_version")||4;c=g.Kg(c,{mpd_version:d});a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||(c=g.Kg(c,{pacing:0}));nz(new Yy(c,b,a.oa),c).then(a.XE,a.WE,a);g.KC("mrs")}else if(this.g.zg)this.C&&(a=this.C.l,
rF(a,"protected"),a.g.videoData.xe?a.ma():a.g.videoData.subscribe("dataloaded",a.ma,a)),a=this.g,c=this.A.R,b=this.A.experiments,a.fairPlayCert||a.ka&&Zy(a.ka),c=a.ka?tA(c,a.ka):{},b=new Kz(c,b,a.Pv),g.K(a,b),a.zg=!1,a.ze=!0,a=(0,g.A)(a.Wz,a),b.B=a,Iz(b.A)?Nz(b):Qz(b);else if(!this.g.ze&&this.Bc){b=this.A;a=this.g;d=this.bb.Da();var e=this.nf();38==a.Fe&&"books"==b.g?(b=a.videoId.indexOf(":"),a=g.Kg("//play.google.com/books/volumes/"+a.videoId.slice(0,b)+"/content/media",{aid:a.videoId.slice(b+1),
sig:a.aE})):30==a.Fe&&"docs"==b.g?a=g.Kg("https://docs.google.com/get_video_info",{docid:a.videoId,authuser:a.jc,authkey:a.authKey,eurl:b.Ra}):33==a.Fe&&"google-live"==b.g?a=g.Kg("//google-liveplayer.appspot.com/get_video_info",{key:a.videoId}):(c={html5:"1",video_id:a.videoId,cpn:a.clientPlaybackNonce,eurl:b.Ra,ps:b.g,el:ZD(a,b),hl:b.Bc,list:a.playlistId,agcid:a.ky,aqi:a.adQueryId,sts:17512,lact:g.$t()},g.Ka(c,b.B),b.Je&&(c.ecver=b.Je),b.forcedExperiments&&(c.forced_experiments=b.forcedExperiments),
a.He?(c.vvt=a.He,a.mdxEnvironment&&(c.mdx_environment=a.mdxEnvironment)):(a.oauthToken||b.sa)&&(c.access_token=a.oauthToken||b.sa),a.revocableUnlistedToken&&(c.ut=a.revocableUnlistedToken),a.adFormat&&(c.adformat=a.adFormat),b.uf&&(c.cc_lang_pref=b.uf),b.vf&&2!=b.vf&&(c.cc_load_policy=b.vf),b.mute&&(c.mute=b.mute),a.sf&&2!=b.sf&&(c.iv_load_policy=a.sf),a.kh&&(c.itct=a.kh),bE(a,b)&&(c.autoplay="1"),a.vk&&(c.autonav="1"),a.ln&&(c.noiba="1"),a.isMdxPlayback&&(c.mdx="1",c.ytr=a.gf),a.mdxControlMode&&
(c.mdx_control_mode=a.mdxControlMode),a.wq&&(c.ytrcc=a.wq),a.qn&&(c.utpsa="1"),a.isFling&&(c.is_fling="1"),a.kn&&(c.mute="1"),a.vnd&&(c.vnd=a.vnd),a.tm&&(c.force_ad_param_ad_type="video_ad",c.force_ad_param_url=a.tm,c.force_ad_param_break_type="1",c.force_ad_param_offset_value=0),d.width&&(c.width=d.width),d.height&&(c.height=d.height),a.Jf&&(c.splay="1"),a.ypcPreview&&(c.ypc_preview="1"),$D(a,b)&&(c.content_v=$D(a,b)),a.lh&&(c.livemonitor=1),b.jc&&(c.authuser=b.jc),b.pageId&&(c.pageid=b.pageId),
b.Ya&&(c.ei=b.Ya),b.o&&(c.iframe="1"),a.cg&&(c.tst=a.cg),a.contentCheckOk&&(c.cco="1"),a.racyCheckOk&&(c.rco="1"),b.ob&&a.liveStartWalltime&&(c.live_start_walltime=a.liveStartWalltime),b.ob&&a.wn&&(c.live_manifest_duration=a.wn),b.ob&&a.playerParams&&(c.player_params=a.playerParams),b.ob&&a.cycToken&&(c.cyc=a.cycToken),b.ob&&a.dw&&(c.tkn=a.dw),0!=e&&(c.vis=e),b.enableSafetyMode&&(c.enable_safety_mode="1"),a.Ak&&(c.kids_age_up_mode=a.Ak),b.widgetReferrer&&(c.widget_referrer=b.widgetReferrer.substring(0,
128)),(d=b.Gc.embedding_app)&&(c.embedding_app=d),(d=g.ED(a))&&(c.uloc=d),a.pi&&(c.internalipoverride=a.pi),a.innertubez&&(c.innertubez=a.innertubez),b.ob&&a.rg&&(c.wpid=a.rg),a=g.Kg(b.baseYtUrl+"get_video_info",c));b=2;this.g.isAd()&&(b=0);c=this.g;d=this.A.Ec;e=this.A.experiments;var f=this.A.Rb;c.ga()||(c.Gm=a,c.Oo=b,c.Ah=!!d,c.Ir=!!f,e&&(c.rv=!e.g("disable_gvi_cors"),c.Fm=e.l("html5_get_video_info_timeout_ms")||0,c.jr=e.g("html5_get_video_info_promiseajax")),c.ze=!0,c.Dv())}}};
g.h.Sq=function(){if(BD(this.g)){this.g.oa&&(this.U=new dG,iaa(this),0<this.g.dn&&!this.g.Ib()||CK(this,ZK(this),!0));this.g.Ia.g&&g.$K(this);YK(this,"i");if(this.U)if(this.g.Ib()){var a=(0,g.A)(this.B.kt,this.B);this.U.l=a}else this.g.ka&&(a=(0,g.A)(this.g.ka.CA,this.g.ka),this.U.l=a);this.A.experiments.g("html5_new_seeking")&&jaa(this)}this.Ra&&SK(this);a=this.g;a.endSeconds&&a.endSeconds>a.startSeconds&&sK(this,a.endSeconds);tK(this,"dataloaded");this.R.l?zK(this):this.Ra&&uK(this,LE(LE(this.o,
512),1))};
g.h.logEvent=function(a,b){if(this.C){var c=this.C,d={};d.rt=g.eF(c.g).toFixed(3);g.Ka(d,fF(c.g));var e=c.g.g,f=c.g.videoData,k={ns:e.Wa,html5:"1",el:ZD(f,e),ps:e.g,fexp:e.experiments.experimentIds.join(",")||void 0,feature:f.Ko||f.Ti||void 0,ctrl:f.Vf||void 0,ytr:f.gf||void 0,list:f.playlistId};bE(f,e)&&(k.autoplay="1");f.subscribed&&(k.subscribed=f.subscribed);g.Ka(d,k);delete d.fexp;g.Ka(d,a);d=g.wr(c.g.g.baseYtUrl+"player_204",d);AF(c,d,b)}};
g.h.isPeggedToLive=function(){return!!this.I&&this.I.isPeggedToLive()};
g.h.yA=function(){return this.o};
g.h.getPlayerType=function(){return this.Za};
g.h.rI=function(){OK(this);uK(this,LE(this.o,16));SK(this);IE(this.o)&&TK(this)};
g.h.Hn=function(){var a=this.g,b=a.Hc;if(!b)return a.Rj;var c=g.Pa(this.g.Ia?this.g.Ia.audioTracks:[],function(a){return a.id==b.id});
return c?c:a.Rj};
g.h.HH=function(){this.A.experiments.l("html5_background_quality_cap")&&this.B&&YK(this,"v");this.A.kj&&!this.g.backgroundable&&this.l&&!this.Ga&&(Zv()&&this.l.l?(this.tc("bgmobile","suspend"),g.KK(this,!0)):SK(this)&&this.tc("bgmobile","resume"))};
g.h.OF=function(a){if(this.Le)this.gd=!0;else{var b=this.getDuration();!b&&this.g.Ib()&&(b=3600);a.o.duration=b;g.II(this.B,a)}};
g.h.wF=function(a){if(this.H){var b=this.H;Cz(b.g)&&(a=fH(a),0!=a.length&&RJ(b,new qJ(a),!1))}};
g.h.xu=function(){Ez&&this.fa&&this.fa.g&&this.H&&(OJ(this.H,this.fa.g),this.fa=null)};
g.h.HF=function(a){HK(this,a.reason,a.video.info,a.audio.info);var b=g.OD(this.g);b&&b.I(a.video.index);this.U&&(this.U.g=a.audio.index)};
g.h.GF=function(a){GK(this,a.reason,a.audio.info)};
g.h.oh=function(a){laa(this,a);var b=/^pp/.test(this.g.clientPlaybackNonce);kaa(a)?g.T(this.o,4)?(this.Je=!0,oK(this)):PK(this):eL(a)&&this.g.Ia.l?(this.tc("highrepfallback","1",!0),XD(this.g),VK(this),TK(this)):a.g?(b=this.B?this.B.F.F:null,b=eL(a)&&b&&b.isLocked()?"YTP_ERROR_FORMAT_UNAVALIABLE":void 0,g.wK(this,a.errorCode,b,MB(a.details))):this.C&&(this.C.onError(a.errorCode,MB(a.details)),b&&"manifest.net.connect"==a.errorCode&&(a="https://www.youtube.com/generate_204?cpn="+this.g.clientPlaybackNonce+
"&t="+g.Mt(),(new oI(a,"manifest",(0,g.A)(function(a){this.tc("pathprobe",a)},this),(0,g.A)(function(a){this.onError(a.errorCode,MB(a.details))},this.C))).send()))};
g.h.Pq=function(){if(this.A.experiments.g("html5_new_seeking"))cK(this.F,this.F.getCurrentTime(),!0);else{if(!(0,window.isNaN)(this.V)&&this.l){var a=this.getDuration(),b=ZK(this);!this.g.oa&&this.V>=b?(this.V=a,this.O("endseeking",this),EK(this,!0),jK(this)):(this.B&&this.B.seek(this.V),(!this.g.oa||1<=this.l.g.readyState)&&this.l.xb(this.V),this.B&&!g.T(this.o,2)&&uK(this,LE(this.o,16)))}dL(this)}};
g.h.getCurrentTime=function(){if(this.F&&!(0,window.isNaN)(this.F.getCurrentTime()))return this.F.getCurrentTime();if(!(0,window.isNaN)(this.V))return this.V;var a=0;this.l&&1<=this.l.g.readyState?a=this.l.getCurrentTime():this.g&&(a=this.g.Pe||this.g.startSeconds||0);return a};
g.h.getDuration=function(){return this.g.lengthSeconds?this.g.lengthSeconds:ZK(this)?ZK(this):0};
g.h.Ry=function(){var a=new Vz;if(this.B){var b=this.A.schedule;a.A=b.H;a.F=b.K;a.bandwidthEstimate=dA(b);a.g="d."+$z(b).toFixed(2)+";st."+(1E9*bA(b)).toFixed(2)+";bw."+b.l.l().toFixed(0)+";abw."+b.B.l().toFixed(0)+";v50."+Uz(b.g,.5).toFixed(2)+";v92."+Uz(b.g,.92).toFixed(2)+";v96."+Uz(b.g,.96).toFixed(2)+";v98."+Uz(b.g,.98).toFixed(2);b=this.B;if(b.o&&!Lx(b.o)&&(a.l=EH(b.g)?b.g.A.A:oE(b.o.l.buffered,b.B),a.B=EH(b.A)?b.A.A.A:oE(b.o.g.buffered,b.B),b.l.V)){var c=JH(b.g),d=JH(b.A),e=kE(b.o.l.buffered,
"_"),f=kE(b.o.g.buffered,"_");a.g=(a.g||"")+(";lvq."+c+";laq."+d+";lvb."+e+";lab."+f)}a.bandwidthEstimate=YH(b.H)}else this.l&&(a.l=zE(this.l));this.A.experiments.g("html5_new_e2e_latency_tracking")?a.o=this.br():this.U&&eG(this.U,a);return a};
g.h.EH=function(){if(this.H){var a=this.H,b=this.g.oauthToken;a.P=b;a.O("oauthtoken",b)}tK(this)};
g.h.DH=function(a){g.wK(this,"auth",(0,window.unescape)(a.reason),a.errordetail||"sec."+a.errorcode)};
g.h.BA=function(a){var b=a.target.Zc();if(this.l&&this.l.Zc()&&this.l.Zc()==b){var c=!1;switch(a.type){case "error":var d=!this.Sc,e=this.A.experiments.l("html5_error_reload_cooldown_ms");0<e&&(d=(0,window.isNaN)(this.Ya)||(0,g.H)()-this.Ya>e);if(d&&0<this.l.Td()){this.Sc=!0;this.Ya=(0,g.H)();a=this.g;a=a.Tf?+g.ur(a.Tf.g().Of).expire<Date.now()/1E3+1800:!1;this.C&&(c={e:DE(this.l),msg:SE(this.l)},this.L&&(c.msopened=""+ +!!this.L.g),a&&(c.stale="1"),this.C.onError("qoe.restart",MB(c)));if(a){PK(this);
return}if(Pr("philips"))try{window.close()}catch(f){}pL(this);return}if(this.A.experiments.g("html5_defer_background_errors")&&Zv()&&4==this.l.Td()){g.KK(this);mL(this,"unplayable");return}break;case "durationchange":d=this.l.getDuration();(!this.L||(0,window.isFinite)(d)&&0<d)&&1!=d&&this.g.lengthSeconds!=d&&(this.g.lengthSeconds=d,tK(this));break;case "ratechange":this.B&&(this.B.H.o=Math.max(1,this.l.ec()));d=this.K;d.B=!0;d.o();break;case "loadedmetadata":this.g.startSeconds&&(0<(this.l.g.seekable||
jE()).length?this.A.experiments.g("html5_new_seeking")?CK(this,this.g.startSeconds,!0):this.l.g.currentTime=this.g.startSeconds:(this.ma=this.g.startSeconds,EK(this,!0))),this.O("onLoadedMetadata");case "loadstart":window.clearInterval(this.zb);this.gm()||(this.zb=g.pr((0,g.A)(this.gm,this),100));break;case "progress":this.ma&&this.l&&(d=this.l.g.seekable||jE(),d.length&&d.end(0)>this.ma&&(this.A.experiments.g("html5_new_seeking")?CK(this,this.ma,!0):this.l.g.currentTime=this.ma,this.ma=window.NaN,
this.Ec=this.wa.M(this.l,"canplay",this.YE,this)));case "suspend":gL(this);this.O("onLoadProgress",this,maa(this));g.T(this.o,8)&&(this.fg?c=!0:this.gg&&((0,window.isNaN)(this.ud)||this.ud+1<this.l.getCurrentTime())&&(c=!0,this.ud=this.l.getCurrentTime()));break;case "seeked":lL(this);break;case "seeking":this.A.experiments.g("html5_new_seeking")||(d=this.getCurrentTime(),this.B&&this.B.seek(d),e=this.Ma,e.g=d,e.l=!0);break;case "playing":this.P.g("plev");g.KC("plev",void 0,"video_to_ad");this.Ie&&
(this.Ie=!1,RK(this)||CK(this,window.Infinity,!0));g.qr(this.Yb);this.Yb=window.NaN;break;case "timeupdate":d=this.l&&!this.l.getCurrentTime();e=this.l&&0==this.l.g.readyState;if(d&&(!this.Ta||e))return;this.Ta=this.Ta||!!this.l.getCurrentTime();this.gm();lL(this);gL(this);if(!this.l||this.l.Zc()!=b)return;this.O("onVideoProgress",this,this.l.getCurrentTime());break;case "waiting":if(0<(this.l.g.played||jE()).length&&0==yE(this.l).length&&0<this.l.getCurrentTime()&&5>this.l.getCurrentTime()&&this.B)return;
break;case "resize":this.g.Ba&&"auto"==this.g.Ba.video.quality&&this.O("internalvideoformatchange",this.g,!1)}this.l&&this.l.Zc()==b&&(this.O("videoelementevent",a),b=KE(this.o,a,this.Ma,this.A.experiments),!g.T(this.o,1)&&g.T(b,1)&&qL(this,"evt_"+a.type),uK(this,b),c&&this.l.play())}};
g.h.lE=function(a){a="available"==a.g.availability;a!=this.Tc&&(this.Tc=a,this.O("airplayavailabilitychange"))};
g.h.mE=function(){var a=this.l.Ai();a!=this.Ga&&(this.Ga=a)&&(g.ID(this.g,this.A,this.Ga),YK(this,"m"));this.O("airplayactivechange")};
g.h.gm=function(){var a=this.l;a&&this.Ta&&!this.g.Fd&&!aD("vfp","")&&2<=a.g.readyState&&!a.g.ended&&0<nE(yE(a))&&this.P.g("vfp");if((a=this.l)&&!this.g.Fd&&0<a.getDuration()){!aD("pbp","")&&a.g.paused&&2<=a.g.readyState&&0<nE(yE(a))&&this.P.g("pbp");var b=this.A.experiments.g("html5_use_start_seconds_for_pbs")?this.g.startSeconds:0;if(a.getCurrentTime()>b){window.clearInterval(this.zb);g.qr(this.ba);this.ba=window.NaN;this.g.Fd=!0;this.A.Fd=!0;kL(this);this.A.experiments.g("html5_ignore_playing_evt")&&
g.T(this.o,8)&&uK(this,ME(this.o,65));if(this.C){a=this.C;if(!a.B){a.g.g.experiments.g("disable_embedpage_playback_logging")||16623!=a.g.videoData.rootVeType||kr(Error("Playback for EmbedPage"));b=xF(a,"playback");a.I=[10+a.g.videoData.jh,10,10,40+a.g.videoData.si-a.g.videoData.jh,40];var c=a.o;window.clearInterval(c.F);c.F=window.NaN;c.F=g.pr((0,g.A)(c.update,c),100);c.C=g.eF(c.l);c.A=XE(c.l);b.l=wF(a,!0);b.Ka=!0;b.send();a.g.videoData.Wk&&(b=a.g.g,c=a.g.videoData,c={html5:"1",video_id:c.videoId,
cpn:c.clientPlaybackNonce,plid:c.playbackId,ei:c.eventId,ptk:c.Wk,oid:c.Su,ptchn:c.Ru,pltype:c.Tu,content_v:$D(c,b)},b=g.Kg(b.baseYtUrl+"ptracking",c),AF(a,b));a.g.videoData.enableCardio&&(a.pl("playback"),a.A||DF(a));a.g.videoData.ke||CF(a);a.B=!0;a=a.o;a.g=a.l.l();a.C=g.eF(a.l);!(0==a.o&&5>a.g)&&2<a.g-a.o&&(a.o=a.g)}g.or((0,g.A)(this.So,this),4500)}this.O("playbackstarted");g.Tt()&&((a=g.z("yt.scheduler.instance.clearPriorityThreshold"))?a():Vt(0));return!0}}return!1};
g.h.YE=function(){this.Ec&&(this.wa.Pa(this.Ec),delete this.Ec,this.Pi())};
g.h.nz=function(){if(this.l){var a=this.A.experiments.g("html5_ignore_playing_evt");if(!a||!g.T(this.o,128)){var b=this.getCurrentTime();a&&g.T(this.o,8)&&hE(this.Ma,b)?uK(this,ME(this.o,1)):g.T(this.o,8)&&iE(this.Ma,b,g.Mt(),zE(this.l))?(a=this.getDuration(),!this.g.oa&&a&&1.1>Math.abs(a-b)?this.l.g.loop?CK(this,0,!0):jK(this):(g.QE(this.o)||qL(this,"progress_fix"),uK(this,LE(this.o,1)))):g.T(this.o,4)&&g.QE(this.o)&&5<zE(this.l)&&uK(this,ME(this.o,1));gL(this)}}};
g.h.Ny=function(){return this.B?YH(this.B.H):dA(this.A.schedule)};
g.h.Wq=function(){return this.l?zE(this.l):0};
g.h.Qy=function(){return this.A.schedule.H};
g.h.br=function(){if(!(this.g.oa&&this.g.ka&&this.B&&RK(this)&&this.o.gb()))return window.NaN;var a=this.g.Ib()?this.B.kt():this.g.ka.H;return(0,g.H)()/1E3-hL(this)-a};
g.h.pI=function(){var a;if(a=g.T(this.o,1)&&this.B){a=this.B;var b=this.getCurrentTime();a=!(!a.o||Lx(a.o)||Mx(a.o)||iJ(b,a.g,a.o.l)&&iJ(b,a.A,a.o.g))}a&&(a=hJ(this.B),this.tc("reseek",MB({cur:a.lct,vb:a.lvb,ab:a.lab})),CK(this,this.getCurrentTime(),!0))};
g.h.bz=function(){this.g.oa||this.O("connectionissue")};
g.h.vI=function(){this.A.experiments.g("html5_new_seeking")||this.l.xb(this.l.getCurrentTime()+.1)};
g.h.Pi=function(){var a=this,b=this.l.Oc();b&&b.then(void 0,function(){g.T(a.o,4)||mL(a,"promise")})};
g.h.iG=function(a){var b={};g.Ka(b,this.A.B);b.cpn=this.g.clientPlaybackNonce;this.g.He&&(b.vvt=this.g.He,this.g.mdxEnvironment&&(b.mdx_environment=this.g.mdxEnvironment));this.A.jc&&(b.authuser=this.A.jc);this.A.pageId&&(b.pageid=this.A.pageId);g.kc(a.C,b);wJ(a,a.U)};
g.h.zF=function(a,b,c,d){d=void 0===d?"YTP_ERROR_LICENSE":d;c=c.substr(0,256);"drm.keyerror"==a&&1<this.H.l.keys.length&&96>this.mf&&(a="drm.sessionlimitexhausted",b=!1);if(b)g.wK(this,a,d,c);else if(this.C)this.C.onError(a,c);"drm.sessionlimitexhausted"==a&&(this.mf++,pL(this))};
g.h.BF=function(){var a=this,b=this.A.experiments.l("html5_license_constraint_delay"),c=Zr();b&&c?(b=new g.P(function(){YK(a,"r");tK(a)},b),g.K(this,b),b.start()):(YK(this,"r"),tK(this))};
g.h.AF=function(){var a=this;Ez&&(this.fa=zz(this.g.ka))&&(this.fa.g?g.Df(function(){a.xu()}):jJ(this.B,this.fa))};
g.h.zA=function(a){this.O("heartbeatparams",a)};
g.h.AA=function(a){this.tc("keystatuses",IJ(a));var b=0;this.g.Ba&&(b=this.g.Ba.video.g);a:{for(var c in a.g)if("output-restricted"==a.g[c].status){a=!0;break a}a=!1}a&&480<b&&this.O("drmoutputrestricted")};
g.h.uu=function(){if(!this.g.Fd&&this.l&&!Zv()){var a="0";0<this.l.g.readyState&&5<=zE(this.l)&&this.g.Ia.g&&(uK(this,LE(this.o,1)),qL(this,"load_soft_timeout"),this.O("playbackstalledatstart"),a="1");this.C&&(a={preroll:""+ +BK(this),restartmsg:a},this.B&&g.Ka(a,hJ(this.B)),this.l&&g.Ka(a,CE(this.l)),this.C.onError("qoe.start15s",MB(a)));this.O("loadsofttimeout")}};
g.h.So=function(){if(!this.Wa){var a=new UJ(this.g);if("c1a"in a.l){var b=g.z("yt.abuse.botguardInitialized");b=!(b&&b())}else b=!1;if(b)g.or((0,g.A)(this.So,this),4500);else{if(a.g&&a.g.wj){b=[a.g.wj];for(var c in a.o)if(a.l[c]&&a.o[c]){var d=a.o[c](a.l);d&&b.push(d)}a=b.join("&")}else a=null;a&&this.C&&(c=this.C,c.L||(b=xF(c,"atr"),b.K=a,b.send(),c.L=!0),this.Wa=!0)}}};
g.h.tb=function(){return this.A.experiments.g("html5_new_seeking")?this.F?this.F.tb():0:this.g.tb()};
g.h.rs=function(){return this.Ha};
g.h.Em=function(){if(this.l)a:{var a=this.l;var b={};if(a.g){if(a.g.getVideoPlaybackQuality){a=a.g.getVideoPlaybackQuality();break a}a.g.webkitDecodedFrameCount&&(b.totalVideoFrames=a.g.webkitDecodedFrameCount,b.droppedVideoFrames=a.g.webkitDroppedFrameCount)}a=b}else a={};return a};
g.h.tc=function(a,b,c){if(this.C){var d=this.C;d.ga()||kF(d.l,a,b,void 0===c?!1:c)}};g.r(rL,FF);g.h=rL.prototype;g.h.getPlayerType=function(){return this.playerType};
g.h.getRootNode=function(){return g.zL(this).element};
g.h.De=function(){return this.app.C};
g.h.Y=function(a){return(a=g.V(this.app,a||this.playerType))&&a.g};
g.h.isWidescreen=function(){return this.app.isWidescreen()};
g.h.Oc=function(a){3==this.Ca()?g.xL(this.app.A).yi("control_play"):wW(this.app,a)};
g.h.cf=function(a){fL(g.V(this.app,a))};
g.h.addEventListener=function(a,b){this.app.ba.subscribe(a,b)};
g.h.removeEventListener=function(a,b){this.app.ba.unsubscribe(a,b)};
g.h.Fi=function(a){this.it(a,a)};
g.h.Bi=function(a){return YV(this.app,a)};
g.h.getVideoUrl=function(a,b,c,d){var e=this.Ca(),f=2==e;if(d&&f||3==e)f=!1,e=1;d=this.Y(e);if(!d)return"";var k;a||d.oa||(k=Math.floor(this.getCurrentTime(e)));return this.app.g.getVideoUrl(d.videoId,f?void 0:this.getPlaylistId()||void 0,k,b,c)};
g.h.Hi=function(a,b,c){var d=g.sL(this).A;d&&d.Kn(a,b,c)};
g.h.qc=function(){if(g.U(this).P)return!1;var a=g.V(this.app,1);if(!a)return!1;var b=a.g;return b.Nc()&&!g.UD(b)&&2!=this.Ca()&&(!BK(a)||3==this.Ca())};
g.h.Ig=function(a,b){var c=this.app,d=g.V(c,this.playerType);d&&c.g.Mb.has(a.toString())?d.C?(c=xF(d.C,"engage"),c.C=a,c.send(b)):b&&b():b&&b()};
g.h.Ce=function(a,b){WV(this.app,a,b)};
g.h.setVolume=function(a){a=g.Vc(a,0,100);Rv(this.app,{volume:a,muted:this.isMuted()},!0)};
g.h.mute=function(){Rv(this.app,{muted:!0,volume:this.getVolume()},!0)};
g.h.Ee=function(){Rv(this.app,{muted:!1,volume:Math.max(5,this.getVolume())},!0)};
g.h.sc=function(a){g.U(this).F&&this.app.L.click(a)};
g.h.Va=function(a,b){if(g.U(this).F){var c=this.app.L,d=a.getAttribute("data-visual-id");g.Ta(c.g,a);b?g.Wa(c.l,d):g.Ya(c.l,d);b&&!g.Ta(c.o,d)&&(VL(c,"onLogVesShown",{ids:[d]}),g.Wa(c.o,d))}};
g.h.gi=function(){return g.V(this.app)};ZL.prototype.fetch=function(a){var b=this,c=a.match(/\[(?:BISCOTTI|MUTSU)_ID\]/g);if(!c)return aM(this,a);var d=c.includes("[BISCOTTI_ID]");c=c.includes("[MUTSU_ID]");var e=1===this.l;e&&(d&&$L(this,"a_bid_s"),c&&$L(this,"a_mid_s"));var f=d?qaa():"",k=c?saa():"";if(null!==f&&null!==k)return e&&(d&&$L(this,"a_bid_f"),c&&$L(this,"a_mid_f")),aM(this,a,f,k);f=d?raa():Nf("");k=c?taa():Nf("");e&&(d&&Uf(f,function(){return $L(b,"a_bid_f")}),c&&Uf(k,function(){return $L(b,"a_mid_f")}));
return g.Sf([f,k]).then(function(c){return aM(b,a,c[0],c[1])})};var Bca={PL:"replaceUrlMacros",UK:"isExternalShelfAllowedFor"};g.F(g.bM,g.R);g.h=g.bM.prototype;g.h.load=function(){this.loaded=!0};
g.h.unload=function(){this.loaded=!1};
g.h.Dc=function(){return!0};
g.h.T=function(){this.loaded&&this.unload();g.bM.ua.T.call(this)};
g.h.Ow=function(){return{}};g.r(dM,g.JF);jM.prototype.showCompanion=function(a,b,c){return kM(this).then(function(){return oM(a,b,c)})};qM.prototype.showCompanion=function(a,b){b.contentVideoId||(b.contentVideoId=a);this.l.la("updatekevlarcompanion",b)};rM.prototype.P=function(){return!1};g.r(uM,rM);uM.prototype.g=function(){return!0};
uM.prototype.isListed=function(){return this.F};
uM.prototype.isSkippable=function(){return null!=this.R};
uM.prototype.P=function(){return!0};g.r(vM,rM);vM.prototype.g=function(){return!1};g.r(wM,rM);wM.prototype.g=function(){return!1};g.r(xM,rM);xM.prototype.g=function(){return!0};g.r(zM,rM);zM.prototype.g=function(){return!1};var Baa=1;g.r(g.CM,g.J);g.CM.prototype.ca=function(a,b){g.va(b)?Dd(a,this.element,b):a.appendChild(this.element)};
g.CM.prototype.update=function(a){for(var b in a)this.updateValue(b,a[b])};
g.CM.prototype.updateValue=function(a,b){var c=this.Ha["{{"+a+"}}"];c&&EM(this,c[0],c[1],b)};
g.CM.prototype.T=function(){this.Z={};this.Ha={};g.FM(this);g.J.prototype.T.call(this)};g.r(GM,rM);g.r(g.W,g.CM);g.h=g.W.prototype;g.h.sb=function(a,b){this.updateValue(b||"content",a)};
g.h.show=function(){this.aa||(g.HM(this.element,""),this.aa=!0)};
g.h.hide=function(){this.aa&&(g.HM(this.element,"none"),this.aa=!1)};
g.h.Na=function(){return this.aa};
g.h.ea=function(a,b,c){return this.M(this.element,a,b,c)};
g.h.M=function(a,b,c,d){c=(0,g.A)(c,d||this);d={target:a,type:b,listener:c};this.U.push(d);a.addEventListener(b,c);return d};
g.h.Pa=function(a){for(var b=0;b<this.U.length;b++)if(this.U[b]==a){a=this.U.splice(b,1)[0];a.target.removeEventListener(a.type,a.listener);break}};
g.h.focus=function(){g.Pd(this.element);this.element.focus()};
g.h.T=function(){for(;this.U.length;){var a=this.U.pop();a.target.removeEventListener(a.type,a.listener)}g.CM.prototype.T.call(this)};PM.prototype.Jc=function(a,b){var c=this;a.forEach(function(a){return c.og(a,b)})};
PM.prototype.og=function(a,b){(a.loggingUrls||a.urlEndpoint&&a.urlEndpoint.url)&&RM(a,b);a.adLifecycleCommand&&Caa(this,a.adLifecycleCommand)};g.r(TM,g.W);TM.prototype.Jc=function(a){a=void 0===a?null:a;null!=a&&SM(a,this.g)};
TM.prototype.og=function(a){a=void 0===a?null:a;null!=a&&RM(a,this.g)};g.r(UM,TM);UM.prototype.A=function(a){g.Ys(a);this.Jc(this.l.onClickCommands);this.og(this.l.clickthroughEndpoint)};g.r(VM,GM);VM.prototype.g=function(){return!1};
VM.prototype.B=function(){var a=new pM;a.imageCompanionAdRenderer=this.l;return a};
VM.prototype.A=function(){return this.C};
VM.prototype.o=function(a,b){return new UM(a,this.l,b)};g.r(WM,rM);WM.prototype.g=function(){return!0};g.r(YM,rM);YM.prototype.g=function(){return!1};g.r($M,rM);$M.prototype.g=function(){return!0};g.r(dN,rM);dN.prototype.g=function(){return!0};g.r(eN,rM);eN.prototype.g=function(){return!0};g.r(fN,rM);fN.prototype.g=function(){return!0};g.r(hN,yM);g.r(iN,rM);iN.prototype.g=function(){return!1};g.r(jN,TM);jN.prototype.A=function(){this.Jc(this.l.onClickCommands)};g.r(kN,GM);kN.prototype.g=function(){return!1};
kN.prototype.B=function(){var a=new xaa;a.url=this.l.iframeUrl||null;a.width=this.l.iframeWidth||0;a.height=this.l.iframeHeight||0;var b=lN(this.l.impressionCommands||[]);a.impressionTrackingUrls=b;b=lN(this.l.onClickCommands||[]);a.clickTrackingUrls=b;b=new pM;b.iframeCompanionRenderer=a;return b};
kN.prototype.A=function(){return[new g.bd(300,60)]};
kN.prototype.o=function(a){return new jN(a,this.l)};mN.prototype.Kc=function(){return this.V};var Maa=["FINAL","CPN","MIDROLL_POS","SDKV","SLOT_POS"];g.r(xN,g.R);xN.prototype.dispose=function(){this.g.clear();g.R.prototype.dispose.call(this)};
var yN=null;g.y("ytads.bulleit.getVideoMetadata",function(a){return(a=zN().g.get(a))?a.qt():{}},void 0);
g.y("ytads.bulleit.triggerExternalActivityEvent",function(a,b,c){var d=zN();c=Naa(c);null!=c&&d.O(c,{queryId:a,viewabilityString:b})},void 0);g.r(FN,g.J);g.r(GN,g.J);g.r(ON,g.R);g.h=ON.prototype;g.h.qt=function(){return{}};
g.h.nn=function(){return!1};
g.h.getDuration=function(){return this.g.getDuration(2)};
g.h.nk=function(){HN(this.l,"pause")};
g.h.pk=function(){if(!this.U){this.F||this.bc();var a=this.l;a.l.hasOwnProperty("pause")&&HN(a,"resume")}};
g.h.Hf=function(){var a=this.l;LN(a,0,!0);MN(a,0,0,!0);HN(a,"complete")};
g.h.Xd=function(){var a=this.l;!a.l.hasOwnProperty("impression")||a.l.hasOwnProperty("skip")||a.l.hasOwnProperty("complete")||NN(a,"abandon")};
g.h.Ve=function(){NN(this.l,"skip")};
g.h.bc=function(){var a=TN(this);this.l.g.AD_CPN=a;IN(this.l);this.F=!0};
g.h.bd=function(a){var b=this.l;b.g=uN(b.g,sN(3,"There was an error playing the video ad. Error code: "+a));HN(b,"error")};
g.h.av=function(){this.O("b")};
g.h.bv=function(){this.O("f")};
g.h.cv=function(){this.O("g")};
g.h.dv=function(){this.O("h")};
g.h.ev=function(){this.O("i")};
g.h.fv=function(){this.O("j")};
g.h.gv=function(){this.O("n")};
g.h.dispose=function(){if(!this.ga()){SN(this);this.A.unsubscribe("b",this.av,this);this.A.unsubscribe("f",this.bv,this);this.A.unsubscribe("g",this.cv,this);this.A.unsubscribe("h",this.dv,this);this.A.unsubscribe("i",this.ev,this);this.A.unsubscribe("j",this.fv,this);this.A.unsubscribe("n",this.gv,this);for(var a=this.A,b=[],c=g.q(a.g),d=c.next();!d.done;d=c.next()){d=g.q(d.value);var e=d.next().value;d.next().value==this&&b.push(e)}b=g.q(b);for(c=b.next();!c.done;c=b.next())a.g["delete"](c.value);
g.R.prototype.dispose.call(this)}};g.r(UN,hM);g.r(WN,ON);WN.prototype.ub=function(){var a=new UN(this.I.l,this.macros),b=this.g.Y(2);!b||b.ze?(this.o=this.B.bind(this,a),this.g.addEventListener("videodatachange",this.o)):b.profilePicture&&b.channelBanner&&(XN(b,a),RN(this,[a]))};
WN.prototype.B=function(a,b,c,d){c&&2==d&&(this.o&&(this.g.removeEventListener("videodatachange",this.o),this.o=null),c.profilePicture&&c.channelBanner&&(XN(c,a),RN(this,[a])))};
WN.prototype.ad=function(){};
WN.prototype.T=function(){this.o&&(this.g.removeEventListener("videodatachange",this.o),this.o=null);ON.prototype.T.call(this)};g.r(YN,hM);g.r(ZN,ON);g.h=ZN.prototype;g.h.ub=function(){0<this.o&&this.bc()};
g.h.bc=function(){this.xa=new g.P(g.B(this.ot,"e"),this.o,this);g.K(this,this.xa);this.xa.start();RN(this,[new YN(this.B.l,this.macros)]);ON.prototype.bc.call(this)};
g.h.Xd=function(){ON.prototype.Xd.call(this);this.ot("a")};
g.h.ot=function(a){this.xa&&this.xa.stop();"e"==a&&this.Hf();SN(this);this.O(a)};
g.h.ad=function(){};g.r($N,hM);g.r(aO,ON);aO.prototype.ub=function(){var a=new $N(this.I.l,this.macros);RN(this,[a])};
aO.prototype.ad=function(){};g.r(bO,ON);bO.prototype.ub=function(){var a=TN(this);this.l.g.AD_CPN=a;IN(this.l)};
bO.prototype.ad=function(){};g.r(cO,hM);g.r(dO,ON);dO.prototype.ub=function(){var a=new cO(this.o.l,this.macros);RN(this,[a])};
dO.prototype.ad=function(){};g.r(eO,hM);g.r(fO,ON);g.h=fO.prototype;g.h.ub=function(){this.bc()};
g.h.bc=function(){RN(this,[new eO(this.o.l)]);ON.prototype.bc.call(this)};
g.h.bd=function(a){ON.prototype.bd.call(this,a);SN(this);this.O("e")};
g.h.Ve=function(){ON.prototype.Ve.call(this);SN(this);this.O("e")};
g.h.ad=function(a){switch(a){case "persisting-skip-button":this.Ve()}};g.r(gO,hM);g.r(hO,ON);hO.prototype.ub=function(){var a=new gO(this.o.l,this.macros);RN(this,[a])};
hO.prototype.ad=function(){};g.r(iO,hM);g.r(jO,ON);jO.prototype.ub=function(){var a=new iO(this.I.l,this.macros);RN(this,[a])};
jO.prototype.ad=function(){};g.r(kO,hM);g.r(lO,ON);g.h=lO.prototype;g.h.nn=function(){return!0};
g.h.ub=function(){this.F?this.o&&(this.o.g=!0,Qaa(this,[this.o])):this.bc()};
g.h.bc=function(){this.o=new kO(this.B.A);this.o.g=this.B.o;RN(this,[this.o]);ON.prototype.bc.call(this)};
g.h.getDuration=function(){return this.B.l};
g.h.Xd=function(){ON.prototype.Xd.call(this);SN(this);this.O("a")};
g.h.Ve=function(){ON.prototype.Ve.call(this);SN(this);this.O("e")};
g.h.bd=function(a){ON.prototype.bd.call(this,a);SN(this);this.O("e")};
g.h.ad=function(a){switch(a){case "ad-info-icon-button":case "toggle-button":this.nk();break;case "skip-button":this.Ve();break;case "ad-feedback-dialog-close-button":case "ad-feedback-dialog-confirm-button":case "survey-submit":SN(this),this.O("e")}};g.r(mO,hM);g.r(nO,ON);g.h=nO.prototype;g.h.ub=function(){this.bc()};
g.h.bc=function(){RN(this,[new mO(this.o.l,this.macros)]);ON.prototype.bc.call(this)};
g.h.Xd=function(){ON.prototype.Xd.call(this);SN(this);this.O("a")};
g.h.bd=function(a){ON.prototype.bd.call(this,a);SN(this);this.O("e")};
g.h.ad=function(){};g.r(oO,hM);g.r(pO,ON);g.h=pO.prototype;g.h.ub=function(){0<this.o&&this.bc()};
g.h.bc=function(){this.xa=new g.P(this.Hf,this.o,this);g.K(this,this.xa);this.xa.start();RN(this,[new oO(this.B.l)]);ON.prototype.bc.call(this)};
g.h.Hf=function(){ON.prototype.Hf.call(this);qO(this,"e")};
g.h.Xd=function(){ON.prototype.Xd.call(this);qO(this,"a")};
g.h.bd=function(a){ON.prototype.bd.call(this,a);qO(this,"e")};
g.h.ad=function(){};g.r(rO,hM);g.r(sO,hM);g.r(tO,hM);g.r(uO,hM);g.r(vO,hM);g.r(wO,hM);g.r(xO,hM);g.r(yO,ON);g.h=yO.prototype;g.h.ry=function(a){if((a=JSON.parse(a.response))&&a.items&&a.items.length){a=a.items[0].snippet;if(a){var b=a.title;var c=g.Zb(a,"thumbnails","default","url")}(a=this.o.V)&&b&&c?c=[new uO(a),new sO(c),new vO(b)]:(g.Q(Error("Channel metadata contains null for "+(a?b?"channel icon thumbnail.":"channel name.":"video title."))),c=[]);RN(this,c)}};
g.h.qt=function(){var a=this.g.getCurrentTime(2),b=this.o.o;var c=this.g;c=AN(c)&&1==c.rh(2);return{currentTime:a,duration:b,isPlaying:c,isVpaid:!1,isYouTube:!0,volume:this.g.getVolume()/100}};
g.h.nn=function(){return!0};
g.h.ub=function(){var a=this.o.A.legacyInfoCardVastExtension,b=this.o.K;a&&b&&g.U(this.g).L.add(b,{Ij:a});EN(this.g,!1);a=BN(this.o);this.B.start();this.g.Gi(a,!0,2)};
g.h.nk=function(){ON.prototype.nk.call(this);this.O("k",2)};
g.h.pk=function(){ON.prototype.pk.call(this);this.O("l",1)};
g.h.bc=function(){ON.prototype.bc.call(this);this.B.stop();var a=this.C,b=this.g.Y(2);a.co=b?b.clientPlaybackNonce:null;this.o.isListed()&&this.o.B&&(a=g.Kg("https://www.googleapis.com/youtube/v3/channels",{id:this.o.B,part:"snippet",fields:"items/snippet/title,items/snippet/thumbnails/default/url",key:"AIzaSyA-dlBUjVQeuc4a6ZN4RkNUYDFddrVLxrA"}),b={timeout:2E3,method:"GET"},b.ib=(0,g.A)(this.ry,this),g.Fr(a,b));a=[];a.push(Saa(this));b=this.o.C;if(null==b)b=null;else{var c={};b.urlEndpoint&&(c.url=
b.urlEndpoint.url,c.target="TARGET_NEW_WINDOW");b=new xO({navigationEndpoint:{urlEndpoint:c}})}b&&a.push(b);b=1E3*this.o.o;b=0<b&&7050>=b;this.o.isSkippable()&&!b&&(b=BO(this),(b=b.skipOrPreviewRenderer&&b.skipOrPreviewRenderer.skipAdRenderer)||(b=zO(this)),a.push(new tO(b)));b=BO(this);a.push(new wO(b));RN(this,a);this.g.isMuted()&&(a=this.g.isMuted(),HN(this.l,a?"mute":"unmute"));this.O("l",1)};
g.h.Hf=function(){ON.prototype.Hf.call(this);CO(this,"e")};
g.h.Xd=function(){ON.prototype.Xd.call(this);CO(this,"a")};
g.h.Ve=function(){ON.prototype.Ve.call(this);CO(this,"e")};
g.h.bd=function(a){ON.prototype.bd.call(this,a);CO(this,"e")};
g.h.fz=function(){this.bd("net.timeout")};
g.h.ad=function(a){switch(a){case "ad-mute-confirm-dialog-confirm-button":case "ad-feedback-dialog-close-button":case "ad-feedback-dialog-confirm-button":CO(this,"e");break;case "ad-mute-confirm-dialog-close-button":case "ad-feedback-undo-mute-button":case "ad-info-dialog-close-button":this.g.Oc();break;case "ad-info-icon-button":this.g.Xb();break;case "ad-channel-thumbnail":case "advertiser-name":a=g.U(this.g).protocol+"://"+yB(g.U(this.g))+"/channel/"+this.o.B;g.OM(a);break;case "ad-title":this.g.Xb();
g.OM(this.g.getVideoUrl());break;case "visit-advertiser":this.g.Xb();if(a=this.o.C)Paa(this.l,a.loggingUrls||null),a.urlEndpoint&&a.urlEndpoint.url&&g.OM(a.urlEndpoint.url);NN(this.l,"clickthrough");break;case "skip-button":this.Ve()}};g.r(HO,g.R);g.h=HO.prototype;g.h.Kc=function(){return this.g.Kc()};
g.h.fo=function(){return oN(this.g)};
g.h.Pm=function(a){this.H=a;eM(this.H)||(this.U&&(this.V=this.C.isPeggedToLive(),this.R=Math.ceil((0,g.H)()/1E3)),MO(this.B,[this.H]));YO(this.B,this);a=g.q(this.g.R);for(var b=a.next();!b.done;b=a.next())IO(b.value);a=g.q(this.g.K);for(b=a.next();!b.done;b=a.next())b=DO(this.C,b.value,this.L,this.B),PN(b),g.Ee(b);a=g.q(this.g.P);for(b=a.next();!b.done;b=a.next()){b=DO(this.C,b.value,this.L,this.B);var c=b.l;c.g=uN(c.g,sN(0,"No playable media files can be selected"));HN(c,"error");g.Ee(b)}this.F.l=
!1;XC("video_to_ad",["apbs"]);this.Vu()};
g.h.wk=function(){return!g.Ua(this.g.I)||!g.Ua(this.g.F)||0<this.g.C.length||0<this.g.l.length};
g.h.Kr=function(){return!!g.Ua(this.g.H)&&!this.wk()};
g.h.Vu=function(){if(0<this.g.g.length){for(var a=g.q(this.g.g),b=a.next();!b.done;b=a.next())b=b.value,0<b.H.length||(b=BN(b),this.C.Yn(b,2));this.Qi()}else 0<this.g.o.length?this.ub(this.g.o[0]):0<this.g.B.length?this.ub(this.g.B[0]):g.Ua(this.g.H)?g.Ua(this.g.I)?g.Ua(this.g.F)?0<this.g.C.length?this.ub(this.g.C[0]):this.xf():this.ub(this.g.F[0]):this.ub(this.g.I[0]):this.ub(this.g.H[0])};
g.h.vt=function(a){a=void 0===a?!1:a;this.ko(0);a||this.I?this.xf(a):this.Qi()};
g.h.bE=function(){this.l.forEach(function(a){NN(a.l,"active_view_measurable")})};
g.h.cE=function(){this.l.forEach(function(a){NN(a.l,"active_view_fully_viewable_audible_half_duration")})};
g.h.dE=function(){this.l.forEach(function(){})};
g.h.eE=function(){this.l.forEach(function(){})};
g.h.fE=function(){this.l.forEach(function(){})};
g.h.gE=function(){this.l.forEach(function(){})};
g.h.iE=function(){this.l.forEach(function(a){NN(a.l,"active_view_viewable")})};
g.h.jo=function(a){if(0!=this.l.length){var b=a.state;g.T(b,2)?(Taa(this.F),this.l.forEach(function(a){return a.Hf()})):b.gb()?(Uaa(this.F),this.l.forEach(function(a){return a.pk()})):b.isError()?this.l.forEach(function(a){return a.bd(b.g.errorCode)}):g.T(b,4)&&this.l.forEach(function(a){return a.nk()})}};
g.h.xt=function(){};
g.h.ko=function(a){var b=this.B.g.app;1==a&&(b.I.g("vr"),b.sa||(b.sa=yC(b.ju,b)),kL(b.F),HF(b.I,qW(b)));var c=b.g;(g.JB(c)&&c.ob||g.BB(c))&&b.l.la("onAdStateChange",a)};
g.h.wt=function(a){this.B.g.la("onAdUxUpdate",a)};
g.h.ho=function(a){this.l.forEach(function(b){return b.ad(a)})};
g.h.Qi=function(){this.K++;this.K<this.P&&0<this.P?this.ub(this.g.g[this.K]):this.xf();var a=this.F,b=this.C,c=this.g.Kc().o,d=this.K,e=this.P;FO(a);var f=b.Y(1);b=b.Y(2);f&&(a.A=f.clientPlaybackNonce,a.F=f.videoId);b&&(a.B=b.clientPlaybackNonce,a.o=b.videoId);a.H=c;0>=e?FO(a):(a.I?a.g="video_to_ad":d<e?a.g="ad_to_ad":d==e&&(a.g="ad_to_video"),a.K=d+1==e,a.C=!0,a.C&&(g.LC("c",a.L,a.g),g.LC("cver",a.P,a.g),g.LC("yt_pt","html5",a.g),g.LC("yt_pre","2",a.g),g.LC("yt_abt",a.H,a.g),a.A&&g.LC("cpn",a.A,
a.g),a.F&&g.LC("docid",a.F,a.g),a.B&&g.LC("ad_cpn",a.B,a.g),a.o&&g.LC("ad_docid",a.o,a.g)))};
g.h.ub=function(a){a instanceof dN&&(this.I=!0);this.Ov()&&(g.Fe(this.l),this.l.length=0);a=DO(this.C,a,this.L,this.B);this.l.push(a);g.K(this,a);a.subscribe("a",g.B(this.vt,!0),this);a.subscribe("b",this.bE,this);a.subscribe("e",this.vt,this);a.subscribe("f",this.cE,this);a.subscribe("g",this.dE,this);a.subscribe("h",this.eE,this);a.subscribe("i",this.fE,this);a.subscribe("j",this.gE,this);a.subscribe("k",this.ko,this);a.subscribe("l",this.ko,this);a.subscribe("onAdUxUpdate",this.wt,this);a.subscribe("n",
this.iE,this);PN(a)};
g.h.Ov=function(){return!0};
g.h.xf=function(a){a=void 0===a?!1:a;g.Fe(this.l);this.l.length=0;this.H=null;if(!a){a=g.q(this.g.U);for(var b=a.next();!b.done;b=a.next())IO(b.value)}this.U&&this.fo()&&0<this.g.g.length?WO(this.B,Waa(this)):WO(this.B)};g.r(KO,g.R);KO.prototype.Kc=function(){return this.l.Kc()};
KO.prototype.fo=function(){return oN(this.l)};
KO.prototype.wk=function(){return!1};
KO.prototype.Pm=function(a){var b=this,c=a.A;c&&!c.g&&(c.g=!0);c=g.Eo(this.l.L,this.B);this.g=a;Uf(this.A.fetch(c).then(function(a){b.ga()||aba(b,a)}),function(){eM(b.g)&&VO(b.o);
var a=b.g.A;a&&a.g&&(a.g=!1)})};g.r(NO,ON);g.h=NO.prototype;g.h.Pm=function(a){var b=this;MO(this.L,[a]);if(this.B instanceof kN){a=this.g.Y(2);if(!a||a.ze){this.o=function(a,d,e){d&&2==e&&(b.o&&(b.g.removeEventListener("videodatachange",b.o),b.o=null),d.isListed&&b.ub())};
this.g.addEventListener("videodatachange",this.o);return}if(!a.isListed)return}this.ub()};
g.h.ub=function(){var a=this;YO(this.L,this);if(CN(this.g)){var b=this.g.Y(1),c=this.B.B();null!=c&&(c.macros=Object.assign({},this.macros),this.P.showCompanion(b.videoId,c))}else{var d=this.B.A();yaa(this.P).then(function(b){a:{if(d&&b){b=g.q(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;for(var e=g.q(d),l=e.next();!l.done;l=e.next())if(l=l.value,l.width==c.width&&l.height==c.height){b=l;break a}}}b=null}b&&(c=a.B.o(a.g,b),null!=c&&(g.K(a,c),e=a.P,e.g&&e.g.showCompanion(c.element,b.width,b.height)))})}if(this.B instanceof
kN){this.C=this.Hz.bind(this);
try{window.addEventListener("message",this.C)}catch(e){g.Q(e)}}};
g.h.Hz=function(a){var b;if(b=a.data)a:{try{if(Ar(a.source.document.location.origin)){b=!0;break a}}catch(d){g.Q(d)}b=!1}if(b)if(b=this.B.l,"companion-setup-complete"==a.data)try{a.source.postMessage(JSON.stringify(b),"*");var c=a.source.frameElement;c.parentNode.style.cssText="";c.width=String(b.iframeWidth);c.height=String(b.iframeHeight)}catch(d){g.Q(d)}else"pause-video"==a.data&&this.g.Xb()};
g.h.Kc=function(){return this.K.Kc()};
g.h.fo=function(){return oN(this.K)};
g.h.wk=function(){return!0};
g.h.ad=function(){};
g.h.T=function(){if(this.C)try{window.removeEventListener("message",this.C),this.C=null}catch(a){g.Q(a)}this.o&&(this.g.removeEventListener("videodatachange",this.o),this.o=null);ON.prototype.T.call(this)};g.r(OO,HO);g.h=OO.prototype;g.h.Kr=function(){return null==this.A?!1:this.A.g.some(function(a){return a.g()})};
g.h.Vu=function(){this.o&&(this.o.subscribe("e",this.xf,this),this.o.subscribe("onAdUxUpdate",this.wt,this),PN(this.o));this.Qi()};
g.h.Qi=function(){if(null!=this.A)if(this.A.g.length){var a=this.A.g.shift();this.ub(a);1==this.A.o&&this.A.g.length&&this.Qi()}else this.xf()};
g.h.xf=function(a){a=void 0===a?!1:a;this.o&&g.Ee(this.o);HO.prototype.xf.call(this,a)};
g.h.xt=function(){for(var a=this.l;a.length;)if(a[0].nn()){a[0].ub();break}else g.Ee(a.shift())};
g.h.Ov=function(){return null==this.A?!0:0==this.A.o};
g.h.jo=function(a){HO.prototype.jo.call(this,a);this.o&&(a=a.state,g.T(a,2)?this.o.Hf():a.gb()?this.o.pk():a.isError()&&this.o.bd(a.g.errorCode))};
g.h.ho=function(a){HO.prototype.ho.call(this,a);this.o&&this.o.ad(a)};var PO=null,RO=null;g.y("yt.www.ads.eventcache.getLastCompanionData",function(){return PO},void 0);
g.y("yt.www.ads.eventcache.getLastPlaShelfData",function(){return RO},void 0);g.r(UO,g.R);g.h=UO.prototype;
g.h.init=function(){var a=this.g.Y();if(a.Wl||g.hr("SERVED_VIA_SPF_HISTORY"))VO(this);else{if(CN(this.g)){var b=Qv(this.g);b.addEventListener("updatekevlarcompanion",QO);b.addEventListener("onPlaShelfInfoCardsReady",SO);window.addEventListener("yt-navigate-start",TO)}this.da.M(this.g,"applicationplayerstatechange",this.ZC);b=bba(a.getPlayerResponse()||{});b=cba(this,b);if(0<b.length){LO(this,b);b=!1;for(var c=g.q(this.A),d=c.next();!d.done;d=c.next())if(eM(d.value)){b=!0;break}c=g.U(this.g);if(!b&&
!g.mB(c))for(b=g.q(this.A),c=b.next();!c.done;c=b.next())c.value.g=!1}this.da.M(this.g,"crn_ad",this.eo,this);this.da.M(this.g,"crx_ad",this.aD,this);a.subscribe("cuepointupdated",this.ku,this);VO(this);g.Df(this.ZI,this)}};
g.h.T=function(){g.ft(this.da);this.g.Y(1).unsubscribe("cuepointupdated",this.ku,this);if(CN(this.g)){var a=Qv(this.g);a.removeEventListener("updatekevlarcompanion",QO);a.removeEventListener("onPlaShelfInfoCardsReady",SO);window.removeEventListener("yt-navigate-start",TO);PO=null}a=g.q(this.B.values());for(var b=a.next();!b.done;b=a.next())ZO(this,b.value);WO(this);this.A.clear();this.H=[];this.F=null;g.Ee(this.o);this.o=null;this.B.clear();g.R.prototype.T.call(this)};
g.h.eo=function(a){if(!a.g){this.F=null;var b=g.yL(this.g);g.T(b,32)||g.T(b,16)?this.F=a:(b=this.B.get(a))&&b.Pm(a)}};
g.h.aD=function(a){a.g&&(a.g=!1);a==this.F&&(this.F=null)};
g.h.ku=function(a){if(null==this.I)g.Q(Error("Dynamically inserted ad was requested, but no cuepoint AdPlacementRenderer was present to fulfill the request."));else{var b=this.g.getCurrentTime()||0;a=a.filter(function(a){return 0!=b&&a.Pd>b});
LO(this,[this.I],a)}};
g.h.cD=function(a){this.l&&this.l.jo(a)};
g.h.ZC=function(a){0>VE(a,16)&&this.F&&this.eo(this.F)};
g.h.dD=function(){if(AN(this.g)&&this.l){var a=this.g.getCurrentTime(2);JO(this.l,a)}};
g.h.YC=function(){this.L=!0;this.l&&Vaa(this.l)};
g.h.hE=function(a){this.l&&this.l.ho(a)};
g.h.eD=function(){2==this.g.Ca()&&this.l&&Xaa(this.l)};
g.h.bD=function(a){this.l&&Yaa(this.l,a)};
g.h.ZI=function(){for(var a=[],b=g.q(this.A),c=b.next();!c.done;c=b.next())c=c.value,eM(c)||a.push(c);c=this.g;b=c.app;(c=c.playerType)&&wL(b)!=c||NL(b,"cuerangemarkersupdated",a)};g.r(g.bP,g.W);g.bP.prototype.subscribe=function(a,b,c){return this.R.subscribe(a,b,c)};
g.bP.prototype.unsubscribe=function(a,b,c){return this.R.unsubscribe(a,b,c)};
g.bP.prototype.wc=function(a){return this.R.wc(a)};
g.bP.prototype.O=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];return this.R.O.apply(this.R,[].concat([a],g.qa(c)))};g.r(cP,g.J);cP.prototype.Oh=function(a){this.ha().appendChild(a)};
g.r(eP,cP);eP.prototype.ha=function(){return this.g};g.r(X,g.bP);g.h=X.prototype;g.h.vj=function(a){dP(a,this.fa)};
g.h.bind=function(a){if(this.K)this.Nk(a);else if(a.renderer){var b=Object.assign({},fP(this.g,this.l),a.macros);this.init(a.id,a.renderer,b,a)}return window.Promise.resolve()};
g.h.init=function(a,b,c){this.K=a;this.element.setAttribute("id",this.K);this.X&&g.M(this.element,this.X);this.macros=c;this.H=b.trackingParams||null;null!=this.H&&jP(this,this.element,this.H)};
g.h.Nk=function(){};
g.h.clear=function(){};
g.h.hide=function(){g.bP.prototype.hide.call(this);null!=this.H&&this.Va(this.element,!1)};
g.h.show=function(){g.bP.prototype.show.call(this);null!=this.H&&this.Va(this.element,!0)};
g.h.onClick=function(){if(null!=this.H){var a=this.element;XL(this.g,a)&&this.Na()&&this.g.sc(a)}};
g.h.getImageUrl=function(a){a=void 0===a?null:a;return null==a||(a=a.thumbnail,null==a||null==a.thumbnails||g.Ua(a.thumbnails)||null==a.thumbnails[0].url)?"":g.Hb(a.thumbnails[0].url)};
g.h.Va=function(a,b){XL(this.g,a)&&this.g.Va(a,b)};
g.h.T=function(){this.clear(null);g.bP.prototype.T.call(this)};g.r(lP,X);lP.prototype.init=function(a,b,c){var d=b.thumbnail;d=d&&kP(d)||"";g.tb(d)?g.Q(Error("Found AdImage without valid image URL"),"WARNING"):(g.md(this.element,{src:d}),X.prototype.init.call(this,a,b,c),this.show())};
lP.prototype.clear=function(){this.hide()};g.r(mP,X);mP.prototype.init=function(a,b,c){this.o=b;this.isTemplated()||g.Md(this.element,gP(this.o));X.prototype.init.call(this,a,b,c);this.show()};
mP.prototype.isTemplated=function(){return this.o.isTemplated||!1};
mP.prototype.clear=function(){this.hide()};g.r(LP,X);
LP.prototype.init=function(a,b,c){this.B=b;if(null==b.text&&null==b.icon)g.Q(Error("ButtonRenderer did not have text or an icon set."),"WARNING");else{switch(b.style||null){case "STYLE_UNKNOWN":var d="ytp-ad-button-link";break;default:d=null}null!=d&&g.M(this.element,d);null!=b.text&&(d=g.nD(b.text),g.tb(d)||(this.element.setAttribute("aria-label",d),this.C=new g.bP({D:"span",J:"ytp-ad-button-text",G:[d]}),g.K(this,this.C),this.C.ca(this.element)));null!=b.icon&&(d=KP(b.icon),null!=d&&(this.A=new g.bP({D:"span",
J:"ytp-ad-button-icon",G:[d]}),g.K(this,this.A)),this.F?Dd(this.element,this.A.element,0):this.A.ca(this.element));X.prototype.init.call(this,a,b,c)}};
LP.prototype.clear=function(){this.hide()};
LP.prototype.onClick=function(a){X.prototype.onClick.call(this,a);SM(MP(this),this.macros);this.g.ae(this.componentType)};g.r(NP,X);g.h=NP.prototype;
g.h.init=function(a,b,c){var d=this;X.prototype.init.call(this,a,b,c);this.o&&(this.o.cancel(),this.o=null);this.o=new g.Jf(g.wa);b.bannerImage?b.iconImage?b.headline?b.description?b.actionButton&&b.actionButton.buttonRenderer?b.navigationEndpoint?(this.B.init(gM("ad-image"),b.bannerImage,c),this.L.init(gM("ad-image"),b.iconImage,c),this.F.init(gM("ad-text"),b.headline,c),this.C.init(gM("ad-text"),b.description,c),this.A.init(gM("button"),b.actionButton.buttonRenderer,c),g.Md(this.Z["yt-badge-ad"],
g.S("YTP_AD_BADGE")),this.P=b.impressionCommands||[],this.I=b.navigationEndpoint,this.da.M(this.element,"click",this.onClick,this),window.Promise.race([this.o,this.ba.showCompanion(this.element,300,250)]).then(function(){return d.show()})):g.Q(Error("ActionCompanionAdRenderer has no navigation endpoint.")):g.Q(Error("ActionCompanionAdRenderer has no button.")):g.Q(Error("ActionCompanionAdRenderer has no description string.")):g.Q(Error("ActionCompanionAdRenderer has no headline string.")):g.Q(Error("ActionCompanionAdRenderer has no icon image.")):
g.Q(Error("ActionCompanionAdRenderer has no banner image."))};
g.h.clear=function(){g.ft(this.da);this.hide()};
g.h.show=function(){this.A.show();X.prototype.show.call(this);SM(this.P,this.macros)};
g.h.hide=function(){this.A.hide();X.prototype.hide.call(this)};
g.h.onClick=function(a){X.prototype.onClick.call(this,a);this.I&&RM(this.I,this.macros)};
g.h.T=function(){this.o&&(this.o.cancel(),this.o=null);X.prototype.T.call(this)};g.r(OP,g.J);OP.prototype.T=function(){this.C&&g.wt(this.C);this.o&&(this.o.cancel(),this.o=null);this.B&&g.wt(this.B);this.g&&(this.g.cancel(),this.g=null);this.l&&(this.l.cancel(),this.l=null);this.A&&(this.A.stop(),this.A=null);g.J.prototype.T.call(this)};g.r(UP,X);UP.prototype.init=function(a,b,c){var d=this;X.prototype.init.call(this,a,b,c);this.o&&(this.o.cancel(),this.o=null);this.o=new g.Jf(g.wa);"BACKFILL_MPU_TYPE_AFV"==b.type?window.Promise.race([this.o,iba(this.A)]).then(function(){SM(b.impressionEndpoints||[],d.macros)}):"BACKFILL_MPU_TYPE_AFC"==b.type&&(b.mpuAllowed?window.Promise.race([this.o,
jba(this.A)]).then(function(){SM(b.impressionEndpoints||[],d.macros)},function(){SM(b.noAdEndpoints||[],d.macros)}):SM(b.noAdEndpoints||[],this.macros))};
UP.prototype.T=function(){this.o&&(this.o.cancel(),this.o=null);X.prototype.T.call(this)};var wba={seekableStart:0,seekableEnd:1,current:0};g.r(VP,X);VP.prototype.clear=function(){this.dispose()};g.r(YP,VP);g.h=YP.prototype;g.h.init=function(a,b,c){VP.prototype.init.call(this,a,b,c);g.mh(this.B,"stroke-dasharray","0 "+this.A);this.show()};
g.h.clear=function(){this.hide()};
g.h.hide=function(){XP(this);VP.prototype.hide.call(this)};
g.h.show=function(){WP(this);VP.prototype.show.call(this)};
g.h.Zk=function(){this.hide()};
g.h.Ri=function(){if(this.o){var a=this.o.g();null!=a&&null!=a.current&&g.mh(this.B,"stroke-dasharray",a.current/a.seekableEnd*this.A+" "+this.A)}};g.r(ZP,g.R);ZP.prototype.stop=function(){this.xa.stop()};
ZP.prototype.C=function(){var a=(0,g.H)()-this.F,b=!1;a>this.l&&(a=this.l,this.xa.stop(),b=!0);this.o={seekableStart:0,seekableEnd:this.l/1E3,current:a/1E3};if(this.A){a=this.A;var c=this.o.current;a.l&&JO(a.l,c)}this.O("p");b&&this.O("o")};
ZP.prototype.g=function(){return this.o};g.r($P,X);g.h=$P.prototype;
g.h.init=function(a,b,c){X.prototype.init.call(this,a,b,c);if(b.image&&b.image.thumbnail)if(b.headline)if(b.description)if(b.background)if(b.actionButton&&b.actionButton.buttonRenderer)if(a=b.durationMilliseconds||0,!g.va(a)||0>=a)g.Q(Error("durationMilliseconds was specified incorrectly in AdActionInterstitialRenderer with a value of: "+a));else if(b.navigationEndpoint){var d=this.g.Y(2);if(null!=d){var e=b.image.thumbnail.thumbnails;null!=e&&0<e.length&&g.tb(g.Hb(e[0].url))&&(e[0].url=d.profilePicture);
e=b.background.thumbnails;null!=e&&0<e.length&&g.tb(g.Hb(e[0].url))&&(e[0].url=d.kc(g.U(this.g)));e=b.headline;null!=e&&g.tb(g.Hb(e.text))&&(e.text=d.author)}this.C.init(gM("ad-image"),b.image,c);this.I.init(gM("ad-text"),b.headline,c);this.F.init(gM("ad-text"),b.description,c);d=(d=b.background)&&kP(d)||"";g.tb(d)?kr(Error("Found ThumbnailDetails without valid image URL")):g.mh(this.P,"backgroundImage","url("+d+")");this.o=new LP(this.g,this.l,["ytp-ad-action-interstitial-action-button"]);g.K(this,
this.o);this.o.ca(this.A);this.o.init(gM("button"),b.actionButton.buttonRenderer,c);this.L=b.navigationEndpoint;this.da.M(this.P,"click",this.onClick,this);this.B=new ZP(a);g.K(this,this.B);(b=b.countdownRenderer)&&b.timedPieCountdownRenderer&&this.B&&(c=new YP(this.g,this.l,this.B),g.K(this,c),c.ca(this.element),c.init(gM("timed-pie-countdown"),b.timedPieCountdownRenderer,this.macros));this.show()}else g.Q(Error("AdActionInterstitialRenderer has no navigation endpoint."));else g.Q(Error("AdActionInterstitialRenderer has no button."));
else g.Q(Error("AdActionInterstitialRenderer has no background."));else g.Q(Error("AdActionInterstitialRenderer has no description AdText."));else g.Q(Error("AdActionInterstitialRenderer has no headline AdText."));else g.Q(Error("AdActionInterstitialRenderer has no image."))};
g.h.clear=function(){g.ft(this.da);this.hide()};
g.h.show=function(){this.Wi(!0);this.o&&this.o.show();X.prototype.show.call(this)};
g.h.hide=function(){this.Wi(!1);this.o&&this.o.hide();X.prototype.hide.call(this)};
g.h.onClick=function(a){X.prototype.onClick.call(this,a);this.L&&RM(this.L,this.macros)};
g.h.Wi=function(a){var b=g.kd("html5-video-player");b&&g.O(b,"ytp-ad-display-override",a)};g.r(aQ,X);g.h=aQ.prototype;g.h.init=function(a,b,c){X.prototype.init.call(this,a,b,c);b.text?(a=b.durationMilliseconds||0,!g.va(a)||0>=a?g.Q(Error("durationMilliseconds was specified incorrectly in AdTextInterstitialRenderer with a value of: "+a)):(this.o.init(gM("ad-text"),b.text,c),this.show())):g.Q(Error("AdTextInterstitialRenderer has no message AdText."))};
g.h.clear=function(){this.hide()};
g.h.show=function(){this.Wi(!0);X.prototype.show.call(this)};
g.h.hide=function(){this.Wi(!1);X.prototype.hide.call(this)};
g.h.onClick=function(){};
g.h.Wi=function(a){var b=g.kd("html5-video-player");b&&g.O(b,"ytp-ad-display-override",a)};g.r(cQ,X);g.h=cQ.prototype;
g.h.init=function(a,b,c){this.o=b;this.I=g.bb(this.o.onClickCommands||[]);var d;if(d=this.o.contentSupportedRenderer)if(d=this.o.contentSupportedRenderer,d.textOverlayAdContentRenderer){d=d.textOverlayAdContentRenderer;var e=gP(d.title),f=gP(d.description);g.tb(e)||g.tb(f)?d=!1:(jP(this,this.C.element,d.trackingParams||null),this.C.updateValue("title",gP(d.title)),this.C.updateValue("description",gP(d.description)),this.C.updateValue("displayUrl",gP(d.displayUrl)),d.navigationEndpoint&&cb(this.I,
d.navigationEndpoint),dQ(this,this.C),this.C.show(),this.Va(this.C.element,!0),d=!0)}else if(d.enhancedTextOverlayAdContentRenderer)d=d.enhancedTextOverlayAdContentRenderer,e=gP(d.title),f=gP(d.description),g.tb(e)||g.tb(f)?d=!1:(jP(this,this.A.element,d.trackingParams||null),this.A.updateValue("title",gP(d.title)),this.A.updateValue("description",gP(d.description)),this.A.updateValue("displayUrl",gP(d.displayUrl)),this.A.updateValue("imageUrl",this.getImageUrl(d.image)),d.navigationEndpoint&&cb(this.I,
d.navigationEndpoint),this.L=d.imageNavigationEndpoint||null,dQ(this,this.A),this.A.show(),this.Va(this.A.element,!0),d=!0);else if(d.imageOverlayAdContentRenderer){d=d.imageOverlayAdContentRenderer;b:{e=d.image;e=void 0===e?null:e;if(null!=e&&(e=e.thumbnail,null!=e&&null!=e.thumbnails&&!g.Ua(e.thumbnails)&&null!=e.thumbnails[0].width&&null!=e.thumbnails[0].height)){e=new g.bd(e.thumbnails[0].width||0,e.thumbnails[0].height||0);break b}e=new g.bd(0,0)}0==e.width||0==e.height?d=!1:(jP(this,this.B.element,
d.trackingParams||null),this.B.updateValue("imageUrl",this.getImageUrl(d.image)),this.B.updateValue("width",e.width),this.B.updateValue("height",e.height),d.navigationEndpoint&&cb(this.I,d.navigationEndpoint),g.mh(this.B.Z["ytp-ad-image-overlay"],"max-width",e.width+"px"),dQ(this,this.B),this.B.show(),this.Va(this.B.element,!0),(new g.P(this.clear,45E3,this)).start(),this.M(this.g,"resize",g.B(this.Sb,e)),d=!0)}else d=!1;d&&(X.prototype.init.call(this,a,b,c),this.F.start(),this.show(),eQ(this,!0),
SM(this.o&&this.o.impressionCommands?this.o.impressionCommands:[],this.macros))};
g.h.Sb=function(a){var b=this.element;var c=g.ed(b),d=g.qd&&b.currentStyle;d&&g.nd(g.gd(c).g)&&"auto"!=d.width&&"auto"!=d.height&&!d.boxSizing?(c=g.Jh(b,d.width,"width","pixelWidth"),b=g.Jh(b,d.height,"height","pixelHeight"),b=new g.bd(c,b)):(d=new g.bd(b.offsetWidth,b.offsetHeight),c=g.Lh(b),b=g.Oh(b),b=new g.bd(d.width-b.left-c.left-c.right-b.right,d.height-b.top-c.top-c.bottom-b.bottom));(a.width>b.width||a.height>b.height)&&this.clear()};
g.h.clear=function(){eQ(this,!1);this.F.reset();this.C.hide();this.Va(this.C.element,!1);this.A.hide();this.Va(this.A.element,!1);this.B.hide();this.Va(this.B.element,!1);this.hide();this.dispose()};
g.h.Li=function(a,b){var c=g.hc(this.macros),d=g.Dh(b,a).floor();c.I_X={toString:function(){return d.x.toString()}};
c.I_Y={toString:function(){return d.y.toString()}};
SM(this.I,c)};
g.h.rH=function(){this.L&&RM(this.L,this.macros)};
g.h.so=function(){this.clear();a:{if(this.o&&this.o.closeButton&&this.o.closeButton.buttonRenderer){var a=this.o.closeButton.buttonRenderer;if(a.serviceEndpoint){a=[a.serviceEndpoint];break a}}a=[]}SM(a,this.macros)};
g.h.zo=function(){var a=this.o&&this.o.attributionEndpoint?this.o.attributionEndpoint:null;null!=a&&RM(a,this.macros)};
g.r(bQ,g.J);g.h=bQ.prototype;g.h.reset=function(){this.C=!1;this.g.stop();this.o.stop();this.l=!1;g.N(this.B,this.A)};
g.h.start=function(){this.reset();this.g.start()};
g.h.dG=function(){this.l&&(this.l=!1,g.N(this.B,this.A));this.o.stop();this.g.stop()};
g.h.aG=function(){this.C?this.o.start():this.g.start()};
g.h.Xp=function(){this.l||(this.l=!0,g.M(this.B,this.A),this.C=!0)};g.r(g.fQ,g.J);g.h=g.fQ.prototype;g.h.show=function(a){1!=this.g&&2!=this.g&&(3==this.g&&this.Al(),4==this.g?(this.l.show(),this.g=null,this.o.stop()):this.l.Na()||(gQ(this,!0),this.g=1,a?this.o.start(a):this.Al()))};
g.h.hide=function(a){3!=this.g&&(1==this.g||2==this.g?(this.l.hide(),this.g=null,this.o.stop()):this.l.Na()&&(a&&(this.A=a),gQ(this,!0),this.g=3,this.o.start(this.B)))};
g.h.Al=function(){switch(this.g){case 1:this.l.show();this.g=2;this.o.start(10);break;case 2:gQ(this,!1);this.g=null;break;case 3:this.l.hide();gQ(this,!1);this.g=4;this.o.start(0);break;case 4:this.g=null,this.A&&this.A()}};
g.h.stop=function(){for(;null!=this.g&&4!=this.g;)this.o.stop(),this.Al()};
g.h.T=function(){this.l.ga()||this.l.element.removeAttribute("aria-hidden");g.J.prototype.T.call(this)};g.r(hQ,VP);g.h=hQ.prototype;
g.h.init=function(a,b,c){var d=b.durationMilliseconds;g.va(d)&&0>d&&g.Q(Error("durationMilliseconds was specified incorrectly in AdPreviewRenderer with a value of: "+d));d=b.durationMilliseconds;this.L=null==d||0===d?1E3*this.g.getDuration(2):d;if(b.templatedCountdown)var e=b.templatedCountdown.templatedAdText;else b.staticPreview&&(e=b.staticPreview);this.A.init(gM("ad-text"),e,c);this.g.Y()&&this.g.Y().ep&&b.thumbnail?this.F.init(gM("ad-image"),b.thumbnail,c):this.I.hide();VP.prototype.init.call(this,
a,b,c);this.P.show(100);this.show()};
g.h.clear=function(){this.hide()};
g.h.hide=function(){this.B.hide();this.A.hide();this.F.hide();XP(this);VP.prototype.hide.call(this)};
g.h.show=function(){WP(this);this.B.show();this.A.show();this.F.show();VP.prototype.show.call(this)};
g.h.Zk=function(){this.hide()};
g.h.Ri=function(){if(null!=this.o){var a=this.o.g();if(null!=a&&null!=a.current)if(a=1E3*a.current,a>=this.L)iQ(this);else if(this.A&&this.A.isTemplated()&&(a=Math.max(0,Math.ceil((this.L-a)/1E3)),a!=this.ba)){var b=this.A,c={TIME_REMAINING:String(a)};null!=c&&g.Md(b.element,gP(b.o,c));this.ba=a}}};g.r(jQ,X);g.h=jQ.prototype;
g.h.init=function(a,b,c){this.B=b;if(!b||g.dc(b))g.Q(Error("SkipButtonRenderer was not specified or empty."),"ERROR");else if(!b.message||g.dc(b.message))g.Q(Error("SkipButtonRenderer.message was not specified or empty."),"ERROR");else{var d={iconType:"SKIP_NEXT"},e=KP(d);null==e?g.Q(Error("Icon for SkipButton was unable to be retrieved. yt.innertube.Icon.IconType: "+d.iconType+"."),"ERROR"):(this.C=new g.bP({D:"button",W:["ytp-ad-skip-button","ytp-button"],G:[{D:"span",J:"ytp-ad-skip-button-icon",
G:[e]}]}),g.K(this,this.C),this.C.ca(this.A.element),this.o=new mP(this.g,this.l,"ytp-ad-skip-button-text"),this.o.init(gM("ad-text"),this.B.message,c),g.K(this,this.o),Dd(this.C.element,this.o.element,0));X.prototype.init.call(this,a,b,c)}};
g.h.clear=function(){this.hide()};
g.h.hide=function(){this.A.hide();this.o&&this.o.hide();X.prototype.hide.call(this)};
g.h.onClick=function(a){null!=this.C&&(g.Ys(a),X.prototype.onClick.call(this,a),SM(this.B&&this.B.onClickCommands||[],this.macros),this.g.ae(this.componentType))};
g.h.show=function(){this.F||(SM(this.B&&this.B.impressionCommands||[],this.macros),this.F=!0);this.A.show();this.o&&this.o.show();X.prototype.show.call(this)};g.r(kQ,VP);g.h=kQ.prototype;
g.h.init=function(a,b,c){var d=b&&b.preskipRenderer&&b.preskipRenderer.adPreviewRenderer||{};d=g.dc(d)?null:d;null==d?this.I=0:(this.I=null!=d.durationMilliseconds&&void 0!==d.durationMilliseconds?d.durationMilliseconds:5E3,this.A=new hQ(this.g,this.l,this.o),this.A.init(gM("preskip-component"),d,c),g.K(this,this.A),this.A.ca(this.element));d=b&&b.skippableRenderer&&b.skippableRenderer.skipButtonRenderer||{};d=g.dc(d)?null:d;null==d?g.Q(Error("SkipButtonRenderer was not set in player response."),"ERROR"):
(null!=d&&(this.B=new jQ(this.g,this.l,this.L),this.B.init(gM(this.L?"persisting-skip-button":"skip-button"),d,c),g.K(this,this.B),this.B.ca(this.element)),VP.prototype.init.call(this,a,b,c),this.show())};
g.h.show=function(){this.F&&this.B?this.B.show():this.A&&this.A.show();WP(this);VP.prototype.show.call(this)};
g.h.Zk=function(){};
g.h.clear=function(){this.A&&this.A.clear();this.B&&this.B.clear();XP(this);VP.prototype.hide.call(this)};
g.h.hide=function(){this.A&&this.A.hide();this.B&&this.B.hide();XP(this);VP.prototype.hide.call(this)};
g.h.Ri=function(){1E3*this.o.g().current>=this.I&&lQ(this,!0)};g.r(mQ,X);mQ.prototype.init=function(a,b,c){X.prototype.init.call(this,a,b,c);b.skipAd&&(a=b.skipAd,a.skipAdRenderer&&(b=new kQ(this.g,this.l,this.o,!0),b.ca(this.A),b.init(gM("skip-button"),a.skipAdRenderer,this.macros),g.K(this,b)));this.show()};g.r(pQ,VP);g.h=pQ.prototype;g.h.init=function(a,b,c){if(b.templatedCountdown){var d=b.templatedCountdown.templatedAdText;if(!d.isTemplated){g.Q(Error("AdDurationRemainingRenderer has no templated ad text."),"WARNING");return}this.A=new mP(this.g,this.l);this.A.init(gM("ad-text"),d,{});this.A.ca(this.element);g.K(this,this.A)}VP.prototype.init.call(this,a,b,c);this.show()};
g.h.clear=function(){this.hide()};
g.h.hide=function(){XP(this);VP.prototype.hide.call(this)};
g.h.Zk=function(){this.hide()};
g.h.Ri=function(){if(null!=this.o){var a=this.o.g();if(null!=a&&null!=a.current){var b=this.o instanceof ZP?a.seekableEnd:this.g.getDuration(2);b=g.nQ(b-a.current);this.A&&(a=this.A,b={FORMATTED_AD_DURATION_REMAINING:String(b)},null!=b&&g.Md(a.element,gP(a.o,b)))}}};
g.h.show=function(){WP(this);VP.prototype.show.call(this)};g.r(qQ,X);g.h=qQ.prototype;
g.h.init=function(a,b,c){X.prototype.init.call(this,a,b,c);if(b.reasons)if(null==b.confirmLabel)g.Q(Error("AdFeedbackRenderer.confirmLabel was not set."),"ERROR");else{null==b.cancelLabel&&g.Q(Error("AdFeedbackRenderer.cancelLabel was not set."),"WARNING");null==b.title&&g.Q(Error("AdFeedbackRenderer.title was not set."),"WARNING");if(a=b.cancelRenderer&&b.cancelRenderer.buttonRenderer||null)this.o=new LP(this.g,this.l,["ytp-ad-feedback-dialog-close-button"],"button"),g.K(this,this.o),this.o.init(gM("button"),
a,this.macros),this.o.ea("click",this.Ot,this),this.o.ca(this.element);b.title&&(a=g.nD(b.title),this.updateValue("title",a));if(b.reasons)for(a=g.q(b.reasons),c=a.next();!c.done;c=a.next()){var d=c.value;c=d.reason;null==c?g.Q(Error("AdFeedbackReason.reason was not set."),"WARNING"):(d=d.endpoint,null==d?g.Q(Error("AdFeedbackReason.endpoint was not set."),"WARNING"):(c=new rQ(c,d),g.K(this,c),d=c.ha(),this.I.appendChild(d),this.B.push(c)))}b.cancelLabel&&(a=g.nD(b.cancelLabel),this.updateValue("cancelLabel",
a),g.Ss(this.C,"click",this.Ot.bind(this)));b.confirmLabel&&(a=g.nD(b.confirmLabel),this.updateValue("confirmLabel",a),g.Ss(this.F,"click",this.QD.bind(this)));b.undoRenderer&&(b=(b=b.undoRenderer)&&b.buttonRenderer||null)&&(b.serviceEndpoint?(this.A=new LP(this.g,this.l,["ytp-ad-feedback-dialog-undo-mute-button"],"ad-feedback-undo-mute-button"),g.K(this,this.A),this.A.init(gM("ad-feedback-undo-mute-button"),b,this.macros),this.A.ea("click",this.AH,this),this.A.ca(this.L)):g.Q(Error("AdFeedbackRenderer.undoRenderer.undoButtonRenderer was specified but did not contain a service endpoint."),
"WARNING"))}else g.Q(Error("AdFeedbackRenderer.reasons were not set."),"ERROR")};
g.h.clear=function(){bt(this.C);bt(this.F);this.B.length=0;this.hide()};
g.h.hide=function(){this.o&&this.o.hide();this.A&&this.A.hide();X.prototype.hide.call(this)};
g.h.show=function(){this.o&&this.o.show();this.A&&this.A.show();X.prototype.show.call(this)};
g.h.Ot=function(){this.g.ae("ad-feedback-dialog-close-button");this.hide()};
g.h.QD=function(){var a=this.B.filter(function(a){return a.o.checked});
0!==a.length&&(RM(a[0].l,this.macros),this.g.ae("ad-feedback-dialog-confirm-button"),this.hide())};
g.h.AH=function(){this.hide()};
rQ.prototype.ha=function(){return this.g.element};g.r(sQ,X);g.h=sQ.prototype;g.h.init=function(a,b,c){X.prototype.init.call(this,a,b,c);this.o=b;b.dialogMessages||null!=b.title?null==b.confirmLabel?g.Q(Error("ConfirmDialogRenderer.confirmLabel was not set."),"ERROR"):null==b.cancelLabel?g.Q(Error("ConfirmDialogRenderer.cancelLabel was not set."),"ERROR"):lba(this,b):g.Q(Error("Neither ConfirmDialogRenderer.title nor ConfirmDialogRenderer.dialogMessages were set."),"ERROR")};
g.h.clear=function(){g.ft(this.da);this.hide()};
g.h.Do=function(){this.hide()};
g.h.Co=function(){var a=this.o.cancelEndpoint;a&&RM(a,this.macros);this.hide()};
g.h.Eo=function(){var a=this.o.confirmNavigationEndpoint||this.o.confirmEndpoint;a&&RM(a,this.macros);this.hide()};g.r(tQ,sQ);tQ.prototype.Do=function(a){sQ.prototype.Do.call(this,a);this.g.ae("ad-mute-confirm-dialog-close-button")};
tQ.prototype.Co=function(a){sQ.prototype.Co.call(this,a);this.g.ae("ad-mute-confirm-dialog-close-button")};
tQ.prototype.Eo=function(a){sQ.prototype.Eo.call(this,a);this.g.ae("ad-mute-confirm-dialog-confirm-button")};g.r(uQ,X);g.h=uQ.prototype;
g.h.init=function(a,b,c){X.prototype.init.call(this,a,b,c);this.F=b;if(null==b.dialogMessage&&null==b.title)g.Q(Error("Neither AdInfoDialogRenderer.dialogMessage nor AdInfoDialogRenderer.title was set."),"ERROR");else{null==b.confirmLabel&&g.Q(Error("AdInfoDialogRenderer.confirmLabel was not set."),"WARNING");if(a=b.closeOverlayRenderer&&b.closeOverlayRenderer.buttonRenderer||null)this.o=new LP(this.g,this.l,["ytp-ad-info-dialog-close-button"],"ad-info-dialog-close-button"),g.K(this,this.o),this.o.init(gM("button"),
a,this.macros),this.o.ca(this.element);b.title&&(a=g.nD(b.title),this.updateValue("title",a));b.dialogMessage&&(a=g.mD(b.dialogMessage,!0),this.V.appendChild(a));b.confirmLabel&&(a=g.nD(b.confirmLabel),this.updateValue("confirmLabel",a));if(b.muteAdRenderer&&(b=(b=b.muteAdRenderer)&&b.buttonRenderer||null))if(a=b.navigationEndpoint&&b.navigationEndpoint.adFeedbackEndpoint||null,c=b.navigationEndpoint&&b.navigationEndpoint.confirmDialogEndpoint||null,null==a&&null==c)g.Q(Error("AdInfoDialogRenderer.muteAdRenderer was specified but contains neither an AdFeedbackEndpoint, nor a ConfirmDialogEndpoint."),
"WARNING");else{if(a){if(a=a.content&&a.content.adFeedbackRenderer||null)this.B=new qQ(this.g,this.l),g.K(this,this.B),this.B.init(gM("ad-feedback-dialog"),a,this.macros),this.B.ca(this.L)}else c&&(a=c.content&&c.content.confirmDialogRenderer||null)&&(this.C=new tQ(this.g,this.l),g.K(this,this.C),this.C.init(gM("ad-mute-confirm-dialog"),a,this.macros),this.C.ca(this.L));this.A=new LP(this.g,this.l,["ytp-ad-info-dialog-mute-button"],"button",!0);g.K(this,this.A);this.A.init(gM("button"),b,this.macros);
this.A.ea("click",this.RD,this);this.A.ca(this.P)}this.o.ea("click",this.Pt,this);g.Ss(this.I,"click",this.Pt.bind(this))}};
g.h.clear=function(){bt(this.I);this.hide()};
g.h.hide=function(){this.B?this.B.hide():this.C&&this.C.hide();this.o&&this.o.hide();this.A&&this.A.hide();X.prototype.hide.call(this)};
g.h.show=function(){this.o&&this.o.show();this.A&&this.A.show();X.prototype.show.call(this)};
g.h.Pt=function(){this.F&&this.F.confirmServiceEndpoint&&RM(this.F.confirmServiceEndpoint,this.macros);this.g.ae("ad-info-dialog-close-button");this.hide()};
g.h.RD=function(){var a=this.B?this.B:this.C;a&&!a.Na()&&(this.hide(),a.show())};g.r(vQ,LP);vQ.prototype.init=function(a,b,c){this.o&&!g.Kp(this.element,"ytp-ad-clickable")&&g.M(this.element,"ytp-ad-clickable");LP.prototype.init.call(this,a,b,c);this.show()};
vQ.prototype.onClick=function(){this.o&&!this.o.Na()&&(this.o.show(),SM(MP(this),this.macros),this.g.ae(this.componentType))};g.r(wQ,X);
wQ.prototype.init=function(a,b,c){if(b.hoverText){var d=b.button&&b.button.buttonRenderer||null;if(null==d)g.Q(Error("AdInfoOverlayRenderer.button was not set in player response."),"WARNING");else{var e=b.hoverText;this.B=new g.bP({D:"div",J:"ytp-ad-info-hover-text-container",G:[{D:"div",J:"ytp-ad-info-hover-text-callout"}]});g.K(this,this.B);this.B.ca(this.element);e=g.mD(e);Dd(this.B.element,e,0);e=d.serviceEndpoint&&d.serviceEndpoint.adInfoDialogEndpoint||null;var f="ytp-ad-info-hover-text-long";if(e){if(e=
e.dialog&&e.dialog.adInfoDialogRenderer||null)this.A=new uQ(this.g,this.l,this.C),g.K(this,this.A),this.A.init(gM("ad-info-dialog"),e,c),this.A.ca(this.C);f="ytp-ad-info-hover-text-short"}g.M(this.B.element,f);this.o=new vQ(this.g,this.l,this.A);g.K(this,this.o);this.o.init(gM("ad-info-icon-button"),d,c);this.o.ca(this.element);X.prototype.init.call(this,a,b,c);this.show()}}else g.Q(Error("AdInfoOverlayRenderer.hoverText not set in player response."),"WARNING")};
wQ.prototype.hide=function(){this.o&&this.o.hide();this.A&&this.A.hide();X.prototype.hide.call(this)};
wQ.prototype.show=function(){this.o&&this.o.show();X.prototype.show.call(this)};g.r(xQ,X);g.h=xQ.prototype;
g.h.init=function(a,b,c){this.A=b;if(null==b.defaultText&&null==b.defaultIcon)g.Q(Error("ToggleButtonRenderer must have either text or icon set."));else if(null==b.defaultIcon&&null!=b.toggledIcon)g.Q(Error("ToggleButtonRenderer cannot have toggled icon set without a default icon."));else{if(b.style){switch(b.style.styleType){case "STYLE_UNKNOWN":case "STYLE_DEFAULT":var d="ytp-ad-toggle-button-default-style";break;default:d=null}null!=d&&g.M(this.B,d)}d={};if(b.defaultText){var e=g.nD(b.defaultText);
g.tb(e)||(d.buttonText=e,this.o.setAttribute("aria-label",e))}else g.Ih(this.L,!1);b.defaultTooltip&&(d.tooltipText=b.defaultTooltip);b.defaultIcon?(e=KP(b.defaultIcon),this.updateValue("untoggledIconTemplateSpec",e),b.toggledIcon?(this.I=!0,e=KP(b.toggledIcon),this.updateValue("toggledIconTemplateSpec",e)):(g.Ih(this.F,!0),g.Ih(this.C,!1)),g.Ih(this.o,!1)):g.Ih(this.P,!1);g.dc(d)||this.update(d);b.isToggled&&(g.M(this.B,"ytp-ad-toggle-button-toggled"),this.toggleButton(b.isToggled));yQ(this);this.M(this.element,
"change",this.OD);X.prototype.init.call(this,a,b,c);this.show()}};
g.h.OD=function(){g.O(this.B,"ytp-ad-toggle-button-toggled",this.isToggled());SM(mba(this,this.isToggled()),this.macros);this.isToggled()&&this.g.ae("toggle-button");yQ(this)};
g.h.clear=function(){this.hide()};
g.h.toggleButton=function(a){g.O(this.B,"ytp-ad-toggle-button-toggled",a);this.o.checked=a;yQ(this)};
g.h.isToggled=function(){return this.o.checked};g.r(zQ,X);g.h=zQ.prototype;g.h.init=function(a,b,c){this.o=b;this.o.rectangle&&(this.B.init(gM("toggle-button"),this.o.likeButton.toggleButtonRenderer,c),this.A.init(gM("toggle-button"),this.o.dislikeButton.toggleButtonRenderer,c),this.M(this.element,"change",this.PD),X.prototype.init.call(this,a,b,c),this.C.show(100),this.show(),SM(this.o&&this.o.impressionCommands||[],this.macros))};
g.h.clear=function(){this.hide()};
g.h.hide=function(){this.B.hide();this.A.hide();X.prototype.hide.call(this)};
g.h.show=function(){this.B.show();this.A.show();X.prototype.show.call(this)};
g.h.PD=function(){g.Np(this.element,"ytp-ad-instream-user-sentiment-selected");this.o.postMessageAction&&this.g.la("onYtShowToast",this.o.postMessageAction);nba(this)};g.r(AQ,X);AQ.prototype.init=function(a,b,c){var d=b.text;if(g.tb(gP(d)))g.Q(Error("SimpleAdBadgeRenderer has invalid or empty text"),"WARNING");else{if(d&&d.text){var e={text:d.text+" \u00b7",isTemplated:d.isTemplated};d.style&&(e.style=d.style);d=new mP(this.g,this.l);d.init(gM("simple-ad-badge"),e,c);d.ca(this.element);g.K(this,d)}X.prototype.init.call(this,a,b,c);this.show()}};
AQ.prototype.clear=function(){this.hide()};g.r(BQ,LP);BQ.prototype.init=function(a,b,c){var d=!1;null!=b.text&&(d=g.nD(b.text),d=!g.tb(d));d?null==b.navigationEndpoint?g.Q(Error("No visit advertiser clickthrough provided in renderer,"),"WARNING"):"STYLE_UNKNOWN"!==b.style?g.Q(Error("Button style was not a link-style type in renderer,"),"WARNING"):(LP.prototype.init.call(this,a,b,c),this.show()):g.Q(Error("No visit advertiser text was present in the renderer."),"WARNING")};CQ.prototype.getLength=function(){return this.g-this.l};g.r(FQ,g.bP);FQ.prototype.A=function(){var a=this.l.g();a=EQ(new CQ(a.seekableStart,a.seekableEnd),a.current,0);this.C.style.width=100*a+"%"};
FQ.prototype.B=function(){g.BB(g.U(this.o))||(2==this.o.Ca()?-1===this.g&&(this.show(),this.g=this.l.subscribe("p",this.A,this),this.A()):-1!==this.g&&(this.hide(),this.l.wc(this.g),this.g=-1))};g.r(GQ,X);
GQ.prototype.init=function(a,b,c){X.prototype.init.call(this,a,b,c);b.skipOrPreviewRenderer&&(a=b.skipOrPreviewRenderer,a.skipAdRenderer?(c=new kQ(this.g,this.l,this.o),c.ca(this.B),c.init(gM("skip-button"),a.skipAdRenderer,this.macros),g.K(this,c)):a.adPreviewRenderer&&-1!==a.adPreviewRenderer.durationMilliseconds&&(c=new hQ(this.g,this.l,this.o),c.ca(this.B),c.init(gM("ad-preview"),a.adPreviewRenderer,this.macros),g.K(this,c)));b.brandInteractionRenderer&&(a=b.brandInteractionRenderer.brandInteractionRenderer,c=
new zQ(this.g,this.l),c.ca(this.C),c.init(gM("instream-user-sentiment"),a,this.macros),g.K(this,c));b.adBadgeRenderer&&(a=b.adBadgeRenderer.simpleAdBadgeRenderer,null==a&&(a={},c={},c.text=g.S("YTP_AD_BADGE"),c.isTemplated=!1,a.text=c),c=new AQ(this.g,this.l),g.K(this,c),c.ca(this.A),c.init(gM("simple-ad-badge"),a,this.macros));b.adDurationRemaining&&(a=b.adDurationRemaining.adDurationRemainingRenderer,null==a&&(a={templatedCountdown:{templatedAdText:{text:"{FORMATTED_AD_DURATION_REMAINING}",isTemplated:!0}}}),
c=new pQ(this.g,this.l,this.o),g.K(this,c),c.ca(this.A),c.init(gM("ad-duration-remaining"),a,this.macros));b.adInfoOverlay&&(a=b.adInfoOverlay,a.adInfoOverlayRenderer&&(c=new wQ(this.g,this.l,this.element),g.K(this,c),c.ca(this.A),c.init(gM("ad-info-overlay"),a.adInfoOverlayRenderer,this.macros)));b.visitAdvertiserRenderer&&(b=b.visitAdvertiserRenderer,b.buttonRenderer&&(a=new BQ(this.g,this.l),g.K(this,a),a.ca(this.A),a.init(gM("visit-advertiser"),b.buttonRenderer,this.macros)));(b=g.U(this.g))&&
!oB(b)&&"3"==b.A&&(b=new FQ(this.g,this.o),b.ca(this.F),g.K(this,b));this.show()};g.r(HQ,cP);g.r(IQ,g.J);IQ.prototype.vj=function(a){dP(a,this.view)};
IQ.prototype.Va=function(a,b){if(!this.g.has(a))throw Error("View not registered");var c=this.Nb,d=a.ha();XL(c,d)&&c.Va(d,b)};
IQ.prototype.sc=function(a){if(!this.g.has(a))throw Error("View not registered");var b=this.Nb;a=a.ha();XL(b,a)&&b.sc(a)};g.r(KQ,IQ);g.h=KQ.prototype;g.h.bind=function(a){var b=a.renderer,c=b.trackingParams;if(this.g.has(this.view)){if(this.B!=c)throw Error("Cannot re-bind presenter with new tracking params");}else this.B=c||null,pba(this,this.view,c);this.l=b.impressionEndpoints||[];this.macros=Object.assign({},a.macros);return this.Bj(a)};
g.h.Na=function(){return this.A};
g.h.show=function(){this.view.show();this.A=!0;JQ(this,!0);this.Jc(this.l);this.l=[]};
g.h.hide=function(){this.view.hide();this.A=!1;JQ(this,!1)};
g.h.onClick=function(a){a=void 0===a?{}:a;this.Vk(a);this.Na()&&this.sc(this.view)};
g.h.og=function(a){RM(a,LQ(this))};
g.h.Jc=function(a){SM(a,LQ(this))};g.r(MQ,g.W);MQ.prototype.clear=function(){for(var a=g.q(this.za),b=a.next();!b.done;b=a.next())g.Ee(b.value);this.za=[]};
MQ.prototype.C=function(a){g.Ys(a);this.g=Math.max(0,this.g-NQ(this));OQ(this)};
MQ.prototype.B=function(a){g.Ys(a);this.g=Math.min(this.za.length-1,this.g+NQ(this));OQ(this)};
MQ.prototype.T=function(){this.clear();g.W.prototype.T.call(this)};g.r(PQ,HQ);g.h=PQ.prototype;g.h.ha=function(){return this.Uc.element};
g.h.Oh=function(a){var b=this.Uc,c=new g.W({D:"li",J:"ad-carousel-listitem",G:[{D:"div",J:"ad-carousel-item"}]});c.Z["ad-carousel-item"].appendChild(a);b.za.push(c);b.A.appendChild(c.element)};
g.h.show=function(){this.Uc.show()};
g.h.hide=function(){this.Uc.hide()};
g.h.clear=function(){this.Uc.clear()};var Cca={Jx:"offerclick",oL:"offernavclick"};g.r(QQ,HQ);QQ.prototype.show=function(){this.l.show()};
QQ.prototype.hide=function(){this.l.hide()};
QQ.prototype.Qd=function(){var a=this;this.l.ea("click",function(){a.ac.O("offerclick",a)});
for(var b=g.q((this.l.element||window.document).getElementsByTagName("A")),c=b.next();!c.done;c=b.next())this.l.M(c.value,"click",function(){a.ac.O("offernavclick",a)})};
QQ.prototype.ha=function(){return this.l.element};var Dca={Nl:QQ};g.r(SQ,KQ);g.h=SQ.prototype;g.h.Pj=function(){return new Dca.Nl(this.ac)};
g.h.Bj=function(a){var b=this.se();a=a.renderer;this.o=a.clickthroughEndpoint||null;var c=a.headline||null;RQ(b.o,"headline",c);RQ(b.g,"headline",c);c=a.merchant||null;RQ(b.A,"merchant",c);RQ(b.o,"merchant",c);RQ(b.g,"merchant",c);c=a.priceText||null;RQ(b.A,"price",c);RQ(b.o,"price",c);RQ(b.g,"price",c);c=(c=a.image&&0<a.image.thumbnails.length?a.image.thumbnails[0].url||null:null)?{D:"img",N:{src:c}}:null;b.A.updateValue("image",c);b.g.updateValue("image",c);a.rating?(c=a.reviewText||null,g.Eh(b.B.element,
Math.floor(100*a.rating/5)+"%"),RQ(b.B,"reviewText",c),b.o.updateValue("review",b.B),b.g.updateValue("review",b.B)):(b.o.updateValue("review",null),b.g.updateValue("review",null));this.show();return window.Promise.resolve()};
g.h.Qd=function(){for(var a=this,b={},c=g.q(Object.values(Cca)),d=c.next();!d.done;b={type:b.type},d=c.next())b.type=d.value,this.ac.subscribe(b.type,function(b){return function(){return a.onClick({type:b.type})}}(b))};
g.h.Vk=function(a){switch(void 0===a.type?void 0:a.type){case "offernavclick":this.o&&this.og(this.o)}};
g.h.se=function(){return this.view};g.r(TQ,HQ);g.h=TQ.prototype;g.h.ha=function(){return this.g.element};
g.h.show=function(){this.g.show()};
g.h.hide=function(){this.g.hide()};
g.h.Oh=function(a){this.g.sb(a)};
g.h.T=function(){gba(this.l);HQ.prototype.T.call(this)};var VQ={Yx:TQ,Ml:SQ,Il:PQ};g.r(WQ,KQ);g.h=WQ.prototype;g.h.Pj=function(){return new VQ.Yx(this.ac)};
g.h.se=function(){return this.view};
g.h.Bj=function(a){var b=this;this.Rh();this.Bd=new g.Jf(g.wa);return window.Promise.race([this.Bd,this.se().A]).then(function(){return b.Tl(a.renderer)})};
g.h.Tl=function(a){var b=this.se();UQ(b,"shopText",a.shopText||null);UQ(b,"sponsoredText",a.sponsoredText||null);UQ(b,"adInfoText",a.adInfoText||null);a=a.itemList.horizontalListRenderer||null;this.Uh();this.Uc.clear();a=g.q(a&&a.items||[]);for(b=a.next();!b.done;b=a.next()){b=b.value.plaShelfItemRenderer;var c=new VQ.Ml(this.Nb,this.Ol);this.Kg.push(c);c.vj(this.Uc);c.bind({renderer:b,macros:this.macros})}OQ(this.Uc.Uc);qba(this);this.show()};
g.h.Qd=function(){this.da.M(this.Nb,"appresize",this.Sb)};
g.h.Sb=function(){OQ(this.Uc.Uc)};
g.h.Vk=function(){};
g.h.Rh=function(){this.Bd&&(this.Bd.cancel(),this.Bd=null)};
g.h.Uh=function(){g.Fe(this.Kg);this.Kg=[]};
g.h.T=function(){this.Rh();this.Uh();KQ.prototype.T.call(this)};var Eca={aK:"companionclick",mL:"nextbuttonclick",EL:"prevbuttonclick",VL:"shoptextclick",Jx:"offerclick"};g.r(XQ,HQ);g.h=XQ.prototype;g.h.ha=function(){return this.g.element};
g.h.Oh=function(a){this.A++;this.C.appendChild(a);YQ(this)};
g.h.show=function(){this.g.show()};
g.h.hide=function(){this.g.hide()};
g.h.clear=function(){this.A=0;g.Cd(this.C)};
g.h.scrollLeft=function(){this.l=Math.max(0,this.l-1);YQ(this)};g.r(ZQ,HQ);g.h=ZQ.prototype;g.h.ha=function(){return this.g.element};
g.h.show=function(){this.g.show()};
g.h.hide=function(){this.g.hide()};
g.h.Oh=function(a){this.g.sb(a)};
g.h.Qd=function(){var a=this;this.g.ea("click",function(){a.ac.O("companionclick",a)});
var b=g.kd("ad-companion-clickthrough",this.g.element);b&&this.g.M(b,"click",function(){a.ac.O("shoptextclick",a)})};
g.h.T=function(){HQ.prototype.T.call(this);g.Ee(this.l)};g.r($Q,HQ);$Q.prototype.show=function(){this.g.show()};
$Q.prototype.hide=function(){this.g.hide()};
$Q.prototype.Qd=function(){var a=this;this.g.ea("click",function(){a.ac.O("offerclick",a)})};
$Q.prototype.ha=function(){return this.g.element};var Fca={Nl:$Q};g.r(aR,KQ);aR.prototype.Pj=function(){return new Fca.Nl(this.ac)};
aR.prototype.Bj=function(a){var b=this.se();a=a.renderer;this.o=a.clickthroughEndpoint||null;var c=a.headline||null;c&&g.Md(b.g.Z["iv-cards-slider-text"],g.nD(c));(c=a.priceText||null)&&g.Md(b.g.Z["iv-cards-slider-action"],g.nD(c));a=a.image&&0<a.image.thumbnails.length?a.image.thumbnails[0].url||null:null;b.g.updateValue("image",a?{D:"img",N:{src:a}}:null);this.show();return window.Promise.resolve()};
aR.prototype.Vk=function(){this.o&&this.og(this.o)};
aR.prototype.se=function(){return this.view};var bR={mx:ZQ,Ml:aR,Il:XQ};g.r(cR,KQ);g.h=cR.prototype;g.h.Pj=function(){return new bR.mx(this.ac)};
g.h.se=function(){return this.view};
g.h.Bj=function(a){var b=this;this.Rh();this.Bd=new g.Jf(g.wa);return window.Promise.race([this.Bd,this.se().o]).then(function(){return b.Tl(a.renderer)})};
g.h.Tl=function(a){this.qq=a.clickTrackingEndpoints||[];this.wo=a.clickToAdvSiteEndpoint||null;var b=this.se(),c=a.adBadgeText||null;c&&g.Md(b.g.Z["yt-badge-ad"],g.nD(c));(c=a.shopText||null)&&g.Md(b.g.Z["ad-companion-clickthrough"],g.nD(c));(c=a.g||null)&&g.Md(b.g.Z["yt-uix-hovercard-content"],g.nD(c));a=a.itemList.horizontalListRenderer||null;this.Uh();this.bh.clear();a=g.q(a&&a.items||[]);for(b=a.next();!b.done;b=a.next())b=b.value.shoppingCompanionCarouselItemRenderer,c=new bR.Ml(this.Nb,this.Ol),
this.Kg.push(c),c.vj(this.bh),c.bind({renderer:b,macros:this.macros});this.show()};
g.h.Qd=function(){for(var a=this,b={},c=g.q(Object.values(Eca)),d=c.next();!d.done;b={type:b.type},d=c.next())b.type=d.value,this.ac.subscribe(b.type,function(b){return function(){return a.onClick({type:b.type})}}(b))};
g.h.Vk=function(a){switch(void 0===a.type?void 0:a.type){case "companionclick":this.Jc(this.qq);break;case "nextbuttonclick":a=this.bh;a.l=Math.min(a.A-3,a.l+1);YQ(a);break;case "prevbuttonclick":this.bh.scrollLeft();break;case "shoptextclick":this.wo&&this.og(this.wo)}};
g.h.Uh=function(){g.Fe(this.Kg);this.Kg=[]};
g.h.Rh=function(){this.Bd&&(this.Bd.cancel(),this.Bd=null)};
g.h.T=function(){this.Rh();this.Uh();KQ.prototype.T.call(this)};g.r(dR,X);dR.prototype.init=function(a,b,c){var d=this;b.toggledLoggingParams&&(this.B=b.toggledLoggingParams);if(b.clickCommands){var e=b.clickCommands;this.M(this.element,"click",function(){d.C.Jc(e,d.macros)})}if(b.answer&&b.answer.buttonRenderer){var f=new LP(this.g,this.l,["ytp-ad-survey-answer-button"],"survey-single-select-answer-button");
f.ca(this.A);f.init(gM("ytp-ad-survey-answer-button"),b.answer.buttonRenderer,c);f.show()}else b.answer&&b.answer.toggleButtonRenderer&&(this.o=new xQ(this.g,this.l,["ytp-ad-survey-answer-toggle-button"]),this.o.ca(this.A),g.K(this,this.o),this.o.init(gM("survey-answer-button"),b.answer.toggleButtonRenderer,c));X.prototype.init.call(this,a,b,c);this.show()};g.r(eR,X);eR.prototype.init=function(a,b,c){b.answer&&b.answer.toggleButtonRenderer&&(this.o=new xQ(this.g,this.l,["ytp-ad-survey-answer-toggle-button","ytp-ad-survey-none-of-the-above-button"]),this.o.ca(this.A),this.o.init(gM("survey-none-of-the-above-button"),b.answer.toggleButtonRenderer,c));X.prototype.init.call(this,a,b,c);this.show()};g.r(fR,LP);fR.prototype.init=function(a,b,c){var d=!1;b.text&&(d=g.nD(b.text),d=!g.tb(d));d?LP.prototype.init.call(this,a,b,c):g.Q(Error("No submit text was present in the renderer."),"WARNING")};
fR.prototype.onClick=function(a){this.O("q");LP.prototype.onClick.call(this,a)};g.r(gR,X);
gR.prototype.init=function(a,b,c){this.A=c;var d=b.skipOrPreviewRenderer;if(d)if(d.skipAdRenderer){d=d.skipAdRenderer;var e=new kQ(this.g,this.l,this.C);e.ca(this.I);e.init(gM("skip-button"),d,this.A);g.K(this,e);this.o=e}else d.adPreviewRenderer&&(d=d.adPreviewRenderer,e=new hQ(this.g,this.l,this.C),e.ca(this.I),e.init(gM("ad-preview"),d,this.A),g.K(this,e),this.o=e);b.submitButton&&(d=b.submitButton,d.buttonRenderer&&(d=d.buttonRenderer,e=new fR(this.g,this.l),e.ca(this.L),e.init(gM("survey-submit"),d,
this.A),g.K(this,e),this.B=e));if(d=b.adBadgeRenderer)d=d.simpleAdBadgeRenderer,e=new AQ(this.g,this.l),e.ca(this.F),e.init(gM("simple-ad-badge"),d,this.A),g.K(this,e);if(d=b.adDurationRemaining)d=d.adDurationRemainingRenderer,e=new pQ(this.g,this.l,this.C),e.ca(this.F),e.init(gM("ad-duration-remaining"),d,this.A),g.K(this,e);(d=b.adInfoOverlay)&&d.adInfoOverlayRenderer&&(e=new wQ(this.g,this.l,this.element),g.K(this,e),e.ca(this.F),e.init(gM("ad-info-overlay"),d.adInfoOverlayRenderer,this.macros));
X.prototype.init.call(this,a,b,c);this.show()};g.r(hR,X);hR.prototype.init=function(a,b,c){X.prototype.init.call(this,a,b,c);rba(this)};
hR.prototype.show=function(){this.F=(0,g.H)();X.prototype.show.call(this)};
hR.prototype.lv=function(){};
hR.prototype.Nk=function(a){a instanceof kO&&a.g&&jR(this)};g.r(lR,hR);g.h=lR.prototype;g.h.init=function(a,b,c){var d=this;hR.prototype.init.call(this,a,b,c);b.questionText&&g.Md(this.V,g.nD(b.questionText));b.answers&&b.answers.forEach(function(a){a.instreamSurveyAdAnswerRenderer&&iR(d,a.instreamSurveyAdAnswerRenderer,c)});
this.P=new window.Set(this.B.map(function(a){return a.o.o}));
(a=b.noneOfTheAbove)&&(a=a.instreamSurveyAdAnswerNoneOfTheAboveRenderer)&&sba(this,a,c);b.surveyAdQuestionCommon&&kR(this,b.surveyAdQuestionCommon);b.submitEndpoints&&(this.ia=b.submitEndpoints);this.M(this.element,"change",this.SD);this.show()};
g.h.lv=function(){mR(this,!1);this.I.B.subscribe("q",this.oH,this)};
g.h.SD=function(a){this.o&&this.o.stop();a.target==this.A.o.o?tba(this):this.P.has(a.target)&&(this.A.o.toggleButton(!1),mR(this,!0))};
g.h.oH=function(){var a=this.B.reduce(function(a,b){var c=b.B;b.o&&b.o.isToggled()&&c&&a.push(c);return a},[]).join("&"),b=this.ia.map(function(b){if(!b.loggingUrls)return b;
b=g.ic(b);b.loggingUrls=b.loggingUrls.map(function(b){b.baseUrl&&(b.baseUrl=Lg(b.baseUrl,a));return b});
return b});
b&&this.L.Jc(b,this.macros)};
g.h.clear=function(){this.dispose()};g.r(nR,hR);nR.prototype.init=function(a,b,c){var d=this;hR.prototype.init.call(this,a,b,c);null!=b.questionText&&g.Md(this.V,g.nD(b.questionText));null!=b.answers&&b.answers.forEach(function(a){null!=a.instreamSurveyAdAnswerRenderer&&iR(d,a.instreamSurveyAdAnswerRenderer,c)});
null!=b.surveyAdQuestionCommon&&kR(this,b.surveyAdQuestionCommon);this.show()};
nR.prototype.clear=function(){this.dispose()};g.r(oR,X);
oR.prototype.init=function(a,b,c,d){var e=this;null!=d&&d instanceof kO&&(b.titleText&&g.Md(this.C,g.nD(b.titleText)),b.questions.forEach(function(a){if(a.instreamSurveyAdSingleSelectQuestionRenderer){a=a.instreamSurveyAdSingleSelectQuestionRenderer;var b=new nR(e.g,e.l,e.A,d.g);b.ca(e.B);b.init(gM("survey-question-single-select"),a,c);e.o.push(b);g.K(e,b)}else a.instreamSurveyAdMultiSelectQuestionRenderer&&(a=a.instreamSurveyAdMultiSelectQuestionRenderer,b=new lR(e.g,e.l,e.A,d.g),b.ca(e.B),b.init(gM("survey-question-multi-select"),
a,c),e.o.push(b),g.K(e,b))}),X.prototype.init.call(this,a,b,c),this.show())};
oR.prototype.Nk=function(a){this.o.forEach(function(b){return b.Nk(a)})};
oR.prototype.clear=function(){this.hide();this.dispose()};g.r(pR,X);
pR.prototype.init=function(a,b,c){var d=this;X.prototype.init.call(this,a,b,c);a=b.timeoutSeconds||0;if(!g.va(a)||0>a)g.Q(Error("timeoutSeconds was specified incorrectly in SurveyTextInterstitialRenderer with a value of: "+a));else if(b.timeoutCommands)if(b.text)if(b.ctaButton&&b.ctaButton.buttonRenderer)if(b.brandImage)if(b.backgroundImage&&b.backgroundImage.thumbnailLandscapePortraitRenderer&&b.backgroundImage.thumbnailLandscapePortraitRenderer.landscape){qR(this.L,b.backgroundImage.thumbnailLandscapePortraitRenderer.landscape);qR(this.I,
b.brandImage);g.Md(this.V,g.nD(b.text));this.o=new LP(this.g,this.l,["ytp-ad-survey-interstitial-action-button"]);g.K(this,this.o);this.o.ca(this.F);this.o.init(gM("button"),b.ctaButton.buttonRenderer,c);this.o.show();var e=b.timeoutCommands;this.C=new ZP(1E3*a);this.C.subscribe("o",function(){return d.B.hide(function(){return d.A.Jc(e,c)})});
g.K(this,this.C);this.M(this.element,"click",function(a){return vba(d,a,b)});
this.B.show(100);b.impressionCommands&&this.A.Jc(b.impressionCommands,c)}else g.Q(Error("SurveyTextInterstitialRenderer has no landscape background image."));else g.Q(Error("SurveyTextInterstitialRenderer has no brandImage."));else g.Q(Error("SurveyTextInterstitialRenderer has no button."));else g.Q(Error("SurveyTextInterstitialRenderer has no text."));else g.Q(Error("timeoutSeconds was specified yet no timeoutCommands where specified"))};
pR.prototype.clear=function(){g.ft(this.da);this.hide()};g.r(rR,g.R);rR.prototype.stop=function(){this.A&&this.l.Pa(this.A)};
rR.prototype.F=function(){var a=this.o.Qf(2);this.B={seekableStart:a.seekableStart,seekableEnd:a.seekableEnd,current:a.current};this.O("p")};
rR.prototype.g=function(){return this.B};
rR.prototype.C=function(a){0<VE(a,2)&&this.O("o")};g.r(tR,g.dt);tR.prototype.F=function(a){if(Array.isArray(a)){a=g.q(a);for(var b=a.next();!b.done;b=a.next())b=b.value,b instanceof iM&&this.l(b)}};var Gca=["pla-shelf","shopping-companion","backfill-mpu-companion","action-companion"];g.r(uR,tR);uR.prototype.l=function(a){var b=a.id,c=a.content,d=c.componentType;if(Gca.includes(d)){var e=this.A();this.o||(this.o=new PM(e));switch(a.actionType){case 1:if(this.g.has(b))break;a=sR(d,this.Nb,e,this.o);if(!a){kr(Error("Unable to create component with type: "+d));break}this.g.set(b,a);case 2:b=this.g.get(b);if(!b)break;b.bind(c);break;case 3:if(c=this.g.get(b))c.dispose(),this.g["delete"](b)}}};
uR.prototype.T=function(){g.Fe([].concat(g.qa(this.g.values())))};g.r(vR,tR);
vR.prototype.l=function(a){var b=a.content;switch(b.componentType){case "pla-shelf":switch(a.actionType){case 1:case 2:this.Nb.la("onPlaShelfInfoCardsReady",{renderer:b.renderer,macros:b.macros});break;case 3:this.Nb.la("onPlaShelfInfoCardsReady",{})}break;case "shopping-companion":switch(a.actionType){case 1:case 2:a=this.Nb.Y(1);this.Nb.la("updatekevlarcompanion",{contentVideoId:a&&a.videoId,shoppingCompanionCarouselRenderer:b.renderer,macros:b.macros});break;case 3:this.Nb.la("updatekevlarcompanion",{})}break;
case "action-companion":switch(a.actionType){case 1:case 2:a=this.Nb.Y(1);this.Nb.la("updatekevlarcompanion",{contentVideoId:a&&a.videoId,actionCompanionRenderer:Raa(b),macros:b.macros});break;case 3:this.Nb.la("updatekevlarcompanion",{})}break;case "backfill-mpu-companion":switch(a.actionType){case 1:case 2:if(!b.renderer)break;a=this.Nb.Y(1);a={contentVideoId:a&&a.videoId,backfillMpuCompanionAdRenderer:b.renderer};if("BACKFILL_MPU_TYPE_AFV"==b.renderer.type)SM(b.renderer.impressionEndpoints||[],
b.macros);else if("BACKFILL_MPU_TYPE_AFC"==b.renderer.type){if(!b.renderer.mpuAllowed){SM(b.renderer.noAdEndpoints||[],b.macros);break}a.afcMpu={logImpression:(0,g.A)(SM,this,b.renderer.impressionEndpoints||[],b.macros),logNoAd:(0,g.A)(SM,this,b.renderer.noAdEndpoints||[],b.macros)}}this.Nb.la("updatekevlarcompanion",a);break;case 3:this.Nb.la("updatekevlarcompanion",{})}}};var Hca="ad-attribution-bar ad-channel-thumbnail advertiser-name ad-preview ad-title skip-button visit-advertiser".split(" ").concat(["pla-shelf","shopping-companion","backfill-mpu-companion","action-companion"]);g.r(wR,tR);
wR.prototype.l=function(a){var b=a.id,c=a.content;if(c){var d=c.componentType;if(!Hca.includes(d))switch(a.actionType){case 1:a=this.C();this.o||(this.o=new PM(a));a=sR(d,this.A,a,this.o);if(!a){g.Q(Error("No UI component returned from ComponentFactory for type: "+d),"WARNING");break}$b(this.g,b)?g.Q(Error("Ad UI component already registered: "+b),"WARNING"):this.g[b]=a;a.bind(c);a.vj(this.B);break;case 2:b=xR(this,a);if(null==b)break;b.bind(c);break;case 3:c=xR(this,a),null!=c&&(g.Ee(c),$b(this.g,
b)?fc(this.g,b):g.Q(Error("Ad UI component does not exist: "+b),"WARNING"))}}};
wR.prototype.T=function(){g.Fe(Object.values(this.g));this.g={};tR.prototype.T.call(this)};g.r(yR,g.bM);g.h=yR.prototype;g.h.create=function(){this.load();this.created=!0};
g.h.load=function(){g.bM.prototype.load.call(this);this.g.getRootNode().classList.add("ad-created");this.l=new UO(this.g,new ZL(this.g));this.l.init()};
g.h.destroy=function(){this.unload();this.created=!1};
g.h.unload=function(){g.bM.prototype.unload.call(this);this.g.getRootNode().classList.remove("ad-created");var a=this.l;this.l=null;a.dispose()};
g.h.Dc=function(){return!1};
g.h.lB=function(){if(null==this.l)var a=!1;else{a=this.l;var b=a.g.Y(2);a=b?b.isListed&&!g.mB(g.U(a.g)):!1}return a};
g.h.Fs=function(a){var b=this.l;switch(a){case "control_play":AN(b.g)&&!b.l.I&&TK(b.g.gi());break;case "control_pause":AN(b.g)&&!b.l.I&&EK(b.g.gi())}};
g.h.Es=function(){return Object.values(Bca)};
g.h.Ds=function(a,b){b=void 0===b?{}:b;switch(a){case "replaceUrlMacros":var c=b;if(c.url){var d=qN(this.g);Object.assign(d,c.additionalMapping);this.l&&!d.AD_CPN&&(d.AD_CPN=this.l.co);c=g.Eo(c.url,d)}else c=null;return c;case "isExternalShelfAllowedFor":a:if(b.playerResponse){c=b.playerResponse.adPlacements||[];for(d=0;d<c.length;d++){var e=c[d];if(e.adPlacementRenderer&&e.adPlacementRenderer.renderer&&e.adPlacementRenderer.renderer.plaShelfRenderer){c=!1;break a}}c=!0}else c=!1;return c;default:return null}};g.DR={};var Ica=[2,5];var xX=!1,yX=!1;g.vt("showCompanionAdLoaded",function(){if(yX){var a=g.z("window.google_show_companion_ad");var b=g.z("yt.www.watch.ads.getGlobals");g.Ba(a)&&g.Ba(b)?(b=b(),b=!(!b||!b.length)):b=!1;b?a():yX=!0;yX=!1}});
g.vt("watchAdsInit",function(){if(xX){xX=!1;var a=g.z("yt.www.watch.ads.loadAfc");g.Ba(a)?a():xX=!0}});new function(){this.l=1;this.g=g.va(void 0)?void 0:null;if(g.Ta(Ica,this.l)){if(!g.va(this.g)||0>this.g)throw Error("Must have valid offset");}else if(null!==this.g)throw Error("Must not have offset");};g.F(zR,g.J);g.h=zR.prototype;g.h.Bq=function(){if(!this.l){var a=this.Bq;if("lb3"==g.U(this.g).g)var b=!1;else b=this.g.Y(),b=b.Hj||b.captionTracks.length||b.oa&&b.ka&&(null!=b.ka.g.en||g.$y(b.ka))?!0:!1;(a=FR(this,"captions",a,b))&&!this.l&&(this.l=a,a.Bs()&&a.load(),this.g.la("onApiChange"))}};
g.h.km=function(){this.K=this.K||FR(this,"endscreen",this.km,g.AR(this))};
g.h.Eq=function(){var a=this.g.Y();var b=g.U(this.g).experiments,c=g.Sr()&&(Pr("ps4 vr")||Pr("ps4 pro vr")),d=Tr(),e=c&&b.g("enable_mesh_ps4"),f=b.g("enable_mesh_cobalt"),k=b.g("enable_spherical_kabuki")||a.Mq,l=HB(g.U(this.g));a=a.Hd()?e||f||k||l||d||b.g("html5_enable_spherical"):a.ue()?l||c||k||b.g("html5_enable_spherical"):a.we()?l||c||b.g("html5_enable_spherical3d"):a.xg()?l||b.g("html5_enable_anaglyph3d"):l&&!g.KD(a)&&(b.g("enable_webgl_noop")||b.g("enable_white_noise"));this.o||(this.o=FR(this,
"webgl",this.Eq,a));this.o&&a&&this.o.load()};
g.h.Gq=function(){this.R=this.R||FR(this,"ypc",this.Gq,g.TD(this.g.Y(),"ypc_module"))};
g.h.Fq=function(){this.V=this.V||FR(this,"ypc_clickwrap",this.Fq,g.TD(this.g.Y(),"ypc_clickwrap_module"))};
g.h.Aq=function(){this.U=this.U||FR(this,"spacecast",this.Aq,this.g.Y().spacecastModule)};
g.h.zq=function(){this.P=this.P||FR(this,"heartbeat",this.zq,g.TD(this.g.Y(),"ypc_license_checker_module"))};
g.h.im=function(){if(!this.A){var a=this.im;var b=g.U(this.g);if("3"==b.A)b=!1;else if(b.L.isEmpty()&&"annotation-editor"!=b.g&&"live-dashboard"!=b.g){var c=this.g.Y();b=b.experiments.g("disable_new_iv_module_create_logic")?g.TD(c,"iv3_module"):!!c.ie}else b=!0;if(this.A=FR(this,"annotations_module",a,b)){a=this.A;for(var d in this.fa)b=d,a.subscribe(b,this.fa[b]);this.g.la("onApiChange")}}};
g.h.yq=function(){this.H=this.H||FR(this,"fresca",this.yq,g.TD(this.g.Y(),"fresca_module"))};
g.h.lm=function(){this.L||(this.L=FR(this,"remote",this.lm,g.U(this.g).Ab))&&this.L.create()};
g.h.Cq=function(){this.C||(this.C=FR(this,"unplugged",this.Cq,g.BB(g.U(this.g))))&&this.C.init()};
g.h.jm=function(){if(!this.F){var a=this.jm;var b=g.U(this.g);"3"==b.A?b=!1:"creator-endscreen-editor"==b.g?b=!0:(b=this.g.Y(),b=!!b&&!!g.YD(b));(this.F=FR(this,"creatorendscreen",a,b))&&this.g.la("onApiChange")}};
g.h.T=function(){zR.ua.T.call(this);GR(this,!0)};g.r(HR,g.W);g.h=HR.prototype;g.h.Fz=function(){this.B=new g.Xg(0,0,0,0);this.o=new g.Xg(0,0,0,0)};
g.h.Ik=function(a){g.Lp(this.element,arguments)};
g.h.Be=function(){if(this.g){var a=this.Da();if(!a.isEmpty()){var b=!g.cd(a,g.ah(this.o)),c=PR(this);b&&(this.o.width=a.width,this.o.height=a.height);a=this.app.g;(c||b||a.ba)&&this.app.l.O("resize",this.Da())}}};
g.h.DB=function(a,b){JR(this,b)};
g.h.Gz=function(a){a.g&&JR(this,a.g)};
g.h.Da=function(){var a=this.app.g,b=this.app.U.isFullscreen();if(b&&Rr())return new g.bd(window.outerWidth,window.outerHeight);if(b||a.jj){if(window.matchMedia){a="(width: "+window.innerWidth+"px) and (height: "+window.innerHeight+"px)";this.A&&this.A.media==a||(this.A=window.matchMedia(a));var c=this.A&&this.A.matches}if(c)return new g.bd(window.innerWidth,window.innerHeight)}else if(this.R&&this.V&&!this.app.isWidescreen())for(a=0;a<this.R.length;a++)if(b=this.R[a],b.query.matches)return new g.bd(b.size.width,
b.size.height);return new g.bd(this.element.clientWidth,this.element.clientHeight)};
g.h.mz=function(){this.g&&DN(this);OR(this)!=this.I&&this.Be()};
g.h.EB=function(){DN(this)};
g.h.T=function(){this.C&&g.wt(this.C);IR(this);g.W.prototype.T.call(this)};g.r(QR,g.J);QR.prototype.get=function(a){var b=this.l.find(function(b){return b[0]==a});
return b?b[1]:null};
QR.prototype.set=function(a,b){this.remove(a,!0);for(this.l.push([a,b]);this.l.length>this.o;){var c=this.l.shift();this.g&&this.g(c[1])}};
QR.prototype.remove=function(a,b){if(b&&this.g){var c=this.get(a);if(c)this.g(c);else return}g.$a(this.l,function(b){return b[0]==a})};
QR.prototype.T=function(){var a=this;this.g&&this.l.forEach(function(b){a.g(b[1])})};g.xa(SR);var EV=g.z("ytPlayerUtilsVideoTagPoolInstance")||SR.getInstance();g.y("ytPlayerUtilsVideoTagPoolInstance",EV,void 0);g.h=SR.prototype;g.h.Qq=function(a){if(!(this.g.length>=a)){a-=this.g.length;for(var b=0;b<a;b++)VR(this)}};
g.h.Ty=function(a,b){if(this.g.length)return this.g.pop();var c=VR(this,a,b);a||g.Ya(this.g,c);return c};
g.h.kI=function(a){a&&g.Ta(this.l,a)&&(a.src&&(nA&&0<a.readyState&&(a.currentTime=Math.max(zca,0)),a.removeAttribute("src"),a.load(),a.g&&a.g.g&&(a.g&&a.g.dispose(),a.g=null)),bt(a),g.Ya(this.l,a),g.Ya(this.o,a))};
g.h.Iz=function(a){return this.g.length>=(a||1)};
g.h.iy=function(){for(var a=this.o.length-1;0<=a;a--)UR(this,this.o[a]);this.g.length==this.l.length&&4<=this.g.length||(4>this.l.length?this.Qq(4):(this.g=[],(0,g.G)(this.l,function(a){UR(this,a)},this)))};
SR.prototype.fillPool=SR.prototype.Qq;SR.prototype.getTag=SR.prototype.Ty;SR.prototype.releaseTag=SR.prototype.kI;SR.prototype.hasTags=SR.prototype.Iz;SR.prototype.activateTags=SR.prototype.iy;g.r(WR,g.J);WR.prototype.o=function(a){this.l=a[a.length-1].intersectionRatio};
WR.prototype.T=function(){g.J.prototype.T.call(this);this.l=null;this.g&&this.g.disconnect()};g.r(XR,g.R);g.h=XR.prototype;g.h.HB=function(a){a=Xs(a);if(!$c(a,this.A)){var b=2;this.C&&(b|=8);this.A=a;this.yb(b,!0)}};
g.h.VD=function(){this.C&&this.yb(8,!0);this.yb(2,!1)};
g.h.Rn=function(a){var b=Xs(a);$c(b,this.A)||(this.A=b,(a=g.Us(a))&&this.P(a)&&(this.yb(4,!0),this.da.Pa(this.o),this.o=this.da.M(this.l,"mouseover",this.Rs),this.K=this.da.M(this.l,"mouseout",this.Rs)))};
g.h.Rs=function(a){a=Ws(a);a&&this.P(a)||(this.A=new g.Zc(window.NaN,window.NaN),YR(this))};
g.h.Vz=function(){this.yb(1,!0)};
g.h.Iy=function(a){a=g.Us(a);a instanceof window.Element&&!(0<a.tabIndex)||this.yb(1,!0)};
g.h.Qs=function(){this.C=!0;this.da.Pa(this.B);this.B=this.da.M(window.document,"mouseup",this.IB)};
g.h.IB=function(){this.C=!1;this.yb(8,!1);this.da.Pa(this.B);this.B=this.da.M(this.l,"mousedown",this.Qs)};
g.h.Ss=function(a){if(a=a.changedTouches[0])this.U=a.identifier,this.da.Pa(this.F),this.F=this.da.M(this.l,"touchend",this.JB,void 0,!0),this.yb(1024,!0)};
g.h.JB=function(a){for(var b,c=0;c<a.changedTouches.length;c++){var d=a.changedTouches[c];if(d.identifier==this.U){b=d;break}}b&&(this.da.Pa(this.F),this.F=this.da.M(this.l,"touchstart",this.Ss,void 0,!0),this.yb(1024,!1))};
g.h.yb=function(a,b){var c=!this.g;b?(this.g|=a,a&1&&this.H.start(),a&2&&this.I.start()):(this.g&=~a,a&1&&this.H.stop(),a&2&&this.I.stop(),a&512&&this.L.stop());this.g&512&&!(this.g&128)&&g.Up(this.L,this.R);var d=!this.g;c!=d&&this.O("autohideupdate",d)};
g.h.toString=function(){var a=[],b;for(b in zX)this.g&zX[b]&&a.push(b);return"yt.player.ux.AutohideBlock<"+a.join(",")+">"};
var zX={vK:1,gL:2,JK:4,lK:8,sL:16,kK:32,dK:64,nL:128,NL:256,lL:512,nM:1024};g.r(cS,g.W);cS.prototype.show=function(){g.W.prototype.show.call(this);g.Up(this.g)};
cS.prototype.hide=function(){this.l.stop();g.W.prototype.hide.call(this)};g.r(iS,g.W);g.h=iS.prototype;g.h.show=function(){var a=this;this.Na()||(this.A.M(this.g,"videodatachange",function(){return g.Up(a.l)}),this.A.M(this.g,"videoplayerreset",function(){return g.Up(a.l)}));
g.W.prototype.show.call(this)};
g.h.hide=function(){this.A&&g.ft(this.A);g.W.prototype.hide.call(this)};
g.h.mD=function(a){var b=g.U(this.g);b.experiments.g("disable_new_pause_state3")&&CB(b)&&(a=PE(a.state)&&!PE(a.g)||AL(this.g)&&g.T(a.state,2),g.mh(this.element,"transition-delay",a?"2s":""));g.Up(this.l)};
g.h.TH=function(){g.Up(this.l)};
g.h.lD=function(){this.o.stop();this.hide();g.Up(this.l)};
g.h.Dt=function(){var a=g.yL(this.g);if(3==this.g.Ca()&&(a.gb()||g.T(a,4)))var b=!0;else(b=g.sL(this.g).R)&&b.HI()?b=!0:(b=g.U(this.g),b=g.T(a,2)&&uL(this.g)&&b.ia?!0:!1);b?(b=!0,window.document.activeElement==this.B&&this.g.getRootNode().focus(),this.B.style.display="none"):(this.B.style.display="",PE(a)&&2!=this.g.Ca()?b=!0:(b=!g.U(this.g).experiments.g("disable_new_pause_state3"),b=!(!g.T(a,2)||uL(this.g)||b&&g.mW(this.g.app))||g.T(a,1024)?!0:!1));b?(this.o.show(),this.bJ(this.g.De(),this.g.Y())):
(this.o.hide(),g.T(a,1)||this.o.stop())};
g.h.bJ=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];c=g.U(this.g);b=g.q(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,!(!d||d instanceof g.qD&&!d.videoId)){var e=g.zL(this.g).Da();var f=g.DB(),k=e.width*f;f*=e.height;if(1280<k||720<f)if(e=d.kc(c,"maxresdefault.jpg"))break;if(640<k||480<f)if(e=d.kc(c,"maxresdefault.jpg"))break;if(320<k||180<f)if(e=d.kc(c,"sddefault.jpg")||d.kc(c,"hqdefault.jpg")||d.kc(c,"mqdefault.jpg"))break;if(e=d.kc(c,"default.jpg"))break}this.C.style.backgroundImage=
e?"url("+e+")":""};g.r(kS,g.W);kS.prototype.show=function(){g.W.prototype.show.call(this);this.F()};
kS.prototype.F=function(){var a=1-1/1.5;this.o=(this.o+this.K)%(this.width*a);this.A=(this.A+this.I)%(this.height*a);this.l.drawImage(this.H,-1*this.o,-1*this.A);this.l.fillRect(0,this.B,this.width,75);this.B=(this.B+75+7)%this.height-75;this.g.isActive()||g.Up(this.C)};
kS.prototype.hide=function(){this.g.stop();this.C.stop();g.W.prototype.hide.call(this)};g.r(nS,g.W);nS.prototype.show=function(){g.W.prototype.show.call(this);oS(this,function(a){a.show()})};
nS.prototype.hide=function(){g.W.prototype.hide.call(this);oS(this,function(a){a.hide()})};
nS.prototype.A=function(a){if(g.$R(a,this.g,!CB(g.U(this.g)))){a={as3:!1,html5:!0,player:!0,cpn:this.g.Y().clientPlaybackNonce};var b=this.g;b.la("onFeedbackArticleRequest",{articleId:3037019,helpContext:"player_error",productData:a});b.isFullscreen()&&g.CL(b)}};
var Jca=/<a\s+href=["']([^"']+)["'](?:\s+target=["']([^"']+)["'])?>([^<>]+)<\/a>/;g.r(rS,g.dt);rS.prototype.C=function(){this.B();var a=g.U(this.g),b=this.g.Y(),c=[];a.I||c.push({src:b.kc(a,"mqdefault.jpg"),sizes:"320x180"});this.l.metadata=new window.MediaMetadata({title:b.title,artist:b.author,artwork:c});a=AL(this.g);this.o.has("nexttrack")!=a&&(c=b=null,a&&(b=(0,g.A)(function(){dS(this.A,yP(),g.S("YTP_NEXT"));this.g.sh()},this),c=(0,g.A)(function(){hS(this.A);
this.g.Ei()},this)),qS(this,"nexttrack",b),qS(this,"previoustrack",c))};
rS.prototype.B=function(){var a=g.yL(this.g);a=a.isError()?"none":IE(a)?"playing":"paused";this.l.playbackState=a};
rS.prototype.T=function(){this.l.playbackState="none";this.l.metadata=null;for(var a=g.q(this.o),b=a.next();!b.done;b=a.next())qS(this,b.value,null);g.dt.prototype.T.call(this)};g.r(sS,g.W);sS.prototype.P=function(a,b){tS(this,b);this.B&&uS(this,this.B)};
sS.prototype.L=function(a){var b=this.I.Y();this.l!=b.videoId&&tS(this,b);this.g&&uS(this,a.state);this.B=a.state};
sS.prototype.K=function(){this.A.hide();this.l&&(this.o[this.l]=(this.o[this.l]||0)+((0,g.H)()-this.H));this.H=0};var Kca=/fidget ?spinner/i;g.r(xS,g.W);g.h=xS.prototype;g.h.hide=function(){this.l.stop();this.A.style.display="none";g.W.prototype.hide.call(this)};
g.h.mu=function(){vS(this,Kca.test(this.g.Y().title))};
g.h.GD=function(a){wS(this,a.state)};
g.h.mF=function(){wS(this,g.yL(this.g))};
g.h.wG=function(){this.A.style.display="block"};g.r(yS,g.bP);g.h=yS.prototype;g.h.show=function(){var a=AS(this);g.bP.prototype.show.call(this);this.ba&&(this.H.M(window,"blur",this.qb),this.H.M(window.document,"click",this.dF));a||this.O("show",!0)};
g.h.hide=function(){var a=AS(this);g.bP.prototype.hide.call(this);zS(this);a&&this.O("show",!1)};
g.h.Id=function(a,b){this.A=a;this.K.show();b?(this.I||(this.I=this.H.M(this.V,"appresize",this.Vp)),this.Vp()):this.I&&(this.H.Pa(this.I),this.I=null);a&&(a.getAttribute("aria-haspopup"),a.setAttribute("aria-expanded",!0),window.document.activeElement&&g.Ld(a,window.document.activeElement)&&this.focus())};
g.h.Vp=function(){lV(g.sL(this.V).I,this.element,this.A)};
g.h.qb=function(){var a=AS(this);zS(this);this.K.hide();a&&this.O("show",!1)};
g.h.ag=function(a,b){AS(this)?this.qb():this.Id(a,b)};
g.h.dF=function(a){var b=Vs(a);b&&(g.Ld(this.element,b)||this.A&&g.Ld(this.A,b)||!g.oQ(a))||this.qb()};g.r(CS,yS);CS.prototype.B=function(a){a?(BS(this),this.Id()):(this.l&&DS(this),this.qb())};
CS.prototype.C=function(a){this.g.app.X&&0<VE(a,2)&&this.qb()};
CS.prototype.onClick=function(){this.g.Ee();DS(this)};g.r(ES,g.dt);g.h=ES.prototype;g.h.init=function(){var a=g.yL(this.g);this.ql(a);this.Vg();this.fe()};
g.h.Bt=function(a,b){if(this.Ka!=b.videoId){this.Ka=b.videoId;var c=this.A;c.R=b&&0<b.ig.length?5E3:3E3;c.yb(512,!0);this.Vg()}};
g.h.xG=function(){this.Bt("newdata",this.g.Y())};
g.h.Bh=function(){var a=g.HL(this.g)&&g.IL(this.g);FS(this);(a=this.Ha||a)||(a=g.sL(this.g).H,a=!!a&&a.PA());return a||this.Za||FS(this)};
g.h.hf=function(){var a=!this.Bh();g.O(this.g.getRootNode(),"ytp-menu-shown",!a)};
g.h.fD=function(a){if(!g.Ld(this.g.getRootNode(),a))return!1;for(;a&&!g.Pd(a);)a=a==this.g.getRootNode()?null:g.Kd(a);return!!a};
g.h.Ao=function(a){var b=this.g.getRootNode();g.O(b,"ytp-autohide",a);g.O(b,"ytp-autohide-active",!0);this.Ya.start(a?250:100);a&&(this.K=!1,g.N(b,"ytp-touch-mode"));b=this.g;a=!a;b.la("onVideoAreaChange");b.la(a?"onShowControls":"onHideControls")};
g.h.xE=function(){if(!g.U(this.g).experiments.g("web_player_edge_autohide_killswitch3")){var a=this.g.getRootNode();g.O(a,"ytp-autohide-active",!1)}};
g.h.aH=function(a){var b=AS(this.ia);g.Ok&&HS(this,a)?b&&g.Ys(a):(PE(g.yL(this.g))&&!g.U(this.g).Ma&&(b=this.g.Y(),b.videoId&&this.g.Yn(WD(b))),this.A.g||GS(this,Vs(a))||AS(this.ia)||(g.yL(this.g),g.Ys(a)),this.K=!0,g.M(this.g.getRootNode(),"ytp-touch-mode"),this.A.yb(2,!0))};
g.h.WG=function(a){HS(this,a)||GS(this,Vs(a))||(this.A.yb(2,!0),g.oQ(a)&&!g.U(this.g).P&&(this.Tj()?g.Ys(a):(a=g.yL(this.g),g.T(a,2)&&uL(this.g)||eS(this.C,!IE(a)),!g.U(this.g).ma||PE(a)||g.T(a,1024)?this.lo():this.ba.isActive()?(this.C.hide(),this.ba.stop()):this.ba.start())))};
g.h.lo=function(){var a=g.yL(this.g);g.T(a,2)&&uL(this.g)||(IE(a)?this.g.Xb():this.g.Oc())};
g.h.XG=function(a){GS(this,Vs(a))||3!=this.g.Ca()&&g.CL(this.g)};
g.h.YG=function(a){IS(this,.3,a.scale);g.Ys(a)};
g.h.ZG=function(a){IS(this,.1,a.scale)};
g.h.fe=function(){var a=this.cd(),b=g.zL(this.g).Da(),c=this.g.isFullscreen(),d=this.g.getRootNode();g.Px&&YR(this.A);g.O(d,"ytp-fullscreen",c);g.O(d,"ytp-small-mode",!a&&(480>b.width||290>b.height));g.O(d,"ytp-big-mode",a);this.F&&mS(this.F,b)};
g.h.zG=function(a){this.ql(a.state);this.Vg()};
g.h.Vg=function(){var a=!!this.Ka&&!g.tL(this.g);var b=2==this.g.Ca(),c=g.U(this.g);b?(b=g.sL(this.g).B,a=a&&b.lB()):a=(c.experiments.g("embed_api_deprecation")||c.Ha)&&c.H&&5==this.g.app.R?a:a&&(c.Tc||this.g.isFullscreen());this.L!=a&&(this.L=a,g.O(this.g.getRootNode(),"ytp-hide-info-bar",!a))};
g.h.ql=function(a){var b=PE(a);b!=this.Yb&&(this.Yb=b,this.Wa&&this.Pa(this.Wa),this.Wa=this.M(g.zL(this.g),"touchstart",this.aH,void 0,b));var c=a.gb()&&!g.T(a,32)||KL(this.g);this.A.yb(128,!c);c=3==this.g.Ca();this.A.yb(256,c);c=this.g.getRootNode();if(g.T(a,2))var d=["ended-mode"];else d=[],g.T(a,8)?d.push("playing-mode"):g.T(a,4)&&d.push("paused-mode"),g.T(a,1)&&!g.T(a,32)&&d.push("buffering-mode"),g.T(a,32)&&d.push("seeking-mode"),g.T(a,64)&&d.push("unstarted-mode");g.ob(this.sa,d)||(g.Mp(c,
this.sa),this.sa=d,g.Lp(c,d));d=g.U(this.g);var e=g.T(a,2);g.O(c,"ytp-hide-controls",("3"==d.A?!e:"1"!=d.A)||b);g.O(c,"ytp-native-controls","3"==d.A&&!b&&!e);if(g.T(a,128)){this.F||(this.F=new nS(this.g),g.K(this,this.F),g.TL(this.g,this.F.element,4));b=this.F;a=a.g;for(c=0;c<b.o.length;c++)b.Pa(b.o[c]);b.o=[];c=a.messageKey;d=g.U(b.g);"play"!=d.g||"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"!=c&&"YTP_ERROR_UNSUPPORTED_DEVICE"!=c||(c="YTP_HTML5_FLASH_DEPRECATED");if("YTP_ERROR_GENERIC_WITHOUT_LINK"!=
c||d.Rb)if("YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"!=c||d.Rb)if("YTP_HTML5_FLASH_DEPRECATED"==c)b.sb(pS(b,c,"//support.google.com/googleplay/answer/2844198#movies",!1,!0,"YTP_ERROR_VIDEO_UNAVAILABLE"));else{a=a.message.split(Jca);c=[];for(d=0;d<a.length;d+=3){e=a[d++].split("\n");c.push(e[0]);for(var f=1;f<e.length;f++)c.push({D:"br"}),c.push(e[f]);d<a.length&&c.push({D:"a",N:{href:a[d],target:a[d+1]},G:[a[d+2]]})}b.sb({D:"span",G:c})}else b.sb(pS(b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK",
"//www.youtube.com/html5"));else if(b.sb(pS(b,"YTP_ERROR_GENERIC_WITH_LINK_AND_CPN","//support.google.com/youtube/?p=player_error1",!0)),d.ba&&!d.o)for(a=(0,g.A)(b.A,b),c=b.element.getElementsByTagName("a"),d=0;d<c.length;d++)e=b.M(c[d],"click",a),b.o.push(e);this.F.show()}else this.F&&(this.F.dispose(),this.F=null)};
g.h.Tj=function(){return g.HL(this.g)&&g.IL(this.g)?(this.g.Hi(!1,!1),!0):g.tL(this.g)?(g.vL(this.g,!0),!0):!1};
g.h.gD=function(a){this.Za=a;this.hf()};
g.h.cd=function(){return!1};g.r(KS,g.W);KS.prototype.T=function(){this.l&&this.l();g.W.prototype.T.call(this)};
KS.prototype.F=function(){g.zt("iv-button-mouseover")};
KS.prototype.C=function(a){g.HL(this.g);var b=g.Kp(this.g.getRootNode(),"ytp-cards-teaser-shown");g.zt("iv-teaser-clicked",b);a=0==a.screenX&&0==a.screenY;this.g.Hi(!g.IL(this.g),a,"YOUTUBE_DRAWER_MANUAL_OPEN")};g.r(MS,g.W);g.h=MS.prototype;g.h.yw=function(){g.HL(this.l)&&g.IL(this.l)&&this.Na()&&3!=this.B.g&&this.Ji()};
g.h.LI=function(){this.Ji();g.zt("iv-teaser-clicked",!!this.g);this.l.Hi(!0,!1,"YOUTUBE_DRAWER_MANUAL_OPEN")};
g.h.hD=function(){g.zt("iv-teaser-mouseover");this.g&&this.g.stop()};
g.h.qH=function(a){this.g||!a||g.IL(this.l)||this.o&&this.o.isActive()||(zba(this,a),g.zt("iv-teaser-shown"))};
g.h.Ct=function(){this.F.stop();this.g&&this.g.isActive()&&this.H.start()};
g.h.Rf=function(){this.H.stop();this.g&&!this.g.isActive()&&this.F.start()};
g.h.fG=function(){this.g&&this.g.stop()};
g.h.cG=function(){this.Ji()};
g.h.Ji=function(){!this.g||this.A&&this.A.isActive()||(this.B.hide(),g.N(this.l.getRootNode(),"ytp-cards-teaser-shown"),this.A=new g.P(function(){for(var a=g.q(this.C),b=a.next();!b.done;b=a.next())this.Pa(b.value);this.C=[];this.g&&(this.g.dispose(),this.g=null);JS(this.I,!0)},330,this),this.A.start())};
g.h.T=function(){var a=this.l.getRootNode();a&&g.N(a,"ytp-cards-teaser-shown");g.Fe(this.o,this.A,this.g);g.W.prototype.T.call(this)};g.r(g.OS,g.bP);g.OS.prototype.updateValue=function(a,b){g.bP.prototype.updateValue.call(this,a,b);this.O("size-change")};g.r(QS,g.bP);QS.prototype.ia=function(){this.O("size-change")};
QS.prototype.focus=function(){this.V.focus()};
QS.prototype.ma=function(){this.O("back")};g.r(g.RS,QS);g.RS.prototype.X=function(){this.C.O("size-change")};
g.RS.prototype.focus=function(){for(var a=0,b=0;b<this.za.length;b++)if("true"==this.za[b].element.getAttribute("aria-checked")){a=b;break}this.za[a].focus()};g.r(g.VS,yS);g.h=g.VS.prototype;g.h.show=function(){yS.prototype.show.call(this);this.aj()};
g.h.hide=function(){yS.prototype.hide.call(this);1<this.g.length&&g.$S(this)};
g.h.aj=function(){aT(this);this.Na()&&(XS(this),g.Fh(this.element,this.size))};
g.h.Od=function(){var a=this.g.pop(),b=WS(this);YS(this,a,b,!0)};
g.h.II=function(a,b,c){this.C.dispose();this.C=null;g.M(this.element,"ytp-popup-animating");c?(g.M(a.element,"ytp-panel-animate-forward"),g.N(b.element,"ytp-panel-animate-back")):(g.M(a.element,"ytp-panel-animate-back"),g.N(b.element,"ytp-panel-animate-forward"));g.Fh(this.element,this.size);this.B=new g.P(g.B(this.nE,a,b),250,this);this.B.start()};
g.h.nE=function(a){g.N(this.element,"ytp-popup-animating");g.FM(a);g.Mp(a.element,["ytp-panel-animate-back","ytp-panel-animate-forward"]);this.B.dispose();this.B=null};
g.h.pD=function(a){if(!g.Zs(a))switch(g.$s(a)){case 27:this.qb();g.Ys(a);break;case 37:1<this.g.length&&this.Od();g.Ys(a);break;case 39:g.Ys(a)}};
g.h.focus=function(){WS(this).focus()};
g.h.T=function(){yS.prototype.T.call(this);this.C&&this.C.dispose();this.B&&this.B.dispose()};g.r(bT,g.OS);bT.prototype.g=function(a){g.Zs(a)||39!=g.$s(a)||(this.element.click(),g.Ys(a))};g.r(dT,g.OS);dT.prototype.I=function(){eT(this,!this.l);this.O("select",this.l)};
dT.prototype.getValue=function(){return this.l};g.r(iT,g.RS);g.h=iT.prototype;g.h.VE=function(){IM(this.H.element)};
g.h.oF=function(){jT(this,this.g.Bi(!0))&&dS(this.L.C,oP())};
g.h.pF=function(){jT(this,this.g.Ws())&&dS(this.L.C,g.Y?{D:"div",W:["ytp-icon","ytp-icon-code"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",N:{d:"M14.1 24.9L7.2 18.0l6.9-6.9L12.0 9.0l-9.0 9.0 9.0 9.0 2.1-2.1zm7.8 .0l6.9-6.9-6.9-6.9L24.0 9.0l9.0 9.0-9.0 9.0-2.1-2.1z",fill:"#fff"}}]});this.g.sc(this.l.element);fT("EMBED",this.g.Y().videoId,this.g.getPlaylistId()||void 0)};
g.h.sF=function(){jT(this,this.g.getVideoUrl(!0,!0))&&dS(this.L.C,xP());this.g.sc(this.A.element);fT("COPY_PASTE",this.g.Y().videoId,this.g.getPlaylistId()||void 0)};
g.h.rF=function(){jT(this,this.g.getVideoUrl(!1,!0))&&dS(this.L.C,xP());this.g.sc(this.o.element);fT("COPY_PASTE",this.g.Y().videoId,this.g.getPlaylistId()||void 0)};
g.h.JF=function(a){eT(this.B,a)};
g.h.KF=function(){var a=this.B.getValue();VV(this.g.app,a);this.K.qb();this.g.sc(this.B.element)};
g.h.QG=function(a){var b=g.V(this.g.app);b&&b.oh(new g.LB("feedback",!1,{gpu:(0,g.TE)()}));if(g.$R(a,this.g,!CB(g.U(this.g)))){a=this.g;b=b={as3:!1,html5:!0,player:!0};var c=a.kr();c.debug_error&&(b.player_error=c.debug_error.errorCode,b.player_error_details=c.debug_error.errorDetail);b.debug_text=a.Bi(!0);a.la("onFeedbackStartRequest",b);a.isFullscreen()&&g.CL(a)}this.K.qb()};
g.h.hH=function(){this.g.gt();this.K.qb()};
g.h.jD=function(a,b){hT(this,b)};g.r(mT,g.VS);g.h=mT.prototype;g.h.show=function(){this.F||(this.F=new iT(this.l,this.X,this),g.K(this,this.F),g.ZS(this,this.F));g.VS.prototype.show.call(this);this.l.Va(this.element,!0);kT(this.F,!0)};
g.h.hide=function(){lT(this);g.VS.prototype.hide.call(this);this.l.Va(this.element,!1);this.F&&kT(this.F,!1)};
g.h.UE=function(a){var b=Vs(a);this.Na()||b&&(g.Rd(b,"a")||g.Sd(b,"ytp-no-contextmenu"))||(g.Ys(a),nT(this),this.element.style.left="",this.element.style.top="",a=Xs(a),a.x++,a.y++,this.Id(),b=g.zh(window.document.body),a=g.hq(a,this.size,0,void 0,b,5),g.uh(this.element,g.bh(a.rect)),g.ft(this.o),this.o.M(window.document,"contextmenu",this.eF),this.o.M(this.l,"fullscreentoggled",this.kD),this.o.M(this.l,"pageTransition",this.qG))};
g.h.eF=function(a){g.Zs(a)||(g.Ld(this.element,Vs(a))||this.qb(),g.U(this.l).disableNativeContextMenu&&g.Ys(a))};
g.h.kD=function(){this.qb();nT(this)};
g.h.qG=function(){this.qb()};var AX,BX;AX=[{option:"#fff",message:"YTP_COLOR_WHITE"},{option:"#ff0",message:"YTP_COLOR_YELLOW"},{option:"#0f0",message:"YTP_COLOR_GREEN"},{option:"#0ff",message:"YTP_COLOR_CYAN"},{option:"#00f",message:"YTP_COLOR_BLUE"},{option:"#f0f",message:"YTP_COLOR_MAGENTA"},{option:"#f00",message:"YTP_COLOR_RED"},{option:"#080808",message:"YTP_COLOR_BLACK"}];BX=[{option:0,text:"0%"},{option:.25,text:"25%"},{option:.5,text:"50%"},{option:.75,text:"75%"},{option:1,text:"100%"}];
g.rT=[{option:"fontFamily",message:"YTP_FONT_FAMILY",options:[{option:1,message:"YTP_FONT_FAMILY_MONO_SERIF"},{option:2,message:"YTP_FONT_FAMILY_PROP_SERIF"},{option:3,message:"YTP_FONT_FAMILY_MONO_SANS"},{option:4,message:"YTP_FONT_FAMILY_PROP_SANS"},{option:5,message:"YTP_FONT_FAMILY_CASUAL"},{option:6,message:"YTP_FONT_FAMILY_CURSIVE"},{option:7,message:"YTP_FONT_FAMILY_SMALL_CAPS"}]},{option:"color",message:"YTP_FONT_COLOR",options:AX},{option:"fontSizeIncrement",message:"YTP_FONT_SIZE",options:[{option:-2,
text:"50%"},{option:-1,text:"75%"},{option:0,text:"100%"},{option:1,text:"150%"},{option:2,text:"200%"},{option:3,text:"300%"},{option:4,text:"400%"}]},{option:"background",message:"YTP_BACKGROUND_COLOR",options:AX},{option:"backgroundOpacity",message:"YTP_BACKGROUND_OPACITY",options:BX},{option:"windowColor",message:"YTP_WINDOW_COLOR",options:AX},{option:"windowOpacity",message:"YTP_WINDOW_OPACITY",options:BX},{option:"charEdgeStyle",message:"YTP_CHAR_EDGE_STYLE",options:[{option:0,message:"YTP_EDGE_STYLE_NONE"},
{option:4,message:"YTP_EDGE_STYLE_DROP_SHADOW"},{option:1,message:"YTP_EDGE_STYLE_RAISED"},{option:2,message:"YTP_EDGE_STYLE_DEPRESSED"},{option:3,message:"YTP_EDGE_STYLE_OUTLINE"}]},{option:"textOpacity",message:"YTP_FONT_OPACITY",options:[{option:.25,text:"25%"},{option:.5,text:"50%"},{option:.75,text:"75%"},{option:1,text:"100%"}]}];g.r(oT,g.dt);g.h=oT.prototype;
g.h.xr=function(a){var b=!1,c=g.$s(a),d=Vs(a),e=!a.altKey&&!a.ctrlKey&&!a.metaKey,f=!1,k=!1,l=g.U(this.g);g.Zs(a)?(e=!1,k=!0):l.Ie&&(e=!1);if(9==c)b=!0;else{if(d)switch(c){case 32:case 13:if("BUTTON"==d.tagName||"A"==d.tagName||"INPUT"==d.tagName)b=!0,e=!1;else if(e){var m=d.getAttribute("role");!m||"option"!=m&&"button"!=m&&0!=m.indexOf("menuitem")||(b=!0,d.click(),f=!0)}break;case 37:case 39:case 36:case 35:b="slider"==d.getAttribute("role");break;case 38:case 40:m=d.getAttribute("role"),d=38==
c?d.previousSibling:d.nextSibling,"slider"==m?b=!0:e&&("option"==m?(d&&"option"==d.getAttribute("role")&&d.focus(),f=b=!0):m&&0==m.indexOf("menuitem")&&(d&&d.hasAttribute("role")&&0==d.getAttribute("role").indexOf("menuitem")&&d.focus(),f=b=!0))}if((d=g.sL(this.g).o)&&e&&!f&&d.o&&d.o.Na())switch(c){case 65:case 68:case 87:case 83:case 107:case 221:case 109:case 219:f=d.o.ur(c)}l.Rb||!e||f||(f=String.fromCharCode(c).toLowerCase(),this.o+=f,0=="awesome".indexOf(this.o)?(f=!0,7==this.o.length&&g.Np(this.g.getRootNode(),
"ytp-color-party")):(this.o=f,f=0=="awesome".indexOf(this.o)));if(e&&!f){switch(c){case 32:l.P||(k=!IE(g.yL(this.g)),eS(this.l,k),k?this.g.Oc():this.g.Xb(),k=f=!0);break;case 37:this.g.qc()&&(dS(this.l,EP()),this.g.Md(-5*this.g.ec()),k=f=!0);break;case 39:this.g.qc()&&(dS(this.l,wP()),this.g.Md(5*this.g.ec()),k=f=!0);break;case 38:k=Math.min(this.g.getVolume()+5,100);fS(this.l,k,!1);this.g.setVolume(k);k=f=!0;break;case 40:k=Math.max(this.g.getVolume()-5,0);fS(this.l,k,!0);this.g.setVolume(k);k=f=
!0;break;case 27:this.C()&&(k=f=!0);break;case 36:this.g.qc()&&(this.g.xb(0),k=f=!0);break;case 35:this.g.qc()&&(this.g.xb(window.Infinity),k=f=!0)}if("3"!=l.A)switch(c){case 67:g.sL(this.g).l&&(k=this.g.Lb("captions","track"),(f=g.sL(this.g).l)&&f.ew(),f=this.l,k=!k||k&&!k.displayName?g.S("YTP_SUBTITLES_ON"):g.S("YTP_SUBTITLES_OFF"),dS(f,vP(),k),k=f=!0);break;case 79:sT(this,"textOpacity")&&(f=!0);break;case 87:sT(this,"windowOpacity")&&(f=!0);break;case 187:sT(this,"fontSizeIncrement",!1,!0)&&(f=
!0);break;case 189:sT(this,"fontSizeIncrement",!0,!0)&&(f=!0)}var n;48<=c&&57>=c?n=c-48:96<=c&&105>=c&&(n=c-96);null!=n&&this.g.qc()&&(k=this.g.Qf(),this.g.xb(n/10*(k.seekableEnd-k.seekableStart)+k.seekableStart),k=f=!0)}}b&&this.Wo(!0);(b||k)&&this.B.yb(2,!0);(f||e&&qT(this,c,a.shiftKey))&&g.Ys(a);l.ob&&(a={keyCode:g.$s(a),altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,handled:g.Zs(a),fullscreen:this.g.isFullscreen()},this.g.la("onKeyPress",a))};
g.h.yr=function(a){a=g.$s(a);var b=g.sL(this.g).o;b&&b.o&&b.o.Na()&&b.o.wr(a);9==a&&this.Wo(!0)};
g.h.Wo=function(a){g.O(this.g.getRootNode(),"ytp-probably-keyboard-focus",a);g.O(this.F.element,"ytp-probably-keyboard-focus",a)};
g.h.Ft=function(a){g.sL(this.g).l&&this.g.Pc("captions","sampleSubtitles",a)};
g.h.T=function(){g.Wp(this.A);g.dt.prototype.T.call(this)};g.r(uT,g.W);g.h=uT.prototype;g.h.hide=function(){g.N(this.g.getRootNode(),"ytp-expand-pause-overlay");g.W.prototype.hide.call(this)};
g.h.LE=function(){this.R=!0;g.N(this.g.getRootNode(),"ytp-expand-pause-overlay");this.F.focus()};
g.h.NE=function(){this.R=!1;g.M(this.g.getRootNode(),"ytp-expand-pause-overlay")};
g.h.qD=function(){wT(this,this.A-this.C)};
g.h.rD=function(){wT(this,this.A+this.C)};
g.h.PE=function(a,b){var c=this.l[a],d=c.fd;if(g.$R(b,this.g,this.ba,d||void 0)){var e=c.Eb().videoId;c=c.getPlaylistId();g.lW(this.g.app,e,d,c,void 0,void 0,void 0)}};
g.h.sD=function(){this.Sb(g.zL(this.g).Da())};
g.h.tD=function(a){g.T(a.state,1)||g.T(a.state,16)||g.T(a.state,32)||(g.T(a.state,4)&&!g.T(a.state,2)?this.l.length&&(this.R||(g.M(this.g.getRootNode(),"ytp-expand-pause-overlay"),vT(this)),this.H.show()):this.H.hide())};
g.h.Sb=function(a){var b=16/9,c=this.X.cd();a=a.width-(c?136:68);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.B.length;d++){var e=this.B[d].Z["ytp-suggestion-image"];e.style.width=c+"px";e.style.height=b+"px"}this.K.style.height=b+"px";this.P=c;this.C=a;this.A=0;this.Bw(0);vT(this)};
g.h.uD=function(){var a=this.g.Y();a.suggestions?(a=(0,g.Gd)(a.suggestions,function(a){return a&&!a.list}),this.l=(0,g.I)(a,function(a){return g.RR(a)})):this.l.length=0;
Bba(this)};
g.h.Bw=function(a){this.K.scrollLeft=-a};
g.r(tT,g.J);tT.prototype.start=function(a,b,c){this.g=a;this.H=b;this.C=c;this.F=g.Mt();this.o()};
tT.prototype.o=function(){var a=g.Mt()-this.F;var b=this.A;a=fq(b,a/this.C);if(0==a)b=b.F;else if(1==a)b=b.H;else{var c=Xc(b.F,b.B,a),d=Xc(b.B,b.C,a);b=Xc(b.C,b.H,a);c=Xc(c,d,a);d=Xc(d,b,a);b=Xc(c,d,a)}b=g.Vc(b,0,1);this.B((this.H-this.g)*b+this.g);1>b&&this.l.start()};g.r(xT,g.W);xT.prototype.l=function(a){g.$R(a,this.g)&&this.g.Xs(this.Oa)};g.r(yT,yS);g.h=yT.prototype;g.h.show=function(){yS.prototype.show.call(this);this.C.M(this.l,"videodatachange",this.no);this.C.M(this.l,"onPlaylistUpdate",this.no);this.no()};
g.h.hide=function(){yS.prototype.hide.call(this);g.ft(this.C);zT(this,null)};
g.h.no=function(){zT(this,this.l.De())};
g.h.kl=function(){var a=this.g.Ck;if(a==this.F)this.B.element.setAttribute("aria-checked",!1),this.B=this.o[this.g.Oa];else{for(var b=g.q(this.o),c=b.next();!c.done;c=b.next())c.value.dispose();b=this.g.getLength();this.o=[];for(c=0;c<b;c++){var d=new xT(this.l,this.g,c);this.o.push(d);d.ca(this.za)}this.B=this.o[this.g.Oa];this.F=a}this.B.element.setAttribute("aria-checked",!0)};
g.h.sH=function(a){var b=this.l.getVideoUrl(!0);aS(b,this.l,a)};
g.h.focus=function(){this.B.focus()};
g.h.T=function(){this.hide();yS.prototype.T.call(this)};g.r(AT,g.W);AT.prototype.l=function(){g.O(this.element,"ytp-playlist-menu-button-tiny",400>g.zL(this.o).Da().width);this.g&&2!=this.o.Ca()?(this.update({text:g.S("YTP_PLAYLIST_POSITION",{CURRENT_POSITION:String(this.g.Oa+1),PLAYLIST_LENGTH:String(this.g.getLength())}),title:g.S("YTP_PLAYLIST_NAME",{PLAYLIST_NAME:this.g.title})}),this.Na()||(this.show(),bU(this.A))):this.Na()&&(this.hide(),bU(this.A))};
AT.prototype.B=function(){this.g&&this.g.unsubscribe("shuffle",this.l,this);(this.g=this.o.De())&&this.g.subscribe("shuffle",this.l,this);this.l()};g.r(BT,g.W);BT.prototype.o=function(a){g.JM(this,g.T(a.state,2))};
BT.prototype.l=function(){g.yL(this.g);this.g.Oc()};g.r(CT,yS);g.h=CT.prototype;g.h.tG=function(a){a=Vs(a);g.Ld(this.L,a)||g.Ld(this.C,a)||this.ag()};
g.h.qb=function(){yS.prototype.qb.call(this);this.l.ah(this.element)};
g.h.show=function(){var a=this.Na();yS.prototype.show.call(this);this.Ht();a||this.g.la("onSharePanelOpened")};
g.h.Ht=function(){g.M(this.element,"ytp-share-panel-loading");g.N(this.element,"ytp-share-panel-fail");var a=this.g.Y(),b=this.g.getPlaylistId(),c=b&&this.F.checked;g.O(this.element,"ytp-share-panel-has-playlist",!!b);var d={action_get_share_info:1,feature:"player_embedded",video_id:a.videoId},e=g.U(this.g);e.jc&&(d.authuser=e.jc);e.pageId&&(d.pageid=e.pageId);c&&(d.list=b);g.Fr(g.U(this.g).baseYtUrl+"share_ajax",{method:"GET",onError:(0,g.A)(this.Rv,this),ib:(0,g.A)(function(a,b){if(b){if(!this.ga()){g.N(this.element,
"ytp-share-panel-loading");DT(this);for(var c=b.links,d=0,e=0;e<c.length&&3>d;e++){var f=c[e],k=Cba(f.img);k&&(k=new g.W({D:"a",W:["ytp-share-panel-service-button","ytp-button"],N:{href:f.url,target:"_blank",title:f.sname},G:[k]}),k.ea("click",g.B(this.dH,f.url)),g.De(k,LS(this.l,k.element)),this.o.push(k),d++)}c=new g.W({D:"a",W:["ytp-share-panel-service-button","ytp-button"],G:[{D:"span",J:"ytp-share-panel-service-button-more",G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-share-more"]}:{D:"svg",N:{height:"100%",
version:"1.1",viewBox:"0 0 38 38",width:"100%"},G:[{D:"rect",N:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",N:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 Z m -5.7,21.85 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z",
fill:"#4e4e4f","fill-rule":"evenodd"}}]}]}],N:{href:b.more,target:"_blank",title:g.S("YTP_MORE")}});c.ea("click",(0,g.A)(this.ZF,this,b.more));g.De(c,LS(this.l,c.element));this.o.push(c);this.updateValue("buttons",this.o)}}else this.Rv(null,null)},this),
hc:d,withCredentials:!0});a=e.getVideoUrl(a.videoId,c?b:void 0,void 0,!0);this.updateValue("link",a);this.updateValue("linkText",a);IM(this.B)};
g.h.Rv=function(){g.N(this.element,"ytp-share-panel-loading");g.M(this.element,"ytp-share-panel-fail")};
g.h.dH=function(a,b){if(g.oQ(b)){var c=void 0===c?{}:c;c.target=c.target||"YouTube";c.width=c.width||"600";c.height=c.height||"600";c||(c={});var d=window;var e=a instanceof Ic?a:g.Mc("undefined"!=typeof a.href?a.href:String(a));var f=c.target||a.target,k=[];for(l in c)switch(l){case "width":case "height":case "top":case "left":k.push(l+"="+c[l]);break;case "target":case "noopener":case "noreferrer":break;default:k.push(l+"="+(c[l]?1:0))}var l=k.join(",");pc()&&d.navigator&&d.navigator.standalone&&
f&&"_self"!=f?(l=d.document.createElement("A"),g.Sc(l,e),l.setAttribute("target",f),c.noreferrer&&l.setAttribute("rel","noreferrer"),c=window.document.createEvent("MouseEvent"),c.initMouseEvent("click",!0,!0,d,1),l.dispatchEvent(c),d={}):c.noreferrer?(d=d.open("",f,l),c=g.Jc(e),d&&(g.GB&&-1!=c.indexOf(";")&&(c="'"+c.replace(/'/g,"%27")+"'"),d.opener=null,c=g.Uc(g.Cc("b/12014412, meta tag with sanitized URL"),'<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+
g.Cb(c)+'">'),d.document.write(g.Qc(c)),d.document.close())):(d=d.open(g.Jc(e),f,l))&&c.noopener&&(d.opener=null);if(c=d)c.opener||(c.opener=window),c.focus();g.Ys(b)}};
g.h.ZF=function(a,b){aS(a,this.g,b)&&this.g.la("SHARE_CLICKED")};
g.h.AD=function(a){!a&&AS(this)&&this.ag()};
g.h.focus=function(){this.B.focus()};
g.h.T=function(){yS.prototype.T.call(this);DT(this)};g.r(ET,g.W);ET.prototype.C=function(){this.F.ag(this.element,!1);this.g.sc(this.element)};
ET.prototype.A=function(){var a=g.U(this.g).ij&&2!=this.g.Ca(),b=g.zL(this.g).Da().width;this.l=!!this.g.Y().videoId&&300<=b&&!a;g.O(this.o,"ytp-share-button-visible",this.l);a=480<b;g.U(this.g).K&&(g.O(this.o,"ytp-show-share-title",a),this.updateValue("share",a?g.S("YTP_SHARE"):""));this.g.Va(this.element,this.l&&this.B)};
ET.prototype.T=function(){g.W.prototype.T.call(this);g.N(this.o,"ytp-share-button-visible")};g.r(FT,g.W);FT.prototype.o=function(){var a=g.V(this.g.app);a&&a.l.g.webkitShowPlaybackTargetPicker()};
FT.prototype.l=function(){var a=g.V(this.g.app);g.JM(this,!!a&&a.Tc);this.updateValue("icon",this.g.Ai()?g.Y?{D:"div",W:["ytp-icon","ytp-icon-airplay-on"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M11,13 L25,13 L25,21 L11,21 L11,13 Z M12,28 L24,28 L18,22 L12,28 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,23 C7,24.1 7.9,25 9,25 L13,25 L13,23 L9,23 L9,11 L27,11 L27,23 L23,23 L23,25 L27,25 C28.1,25 29,24.1 29,23 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",fill:"#fff"}}]}:
g.Y?{D:"div",W:["ytp-icon","ytp-icon-airplay-off"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M12,28 L24,28 L18,22 L12,28 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,23 C7,24.1 7.9,25 9,25 L13,25 L13,23 L9,23 L9,11 L27,11 L27,23 L23,23 L23,25 L27,25 C28.1,25 29,24.1 29,23 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z"}}]})};g.r(HT,g.bP);g.h=HT.prototype;g.h.KB=function(a){g.T(a.state,32)?IT(this,this.l.Y()):this.F.hide()};
g.h.Jk=function(){var a=this.l.Qf(),b=a.current,c=aC(this.kb,141);b=this.kb.g[c].Ii(b);b!=this.K&&(c=bC(this.kb,b,141),this.B=GT(this.fa,c,141,141,!0),g.uh(this.ba,(this.H-this.B.width)/2),this.K=b);g.Md(this.ia,g.nQ(this.P?a.current-a.seekableEnd:a.current));g.Ut(this.I);this.I=g.Rt((0,g.A)(this.Bl,this));this.L.gh()};
g.h.LB=function(a,b){IT(this,b)};
g.h.Bl=function(){g.Ih(this.g,!1);g.Ut(this.I);var a=Math.round(.5*this.B.width),b=Math.round(.5*this.B.height),c=this.l.Qf(),d=c.current/(c.seekableEnd-c.seekableStart);c=this.kb.g[0].zt();var e=this.kb.g[0].Mk();d=a*(e-c+1)*d-this.H/2;var f=Math.floor(d/a)+c;e=Math.min(f+Math.min(20,Math.ceil(this.H/a)),e);f=Math.max(f,c);var k;if(this.A>=f&&this.o<=e){for(k=this.A;k>e;k--)g.Ed(this.g.children[k-this.o]);for(k=f-1;k>=this.o;k--)g.Ed(this.g.children[k-this.o]);for(k=this.o-1;k>=f;k--)this.g.insertBefore(JT(this,
k,a,b),this.g.firstChild);k=this.A+1}else g.Cd(this.g),k=f;for(;k<=e;k++){var l=JT(this,k,a,b);this.g.appendChild(l)}for(k=f;k<=e;k++)g.mh(this.g.children[k-f],"transform","translatex("+(-d+(k-c)*a)+"px)");this.o=f;this.A=e;g.Ih(this.g,!0)};
g.h.aA=function(){for(var a=this.o;a<=this.A;a++)dC(this.kb,a,this.B.width)};
g.h.pz=function(){var a=g.zL(this.l).Da();this.H!=a.width&&(this.H=a.width,this.kb&&(this.Jk(),this.Bl()))};
g.h.CI=function(a){this.element.style.g=a+"px"};
g.h.show=function(){g.bP.prototype.show.call(this);hV(this.V,!1)};
g.h.hide=function(){this.kb&&IT(this,null);g.bP.prototype.hide.call(this);hV(this.V,!0)};
g.h.T=function(){IT(this,null);g.bP.prototype.T.call(this)};
HT.g=200;g.r(KT,g.W);g.h=KT.prototype;g.h.MB=function(a){g.T(a.state,32)?MT(this,this.g.Y()):this.Na()&&(g.T(a.state,16)||g.T(a.state,1))||this.o.hide()};
g.h.OB=function(a,b){MT(this,b)};
g.h.NB=function(){var a=g.yL(this.g);(g.T(a,32)||g.T(a,16))&&LT(this)};
g.h.qz=function(){this.A=window.NaN;LT(this)};
g.h.hide=function(){this.kb&&MT(this,null);g.W.prototype.hide.call(this)};g.r(OT,g.W);g.h=OT.prototype;g.h.nD=function(){g.U(this.l).ma?g.CL(this.l):this.g.ag(this.element,!0)};
g.h.qu=function(){NT(this);this.g.Id(this.element,!0)};
g.h.oD=function(){g.Is()==this.l.getRootNode()?this.A.start():(this.A.stop(),this.g&&this.g.hide())};
g.h.uy=function(){if(window.screen&&window.outerWidth&&window.outerHeight){var a=.9*window.screen.width,b=.9*window.screen.height,c=Math.max(window.outerWidth,window.innerWidth),d=Math.max(window.outerHeight,window.innerHeight);if(c>d!=a>b){var e=c;c=d;d=e}a>c&&b>d&&this.qu()}};
g.h.Et=function(){g.JM(this,ZR(this.l))};
g.h.Jv=function(a){if(a){var b=g.Y?{D:"div",W:["ytp-icon","ytp-icon-full-screen-close"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"g",J:"ytp-fullscreen-button-corner-2",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-3",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-0",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",
N:{d:"m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-1",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"}}]}]};a=g.S("YTP_EXIT_FULLSCREEN");window.document.activeElement==this.element&&this.l.getRootNode().focus()}else b=g.Y?{D:"div",W:["ytp-icon","ytp-icon-full-screen"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"g",J:"ytp-fullscreen-button-corner-0",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"}}]},
{D:"g",J:"ytp-fullscreen-button-corner-1",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-2",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-3",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"}}]}]},a=g.S("YTP_FULLSCREEN");this.updateValue("icon",b);this.updateValue("title",this.g?null:a);bU(this.B.l)};
g.h.T=function(){this.g||(this.o(),this.o=null);g.W.prototype.T.call(this)};g.r(PT,yS);g.h=PT.prototype;g.h.show=function(){var a=this.Na();yS.prototype.show.call(this);a||(this.o.M(this.g,"presentingplayerstatechange",this.mo),this.o.M(this.g,"videodatachange",this.mo),this.mo())};
g.h.hide=function(){this.o&&(g.ft(this.o),yS.prototype.hide.call(this))};
g.h.mo=function(){var a=this.g.Y(),b=a.ig,c;for(c=0;c<b.length;c++){var d=this.l[c];d||(d=new g.W({D:"button",W:["ytp-multicam-menu-item","ytp-button"],N:{"aria-checked":"{{selected}}","data-id":"{{videoId}}"},G:[{D:"div",J:"ytp-multicam-menu-item-title",G:["{{cameraName}}"]}]}),d.ea("click",g.B(this.OE,c),this),d.ca(this.za),this.l[c]=d);var e=b[c],f=e.id;if(f!=d.element.getAttribute("data-id")){var k=e.thumbnail_url;!k&&f&&(k=AB(g.U(this.g),f,"default.jpg"));d.element.style.backgroundImage=k?"url("+
k+")":""}d.update({cameraName:e.title,videoId:f,selected:f==a.videoId?!0:null})}for(;c<this.l.length;)this.l.pop().dispose();c=g.yL(this.g);a=b.length||!a.Wb();IE(c)||g.T(c,4)||a||!AS(this)||this.ag()};
g.h.OE=function(a){this.g.Y();var b=this.g;a=this.g.Y().ig[a];var c=g.V(b.app,1).g,d=b.getCurrentTime();a.id==c.videoId?g.V(b.app)!=g.V(b.app,1)&&(XO(b.app,1),c.oa||b.xb(d)):(XO(b.app,4),fW(b.app,{videoId:a.id,title:c.title,start:c.oa?null:d,multifeed_metadata_list:c.Bb.multifeed_metadata_list},4))};
g.h.focus=function(){for(var a=this.g.Y(),b=a.ig,c=0;c<b.length;c++)if(b[c].id==a.videoId){this.l[c].focus();break}};
g.h.T=function(){g.Fe(this.l);yS.prototype.T.call(this)};g.r(QT,g.W);QT.prototype.C=function(a){this.o("newdata"==a)};
QT.prototype.o=function(a){var b=this.g.Y(),c=b.ig,d=g.yL(this.g);d=(IE(d)||g.T(d,4))&&0<c.length;g.JM(this,d);a&&(this.A=!0);if(d){this.A&&g.Up(this.B);a=null;d="";for(var e=0;e<c.length;e++)if(c[e].id==b.videoId){a=c[e].title;d=g.S("YTP_MULTICAM_INDEX",{CAMERA_INDEX:String(e+1),CAMERA_COUNT:String(c.length)})+"\n";break}this.update({text:d+a,preview:b.kc(g.U(this.g),"default.jpg")});bU(this.l)}else this.B.stop()};
QT.prototype.F=function(){jV(this.l,this.element,g.S("YTP_MORE_CAMERAS_AVAILABLE"));this.A=!1};g.r(RT,g.J);RT.prototype.l=function(){var a=g.Mt()-this.A;a=a<this.g?a/this.g:1;this.B(eq(Lca,a));1>a&&this.o.start()};
var Lca=new dq(0,0,.4,0,.2,1,1,1),Dba=/[0-9.-]+|[^0-9.-]+/g;g.r(ZT,g.W);ZT.prototype.Fc=function(a){this.o=300<=a.width;g.JM(this,this.o);this.g.Va(this.element,this.o&&this.F)};
ZT.prototype.fa=function(){g.U(this.g).U?this.g.isMuted()?this.g.Ee():this.g.mute():this.X.ag(this.element,!0);this.g.sc(this.element)};
ZT.prototype.ia=function(a){XT(this,a.volume,a.muted)};
var Eba=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",24.77," C",21.89,",",23.85," ",24,",",21.17," ",24,",",18," C",24,",",14.83," ",21.89,",",12.15," ",19,",",11.29," L",19,",",11.29," Z"],Fba=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",26.77," C",23.01,",",25.86," ",26,",",22.28," ",26,",",18," C",26,",",13.72," ",
23.01,",",10.14," ",19,",",9.23," L",19,",",11.29," Z"];g.r(cU,g.W);cU.prototype.l=function(){var a=g.V(this.g.app);a&&(a=a.l,a.g.webkitSetPresentationMode("picture-in-picture"==a.g.webkitPresentationMode?"inline":"picture-in-picture"))};g.r(eU,g.W);eU.prototype.F=function(a){dU(this,a.state)};
eU.prototype.C=function(){g.O(this.element,"ytp-play-button-playlist",AL(this.l))};
eU.prototype.H=function(){IE(g.yL(this.l))?this.l.Xb():this.l.Oc()};
eU.prototype.T=function(){this.g&&this.g();g.W.prototype.T.call(this)};g.r(hU,g.W);g.h=hU.prototype;g.h.th=function(){iU(this);this.F&&(this.Pa(this.F),this.F=null);this.C=this.g.Y(1);if(this.l=this.g.De())this.l.subscribe("shuffle",this.th,this),this.F=this.M(this.g,"progresssync",this.vD);this.B=jU(this);gU(this);this.Fc(g.zL(this.g).Da())};
g.h.Fc=function(a){a=void 0===a?g.zL(this.g).Da():a;var b=AL(this.g)||this.o&&g.UL(this.g)||kU(this);g.JM(this,b&&(this.o||400<=a.width))};
g.h.wD=function(a){var b=!0;this.I?b=g.$R(a,this.g):g.Ys(a);b&&(this.o?this.g.sh(!0):this.B?this.g.xb(0):this.g.Ei(!0))};
g.h.vD=function(){var a=jU(this);a!=this.B&&(this.B=a,gU(this))};
g.h.T=function(){this.A&&(this.A(),this.A=null);iU(this);g.W.prototype.T.call(this)};lU.prototype.update=function(a,b,c,d){this.width=b;this.o=c;this.B=d;this.g=b-c-d;this.position=g.Vc(a,c,c+this.g);this.A=this.position-c;this.l=this.A/this.g};g.r(nU,g.bP);g.h=nU.prototype;g.h.xD=function(a){if(!g.Zs(a)){var b=!1;switch(g.$s(a)){case 36:this.l.xb(0);b=!0;break;case 35:this.l.xb(window.Infinity);b=!0;break;case 34:this.l.Md(-60);b=!0;break;case 33:this.l.Md(60);b=!0;break;case 38:this.l.Md(5);b=!0;break;case 40:this.l.Md(-5),b=!0}b&&g.Ys(a)}};
g.h.Gt=function(a,b){mU(this,b,"newdata"==a)};
g.h.kz=function(){this.Gt("newdata",this.l.Y())};
g.h.oz=function(){uU(this.l.Y())?g.yL(this.l).gb()&&vU(this,!0):vU(this,!1)};
g.h.lz=function(a){0<VE(a,64)||!uU(this.l.Y())?vU(this,!1):IE(a.state)&&0>VE(a,64)&&vU(this,!0);this.A&&!g.T(a.state,32)&&3!=this.l.Ca()&&this.A.cancel()};
g.h.EG=function(a,b,c){var d=g.yh(this.element),e=xU(this).g,f=c?c.getAttribute("data-tooltip"):void 0;f&&(a=EQ(this.g,Number(c.getAttribute("data-position")),0)*e+g.yh(this.zb).x);this.wa.x=a-d.x;this.wa.y=b-d.y;c=xU(this);a=DQ(this.g,c.l);d=f||g.nQ(this.Ka?a-this.g.g:a);b=this.Ga;c=c.position+this.Ab;f=!!f;b.ba||(3==b.g&&b.Yd(),1!=b.g&&(b.element.className="ytp-tooltip ytp-bottom",b.g=1,b.I&&b.H.show(),b.o=g.OD(b.L.Y()),b.o&&b.o.subscribe("l",b.pu,b)),b.update({text:d,title:""}),g.O(b.element,"ytp-text-detail",
!!f),d=-1,b.o&&(d=aC(b.o,160*b.A),d=b.o.g[d].Ii(a)),mV(b,d),kV(b,!!f,c));g.O(this.l.getRootNode(),"ytp-progress-bar-hover",!g.T(g.yL(this.l),64));qU(this)};
g.h.DG=function(){var a=this.Ga;1==a.g&&a.Yd();g.N(this.l.getRootNode(),"ytp-progress-bar-hover")};
g.h.CG=function(a,b){this.o&&(this.o.dispose(),this.o=null);this.Mb=b;this.l.xb(DQ(this.g,xU(this).l),!1);g.M(this.element,"ytp-drag");(this.Ma=IE(g.yL(this.l)))&&this.l.Xb()};
g.h.FG=function(){this.ma=0;g.N(this.element,"ytp-pull-ui");g.N(this.element,"ytp-pulling");this.o&&(this.o.dispose(),this.o=null);0<this.F&&(this.o=new g.Rp((0,g.A)(this.my,this,g.Mt(),this.F,xU(this).position)),this.o.start());if(g.T(g.yL(this.l),32)||3==this.l.Ca())this.l.xb(DQ(this.g,xU(this).l)),g.N(this.element,"ytp-drag"),this.Ma&&!g.T(g.yL(this.l),2)&&this.l.Oc()};
g.h.my=function(a,b,c){a=1-Math.pow(1-(g.Mt()-a)/200,3);c+=a*(this.C*this.B-c);if(0>a||1<a)a=1;wU(this,(1-a)*b,c,this.C);1>a&&this.o.start()};
g.h.GG=function(a,b){var c=!1,d=!1,e=xU(this);3600<=this.g.getLength()&&(wU(this,this.Mb-b-10,e.position,e.l),d=!0,c=this.F>.1*(this.H?60:40),e=xU(this));g.O(this.element,"ytp-pull-ui",d);c&&g.M(this.element,"ytp-pulling");c=0;e.o&&0>=e.position?c=-1:e.B&&e.position>=e.width&&(c=1);this.ma!=c&&(this.ma=c,this.o&&(this.o.dispose(),this.o=null),c&&(this.o=new g.Rp((0,g.A)(this.tI,this,g.Mt(),this.I)),this.o.start()));this.l.xb(DQ(this.g,e.l),!1)};
g.h.tI=function(a,b){var c=this.B*(this.V-1);this.I=g.Vc(b+this.ma*(g.Mt()-a)*.3,0,c);pU(this);this.l.xb(DQ(this.g,xU(this).l),!1);0<this.I&&this.I<c&&this.o.start()};
g.h.iu=function(){this.updateValue("clipstarticon",rP());this.updateValue("clipendicon",rP());g.M(this.element,"ytp-clip-hover")};
g.h.hu=function(){this.updateValue("clipstarticon",tP());this.updateValue("clipendicon",sP());g.N(this.element,"ytp-clip-hover")};
g.h.jl=function(){this.L=0;this.K=window.Infinity;tU(this);oU(this,this.C,this.fa)};
g.h.Aw=function(a){a=g.q(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.visible){var c=b.getId();if(!this.P[c]){var d=g.zd("DIV");b.tooltip&&(d.setAttribute("data-tooltip",b.tooltip),d.setAttribute("data-position",b.start/1E3));this.P[c]=b;this.ia[c]=d;yU(this,b,d);"ytp-chapter-marker"==b.style?this.Bc.appendChild(d):this.Yb.appendChild(d)}}else AU(this,b)};
g.h.mI=function(a){a=g.q(a);for(var b=a.next();!b.done;b=a.next())AU(this,b.value)};
g.h.T=function(){sU(this,!1);g.bP.prototype.T.call(this)};g.r(BU,dT);BU.prototype.B=function(){g.sL(this.o).A&&3!=this.o.Ca()?this.g||(NU(this.A,this),this.g=!0):this.g&&(OU(this.A,this),this.g=!1);var a=g.sL(this.o).A;eT(this,!!a&&a.loaded)};
BU.prototype.C=function(a){a?this.o.Di("annotations_module"):this.o.Kk("annotations_module")};
BU.prototype.T=function(){this.g&&OU(this.A,this);dT.prototype.T.call(this)};g.r(g.CU,g.OS);g.h=g.CU.prototype;g.h.open=function(){g.ZS(this.o,this.B)};
g.h.de=function(a){if(this.C){var b=this.l[this.C];b.element.getAttribute("aria-checked");b.element.removeAttribute("aria-checked")}this.l[a].element.setAttribute("aria-checked",!0);this.sb(this.ce(a));this.C=a};
g.h.enable=function(a){this.H?a||(this.H=!1,this.uh(!1)):a&&(this.H=!0,this.uh(!0))};
g.h.uh=function(a){a?NU(this.o,this):OU(this.o,this)};
g.h.zc=function(a){this.O("select",a)};
g.h.zD=function(a){"true"!=this.l[a].element.getAttribute("aria-disabled")&&this.zc(a)};
g.h.ce=function(a){return a.toString()};
g.h.yD=function(a){g.Zs(a)||39!=g.$s(a)||(this.open(),g.Ys(a))};
g.h.T=function(){this.H&&OU(this.o,this);g.OS.prototype.T.call(this);for(var a in this.l)this.l[a].dispose()};g.r(EU,g.CU);EU.prototype.F=function(){var a=this.g.Xn();1<a.length?(g.DU(this,(0,g.I)(a,this.A)),this.K=g.pb(a,this.A,this),this.I.sb(a.length?" ("+a.length+")":""),this.O("size-change"),this.de(this.A(this.g.Pf())),this.enable(!0)):this.enable(!1)};
EU.prototype.zc=function(a){g.CU.prototype.zc.call(this,a);this.g.ao(this.K[a]);this.o.Od()};
EU.prototype.A=function(a){return a.toString()};g.r(FU,dT);FU.prototype.B=function(){var a=this.g.Ca();if(2!=a&&3!=a&&g.UL(this.g))this.A||(NU(this.C,this),this.A=!0,this.o.push(this.M(this.g,"videodatachange",this.B)),this.o.push(this.M(this.g,"videoplayerreset",this.B)),this.o.push(this.M(this.g,"onPlaylistUpdate",this.B)),this.o.push(this.M(this.g,"autonavchange",this.F)),this.F(this.g.Y().autonavState));else if(this.A){OU(this.C,this);this.A=!1;a=g.q(this.o);for(var b=a.next();!b.done;b=a.next())this.Pa(b.value)}};
FU.prototype.F=function(a){eT(this,1!=a)};
FU.prototype.H=function(a){var b=this.g;a=a?2:1;b.app.l.la("onAutonavChangeRequest",1!=a);a&&yW(b.app,a)};
FU.prototype.T=function(){this.A&&OU(this.C,this);dT.prototype.T.call(this)};g.r(GU,g.CU);GU.prototype.A=function(){var a=this.g.Ca();if(2!=a&&3!=a&&(this.I=g.DL(this.g),a=this.g.Tn(),g.RL(this.g)&&g.SL(this.g)&&a.unshift("missing-qualities"),g.DU(this,a),a.length)){this.K();this.enable(!0);return}this.enable(!1)};
GU.prototype.K=function(){var a=g.EL(this.g);this.l[a]&&(this.F=this.g.Ci(),this.de(a),"auto"==a&&this.sb(this.ce(a)))};
GU.prototype.zc=function(a){"missing-qualities"!=a&&(g.CU.prototype.zc.call(this,a),this.g.Fi(a),this.o.qb())};
GU.prototype.ce=function(a,b){b=void 0===b?!1:b;if("missing-qualities"==a)return{D:"a",N:{href:"https://support.google.com/youtube/?p=missing_quality",target:"_blank"},G:[g.S("YTP_MISSING_FORMATS")]};var c=[HU(this,a)],d=g.EL(this.g);b||"auto"!=d||"auto"!=a||(c.push(" "),c.push(HU(this,this.F,["ytp-menu-label-secondary"])));return{D:"div",G:c}};g.r(IU,g.W);IU.prototype.Fc=function(a){g.JM(this,this.A&&400<=a.width)};
IU.prototype.B=function(){if(this.o.Na())this.o.qb();else{var a=g.sL(this.g).l;a&&!a.loaded&&(a.Mn("tracklist",{includeAsr:!0}).length||a.load());this.o.Id(this.element)}};
IU.prototype.l=function(){var a=this.g.Ca(),b=2!=a&&3!=a,c=g.FL(this.g),d=b&&!!g.sL(this.g).o;a=d&&1==c.Qe;c=d&&2==c.Qe;b=(d=a||c)||!b?null:this.g.Ci();g.O(this.element,"ytp-hd-quality-badge","hd720"==b||"hd1080"==b||"hd1440"==b);g.O(this.element,"ytp-4k-quality-badge","hd2160"==b);g.O(this.element,"ytp-5k-quality-badge","hd2880"==b);g.O(this.element,"ytp-8k-quality-badge","highres"==b);g.O(this.element,"ytp-3d-badge-grey",d&&a);g.O(this.element,"ytp-3d-badge",d&&c)};g.r(KU,g.CU);g.h=KU.prototype;g.h.oo=function(a){return a.toString()};
g.h.ce=function(a){return"1"==a?g.S("YTP_NORMAL_SPEED"):a.toString()};
g.h.It=function(){var a=this.g.Ca();this.enable(2!=a&&3!=a)};
g.h.uh=function(a){g.CU.prototype.uh.call(this,a);a?(this.A=this.M(this.g,"onPlaybackRateChange",this.BD),g.DU(this,(0,g.I)(this.g.qh(),this.oo)),this.de(this.oo(this.g.ec()))):(this.Pa(this.A),this.A=null)};
g.h.BD=function(a){this.de(this.oo(a))};
g.h.zc=function(a){g.CU.prototype.zc.call(this,a);this.g.Ce((0,window.parseFloat)(a),!0);this.o.Od()};g.r(LU,g.VS);LU.prototype.Id=function(a){MU(this);0<this.l.za.length&&g.VS.prototype.Id.call(this,a)};
LU.prototype.show=function(){g.VS.prototype.show.call(this);g.M(this.o.getRootNode(),"ytp-settings-shown")};
LU.prototype.hide=function(){g.VS.prototype.hide.call(this);g.N(this.o.getRootNode(),"ytp-settings-shown")};g.r(PU,g.W);
PU.prototype.l=function(){var a=!1;-1!=this.g.Fg().indexOf("remote")&&(a=1<this.g.Lb("remote","receivers").length);g.JM(this,a&&400<=g.zL(this.g).Da().width);var b=1;a&&this.g.Lb("remote","casting")&&(b=2);if(this.o!=b){this.o=b;switch(b){case 1:this.updateValue("icon",g.Y?{D:"div",W:["ytp-icon","ytp-icon-cast-desktop-off"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z",fill:"#fff"}}]});
break;case 2:this.updateValue("icon",g.nP())}g.O(this.element,"ytp-remote-button-active",!!this.g.Lb("remote","casting"))}};
PU.prototype.B=function(){if(this.g.Lb("remote","quickCast"))this.g.Pc("remote","quickCast",!0);else{var a=this.A,b=this.element;if(AS(a))a.qb();else{MU(a);a:{var c=g.q(a.l.za);for(var d=c.next();!d.done;d=c.next())if(d=d.value,0==d.priority){c=d;break a}c=null}c&&(c.open(),a.Id(b));a.Id(b)}}};g.r(QU,g.W);QU.prototype.C=function(){var a=this.g.app;a.l.la("SIZE_CLICKED",!a.Bc)};
QU.prototype.l=function(){g.JM(this,this.g.app.xd&&!this.g.isFullscreen()&&3!=this.g.Ca());if(this.Na()){var a=this.g.isWidescreen();if(this.o!=a){var b=a?g.Y?{D:"div",W:["ytp-icon","ytp-icon-default-view"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z",fill:"#fff","fill-rule":"evenodd"}}]}:g.Y?{D:"div",W:["ytp-icon","ytp-icon-theater-mode"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",
width:"100%"},G:[{D:"path",Fa:!0,N:{d:"m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z",fill:"#fff","fill-rule":"evenodd"}}]};g.U(this.g).X||null==this.o?this.updateValue("icon",b):WT(this.B,this.element,b);a=(this.o=a)?g.S("YTP_DEFAULT_VIEW"):g.S("YTP_THEATER_MODE");this.updateValue("title",a);bU(this.A)}}};g.r(RU,g.W);RU.prototype.o=function(){var a=g.sL(this.l).l;a&&a.ew()};
RU.prototype.g=function(){var a=!!g.sL(this.l).l;g.JM(this,a&&300<=g.zL(this.l).Da().width);a&&this.updateValue("pressed",!!this.l.Lb("captions","track").displayName)};g.r(SU,g.W);
SU.prototype.o=function(){var a=g.zL(this.B).Da().width,b=350<=a&&(!this.l||!g.T(g.yL(this.B),64));g.JM(this,b);g.O(this.element,"ytp-time-display-allow-autohide",b&&400>a);a=this.B.Qf();b&&(b=g.nQ(a.current),this.F!=b&&(this.updateValue("currenttime",b),this.F=b),b=g.nQ(a.duration),this.H!=b&&(this.updateValue("duration",b),this.H=b));this.l&&(a=a.isPeggedToLive,this.C!=a&&(this.C=a,this.o(),b=this.A.element,(b.disabled=a)?this.g&&(this.g(),this.g=null,b.removeAttribute("title")):(b.title=g.S("YTP_GOTO_LIVE_TOOLTIP"),
this.g=LS(this.I,this.A.element))))};
SU.prototype.L=function(a,b){this.l=b.oa;g.O(this.element,"ytp-live",this.l);this.o()};
SU.prototype.K=function(a){a.target==this.A.element&&(this.B.xb(window.Infinity),this.B.Oc())};
SU.prototype.T=function(){this.g&&this.g();g.W.prototype.T.call(this)};g.r(UU,g.W);g.h=UU.prototype;g.h.JD=function(){var a=this.C.cd();this.F!=a&&(this.F=a,TU(this,this.g.getVolume(),this.g.isMuted()))};
g.h.Fc=function(a){g.JM(this,350<=a.width)};
g.h.mH=function(a){if(!g.Zs(a)){var b=g.$s(a),c=null;37==b?c=this.A-5:39==b?c=this.A+5:36==b?c=0:35==b&&(c=100);null!=c&&(c=g.Vc(c,0,100),0==c?this.g.mute():(this.g.isMuted()&&this.g.Ee(),this.g.setVolume(c)),g.Ys(a))}};
g.h.KD=function(a){var b=a.deltaX||-a.deltaY;a.deltaMode?this.g.setVolume(this.A+(0>b?-10:10)):this.g.setVolume(this.A+g.Vc(b/10,-10,10));g.Ys(a)};
g.h.lH=function(){VU(this,this.o,!0,this.l,this.C.K);this.R=this.A;this.g.isMuted()&&this.g.Ee()};
g.h.kH=function(a){a-=g.yh(this.P).x;this.g.setVolume(100*g.Vc(a/(this.F?78:52),0,1))};
g.h.jH=function(){VU(this,this.o,!1,this.l,this.C.K);0==this.A&&(this.g.mute(),this.g.setVolume(this.R))};
g.h.LD=function(a){TU(this,a.volume,a.muted)};
g.h.lq=function(){VU(this,this.o,this.B,this.l,this.C.K)};
g.h.Nt=function(a){VU(this,this.o,this.B,a,this.C.K)};
g.h.Kv=function(a){g.O(this.element,"ytp-volume-control-hover",a);VU(this,a,this.B,this.l,this.C.K)};
g.h.T=function(){g.W.prototype.T.call(this);g.N(this.L,"ytp-volume-slider-active")};g.r(WU,g.W);WU.prototype.A=function(){this.l=!!this.g.Y().videoId;g.JM(this,this.l);this.g.Va(this.element,this.l&&this.o);if(this.l){var a=this.g.getVideoUrl(!0,!1,!1,!0);this.updateValue("url",a)}};
WU.prototype.B=function(a){var b=this.g.getVideoUrl(!g.oQ(a),!1,!0,!0);aS(b,this.g,a);this.g.sc(this.element)};g.r(XU,g.dt);g.h=XU.prototype;g.h.qo=function(){var a=this.C;rU(a);var b=a.l.getCurrentTime();(b<a.L||b>a.K)&&a.jl();this.R.o()};
g.h.du=function(){this.rp();!this.U.g||this.qo()};
g.h.vF=function(){this.qo();this.H.start()};
g.h.rp=function(){var a;if(a=!g.U(this.A).l){a=this.C;var b=2*a.B*g.DB();a=300>1E3*a.g.getLength()/a.l.ec()/b}a=a&&g.yL(this.A).gb()&&!!window.requestAnimationFrame;b=!a;this.U.g||(a=b=!1);b?this.I||(this.I=this.M(this.A,"progresssync",this.qo)):this.I&&(this.Pa(this.I),this.I=null);a?this.H.isActive()||this.H.start():this.H.stop()};
g.h.cJ=function(a){hV(this.o.l,!a)};
g.h.Sb=function(){var a=this.o.cd(),b=g.zL(this.A).Da(),c=ZU(this),d=Math.max(b.width-2*c,100);if(this.X!=b.width||this.aa!=a){this.X=b.width;this.aa=a;var e=$U(this);this.l.element.style.width=e+"px";this.l.element.style.left=c+"px";var f=this.C;f.Ab=c;f.B=e;f.H=a;pU(f);this.o.l.fa=e}c=this.g;b=Math.min(413*(a?1.5:1),Math.round(.82*(b.height-(this.o.cd()?72:50))));c.P=Math.min(570*(a?1.5:1),d);c.L=b;c.aj();this.rp()};
g.h.ha=function(){return this.l.element};g.r(g.aV,g.W);g.aV.prototype.l=function(){g.M(this.element,"ytp-sb-subscribed")};
g.aV.prototype.o=function(){g.N(this.element,"ytp-sb-subscribed")};g.y("yt.pubsub.publish",g.zt,void 0);g.r(dV,g.W);dV.prototype.R=function(a){this.g.sc(this.element);var b=this.g.getVideoUrl(!g.oQ(a),!1,!0);aS(b,this.g,a)};
dV.prototype.H=function(){eV(this);var a=this.g.Y();this.updateValue("title",a.title);this.A&&(this.A.g=a.bj);var b=g.U(this.g);if(b.K&&2!=this.g.Ca()){var c=a.shortViewCount;g.O(this.g.getRootNode(),"ytp-show-title-view-count",!!c);this.updateValue("viewCount",c)}else g.N(this.g.getRootNode(),"ytp-show-title-view-count"),this.updateValue("viewCount","");!b.I&&a.videoId?(this.updateValue("url",this.g.getVideoUrl(!0)),this.o||(this.o=this.M(this.P,"click",this.R))):this.o&&(this.updateValue("url",
null),this.Pa(this.o),this.o=null)};g.r(fV,g.W);g.h=fV.prototype;g.h.eG=function(a){3==this.g&&this.Yd();a=a.currentTarget;this.g||(a.removeEventListener("mouseover",this.P),a.addEventListener("mouseout",this.ia),iV(this,a,2))};
g.h.bG=function(a){(a=Ws(a))&&g.Ld(this.l,a)||this.Yd()};
g.h.pu=function(a,b){if(a<=this.B&&this.B<=b){var c=this.B;this.B=window.NaN;mV(this,c)}};
g.h.cA=function(){dC(this.o,this.B,160*this.A)};
g.h.Yd=function(){switch(this.g){case 2:this.l.removeEventListener("mouseout",this.ia),this.l.addEventListener("mouseover",this.P);case 3:3==this.g&&this.X.stop();this.L.removeEventListener("appresize",this.R);this.K||this.l.setAttribute("title",this.C);this.C="";this.l=null;break;case 1:this.o&&(this.o.unsubscribe("l",this.pu,this),this.o=null),this.L.removeEventListener("videoready",this.R),this.V.stop()}this.g=null;this.I&&this.H.hide()};
g.h.ah=function(a){if(this.l)for(var b=0;b<arguments.length;b++)g.Ld(arguments[b],this.l)&&this.Yd()};
g.h.T=function(){null!=this.g&&this.Yd();g.W.prototype.T.call(this)};g.r(qV,g.W);g.h=qV.prototype;g.h.Fc=function(a){this.A=300<=a.width;g.JM(this,this.A);a=480<a.width;g.U(this.g).K&&(g.O(this.H,"ytp-show-watch-later-title",a),this.updateValue("watch_later",a?g.S("YTP_WATCH_LATER_2"):""));this.g.Va(this.element,this.A&&this.C)};
g.h.JH=function(){this.l=!0;this.o=!1;pV(this,1);g.U(this.g).l&&jV(this.F,this.element);g.U(this.g).ob&&this.g.la("WATCH_LATER_VIDEO_ADDED")};
g.h.MD=function(){this.g.sc(this.element);var a=this.g.Y().videoId,b=g.U(this.g);b.jc?oV(this,a):g.cV(function(){fv({videoId:a});window.location.reload()},null,"wl_button",800,600,yB(b))};
g.h.KH=function(a,b){this.o=!1;var c=g.S("YTP_ERROR_GENERIC_WITHOUT_LINK");b&&(c=b.errors&&b.errors.length?b.errors[0]:b.error_message);pV(this,4,c);g.U(this.g).ob&&this.g.la("WATCH_LATER_ERROR",c)};
g.h.LH=function(){this.o=this.l=!1;pV(this,2);g.U(this.g).ob&&this.g.la("WATCH_LATER_VIDEO_REMOVED")};
g.h.ND=function(){this.o=this.l=!1;pV(this,2)};g.r(rV,g.W);rV.prototype.B=function(a){g.JM(this,!g.T(a.state,2))};
rV.prototype.o=function(){if(this.l.Y().videoId){var a=this.l.getVideoUrl(!0,!1,!1,!0);this.updateValue("url",a);this.g||(this.g=this.ea("click",this.A))}else this.g&&(this.updateValue("url",null),this.Pa(this.g),this.g=null)};
rV.prototype.A=function(a){var b=this.l.getVideoUrl(!g.oQ(a),!1,!0,!0);aS(b,this.l,a)};g.r(sV,ES);g.h=sV.prototype;g.h.rm=function(a,b){b?this.U=a:this.U=null;this.hf()};
g.h.sm=function(a,b){if(b)this.H.push(a);else for(var c=this.H.length;0<=c;c--)if(this.H[c]==a){this.H.splice(c,1);break}this.A.yb(64,0<this.H.length)};
g.h.Bh=function(){g.HL(this.g)&&g.IL(this.g);FS(this);return!!this.U||ES.prototype.Bh.call(this)};
g.h.hf=function(){var a=!this.Bh(),b=a&&g.HL(this.g)&&!g.T(g.yL(this.g),2);a?(this.Ta.show(),this.Ua.show()):(this.Ta.hide(),this.Ua.hide(),this.l.ah(this.B.element));b?this.R.o.show():this.R.o.hide();this.o&&YU(this.o,!a);ES.prototype.hf.call(this)};
g.h.Ao=function(a){a&&(this.l.ah(this.B.element),this.o&&this.l.ah(this.o.ha()));ES.prototype.Ao.call(this,a)};
g.h.iD=function(a){var b=this.g.getRootNode();a?b.parentElement?(b.setAttribute("aria-label",g.S("YTP_PLAYER_FULLSCREEN")),b.parentElement.insertBefore(this.aa.element,b),b.parentElement.insertBefore(this.V.element,b.nextSibling)):g.Q(Error("Player not in DOM.")):(b.setAttribute("aria-label",g.S("YTP_PLAYER_NORMAL")),g.FM(this.aa),g.FM(this.V));this.fe();this.Vg()};
g.h.cd=function(){return this.g.isFullscreen()||!1};
g.h.fe=function(){var a=this.cd();this.l.A=a?1.5:1;g.O(this.I.element,"ytp-big-mode",a);ES.prototype.fe.call(this)};
g.h.Vg=function(){ES.prototype.Vg.call(this);this.g.Va(this.Ma.element,!!this.L);var a=this.Ra,b=!!this.L;a.B=b;a.g.Va(a.element,a.l&&b);this.ma&&(a=this.ma,b=!!this.L,a.C=b,a.g.Va(a.element,a.A&&b));if(!this.L)for(this.l.ah(this.B.element),a=0;a<this.fa.length;a++)b=this.fa[a],AS(b)&&b.qb()};
g.h.ql=function(a){this.o&&YU(this.o,this.Bh());ES.prototype.ql.call(this,a)};
g.h.nG=function(){KL(this.g)&&this.A.yb(128,!1)};
g.h.Tj=function(){return this.I.Na()?(this.I.qb(),!0):this.H.length?(this.H[this.H.length-1].qb(),!0):this.U?(this.U.qb(),!0):ES.prototype.Tj.call(this)};
g.h.FI=function(a,b){this.Ab=b;this.sm(a,b);this.ww()};
g.h.ww=function(){var a=this.Ab||AS(this.I);this.ya!=a&&(this.ya=a,this.g.la("onAutonavPauseRequest",this.ya))};
g.h.Jy=function(){tV(this,this.g.getRootNode(),!0).focus()};
g.h.Ky=function(){tV(this,this.g.getRootNode(),!1).focus()};uV.prototype.click=function(a){var b=a.getAttribute("data-visual-id");g.Ta(this.g,a);g.Ta(this.l,b);VL(this,"onLogVeClicked",{id:b})};
uV.prototype.F=function(a){g.Ta(this.g,a);var b=a.getAttribute("data-visual-id");g.Ya(this.g,a);g.Ya(this.o,b);g.Ya(this.l,b);a.removeAttribute("data-visual-id")};
uV.prototype.pause=function(){this.A=!0};
uV.prototype.resume=function(){this.A=!1;for(var a=g.q(this.B),b=a.next();!b.done;b=a.next())b=b.value,VL(this,b.type,b.data);this.B.length=0};g.r(vV,g.W);g.r(xV,g.W);g.h=xV.prototype;g.h.show=function(){g.W.prototype.show.call(this);this.Sn()};
g.h.hide=function(){g.W.prototype.hide.call(this);this.l.stop()};
g.h.stop=function(){this.l.stop()};
g.h.start=function(){this.l.isActive()||this.Sn()};
g.h.Sn=function(){var a=g.Mt(),b=g.V(this.g),c=JV(this.g),d=this.g.l,e=d.app.B.ha(),f=this.g.g,k=b.Em(),l=b.ia,m=8*hK(l,"bandwidth")/1024,n=hK(l,"networkactivity")/1024,p=hK(l,"bufferhealth");if(b.H){var u=b.H.g.g+"/"+g.av(IK(b));u=u+"/"+b.H.Se()}else u="";var v=g.DB();d=g.FL(d).an;k={video_id_and_cpn:c.videoId+" / "+c.clientPlaybackNonce,codecs:"",dropped_frames:k.totalVideoFrames?""+(k.droppedVideoFrames||0)+"/"+k.totalVideoFrames:"-",stream_host:b.B?b.B.Ka:"",dimensions:e.clientWidth+"x"+e.clientHeight+
(1<v?"*"+v:""),bandwidth_kbps:m.toFixed(0)+" Kbps",buffer_health_seconds:p.toFixed(2)+" s",drm_style:u?"":"display:none",drm:u,network_activity_bytes:n.toFixed(0)+" KB",shader_info:d,shader_info_style:d?"":"display:none"};m=this.g.U.getVolume();f=cE(c,f);f=Math.round(m)+"% / "+Math.round(m*f)+"%";m=c.relativeLoudness.toFixed(1);(0,window.isFinite)(m)&&(f+=" (content loudness "+m+"dB)");k.volume=f;k.resolution=e.videoWidth+"x"+e.videoHeight;if(c.Ba){e=c.Ba.video.fps;1<e&&(k.resolution+="@"+e);(b=FK(b))&&
b.video&&(k.resolution+=" / "+b.video.width+"x"+b.video.height,1<b.video.fps&&(k.resolution+="@"+b.video.fps));k.codecs=yV(c.Ba);if(b=c.Hc)b=c.Ba,b=!(b.audio&&b.video);b&&(k.codecs+=" / "+yV(c.Hc));c.Ba.video.l||c.Ba.video.primaries?(b=c.Ba.video.l||"unknown","smpte2084"==b?b+=" (PQ)":"arib-std-b67"==b&&(b+=" (HLG)"),k.color=b+" / "+(c.Ba.video.primaries||"unknown"),k.color_style=""):k.color_style="display:none"}b=c.oa;k.live_latency_style=b?"":"display:none";k.live_mode_style=b?"":"display:none";
if(b){b=hK(l,"livelatency");k.live_latency_secs=b.toFixed(2)+"s";e=c.Ib()?"Manifestless, ":"";f="Uncertain";if(0<=b&&120>b)if(c.latencyClass&&"UNKNOWN"!=c.latencyClass)switch(c.latencyClass){case "NORMAL":f="Optimized for Normal Latency";break;case "LOW":f="Optimized for Low Latency";break;case "ULTRALOW":f="Optimized for Ultra Low Latency";break;default:f="Unknown Latency Setting"}else f=c.isLowLatencyLiveStream?"Optimized for Low Latency":"Optimized for Smooth Streaming";k.live_mode=e+f}wV(this.o,
gK(l,"bandwidth"));wV(this.C,gK(l,"networkactivity"));wV(this.B,gK(l,"livelatency"));wV(this.A,gK(l,"bufferhealth"));this.update(k);a=25<g.Mt()-a?5E3:500;this.l.start(a)};g.r(zV,g.J);g.h=zV.prototype;g.h.sE=function(){CV(this)||g.RV(this,5)};
g.h.vG=function(a){CV(this)||(rW(this),IE(a.o)&&wW(this))};
g.h.Yc=function(){var a=this.A,b={};a.l&&g.Ka(b,a.l.bB());this.A.B&&g.Ka(b,{});b.fs=this.l.isFullscreen();b.volume=Math.round(this.U.getVolume());b.mos=this.U.isMuted()?1:0;if(this.g.experiments.g("html5_enable_embedded_player_visibility_signals")&&this.g.o&&(this.Gc&&(a=this.Gc,a=null==a.l?null:Math.round(100*a.l)/100,null!=a&&(b.inview=a)),a=this.H.Da(),0<a.height&&0<a.width)){a=[Math.round(a.height),Math.round(a.width)];var c=g.DB();1<c&&a.push(c);b.size=a.join(":")}return b};
g.h.getCurrentTime=function(a){return 3==wL(this)?g.xL(this.A).getCurrentTime():(a=g.V(this,a))?a.getCurrentTime():0};
g.h.getDuration=function(a){return(a=g.V(this,a))?a.getDuration():0};
g.h.wA=function(a){switch(a.type){case "loadedmetadata":aD("fvb","")||this.I.g("fvb");g.KC("fvb",void 0,"video_to_ad");this.Ua.start();break;case "loadstart":aD("gv","")||this.I.g("gv");g.KC("gv",void 0,"video_to_ad");break;case "progress":case "timeupdate":!aD("l2s","")&&2<=nE(yE(a.target))&&this.I.g("l2s");break;case "playing":g.GB&&this.Ua.start();if(g.lB(this.g))a=!1;else{var b=this.A.o;a="none"==qh(this.B.g,"display")||0==g.Hh(this.B.g).yd();b=!OR(this.H)||b||!this.g.C||this.g.tf;a=a&&!b}a&&
(this.F.tc("hidden","1",!0),JV(this).Uf||vW(this,"hidden",!0))}};
g.h.EF=function(a,b){this.l.la("onLoadProgress",b)};
g.h.nH=function(){this.l.O("playbackstalledatstart")};
g.h.xA=function(a,b){this.l.la("onVideoProgress",b)};
g.h.uA=function(){this.U.O("progresssync")};
g.h.rA=function(a){0<VE(a,1)&&!g.T(a.state,64)&&this.o.g.oa&&RK(this.o)&&1<this.l.ec()&&WV(this,1,!0);var b;if(b=0<VE(a,2))this.C&&(g.qB(this.g)||this.l.isFullscreen()&&!this.Ga)&&g.mW(this)?(b=this.g.experiments.g("html5_player_autonav_logging"),nW(this,!1,b),b=!0):b=!1,b=!b;b&&(b=this.o.l)&&Js(b.g);g.T(a.state,128)&&(b=a.state,gW(this),b=b.g,this.l.la("onError",hX[b.errorCode]||5),this.l.la("onDetailedError",b),6048E5<g.Mt()-this.g.qj&&this.l.la("onReloadRequired"));!a.state.gb()||g.QE(a.state)||
aD("pbresume")||(b=JV(this),g.LC("cpn",b.clientPlaybackNonce,"ad_to_video"),b.videoId&&g.LC("docid",b.videoId,"ad_to_video"),b.playbackId&&g.LC("plid",b.playbackId,"ad_to_video"),g.KC("pbresume",void 0,"ad_to_video"));this.l.O("applicationplayerstatechange",a)};
g.h.Pu=function(a){3!=wL(this)&&(this.g.experiments.g("html5_ignore_playing_evt")||!g.T(a.state,32)&&0>VE(a,16)&&(!g.T(a.state,8)||g.T(a.state,64)||this.B.g.ended||g.T(a.state,2)||wW(this)),this.l.O("presentingplayerstatechange",a))};
g.h.tA=function(a){UV(this,RE(a.state));g.T(a.state,1024)&&this.l.app.X&&(Rv(this,{muted:!1,volume:this.K.volume},!1),SV(this,!1))};
g.h.AG=function(a){a.state.gb()&&!g.QE(a.state)&&(BR(this.A),g.ft(this.Ec))};
g.h.rE=function(a){"newdata"==a&&$V(this)};
g.h.vE=function(){this.l.la("onPlaybackAudioChange",this.l.Pf().dc.name)};
g.h.FH=function(a){a==this.F.g&&this.l.la("onPlaybackQualityChange",a.Ba.video.quality)};
g.h.Gn=function(a,b,c){if("newdata"==a)GR(this.A),this.l.O("videoplayerreset",b);else{if(!this.B)return;if("dataloaded"==a)if(this.F==this.o){if(b.A.jf(c.Bb),!this.o.o.isError()){var d=CV(this),e=this.o.g;if(!PD(e)||d||BD(this.o.g))e.Wb(),d&&g.RV(this,6),KV(this),d||(e=this.A.B)&&!e.created&&CR(this.A)&&this.A.B.create();else if(this.g.experiments.g("html5_defer_background_errors")&&Zv())mL(this.o,"app_none_avail");else{d=e.oa&&!g.rA()?"html5.unsupportedlive":"fmt.noneavailable";var f=+!!e.adaptiveFormats,
k=+!!e.hd,l=+(0<=e.Ih.indexOf("itag=18")),m=+(0<=e.Ih.indexOf("itag=43")),n=+LV('video/mp4; codecs="avc1.42001E, mp4a.40.2"'),p=+LV('video/webm; codecs="vp8.0, vorbis"');f="nosupported.1;a."+f+";d."+k+";"+("f18."+l+";c18."+n+";f43."+m+";c43."+p);e.ka&&(f+=";f133."+ +!!e.ka.g["133"]+";f140."+ +!!e.ka.g["140"]);g.wK(this.o,d,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK",f)}}}else KV(this);1==b.getPlayerType()&&(this.g.U&&zW(this),JV(this).oa&&!this.g.Uj&&g.wK(this.o,"html5.unsupportedlive","YTP_DEVICE_FALLBACK",
void 0),c.Wb()&&(c.al||c.Cn||c.Dd.focEnabled||c.Dd.rmktEnabled||JV(this).Tp)&&(e=JV(this),cW(this,"part2viewed",1,0x8000000000000),cW(this,"engagedview",Math.max(1,1E3*e.ke),0x8000000000000),e.oa||(e=1E3*e.lengthSeconds,cW(this,"videoplaytime25",.25*e,e),cW(this,"videoplaytime50",.5*e,e),cW(this,"videoplaytime75",.75*e,e),cW(this,"videoplaytime100",e,0x8000000000000),cW(this,"conversionview",e,0x8000000000000))));this.l.O("videodatachange",a,c,b.getPlayerType())}this.g.ob&&this.l.la("onVideoDataChange",
{type:a,playertype:b.getPlayerType()});a=c.clientScreenNonce;c=c.rootVeType;a&&c&&(b=this.L,a!=b.C&&(b.C=a,VL(b,"onScreenChanged",{csn:a,root_ve_type:c}),b.l.length&&VL(b,"onLogVesShown",{ids:b.l}),b.o=g.bb(b.l)))};
g.h.Lj=function(){NV(this,null);this.l.la("onPlaylistUpdate")};
g.h.au=function(a){var b=a.getId(),c=this.o.g;if("part2viewed"==b)c.Zu&&g.as(c.Zu),c.Cn&&g.as(c.Cn);else if("conversionview"==b){var d=this.o;d.C&&BF(d.C)}else"engagedview"==b&&g.as(c.al);if(c.bl){d=c.bl;var e={label:a.getId()};if(this.g.experiments.g("send_pyv_ad_mt_and_abandon_pings")){var f=1E3*this.getCurrentTime();e.ad_mt=Math.round(Math.max(0,f)).toString()}d=g.wr(d,e);g.as(d)}switch(b){case "videoplaytime25":c.ds&&g.as(c.ds);g.as(c.bI);break;case "videoplaytime50":c.es&&g.as(c.es);g.as(c.cI);
break;case "videoplaytime75":c.gs&&g.as(c.gs);g.as(c.dI);break;case "videoplaytime100":c.Zr&&g.as(c.Zr),g.as(c.aI)}(b=JV(this).Tp)&&b[a.getId()]&&(c=b[a.getId()],g.as(c,void 0,wv(c)||yv(c)||uv(c)),b=b[a.getId()+"gaia"],g.as(b,void 0,wv(b)||yv(b)||uv(b)));this.o.K.C(a)};
g.h.isPeggedToLive=function(a){return RK(this.o,void 0,void 0===a?!1:a)};
g.h.vA=function(a,b){var c=a.g;if(1==this.R||2==this.R)c.startSeconds=b;2==this.R?PV(this):this.l.O("seekto",b)};
g.h.jE=function(){this.l.O("airplayactivechange")};
g.h.kE=function(){this.l.O("airplayavailabilitychange")};
g.h.AE=function(){this.l.O("beginseeking")};
g.h.jF=function(){this.l.O("endseeking")};
g.h.Go=function(){var a=this.C.Eb(),b=JV(this);b.Lg||!this.ia?(b=b.Jf,a=eW(this,a),b&&hW(this,a)):a&&iW(this,a);this.l.la("onPlaylistUpdate")};
g.h.pE=function(a){this.l.la("onCueRangeEnter",a.getId())};
g.h.qE=function(a){this.l.la("onCueRangeExit",a.getId())};
g.h.tE=function(){this.sa||(this.sa=yC(this.ju,this));HF(this.I,qW(this))};
g.h.xF=function(){this.U.O("internalAbandon")};
g.h.ju=function(a){a=a.g;if(!(0,window.isNaN)(a)&&0<a&&this.o){var b=this.o;b.C&&0<a&&(b.C.l.l.aft=[a])}};
g.h.XF=function(){this.yo()};
g.h.YF=function(){this.yo()};
g.h.yo=function(){this.g.ob&&this.F?this.l.la("onApiChange",this.F.getPlayerType()):this.l.la("onApiChange")};
g.h.VF=function(){var a={volume:g.Vc(Math.floor(100*this.B.getVolume()),0,100),muted:this.B.g.muted};a.muted||SV(this,!1);this.K=g.hc(a);this.l.la("onVolumeChange",a)};
g.h.nF=function(){var a=g.Is();uW(this,a==this.H.element?1:0);tW(this,!!a&&g.Ld(this.H.element,a))};
g.h.UG=function(){2!=this.Ta&&uW(this,g.Is()==this.H.element?1:0);this.g.fj&&JV(this)&&!JV(this).backgroundable&&this.B&&.33>window.outerHeight*window.outerWidth/(window.screen.width*window.screen.height)&&Js(this.B.g)};
g.h.DF=function(a){3!=wL(this)&&this.l.O("liveviewshift",a)};
g.h.isWidescreen=function(){return this.Bc};
g.h.TG=function(a){var b=g.wN(this.H);g.Zg(this.ud,b)||(this.ud=b,this.F&&YK(this.F,"r"),this.o&&this.o!=this.F&&YK(this.o,"r"),1==this.Ta&&this.Ka&&tW(this,!0));this.Yb&&g.cd(this.Yb,a)||(this.l.O("appresize",a),this.Yb=a)};
g.h.qc=function(){return this.U.qc()};
g.h.iH=function(){vW(this,"signature")};
g.h.hG=function(){GV(this);FV(this)};
g.h.SE=function(){this.l.la("CONNECTION_ISSUE")};
g.h.sA=function(a){this.l.O("heartbeatparams",a)};
g.h.mG=function(){var a=g.V(this);a&&g.oL(a,!KL(this.l))};
g.h.FF=function(){this.l.la("onLoadedMetadata")};
g.h.gF=function(){this.l.la("onDrmOutputRestricted")};
g.h.T=function(){this.o.dispose();GV(this);g.Fe(g.Xb(this.Ra),this.C);g.xC(this.sa);this.sa=0;this.Ha&&this.Ha.dispose();g.J.prototype.T.call(this)};
var CX={};g.y("yt.player.Application.create",function(a,b){try{var c=g.w(a)?a:"player"+g.Fa(a);if(CX[c]){try{CX[c].dispose()}catch(e){g.Q(e)}CX[c]=null}var d=new zV(a,b);g.De(d,function(){CX[c]=null});
return CX[c]=d}catch(e){throw g.Q(e),e.stack;}},void 0);
var DX=g.z("ytcsi.tick");DX&&DX("pe");})(_yt_player);
