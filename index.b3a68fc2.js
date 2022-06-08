function t(t,e,n,s){Object.defineProperty(t,e,{get:n,set:s,enumerable:!0,configurable:!0})}var e={};t(e,"UIRoot",(()=>n)),t(e,"Text",(()=>s)),t(e,"FontSize",(()=>i)),t(e,"FontFamily",(()=>r)),t(e,"Child",(()=>o)),t(e,"Children",(()=>a)),t(e,"Connections",(()=>c)),t(e,"Camera",(()=>h)),t(e,"Alignment",(()=>l)),t(e,"CrossAxisAlignment",(()=>d)),t(e,"Width",(()=>g)),t(e,"Height",(()=>f)),t(e,"Translate",(()=>m)),t(e,"Transform",(()=>w)),t(e,"Zoom",(()=>x)),t(e,"From",(()=>A)),t(e,"To",(()=>y)),t(e,"Color",(()=>R)),t(e,"Padding",(()=>v)),t(e,"Constraints",(()=>p)),t(e,"Size",(()=>E)),t(e,"Offset",(()=>T)),t(e,"Layout",(()=>_)),t(e,"WorldSpace",(()=>F)),t(e,"Vertices",(()=>B)),t(e,"TextureCoordinates",(()=>C)),t(e,"Colors",(()=>b)),t(e,"VertexIndices",(()=>S)),t(e,"CameraIndices",(()=>I)),t(e,"Geometry",(()=>U)),t(e,"OnDrag",(()=>D)),t(e,"OnClick",(()=>M));class n{constructor(t){this.entity=t}}class s{constructor(t){this.value=t}}class i{constructor(t){this.value=t}}class r{constructor(t){this.value=t}}class o{constructor(t){this.entity=t}}class a{constructor(t){this.entities=t}}class c{constructor(t){this.entities=t}}class h{constructor(t){this.entity=t}}let l;var u;(u=l||(l={}))[u.START=0]="START",u[u.CENTER=1]="CENTER",u[u.END=2]="END";class d{constructor(t){this.alignment=t}}class g{constructor(t){this.value=t}}class f{constructor(t){this.value=t}}class m{constructor(t,e){this.x=t,this.y=e}}class w{constructor(t){this.matrix=t}}class x{constructor(t,e,n){this.scale=t,this.x=e,this.y=n}}class A{constructor(t){this.entity=t}}class y{constructor(t){this.entity=t}}class R{constructor({h:t,s:e,l:n,a:s}){this.h=t,this.s=e,this.l=n,this.a=s}}class v{constructor(t){this.value=t}}class p{constructor(t,e,n,s){this.minWidth=t,this.maxWidth=e,this.minHeight=n,this.maxHeight=s}}class E{constructor(t,e){this.width=t,this.height=e}}class T{constructor(t,e){this.x=t,this.y=e,this.add=t=>new T(this.x+t.x,this.y+t.y)}}class _{constructor(t){this.impl=t,this.layout=(t,e)=>this.impl(t,e)}}class F{constructor(t,e,n,s){this.x=t,this.y=e,this.width=n,this.height=s}}class B{constructor(t){this.data=t}}class C{constructor(t){this.data=t}}class b{constructor(t){this.data=t}}class S{constructor(t){this.data=t}}class I{constructor(t){this.data=t}}class U{constructor(t){this.impl=t,this.geometry=(t,e,n,s)=>this.impl(t,e,n,s)}}class D{constructor(t){this.callback=t}}class M{constructor(t){this.callback=t}}var L={};t(L,"Vec3",(()=>P)),t(L,"Mat3",(()=>Y));class P{constructor(t){this.data=t}}class Y{constructor(t){this.data=t,this.matMul=t=>{const e=this.data,n=t.data,s=e[0],i=e[1],r=e[2],o=e[3],a=e[4],c=e[5],h=e[6],l=e[7],u=e[8],d=n[0],g=n[1],f=n[2],m=n[3],w=n[4],x=n[5],A=n[6],y=n[7],R=n[8];return new Y([s*d+i*m+r*A,s*g+i*w+r*y,s*f+i*x+r*R,o*d+a*m+c*A,o*g+a*w+c*y,o*f+a*x+c*R,h*d+l*m+u*A,h*g+l*w+u*y,h*f+l*x+u*R])},this.vecMul=t=>{const e=this.data,n=t.data,s=e[0],i=e[1],r=e[2],o=e[3],a=e[4],c=e[5],h=e[6],l=e[7],u=e[8],d=n[0],g=n[1],f=n[2];return new P([s*d+i*g+r*f,o*d+a*g+c*f,h*d+l*g+u*f])},this.inverse=()=>{const t=this.data,e=t[0],n=t[1],s=t[2],i=t[3],r=t[4],o=t[5],a=t[6],c=t[7],h=t[8],l=n*o-s*r,u=e*o-s*i,d=e*r-n*i,g=1/(a*l-c*u+h*d);return new Y([g*(r*h-o*c),g*-(n*h-s*c),g*l,g*-(i*h-o*a),g*(e*h-s*a),g*-u,g*(i*c-r*a),g*-(e*c-n*a),g*d])}}static identity=()=>new Y([1,0,0,0,1,0,0,0,1]);static projection=(t,e)=>new Y([2/t,0,-1,0,-2/e,1,0,0,1]);static translation=(t,e)=>new Y([1,0,t,0,1,e,0,0,1]);static rotation=t=>{const e=Math.cos(t),n=Math.sin(t);return new Y([e,n,0,-n,e,0,0,0,1])};static scaling=(t,e)=>new Y([t,0,0,0,e,0,0,0,1])}var N={};t(N,"ECS",(()=>Rt)),t(N,"Entity",(()=>yt)),t(N,"Renderer",(()=>H)),t(N,"systems",(()=>W)),t(N,"components",(()=>e)),t(N,"ui",(()=>j)),t(N,"Layers",(()=>O)),t(N,"linear_algebra",(()=>L));var W={};t(W,"render",(()=>G)),t(W,"layout",(()=>q)),t(W,"geometry",(()=>V)),t(W,"rayCast",(()=>$));class X{constructor(t){const e=t.createShader(t.VERTEX_SHADER);t.shaderSource(e,"#version 300 es\n  uniform float u_devicePixelRatio;\n  uniform mat3 u_matrices[10];\n\n  layout(location = 0) in vec2 a_position;\n  layout(location = 1) in vec2 a_textureCoordinates;\n  layout(location = 2) in vec4 a_color;\n  layout(location = 3) in uint a_matrixIndex;\n\n  out vec2 v_textureCoordinates;\n  out vec4 v_color;\n\n  void main() {\n    gl_Position = vec4((u_matrices[a_matrixIndex] * vec3(a_position, 1)).xy, 0, 1);\n    v_textureCoordinates = a_textureCoordinates * u_devicePixelRatio;\n    v_color = a_color;\n  }\n  "),t.compileShader(e);const n=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(n,"#version 300 es\n  precision highp float;\n\n  uniform sampler2D u_texture;\n\n  in vec2 v_textureCoordinates;\n  in vec4 v_color;\n\n  out vec4 fragColor;\n  \n  vec4 hslToRgb(in vec4 hsl) {\n    float h = hsl.x / 360.0;\n    vec3 rgb = clamp(abs(mod(h * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);\n    return vec4(hsl.z + hsl.y * (rgb - 0.5) * (1.0 - abs(2.0 * hsl.z - 1.0)), hsl.w);\n  }\n\n  void main() {\n    ivec2 size = textureSize(u_texture, 0);\n    vec2 coordinate = v_textureCoordinates / vec2(float(size.x), float(size.y));\n    fragColor = texture(u_texture, coordinate) * hslToRgb(v_color);\n  }\n  "),t.compileShader(n);const s=t.createProgram();t.attachShader(s,e),t.attachShader(s,n),t.linkProgram(s),t.getProgramParameter(s,t.LINK_STATUS)||(console.log(t.getShaderInfoLog(e)),console.log(t.getShaderInfoLog(n))),t.useProgram(s);const i=t.createVertexArray();t.bindVertexArray(i),this.positionBuffer=t.createBuffer(),t.bindAttribLocation(s,0,"a_position"),t.enableVertexAttribArray(0),t.bindBuffer(t.ARRAY_BUFFER,this.positionBuffer),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),this.textureCoordinatesBuffer=t.createBuffer(),t.bindAttribLocation(s,1,"a_textureCoordinates"),t.enableVertexAttribArray(1),t.bindBuffer(t.ARRAY_BUFFER,this.textureCoordinatesBuffer),t.vertexAttribPointer(1,2,t.FLOAT,!1,0,0),this.colorBuffer=t.createBuffer(),t.bindAttribLocation(s,2,"a_color"),t.enableVertexAttribArray(2),t.bindBuffer(t.ARRAY_BUFFER,this.colorBuffer),t.vertexAttribPointer(2,4,t.FLOAT,!1,0,0),this.matrixIndexBuffer=t.createBuffer(),t.bindAttribLocation(s,3,"a_matrixIndex"),t.enableVertexAttribArray(3),t.bindBuffer(t.ARRAY_BUFFER,this.matrixIndexBuffer),t.vertexAttribIPointer(3,1,t.UNSIGNED_BYTE,0,0),this.indexBuffer=t.createBuffer(),this.devicePixelRatioLocation=t.getUniformLocation(s,"u_devicePixelRatio"),this.matricesLocation=t.getUniformLocation(s,"u_matrices")}}class k{constructor(t,e,n,s){this.texture=t,this.metrics=e,this.fontFamily=n,this.fontSize=s,this.metric=t=>this.metrics[t.charCodeAt(0)]}}const z=(t,e,n,s)=>{const i=document.createElement("canvas"),r=i.getContext("2d"),o=Math.sqrt(256),a=(t=>{let e=1;for(;e<t;)e<<=1;return e})(s*o),c=a/o;i.width=a*window.devicePixelRatio,i.height=a*window.devicePixelRatio,i.style.width=`${a}px`,i.style.height=`${a}px`,r.scale(window.devicePixelRatio,window.devicePixelRatio),r.textAlign="left",r.textBaseline="top",r.font=n,r.fillStyle="white";const h=Array.from({length:256},((t,e)=>e)).map((t=>String.fromCharCode(t)));r.clearRect(0,0,r.canvas.width,r.canvas.height);const l=h.map(((t,e)=>{const n=r.measureText(t),i=Math.ceil(n.width),a=s,h=e%o*c,l=Math.floor(e/o)*c;return r.fillText(t,h,l),{x:h,y:l,width:i,height:a}}));return t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),t.generateMipmap(t.TEXTURE_2D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),l};class H{constructor(t,e){const n=document.createElement("canvas");n.style.touchAction="none";const s=n.getContext("webgl2");s.clearColor(0,0,0,1),s.enable(s.BLEND),s.blendFunc(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA),s.depthMask(!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),s.activeTexture(s.TEXTURE0),this.gl=s,this.canvas=n,this.program=new X(s),this.fontAtlasses=new Map,this.textures=[],this.devicePixelRatio=window.devicePixelRatio,this.setSize(t,e);const i=s.createTexture();s.bindTexture(s.TEXTURE_2D,i),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,new Uint8Array([255,255,255,255])),this.textures.push(i)}setSize=(t,e)=>{const{gl:n,canvas:s}=this;s.width=t*window.devicePixelRatio,s.height=e*window.devicePixelRatio,n.uniform2f(this.program.resolutionLocation,s.width,s.height),n.uniform1f(this.program.devicePixelRatioLocation,window.devicePixelRatio),n.viewport(0,0,s.width,s.height),this.width=t,this.height=e,this.devicePixelRatio!=window.devicePixelRatio&&(this.devicePixelRatio=window.devicePixelRatio,this.recreateFontAtlasses())};clear=()=>{const{gl:t}=this;t.clear(t.COLOR_BUFFER_BIT)};setMatrices=t=>{const{gl:e}=this,n=[];for(const e of t)n.push(...e.data);e.uniformMatrix3fv(this.program.matricesLocation,!0,n)};draw=({vertices:t,colors:e,textureCoordinates:n,vertexIndices:s,cameraIndices:i})=>{const{gl:r,program:o}=this;r.bindBuffer(r.ARRAY_BUFFER,o.positionBuffer),r.bufferData(r.ARRAY_BUFFER,new Float32Array(t),r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,o.colorBuffer),r.bufferData(r.ARRAY_BUFFER,new Float32Array(e),r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,o.textureCoordinatesBuffer),r.bufferData(r.ARRAY_BUFFER,new Float32Array(n),r.STATIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,o.indexBuffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,new Uint16Array(s),r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,o.matrixIndexBuffer),r.bufferData(r.ARRAY_BUFFER,new Uint8Array(i),r.STATIC_DRAW),r.drawElements(r.TRIANGLES,s.length,r.UNSIGNED_SHORT,0)};drawLines=({vertices:t,colors:e,textureCoordinates:n,cameraIndices:s})=>{const{gl:i,program:r}=this;i.bindBuffer(i.ARRAY_BUFFER,r.positionBuffer),i.bufferData(i.ARRAY_BUFFER,new Float32Array(t),i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,r.colorBuffer),i.bufferData(i.ARRAY_BUFFER,new Float32Array(e),i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,r.textureCoordinatesBuffer),i.bufferData(i.ARRAY_BUFFER,new Float32Array(n),i.STATIC_DRAW),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.indexBuffer),i.bindBuffer(i.ARRAY_BUFFER,r.matrixIndexBuffer),i.bufferData(i.ARRAY_BUFFER,new Uint8Array(s),i.STATIC_DRAW),i.drawArrays(i.LINES,0,t.length/2)};recreateFontAtlasses=()=>{for(const[t,e]of this.fontAtlasses){const n=this.textures[e.texture],s=z(this.gl,n,t,e.fontSize);e.metrics=s}};fontAtlas=(t,e)=>{const n=`${e}px ${t}`,s=this.fontAtlasses.get(n);if(s)return s;const{gl:i}=this,r=i.createTexture(),o=z(i,r,n,e),a=this.textures.length;this.textures.push(r);const c=new k(a,o,t,e);return this.fontAtlasses.set(n,c),c}}const G=t=>{q(t);const e=V(t),n=t.get(H),s=Y.projection(n.width,n.height);n.setMatrices(e.cameras.map((t=>s.matMul(t.inverse())))),n.clear(),((t,e)=>{const{gl:n}=t;let s=[],i=[],r=[],o=[],a=[],c=-1;for(const h of e.layers)for(const[e,l]of h){e!=c&&(s.length&&(t.draw({vertices:s,colors:i,textureCoordinates:r,vertexIndices:o,cameraIndices:a}),s=[],i=[],r=[],o=[],a=[]),c=e,n.bindTexture(n.TEXTURE_2D,t.textures[e]));for(const t of l){const e=s.length/2;s.push(...t.get(B).data),i.push(...t.get(b).data),r.push(...t.get(C).data);for(const n of t.get(S).data)o.push(e+n);a.push(...t.get(I).data)}}0!=s.length&&t.draw({vertices:s,colors:i,textureCoordinates:r,vertexIndices:o,cameraIndices:a})})(n,e),((t,e)=>{const{gl:n}=t;let s=[],i=[],r=[],o=[];n.bindTexture(n.TEXTURE_2D,t.textures[0]);for(const t of e.lines)s.push(...t.get(B).data),i.push(...t.get(b).data),r.push(...t.get(C).data),o.push(...t.get(I).data);0!=s.length&&t.drawLines({vertices:s,colors:i,textureCoordinates:r,cameraIndices:o})})(n,e),t.set(e)},q=t=>{const{width:e,height:s}=t.get(H),i=t.get(n).entity,r=new p(0,e,0,s);i.get(_).layout(i,r)};class O{constructor(){this.layers=[],this.lines=[],this.cameras=[Y.identity()],this.activeCamera=0}pushAndSetActiveCamera=t=>{this.activeCamera=this.cameras.length,this.cameras.push(t)};push=({z:t,texture:e,entity:n})=>{for(let e=this.layers.length;e<t+1;++e)this.layers.push(new Map);const s=this.layers[t],i=s.get(e);i?i.push(n):s.set(e,[n])}}const V=t=>{const e=new O,s=t.get(n).entity;return s.get(U).geometry(s,new T(0,0),e,0),e};function*$(t,e,n){const[s,i,r]=e.vecMul(n).data;for(const e of t.get(O).layers.reverse())for(const t of e.values())for(const e of t){const{x:t,y:n,width:r,height:o}=e.get(F);s>t&&s<t+r&&i>n&&i<n+o&&(yield e)}}var j={};t(j,"text",(()=>J)),t(j,"center",(()=>et)),t(j,"column",(()=>it)),t(j,"row",(()=>at)),t(j,"container",(()=>ut)),t(j,"scene",(()=>xt)),t(j,"connection",(()=>ft));const K=(t,e)=>{const n=((t,e)=>{const n=e.get(s).value,o=e.get(i).value,a=e.get(r).value,c=t.fontAtlas(a,o);let h=new E(0,0);for(const t of n){const e=c.metric(t);h.width+=e.width,h.height=Math.max(e.height,h.height)}return h})(t.ecs.get(H),t);return t.set(e,n,new T(0,0)),n},Z=(t,e,n,o)=>{const{width:a,height:c}=t.get(E),h=e.add(t.get(T)),l=((t,e,n,o)=>{const a=e.get(s).value,c=e.get(i).value,h=e.get(r).value,{h:l,s:u,l:d,a:g}=e.get(R),f=t.fontAtlas(h,c);let m=0,w=0;const x=[],A=[],y=[],v=[];for(const t of a){const e=f.metric(t),s=n.x+m,i=s+e.width,r=n.y,o=r+e.height;x.push(s,r,s,o,i,r,i,o),A.push(e.x,e.y,e.x,e.y+e.height,e.x+e.width,e.y,e.x+e.width,e.y+e.height),y.push(l,u,d,g,l,u,d,g,l,u,d,g,l,u,d,g),v.push(w+0,w+1,w+2,w+1,w+2,w+3),m+=e.width,w+=4}return e.set(new B(x),new C(A),new b(y),new S(v),new I(Array(w).fill(o.activeCamera))),f.texture})(t.ecs.get(H),t,h,n);n.push({z:o,entity:t,texture:l}),t.set(new F(h.x,h.y,a,c))},J=(t,...e)=>{const[n,o]="string"==typeof e[0]?[{},e[0]]:[e[0],e[1]];return t.entity(new s(o),new i(n.fontSize??24),new r(n.fontFamily??"monospace"),new R(n.color??{h:0,s:1,l:1,a:1}),new _(K),new U(Z))},Q=(t,e)=>{const n=t.get(o).entity,s=n.get(_).layout(n,e);n.update(T,(t=>{t.x=e.maxWidth/2-s.width/2,t.y=e.maxHeight/2-s.height/2}));const i=new E(e.maxWidth,e.maxHeight);return t.set(e,i,new T(0,0)),i},tt=(t,e,n,s)=>{const{width:i,height:r}=t.get(E),a=e.add(t.get(T)),c=t.get(o).entity;c.get(U).geometry(c,a,n,s),t.set(new F(a.x,a.y,i,r))},et=(t,e)=>t.entity(new _(Q),new U(tt),new o(e)),nt=(t,e)=>{let n=0,s=0;const i=t.get(a).entities;for(const t of i){const i=t.get(_).layout(t,e);t.update(T,(t=>t.y=s)),s+=i.height,n=Math.max(n,i.width)}switch(t.get(d).alignment){case l.START:break;case l.CENTER:for(const t of i){const e=t.get(E).width;t.update(T,(t=>t.x=n/2-e/2))}break;case l.END:for(const t of i){const e=t.get(E).width;t.update(T,(t=>t.x=n-e))}}const r=new E(n,s);return t.set(e,r,new T(0,0)),r},st=(t,e,n,s)=>{const{width:i,height:r}=t.get(E),o=e.add(t.get(T));for(const e of t.get(a).entities)e.get(U).geometry(e,o,n,s);t.set(new F(o.x,o.y,i,r))},it=(t,...e)=>{const[n,s]=e[0]instanceof Array?[{},e[0]]:[e[0],e[1]];return t.entity(new _(nt),new U(st),new a(s),new d(n.crossAxisAlignment??l.START))},rt=(t,e)=>{let n=0,s=0;const i=t.get(a).entities;for(const t of i){const i=t.get(_).layout(t,e);t.update(T,(t=>t.x=n)),n+=i.width,s=Math.max(s,i.height)}switch(t.get(d).alignment){case l.START:break;case l.CENTER:for(const t of i){const e=t.get(E).height;t.update(T,(t=>t.y=s/2-e/2))}break;case l.END:for(const t of i){const e=t.get(E).height;t.update(T,(t=>t.y=s-e))}}const r=new E(n,s);return t.set(e,r,new T(0,0)),r},ot=(t,e,n,s)=>{const{width:i,height:r}=t.get(E),o=e.add(t.get(T));for(const e of t.get(a).entities)e.get(U).geometry(e,o,n,s);t.set(new F(o.x,o.y,i,r))},at=(t,...e)=>{const[n,s]=e[0]instanceof Array?[{},e[0]]:[e[0],e[1]];return t.entity(new _(rt),new U(ot),new a(s),new d(n.crossAxisAlignment??l.START))},ct=(t,e,n)=>Math.max(Math.min(t,n),e),ht=(t,e)=>{const n=t.get(v).value,s=t.get(o),{x:i,y:r}=t.get(m),a=new T(i,r);if(s){const i=s.entity.get(_).layout(s.entity,e),r=new E(Math.min(e.maxWidth,i.width+2*n),Math.min(e.maxHeight,i.height+2*n));return s.entity.update(T,(t=>{t.x=n,t.y=n})),t.set(e,r,a),r}const c=new E(ct(t.get(g).value,e.minWidth,e.maxWidth),ct(t.get(f).value,e.minHeight,e.maxHeight));return t.set(e,c,a),c},lt=(t,e,n,s)=>{const i=e.add(t.get(T)),{width:r,height:a}=t.get(E),c=i.x,h=c+r,l=i.y,u=l+a,d=t.get(R);if(d){const{h:e,s:i,l:r,a:o}=d;t.set(new B([c,l,c,u,h,l,h,u]),new C([0,0,0,0,0,0,0,0]),new b([e,i,r,o,e,i,r,o,e,i,r,o,e,i,r,o]),new S([0,1,2,1,2,3]),new I(Array(4).fill(n.activeCamera))),n.push({z:s,texture:0,entity:t})}const g=t.get(o);g&&g.entity.get(U).geometry(g.entity,i,n,s+1),t.set(new F(c,l,r,a))},ut=(t,e,n)=>{const s=t.entity(new _(ht),new U(lt),new v(e.padding??0),new g(e.width??0),new f(e.height??0),new m(e.x??0,e.y??0));return e.color&&s.set(new R(e.color)),n&&s.set(new o(n)),e.onDrag&&s.set(new D(e.onDrag)),e.onClick&&s.set(new M(e.onClick)),s},dt=(t,e,n)=>{const s=e.x+e.width/2,i=e.y+e.height/2,r=s+50,o=i,a=n.x+n.width/2,c=n.y+n.height/2,h=a-50,l=c,u=[];let d=0,g=0;for(const e of t){const t=e*e,n=t*e,f=1-e,m=f*f,w=m*f,x=3*m*e,A=3*f*t,y=w*s+x*r+A*h+n*a,R=w*i+x*o+A*l+n*c;u.length?u.push(d,g):u.push(y,R),u.push(y,R),d=y,g=R}return u},gt=(t,e)=>{const n=((t,e,n)=>{const s=(e-t)/(n-1);return Array.from({length:n},((e,n)=>t+s*n))})(0,1,20),s=Array(80).fill(0);for(const i of t){const t=i.get(A).entity.get(F),r=i.get(y).entity.get(F),o=dt(n,t,r),{h:a,s:c,l:h,a:l}=i.get(R),u=[];for(let t=0;t<40;++t)u.push(a,c,h,l);i.set(new B(o),new C(s),new b(u),new I(Array(o.length/2).fill(e.activeCamera))),e.lines.push(i)}},ft=(t,e)=>t.entity(new A(e.from),new y(e.to),new R(e.color??{h:0,s:1,l:1,a:1})),mt=(t,e)=>{for(const n of t.get(a).entities)n.get(_).layout(n,e);const n=new E(e.maxWidth,e.maxHeight);return t.set(e,n,new T(0,0)),n},wt=(t,e,n,s)=>{const i=t.get(h).entity.get(w).matrix;n.pushAndSetActiveCamera(i);const{width:r,height:o}=t.get(E),l=e.add(t.get(T));for(const e of t.get(a).entities)e.get(U).geometry(e,l,n,s);gt(t.get(c).entities,n),t.set(new F(l.x,l.y,r,o))},xt=(t,e)=>t.entity(new _(mt),new U(wt),new a(e.children),new c(e.connections),new h(e.camera));class At{constructor(){this.clear()}get=t=>{const e=this.lookup.get(t.id);return null!=e?this.data[e]:void 0};hasId=t=>this.lookup.has(t);set=(t,e)=>{const n=this.lookup.get(t.id);if(n)return this.data[n]=e,void(this.inverses[n]=t.id);this.lookup.set(t.id,this.data.length),this.data.push(e),this.inverses.push(t.id)};clear=()=>{this.lookup=new Map,this.data=[],this.inverses=[]}}class yt{constructor(t,e){this.id=t,this.ecs=e,this.set=(...t)=>{for(const e of t){const t=e.constructor;let n=this.ecs.storages.get(t);n||(n=new At,this.ecs.storages.set(t,n)),n.set(this,e)}return this},this.get=t=>{const e=this.ecs.storages.get(t);return e?e.get(this):void 0},this.update=(t,e)=>{const n=this.ecs.storages.get(t);if(!n)return;const s=n.get(this);s&&e(s)}}}class Rt{constructor(){this.nextEntityId=0,this.storages=new Map,this.resources=new Map}entity=(...t)=>{const e=new yt(this.nextEntityId,this);return e.set(...t),++this.nextEntityId,e};query=function*(...t){const e=this.storages.get(t[0]);if(!e)return;const n=t.slice(1).map((t=>this.storages.get(t)));for(const t of e.inverses)n.every((e=>e.hasId(t)))&&(yield new yt(t,this))};set=(...t)=>{for(const e of t){const t=e.constructor;this.resources.set(t,e)}};get=t=>this.resources.get(t);unsetAll=t=>{const e=this.storages.get(t);e&&e.clear()}}const{ECS:vt,Renderer:pt}=N,{UIRoot:Et,Alignment:Tt,Transform:_t}=N.components,{text:Ft,column:Bt,row:Ct,container:bt,scene:St,connection:It}=N.ui,{render:Ut,rayCast:Dt}=N.systems,Mt=new vt,Lt=new pt(window.innerWidth,window.innerHeight);Lt.canvas.style.width="100%",Lt.canvas.style.height="100%";const Pt=(t,e,n)=>t.update(m,(t=>{t.x+=e,t.y+=n}));let Yt=null;const Nt=t=>Yt=t,Wt=t=>{if(!Yt)return;const e=It(Mt,{from:Yt,to:t});Ot.update(c,(t=>t.entities.push(e))),Yt=null,requestAnimationFrame((()=>Ut(Mt)))},Xt=(t,e)=>Bt(Mt,Array.from({length:t},((t,n)=>Ct(Mt,[bt(Mt,{width:18,height:18,color:e,onClick:Wt}),bt(Mt,{width:5}),bt(Mt,{padding:2},Ft(Mt,{fontSize:18},`in ${n}`))])))),kt=(t,e)=>Bt(Mt,{crossAxisAlignment:Tt.END},Array.from({length:t},((t,n)=>Ct(Mt,[bt(Mt,{padding:2},Ft(Mt,{fontSize:18},`out ${n}`)),bt(Mt,{width:5}),bt(Mt,{width:18,height:18,color:e,onClick:Nt})])))),zt=bt(Mt,{color:{h:110,s:1,l:.3,a:1},padding:10,x:25,y:200,onDrag:Pt},Bt(Mt,{crossAxisAlignment:Tt.CENTER},[bt(Mt,{padding:5},Ft(Mt,"Source")),bt(Mt,{height:10}),Ct(Mt,[Xt(3,{h:70,s:1,l:.7,a:1}),bt(Mt,{width:30}),kt(2,{h:70,s:1,l:.7,a:1})])])),Ht=bt(Mt,{color:{h:210,s:1,l:.3,a:1},padding:10,x:300,y:100,onDrag:Pt},Bt(Mt,{crossAxisAlignment:Tt.CENTER},[bt(Mt,{padding:5},Ft(Mt,"Transform")),bt(Mt,{height:10}),Ct(Mt,[Xt(2,{h:170,s:1,l:.7,a:1}),bt(Mt,{width:30}),kt(4,{h:170,s:1,l:.7,a:1})])])),Gt=bt(Mt,{color:{h:310,s:1,l:.3,a:1},padding:10,x:550,y:250,onDrag:Pt},Bt(Mt,{crossAxisAlignment:Tt.CENTER},[bt(Mt,{padding:5},Ft(Mt,"Sink")),bt(Mt,{height:10}),Ct(Mt,[Xt(3,{h:270,s:1,l:.7,a:1}),bt(Mt,{width:30}),kt(3,{h:270,s:1,l:.7,a:1})])])),qt=Mt.entity(new _t(Y.identity())),Ot=St(Mt,{camera:qt,children:[zt,Ht,Gt],connections:[]});Mt.set(Lt,new Et(Ot)),requestAnimationFrame((()=>Ut(Mt)));const Vt=[];let $t=!1,jt=0;document.addEventListener("pointerdown",(t=>{if(Vt.push(t),1!=Vt.length)return;const e=qt.get(_t).matrix,n=new P([t.clientX,t.clientY,1]);for(const t of Dt(Mt,e,n)){const e=t.get(M);if(e)return e.callback(t),void requestAnimationFrame((()=>Ut(Mt)))}$t=!0}));let Kt=null;document.addEventListener("pointermove",(t=>{if(Vt[Vt.findIndex((e=>e.pointerId==t.pointerId))]=t,$t&&1==Vt.length){if(Kt){return(0,Kt.get(D).callback)(Kt,t.movementX,t.movementY),void requestAnimationFrame((()=>Ut(Mt)))}const e=qt.get(_t).matrix,n=new P([t.clientX,t.clientY,1]);for(const s of Dt(Mt,e,n)){const e=s.get(D);if(e)return Kt=s,e.callback(s,t.movementX,t.movementY),void requestAnimationFrame((()=>Ut(Mt)))}qt.update(_t,(e=>{const n=Y.translation(-t.movementX,-t.movementY);e.matrix=e.matrix.matMul(n)})),requestAnimationFrame((()=>Ut(Mt)))}else if(2==Vt.length){const[e,n]=[Vt[0].clientX,Vt[0].clientY],[s,i]=[Vt[1].clientX,Vt[1].clientY],r=Math.sqrt(Math.pow(s-e,2)+Math.pow(i-n,2));if(jt>0){const e=Y.translation(t.clientX,t.clientY),n=Math.pow(2,.01*(jt-r)),s=Y.scaling(n,n),i=Y.translation(-t.clientX,-t.clientY),o=e.matMul(s).matMul(i);qt.update(_t,(t=>t.matrix=t.matrix.matMul(o)))}jt=r,requestAnimationFrame((()=>Ut(Mt)))}})),document.addEventListener("pointerup",(t=>{Vt.splice(Vt.findIndex((e=>e.pointerId==t.pointerId)),1),0==Vt.length&&($t=!1,jt=0,Kt=null)})),window.addEventListener("resize",(()=>{Lt.setSize(Lt.canvas.clientWidth,Lt.canvas.clientHeight),requestAnimationFrame((()=>Ut(Mt)))})),document.body.appendChild(Lt.canvas),document.addEventListener("touchend",(()=>{Lt.canvas.requestFullscreen()})),document.addEventListener("wheel",(t=>{t.preventDefault(),qt.update(_t,(e=>{const n=Y.translation(t.clientX,t.clientY),s=Math.pow(2,.01*t.deltaY),i=Y.scaling(s,s),r=Y.translation(-t.clientX,-t.clientY),o=n.matMul(i).matMul(r);e.matrix=e.matrix.matMul(o)})),requestAnimationFrame((()=>Ut(Mt)))}),{passive:!1});
//# sourceMappingURL=index.b3a68fc2.js.map
