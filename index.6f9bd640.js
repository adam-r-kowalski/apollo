const e={red:{r:198,g:40,b:40},pink:{r:173,g:20,b:87},purple:{r:106,g:27,b:154},deepPurple:{r:69,g:39,b:160},indigo:{r:40,g:53,b:147},blue:{r:21,g:101,b:192},lightBlue:{r:2,g:119,b:189},cyan:{r:0,g:131,b:143},teal:{r:0,g:105,b:92},green:{r:46,g:125,b:50},brown:{r:78,g:52,b:46},grey:{r:117,g:117,b:117},blueGrey:{r:55,g:71,b:79}},o=new class{constructor(){this.positions=[],this.colors=[],this.triangles=0}addNode({x:e,y:o,color:t}){window.devicePixelRatio;const i=e,n=o,{r:r,g:c,b:a}=t,s=i+200,l=n+25,d=l+1,h=l+75,g=[i,n,s,n,s,l,i,n,i,l,s,l,i,l,s,l,s,d,i,l,i,d,s,d,i,d,s,d,s,h,i,d,i,h,s,h];this.positions.push(g),this.colors.push([r,c,a,r,c,a,r,c,a,r,c,a,r,c,a,r,c,a,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66]),this.triangles+=g.length/2}};o.addNode({x:50,y:100,color:e.red}),o.addNode({x:300,y:100,color:e.pink}),o.addNode({x:550,y:100,color:e.purple}),o.addNode({x:800,y:100,color:e.deepPurple}),o.addNode({x:1050,y:100,color:e.indigo}),o.addNode({x:50,y:250,color:e.blue}),o.addNode({x:300,y:250,color:e.lightBlue}),o.addNode({x:550,y:250,color:e.cyan}),o.addNode({x:800,y:250,color:e.teal}),o.addNode({x:1050,y:250,color:e.green}),o.addNode({x:50,y:400,color:e.brown}),o.addNode({x:300,y:400,color:e.grey}),o.addNode({x:550,y:400,color:e.blueGrey});var t=o;new class{constructor(e){this.scene=e,this.onResize=e=>{const o=this.gl;e.map((e=>e.devicePixelContentBoxSize?{entry:e,width:e.devicePixelContentBoxSize[0].inlineSize,height:e.devicePixelContentBoxSize[0].blockSize,dpr:1}:e.contentBoxSize?{entry:e,width:e.contentBoxSize[0].inlineSize,height:e.contentBoxSize[0].blockSize,dpr:window.devicePixelRatio}:{entry:e,width:e.contentRect.width,height:e.contentRect.height,dpr:window.devicePixelRatio})).forEach((({entry:e,width:o,height:t,dpr:i})=>{const n=e.target;n.width=Math.round(o*i),n.height=Math.round(t*i)})),o.uniform2f(this.uResolution,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),this.ctx.canvas.width=o.canvas.width,this.ctx.canvas.height=o.canvas.height,this.render()},this.render=()=>{const e=this.gl,o=this.ctx;e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,this.position.buffer);{const o=new Float32Array(2*this.scene.triangles);let t=0;for(const e of this.scene.positions)for(const i of e)o[t++]=i;e.bufferData(e.ARRAY_BUFFER,o,e.STATIC_DRAW)}e.vertexAttribPointer(this.position.location,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,this.color.buffer);{const o=new Uint8Array(3*this.scene.triangles);let t=0;for(const e of this.scene.colors)for(const i of e)o[t++]=i;e.bufferData(e.ARRAY_BUFFER,o,e.STATIC_DRAW)}e.vertexAttribPointer(this.color.location,3,e.UNSIGNED_BYTE,!0,0,0),e.drawArrays(e.TRIANGLES,0,this.scene.triangles);const t=window.devicePixelRatio;o.clearRect(0,0,e.canvas.width,e.canvas.height),o.font=24*t+"px sans-serif",o.fillStyle="white",o.fillText("foo",55*t,121*t)};const o=document.createElement("canvas");o.style.width="100%",o.style.height="100%",o.style.position="absolute",document.body.appendChild(o);const t=document.createElement("canvas");t.style.width="100%",t.style.height="100%",t.style.position="absolute",document.body.appendChild(t);const i=o.getContext("webgl2");this.gl=i,i.clearColor(33/255,33/255,33/255,1),this.ctx=t.getContext("2d");const n=i.createShader(i.VERTEX_SHADER);i.shaderSource(n,"#version 300 es\nuniform float uDevicePixelRatio;\nuniform vec2 uResolution;\nin vec2 aPosition;\nin vec3 aColor;\nout vec3 vColor;\n\nvoid main() {\n  vColor = aColor;\n  vec2 clipSpace = aPosition * uDevicePixelRatio / uResolution * 2.0 - 1.0;\n  gl_Position = vec4(clipSpace * vec2(1, -1), 0.0, 1.0);\n}\n"),i.compileShader(n);const r=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(r,"#version 300 es\nprecision mediump float;\n\nin vec3 vColor;\nout vec4 fragColor;\n\nvoid main() {\n  fragColor = vec4(vColor, 1.0);\n}\n"),i.compileShader(r);const c=i.createProgram();i.attachShader(c,n),i.attachShader(c,r),i.linkProgram(c),i.getProgramParameter(c,i.LINK_STATUS)||(console.log(i.getShaderInfoLog(n)),console.log(i.getShaderInfoLog(r))),i.useProgram(c),this.uResolution=i.getUniformLocation(c,"uResolution");const a=i.getUniformLocation(c,"uDevicePixelRatio");i.uniform1f(a,window.devicePixelRatio),this.position={location:i.getAttribLocation(c,"aPosition"),buffer:i.createBuffer()},i.enableVertexAttribArray(this.position.location),this.color={location:i.getAttribLocation(c,"aColor"),buffer:i.createBuffer()},i.enableVertexAttribArray(this.color.location);const s=new ResizeObserver(this.onResize);try{s.observe(o,{box:"device-pixel-content-box"})}catch(e){s.observe(o,{box:"content-box"})}}}(t);
//# sourceMappingURL=index.6f9bd640.js.map
