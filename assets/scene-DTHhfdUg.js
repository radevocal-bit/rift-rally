import{$ as e,An as t,C as n,Dt as r,E as i,Et as a,F as o,G as s,H as c,Hn as l,I as u,In as d,J as f,Kn as p,L as m,Ln as h,M as g,Mn as _,Mt as v,Nn as y,Nt as b,Ot as x,P as S,Pn as C,Q as w,R as T,Rn as E,Sn as D,St as O,T as ee,Tt as k,U as A,Un as te,V as ne,Vn as j,W as M,Wn as re,X as ie,Y as ae,Yn as oe,Z as se,Zn as ce,_ as N,ar as P,at as le,b as ue,bt as F,c as de,dt as I,ft as fe,g as pe,gt as me,h as he,ht as L,it as ge,jn as _e,jt as ve,k as ye,kn as be,kt as xe,m as Se,mt as R,nr as z,ot as Ce,p as we,pt as Te,q as B,qn as Ee,rt as De,tr as V,tt as Oe,u as ke,vn as Ae,vt as je,w as Me,wn as H,x as Ne,y as Pe,yt as Fe,zn as Ie,zt as Le}from"./avatar-C7FNUuIH.js";import{At as Re,Bt as ze,Ct as Be,Et as Ve,Ft as He,G as Ue,Gt as U,Ht as We,It as Ge,Kt as Ke,Lt as qe,Mt as Je,Ot as Ye,Pt as Xe,R as Ze,Rt as Qe,S as $e,St as et,Ut as tt,V as nt,Vt as rt,an as it,at,bt as ot,ct as st,gt as ct,ht as lt,i as ut,in as dt,it as ft,jt as pt,ln as mt,mt as ht,n as gt,nn as _t,o as vt,on as yt,q as bt,r as xt,sn as St,st as Ct,ut as wt,vt as Tt,wt as Et,xt as Dt,yt as Ot,zt as kt}from"./index-DH0c7mi0.js";import{i as At,n as jt,r as Mt,t as Nt}from"./three.module-dFzyQ5u7.js";import{cpuYuruReady as Pt,grandpaReady as Ft,loadAllCpuYuru as It,loadGrandpa as Lt,seatLookReady as Rt}from"./pudding-BJr8KW8v.js";import{loadYuruParty as zt,yuruPartyReady as Bt}from"./yuru-party-BidsAaXM.js";import{loadSamuraiModel as Vt,samuraiModelReady as Ht,t as Ut}from"./samurai-ByoWx50s.js";import{a as Wt,aimGuns as Gt,animateCharacter as Kt,c as qt,createCharacter as Jt,i as Yt,l as Xt,n as Zt,o as Qt,r as $t,s as en,t as tn,u as nn}from"./characters-BrB1bFJ0.js";function rn(e,t){let n=(e,t,n)=>e+Math.max(-1,Math.min(1,e/t))*(n-t);return{x:n(e,17,U.width/2),z:n(t,10.5,U.depth/2)}}var an=e=>e.isMesh===!0,on=`city-lamp-light`,sn=e=>e.isMeshStandardMaterial===!0;async function cn(t){let r=new B;r.name=`blender-harbour-city`;let i=new de,a=new j,o=await fetch(`./models/twilight-city-layout.json`);if(!o.ok)throw Error(`City layout unavailable`);let s=await o.json(),c=e=>({...e,...rn(e.x,e.z)}),l={...s,palace:c(s.palace),blocks:s.blocks.map(e=>({...e,placements:e.placements.map(c)}))},[u,d,f,p]=await Promise.all([i.loadAsync(`./models/twilight-infrastructure.glb`),i.loadAsync(`./models/monumental-palace-v3.glb`),Promise.all(l.blocks.map(e=>i.loadAsync(`./models/${e.model}.glb`))),Promise.all([`weathered-limestone-v3`,`aged-oak-v3`,`lime-plaster-v3`].map(e=>a.loadAsync(`./textures/${e}.png`)))]),m=Xt(),h=p.map(e=>(e.colorSpace=be,e.wrapS=e.wrapT=D,e.anisotropy=8,e)),g=h.map(e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t}),_=new Set;for(let e of[u.scene,d.scene,...f.map(e=>e.scene)])e.traverse(e=>{if(an(e)){e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material]){if(!sn(t)||_.has(t))continue;_.add(t),t.envMapIntensity=.25;let e=t.name;/WarmGlass/i.test(e)?(t.color.set(`#6b391d`),t.emissive.set(`#ff9b43`),t.emissiveIntensity=1.05,t.roughness=.35):/Recess|Shadow|DarkStone/i.test(e)?(t.normalMap=null,t.map=h[0],t.bumpMap=g[0],t.bumpScale=.055):/Stone|limestone/i.test(e)?(t.normalMap=null,t.map=h[0],t.bumpMap=g[0],t.bumpScale=.095,t.roughness=.88,t.color.lerp(new n(`#c1b9a8`),.48)):/Oak|Wood|walnut/i.test(e)?(t.normalMap=null,t.map=h[1],t.bumpMap=g[1],t.bumpScale=.045,t.roughness=.82,t.color.lerp(new n(`#aea094`),.58)):/Plaster/i.test(e)?(t.normalMap=null,t.map=h[2],t.bumpMap=g[2],t.bumpScale=.035,t.roughness=.94,t.color.lerp(new n(`#d0bbaa`),.44)):/Slate|RoofTile/i.test(e)?(t.normalMap=null,t.map=m.slate,t.bumpMap=m.slate,t.bumpScale=.045,t.roughness=.66,t.color.set(`#3b5266`)):/Linen|Canvas|Teal/i.test(e)&&(t.normalMap=null,t.map=m.cloth,t.bumpMap=m.cloth,t.bumpScale=.012,t.roughness=.94),/Leaves|Flowers/i.test(e)&&(t.side=2,t.roughness=.86),t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_maps>`,`
          vec3 stableSurfaceNormal=normal;
          #include <normal_fragment_maps>
          if(!(dot(normal,normal)>0.5))normal=stableSurfaceNormal;
        `)},t.customProgramCacheKey=()=>`city-stable-normal-v1`,t.needsUpdate=!0}}});u.scene.updateMatrixWorld(!0),u.scene.traverse(e=>{if(!an(e))return;e.castShadow=!/StoneRecess|Flowers/.test(e.name);let t=e.geometry.clone().applyMatrix4(e.matrixWorld),n=t.getAttribute(`position`);for(let e=0;e<n.count;e++){let t=rn(n.getX(e),n.getZ(e));n.setXYZ(e,t.x,n.getY(e),t.z)}t.computeVertexNormals(),/Stone|Approach/i.test(e.name)&&nn(t,.25),t.applyMatrix4(e.matrixWorld.clone().invert()),t.computeBoundingBox(),t.computeBoundingSphere(),e.geometry.dispose(),e.geometry=t}),r.add(u.scene);let y=new he(1,1,1),b=new F({color:`#9d998f`,map:h[0],bumpMap:g[0],bumpScale:.08,roughness:.92}),x=[];function S(t,n,i){t.updateMatrixWorld(!0);let a=new k,o=new Te,s=new Se().setFromObject(t),c=s.getSize(new z),l=s.getCenter(new z);for(let e of n){let t=new z(l.x*e.scale,0,l.z*e.scale).applyAxisAngle(new z(0,1,0),e.angle),n=e.y-.01,r=-5.35;a.position.set(e.x+t.x,(n+r)/2,e.z+t.z),a.rotation.set(0,e.angle,0),a.scale.set(c.x*e.scale,n-r,c.z*e.scale),a.updateMatrix();let i=y.clone().applyMatrix4(a.matrix);nn(i,.25),x.push(i)}t.traverse(t=>{if(!an(t))return;let s=new e(t.geometry,t.material,n.length);s.name=i,s.castShadow=!0,s.receiveShadow=!0,n.forEach((e,n)=>{a.position.set(e.x,e.y,e.z),a.rotation.set(0,e.angle,0),a.scale.setScalar(e.scale),a.updateMatrix(),o.multiplyMatrices(a.matrix,t.matrixWorld),s.setMatrixAt(n,o)}),s.computeBoundingSphere(),r.add(s)})}l.blocks.forEach((e,t)=>S(f[t].scene,e.placements,e.model)),S(d.scene,[l.palace],`monumental-palace`);let C=new R(ke(x,!1),b);C.name=`grounded-building-foundations`,C.receiveShadow=!0,C.castShadow=!0,C.geometry.computeBoundingSphere(),r.add(C),x.forEach(e=>e.dispose()),y.dispose(),r.userData={authoredWith:`Blender 5.2`,ready:!0,version:3,archetypes:l.blocks.length,buildings:l.blocks.reduce((e,t)=>e+t.placements.length,0),palace:l.palace,court:{width:U.width,depth:U.depth}},t.add(r);for(let[e,n,r,i,a]of[[4,5,-19,22,19],[16,5,20,24,22],[-24,4,13,16,18],[39,8,-20,34,32]]){let o=rn(e,r),s=new v(`#ffad65`,i,a,1.6);s.position.set(o.x,n,o.z),s.name=on,t.add(s)}}function ln(e){let t=new R(new ve(780,680),new F({color:`#273c38`,roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-5.3,t.receiveShadow=!0,t.name=`terraced-valley`,e.add(t);let n=new F({color:`#173b4b`,roughness:.27,metalness:.6,envMapIntensity:.75});n.onBeforeCompile=e=>{e.uniforms.harbourTime={value:0},n.userData.shader=e,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
waterPosition=(modelMatrix*vec4(transformed,1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;uniform float harbourTime;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        float w1=sin(waterPosition.x*2.2+waterPosition.z*1.7+harbourTime*.7);
        float w2=cos(waterPosition.x*.81-waterPosition.z*3.1-harbourTime*.43);
        normal=normalize(normal+vec3(w1*.10,w2*.075,0.0));`)};let r=new R(new ve(134,220),n),i=rn(76,95);r.rotation.x=-Math.PI/2,r.position.set(i.x,-2.6,i.z),r.name=`harbour-water`,e.add(r)}function un(e){if(e.getObjectByName(`EpicCity_TwilightSky`))return;let t=(e,t)=>{let n=I.degToRad(e),r=I.degToRad(t);return new z(Math.cos(r)*Math.cos(n),Math.sin(r),Math.cos(r)*Math.sin(n))},r=t(-25,25),i=t(25,20),a=new _({name:`EpicCity_TwilightSkyMaterial`,side:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!0,uniforms:{uZenith:{value:new n(`#142b59`)},uMiddle:{value:new n(`#36648c`)},uHorizon:{value:new n(`#829aaa`)},uBelow:{value:new n(`#566e8a`)},uBlueDirection:{value:r},uAmberDirection:{value:i},uBlueRadius:{value:I.degToRad(5)},uAmberRadius:{value:I.degToRad(6.5)},uBlueTint:{value:new n(`#c3e8f2`)},uAmberTint:{value:new n(`#efb983`)}},vertexShader:`
      varying vec3 vSkyDirection;
      void main() {
        vSkyDirection = normalize(position);
        vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        // Always place the sky just inside the far clip plane, even when the
        // game's far distance is less than the physical 650-metre sky radius.
        gl_Position = vec4(clip.xy, clip.w * 0.999999, clip.w);
      }
    `,fragmentShader:`
      precision highp float;
      varying vec3 vSkyDirection;
      uniform vec3 uZenith;
      uniform vec3 uMiddle;
      uniform vec3 uHorizon;
      uniform vec3 uBelow;
      uniform vec3 uBlueDirection;
      uniform vec3 uAmberDirection;
      uniform vec3 uBlueTint;
      uniform vec3 uAmberTint;
      uniform float uBlueRadius;
      uniform float uAmberRadius;

      float hash13(vec3 p) {
        p = fract(p * 0.1031);
        p += dot(p, p.yzx + 33.33);
        return fract((p.x + p.y) * p.z);
      }

      float noise3(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(mix(hash13(i), hash13(i + vec3(1,0,0)), f.x),
              mix(hash13(i + vec3(0,1,0)), hash13(i + vec3(1,1,0)), f.x), f.y),
          mix(mix(hash13(i + vec3(0,0,1)), hash13(i + vec3(1,0,1)), f.x),
              mix(hash13(i + vec3(0,1,1)), hash13(i + vec3(1,1,1)), f.x), f.y), f.z
        );
      }

      float fbm(vec3 p) {
        float sum = 0.0;
        float amplitude = 0.52;
        for (int octave = 0; octave < 4; octave++) {
          sum += amplitude * noise3(p);
          p = p * 2.07 + vec3(17.1, 9.2, 3.7);
          amplitude *= 0.49;
        }
        return sum;
      }

      float craterRelief(vec3 normal, float seed) {
        float relief = 0.0;
        // Chord distances on the visible hemisphere make the crater rings
        // foreshorten toward the rim instead of staying flat circular decals.
        for (int crater = 0; crater < 16; crater++) {
          float index = float(crater) + seed;
          vec3 randomValue = vec3(
            hash13(vec3(index, 1.7, 5.2)),
            hash13(vec3(index, 8.3, 2.4)),
            hash13(vec3(index, 3.1, 9.8))
          );
          vec3 center = normalize(vec3(randomValue.xy * 2.0 - 1.0,
                                       0.17 + randomValue.z * 0.83));
          float radius = mix(0.055, 0.24, randomValue.z * randomValue.z);
          float distanceToCrater = length(normal - center) / radius;
          float floorDepression = exp(-pow(distanceToCrater / 0.70, 4.0));
          // GLSL pow() is undefined for negative bases, even with exponent 2.
          // One NaN in a bright moon pixel would spread across bloom's blur.
          float rimDistance = (distanceToCrater - 0.94) / 0.13;
          float rim = exp(-rimDistance * rimDistance);
          relief += rim * 0.052 - floorDepression * 0.078;
        }
        return relief;
      }

      vec4 moon(vec3 ray, vec3 center, float angularRadius, vec3 tint,
                float seed, vec3 atmosphericColor) {
        float facing = dot(ray, center);

        vec3 right = normalize(cross(center, vec3(0.0, 1.0, 0.0)));
        vec3 up = normalize(cross(right, center));
        vec2 p = vec2(dot(ray, right), dot(ray, up)) / sin(angularRadius);
        float radiusSquared = dot(p, p);
        float radius = sqrt(radiusSquared);
        float aa = max(fwidth(radius), 0.0007);
        // Derivatives must run uniformly across each 2x2 pixel group, including
        // neighbours outside the disk. Evaluate before any per-pixel return.
        if (facing < cos(angularRadius * 1.24)) return vec4(0.0);
        float disk = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, radius);

        // A subdued atmospheric aureole, without sparkles or star particles.
        if (radius > 1.0 + aa) {
          float halo = exp(-(radius - 1.0) * 28.0) * 0.045;
          return vec4(mix(atmosphericColor, tint, 0.50), halo);
        }

        vec3 normal = vec3(p, sqrt(max(0.0, 1.0 - radiusSquared)));
        normal = normalize(normal);
        vec3 offset = vec3(seed * 0.73, seed * 0.17, seed * 0.43);
        float maria = smoothstep(0.34, 0.69, fbm(normal * 4.4 + offset));
        float terrain = fbm(normal * 19.0 + offset + 7.5);
        float fineGrain = noise3(normal * 91.0 + offset) - 0.5;
        float craters = craterRelief(normal, seed);
        float albedo = 0.88 - maria * 0.24 + (terrain - 0.48) * 0.16
                       + fineGrain * 0.027 + craters;

        // Softly lit spherical surface. The limb darkens gently, preserving a
        // nearly full moon without a hard black terminator.
        vec3 lightDirection = normalize(vec3(-0.32, 0.35, 0.88));
        float diffuse = max(dot(normal, lightDirection), 0.0);
        float sphereShading = 0.53 + 0.47 * diffuse;
        float limb = mix(0.83, 1.0, pow(max(normal.z, 0.0), 0.34));
        vec3 surface = tint * albedo * sphereShading * limb * 1.34;
        float atmosphere = mix(0.17, 0.08, smoothstep(0.12, 0.65, center.y));
        surface = mix(surface, atmosphericColor, atmosphere);
        return vec4(surface, disk);
      }

      void main() {
        vec3 ray = normalize(vSkyDirection);
        float elevation = clamp(ray.y, 0.0, 1.0);
        vec3 sky = mix(uHorizon, uMiddle, smoothstep(0.0, 0.33, elevation));
        sky = mix(sky, uZenith, smoothstep(0.24, 1.0, elevation));
        sky = mix(sky, uBelow, smoothstep(0.0, 0.35, -ray.y));

        // A broad, bright atmospheric veil and faint stretched wisps. There
        // are no procedural stars, moving particles or dense storm clouds.
        float haze = exp(-abs(ray.y - 0.05) * 5.0);
        sky = mix(sky, uHorizon, haze * 0.12);
        float cloudNoise = fbm(ray * vec3(3.1, 12.0, 3.1) + vec3(5.2, 0.7, 9.4));
        float wisps = smoothstep(0.57, 0.76, cloudNoise);
        float cloudBand = smoothstep(0.03, 0.16, ray.y)
                        * (1.0 - smoothstep(0.43, 0.75, ray.y));
        sky = mix(sky, uHorizon, wisps * cloudBand * 0.15);

        vec4 blue = moon(ray, uBlueDirection, uBlueRadius, uBlueTint, 11.3, sky);
        sky = mix(sky, blue.rgb, blue.a);
        vec4 amber = moon(ray, uAmberDirection, uAmberRadius, uAmberTint, 37.7, sky);
        sky = mix(sky, amber.rgb, amber.a);

        gl_FragColor = vec4(sky, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),o=new Ie(650,48,32),s=new R(o,a);s.name=`EpicCity_TwilightSky`,s.renderOrder=-1e4,s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!1;let c=new z;s.onBeforeRender=(e,t,n)=>{n.getWorldPosition(c),s.position.copy(c),s.updateMatrixWorld(!0)},s.userData.dispose=()=>{s.removeFromParent(),o.dispose(),a.dispose()},e.add(s)}function dn(e){let t=new B;t.name=`rift-arena`,e.add(t);let n=U.width/2,r=U.depth/2,i=U.goalWidth/2,a=U.width/34,o=U.depth/21;t.userData={theme:`twilight-royal-approach`,courtWidth:U.width,courtDepth:U.depth,goalWidth:U.goalWidth,area:U.width*U.depth,tallSceneryInnerX:n+10,tallSceneryInnerZ:r+10.5};let s=(e,t={})=>new F({color:e,roughness:.91,metalness:.02,...t}),l=s(14999251),u=s(15853526),d=s(7892576),f=s(6505267),p=s(9725249),m=s(3749691,{metalness:.5}),h=s(12558946,{metalness:.45,roughness:.65}),g=s(3767956,{side:2}),_=s(11029589,{side:2}),v=s(15058812);s(7374940);let y=new L({color:7981525}),b=new L({color:15114373}),x=s(11968633,{metalness:.25,roughness:.8}),S=new L({color:16032847}),C=new L({color:16770976}),w=s(15119979,{emissive:16760166,emissiveIntensity:.8,roughness:.4}),T=Xt(),E=new j().load(`./textures/weathered-limestone-v3.png`);E.colorSpace=be,E.wrapS=E.wrapT=D,E.anisotropy=8;let O=e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t},k=(e,t,n,r)=>{e.map=t,e.bumpMap=O(t),e.bumpScale=r,e.userData.worldScale=n};for(let e of[l,u])k(e,E,.22,.045);for(let e of[f,p])k(e,T.wood,.42,.027);for(let e of[g,_])e.map=T.cloth,e.bumpMap=O(T.cloth),e.bumpScale=.012,e.roughness=.83;let A=new he(1,1,1);new ie(1,1);function ne(e,n,r,i,a,o=t){let s=new R(e,n);return s.position.set(r,i,a),s.receiveShadow=!0,s.castShadow=n instanceof F,o.add(s),s}function M(e,n,r,i,a,o,s,c=t){let l=ne(A,s,e,n,r,c);return l.scale.set(i,a,o),l}function re(e,n,r,i,a,o,s,c=20,l=t){return ne(new ye(i,a,o,Math.max(12,c)),s,e,n,r,l)}function ae(e,t,n,r,i,a=0){let o=M(e,.016,t,n,.018,r,i);return o.rotation.y=a,o}function oe(e,t,n,r,i,a=0,o=Math.PI*2){let s=ne(new H(n-r/2,n+r/2,80,1,a,o),i,e,.031,t);return s.rotation.x=-Math.PI/2,s}function se(e,n,r,i,a,o,s=0,c=t){let l=new B;l.position.set(e,n,r),l.rotation.y=s,c.add(l);let u=new ve(i,a,10,12),d=u.getAttribute(`position`);for(let e=0;e<d.count;e++){let t=(d.getX(e)+i/2)/i,n=(a/2-d.getY(e))/a;d.setXYZ(e,d.getX(e),-n*a+(n>.99?.26*(1-Math.abs(t-.5)*2):0),Math.sin(t*Math.PI*5+n*.8)*.048*n)}u.computeVertexNormals(),ne(u,o,0,0,0,l),M(0,-a*.44,.055,i*.065,a*.88,.018,v,l);let p=ne(new Ne(i*.18,6),v,0,-a*.4,.025,l);p.rotation.z=Math.PI/6,M(0,.045,0,i+.22,.09,.1,f,l)}function ce(e,n,r,i,a=t){let o=new B;o.position.set(e,n,r),o.scale.setScalar(i),a.add(o);let s=[new V(.36,0),new V(.43,.15),new V(.48,.55),new V(.44,.94),new V(.37,1.07)];ne(new Oe(s,18),p,0,0,0,o),re(0,1.055,0,.365,.365,.04,f,18,o);for(let e of[.1,.26,.84,1.01]){let t=ne(new te(e<.2||e>1?.395:.458,.025,5,20),m,0,e,0,o);t.rotation.x=Math.PI/2}}function P(e,n,r,i=t){let a=new B;a.position.set(e,n,r),i.add(a),M(0,0,0,.27,.4,.27,m,a),M(0,0,0,.225,.3,.285,w,a),M(0,0,0,.285,.3,.225,w,a);for(let e of[-.135,.135])for(let t of[-.135,.135])M(e,0,t,.035,.43,.035,m,a);re(0,.27,0,.04,.23,.18,m,4,a);let o=ne(new te(.1,.018,4,14),m,0,.44,0,a);o.rotation.y=Math.PI/2}function ue(e,t){re(e,.18,t,.47,.55,.38,d,8),re(e,.75,t,.18,.26,1.1,m,8),re(e,1.38,t,.43,.22,.3,h,8);let n=ne(new ee(.28,.75,7),S,e,1.86,t);n.rotation.z=.13;let r=ne(new ee(.16,.54,6),C,e-.04,1.81,t+.03);r.rotation.z=-.12}un(e),ln(e),M(0,-.95,0,U.width+22,1.5,U.depth+19,d),M(0,-.24,0,U.width+22.5,.24,U.depth+19.5,l),M(0,-.33,0,U.width+3.9,.56,U.depth+3.9,u),M(0,-.135,0,U.width+2.2,.14,U.depth+2.2,d);let de=new j().load(`./textures/limestone-court-v2.png`);de.wrapS=de.wrapT=D,de.repeat.set(6*a,4*o),de.colorSpace=be,de.anisotropy=8;let I=ne(new ve(U.width,U.depth),s(11778756,{map:de,bumpMap:O(de),bumpScale:.12,roughness:.74,metalness:.04}),0,-.03,0);I.rotation.x=-Math.PI/2,I.name=`playable-stone-floor`,I.castShadow=!1;for(let e of[-r-.6,r+.6])for(let t=0;t<U.width;t++)M(-n+.5+t,-.035,e,.96,.16,1,l);for(let e of[-n-.6,n+.6])for(let t=-r;t<=r;t++)M(e,-.035,t,1,.16,.96,u);for(let e of[-r+.18,r-.18])ae(0,e,U.width-.15,.09,x);for(let e of[-6.2*a,6.2*a])ae(e,0,U.depth-.4,.035,x,Math.PI/2);for(let e=-r+.8;e<=r-.8;e+=1.6)if(Math.abs(e)>3.8*o){let t=ae(0,e,.13,.13,x);t.rotation.y=Math.PI/4}oe(0,0,3.2*o,.09,x),oe(0,0,2.98*o,.025,x),oe(0,0,.93,.065,x);for(let e=0;e<8;e++){let t=e*Math.PI/4,n=3.45*o,r=ae(Math.sin(t)*n,Math.cos(t)*n,.31,.31,x);r.rotation.y=t+Math.PI/4,ae(Math.sin(t)*2.65*o,Math.cos(t)*2.65*o,.38,.065,x,Math.PI/2-t)}let fe=ae(0,0,.42,.42,v);fe.rotation.y=Math.PI/4;for(let e of[-1,1]){let a=e<0?g:_,o=e<0?y:b;oe(e*(n-.25),0,i+1.1,.075,o,e<0?-Math.PI/2:Math.PI/2,Math.PI).scale.x=.74;for(let t of[-r-.22,r+.22]){M(e*(n/2+.2),.2,t,n+.1,.46,.28,l),M(e*(n/2+.2),.43,t,n+.1,.035,.3,h);for(let r=.55;r<n;r+=1.2)M(e*r,.22,t,.025,.32,.287,d);ae(e*(n/2-.05),t-Math.sign(t)*.4,n-.15,.1,o)}let s=r-i;for(let t of[-(r+i)/2,(r+i)/2])M(e*(n+.45),.2,t,.3,.46,s,l),M(e*(n+.45),.43,t,.32,.035,s,h);let f=new B;t.add(f),f.name=e<0?`azure-goal`:`ember-goal`,f.userData={goalPlane:e*n,opening:U.goalWidth};for(let t of[-i,i]){M(e*(n+.22),1.14,t,.23,2.35,.23,u,f);for(let r of[.3,.9,1.5,2.1])M(e*(n+.22),r,t,.265,.1,.265,l,f);M(e*(n+.07),1.18,t,.05,2.25,.1,o,f)}M(e*(n+.22),2.33,0,.23,.18,U.goalWidth+.22,u,f),M(e*(n+.08),2.33,0,.055,.07,U.goalWidth+.2,h,f);for(let t of[-i,i])M(e*(n+.22),2.48,t,.31,.18,.35,l,f);M(e*(n+1),-.04,0,1.7,.04,U.goalWidth-.02,a,f),se(e*(n+1.9),3.7,i+1.05,1.2,1.25,a,e<0?Math.PI/2:-Math.PI/2,f),re(e*(n+1.9),1.84,i+1.05,.06,.08,3.78,m,12,f),re(e*(n+1.9),.1,i+1.05,.22,.27,.24,d,12,f);let p=[];for(let t=-i;t<=i;t+=.47)p.push(e*(n+1.78),.1,t,e*(n+1.78),2.23,t);for(let t=.2;t<2.3;t+=.35)p.push(e*(n+1.78),t,-i,e*(n+1.78),t,i);let v=new N;v.setAttribute(`position`,new c(p,3)),f.add(new le(v,new ge({color:12167038,transparent:!0,opacity:.4})));for(let t of[-i-1.8,i+1.8])ue(e*(n+2.4),t)}for(let e of[-1,1]){for(let t of[-19,-5,17]){let{x:n,z:r}=rn(t,e*17.6);M(n,.2,r,3.4,.55,1.2,d),M(n,.52,r,3.6,.12,1.4,l)}for(let[t,n]of[[-23,.9],[-21,.68],[10,.87],[25,1.1]]){let{x:r,z:i}=rn(t,e*18.2);ce(r,-.05,i,n),n>.85&&P(r,n*1.08+.15,i)}for(let t of[-22,22]){let{x:n,z:r}=rn(t,e*16.5);re(n,1.7,r,.055,.075,3.5,m,10),se(n,3.35,r,1,1.7,n<0?g:_,e<0?0:Math.PI)}}return fn(t),cn(e)}function fn(t){t.updateWorldMatrix(!0,!0);let n=t.matrixWorld.clone().invert(),r=new Map;t.traverse(t=>{if(!(t instanceof R)||t instanceof e||Array.isArray(t.material)||t.material.transparent)return;let n=`${t.material.uuid}:${t.castShadow}:${t.receiveShadow}:${t.renderOrder}:${t.layers.mask}`,i=r.get(n)||[];i.push(t),r.set(n,i)});let i=new Set;for(let e of r.values()){if(e.length<2)continue;let r=e.map(e=>{let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return t.applyMatrix4(new Te().multiplyMatrices(n,e.matrixWorld)),e.material.userData.worldScale&&nn(t,e.material.userData.worldScale),t.clearGroups(),t}),a=ke(r,!1);if(r.forEach(e=>e.dispose()),!a)continue;a.computeBoundingBox(),a.computeBoundingSphere();let o=e[0],s=new R(a,o.material);s.name=`arena-batch`,s.castShadow=o.castShadow,s.receiveShadow=o.receiveShadow,s.renderOrder=o.renderOrder,s.layers.mask=o.layers.mask,t.add(s);for(let t of e)i.add(t.geometry),t.removeFromParent()}t.traverse(e=>{e instanceof R&&i.delete(e.geometry)}),i.forEach(e=>e.dispose())}var pn=Ke.colosseum;function mn(e){return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function hn(){let e=document.createElement(`canvas`);e.width=e.height=1024;let t=e.getContext(`2d`),n=mn(4815);t.fillStyle=`#8f7456`,t.fillRect(0,0,1024,1024);for(let e=0;e<700;e++){let r=n()*1024,i=n()*1024,a=8+n()*80;for(let n of[-1024,0,1024])for(let o of[-1024,0,1024]){let s=r+n,c=i+o;if(s+a<0||c+a<0||s-a>1024||c-a>1024)continue;let l=t.createRadialGradient(s,c,0,s,c,a);l.addColorStop(0,e%2?`#d4b78e28`:`#392e2928`),l.addColorStop(1,`#00000000`),t.fillStyle=l,t.fillRect(s-a,c-a,a*2,a*2)}}for(let e=0;e<62e3;e++){let r=n()*1024,i=n()*1024,a=.35+n()*1.4;t.fillStyle=e%3==0?`#dfc9a13b`:`#342b292b`,t.fillRect(r,i,a,a*.7)}for(let e=0;e<1600;e++){let e=n()*1024,r=n()*1024,i=.7+n()*2;t.fillStyle=`#4c423d50`,t.beginPath(),t.ellipse(e,r,i*1.5,i,.6,0,Math.PI*2),t.fill(),t.fillStyle=`#b5a18b65`,t.fillRect(e-i,r-i*.4,i*2,.7)}let r=new Pe(e);return r.colorSpace=be,r.wrapS=r.wrapT=D,r.repeat.set(6,6),r.anisotropy=8,r.name=`Colosseum packed earth`,r}function gn(e,t,n,r=.5){let i=new N().setFromPoints(t);e.add(new De(i,new ge({color:n,transparent:!0,opacity:r,depthWrite:!1})))}function _n(t){let r=mn(65123),i=[],a=[4609910,7552059,7823433,10127200,3755078,11182225,5850724,3359059],o=(e,t)=>Math.abs(Math.atan2(Math.sin(e-t),Math.cos(e-t)));for(let e=0;e<8;e++){let t=34.48+e*1.86,n=11+e*1.22+.46,s=Math.floor(2*Math.PI*t/1.05);for(let e=0;e<s;e++){let c=(e+.5)*Math.PI*2/s;o(c,Math.round(c/(Math.PI/6))*Math.PI/6)*t<1.08||t>=39.2&&(o(c,-Math.PI/2)<16*Math.PI/180||o(c,Math.PI/2)<11*Math.PI/180)||t>=44.5&&o(c,59*Math.PI/180)<.075||r()<.14||i.push({x:Math.cos(c)*t,y:n,z:Math.sin(c)*t,angle:-c-Math.PI/2,color:a[Math.floor(r()*a.length)],size:.88+r()*.24})}}let s=new e(new ye(.21,.28,.66,7),new F({roughness:1}),i.length),c=new e(new Ie(.18,7,5),new F({roughness:1}),i.length),l=new e(new ye(.075,.085,.53,5),new F({roughness:1}),i.length*2),u=new k,d=new n;i.forEach((e,t)=>{u.position.set(e.x,e.y+.32*e.size,e.z),u.rotation.set(0,e.angle,0),u.scale.set(e.size,e.size,e.size),u.updateMatrix(),s.setMatrixAt(t,u.matrix),s.setColorAt(t,d.setHex(e.color)),u.position.y=e.y+.86*e.size,u.updateMatrix(),c.setMatrixAt(t,u.matrix),c.setColorAt(t,d.setHSL(.07+r()*.04,.19+r()*.15,.37+r()*.28));for(let n=0;n<2;n++){let r=n?1:-1,i=t%9==0;u.position.set(e.x+Math.cos(e.angle)*r*.26,e.y+(i?.72:.3),e.z-Math.sin(e.angle)*r*.26),u.rotation.set(i?.4:-.6,e.angle,r*(i?.5:.12)),u.updateMatrix(),l.setMatrixAt(t*2+n,u.matrix),l.setColorAt(t*2+n,d.setHex(e.color))}}),s.name=`Colosseum audience clothing`,c.name=`Colosseum audience faces`,l.name=`Colosseum audience arms`;for(let e of[s,c,l])e.receiveShadow=!0,e.castShadow=!1,e.computeBoundingSphere(),t.add(e);t.userData.spectators=i.length}async function vn(e){un(e);let t=new B;t.name=`rift-arena`,t.userData={mapId:`colosseum`,radius:pn.radius,area:pn.area},e.add(t);let n=hn(),r=new R(new Ne(pn.radius+2,192),new F({map:n,bumpMap:n,bumpScale:.065,roughness:.98,color:`#c4b4a0`}));r.name=`Colosseum circular soil`,r.rotation.x=-Math.PI/2,r.position.y=-.035,r.receiveShadow=!0,t.add(r);let i=new L({color:`#d9cab1`,transparent:!0,opacity:.29,side:2,depthWrite:!1});for(let[e,n]of[[5,.065],[pn.radius-1.4,.07]]){let r=new R(new H(e-n,e,192),i);r.rotation.x=-Math.PI/2,r.position.y=.003,t.add(r)}let o=new R(new Ne(.3,24),i);o.rotation.x=-Math.PI/2,o.position.y=.004,t.add(o),gn(t,[new z(0,.005,-pn.radius+1.4),new z(0,.005,pn.radius-1.4)],`#dac9a8`,.28);let s=[];for(let e of[-1,1]){let n=e<0?`#76caff`:`#ee9565`,r=e*pn.goalX,o=new B;o.name=e<0?`Azure scoring gate`:`Ember scoring gate`,o.position.x=e*(pn.radius+5.7),s.push(o);let c=new R(new he(.3,8.1,15.1),new F({color:`#282b2a`,roughness:.94}));c.position.y=4,o.add(c);let l=new F({color:`#434847`,metalness:.55,roughness:.67});for(let t=-7;t<=7;t+=.7){let n=new R(new he(.25,7.8,.09),l);n.position.set(-e*.28,3.9,t),o.add(n)}for(let t of[1,3,5,7]){let n=new R(new he(.32,.13,14.8),l);n.position.set(-e*.3,t,0),o.add(n)}let u=new R(new ye(1.05,1.05,.12,8),new F({color:n,roughness:.72,emissive:n,emissiveIntensity:.12}));u.rotation.z=Math.PI/2,u.position.set(-e*.5,4.1,0),o.add(u),t.add(o);let d=new R(new ve(.14,pn.goalWidth),new L({color:n,transparent:!0,opacity:.65,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(r,.018,0),t.add(d);for(let i of[-pn.goalWidth/2,pn.goalWidth/2]){let o=new R(new a(.24),new F({color:n,emissive:n,emissiveIntensity:1.3,roughness:.32}));o.position.set(r,2.3,i),t.add(o);let s=new v(n,12,6,2);s.position.set(r-e*.8,2.5,i),t.add(s)}let f=new R(new H(3.9,3.96,64,1,-Math.PI/2,Math.PI),i);f.rotation.x=-Math.PI/2,f.rotation.z=e<0?0:Math.PI,f.position.set(r,.012,0),t.add(f)}for(let e of s)fn(e);let c=await new de().loadAsync(`./models/maps/royal-colosseum-v1.glb`);c.scene.name=`Blender Colosseum`,c.scene.traverse(e=>{if(e instanceof R){e.castShadow=!0,e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material])t instanceof F&&t.map&&(t.map.anisotropy=8)}}),t.add(c.scene),_n(t)}var yn={zenith:`#86c6ee`,middle:`#b4def4`,horizon:`#fdf3df`,below:`#e4f0f2`,sun:{azimuth:-126.4,elevation:44.9,color:`#fff2c9`},rainbow:{azimuth:6,elevation:-15,radius:33,width:5.4,strength:.78},clouds:[[-158,12,6.5],[-122,19,5],[-84,11,7],[-46,21,5.5],[-14,9,4.5],[34,20,5.5],[68,11,7.5],[104,17,6],[138,10,7],[172,22,5.5],[-178,30,4],[10,29,4]]},bn=(e,t)=>{let n=I.degToRad(e),r=I.degToRad(t);return new z(Math.cos(r)*Math.cos(n),Math.sin(r),Math.cos(r)*Math.sin(n))};function xn(e){if(e.getObjectByName(`EpicCity_TwilightSky`))return;let t=yn,r=t.clouds.length,i=[],a=[],o=[],s=[];t.clouds.forEach(([e,t,n],r)=>{let c=bn(e,t),l=new z().crossVectors(c,new z(0,1,0)).normalize(),u=new z().crossVectors(l,c).normalize();i.push(c),a.push(l),o.push(u),s.push(new V(Math.sin(I.degToRad(n)),r*7.31+1.7))});let c=new _({name:`StorybookSkyMaterial`,side:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!0,defines:{CLOUDS:r},uniforms:{uZenith:{value:new n(t.zenith)},uMiddle:{value:new n(t.middle)},uHorizon:{value:new n(t.horizon)},uBelow:{value:new n(t.below)},uSunDir:{value:bn(t.sun.azimuth,t.sun.elevation)},uSunColor:{value:new n(t.sun.color)},uRainbowDir:{value:bn(t.rainbow.azimuth,t.rainbow.elevation)},uRainbow:{value:new z(I.degToRad(t.rainbow.radius),I.degToRad(t.rainbow.width),t.rainbow.strength)},uCloudC:{value:i},uCloudR:{value:a},uCloudU:{value:o},uCloudS:{value:s}},vertexShader:`
      varying vec3 vSkyDirection;
      void main() {
        vSkyDirection = normalize(position);
        vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = vec4(clip.xy, clip.w * 0.999999, clip.w);   // いつも奥の面のすぐ手前（src/sky.ts と同じ）
      }`,fragmentShader:`
      precision highp float;
      varying vec3 vSkyDirection;
      uniform vec3 uZenith, uMiddle, uHorizon, uBelow, uSunDir, uSunColor, uRainbowDir, uRainbow;
      uniform vec3 uCloudC[CLOUDS], uCloudR[CLOUDS], uCloudU[CLOUDS];
      uniform vec2 uCloudS[CLOUDS];
      float hash(float n) { return fract(sin(n) * 43758.5453); }
      // 虹の色（内側の紫 → 外側の赤）。色えんぴつの仕上げ（紙の色にとける）でも見えるくらいの濃さ。
      vec3 rainbow(float t) {
        vec3 c = mix(vec3(.66, .50, .92), vec3(.44, .70, .96), smoothstep(.0, .2, t));
        c = mix(c, vec3(.50, .84, .52), smoothstep(.2, .4, t));
        c = mix(c, vec3(1.0, .90, .38), smoothstep(.4, .6, t));
        c = mix(c, vec3(1.0, .66, .38), smoothstep(.6, .8, t));
        return mix(c, vec3(.98, .46, .50), smoothstep(.8, 1.0, t));
      }
      // 1 つの雲の形（負＝雲の中）。下は平ら、上はもこもこ（丸 6 つ）。p は雲の大きさを 1 にした座標。
      float cloudShape(vec2 p, float seed) {
        float d = 1e3;
        for (int k = 0; k < 7; k++) {
          float fk = float(k);
          float x = -1.2 + fk * .4 + (hash(seed + fk) - .5) * .16;
          float r = .26 + .36 * sin(3.14159 * (fk + .5) / 7.0) + (hash(seed + fk * 3.1) - .5) * .14;
          float y = -.2 + r * .62;
          d = min(d, length(p - vec2(x, y)) - r);
        }
        return max(d, -(p.y + .2));
      }
      void main() {
        vec3 ray = normalize(vSkyDirection);
        float up = clamp(ray.y, 0.0, 1.0);
        vec3 sky = mix(uHorizon, uMiddle, smoothstep(0.0, 0.26, up));
        sky = mix(sky, uZenith, smoothstep(0.2, 0.95, up));
        sky = mix(sky, uBelow, smoothstep(0.0, 0.2, -ray.y));
        // 太陽：大きくやわらかい光と、白い丸
        float sunCos = dot(ray, uSunDir);
        sky = mix(sky, uSunColor, pow(smoothstep(0.55, 1.0, sunCos), 3.0) * 0.75);
        sky = mix(sky, vec3(1.0, 0.99, 0.93), smoothstep(0.9968, 0.9978, sunCos));
        // 虹（地平線の近くで消える）
        float angle = acos(clamp(dot(ray, uRainbowDir), -1.0, 1.0));
        float t = (angle - (uRainbow.x - uRainbow.y * 0.5)) / uRainbow.y;
        if (t > 0.0 && t < 1.0) {
          float edge = smoothstep(0.0, 0.18, t) * smoothstep(1.0, 0.82, t);
          sky = mix(sky, rainbow(t), edge * smoothstep(0.0, 0.12, ray.y) * uRainbow.z);
        }
        // 雲：白・下のほうは淡い藤色の陰・ふちは少しだけぼかす
        if (ray.y > -0.02) {
          for (int i = 0; i < CLOUDS; i++) {
            float facing = dot(ray, uCloudC[i]);
            if (facing < 0.9) continue;
            vec2 p = vec2(dot(ray, uCloudR[i]), dot(ray, uCloudU[i])) / uCloudS[i].x;
            float d = cloudShape(p, uCloudS[i].y);
            float a = smoothstep(0.035, -0.035, d);
            if (a <= 0.0) continue;
            float shade = smoothstep(-0.22, 0.55, p.y) * 0.6 + smoothstep(-0.25, 0.0, -d) * 0.4;
            vec3 cloud = mix(vec3(0.87, 0.86, 0.95), vec3(1.0, 0.995, 0.975), shade);
            sky = mix(sky, cloud, a);
          }
        }
        gl_FragColor = vec4(sky, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),l=new Ie(650,48,32),u=new R(l,c);u.name=`EpicCity_TwilightSky`,u.renderOrder=-1e4,u.frustumCulled=!1,u.castShadow=!1,u.receiveShadow=!1;let d=new z;u.onBeforeRender=(e,t,n)=>{n.getWorldPosition(d),u.position.copy(d),u.updateMatrixWorld(!0)},u.userData.dispose=()=>{u.removeFromParent(),l.dispose(),c.dispose()},e.add(u)}var Sn={dirt:{half:28,radius:33},trackLines:[24,25.6,27.2,28.8,30.4],clear:12,building:{front:90,z:-6,length:46,depth:11},open:[{x0:54,x1:116,z0:-44,z1:34},{x0:-42,x1:30,z0:-56,z1:-33},{x0:-36,x1:46,z0:33,z1:52},{x0:-97,x1:-64,z0:-2,z1:32}],rings:[{radius:185},{radius:310},{radius:500}]};function Cn(e){return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var wn=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)};function Tn(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=wn(n,r),l=wn(n+1,r),u=wn(n,r+1),d=wn(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}var En=(e,t,n)=>Tn(Math.cos(e)*t+n,Math.sin(e)*t+n*1.7),Dn=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},On=(e,t)=>Math.hypot(Math.max(Math.abs(e)-Sn.dirt.half,0),t)-Sn.dirt.radius,kn=(e,t)=>Math.hypot(Math.max(Math.abs(e)-U.width/2,0),Math.max(Math.abs(t)-U.depth/2,0)),An=(e,t)=>Math.min(...Sn.open.map(n=>Math.hypot(Math.max(n.x0-e,0,e-n.x1),Math.max(n.z0-t,0,t-n.z1))));function jn(e,t){let n=Dn(30,110,On(e,t))*Dn(0,20,An(e,t));return n<=0?0:n*(5+11*Tn(e*.011+3.1,t*.011+7.7))+n*n*9}var Mn=new n;function W(e,t){e.getAttribute(`uv`)&&e.deleteAttribute(`uv`);let n=e.getAttribute(`position`),r=new Float32Array(n.count*3);for(let e=0;e<n.count;e++){let i=typeof t==`function`?t(n.getX(e),n.getY(e),n.getZ(e)):Mn.set(t);r[e*3]=i.r,r[e*3+1]=i.g,r[e*3+2]=i.b}return e.setAttribute(`color`,new c(r,3)),e.index||e.setIndex([...Array(n.count).keys()]),e}var Nn=(e,t,r,i)=>{let a=new n(e),o=new n(t);return(e,t)=>Mn.copy(a).lerp(o,Dn(r,i,t))};function Pn(e,t,r=1){let i=e.index?e.toNonIndexed():e,a=t.map(e=>new n(e)),o=i.getAttribute(`position`).count;i.getAttribute(`uv`)&&i.deleteAttribute(`uv`);let s=new Float32Array(o*3);for(let e=0;e<o;e++){let t=a[Math.floor(e/3/r)%a.length];s[e*3]=t.r,s[e*3+1]=t.g,s[e*3+2]=t.b}return i.setAttribute(`color`,new c(s,3)),i.setIndex([...Array(o).keys()]),i}function Fn(e,t,r){let i=e.index?e.toNonIndexed():e,a=t.map(e=>new n(e)),o=i.getAttribute(`position`),s=o.count,l=new Float32Array(s*3);i.getAttribute(`uv`)&&i.deleteAttribute(`uv`);for(let e=0;e<s;e+=3){let t=(o.getX(e)+o.getX(e+1)+o.getX(e+2))/3,n=(o.getZ(e)+o.getZ(e+1)+o.getZ(e+2))/3,i=a[Math.floor((Math.atan2(n,t)+Math.PI)/(Math.PI*2)*r)%a.length];for(let t=0;t<3;t++)l[(e+t)*3]=i.r,l[(e+t)*3+1]=i.g,l[(e+t)*3+2]=i.b}return i.setAttribute(`color`,new c(l,3)),i.setIndex([...Array(s).keys()]),i}var G=(e,t,n,r,i=0,a=1,o=0,s=0)=>e.applyMatrix4(new Te().compose(new z(t,n,r),new b().setFromEuler(new T(o,i,s,`YXZ`)),Array.isArray(a)?new z(...a):new z(a,a,a))),K=(e,t,n,r)=>W(new he(e,t,n),r),q=(e,t,n,r,i=10)=>W(new ye(e,t,n,i,1),r),In=(e,t,n,r=10)=>W(new ee(e,t,r,1),n),J=(e,t,n=10,r=7)=>W(new Ie(e,n,r),t);function Y(e,t,n,r,i=6){let a=t.clone().sub(e);return q(n,n,a.length(),r,i).applyMatrix4(new Te().compose(e.clone().add(t).multiplyScalar(.5),new b().setFromUnitVectors(new z(0,1,0),a.normalize()),new z(1,1,1)))}function Ln(e,t,n){let r=0;e.forEach(([t,n],i)=>{let[a,o]=e[(i+1)%e.length];r+=t*o-a*n}),r<0&&(e=[...e].reverse());let i=[],a=[],o=e.length,s=(t,n)=>{let r=i.length/3;for(let[n,r]of e)i.push(n,r,t);for(let e=1;e<o-1;e++)a.push(...n?[r,r+e+1,r+e]:[r,r+e,r+e+1])};s(t/2,!1),s(-t/2,!0);for(let n=0;n<o;n++){let[r,s]=e[n],[c,l]=e[(n+1)%o],u=i.length/3;i.push(r,s,t/2,c,l,t/2,c,l,-t/2,r,s,-t/2),a.push(u,u+3,u+2,u,u+2,u+1)}let l=new N;return l.setAttribute(`position`,new c(i,3)),l.setIndex(a),l.computeVertexNormals(),W(l,n)}function Rn(e,t,n,r,i){let a=[],o=[],s=e.length;for(let r=0;r<s;r++){let o=e[i?(r-1+s)%s:Math.max(0,r-1)],c=e[i?(r+1)%s:Math.min(s-1,r+1)].clone().sub(o).normalize(),l=-c.y*t/2,u=c.x*t/2,d=e[r];a.push(d.x-l,n,d.y-u,d.x+l,n,d.y+u)}for(let e=0;e<(i?s:s-1);e++){let t=e*2,n=(e+1)%s*2;o.push(t,n,t+1,t+1,n,n+1)}let l=new N;l.setAttribute(`position`,new c(a,3)),l.setIndex(o),l.computeVertexNormals();let u=l.getAttribute(`normal`);for(let e=0;e<u.count;e++)u.setXYZ(e,0,1,0);return W(l,r)}var zn={dirt:`#dcbd8f`,dirtDark:`#c9a575`,grass:`#93c66e`,grassLight:`#a9d47e`,grassDark:`#7cb35f`,chalk:`#fbfaf3`,board:`#fbf6ec`,azure:`#8ccdf0`,ember:`#f6a596`,posts:[`#f4a9bd`,`#9ddbc6`,`#f7dc72`,`#c4b2ee`],trunk:`#94653f`,leaves:[`#6fb05d`,`#5d9e55`,`#86c26b`],pine:`#3f8061`,blossom:`#f3b5c8`,autumn:`#eba648`,wall:`#f7edd9`,roof:`#e2705a`,trim:`#4aa3a2`,glass:`#a9daf0`,wood:`#a76a45`,navy:`#3f4b77`,cap:[`#e5574d`,`#9c84d6`,`#f29e4c`],stem:`#f8eedb`,rainbow:[`#ff9aa2`,`#ffc58e`,`#fff09a`,`#a9e8a4`,`#9ccff6`,`#c9a8ef`]};function Bn(){let e=Cn(20261002),t=[],n=7.5;for(let r=-175;r<=175;r+=n)for(let i=-175;i<=175;i+=n){let a=r+(e()-.5)*n*.9,o=i+(e()-.5)*n*.9,s=e(),c=e(),l=e(),u=e(),d=kn(a,o),f=On(a,o),p=Math.hypot(a,o);if(d<Sn.clear+2||f<4||An(a,o)<3||p>175||s>.82*Dn(4,10,f)*(1-.8*Dn(45,120,f))+.035)continue;let m=c<.58?`round`:c<.8?`pine`:c<.9?`blossom`:`autumn`;t.push({x:a,z:o,y:jn(a,o),scale:.78+l*.62,kind:m,tint:u})}return t}function Vn(e){xn(e);let t=new B;t.name=`rift-arena`,e.add(t);let r=U.width/2,i=U.depth/2,a=U.goalWidth/2;t.userData={mapId:`school`,theme:`storybook-forest-school`,courtWidth:U.width,courtDepth:U.depth,goalWidth:U.goalWidth,area:U.width*U.depth,tallClear:Sn.clear};let o=[],s=[],l=[],u=[],d=[],f=Cn(7),p=zn,m=(e,t,n)=>new z(e,t,n),h=(e,t)=>Math.abs(e)<r+30&&Math.abs(t)<i+30?o:l,g=(e,t)=>{let r=On(e,t),i=Tn(e*.06,t*.06),a=Tn(e*.4+9,t*.4+2),o=Mn.set(p.dirt).lerp(new n(p.dirtDark),i*.45+a*.15).clone(),s=new n(p.grass).lerp(new n(i>.5?p.grassLight:p.grassDark),Math.abs(i-.5)*1.2),c=jn(e,t);return c>0&&s.lerp(new n(`#9fc7a0`),Dn(4,40,c)*.35),o.lerp(s,Dn(-.4,1.1,r))},_=new ve(130,84,130,84);_.rotateX(-Math.PI/2);let v=new ve(1e3,1e3,100,100);v.rotateX(-Math.PI/2);{let e=v.getAttribute(`position`);for(let t=0;t<e.count;t++)e.setY(t,jn(e.getX(t),e.getZ(t))-.05);v.computeVertexNormals()}for(let e of[_,v]){let t=e.getAttribute(`position`),n=e.getAttribute(`uv`),r=new Float32Array(t.count*3);for(let e=0;e<t.count;e++){let i=t.getX(e),a=t.getZ(e),o=g(i,a);r[e*3]=o.r,r[e*3+1]=o.g,r[e*3+2]=o.b,n.setXY(e,i/5,a/5)}e.setAttribute(`color`,new c(r,3))}let y=new F({name:`School yard ground`,vertexColors:!0,roughness:1,metalness:0,map:Hn()}),b=new R(ke([_,v]),y);b.name=`school-yard-ground`,b.receiveShadow=!0,t.add(b),_.dispose(),v.dispose();let x=.12,S=.012,C=(e,t,n,r)=>s.push(G(K(n,.004,r,p.chalk),e,S,t));for(let e of[-i+.1,i-.1])C(0,e,U.width,x);for(let e of[-r+.1,r-.1])C(e,0,x,U.depth);C(0,0,x,U.depth);let w=(e,t,n,r=0,i=Math.PI*2)=>s.push(G(W(new H(n-x/2,n+x/2,72,1,r,i),p.chalk),e,S,t,0,1,-Math.PI/2));w(0,0,6.4),s.push(G(W(new Ne(.28,16),p.chalk),0,S,0,0,1,-Math.PI/2));for(let e of[-1,1]){let t=e*(r-9),n=e*(r-3.5),a=e*(r-7);C(t,0,x,26),C(n,0,x,19);for(let n of[-13,13])C((t+e*r)/2,n,9,x);for(let t of[-9.5,9.5])C((n+e*r)/2,t,3.5,x);s.push(G(W(new Ne(.22,14),p.chalk),a,S,0,0,1,-Math.PI/2));let o=Math.acos(2/6.4);w(a,0,6.4,e>0?Math.PI-o:-o,o*2);for(let t of[-1,1])w(e*r,t*i,1,e>0?t>0?Math.PI/2:Math.PI:t>0?0:-Math.PI/2,Math.PI/2)}let T=e=>{let t=[],n=Sn.dirt.half;for(let r=0;r<=36;r++){let i=-Math.PI/2+Math.PI*r/36;t.push(new V(n+Math.cos(i)*e,Math.sin(i)*e))}for(let r=0;r<=36;r++){let i=Math.PI/2+Math.PI*r/36;t.push(new V(-n+Math.cos(i)*e,Math.sin(i)*e))}return t};for(let e of Sn.trackLines)s.push(Rn(T(e),.1,.011,p.chalk,!0));C(0,(Sn.trackLines[0]+Sn.trackLines.at(-1))/2,.16,Sn.trackLines.at(-1)-Sn.trackLines[0]);for(let e of[-i-.22,i+.22]){o.push(G(K(U.width+.6,.42,.16,p.board),0,.21,e));for(let t of[-1,1])o.push(G(K(r+.3,.07,.24,t<0?p.azure:p.ember),t*(r+.3)/2,.45,e))}for(let e of[-1,1])for(let t of[-(i+a)/2,(i+a)/2])o.push(G(K(.16,.42,i-a+.3,p.board),e*(r+.45),.21,t)),o.push(G(K(.24,.07,i-a+.3,e<0?p.azure:p.ember),e*(r+.45),.45,t));let E=0,D=(e,t)=>{let n=p.posts[E++%p.posts.length];o.push(G(q(.08,.09,.5,p.board,8),e,.25,t),G(J(.14,n,9,6),e,.56,t))};for(let e=-r;e<=r+.01;e+=3.4)for(let t of[-i-.22,i+.22])D(e,t);for(let e of[-1,1])for(let t of[-i,-a-.2,a+.2,i])D(e*(r+.45),t);for(let e of[-1,1]){let n=e<0?p.azure:p.ember,i=e*(r+.22),l=e*(r+1.9);for(let e of[-a,a])o.push(G(q(.12,.12,2.42,`#ffffff`,10),i,1.21,e)),o.push(Y(m(i,2.36,e),m(l,.06,e),.07,`#f4f4f0`)),o.push(Y(m(i,.06,e),m(l,.06,e),.06,`#f4f4f0`));o.push(Y(m(i,2.36,-a-.1),m(i,2.36,a+.1),.11,`#ffffff`,10)),o.push(Y(m(l,.06,-a),m(l,.06,a),.06,`#f4f4f0`)),s.push(G(K(1.66,.02,U.goalWidth-.1,n),(i+l)/2,.012,0));let u=[];for(let e=-a;e<=a+.01;e+=.5)u.push(i,2.36,e,l,.06,e);for(let e=.08;e<1;e+=.12){let t=i+(l-i)*e,n=2.36+-2.3*e;u.push(t,n,-a,t,n,a)}for(let e of[-a,a]){for(let t=.15;t<1;t+=.17){let n=i+(l-i)*t;u.push(n,.06,e,n,2.36+-2.3*t,e)}for(let t=.4;t<2.36;t+=.35)u.push(i,t,e,i+(l-i)*(2.36-t)/2.3,t,e)}let d=new N;d.setAttribute(`position`,new c(u,3));let f=new le(d,new ge({color:n,transparent:!0,opacity:.6}));f.name=e<0?`azure-goal`:`ember-goal`,f.userData={goalPlane:e*r,opening:U.goalWidth},t.add(f);for(let t of[-a-1.2,a+1.2])o.push(G(q(.05,.05,3.2,`#ffffff`,6),e*(r+1.2),1.6,t)),o.push(G(Ln([[0,0],[1.1,-.35],[0,-.7]],.03,n),e*(r+1.2),3.15,t,e<0?0:Math.PI))}for(let e=-27;e<=27;e+=9){o.push(G(K(7.6,.28,1.4,`#d9876a`),e,.14,35)),o.push(G(K(7.2,.1,1,`#8a6a4e`),e,.27,35));for(let t=0;t<9;t++){let n=e-3.2+t*.8,r=35+(t%2?.25:-.25),i=p.rainbow[(t+Math.round(e/9)+3)%6];o.push(G(q(.025,.025,.45,`#5f9e55`,4),n,.5,r),G(In(.13,.26,i,6),n,.8,r,0,1,Math.PI))}}o.push(G(K(3.2,1,2,`#ffffff`),0,.5,37.4),G(K(3.4,.08,2.2,`#7fbf8f`),0,1.04,37.4),G(K(1.2,.5,.8,`#7fbf8f`),0,.25,36.1));for(let e of[-17,4]){for(let[t,n]of[[-3.2,-2.2],[3.2,-2.2],[-3.2,2.2],[3.2,2.2]])o.push(G(q(.06,.06,2.7,`#ffffff`,6),e+t,1.35,42+n));o.push(G(Pn(new ee(3.9,1.3,4,1).rotateY(Math.PI/4),[`#7ec0ea`,`#ffffff`]),e,3.3,42,0,[1.3,1,1]));for(let t=0;t<12;t++)for(let n of[-2.76,2.76])o.push(G(Ln([[-.3,0],[.3,0],[0,-.38]],.02,t%2?`#7ec0ea`:`#ffffff`),e-3.3+t*.6,2.66,42+n));for(let t=0;t<9;t++)for(let n of[-3.58,3.58])o.push(G(Ln([[-.3,0],[.3,0],[0,-.38]],.02,t%2?`#7ec0ea`:`#ffffff`),e+n,2.66,39.6+t*.6,Math.PI/2));o.push(G(K(5.2,.08,1,`#ffffff`),e,.78,42),G(K(.08,.74,.9,`#d8d0c0`),e-2.4,.37,42),G(K(.08,.74,.9,`#d8d0c0`),e+2.4,.37,42))}o.push(G(q(.09,.11,9,`#ffffff`,8),26,4.5,39),G(J(.2,`#f7dc72`),26,9.1,39),G(Ln([[0,0],[2.6,-.8],[0,-1.6]],.04,`#f9e27a`),26.1,8.7,39),G(q(.32,.32,.05,`#e2705a`,14),26.9,8.1,39,0,1,Math.PI/2));let O=[-34,-10,14,38];for(let e of O)o.push(G(q(.07,.09,6.2,`#f3ece0`,6),e,3.1,48));for(let e=0;e<O.length-1;e++){let t=O[e],n=O[e+1],r=[];for(let e=0;e<=1.0001;e+=1/26)r.push(m(t+(n-t)*e,6.1-Math.sin(Math.PI*e)*1.6,48));for(let t=0;t<r.length-1;t++)o.push(Y(r[t],r[t+1],.02,`#7a6a5a`,4)),t%1==0&&o.push(G(Ln([[-.3,0],[.3,0],[0,-.62]],.02,p.rainbow[(t+e)%6]),r[t].x+.45,r[t].y-.02,48))}for(let e=0;e<9;e++)o.push(G(W(new te(.48,.2,6,14),p.posts[e%4]),-33+e*1.5,.25,-35.5,0,1,0,0));[.9,1.15,1.4].forEach((e,t)=>{let n=-33+t*1.8;for(let r of[-41,-39])o.push(G(q(.07,.07,e,p.posts[t],6),n,e/2,r));o.push(Y(m(n,e,-41),m(n,e,-39),.035,`#b9c2cc`,6))});for(let e=0;e<=3;e++)for(let t=0;t<=3;t++){let n=[`#ef7f74`,`#f7d36a`,`#8fd18a`,`#7dbbea`];o.push(Y(m(-24+e,0,-44+t),m(-24+e,3,-44+t),.045,`#f2f2f2`,5));for(let r=1;r<=3;r++)e<3&&o.push(Y(m(-24+e,r,-44+t),m(-23+e,r,-44+t),.04,n[r],5)),t<3&&o.push(Y(m(-24+e,r,-44+t),m(-24+e,r,-43+t),.04,n[r],5))}for(let[e,t]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])o.push(G(q(.08,.08,3.2,`#7dbbea`,6),-8+e,1.6,-44+t));o.push(G(K(1.8,.12,1.8,`#f7d36a`),-8,2.2,-44),G(In(1.5,1,`#ef7f74`,4),-8,3.7,-44,Math.PI/4)),o.push(G(K(.9,.1,4.6,`#f7d36a`),-8,1.15,-40.2,0,1,-.5),G(K(.08,.3,4.6,`#ef7f74`),-7.55,1.32,-40.2,0,1,-.5),G(K(.08,.3,4.6,`#ef7f74`),-8.45,1.32,-40.2,0,1,-.5));for(let e=0;e<6;e++)o.push(Y(m(-8.6,.35*e+.2,-45.2),m(-7.4,.35*e+.2,-45.2),.04,`#f2f2f2`,5));for(let e of[-46,-42])o.push(Y(m(6,0,e-1.2),m(6,2.8,e),.08,`#ef7f74`),Y(m(6,0,e+1.2),m(6,2.8,e),.08,`#ef7f74`));o.push(Y(m(6,2.8,-46.3),m(6,2.8,-41.7),.08,`#f7d36a`));for(let e of[-45,-43])o.push(Y(m(5.75,2.8,e),m(5.75,.65,e),.015,`#9aa3ad`,4),Y(m(6.25,2.8,e),m(6.25,.65,e),.015,`#9aa3ad`,4),G(K(.75,.08,.4,`#8fd18a`),6,.62,e));o.push(G(K(5,.2,.25,p.wood),20,.1,-41.5),G(K(5,.2,.25,p.wood),20,.1,-45.5),G(K(.25,.2,4.2,p.wood),17.5,.1,-43.5),G(K(.25,.2,4.2,p.wood),22.5,.1,-43.5)),s.push(G(K(4.8,.06,3.8,`#f0dca9`),20,.04,-43.5)),o.push(G(In(.6,.7,`#e8cf98`,8),19,.4,-43),G(q(.22,.17,.32,`#e5574d`,10),21.2,.2,-44.2));for(let e=0;e<4;e++)o.push(G(K(2.2,.45,.5,p.wood),-14+e*9,.45,51.5),G(K(.1,.45,.4,`#7c5338`),-14.9+e*9,.22,51.5),G(K(.1,.45,.4,`#7c5338`),-13.1+e*9,.22,51.5));{let e=Sn.building,t=e.front,n=(t+(e.front+e.depth))/2,r=8.8;l.push(G(K(e.depth,r,e.length,p.wall),n,r/2,e.z),G(K(e.depth+.3,.5,e.length+.3,`#d9c9ae`),n,.25,e.z));let i=(e,t,n,r,i,a,o,s=!1)=>{let c=s?Math.PI/2:0;l.push(G(Ln([[-n/2-.7,0],[n/2+.7,0],[0,r]],e,o),a,i,t,c)),l.push(G(Ln([[-n/2,0],[n/2,0],[0,r-.4]],e-.6,p.wall),a,i-.02,t,c))};i(e.length+1.2,e.z,e.depth,4.6,r,n,p.roof);for(let n=e.z-e.length/2+2.6;n<=e.z+e.length/2-2.4;n+=3.7)if(!(Math.abs(n-e.z)<5)){for(let[e,r]of[[2.6,f()<.25],[6.6,f()<.2]])if(l.push(G(K(.12,2.5,2.2,`#ffffff`),t-.06,e,n)),(r?u:l).push(G(K(.14,2.1,1.8,r?`#ffe7b0`:p.glass),t-.09,e,n)),l.push(G(K(.18,.1,1.8,`#ffffff`),t-.1,e,n),G(K(.18,2.1,.1,`#ffffff`),t-.1,e,n)),e<3){l.push(G(K(.5,.3,2,p.wood),t-.3,e-1.35,n));for(let r=0;r<4;r++)l.push(G(J(.17,r%2?`#f08a9b`:`#f7d36a`,7,5),t-.32,e-1.1,n-.7+r*.47))}}let a=t-.4,o=7.2,s=17.5;l.push(G(K(o,s,o,p.wall),a+o/2-1,s/2,e.z),G(K(7.6000000000000005,.5,7.6000000000000005,p.trim),a+o/2-1,s,e.z),G(K(7.6000000000000005,.4,7.6000000000000005,p.trim),a+o/2-1,r,e.z)),l.push(G(In(o*.78,7.5,p.trim,4),a+o/2-1,21.4,e.z,Math.PI/4),G(J(.35,`#f7d36a`),a+o/2-1,25.3,e.z)),l.push(G(q(.05,.05,2.2,`#5d5a6b`,5),a+o/2-1,26.3,e.z),G(Ln([[0,.25],[1.4,0],[0,-.25]],.05,`#5d5a6b`),a+o/2-1,26.9,e.z,Math.PI/2));let c=a-1.05;l.push(G(q(2.25,2.25,.2,p.navy,32),c,12,e.z,0,1,0,Math.PI/2),G(q(2,2,.24,`#fffdf6`,32),c-.02,12,e.z,0,1,0,Math.PI/2));for(let t=0;t<12;t++){let n=t*Math.PI/6;l.push(G(K(.1,t%3?.22:.42,.1,p.navy),c-.16,12+Math.cos(n)*1.65,e.z+Math.sin(n)*1.65,0,1,n))}for(let[t,n,r]of[[1.1,-Math.PI/3,.16],[1.55,Math.PI/3,.11]])l.push(G(K(.1,t,r,p.navy),c-.22,12+Math.cos(n)*t/2,e.z+Math.sin(n)*t/2,0,1,n));l.push(G(Ln([[-1.1,0],[1.1,0],[1.1,1.8],[0,2.6],[-1.1,1.8]],.2,`#6b5a78`),a-1.02,14.6,e.z,Math.PI/2)),l.push(G(J(.5,`#f2c75c`,10,7),a-1,15.7,e.z)),l.push(G(Ln([[-1.4,0],[1.4,0],[1.4,2.6],[0,3.8],[-1.4,2.6]],.25,p.wood),a-1.05,.5,e.z,Math.PI/2)),l.push(G(K(.12,3,.08,`#7c5338`),a-1.2,2.2,e.z),G(J(.09,`#f7d36a`,6,4),a-1.25,2,e.z+.45));for(let t=0;t<3;t++)l.push(G(K(1.2-t*.3,.2,4.2,`#d9c9ae`),a-1.6-t*.3+.45,.1+t*.2,e.z));i(4.4,e.z,3.2,1.6,4.4,a-2.2,p.roof,!0);for(let t of[e.z-3.4,e.z+3.4])l.push(G(q(.15,.15,3.9,`#ffffff`,8),a-3.3,2.45,t));for(let t of[e.z-5.5,e.z+5.5])l.push(G(J(1.25,`#6fb05d`,10,7),a-2.4,1,t),G(J(.9,`#86c26b`,9,6),a-2.6,1.9,t));for(let t=Sn.dirt.half+Sn.dirt.radius+1.5;t<a-2.6;t+=1.7)l.push(G(q(.62,.66,.1,`#e9e2d4`,12),t,.05,e.z+Math.sin(t*.7)*.35,t));for(let n of[e.z-e.length/2+.4,e.z+e.length/2-.4])l.push(G(K(.3,6,.5,`#9ccf88`),t-.1,3.6,n),G(J(1.1,`#86c26b`,9,6),t-.3,6.6,n))}for(let e of Bn()){let t=e.scale,r=h(e.x,e.z),i=.9+e.tint*.2,a=On(e.x,e.z)>45,o=a?[8,5,7,4]:[10,7,9,6];if(r.push(G(q(.24,.38,3.2,p.trunk,a?5:7),e.x,e.y+1.4*t,e.z,0,t)),e.kind===`pine`){let o=new n(p.pine).multiplyScalar(i);[[2.7,3.4,2.6],[2.1,3,4.4],[1.4,2.6,6]].forEach(([n,i,s])=>r.push(G(In(n,i,Nn(`#${o.getHexString()}`,`#7fb48a`,-i/2,i/2),a?7:9),e.x,e.y+s*t,e.z,e.tint*6,t)))}else{let a=e.kind===`blossom`?p.blossom:e.kind===`autumn`?p.autumn:p.leaves[Math.floor(e.tint*3)%3],s=new n(a).lerp(new n(`#fffbe8`),.32),c=Nn(`#${new n(a).multiplyScalar(i*.9).getHexString()}`,`#${s.getHexString()}`,-1.6,1.8);r.push(G(J(2.3,c,o[0],o[1]),e.x,e.y+4.6*t,e.z,0,t)),r.push(G(J(1.6,c,o[2],o[3]),e.x+1.2*t,e.y+4*t,e.z+.6*t,0,t),G(J(1.5,c,o[2],o[3]),e.x-1.1*t,e.y+4.2*t,e.z-.5*t,0,t))}}let k=Cn(11);for(let e=0;e<46;e++){let t=k()*Math.PI*2,n=Sn.dirt.radius+3+k()*30,r=Math.cos(t)*(n+Sn.dirt.half*Math.abs(Math.cos(t))),i=Math.sin(t)*n,a=[`#ffffff`,`#fff1a0`,`#f8c0d0`,`#d6c6f4`][e%4];for(let e=0;e<12;e++){let e=r+(k()-.5)*3.2,t=i+(k()-.5)*3.2;On(e,t)<1||An(e,t)<.5||h(e,t).push(G(J(.11,a,6,4),e,jn(e,t)+.07,t,0,[1,.45,1]),G(J(.04,`#f2c94c`,4,3),e,jn(e,t)+.12,t))}}let A=(e,t,n,r,i)=>{let a=jn(e,t);i.push(G(q(.42,.55,2.2,p.stem,10),e,a+1.1*n,t,0,n));let o=W(new Ie(1.5,14,7,0,Math.PI*2,0,Math.PI/2),Nn(r,r,0,1));i.push(G(o,e,a+2*n,t,0,[n,n*.72,n]),G(W(new Ne(1.5,14),`#f1dfc2`),e,a+2*n+.01,t,0,n,Math.PI/2));for(let r=0;r<7;r++){let o=r*2.4,s=.55+r%3*.3,c=Math.sqrt(Math.max(0,1.5**2-s*s))*.72;i.push(G(J(.2+r%2*.08,`#fffaf0`,7,5),e+Math.cos(o)*s*n,a+(2+c)*n,t+Math.sin(o)*s*n,0,[n,n*.5,n]))}};for(let[e,t,n]of[[-62,-40,5],[-58,42,4],[52,46,4],[-30,-64,5],[66,-40,3],[-82,-8,4]])for(let r=0;r<n;r++){let n=e+(f()-.5)*9,i=t+(f()-.5)*9;kn(n,i)<Sn.clear+1||On(n,i)<1||A(n,i,.6+f()*1.8,p.cap[r%3],h(n,i))}{let e=jn(-98,16);l.push(G(q(2.1,3.2,24,p.trunk,12),-98,e+12,16));for(let t=0;t<6;t++){let n=t*Math.PI/3+.3;l.push(Y(m(-98+Math.cos(n)*1.5,e+2.5,16+Math.sin(n)*1.5),m(-98+Math.cos(n)*4.2,e-.3,16+Math.sin(n)*4.2),.7,p.trunk,7))}for(let[t,n,r]of[[3,15,2],[-3.5,17,-1.5],[1,19,-3.5]])l.push(Y(m(-98,e+n-4,16),m(-98+t*2,e+n,16+r*2),.6,p.trunk,7));for(let[t,n,r,i]of[[0,29,0,9.5],[6,26,5,7],[-7,27,-3,7.5],[3,32,-6,6.5],[-4,33,5,6],[7,30,-6,5.5],[-8,24,6,6]])l.push(G(J(i,Nn(`#5d9e55`,`#a6d67d`,-i,i),14,10),-98+t,e+n,16+r));let t=e+13;l.push(Y(m(-96.5,e+10,16.5),m(-90.6,t-.2,17),.6,p.trunk,7),Y(m(-89,t-.2,17),m(-88.7,e+.2,17),.3,p.trunk,6));for(let n of[-.45,.45])l.push(Y(m(-87.1,t,17+n),m(-86.4,e+.05,17+n),.04,`#c9a77a`,4));for(let n=1;n<10;n++){let r=n/10;l.push(Y(m(-87.1+.7*r,t-(t-e)*r,16.55),m(-87.1+.7*r,t-(t-e)*r,17.45),.035,`#a8835a`,4))}l.push(G(K(3.6,.3,3.6,p.wood),-89,t,17),G(K(3,2.6,3,`#fbe9c8`),-89,t+1.45,17),G(Ln([[-2,0],[2,0],[0,1.7]],3.6,`#e5574d`),-89,t+2.75,17,Math.PI/2)),l.push(G(q(.55,.55,.1,`#ffe7b0`,14),-87.48,t+1.6,17,0,1,0,Math.PI/2)),l.push(G(Ln([[-.9,0],[.9,0],[.9,1.4],[0,2.2],[-.9,1.4]],.3,`#7c5338`),-95.5,e+.1,16,Math.PI/2+.1));for(let e=0;e<8;e++)u.push(G(J(.16,`#fff1b0`,6,4),-94.5+e*.55,t-.6-Math.sin(e/7*Math.PI)*.7,15.1))}let ne=(e,t,n,r)=>{l.push(G(In(9,15,Nn(`#a1849a`,`#dcbcc4`,-7.5,7.5),8),e,t-7.6*r,n,.4,r,Math.PI)),l.push(G(q(9.4,9.1,1.4,Nn(`#7fb35f`,`#a6d67d`,-.7,.7),12),e,t,n,0,r));for(let[i,a,o]of[[-3,2,2.4],[3.5,-2,1.9],[0,-4.5,1.6]])l.push(G(q(.25,.35,2.4,p.trunk,6),e+i*r,t+1.6*r,n+a*r,0,r),G(J(o,Nn(`#5d9e55`,`#a6d67d`,-o,o),9,6),e+i*r,t+(2.9+o*.6)*r,n+a*r,0,r));l.push(G(K(.3,22,2.4,Nn(`#e8f6ff`,`#a9daf0`,-11,11)),e+9.1*r,t-11*r,n,0,r))};ne(-150,66,118,1),ne(165,82,-150,.85),ne(-40,104,-235,.7),ne(120,58,185,.65),l.push(G(Fn(new Ie(6,16,10),[`#f7d36a`,`#ef7f74`,`#7dbbea`,`#ffffff`],16),46,46,118,0,[1,1.18,1])),l.push(G(K(1.8,1.3,1.8,p.wood),46,35.8,118));for(let[e,t]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])l.push(Y(m(46+e,36.4,118+t),m(46+e*3.4,41.4,118+t*3.4),.04,`#6b5a4a`,4));let j=[{r:Sn.rings[0].radius,h:e=>22+12*En(e,2.2,1)+2.2*Math.abs(Math.sin(e*47)),low:`#5f9f55`,high:`#9fd27a`,snow:999},{r:Sn.rings[1].radius,h:e=>52+42*En(e,1.6,5)+26*Math.max(0,Math.sin(e*5+1))**3,low:`#4f8f9c`,high:`#8cc3c0`,snow:999},{r:Sn.rings[2].radius,h:e=>95+60*En(e,1.3,9)+90*Math.max(0,Math.sin(e*4+2.2))**6+45*Math.max(0,Math.sin(e*9+.7))**8,low:`#6c7cc4`,high:`#a3afe8`,snow:162}];for(let e of j){let t=[0,.45,.75,.9,.975,1],r=[],i=[],a=[],o=new n(e.low),s=new n(e.high);for(let a=0;a<=360;a++){let c=a/360*Math.PI*2,l=e.h(c),u=Math.cos(c),d=Math.sin(c);for(let a of t){let t=-6+(l+6)*a,c=o.clone().lerp(s,Math.min(1,a*a/.95));a===1&&c.lerp(new n(`#ffffff`),.22),t>e.snow&&c.lerp(new n(`#fbfdff`),Dn(e.snow,e.snow+8,t)),r.push(u*e.r,t,d*e.r),i.push(c.r,c.g,c.b)}}for(let e=0;e<360;e++)for(let n=0;n<t.length-1;n++){let r=e*t.length+n,i=r+t.length;a.push(r,i,r+1,i,i+1,r+1)}let l=new N;l.setAttribute(`position`,new c(r,3)),l.setAttribute(`color`,new c(i,3)),l.setIndex(a),l.computeVertexNormals(),d.push(l)}{let e=I.degToRad(-112),t=Sn.rings[1].radius-6,n=j[1].h(e+Math.PI*2)-4,r=Math.cos(e)*t,i=Math.sin(e)*t,a=1.7,o=`#f6cbd6`;d.push(G(W(new he(16*a,8*a,5*a),o),r,n+4*a,i,-e+Math.PI/2));for(let[t,s,c]of[[-9,16,3.2],[9,15,3.2],[-3,21,3.8],[3.5,12,2.6],[0,26,2.4]]){let l=r-Math.sin(e)*t*a,u=i+Math.cos(e)*t*a;d.push(G(W(new ye(c*a,c*a,s*a,10),o),l,n+s*a/2,u),G(W(new ee(c*1.3*a,c*2.2*a,10),`#8094dc`),l,n+(s+c*1.1)*a,u))}}let M=new F({name:`School scenery`,vertexColors:!0,roughness:.92,metalness:0}),re=new F({name:`School warm lights`,vertexColors:!0,roughness:.6,metalness:0,emissive:`#ffcf7a`,emissiveIntensity:.55}),ie=new L({name:`School paper mountains`,vertexColors:!0,fog:!0}),ae=(e,n,r,i)=>{if(!e.length)return;let a=ke(e,!1);if(e.forEach(e=>e.dispose()),!a)throw Error(`${r} の形をまとめられない`);a.computeBoundingSphere();let o=new R(a,n);o.name=r,o.castShadow=i,o.receiveShadow=!0,t.add(o)};return ae(o,M,`school-near`,!0),ae(s,M,`school-lines`,!1),ae(l,M,`school-far`,!1),ae(u,re,`school-lights`,!1),ae(d,ie,`school-paper-mountains`,!1),Promise.resolve()}function Hn(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#ffffff`,t.fillRect(0,0,256,256);let n=Cn(42);for(let e=0;e<26;e++)t.fillStyle=`rgba(150,130,110,${.035+n()*.03})`,t.beginPath(),t.arc(n()*256,n()*256,14+n()*30,0,Math.PI*2),t.fill();for(let e=0;e<1500;e++){let e=185+Math.floor(n()*55);t.fillStyle=`rgb(${e},${e-6},${e-14})`,t.beginPath(),t.arc(n()*256,n()*256,.6+n()*1.5,0,Math.PI*2),t.fill()}for(let e=0;e<40;e++){let e=n()*256,r=n()*256,i=1.6+n()*2.2;t.fillStyle=`rgb(205,195,182)`,t.beginPath(),t.arc(e,r,i,0,Math.PI*2),t.fill(),t.fillStyle=`rgb(246,242,234)`,t.beginPath(),t.arc(e-i*.3,r-i*.3,i*.5,0,Math.PI*2),t.fill()}let r=new Pe(e);return r.colorSpace=be,r.wrapS=r.wrapT=D,r.anisotropy=8,r.name=`School ground speckles`,r}var Un=()=>new Promise(e=>{let t=new MessageChannel;t.port1.onmessage=()=>{t.port1.close(),e()},t.port2.postMessage(void 0)});function Wn(e=16){let t=performance.now();return async()=>{performance.now()-t<e||(await Un(),t=performance.now())}}var X={margin:6.5,wall:7.2,ridge:12.5,garden:-.6,bays:14,open:{south:[2,6,9,12],north:[3,7,11]},low:1.5,hang:6.8,rings:[{radius:185},{radius:310},{radius:500}]},Gn=Ke.dojo,Kn=Gn.width/2,qn=Gn.depth/2,Jn=Gn.goalWidth/2,Yn={x:Kn+X.margin,z:qn+X.margin},Xn={x:Yn.x-1,z:Yn.z-1},Zn=(e,t)=>{let n=Math.abs(e)-Yn.x,r=Math.abs(t)-Yn.z;return n>0||r>0?Math.hypot(Math.max(n,0),Math.max(r,0)):Math.max(n,r)};function Qn(e,t){let n=Dn(40,120,Zn(e,t));return X.garden+(n<=0?0:n*(5+11*Tn(e*.011+1.3,t*.011+4.1))+n*n*9)}var $n=e=>X.wall+(X.ridge-X.wall)*(1-Math.min(1,Math.abs(e)/Yn.z)),Z={wood:`#e3bf8a`,woodLight:`#efd3a4`,woodDark:`#a8774a`,beam:`#7a5638`,plaster:`#fbf4e4`,dado:`#b98a5a`,azure:`#8ccdf0`,ember:`#f6a596`,posts:[`#f4a9bd`,`#9ddbc6`,`#f7dc72`,`#c4b2ee`],thatch:`#dcb46c`,thatchDark:`#a98444`,stone:`#c8c3bb`,gravel:`#ede3c9`,grass:`#93c66e`,grassDark:`#7cb35f`,leaves:[`#6fb05d`,`#5d9e55`,`#86c26b`],pine:`#3f8061`,blossom:`#f6bfd0`,trunk:`#94653f`,paper:`#fff4dc`,rainbow:[`#ff9aa2`,`#ffc58e`,`#fff09a`,`#a9e8a4`,`#9ccff6`,`#c9a8ef`]};function er(e,t,n){let[r,i,a,o]=e;new z().subVectors(i,r).cross(new z().subVectors(a,r)).dot(t)<0&&([i,o]=[o,i]);let s=new N;return s.setAttribute(`position`,new c([r,i,a,r,a,o].flatMap(e=>[e.x,e.y,e.z]),3)),s.computeVertexNormals(),W(s,n)}function tr(e,t,n=[1,1]){let[r,i,a,o]=e,s=[[0,0],[n[0],0],[n[0],n[1]],[0,n[1]]];new z().subVectors(i,r).cross(new z().subVectors(a,r)).dot(t)<0&&([i,o]=[o,i],s=[s[0],s[3],s[2],s[1]]);let l=new N,u=[0,1,2,0,2,3],d=[r,i,a,o];return l.setAttribute(`position`,new c(u.flatMap(e=>[d[e].x,d[e].y,d[e].z]),3)),l.setAttribute(`uv`,new c(u.flatMap(e=>s[e]),2)),l.setAttribute(`color`,new c(Array(18).fill(1),3)),l.computeVertexNormals(),l.setIndex([0,1,2,3,4,5]),l}function nr(e,t,n,r,i){let a=t.clone().sub(e);return K(n,r,a.length(),i).applyMatrix4(new Te().compose(e.clone().add(t).multiplyScalar(.5),new b().setFromUnitVectors(new z(0,0,1),a.normalize()),new z(1,1,1)))}function rr(e,t,n,r,i){let a=[-e/2,0,-t/2],o=[e/2,0,-t/2],s=[e/2,0,t/2],l=[-e/2,0,t/2],u=[0,n,-r/2],d=[0,n,r/2],f=[a,d,u,a,l,d,s,u,d,s,o,u,o,a,u,l,s,d],p=new N;return p.setAttribute(`position`,new c(f.flat(),3)),p.computeVertexNormals(),W(p,i)}var ir={x0:-Yn.x-32,x1:-Yn.x,z:16};function ar(){let e=Cn(20261006),t=[],n=ir;for(let r=-150;r<=150;r+=9)for(let i=-150;i<=150;i+=9){let a=r+(e()-.5)*9*.9,o=i+(e()-.5)*9*.9,s=e(),c=e(),l=e(),u=e(),d=Zn(a,o);if(d<7||Math.hypot(a,o)>150||a>n.x0&&a<n.x1&&Math.abs(o)<n.z||s>.7*Dn(7,12,d)*(1-.75*Dn(40,110,d))+.03)continue;let f=c<.45?`round`:c<.62?`pine`:c<.86?`blossom`:`autumn`;t.push({x:a,z:o,y:Qn(a,o),scale:.8+l*.6,kind:f,tint:u})}return t}async function or(e){await Un(),xn(e);let t=new B;t.name=`rift-arena`,e.add(t),t.userData={mapId:`dojo`,theme:`storybook-grandpa-dojo-hall`,courtWidth:Gn.width,courtDepth:Gn.depth,goalWidth:Gn.goalWidth,area:Gn.area,hall:{...Yn},camera:{...Xn}};let r=[],i=[],a=[],o=[],s=[],l=[],u=[],d=[],f=(e,t,n)=>new z(e,t,n),p=Yn.x,m=Yn.z,h=X.wall,g=X.garden,_=new ve(p*2,m*2,1,1);_.rotateX(-Math.PI/2);{let e=_.getAttribute(`position`),t=_.getAttribute(`uv`);for(let n=0;n<e.count;n++)t.setXY(n,e.getX(n)/8,e.getZ(n)/8)}let v=new R(_,new F({name:`Dojo wooden floor`,color:`#ffffff`,roughness:.58,metalness:0,map:fr()}));v.name=`dojo-floor`,v.receiveShadow=!0,t.add(v);let b=2.7,S=[];for(let e of[-1,1]){let t=new ve(p*2-1.2,b,1,1);t.rotateX(-Math.PI/2),t.translate(0,.004,e*(m-b/2-.15));let n=t.getAttribute(`position`),r=t.getAttribute(`uv`);for(let e=0;e<n.count;e++)r.setXY(e,n.getX(e)/1.8,(Math.abs(n.getZ(e))-(m-b-.15))/1.8);S.push(t)}let C=new R(ke(S),new F({name:`Dojo tatami`,color:`#ffffff`,roughness:.95,metalness:0,map:pr()}));S.forEach(e=>e.dispose()),C.name=`dojo-tatami`,C.receiveShadow=!0,t.add(C);for(let e of[-1,1])i.push(G(K(p*2-1.2,.03,.12,Z.woodDark),0,.015,e*(m-b-.15)));let w=.1,T=.006,E=(e,t,n,r)=>i.push(G(K(n,.004,r,`#fdfbf4`),e,T,t));for(let e of[-qn+.08,qn-.08])E(0,e,Gn.width,w);for(let e of[-Kn+.08,Kn-.08])E(e,0,w,Gn.depth);E(0,0,w,Gn.depth),i.push(G(W(new H(4.5-w/2,4.55,64,1),`#fdfbf4`),0,T,0,0,1,-Math.PI/2));for(let e of[-1,1])i.push(G(K(.12,.004,1.2,`#e8705f`),e*3.6,.007,0));let D=(e,t,n,r,a)=>i.push(G(W(new H(e-w/(2*t),e+w/(2*t),36,1),`#fdfbf4`),r,T,a,0,[t,1,n],-Math.PI/2));D(1,1.1,.95,0,0);for(let[e,t,n]of[[1.5,-1.15,.36],[1.85,-.4,.38],[1.85,.4,.38],[1.5,1.15,.36]])D(n,1,1.1,e,t);for(let e of[-qn-.22,qn+.22]){r.push(G(K(Gn.width+.6,.4,.14,Z.wood),0,.2,e));for(let t of[-1,1])r.push(G(K(Kn+.3,.08,.22,t<0?Z.azure:Z.ember),t*(Kn+.3)/2,.44,e))}for(let e of[-1,1])for(let t of[-(qn+Jn)/2,(qn+Jn)/2])r.push(G(K(.14,.4,qn-Jn+.3,Z.wood),e*(Kn+.4),.2,t)),r.push(G(K(.22,.08,qn-Jn+.3,e<0?Z.azure:Z.ember),e*(Kn+.4),.44,t));let O=0,ee=(e,t)=>{let n=Z.posts[O++%Z.posts.length];r.push(G(q(.08,.09,.5,Z.woodLight,8),e,.25,t),G(J(.14,n,9,6),e,.56,t))};for(let e=-Kn;e<=Kn+.01;e+=Gn.width/14)for(let t of[-qn-.22,qn+.22])ee(e,t);for(let e of[-1,1])for(let t of[-qn,-Jn-.2,Jn+.2,qn])ee(e*(Kn+.4),t);for(let e of[-1,1]){let n=e<0?Z.azure:Z.ember,a=e*(Kn+.22),o=e*(Kn+1.9);for(let e of[-Jn,Jn])r.push(G(q(.12,.12,2.42,Z.woodLight,10),a,1.21,e)),r.push(Y(f(a,2.36,e),f(o,.06,e),.07,Z.wood)),r.push(Y(f(a,.06,e),f(o,.06,e),.06,Z.woodDark));r.push(Y(f(a,2.36,-Jn-.1),f(a,2.36,Jn+.1),.11,Z.woodLight,10),G(K(.24,.12,Gn.goalWidth-.3,n),a,2.36,0)),r.push(Y(f(o,.06,-Jn),f(o,.06,Jn),.06,Z.woodDark)),i.push(G(K(1.66,.02,Gn.goalWidth-.1,n),(a+o)/2,.012,0));let s=[];for(let e=-Jn;e<=Jn+.01;e+=.5)s.push(a,2.36,e,o,.06,e);for(let e=.08;e<1;e+=.12){let t=a+(o-a)*e,n=2.36+-2.3*e;s.push(t,n,-Jn,t,n,Jn)}for(let e of[-Jn,Jn]){for(let t=.15;t<1;t+=.17){let n=a+(o-a)*t;s.push(n,.06,e,n,2.36+-2.3*t,e)}for(let t=.4;t<2.36;t+=.35)s.push(a,t,e,a+(o-a)*(2.36-t)/2.3,t,e)}let l=new N;l.setAttribute(`position`,new c(s,3));let u=new le(l,new ge({color:n,transparent:!0,opacity:.6}));u.name=e<0?`azure-goal`:`ember-goal`,u.userData={goalPlane:e*Kn,opening:Gn.goalWidth},t.add(u)}let k=4.4,A=.9,j=(e,t,n,i,a,o)=>{let s=a.clone().multiplyScalar(t/2),c=(t,n)=>e.clone().add(s.clone().multiplyScalar(t)).setY(n);l.push(tr([c(-1,n),c(1,n),c(1,i),c(-1,i)],o,[1,Math.max(1,Math.round((i-n)/t))])),r.push(nr(c(-1,n+.04),c(1,n+.04),.08,.08,Z.beam),nr(c(-1,i-.04),c(1,i-.04),.08,.08,Z.beam));for(let e of[-1,1]){let t=c(e,(n+i)/2).sub(a.clone().multiplyScalar(e*.04));r.push(G(K(.08,i-n,.08,Z.beam),t.x,t.y,t.z))}};await Un();let M=p*2/X.bays;for(let e of[-1,1]){let t=e*m,n=f(0,0,-e),i=f(1,0,0),a=e<0?X.open.south:X.open.north;for(let n=0;n<=X.bays;n++)r.push(G(K(.36,h,.36,Z.beam),-p+n*M,h/2,t+e*.05));for(let o=0;o<X.bays;o++){let s=-p+(o+.5)*M;if(r.push(G(K(M-.36,A,.14,Z.dado),s,A/2,t+e*.02)),a.includes(o))j(f(s-M/4,0,t-e*.08),M/2-.2,A,k,i,n),j(f(s-M/4+.12,0,t-e*.2),M/2-.2,A,k,i,n);else for(let r of[-1,1])j(f(s+r*M/4,0,t-e*.08),M/2-.12,A,k,i,n);let c=6.5,l=M-1.6,u=M-.36;if(o%2==1){r.push(G(K(u,.5999999999999996,.3,Z.plaster),s,9.4/2,t+e*.15),G(K(u,h-c,.3,Z.plaster),s,(c+h)/2,t+e*.15));for(let n of[-1,1])r.push(G(K((u-l)/2,1.5,.3,Z.plaster),s+n*(l/2+(u-l)/4),11.5/2,t+e*.15));for(let n=1;n<4;n++)r.push(G(K(.07,1.5,.07,Z.beam),s-l/2+n*l/4,11.5/2,t+e*.1));r.push(G(K(l+.1,.1,.14,Z.beam),s,5,t),G(K(l+.1,.1,.14,Z.beam),s,c,t))}else{r.push(G(K(u,h-k,.3,Z.plaster),s,(k+h)/2,t+e*.15));let n=Z.posts[(o/2+ +(e>0))%Z.posts.length],i=t-e*.03;r.push(G(K(1.5,1.9,.04,n),s,5.75,i),G(q(.035,.035,1.8,Z.beam,6),s,6.72,i-e*.02,0,1,0,Math.PI/2));let a=(t,n,a)=>r.push(G(W(new Ne(a,16),`#ffffff`),s+t,5.7+n,i-e*.03,e>0?Math.PI:0));a(0,-.15,.32);for(let[e,t]of[[-.36,.22],[-.13,.4],[.13,.4],[.36,.22]])a(e,t,.12)}}r.push(G(K(p*2,.26,.3,Z.beam),0,4.53,t-e*.05),G(K(p*2,.34,.4,Z.beam),0,h-.17,t),G(K(p*2,.08,.14,Z.beam),0,A,t-e*.02))}{let e=p,t=3.6,n=1.7;a.push(G(K(.3,k,t*2,Z.plaster),e+n+.15,k/2,0),G(K(n,.45,t*2,Z.woodDark),e+n/2,.225,0),G(K(1.5999999999999999,.02,t*2-.2,`#c9dca0`),e+n/2,.46,0));for(let t of[-1,1])a.push(G(K(n,k,.3,Z.plaster),e+n/2,k/2,t*3.75));a.push(G(K(2,.3,7.5,Z.woodLight),e+n/2,4.550000000000001,0)),r.push(G(K(.16,.5,t*2,Z.beam),e-.02,.25,0)),u.push(cr(sr.scroll,1.25,3,e+n-.02,2.55,0,-1)),a.push(G(q(.04,.04,1.45,Z.beam,6),e+n-.06,4.08,0,0,1,Math.PI/2),G(q(.05,.05,1.5,Z.beam,6),e+n-.06,1.03,0,0,1,Math.PI/2)),a.push(G(q(.32,.24,.62,`#6f88b8`,12),e+.9,.78,-2.2));for(let t=0;t<7;t++){let n=t*.9;a.push(G(q(.02,.02,1+t%3*.25,`#5f9e55`,4),e+.9+Math.cos(n)*.12,1.5,-2.2+Math.sin(n)*.12,0,1,Math.cos(n)*.25,Math.sin(n)*.25),G(J(.17,Z.rainbow[t%6],7,5),e+.9+Math.cos(n)*.35,2.05+t%3*.22,-2.2+Math.sin(n)*.35))}a.push(G(K(.9,.22,.55,`#7a8fbf`),e+.9,.58,2.3),G(q(.06,.08,.55,Z.trunk,5),e+.9,.9,2.3,0,1,0,.3));for(let[t,n]of[[-.25,1.25],[.22,1.15],[0,1.4]])a.push(G(J(.3,Z.pine,8,5),e+.9,n,2.3+t,0,[1,.55,1]));r.push(G(K(.3,h-k,7.5600000000000005,Z.plaster),e+.15,(k+h)/2,0)),r.push(G(K(.12,1.7,6,Z.beam),e-.06,5.85,0)),u.push(cr(sr.plaque,5.6,1.45,e-.13,5.85,0,-1));let i=m-t,o=-(t+i/2),s=o-1.5,c=3.1,l=1.65;r.push(G(K(.14,A,i,Z.dado),e-.02,A/2,o));let d=new y;d.moveTo(-i/2,A),d.lineTo(i/2,A),d.lineTo(i/2,h),d.lineTo(-i/2,h),d.lineTo(-i/2,A);let f=new x;f.absarc(-(s-o),c,l,0,Math.PI*2,!0),d.holes.push(f);let g=new ne(d,{depth:.3,bevelEnabled:!1,curveSegments:36});g.deleteAttribute(`uv`),g.rotateY(Math.PI/2),g.translate(e,0,o),r.push(W(g,Z.plaster)),r.push(G(W(new te(l,.1,8,40),Z.beam),e-.02,c,s,Math.PI/2));for(let t of[-1,0,1]){let n=t*.55,i=Math.sqrt(l**2-n**2);r.push(G(K(.05,i*2,.05,Z.beam),e+.15,c,s+n),G(K(.05,.05,i*2,Z.beam),e+.15,c+n,s))}let _=t+i/2;r.push(G(K(.14,A,i,Z.dado),e-.02,A/2,_),G(K(.3,h-A,i,Z.plaster),e+.15,(A+h)/2,_)),r.push(G(K(.1,1.6,5.4,Z.woodLight),e-.06,2.9,_-2),G(K(.12,1.7,.12,Z.beam),e-.1,2.9,_-4.75),G(K(.12,1.7,.12,Z.beam),e-.1,2.9,_+.75));for(let t=0;t<3;t++)for(let n=0;n<14;n++){let i=_-4.4+n*.37,a=3.4-t*.5;r.push(G(K(.04,.38,.26,`#f5e2bd`),e-.13,a,i),G(K(.045,.22,.05,`#3b2a20`),e-.15,a-.02,i))}r.push(G(K(.1,.08,3.2,Z.beam),e-.15,1.6,_+3.2),G(K(.1,.08,3.2,Z.beam),e-.15,2.5,_+3.2));for(let t=0;t<6;t++)r.push(G(K(.06,1.05,.06,`#d9b98a`),e-.2,2.05,_+1.9+t*.52,0,1,0,.05));for(let n of[-m,-3.6,t,m])r.push(G(K(.36,h,.36,Z.beam),e+.05,h/2,n));r.push(G(K(.3,.26,m*2,Z.beam),e-.05,4.53,0),G(K(.4,.34,m*2,Z.beam),e,h-.17,0))}{let e=-p,t=m-5;for(let n of[-1,1]){let i=n*(5+t/2);r.push(G(K(.14,A,t,Z.dado),e-.02,A/2,i));for(let r=0;r<4;r++)j(f(e+.08,0,n*(5.2+(r+.5)*(t-.4)/4)),(t-.4)/4-.06,A,k,f(0,0,1),f(1,0,0));r.push(G(K(.3,h-k,t,Z.plaster),e-.15,(k+h)/2,i));for(let t=0;t<2;t++)r.push(G(K(.08,4.300000000000001,2.4,`#b88a5c`),e+.22+t*.1,4.300000000000001/2,n*3.7),G(K(.1,.1,2.4,Z.beam),e+.27+t*.1,k*.55,n*3.7))}r.push(G(K(.3,h-k,10,Z.plaster),e-.15,(k+h)/2,0)),r.push(G(K(.4,.4,m*2,Z.beam),e+.05,4.6000000000000005,0),G(K(.4,.34,m*2,Z.beam),e,h-.17,0),G(K(.5,.12,10,Z.woodDark),e,.06,0));for(let t of[-m,-5,5,m])r.push(G(K(.36,h,.36,Z.beam),e-.05,h/2,t));r.push(G(q(.95,.95,.14,Z.beam,32),e+.08,5.8,0,0,1,0,Math.PI/2)),u.push(lr(sr.clock,.85,e+.17,5.8,0,1))}await Un();for(let e of[-1,1]){let t=f(0,X.ridge-h,-e*m),n=f(0,-1,-e*.25);for(let r=0;r<44;r++){let i=f(-p-.3+(p*2+.6)*r/44,h,e*m),o=f(-p-.3+(p*2+.6)*(r+1)/44,h,e*m);a.push(er([i,o,o.clone().add(t),i.clone().add(t)],n,r%2?`#e2c08e`:`#d8b27c`))}}for(let e=0;e<=10;e++){let t=-p+e*p*2/10;a.push(G(K(.36,.42,m*2,Z.beam),t,h-.1,0),G(K(.3,X.ridge-h-.3,.3,Z.beam),t,(h+X.ridge)/2-.15,0));for(let e of[-1,1])a.push(nr(f(t,h,e*m),f(t,X.ridge-.1,0),.26,.3,Z.beam))}a.push(G(K(p*2+.6,.4,.4,Z.beam),0,X.ridge-.2,0));for(let e of[-1,1])a.push(G(K(p*2+.6,.26,.26,Z.beam),0,$n(m/2)-.25,e*m/2));for(let e of[-1,1])a.push(G(Ln([[-m,0],[m,0],[0,X.ridge-h]],.3,Z.plaster),e*(p+.15),h,0,Math.PI/2));for(let e of[-7.5,7.5])for(let t=0;t<10;t++){let n=-p+(t+.5)*p*2/10,r=$n(e)-.1;a.push(Y(f(n,r,e),f(n,8.15,e),.015,`#6b5a4a`,4),G(q(.16,.2,.14,Z.beam,10),n,8.12,e)),o.push(G(J(.5,Z.paper,14,10),n,7.6,e,0,[1,1.08,1]))}for(let e of[-1,1]){let t=e*(m-.45),n=[-p+2,-p/2,0,p/2,p-2];for(let e=0;e<n.length-1;e++){let r=n[e],i=n[e+1],o=[];for(let e=0;e<=1.0001;e+=1/14)o.push(f(r+(i-r)*e,7-Math.sin(Math.PI*e)*.2,t));for(let n=0;n<o.length-1;n++)a.push(Y(o[n],o[n+1],.015,`#7a6a5a`,3)),a.push(G(Ln([[-.22,0],[.22,0],[0,-.42]],.02,Z.rainbow[(n+e)%6]),o[n].x+.3,o[n].y-.02,t))}}{let e=new z(28,-47,38),t=t=>t.clone().add(e.clone().multiplyScalar(-t.y/e.y));for(let e=1;e<X.bays;e+=2){let r=-p+(e+.5)*M,i=M-1.6,a=-m+.2;for(let e of[5,6.5]){let o=f(r-i/2,e,a),s=f(r+i/2,e,a);d.push(er([o,s,t(s),t(o)],f(0,1,0),(e,t)=>new n(`#fff1c4`).multiplyScalar(.25+.75*Math.min(1,t/5))))}}}{let e=p-1.4,t=m-1.7;r.push(G(q(.5,.5,.7,`#c46a43`,18),e,.82,t,0,1,Math.PI/2),G(q(.48,.48,.72,Z.paper,18),e,.82,t,0,1,Math.PI/2));for(let n of[-.4,.4])r.push(Y(f(e-.45,0,t+n),f(e,.55,t+n*.6),.045,Z.beam),Y(f(e+.45,0,t+n),f(e,.55,t+n*.6),.045,Z.beam));for(let[e,t,n]of[[-14,m-1.4,Z.azure],[-12.8,m-1.4,Z.azure],[12.8,m-1.4,Z.ember],[14,m-1.4,Z.ember],[-4,-m+1.4,`#c4b2ee`],[4,-m+1.4,`#f7dc72`],[-20,-m+1.4,Z.posts[1]],[20,-m+1.4,Z.posts[0]]])r.push(G(K(.9,.12,.9,n),e,.06,t,.1),G(K(.86,.1,.86,n),e,.17,t,-.15));let n=m-1.5;r.push(G(q(.8,.8,.08,Z.woodDark,20),-22,.38,n));for(let[e,t]of[[-.4,-.4],[.4,-.4],[-.4,.4],[.4,.4]])r.push(G(K(.08,.34,.08,Z.beam),-22+e,.17,n+t));r.push(G(J(.16,`#7fb5a8`,10,7),-22,.5,n,0,[1,.85,1]),G(q(.03,.03,.2,`#7fb5a8`,5),-21.82,.55,n,0,1,0,-.9));for(let[e,t]of[[.35,.2],[-.3,.3],[.1,-.4]])r.push(G(q(.06,.05,.1,`#fbf4e4`,8),-22+e,.47,n+t));for(let[e,t]of[[-p+1.1,-m+1.1],[-p+1.1,m-1.1],[p-1.1,-m+1.1]])r.push(G(q(.32,.26,.5,`#d9876a`,10),e,.25,t),G(J(.55,Nn(`#5d9e55`,`#a6d67d`,-.5,.5),9,6),e,.95,t))}await Un();let re=new ve(700,700,70,70);re.rotateX(-Math.PI/2);{let e=re.getAttribute(`position`),t=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let i=e.getX(r),a=e.getZ(r);e.setY(r,Qn(i,a)-.02);let o=Tn(i*.07,a*.07),s=new n(Z.grass).lerp(new n(o>.5?`#a9d47e`:Z.grassDark),Math.abs(o-.5)*1.1);s.lerp(new n(Z.gravel),1-Dn(2,4,Zn(i,a))),t.set([s.r,s.g,s.b],r*3)}re.deleteAttribute(`uv`),re.setAttribute(`color`,new c(t,3)),re.computeVertexNormals()}let ie=new R(re,new F({name:`Dojo garden ground`,vertexColors:!0,roughness:1,metalness:0}));ie.name=`dojo-garden-ground`,ie.receiveShadow=!0,t.add(ie),a.push(G(K(p*2+1.4,-g,m*2+1.4,Z.stone),0,g/2-.01,0));for(let e of[-1,1]){a.push(G(K(p*2,.12,2,Z.wood),0,-.07,e*(m+1.35)));for(let t=-p;t<=p+.01;t+=4.4)a.push(G(K(.18,-g,.18,Z.beam),t,g/2,e*(m+2.2)))}a.push(G(K(1.6,.3,3,Z.stone),-p-1.1,-.16,0));for(let e=0;e<9;e++)a.push(G(q(.6,.65,.14,e%2?Z.stone:`#d6d1c8`,9),-p-3-e*1.6,Qn(-p-3-e*1.6,0)+.05,Math.sin(e*1.3)*.4,e));{let e=-p-18,t=(e-12+e)/2,n=4.2,r=.7,i=g;a.push(G(K(12.4,r,20.4,Z.stone),t,i+r/2,0),G(K(12,n,20,`#fbf1dc`),t,i+r+n/2,0));for(let t=-10;t<=10.01;t+=20/6)a.push(G(K(.32,n,.32,Z.beam),e+.05,i+r+n/2,t));for(let t=-8.333333333333334;t<10;t+=20/6){o.push(G(K(.1,2.2,2.6,`#ffe9b8`),e+.1,i+r+2.3,t));for(let n=1;n<4;n++)a.push(G(K(.12,2.2,.05,Z.beam),e+.12,i+r+2.3,t-1.3+n*.65))}a.push(G(K(2.2,.25,21.4,Z.woodDark),e+1.1,i+r-.05,0));let s=7.6,c=i+r+n-.4;a.push(G(rr(17,24.6,s,9,Nn(Z.thatch,Z.thatchDark,0,s)),t,c,0),G(K(.9,.7,10.2,`#7a5d3a`),t,c+s+.1,0));for(let e of[-1,1])a.push(G(K(.6,.45,24.6,Z.thatchDark),t+e*(17/2-.2),c+.05,0),G(K(17,.45,.6,Z.thatchDark),t,c+.05,e*(24.6/2-.2)));u.push(cr(sr.house,3.6,.9,e+2.65,i+r+n-.75,0,1));let l=e-2,d=Qn(l,16);a.push(G(q(.3,.45,3.6,Z.trunk,7),l,d+1.8,16));for(let[e,t,n,r]of[[0,5,0,2.6],[1.6,4.3,1,1.8],[-1.5,4.5,-.8,1.9]])a.push(G(J(r,Nn(`#5f9a4c`,`#9bcf6d`,-r,r),10,7),l+e,d+t,16+n));for(let e=0;e<14;e++){let t=e*2.4,n=2+e%3*.5;a.push(G(J(.22,`#f39a3a`,7,5),l+Math.cos(t)*n,d+3.8+e%4*.6,16+Math.sin(t)*n))}}for(let[e,t,n]of[[-p-6,-9,`#f48fb1`],[-p-6,9,`#f7a8c4`],[-p-9,-14,`#e98ab4`],[-p-9,14,`#f48fb1`]]){let r=Qn(e,t);a.push(G(J(1.2,n,10,6),e,r+.6,t,0,[1.3,.75,1]),G(J(.9,`#86c26b`,9,5),e+.9,r+.45,t+.4,0,[1.2,.7,1]))}for(let e of ar()){let t=e.scale,r=Zn(e.x,e.z)>45,i=r?[8,5,7,4]:[10,7,9,6];if(a.push(G(q(.24,.38,3.2,Z.trunk,r?5:7),e.x,e.y+1.4*t,e.z,0,t)),e.kind===`pine`)[[2.7,3.4,2.6],[2.1,3,4.4],[1.4,2.6,6]].forEach(([n,i,o])=>a.push(G(In(n,i,Nn(Z.pine,`#7fb48a`,-i/2,i/2),r?7:9),e.x,e.y+o*t,e.z,e.tint*6,t)));else{let r=e.kind===`blossom`?Z.blossom:e.kind===`autumn`?`#eba648`:Z.leaves[Math.floor(e.tint*3)%3],o=new n(r).lerp(new n(`#fffbe8`),.32),s=Nn(`#${new n(r).multiplyScalar(.9).getHexString()}`,`#${o.getHexString()}`,-1.6,1.8);a.push(G(J(2.3,s,i[0],i[1]),e.x,e.y+4.6*t,e.z,0,t)),a.push(G(J(1.6,s,i[2],i[3]),e.x+1.2*t,e.y+4*t,e.z+.6*t,0,t),G(J(1.5,s,i[2],i[3]),e.x-1.1*t,e.y+4.2*t,e.z-.5*t,0,t))}}let ae=[{r:X.rings[0].radius,h:e=>22+12*En(e,2.2,3)+2.2*Math.abs(Math.sin(e*47)),low:`#5f9f55`,high:`#9fd27a`,snow:999},{r:X.rings[1].radius,h:e=>52+42*En(e,1.6,7)+26*Math.max(0,Math.sin(e*5+2))**3,low:`#4f8f9c`,high:`#8cc3c0`,snow:999},{r:X.rings[2].radius,h:e=>95+60*En(e,1.3,11)+90*Math.max(0,Math.sin(e*4+1.2))**6+45*Math.max(0,Math.sin(e*9+.2))**8,low:`#6c7cc4`,high:`#a3afe8`,snow:162}];for(let e of ae){let t=[0,.45,.75,.9,.975,1],r=[],i=[],a=[],o=new n(e.low),l=new n(e.high);for(let a=0;a<=240;a++){let s=a/240*Math.PI*2,c=e.h(s),u=Math.cos(s),d=Math.sin(s);for(let a of t){let t=-6+(c+6)*a,s=o.clone().lerp(l,Math.min(1,a*a/.95));a===1&&s.lerp(new n(`#ffffff`),.22),t>e.snow&&s.lerp(new n(`#fbfdff`),Dn(e.snow,e.snow+8,t)),r.push(u*e.r,t,d*e.r),i.push(s.r,s.g,s.b)}}for(let e=0;e<240;e++)for(let n=0;n<t.length-1;n++){let r=e*t.length+n,i=r+t.length;a.push(r,i,r+1,i,i+1,r+1)}let u=new N;u.setAttribute(`position`,new c(r,3)),u.setAttribute(`color`,new c(i,3)),u.setIndex(a),u.computeVertexNormals(),s.push(u)}await Un();let oe=new F({name:`Dojo hall`,vertexColors:!0,roughness:.88,metalness:0}),se=new F({name:`Dojo warm lights`,vertexColors:!0,roughness:.6,metalness:0,emissive:`#ffd89a`,emissiveIntensity:.7}),ce=new L({name:`Dojo paper mountains`,vertexColors:!0,fog:!0}),P=(e,n,r,i)=>{if(!e.length)return;let a=ke(e,!1);if(e.forEach(e=>e.dispose()),!a)throw Error(`${r} の形をまとめられない`);a.computeBoundingSphere();let o=new R(a,n);return o.name=r,o.castShadow=i,o.receiveShadow=!0,t.add(o),o};P(r,oe,`dojo-near`,!0),P(i,oe,`dojo-lines`,!1),P(a,oe,`dojo-far`,!1),P(o,se,`dojo-lights`,!1),P(s,ce,`dojo-paper-mountains`,!1);let ue=dr();P(l,new F({name:`Dojo shoji`,vertexColors:!0,roughness:.9,metalness:0,map:ue,emissive:`#fff1d6`,emissiveIntensity:.35,emissiveMap:ue,side:2}),`dojo-shoji`,!1),P(u,new F({name:`Dojo signs`,color:`#ffffff`,roughness:.8,metalness:0,map:ur()}),`dojo-signs`,!1);let de=P(d,new L({name:`Dojo sunbeams`,vertexColors:!0,transparent:!0,opacity:.22,blending:2,depthWrite:!1,side:2,fog:!1}),`dojo-sunbeams`,!1);de&&(de.receiveShadow=!1,de.renderOrder=3)}var sr={plaque:[0,0,768,256],house:[0,256,768,512],clock:[0,512,384,896],scroll:[768,0,1024,1024]};function cr(e,t,n,r,i,a,o){let s=new ve(t,n,1,1),c=s.getAttribute(`uv`),[l,u,d,f]=e;for(let e=0;e<c.count;e++)c.setXY(e,(l+(d-l)*c.getX(e))/1024,1-(f-(f-u)*c.getY(e))/1024);return s.translate(0,0,.02),s.rotateY(o<0?-Math.PI/2:Math.PI/2),s.translate(r,i,a),s}function lr(e,t,n,r,i,a){let o=new Ne(t,32),s=o.getAttribute(`uv`),[c,l,u,d]=e;for(let e=0;e<s.count;e++)s.setXY(e,(c+(u-c)*s.getX(e))/1024,1-(d-(d-l)*s.getY(e))/1024);return o.translate(0,0,.02),o.rotateY(a<0?-Math.PI/2:Math.PI/2),o.translate(n,r,i),o}function ur(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=e.height=1024;let t=e.getContext(`2d`),n=`"Hiragino Mincho ProN","Yu Mincho","YuMincho","MS Mincho","Noto Serif JP",serif`;t.fillStyle=`#4a3324`,t.fillRect(0,0,768,256),t.strokeStyle=`#c9a24f`,t.lineWidth=12,t.strokeRect(10,10,748,236),t.fillStyle=`#f6e3b0`,t.font=`bold 104px ${n}`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`おじいちゃんの道場`,384,132,700),t.fillStyle=`#f3dfb8`,t.fillRect(0,256,768,256),t.strokeStyle=`#8a5a3a`,t.lineWidth=12,t.strokeRect(10,266,748,236),t.fillStyle=`#4a3020`,t.font=`bold 110px ${n}`,t.fillText(`おじいちゃんの家`,384,388,700),t.fillStyle=`#fffdf6`,t.beginPath(),t.arc(192,704,180,0,Math.PI*2),t.fill(),t.strokeStyle=`#3f4b77`,t.lineWidth=14,t.stroke();for(let e=0;e<12;e++){let n=e*Math.PI/6,r=e%3?140:120;t.lineWidth=e%3?6:12,t.beginPath(),t.moveTo(192+Math.sin(n)*r,704-Math.cos(n)*r),t.lineTo(192+Math.sin(n)*160,704-Math.cos(n)*160),t.stroke()}t.lineCap=`round`,t.lineWidth=14,t.beginPath(),t.moveTo(192,704),t.lineTo(192+Math.sin(-Math.PI/3)*85,704-Math.cos(-Math.PI/3)*85),t.stroke(),t.lineWidth=9,t.beginPath(),t.moveTo(192,704),t.lineTo(192+Math.sin(Math.PI/3)*125,704-Math.cos(Math.PI/3)*125),t.stroke(),t.fillStyle=`#e8705f`,t.beginPath(),t.arc(192,704,14,0,Math.PI*2),t.fill(),t.fillStyle=`#7f93b8`,t.fillRect(768,0,256,1024),t.fillStyle=`#fbf6e8`,t.fillRect(790,120,212,800),t.fillStyle=`#2a211c`,t.font=`bold 170px ${n}`,t.textAlign=`center`,[`心`,`技`,`体`].forEach((e,n)=>t.fillText(e,896,260+n*250,200)),t.fillStyle=`#c0392b`,t.fillRect(930,830,46,46);let r=new Pe(e);return r.colorSpace=be,r.anisotropy=8,r.name=`Dojo signs`,r}function dr(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=128,e.height=128;let t=e.getContext(`2d`);t.fillStyle=`#fffaf0`,t.fillRect(0,0,128,128);let n=Cn(5);for(let e=0;e<60;e++)t.fillStyle=`rgba(230,215,185,${.08+n()*.08})`,t.fillRect(n()*128,n()*128,6+n()*20,2);t.fillStyle=`#7a5a3c`;for(let e=1;e<3;e++)t.fillRect(e*128/3-3,0,6,128);for(let e=1;e<4;e++)t.fillRect(0,e*128/4-3,128,6);t.fillRect(0,0,128,3),t.fillRect(0,125,128,3),t.fillRect(0,0,3,128),t.fillRect(125,0,3,128);let r=new Pe(e);return r.colorSpace=be,r.wrapS=r.wrapT=D,r.anisotropy=4,r.name=`Dojo shoji`,r}function fr(){if(typeof document>`u`)return null;let e=1024,t=document.createElement(`canvas`);t.width=t.height=e;let n=t.getContext(`2d`),r=Cn(606);for(let t=0;t<16;t++){let i=[],a=r()*e;for(;i.length<3;)i.push(a%e),a+=e*(.28+r()*.2);i.sort((e,t)=>e-t);for(let a=0;a<i.length;a++){let o=i[a],s=a+1<i.length?i[a+1]:i[0]+e,c=.93+r()*.12,l=r(),u=`rgb(${Math.round(236*c-l*6)},${Math.round(202*c-l*4)},${Math.round(150*c)})`;for(let e of[0,-1024]){n.fillStyle=u,n.fillRect(o+e,t*64,s-o,64);for(let i=0;i<7;i++){n.strokeStyle=`rgba(160,110,62,${.05+r()*.07})`,n.lineWidth=.8+r()*1.4,n.beginPath();let i=t*64+3+r()*58,a=r()*6,c=1+r()*2.2;for(let t=0;t<=s-o;t+=16)n.lineTo(o+e+t,i+Math.sin(t/70+a)*c);n.stroke()}n.fillStyle=`rgba(120,78,42,.55)`,n.fillRect(o+e-1,t*64,2.5,64)}}n.fillStyle=`rgba(120,78,42,.6)`,n.fillRect(0,t*64-1,e,2.5)}let i=new Pe(t);return i.colorSpace=be,i.wrapS=i.wrapT=D,i.anisotropy=8,i.name=`Dojo wooden floor`,i}function pr(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`),n=Cn(77);for(let e=0;e<2;e++){let r=e*512/2;t.fillStyle=e?`#cbdda2`:`#c4d89b`,t.fillRect(0,r,512,256);for(let e=r+2;e<r+256;e+=4)t.fillStyle=`rgba(120,150,80,${.1+n()*.08})`,t.fillRect(0,e,512,1.4);for(let e=0;e<40;e++)t.fillStyle=`rgba(255,255,230,${.05+n()*.05})`,t.fillRect(n()*512,r+n()*512/2,30+n()*80,2);t.fillStyle=`#3f5c4c`,t.fillRect(0,r,512,9),t.fillRect(0,r+256-9,512,9),t.fillStyle=`rgba(255,255,255,.25)`;for(let e=0;e<512;e+=12)t.fillRect(e,r+3,5,2),t.fillRect(e+6,r+256-6,5,2)}t.fillStyle=`rgba(90,110,60,.5)`,t.fillRect(510,0,2,512);let r=new Pe(e);return r.colorSpace=be,r.wrapS=r.wrapT=D,r.anisotropy=8,r.name=`Dojo tatami`,r}var mr={enabled:!0,start:1.5,margin:1.9,backPerMeter:1.6,maxBack:14,risePerMeter:.8,minGap:1.5,outTau:.25,inTau:.6,holdBack:.4,bounds:{royal:{x:43,z:30.5},school:{x:45,z:32}},dojoMaxY:6.3},hr=(e,t,n)=>Math.max(0,-((t.x-e.x)*n.x+(t.z-e.z)*n.z)),gr=class{eff=0;ahead=0;config;constructor(e=mr){this.config=e}reset(){this.eff=0,this.ahead=0}step(e,t){let n=this.config;return t<=0?this.eff:(this.ahead=e<n.start?this.ahead+t:0,e>this.eff?this.eff+=(e-this.eff)*(1-Math.exp(-t/n.outTau)):(e>=n.start||this.ahead>=n.holdBack)&&(this.eff+=(e-this.eff)*(1-Math.exp(-t/n.inTau))),this.eff)}};function _r(e,t,n=mr){return yr(t,e===`puck`?n:{...n,enabled:!1})}var vr=(e,t)=>Math.atan2(e.y-t.y,Math.hypot(t.x-e.x,t.z-e.z));function yr(e,t=mr){let{character:n,forward:r,desired:i,aim:a,eff:o,halfFov:s,bounds:c}=e;if(!t.enabled||o<=t.start)return{desired:{...i},aim:{...a},extra:0,tilt:vr(i,a)};let l=Math.min(t.maxBack,(o-t.start)*t.backPerMeter),u={x:i.x-r.x*l,y:i.y+t.risePerMeter*l,z:i.z-r.z*l};if(c.box){let e=Math.max(c.box.x,Math.abs(i.x)),t=Math.max(c.box.z,Math.abs(i.z));u.x=Math.min(e,Math.max(-e,u.x)),u.z=Math.min(t,Math.max(-t,u.z))}if(c.radius!==void 0){let e=Math.max(c.radius,Math.hypot(i.x,i.z)),t=Math.hypot(u.x,u.z);t>e&&(u.x*=e/t,u.z*=e/t)}c.maxY!==void 0&&(u.y=Math.min(u.y,Math.max(c.maxY,i.y)));let d=n.x-u.x,f=n.z-u.z,p=Math.hypot(d,f),m=Math.max(t.minGap,p-(o+t.margin)),h=Math.atan(u.y/m)-s,g=vr(u,a);if(h<=g)return{desired:u,aim:{...a},extra:l,tilt:g};let _=Math.max(p,.5),v=p>1e-6?d/p:r.x,y=p>1e-6?f/p:r.z;return{desired:u,aim:{x:u.x+v*_,y:u.y-_*Math.tan(h),z:u.z+y*_},extra:l,tilt:h}}var br={royal:{hemisphere:{sky:`#88a8de`,ground:`#323043`,intensity:.65},sun:{color:`#99b9ef`,intensity:1.75},fill:{color:`#e9a775`,intensity:.32},fog:{color:`#48658a`,density:.0034},environment:.22,background:`#203d61`,exposure:.92},colosseum:{hemisphere:{sky:`#c5d4ec`,ground:`#645342`,intensity:.85},sun:{color:`#ffe1b3`,intensity:2.4},fill:{color:`#e9a775`,intensity:.32},fog:{color:`#48658a`,density:.0034},environment:.3,background:`#203d61`,exposure:.92},school:{hemisphere:{sky:`#dcefff`,ground:`#9cc77f`,intensity:1.05},sun:{color:`#fff1d8`,intensity:2.2},fill:{color:`#ffd6b0`,intensity:.35},fog:{color:`#e4f0f2`,density:.0012},environment:.25,background:`#bfe3f7`,exposure:.95},dojo:{hemisphere:{sky:`#fff1dc`,ground:`#c9a77a`,intensity:1.05},sun:{color:`#ffecd0`,intensity:2.2},fill:{color:`#ffd6b0`,intensity:.35},fog:{color:`#e4f0f2`,density:.0012},environment:.25,background:`#bfe3f7`,exposure:.95}};function xr(e,t,n,r){let i=(e,t)=>e.role===t.role&&e.team===t.team&&(e.look??``)===(r.look?.(t)??``);for(let[i,a]of[...e])t.some(e=>e.id===i)||(e.delete(i),n.push(a),r.park(a));for(let a of t){let t=e.get(a.id);t&&!i(t,a)&&r.ready(a)&&(e.delete(a.id),n.push(t),r.park(t))}for(let a of t){if(e.has(a.id)||!r.ready(a))continue;let t=n.findIndex(e=>i(e,a));if(t<0){e.set(a.id,r.create(a));continue}let[o]=n.splice(t,1);r.unpark(o),e.set(a.id,o)}}var Sr=class extends _e{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let t=new he;t.deleteAttribute(`uv`);let n=new F({side:1}),r=new F,i=new v(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let a=new R(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let o=new e(t,r,6),s=new k;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),o.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),o.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),o.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),o.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),o.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),o.setMatrixAt(5,s.matrix),this.add(o);let c=new R(t,Cr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new R(t,Cr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new R(t,Cr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new R(t,Cr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new R(t,Cr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new R(t,Cr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Cr(e){return new je({color:0,emissive:16777215,emissiveIntensity:e})}var wr={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Tr=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Er=new r(-1,1,1,-1,0,1),Dr=new class extends N{constructor(){super(),this.setAttribute(`position`,new c([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new c([0,2,0,0,2,0],2))}},Or=class{constructor(e){this._mesh=new R(Dr,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Er)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},kr=class extends Tr{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof _?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=p.clone(e.uniforms),this.material=new _({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Or(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ar=class extends Tr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},jr=class extends Tr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Mr=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new V);this._width=n.width,this._height=n.height,t=new P(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:f}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new kr(wr),this.copyPass.material.blending=0,this.timer=new l}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ar!==void 0&&(r instanceof Ar?n=!0:r instanceof jr&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new V);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Nr=class extends Tr{constructor(e,t,r=null,i=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new n}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Pr={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new V},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Te},cameraProjectionMatrixInverse:{value:new Te},cameraWorldMatrix:{value:new Te},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new z(-1,-1,-1)},sceneBoxMax:{value:new z(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Fr={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ir={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Lr(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=Rr(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new z(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new g(i,t,t);return a.wrapS=D,a.wrapT=D,a.needsUpdate=!0,a}function Rr(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}r[i*t+a]=e++,a++,i--}return r}var zr={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Br(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new V},cameraProjectionMatrixInverse:{value:new Te},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Br(e,t,n){let r=Vr(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Vr(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new z(Math.cos(a),Math.sin(a),o))}return r}var Hr=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,ee=_-C+2*d,k=v-w+2*d,A=g-1+3*d,te=_-1+3*d,ne=v-1+3*d,j=c&255,M=l&255,re=u&255,ie=this.perm[j+this.perm[M+this.perm[re]]]%12,ae=this.perm[j+y+this.perm[M+b+this.perm[re+x]]]%12,oe=this.perm[j+S+this.perm[M+C+this.perm[re+w]]]%12,se=this.perm[j+1+this.perm[M+1+this.perm[re+1]]]%12,ce=.6-g*g-_*_-v*v;ce<0?r=0:(ce*=ce,r=ce*ce*this._dot3(this.grad3[ie],g,_,v));let N=.6-T*T-E*E-D*D;N<0?i=0:(N*=N,i=N*N*this._dot3(this.grad3[ae],T,E,D));let P=.6-O*O-ee*ee-k*k;P<0?a=0:(P*=P,a=P*P*this._dot3(this.grad3[oe],O,ee,k));let le=.6-A*A-te*te-ne*ne;return le<0?o=0:(le*=le,o=le*le*this._dot3(this.grad3[se],A,te,ne)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,ee=w>E?16:0,k=T>E?8:0,A=w>D?4:0,te=T>D?2:0,ne=+(E>D),j=O+ee+k+A+te+ne,M=+(a[j][0]>=3),re=+(a[j][1]>=3),ie=+(a[j][2]>=3),ae=+(a[j][3]>=3),oe=+(a[j][0]>=2),se=+(a[j][1]>=2),ce=+(a[j][2]>=2),N=+(a[j][3]>=2),P=+(a[j][0]>=1),le=+(a[j][1]>=1),ue=+(a[j][2]>=1),F=+(a[j][3]>=1),de=w-M+c,I=T-re+c,fe=E-ie+c,pe=D-ae+c,me=w-oe+2*c,he=T-se+2*c,L=E-ce+2*c,ge=D-N+2*c,_e=w-P+3*c,ve=T-le+3*c,ye=E-ue+3*c,be=D-F+3*c,xe=w-1+4*c,Se=T-1+4*c,R=E-1+4*c,z=D-1+4*c,Ce=h&255,we=g&255,Te=_&255,B=v&255,Ee=o[Ce+o[we+o[Te+o[B]]]]%32,De=o[Ce+M+o[we+re+o[Te+ie+o[B+ae]]]]%32,V=o[Ce+oe+o[we+se+o[Te+ce+o[B+N]]]]%32,Oe=o[Ce+P+o[we+le+o[Te+ue+o[B+F]]]]%32,ke=o[Ce+1+o[we+1+o[Te+1+o[B+1]]]]%32,Ae=.6-w*w-T*T-E*E-D*D;Ae<0?l=0:(Ae*=Ae,l=Ae*Ae*this._dot4(i[Ee],w,T,E,D));let je=.6-de*de-I*I-fe*fe-pe*pe;je<0?u=0:(je*=je,u=je*je*this._dot4(i[De],de,I,fe,pe));let Me=.6-me*me-he*he-L*L-ge*ge;Me<0?d=0:(Me*=Me,d=Me*Me*this._dot4(i[V],me,he,L,ge));let H=.6-_e*_e-ve*ve-ye*ye-be*be;H<0?f=0:(H*=H,f=H*H*this._dot4(i[Oe],_e,ve,ye,be));let Ne=.6-xe*xe-Se*Se-R*R-z*z;return Ne<0?p=0:(Ne*=Ne,p=Ne*Ne*this._dot4(i[ke],xe,Se,R,z)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Ur=class e extends Tr{constructor(e,t,r=512,i=512,a,o,s){super(),this.width=r,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Lr(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new P(this.width,this.height,{type:f}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new _({defines:Object.assign({},Pr.defines),uniforms:p.clone(Pr.uniforms),vertexShader:Pr.vertexShader,fragmentShader:Pr.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Fe,this.normalMaterial.blending=0,this.pdMaterial=new _({defines:Object.assign({},zr.defines),uniforms:p.clone(zr.uniforms),vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new _({defines:Object.assign({},Fr.defines),uniforms:p.clone(Fr.uniforms),vertexShader:Fr.vertexShader,fragmentShader:Fr.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new _({uniforms:p.clone(wr.uniforms),vertexShader:wr.vertexShader,fragmentShader:wr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new _({uniforms:p.clone(Ir.uniforms),vertexShader:Ir.vertexShader,fragmentShader:Ir.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new Or(null),this._originalClearColor=new n,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),s!==void 0&&this.updatePdMaterial(s)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new o,this.depthTexture.format=S,this.depthTexture.type=oe,this.normalRenderTarget=new P(this.width,this.height,{minFilter:O,magFilter:O,type:f,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Br(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Hr,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new g(r,e,e,Le,Ee);return i.wrapS=D,i.wrapT=D,i.needsUpdate=!0,i}};Ur.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Wr={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Gr=class extends Tr{constructor(){super(),this.isOutputPass=!0,this.uniforms=p.clone(Wr.uniforms),this.material=new Ae({name:Wr.name,uniforms:this.uniforms,vertexShader:Wr.vertexShader,fragmentShader:Wr.fragmentShader}),this._fsQuad=new Or(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Me.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Kr={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new V(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},qr={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new n(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Jr=class e extends Tr{constructor(e,t=1,r,i){super(),this.strength=t,this.radius=r,this.threshold=i,this.resolution=e===void 0?new V(256,256):new V(e.x,e.y),this.clearColor=new n(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new P(a,o,{type:f}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new P(a,o,{type:f});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new P(a,o,{type:f});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),a=Math.round(a/2),o=Math.round(o/2)}let s=qr;this.highPassUniforms=p.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new V(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=p.clone(wr.uniforms),this.blendMaterial=new _({uniforms:this.copyUniforms,vertexShader:wr.vertexShader,fragmentShader:wr.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new n,this._oldClearAlpha=1,this._basic=new L,this._fsQuad=new Or(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new V(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new _({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new V(.5,.5)},direction:{value:new V(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new _({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Jr.BlurDirectionX=new V(1,0),Jr.BlurDirectionY=new V(0,1);var Yr={watercolor:{name:`水彩`,paper:`#fffaf0`,ink:`#4a3326`,paint:3,shade:.84,exposure:1.06,saturation:1.12,contrast:.92,warmth:.35,levels:0,bleed:.6,edge:.18,grain:.13,fine:.03,wash:.14,granulate:.22,hatch:0,wobble:.8,vignette:.06,stripes:!1,lines:[.08,.35]},pencil:{name:`色えんぴつ`,paper:`#fffcf4`,ink:`#3d3530`,paint:0,shade:.85,exposure:1.06,saturation:1,contrast:.92,warmth:.25,levels:0,bleed:.1,edge:.45,grain:.12,fine:.04,wash:0,granulate:0,hatch:.24,wobble:0,vignette:.05,stripes:!1,lines:[.1,.38]},pencil1:{name:`色えんぴつ（直す前）`,paper:`#fffcf4`,ink:`#3d3530`,paint:2,shade:.82,exposure:1.08,saturation:.95,contrast:.9,warmth:.25,levels:0,bleed:.1,edge:.5,grain:.16,fine:.08,wash:.03,granulate:0,hatch:.34,wobble:.5,vignette:.05,stripes:!0,lines:[.08,.35]},gouache:{name:`絵の具`,paper:`#fff8ec`,ink:`#2e2420`,paint:3.5,shade:.86,exposure:1.04,saturation:1.2,contrast:1,warmth:.3,levels:7,bleed:.2,edge:.45,grain:.08,fine:.02,wash:.05,granulate:.06,hatch:0,wobble:.4,vignette:.05,stripes:!1,lines:[.08,.35]}},Xr=e=>new n(e);function Zr(e){let t=e=>{let t=Xr(e);return new z(t.r,t.g,t.b)};return{tDiffuse:{value:null},resolution:{value:new V(1/1024,1/512)},paper:{value:t(e.paper)},ink:{value:t(e.ink)},paint:{value:e.paint},shade:{value:e.shade},exposure:{value:e.exposure},saturation:{value:e.saturation},contrast:{value:e.contrast},warmth:{value:e.warmth},levels:{value:e.levels},bleed:{value:e.bleed},edge:{value:e.edge},grain:{value:e.grain},fine:{value:e.fine},wash:{value:e.wash},granulate:{value:e.granulate},hatch:{value:e.hatch},stripes:{value:+!!e.stripes},lines:{value:new V(...e.lines)},wobble:{value:e.wobble},vignette:{value:e.vignette},tMask:{value:null},maskOn:{value:0}}}var Qr={name:`PictureBookShader`,uniforms:Zr(Yr.watercolor),vertexShader:`varying vec2 vUv;
void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`uniform sampler2D tDiffuse;
uniform sampler2D tMask;
uniform float maskOn;
uniform vec2 resolution;
uniform vec3 paper,ink;
uniform float paint,shade,exposure,saturation,contrast,warmth,levels,bleed,edge,grain,fine,wash,granulate,hatch,wobble,vignette,stripes;
uniform vec2 lines;
varying vec2 vUv;
// 雑音（sin を使わない形。スマホの精度でも模様が崩れない）
float hash(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
	return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),f.x),mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),f.x),f.y);}
float fbm(vec2 p){return .55*noise(p)+.3*noise(p*2.07+3.1)+.15*noise(p*4.13+7.7);}
float luma(vec3 c){return dot(c,vec3(.299,.587,.114));}
// 4 つの向き（左上・右上・左下・右下）の、それぞれ 4 か所（線形の補間で 4 画素ずつの平均）の平均と、明るさのばらつき
vec4 quadrant(vec2 uv,vec2 dir){
	vec2 s=resolution*paint;
	vec3 a=texture2D(tDiffuse,uv+dir*s*vec2(.5,.5)).rgb,b=texture2D(tDiffuse,uv+dir*s*vec2(1.5,.5)).rgb;
	vec3 c=texture2D(tDiffuse,uv+dir*s*vec2(.5,1.5)).rgb,d=texture2D(tDiffuse,uv+dir*s*vec2(1.5,1.5)).rgb;
	vec3 m=(a+b+c+d)*.25;float la=luma(a),lb=luma(b),lc=luma(c),ld=luma(d),lm=(la+lb+lc+ld)*.25;
	float v=(la-lm)*(la-lm)+(lb-lm)*(lb-lm)+(lc-lm)*(lc-lm)+(ld-lm)*(ld-lm);
	return vec4(m,v);
}
void main(){
	vec2 px=gl_FragCoord.xy;
	// 手描きのゆれ（ゆっくり変わる雑音で、読む所を少しずらす）
	vec2 uv=vUv;
	if(wobble>.001)uv+=(vec2(noise(px*.012),noise(px*.012+17.3))-.5)*2.0*wobble*resolution;
	vec4 src=texture2D(tDiffuse,uv);
	vec3 c=src.rgb;
	// キャラの形の型（2026-10-02 利用者「色鉛筆のフィールドでキャラは色鉛筆なしでやってみて」）：m＝キャラ（1）。
	// near＝キャラから 3 画素の内（境目の線は 2 画素はなれた明るさの差で引くので、キャラのまわりに太い線がにじんでいた → キャラの近くでは引かない）
	float m=0.0,near=0.0;
	if(maskOn>.5){
		vec2 r3=3.0*resolution;
		m=texture2D(tMask,vUv).r;
		near=max(m,max(max(texture2D(tMask,vUv+vec2(r3.x,0.0)).r,texture2D(tMask,vUv-vec2(r3.x,0.0)).r),max(texture2D(tMask,vUv+vec2(0.0,r3.y)).r,texture2D(tMask,vUv-vec2(0.0,r3.y)).r)));
	}
	// 色を同じ色のかたまりへ（4 つの向きのうち、ばらつきの小さい側ほど重く。輪郭はまたがない）
	if(paint>.01){
		vec4 q0=quadrant(uv,vec2(-1.0,-1.0)),q1=quadrant(uv,vec2(1.0,-1.0)),q2=quadrant(uv,vec2(-1.0,1.0)),q3=quadrant(uv,vec2(1.0,1.0));
		vec4 k=1.0/(vec4(q0.w,q1.w,q2.w,q3.w)*400.0+1e-3);k=k*k;
		c=(q0.rgb*k.x+q1.rgb*k.y+q2.rgb*k.z+q3.rgb*k.w)/(k.x+k.y+k.z+k.w);
	}
	// 色の境目（ならした色の、2 画素はなれた明るさの差。細かい模様では反応しにくい）
	vec2 o=2.0*resolution;
	float gx=luma(texture2D(tDiffuse,uv+vec2(o.x,0.0)).rgb)-luma(texture2D(tDiffuse,uv-vec2(o.x,0.0)).rgb);
	float gy=luma(texture2D(tDiffuse,uv+vec2(0.0,o.y)).rgb)-luma(texture2D(tDiffuse,uv-vec2(0.0,o.y)).rgb);
	float e=smoothstep(lines.x,lines.y,length(vec2(gx,gy)))*(1.0-near);
	// 色の調子：明るく・影を浅く・鮮やかに
	c=pow(clamp(c*exposure,0.0,1.0),vec3(shade));
	float l=luma(c);
	c=mix(vec3(l),c,saturation);
	c=(c-.5)*contrast+.5;
	c*=vec3(1.0+warmth*.05,1.0+warmth*.015,1.0-warmth*.06);
	if(levels>.5){vec3 q=floor(clamp(c,0.0,1.0)*levels+.5)/levels;c=mix(c,q,.55);}
	c=clamp(c,0.0,1.0);
	// 境目：絵の具のたまり（濃く・鮮やかに）と線
	c=mix(c,c*c*1.2,e*bleed);
	c=mix(c,ink,e*edge);
	// 紙：白を紙の色へ、紙の目・細かいざらつき・水彩のむら・色えんぴつの斜めの線（暗い所ほど）
	c*=paper;
	float n=fbm(px*.03);
	c*=1.0-grain*(n-.5)-fine*(hash(px)-.5);
	if(granulate>.001)c*=1.0-granulate*4.0*l*(1.0-l)*(noise(px*.4)-.5);
	if(wash>.001)c*=1.0-wash*(fbm(px*.0065+5.0)-.5);
	if(hatch>.001){
		if(stripes>.5){
			float strokes=.5+.5*sin((px.x+px.y)*.95+noise(px*.06)*5.0);   // きれいな縞（直す前の色えんぴつ）
			c*=1.0-hatch*(1.0-l)*smoothstep(.35,.8,strokes);
		}else{
			vec2 dpx=vec2(px.x+px.y,px.x-px.y)*.7071;   // 斜めの座標（線の向き・線を横切る向き）
			float strokes=noise(vec2(dpx.x*.13,dpx.y*.75));   // 線の向きには 8 画素ほど、横切る向きには細かい（えんぴつで軽く塗った跡。長くすると雨に見えた）
			c*=1.0-hatch*(1.0-l)*smoothstep(.55,.9,strokes);
		}
	}
	// 四すみを少し暗く
	float d=length(vUv-.5)*1.4;
	c*=1.0-vignette*smoothstep(.45,1.0,d);
	// キャラは仕上げをかけない（元の色のまま。ゆれも無し）
	vec3 plain=wobble>.001?texture2D(tDiffuse,vUv).rgb:src.rgb;
	gl_FragColor=vec4(clamp(mix(c,plain,m),0.0,1.0),src.a);
}`};async function $r(e,t){let n=new Sr,i=new Nt(e),a=i;a._setSize(256);let o=a._allocateTargets(),s=new _e,c=new he,l=new L({side:1,depthWrite:!1,depthTest:!1});for(let e of[a._blurMaterial,a._ggxMaterial])s.add(new R(a._lodMeshes[0].geometry,e));s.add(new R(c,l));let u=e.getRenderTarget(),d=e.toneMapping,f;e.setRenderTarget(o),e.toneMapping=0;try{f=Promise.all([e.compileAsync(n,new xe(90,1,.1,100)),e.compileAsync(s,new r)])}finally{e.setRenderTarget(u),e.toneMapping=d}await f;let p=i.fromScene(n,t).texture;return o.dispose(),c.dispose(),l.dispose(),n.dispose(),i.dispose(),p}var ei={0:1,1:0,2:2};function ti(e){let t=e,n=new me;return n.side=e.shadowSide??ei[e.side],n.alphaMap=t.alphaMap??null,n.alphaTest=e.alphaToCoverage===!0?.5:e.alphaTest,n.map=t.map??null,n.clipShadows=e.clipShadows,n.clippingPlanes=e.clippingPlanes??null,n.clipIntersection=e.clipIntersection,n.displacementMap=t.displacementMap??null,n.displacementScale=t.displacementScale??1,n.displacementBias=t.displacementBias??0,n.wireframe=t.wireframe??!1,n}function ni(t,n){let r;if(t.isSkinnedMesh){let e=t,i=new h(t.geometry,n);i.bind(e.skeleton,e.bindMatrix),i.bindMode=e.bindMode,r=i}else if(t.isInstancedMesh){let i=t,a=new e(t.geometry,n,1);i.instanceColor&&(a.instanceColor=new se(new Float32Array(3),3)),a.morphTexture=i.morphTexture,r=a}else r=new R(t.geometry,n);return r.morphTargetInfluences=t.morphTargetInfluences,r.castShadow=t.castShadow,r.receiveShadow=t.receiveShadow,r.frustumCulled=!1,r}function ri(e){let t=new B,n=new Set;return e.traverseVisible(e=>{let r=e;if(!r.isMesh||!e.castShadow)return;let i=Array.isArray(r.material)?r.geometry.groups.map(e=>r.material[e.materialIndex??0]):[r.material];for(let e of i){if(!e||!e.visible)continue;let i=ti(e),a=r.geometry,o=[r.isSkinnedMesh,r.isInstancedMesh,!!r.instanceColor,!!r.morphTexture,i.side,i.alphaTest>0,!!i.map,!!i.alphaMap,!!i.displacementMap,i.wireframe,Object.keys(a.attributes).sort().join(`+`),Object.keys(a.morphAttributes).sort().join(`+`),a.morphTargetsRelative].join(`|`);if(n.has(o)){i.dispose();continue}n.add(o),t.add(ni(r,i))}}),t}function ii(e){let n=e;if(!n||!n.isTexture||!(n.isCubeTexture||n.mapping===306))return;let r=jt.backgroundCube,i=new _({name:`BackgroundCubeMaterial`,uniforms:p.clone(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1});i.uniforms.envMap.value=n,Object.defineProperty(i,"envMap",{get(){return this.uniforms.envMap.value}}),i.toneMapped=Me.getTransfer(n.colorSpace)!==t;let a=new he(1,1,1);a.deleteAttribute(`normal`),a.deleteAttribute(`uv`);let o=new R(a,i);return o.frustumCulled=!1,o}var ai={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function oi(e,t){let n=e;if(n._outputColorSpace===t.outputColorSpace&&n._toneMapping===t.toneMapping)return;n._outputColorSpace=t.outputColorSpace,n._toneMapping=t.toneMapping;let r={};Me.getTransfer(t.outputColorSpace)===`srgb`&&(r.SRGB_TRANSFER=``);let i=ai[t.toneMapping];i&&(r[i]=``),e.material.defines=r,e.material.needsUpdate=!0}var si=new r(-1,1,1,-1,0,1),ci=class extends Ur{setSize(e,t){let n=Math.min(.5,960/e);super.setSize(Math.max(1,Math.round(e*n)),Math.max(1,Math.round(t*n)))}render(e,t,n,r,i){this.setGBuffer(n.depthTexture,void 0),this.depthRenderMaterial.uniforms.tDepth.value=n.depthTexture,super.render(e,t,n,r,i)}},li={name:`SharpenShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new V(1/1024,1/512)},sharpness:{value:{sharpness:.5}.sharpness}},vertexShader:`varying vec2 vUv;
void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform float sharpness;
varying vec2 vUv;
void main(){
	vec4 center=texture2D(tDiffuse,vUv);
	vec3 e=center.rgb;
	vec3 b=texture2D(tDiffuse,vUv+vec2(0.0,-resolution.y)).rgb;
	vec3 d=texture2D(tDiffuse,vUv+vec2(-resolution.x,0.0)).rgb;
	vec3 f=texture2D(tDiffuse,vUv+vec2(resolution.x,0.0)).rgb;
	vec3 h=texture2D(tDiffuse,vUv+vec2(0.0,resolution.y)).rgb;
	vec3 low=min(min(min(d,e),min(f,b)),h);
	vec3 high=max(max(max(d,e),max(f,b)),h);
	vec3 amount=sqrt(clamp(min(low,1.0-high)/max(high,vec3(1e-4)),0.0,1.0));
	vec3 weight=amount*(-1.0/mix(8.0,5.0,sharpness));
	vec3 color=(b*weight+d*weight+f*weight+h*weight+e)/(1.0+4.0*weight);
	gl_FragColor=vec4(clamp(color,0.0,1.0),center.a);
}`};function ui(e,t,n){let r=new ci(e,t,16,16);return r.blendIntensity=1,r.updateGtaoMaterial({radius:1.15,thickness:1,distanceExponent:1.5,distanceFallOff:1,scale:1.4,samples:n?4:8,screenSpaceRadius:!1}),r.updatePdMaterial({samples:n?4:8,rings:2,radius:4,depthPhi:1,normalPhi:3}),r}function di(){let e=new Jr(new V(16,16),.2,.45,1.25);return e.materialHighPassFilter.fragmentShader=e.materialHighPassFilter.fragmentShader.replace(`vec4 texel = texture2D( tDiffuse, vUv );`,`vec4 texel = texture2D( tDiffuse, vUv );
     texel.rgb=vec3(texel.r>=0.0?min(texel.r,16.0):0.0,
                    texel.g>=0.0?min(texel.g,16.0):0.0,
                    texel.b>=0.0?min(texel.b,16.0):0.0);`),e}function fi(e){let t=e;return t.isMesh?[t.material].flat().some(e=>!e.transparent&&!e.isShaderMaterial):!1}var pi=e=>e.isMesh&&(/Line/.test(e.name)||[e.material].flat().some(e=>/Line/.test(e.name))),mi=e=>!!(e.isMesh||e.isLine||e.isPoints||e.isSprite),hi=class{renderer;scene;camera;mobile;composer;ao;bloom;sharpen;book;bookStyle=`off`;maskRoots=()=>[];mask;maskScene=Object.assign(new _e,{overrideMaterial:new L({color:16777215,name:`Fighter mask`})});antialias;render3d;output=new Gr;constructor(e,t,n,r=!1,i={}){this.renderer=e,this.scene=t,this.camera=n,this.mobile=r;let a=i.ambientOcclusion!==!1,s=i.bloom!==!1;this.composer=new Mr(e);for(let e of[this.composer.renderTarget1,this.composer.renderTarget2])e.depthTexture=new o(1,1,ce);this.antialias=new kr(Kr),this.render3d=new Nr(t,n),this.composer.addPass(this.render3d),a&&(this.ao=ui(t,n,r),this.composer.addPass(this.ao)),s&&(this.bloom=di(),this.composer.addPass(this.bloom)),this.composer.addPass(this.output),this.composer.addPass(this.antialias),e.info.autoReset=!1}setAmbientOcclusion(e){e&&!this.ao&&(this.ao=ui(this.scene,this.camera,this.mobile),this.composer.insertPass(this.ao,this.composer.passes.indexOf(this.render3d)+1),this.sizePasses()),this.ao&&(this.ao.enabled=e)}setBloom(e){e!==!!this.bloom&&(e?(this.bloom=di(),this.composer.insertPass(this.bloom,this.composer.passes.indexOf(this.output)),this.sizePasses()):this.bloom&&=(this.composer.removePass(this.bloom),this.bloom.dispose(),void 0))}setSharpen(e){e!==!!this.sharpen&&(e?(this.sharpen=new kr(li),this.book?this.composer.insertPass(this.sharpen,this.composer.passes.indexOf(this.book)):this.composer.addPass(this.sharpen),this.sizePasses()):this.sharpen&&=(this.composer.removePass(this.sharpen),this.sharpen.dispose(),void 0))}setBook(e){if(this.bookStyle=e,e===`off`){this.book&&=(this.composer.removePass(this.book),this.book.dispose(),void 0),this.mask?.dispose(),this.mask=void 0;return}if(!this.book)this.book=new kr({...Qr,uniforms:Zr(Yr[e])}),this.composer.addPass(this.book);else for(let[t,n]of Object.entries(Zr(Yr[e])))[`tDiffuse`,`resolution`,`tMask`,`maskOn`].includes(t)||(this.book.uniforms[t].value=n.value);this.sizePasses()}setAntialias(e){this.antialias.enabled=e}width=1;height=1;resize(e,t){this.width=e,this.height=t,this.composer.setSize(e,t),this.sizePasses()}sizePasses(){let e=this.renderer.getPixelRatio(),t=1/(this.width*e),n=1/(this.height*e);this.antialias.uniforms.resolution.value.set(t,n),this.sharpen?.uniforms.resolution.value.set(t,n),this.book?.uniforms.resolution.value.set(t,n)}render(e){this.renderer.info.reset(),this.renderMask(),this.composer.render(e)}screenQuads(){let e=this.composer.passes.filter(e=>e.enabled),t=e[e.length-1],n=[];for(let r of e){if(r===this.ao&&this.ao){let e=this.composer.readBuffer,t=this.output._fsQuad._mesh.geometry;this.ao.setGBuffer(e.depthTexture,void 0),this.ao.depthRenderMaterial.uniforms.tDepth.value=e.depthTexture;for(let e of[this.ao.gtaoMaterial,this.ao.pdMaterial,this.ao.copyMaterial,this.ao.blendMaterial])n.push({mesh:new R(t,e),toScreen:!1});continue}if(r!==this.output&&!(r instanceof kr))continue;r===this.output&&oi(this.output,this.renderer);let e=r._fsQuad?._mesh;e&&n.push({mesh:e,toScreen:this.composer.renderToScreen&&r===t})}return n}renderMask(){let e=this.book;if(!e)return;let t=this.maskRoots().filter(e=>e.visible&&e.parent);if(!t.length){e.uniforms.maskOn.value=0;return}let r=this.renderer.getPixelRatio(),i=Math.max(1,Math.floor(this.width*r)),a=Math.max(1,Math.floor(this.height*r));this.mask?(this.mask.width!==i||this.mask.height!==a)&&this.mask.setSize(i,a):this.mask=new P(i,a,{depthBuffer:!1,stencilBuffer:!1});let o=[],s=[];for(let e of t){let t=!1;e.traverse(e=>{e.visible&&pi(e)&&fi(e)&&(t=!0)}),e.traverse(e=>{mi(e)&&(!fi(e)||t&&!pi(e))&&(o.push(e),s.push(e.layers.mask),e.layers.mask=0)})}let c=t.map(e=>e.parent),l=this.renderer.getRenderTarget(),u=this.renderer.getClearColor(new n),d=this.renderer.getClearAlpha();for(let e of t)this.maskScene.add(e);try{this.renderer.setRenderTarget(this.mask),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!1,!1),this.renderer.render(this.maskScene,this.camera)}finally{t.forEach((e,t)=>c[t].add(e)),o.forEach((e,t)=>{e.layers.mask=s[t]}),this.renderer.setRenderTarget(l),this.renderer.setClearColor(u,d)}e.uniforms.tMask.value=this.mask.texture,e.uniforms.maskOn.value=1}warmMask(){if(!this.book)return;let e=[];for(let t of this.maskRoots())t.traverse(t=>{e.push(t)});let t=e.map(e=>e.visible),n=e.map(e=>e.frustumCulled);e.forEach(e=>{e.visible=!0,e.frustumCulled=!1});try{this.renderMask()}finally{e.forEach((e,r)=>{e.visible=t[r],e.frustumCulled=n[r]})}}},gi={colosseum:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!0,mapPointLights:!0,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}},royal:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!0,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0},mobileBefore:{pixelRatio:1.275,shadow:`hz30`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0}},school:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!1,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}},dojo:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!1,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}}};function _i(e,t){return gi[e][t?`mobile`:`pc`]}function vi(e,t){return t?gi[e].mobileBefore:void 0}var yi={environment:1.25,sun:1.25,probe:[3.8135,1.763,1.6363,.279,.2171,1.0862,1.2137,-.3469,-.6344],pixelPoints:[`05_Mortar_and_recesses`,`03_Pale_arch_and_coping`]},bi={mapLightProbe:{value:yi.probe.map(e=>new z(e,e,e))},mapLightSun:{value:yi.sun}};function xi(e){return e.isMeshStandardMaterial===!0&&!e.transparent}function Si(e,t,n){Object.assign(e.uniforms,bi,t);let r=[n.points===`vertex`?`MAP_LIGHT_POINTS`:``,n.shadowOnce?`MAP_LIGHT_SHADOW_ONCE`:``,n.metalMap?`MAP_LIGHT_METAL_MAP`:``,n.sheen?`MAP_LIGHT_SHEEN`:``,n.baked?`MAP_LIGHT_BAKED\n#define MAP_LIGHT_BAKED_TEXELS ${n.baked.texels}`:``].filter(Boolean).map(e=>`#define ${e}\n`).join(``);e.vertexShader=r+e.vertexShader.replace(`#include <common>`,`#include <common>
#include <lights_pars_begin>
uniform float mapLightEnvironment;
uniform vec3 mapLightProbe[ 9 ];
varying vec3 vMapLights;
varying vec3 vMapEnv;
varying vec3 vMapKey;
#ifdef MAP_LIGHT_BAKED
	uniform highp sampler2D mapLightBaked;
	uniform int mapLightBakedWidth;
	uniform int mapLightBakedVertices;
	#ifdef USE_INSTANCING
		attribute float mapLightInstance;
	#endif
#endif`).replace(`#include <fog_vertex>`,`#include <fog_vertex>
	#ifdef MAP_LIGHT_BAKED
	#ifdef USE_INSTANCING
		int mapBakedIndex = ( int( mapLightInstance + 0.5 ) * mapLightBakedVertices + gl_VertexID ) * MAP_LIGHT_BAKED_TEXELS;
	#else
		int mapBakedIndex = gl_VertexID * MAP_LIGHT_BAKED_TEXELS;
	#endif
	#ifdef DOUBLE_SIDED
		if ( dot( normalize( transformedNormal ), mvPosition.xyz ) > 0.0 ) mapBakedIndex += 1;
	#endif
	vec4 mapBaked = texelFetch( mapLightBaked, ivec2( mapBakedIndex % mapLightBakedWidth, mapBakedIndex / mapLightBakedWidth ), 0 );
	vMapLights = mapBaked.rgb;
	vMapEnv = vec3( 0.0 );
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
		vMapKey = max( mapBaked.a, 0.0 ) * directionalLights[ 0 ].color;
	#else
		vMapKey = vec3( 0.0 );
	#endif
	#else
	vec3 mapNormal = normalize( transformedNormal );
	#ifdef DOUBLE_SIDED
		if ( dot( mapNormal, mvPosition.xyz ) > 0.0 ) mapNormal = - mapNormal;
	#endif
	vMapLights = getAmbientLightIrradiance( ambientLightColor );
	vMapKey = vec3( 0.0 );
	#if NUM_HEMI_LIGHTS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			vMapLights += getHemisphereLightIrradiance( hemisphereLights[ i ], mapNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHTS > 0
		IncidentLight mapDirect;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
			getDirectionalLightInfo( directionalLights[ i ], mapDirect );
			#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
				vMapKey += saturate( dot( mapNormal, mapDirect.direction ) ) * mapDirect.color;
			#else
				vMapLights += saturate( dot( mapNormal, mapDirect.direction ) ) * mapDirect.color;
			#endif
		}
		#pragma unroll_loop_end
	#endif
	#if defined( MAP_LIGHT_POINTS ) && NUM_POINT_LIGHTS > 0
		IncidentLight mapPoint;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
			getPointLightInfo( pointLights[ i ], mvPosition.xyz, mapPoint );
			vMapLights += saturate( dot( mapNormal, mapPoint.direction ) ) * mapPoint.color;
		}
		#pragma unroll_loop_end
	#endif
	vMapEnv = mapLightEnvironment * getLightProbeIrradiance( mapLightProbe, mapNormal );
	#endif`).replace(`#include <envmap_vertex>`,``),e.fragmentShader=r+(n.points===`pixel`?`#define MAP_LIGHT_PIXEL_POINTS
`:``)+e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float mapLightMetal;
uniform float mapLightSun;
#ifdef MAP_LIGHT_SHEEN
	uniform float mapLightSheen;
#endif
#if defined( MAP_LIGHT_METAL_MAP ) && defined( USE_MAP )
	uniform sampler2D mapLightMetalMap;
#endif
varying vec3 vMapLights;
varying vec3 vMapEnv;
varying vec3 vMapKey;`).replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#if defined( MAP_LIGHT_SHADOW_ONCE ) && defined( USE_SHADOWMAP ) && defined( SHADOWMAP_TYPE_PCF ) && NUM_DIR_LIGHT_SHADOWS > 0
	float mapLightShadow() {
		float shadow = 1.0;
		DirectionalLightShadow mapShadowLight;
		vec4 mapShadowCoord;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			mapShadowLight = directionalLightShadows[ i ];
			mapShadowCoord = vDirectionalShadowCoord[ i ];
			mapShadowCoord.xyz /= mapShadowCoord.w;
			mapShadowCoord.z += mapShadowLight.shadowBias;
			if ( receiveShadow && mapShadowCoord.x >= 0.0 && mapShadowCoord.x <= 1.0 && mapShadowCoord.y >= 0.0 && mapShadowCoord.y <= 1.0 && mapShadowCoord.z <= 1.0 ) shadow *= mix( 1.0, texture( directionalShadowMap[ i ], mapShadowCoord.xyz ), mapShadowLight.shadowIntensity );
		}
		#pragma unroll_loop_end
		return shadow;
	}
#else
	float mapLightShadow() { return getShadowMask(); }
#endif`).replace(`#include <normal_fragment_begin>`,``).replace(`#include <normal_fragment_maps>`,``).replace(`#include <lights_fragment_begin>`,`float mapDiffuse = mapLightMetal;
	#if defined( MAP_LIGHT_METAL_MAP ) && defined( USE_MAP )
		mapDiffuse *= texture2D( mapLightMetalMap, vMapUv ).b;
	#endif
	mapDiffuse = 1.0 - mapDiffuse;
	float mapShadow = mapLightShadow();
	#ifdef MAP_LIGHT_BAKED
		reflectedLight.indirectDiffuse += vMapLights * BRDF_Lambert( material.diffuseColor );
	#else
		reflectedLight.indirectDiffuse += ( vMapLights * mapDiffuse + vMapEnv ) * BRDF_Lambert( material.diffuseColor );
	#endif
	reflectedLight.directDiffuse += vMapKey * ( mapLightSun * mapDiffuse * mapShadow ) * BRDF_Lambert( material.diffuseColor );
	#ifdef MAP_LIGHT_SHEEN
		reflectedLight.indirectDiffuse += ( vMapEnv + vMapKey * ( mapLightSun * mapShadow ) ) * ( mapLightSheen * RECIPROCAL_PI );
	#endif
	#if defined( MAP_LIGHT_PIXEL_POINTS ) && NUM_POINT_LIGHTS > 0
		vec3 mapPixelNormal = normalize( vNormal );
		#ifdef DOUBLE_SIDED
			mapPixelNormal *= gl_FrontFacing ? 1.0 : - 1.0;
		#endif
		IncidentLight mapPixelPoint;
		vec3 mapPixelLights = vec3( 0.0 );
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
			getPointLightInfo( pointLights[ i ], - vViewPosition, mapPixelPoint );
			mapPixelLights += saturate( dot( mapPixelNormal, mapPixelPoint.direction ) ) * mapPixelPoint.color;
		}
		#pragma unroll_loop_end
		reflectedLight.directDiffuse += mapPixelLights * mapDiffuse * BRDF_Lambert( material.diffuseColor );
	#endif`).replace(`#include <lights_fragment_maps>`,``).replace(`#include <lights_fragment_end>`,``).replace(`#include <envmap_fragment>`,``)}var Ci=e=>`map-light-v3:${e.points}:${e.shadowOnce?1:5}:${e.metalMap?`metal-map`:`metal`}:${e.sheen?`sheen`:``}:${e.baked?`baked${e.baked.texels}`:``}`,wi=(e,t)=>yi.environment*(e.envMap?e.envMapIntensity:t);function Ti(e,t,n,r){let i=new je({name:e.name,color:e.color,map:e.map,vertexColors:e.vertexColors,emissive:e.emissive,emissiveIntensity:e.emissiveIntensity,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,depthWrite:e.depthWrite,depthTest:e.depthTest}),a={mapLightEnvironment:{value:wi(e,t)},mapLightMetal:{value:e.metalness},...r?{mapLightBaked:{value:r.texture},mapLightBakedWidth:{value:r.width},mapLightBakedVertices:{value:r.vertices}}:{}},o={...n,metalMap:!1,...r?{baked:{texels:r.texels}}:{}};return i.onBeforeCompile=e=>Si(e,a,o),i.customProgramCacheKey=()=>Ci(o),i.userData.mapLight=!0,r&&(i.userData.baked=!0),i.userData.environment=a.mapLightEnvironment,i.userData.sun=bi.mapLightSun,i}function Ei(e,t,n){let r=new je({name:e.name,map:e.map,vertexColors:e.vertexColors,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,transparent:e.transparent,opacity:e.opacity,alphaHash:e.alphaHash,depthWrite:e.depthWrite,depthTest:e.depthTest});r.color=e.color,r.emissive=e.emissive,Object.defineProperty(r,"emissiveIntensity",{configurable:!0,get:()=>e.emissiveIntensity,set:t=>{e.emissiveIntensity=t}});let i=!!(e.map&&e.metalnessMap),a={mapLightEnvironment:{value:Di.environment*(e.envMap?e.envMapIntensity:t)},mapLightMetal:{value:e.metalness},...i?{mapLightMetalMap:{value:e.metalnessMap}}:{},mapLightSun:Oi.sun,mapLightSheen:Oi.sheen},o={...n,metalMap:i,sheen:!0};return r.onBeforeCompile=e=>Si(e,a,o),r.customProgramCacheKey=()=>Ci(o),r.userData.fighterLight=!0,r.userData.source=e,r.userData.environment=a.mapLightEnvironment,r.userData.sun=Oi.sun,r.userData.sheen=Oi.sheen,r}var Di={keepRoles:[`paladin`],keepMetalness:.5,environment:.95,sun:.85,sheen:.03},Oi={sun:{value:Di.sun},sheen:{value:Di.sheen}};function ki(e,t){return Di.keepRoles.includes(t)||e.metalness>=Di.keepMetalness&&!e.metalnessMap}function Ai(e,t,n){return!n||e.transparent||t<1}function ji(e,t,n){return t?n&&yi.pixelPoints.includes(e.name)?`pixel`:`vertex`:`none`}var Mi={width:2048};function Ni(e,t){let r={ambient:new n(0,0,0),hemispheres:[],fills:[],points:[]},i=0;return e.updateMatrixWorld(),e.traverseVisible(e=>{let n=e;if(!n.isLight)return;let a=n.color.clone().multiplyScalar(n.intensity);if(n.isAmbientLight)r.ambient.add(a);else if(n.isHemisphereLight){let e=n;r.hemispheres.push({sky:a,ground:e.groundColor.clone().multiplyScalar(e.intensity),direction:new z().setFromMatrixPosition(e.matrixWorld).normalize()})}else if(n.isDirectionalLight){let e=n,o=new z().setFromMatrixPosition(e.target.matrixWorld),s=new z().setFromMatrixPosition(e.matrixWorld).sub(o).normalize();t&&e.castShadow?(r.sun={color:a,direction:s},i++):r.fills.push({color:a,direction:s})}else if(n.isPointLight){let e=n;r.points.push({color:a,position:new z().setFromMatrixPosition(e.matrixWorld),distance:e.distance,decay:e.decay})}}),i>1?void 0:r}var Pi=yi.probe;function Fi(e,t,n,r,i,a,o,s,c,l){let u=e.ambient.r,d=e.ambient.g,f=e.ambient.b;for(let t of e.hemispheres){let e=.5*(n*t.direction.x+r*t.direction.y+i*t.direction.z)+.5;u+=t.ground.r+(t.sky.r-t.ground.r)*e,d+=t.ground.g+(t.sky.g-t.ground.g)*e,f+=t.ground.b+(t.sky.b-t.ground.b)*e}for(let t of e.fills){let e=Math.min(1,Math.max(0,n*t.direction.x+r*t.direction.y+i*t.direction.z));u+=t.color.r*e,d+=t.color.g*e,f+=t.color.b*e}if(t.points)for(let t of e.points){let e=t.position.x-a,c=t.position.y-o,l=t.position.z-s,p=Math.hypot(e,c,l);if(p===0)continue;let m=1/Math.max(p**+t.decay,.01);if(t.distance>0){let e=Math.min(1,Math.max(0,1-(p/t.distance)**4));m*=e*e}let h=Math.min(1,Math.max(0,(n*e+r*c+i*l)/p))*m;u+=t.color.r*h,d+=t.color.g*h,f+=t.color.b*h}let p=t.environment*(Pi[0]*.886227+Pi[1]*2*.511664*r+Pi[2]*2*.511664*i+Pi[3]*2*.511664*n+Pi[4]*2*.429043*n*r+Pi[5]*2*.429043*r*i+Pi[6]*(.743125*i*i-.247708)+Pi[7]*2*.429043*n*i+Pi[8]*.429043*(n*n-r*r)),m=1-t.metal;c[l]=u*m+p,c[l+1]=d*m+p,c[l+2]=f*m+p,c[l+3]=e.sun?n*e.sun.direction.x+r*e.sun.direction.y+i*e.sun.direction.z:0}function Ii(e,t,n,r,i=!1,a){let o=e.geometry,s=o.getAttribute(`position`),c=o.getAttribute(`normal`),l=e.isInstancedMesh===!0,u=a??(l?e.instanceMatrix.array:void 0),d=l?a?a.length/16:e.count:1,f=s.count,p=r?2:1,m=new Float32Array(f*d*p*4);e.updateWorldMatrix(!0,!1);let h=new Te,g=new Te,_=new fe,v=h.elements,y=_.elements,b=i?-1:1;for(let i=0;i<d;i++){l?(g.fromArray(u,i*16),h.multiplyMatrices(e.matrixWorld,g)):h.copy(e.matrixWorld),_.getNormalMatrix(h);for(let e=0;e<f;e++){let a=s.getX(e),o=s.getY(e),l=s.getZ(e),u=c.getX(e),d=c.getY(e),h=c.getZ(e),g=v[0]*a+v[4]*o+v[8]*l+v[12],_=v[1]*a+v[5]*o+v[9]*l+v[13],x=v[2]*a+v[6]*o+v[10]*l+v[14],S=y[0]*u+y[3]*d+y[6]*h,C=y[1]*u+y[4]*d+y[7]*h,w=y[2]*u+y[5]*d+y[8]*h,T=Math.hypot(S,C,w)||1;S*=b/T,C*=b/T,w*=b/T;let E=(i*f+e)*p*4;Fi(t,n,S,C,w,g,_,x,m,E),r&&Fi(t,n,-S,-C,-w,g,_,x,m,E+4)}}return{data:m,texels:p,vertices:f,count:d}}function Li(e,t=Mi.width){let n=e.vertices*e.count*e.texels,r=Math.max(1,Math.ceil(n/t)),i=new Float32Array(t*r*4);return i.set(e.data),{data:i,height:r}}function Ri(e,t=Mi.width){let{data:n,height:r}=Li(e,t),i=new g(n,t,r,Le,A);return i.internalFormat=`RGBA16F`,i.minFilter=i.magFilter=O,i.generateMipmaps=!1,i.needsUpdate=!0,i.onUpdate=()=>{i.image.data=null},i}var zi={margin:2},Bi=new s,Vi=new Te;function Hi(e){return Bi.setFromProjectionMatrix(Vi.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse))}var Ui=class{mesh;total;spheres;original;shown;constructor(e,t=zi.margin){this.mesh=e,this.total=e.count,this.original=e.instanceMatrix.array.slice(0,this.total*16),this.shown=[...Array(this.total).keys()],e.geometry.boundingSphere||e.geometry.computeBoundingSphere();let n=e.geometry.boundingSphere,r=new Te,i=new Te;e.updateWorldMatrix(!0,!1),this.spheres=this.shown.map(a=>{i.multiplyMatrices(e.matrixWorld,r.fromArray(this.original,a*16));let o=n.clone().applyMatrix4(i);return o.radius+=t,o})}pick(e,t){let n=[];for(let r=0;r<this.total;r++)(!t||t(r))&&(!e||e.intersectsSphere(this.spheres[r]))&&n.push(r);return n}show(e){if(e.length===this.shown.length&&e.every((e,t)=>e===this.shown[t]))return!1;let t=this.mesh.instanceMatrix.array;e.forEach((e,n)=>t.set(this.original.subarray(e*16,e*16+16),n*16)),this.mesh.count=e.length,this.mesh.instanceMatrix.clearUpdateRanges(),this.mesh.instanceMatrix.addUpdateRange(0,e.length*16),this.mesh.instanceMatrix.needsUpdate=!0;let n=this.mesh.geometry.getAttribute(`mapLightInstance`);return n&&(e.forEach((e,t)=>{n.array[t]=e}),n.clearUpdateRanges(),n.addUpdateRange(0,e.length),n.needsUpdate=!0),this.shown=[...e],!0}showAll(){return this.show([...Array(this.total).keys()])}get count(){return this.shown.length}},Wi={height:2.8,base:`#ffc12e`,top:`#ffffff`,sheets:[-.1,.1],groundWidth:1.2,rise:.22,fade:.45,gain:.8},Gi=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ki=`
uniform vec3 uBase;
uniform vec3 uTop;
uniform float uTime;
uniform float uSeed;
uniform float uFade;
uniform float uGain;
uniform float uGround;
varying vec2 vUv;
void main() {
  float u = vUv.x, v = vUv.y;
  if (uGround > .5) {
    // 床の帯：真ん中の線が明るく、厚み方向へ柔らかく消える。長さ方向の両端も消す。
    float across = 1.0 - abs(u * 2.0 - 1.0);
    float along = smoothstep(0.0, .1, v) * smoothstep(1.0, .9, v);
    float glow = pow(across, 3.0) * .55 + pow(across, 14.0) * .9;
    gl_FragColor = vec4(uBase, glow * along * uFade);
    return;
  }
  // 足元の黄色から、上へ行くほど白へ。
  vec3 colour = mix(uBase, uTop, smoothstep(.02, .8, v));
  // 縦の光の柱。太い揺らぎ（column）と、細く明るい筋（fine）をゆっくり動かす。
  float column = .5 + .5 * sin(u * 31.0 + uSeed + uTime * 1.1) * sin(u * 13.0 + uSeed * .5 - uTime * .7);
  float fine = pow(max(0.0, sin(u * 57.0 + uSeed * 1.7 + uTime * 1.9)), 8.0);
  // 上の端は柱ごとに届く高さが違う（炎のように揃わない）。平らな板に見せないため。
  float reach = .55 + .4 * column + .1 * fine;
  float top = 1.0 - smoothstep(reach * .55, reach, v);
  // 左右の端は柔らかく消す。
  float ends = smoothstep(0.0, .18, u) * smoothstep(1.0, .82, u);
  // 下から上へ昇る光の帯。
  float lift = fract(v * 1.5 - uTime * .45 + uSeed * .13 + column * .2);
  float wave = smoothstep(0.0, .06, lift) * (1.0 - smoothstep(.06, .35, lift));
  // 足元ほど濃い。地面に接する線はいちばん明るくして、立っている場所を見せる。
  float body = mix(.85, .25, v);
  float rim = exp(-v * v * 500.0);
  float a = (body * (.45 + .55 * column) + fine * .5 * (1.0 - v) + wave * .25 + rim * 1.1) * ends * top;
  gl_FragColor = vec4(colour, a * uFade * uGain);
}`;function qi(e=!1,t=0){let r=Wi;return new _({vertexShader:Gi,fragmentShader:Ki,uniforms:{uBase:{value:new n(r.base)},uTop:{value:new n(r.top)},uTime:{value:0},uSeed:{value:t},uFade:{value:0},uGain:{value:r.gain},uGround:{value:+!!e}},transparent:!0,depthWrite:!1,side:2,blending:2})}function Ji(e,t,n){let r=Wi,i=new B,a=t%17*1.37;for(let t of r.sheets){let n=new R(new ve(e,r.height).translate(0,r.height/2,0).rotateY(Math.PI/2),qi(!1,a+t*9));n.position.x=t,i.add(n)}let o=new R(new ve(r.groundWidth,e).rotateX(-Math.PI/2),qi(!0,a));return o.position.y=.03,i.add(o),i.userData.born=n,i}var Yi=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function Xi(e,t,n){let r=Wi,i=tt(t),a=Yi((n-e.userData.born)/r.rise),o=Math.max(0,Math.min(1,t.life/r.fade));e.position.set(t.pos.x,0,t.pos.z),e.rotation.y=Math.atan2(-i.z,i.x);for(let t of e.children){let e=t,r=e.material,i=r.uniforms.uGround.value>.5;i||(e.scale.y=Math.max(.001,a)),r.uniforms.uTime.value=n,r.uniforms.uFade.value=i?o*a:o}}var Zi={flare:`#ffffff`,glow:`#fff0c2`,cross:`#fff6d8`,streak:`#ffe39a`,ember:`#ffc44f`,ring:`#fff0c4`,streaks:9,embers:14},Qi=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function $i(e){let t=Math.abs(Math.floor(e))%233280+1;return()=>(t=(t*9301+49297)%233280,t/233280)}function ea(e){return new L({color:e,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:2})}function ta(e){let t=new B,n=$i(e);t.name=`clash-spark`;let r=new Ne(1,4),i=new Ne(1,28),a=new H(.9,1,48),o=(e,n,r,i)=>{let a=new R(e,ea(n));a.renderOrder=r,a.userData.clash=i,t.add(a)};o(a,Zi.ring,20,{kind:`ring`,angle:0,length:1,speed:1});let s=(n()-.5)*.5;for(let e=0;e<Zi.streaks;e++)o(r,Zi.streak,21,{kind:`streak`,angle:(e+n()*.8)/Zi.streaks*Math.PI*2,length:.45+n()*.6,speed:1});for(let e=0;e<Zi.embers;e++)o(r,Zi.ember,22,{kind:`ember`,angle:n()*Math.PI*2,length:1,speed:.75+n()*.7});return o(i,Zi.glow,22,{kind:`glow`,angle:0,length:1,speed:1}),o(i,Zi.flare,23,{kind:`flare`,angle:0,length:1,speed:1}),o(r,Zi.cross,24,{kind:`cross`,angle:s,length:1.3,speed:1}),o(r,Zi.cross,24,{kind:`cross`,angle:s+Math.PI/2,length:.95,speed:1}),t}function na(e,t,n,r,i=0){e.rotation.z=t-Math.PI/2,e.scale.set(r,n/2,1),e.position.set(Math.cos(t)*(i+n/2),Math.sin(t)*(i+n/2),0)}function ra(e,t,n,r){let i=Math.min(1,Math.max(0,t)),a=n;e.quaternion.copy(r.quaternion);let o=.7+.3*Qi(i/.25),s=1-.65*i;for(let t of e.children){let e=t,n=e.userData.clash;if(n.kind===`flare`)e.scale.setScalar(a*.26*(1-.5*Qi(i/.35))),e.material.opacity=1-Qi(i/.35);else if(n.kind===`glow`)e.scale.setScalar(a*.55*(1-.4*Qi(i/.5))),e.material.opacity=.5*(1-Qi(i/.5));else if(n.kind===`cross`)e.rotation.z=n.angle,e.position.set(0,0,0),e.scale.set(a*n.length*(1-.35*i),a*.055*s,1),e.material.opacity=1-Qi(i/.65);else if(n.kind===`streak`)na(e,n.angle,a*n.length*o,a*.035*s,a*.08),e.material.opacity=(1-i)**1.3;else if(n.kind===`ember`){let t=a*1.2*n.speed*(1-(1-i)*(1-i)),r=a*.6*i*i,o=Math.cos(n.angle)*t,s=Math.sin(n.angle)*t-r;e.rotation.z=n.angle-Math.PI/2,e.position.set(o,s,0),e.scale.set(a*.022*(1-.5*i),a*.09*(1-.4*i),1),e.material.opacity=i<.1?i/.1:1-(i-.1)/.9}else e.scale.setScalar(a*(.3+1.05*Qi(i/.4))),e.material.opacity=.45*(1-Qi(i/.4))}}var ia={meditation:{color:`#a86cff`,light:`#dcc2ff`,circle:{radius:1.35,spin:.32,lift:.05,strength:1},sparks:{count:30,radius:[.42,.9],height:[.08,2.2],life:[1.7,2.6],size:[.11,.2],twinkle:7,glow:2.1},fadeIn:.3,fadeOut:.3},stance:{samurai:{color:`#dfe6ff`,light:`#ffffff`},swordsman:{color:`#ff3326`,light:`#ffae96`},ninja:{color:`#8ccc80`,light:`#b4f0a6`,shadow:!0,rim:{color:`#4f2790`,light:`#8a5fd4`,strength:.75}},paladin:{color:`#ffc31a`,light:`#fff09a`},mage:{color:`#a86cff`,light:`#dcc2ff`},healer:{color:`#ff5aad`,light:`#ffc4e1`},gunner:{color:`#9c5a24`,light:`#e0a868`}},heal:{color:`#5cff86`,light:`#c8ffd6`,pluses:{count:10,radius:[.34,.72],height:[.3,2.2],life:[.9,1.3],size:[.15,.21],width:.045,glow:1.9},sparks:{count:12,radius:[.3,.75],height:[.2,2],life:[.8,1.2],size:[.08,.13],twinkle:9,glow:1.9},fadeIn:.12,fadeOut:.35}};function aa(e=!1){return new L({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:e?3:2,premultipliedAlpha:e})}var oa=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},sa=(e,t)=>e[0]+(e[1]-e[0])*t;function ca(e,t,n,r,i,a,o,s,c){let l=r-t,u=i-n,d=Math.hypot(l,u)||1,f=-u/d*a,p=l/d*a,m=e.position.length/3;for(let[a,l,u]of[[t-f,n-p,0],[t,n,o],[t+f,n+p,0],[r-f,i-p,0],[r,i,o],[r+f,i+p,0]])e.position.push(a,s,l),e.colour.push(c.r*u,c.g*u,c.b*u);e.index.push(m,m+3,m+1,m+1,m+3,m+4,m+1,m+4,m+2,m+2,m+4,m+5)}function la(e,t,n,r,i,a,o=72){let s=e.position.length/3;for(let s=0;s<=o;s++){let c=s/o*Math.PI*2,l=Math.cos(c),u=Math.sin(c);for(let[o,s]of[[-1,0],[0,r],[1,0]])e.position.push(l*(t+o*n),i,u*(t+o*n)),e.colour.push(a.r*s,a.g*s,a.b*s)}for(let t=0;t<o;t++)for(let n=0;n<2;n++){let r=s+t*3+n,i=r+3;e.index.push(r,i,r+1,r+1,i,i+1)}}function ua(e,t,n,r,i,a=36){let o=e.position.length/3;e.position.push(0,r,0),e.colour.push(i.r*n,i.g*n,i.b*n);for(let n=0;n<=a;n++){let i=n/a*Math.PI*2;e.position.push(Math.cos(i)*t,r,Math.sin(i)*t),e.colour.push(0,0,0)}for(let t=0;t<a;t++)e.index.push(o,o+1+t,o+2+t)}function da(e){let t=new N;return t.setAttribute(`position`,new c(e.position,3)),t.setAttribute(`color`,new c(e.colour,3)),t.setIndex(e.index),t}function fa(e){let t={position:[],colour:[],index:[]},r=new n(e.color),i=new n(e.light);ua(t,1,.1,0,r),la(t,.97,.028,1,0,i),la(t,.86,.016,.85,0,r);for(let e=0;e<18;e++){let n=e/18*Math.PI*2,r=Math.cos(n),a=Math.sin(n),o=.915;if(e%2)ca(t,r*.885,a*.885,r*.9450000000000001,a*.9450000000000001,.012,.9,0,i);else{let e=.022,n=-a,s=r;ca(t,r*.893,a*.893,r*o+n*e,a*o+s*e,.008,.8,0,i),ca(t,r*o+n*e,a*o+s*e,r*.937,a*.937,.008,.8,0,i),ca(t,r*.937,a*.937,r*o-n*e,a*o-s*e,.008,.8,0,i),ca(t,r*o-n*e,a*o-s*e,r*.893,a*.893,.008,.8,0,i)}}la(t,.6,.016,.85,0,r);for(let e of[0,Math.PI/3])for(let n=0;n<3;n++){let i=e+n/3*Math.PI*2+Math.PI/2,a=i+Math.PI*2/3;ca(t,Math.cos(i)*.6,Math.sin(i)*.6,Math.cos(a)*.6,Math.sin(a)*.6,.014,.75,0,r)}return la(t,.25,.012,.7,0,i,48),ua(t,.16,.45,0,i,24),da(t)}var pa=9;function ma(e,t){for(let n=0;n<4;n++){let r=t+1+n*2,i=t+2+n*2,a=t+1+(n+1)%4*2;e.push(t,r,i,t,i,a)}}var ha=12;function ga(e,t){for(let n of[0,6]){let r=t+n;e.push(r,r+3,r+1,r+1,r+3,r+4,r+1,r+4,r+2,r+2,r+4,r+5)}}function _a(e,t,n=!1){let r=e*pa+t*ha,i=[];for(let t=0;t<e;t++)ma(i,t*pa);for(let n=0;n<t;n++)ga(i,e*pa+n*ha);let a=new N;a.setAttribute(`position`,new pe(new Float32Array(r*3),3)),a.setAttribute(`color`,new pe(new Float32Array(r*3),3)),a.setIndex(i),a.boundingSphere=new E(new z(0,1.15,0),1.9);let o=new R(a,aa(n));return o.renderOrder=7,{mesh:o,stars:e,pluses:t}}var va=new z,ya=new z,ba=new z,xa=new z,Sa=new n,Ca=new Map,wa=e=>Ca.get(e)??Ca.set(e,new n(e)).get(e);function Ta(e,t,n,r,i,a){e.setXYZ(n,r.x,r.y,r.z),t.setXYZ(n,a.r,a.g,a.b);for(let o=0;o<4;o++){let s=o*Math.PI/2,c=Math.cos(s),l=Math.sin(s);ba.copy(r).addScaledVector(va,c*i).addScaledVector(ya,l*i),e.setXYZ(n+1+o*2,ba.x,ba.y,ba.z),t.setXYZ(n+1+o*2,0,0,0);let u=s+Math.PI/4,d=i*.2;ba.copy(r).addScaledVector(va,Math.cos(u)*d).addScaledVector(ya,Math.sin(u)*d),e.setXYZ(n+2+o*2,ba.x,ba.y,ba.z),t.setXYZ(n+2+o*2,a.r*.25,a.g*.25,a.b*.25)}}function Ea(e,t,n,r,i,a,o){for(let[s,c,l]of[[0,va,ya],[6,ya,va]]){let u=0;for(let d of[-1,1])for(let f of[-1,0,1]){ba.copy(r).addScaledVector(c,d*i).addScaledVector(l,f*a*(f?1.6:0));let p=+!f;e.setXYZ(n+s+u,ba.x,ba.y,ba.z),t.setXYZ(n+s+u,o.r*p,o.g*p,o.b*p),u++}}}function Da(e,t,n,r,i,a){let o=e.mesh.geometry.getAttribute(`position`),s=e.mesh.geometry.getAttribute(`color`);va.set(1,0,0).applyQuaternion(i.quaternion),ya.set(0,1,0).applyQuaternion(i.quaternion);let c=wa(t.color),l=wa(t.light),u=(e,t,n)=>{let i=((r/sa(t.life,oa(e,n+1))+oa(e,n+2))%1+1)%1,a=oa(e,n+3)*Math.PI*2+i*.9,o=sa(t.radius,oa(e,n+4));return xa.set(Math.cos(a)*o,sa(t.height,i),Math.sin(a)*o),Math.sin(Math.PI*i)**1.2};for(let i=0;i<e.stars;i++){let e=u(i+a*97,t.sparks,0),d=.5+.5*Math.sin(r*t.sparks.twinkle+oa(i,9)*20)**2;Sa.copy(c).lerp(l,oa(i,7)).multiplyScalar(n*e*d*t.sparks.glow),Ta(o,s,i*pa,xa,sa(t.sparks.size,oa(i,5))*(.8+.4*d),Sa)}let d=t.pluses;for(let t=0;d&&t<e.pluses;t++){let r=u(t+a*53,d,20);Sa.copy(c).lerp(l,oa(t,27)*.5).multiplyScalar(n*r*d.glow),Ea(o,s,e.stars*pa+t*ha,xa,sa(d.size,oa(t,25)),d.width,Sa)}o.needsUpdate=!0,s.needsUpdate=!0}function Oa(e=ia.stance.samurai){let t=new B;t.name=`meditation-aura`,t.userData.spec={...ia.meditation,color:e.color,light:e.light};let n=new R(fa(e),aa(e.shadow));if(n.scale.setScalar(ia.meditation.circle.radius),n.position.y=ia.meditation.circle.lift,n.renderOrder=6,t.add(n,_a(ia.meditation.sparks.count,0,e.shadow).mesh),e.rim){let n=new R(fa(e.rim),aa());n.scale.setScalar(ia.meditation.circle.radius),n.position.y=ia.meditation.circle.lift+.002,n.renderOrder=6,n.userData.strength=e.rim.strength,t.add(n)}return t.visible=!1,t}function ka(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let[a,o,s]=e.children;a.rotation.y=n*ia.meditation.circle.spin,a.scale.setScalar(ia.meditation.circle.radius*(.82+.18*t));let c=ia.meditation.circle.strength*t*(.86+.14*Math.sin(n*2.2));a.material.color.setScalar(c),s&&(s.rotation.y=a.rotation.y,s.scale.copy(a.scale),s.material.color.setScalar(c*s.userData.strength)),Da({mesh:o,stars:ia.meditation.sparks.count,pluses:0},e.userData.spec??ia.meditation,t,n,r,i)}function Aa(){let e=new B;return e.name=`heal-aura`,e.add(_a(ia.heal.sparks.count,ia.heal.pluses.count).mesh),e.visible=!1,e}function ja(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let a=e.children[0];Da({mesh:a,stars:ia.heal.sparks.count,pluses:ia.heal.pluses.count},ia.heal,t,n,r,i)}var Q={emit:.6,leash:1.2,facing:.5,release:.15,rate:90,mobile:.7,ahead:.12,fallback:.45,height:.9,puff:{size:[.3,1.5],grow:.55,alpha:.42,young:.9,spread:.35,pull:.1,rise:.55,pace:[.94,1],buoy:1.5,stretch:.9},cool:.72,coolTime:1.25,burn:.32,drag:.06,splash:{puffs:14,embers:14,smoke:5,speed:[1.5,4.5],stop:.26},ember:{rate:32,life:[.3,.75],gravity:6,size:[.035,.06],spread:2.2},smoke:{after:.3,chance:.6,size:[.45,1.6],life:[.8,1.25],rise:1,alpha:.4},flare:{size:.55,alpha:.9},ignite:{puffs:7,size:[.25,.75],life:.2,speed:3},glow:{scale:2.8,min:1.6,alpha:.9,y:.08},cover:.85,max:640};function Ma(e){let t=e*2654435761+2654435769>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Na=(e,t)=>t[0]+(t[1]-t[0])*e(),Pa=e=>(e()+e()+e()-1.5)/1.5,Fa=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)},Ia=(e,t,n,r)=>(e.size=t,e.alpha=n,e.heat=r,e);function La(e,t={size:0,alpha:0,heat:0}){let n=e.age;if(e.kind===0){let r=e.life>e.fade?1-Math.min(1,Math.max(0,(n-e.fade)/(e.life-e.fade))):1,i=e.stream?1+Q.puff.young*(1-Fa(n/.15)):1;return Ia(t,e.s0+(e.s1-e.s0)*Fa(n/Q.puff.grow),Math.min(1,e.alpha*i)*Math.min(1,n/.04+.25)*r,e.heat*(1-Q.cool*Fa(n/Q.coolTime))*(1-.45*(1-r))*(1+.3*(i-1)/Q.puff.young))}if(e.kind===1)return Ia(t,e.s0,e.alpha*(1-n/e.life),e.heat*(1-.5*n/e.life));if(e.kind===2)return Ia(t,e.s0,e.alpha,1);let r=n/e.life;return Ia(t,e.s0+(e.s1-e.s0)*Fa(r),e.alpha*Fa(r/.15)*(1-Fa((r-.35)/.65)),e.heat*Math.max(0,1-n/.35))}var Ra=class{particles=[];streams=new Map;starts=[];density;constructor(e=1){this.density=e}track(e,t){let n=new Set;for(let t of e){if(t.kind!==`fire`)continue;let e=Math.hypot(t.velocity.x,t.velocity.z),r=this.streams.get(t.id);if(r){let e=(t.pos.x-r.ox)*r.dx+(t.pos.z-r.oz)*r.dz;e>r.head&&(r.advance+=e-r.head,r.head=e),r.life=t.life}else{if(e<1e-6)continue;let n=t.velocity.x/e,i=t.velocity.z/e,a=Math.max(0,ot.thrownLife-t.life);r={id:t.id,caster:t.owner,ox:t.pos.x-n*e*a,oz:t.pos.z-i*e*a,dx:n,dz:i,nx:-i,nz:n,speed:e,y:Q.height,head:e*a,advance:0,life:t.life,time:a,dt:0,emitting:!0,started:!1,carry:0,emberCarry:0,alive:!0,hold:1,rng:Ma(t.id)},this.streams.set(t.id,r)}n.add(t.id)}for(let e of this.streams.values())e.alive&&!n.has(e.id)&&this.finish(e,t)}hold(e){let t=0;for(let n of this.streams.values())n.caster===e&&(t=Math.max(t,n.hold));return t}update(e,t){if(!(e>0))return;for(let n of this.streams.values())n.dt=n.alive?Math.min(n.advance/n.speed,e*2):e,n.advance=0,n.time+=n.dt,n.emitting&&this.emit(n,t(n.caster)),n.hold=n.emitting?1:Math.max(0,n.hold-e/Q.release);this.step(e);let n=new Set;for(let e of this.particles)e.stream&&n.add(e.stream);for(let[e,t]of this.streams)!t.alive&&t.hold<=0&&!n.has(t)&&this.streams.delete(e)}add(e){this.particles.length<Q.max&&this.particles.push(e)}puff(e,t,n,r,i){let a=e.rng,o=Q.puff;this.add({kind:0,x:t,y:n,z:r,vx:0,vy:0,vz:0,age:i,life:1/0,fade:1/0,s0:o.size[0]*(.8+.4*a()),s1:o.size[1]*(.8+.4*a()),heat:.92+.08*a(),alpha:o.alpha*(.75+.5*a()),seed:a(),rot:a()*Math.PI*2,spin:(a()-.5)*4,stream:e,lane:Pa(a),lift:Pa(a),pace:Na(a,o.pace),smoked:!1})}free(e,t,n,r,i,a,o,s,c,l,u,d,f){this.add({kind:e,x:n,y:r,z:i,vx:a,vy:o,vz:s,age:0,life:c,fade:e===0?0:c,s0:l,s1:u,heat:d,alpha:f,seed:t(),rot:t()*Math.PI*2,spin:(t()-.5)*(e===3?1.2:5),lane:0,lift:0,pace:0,smoked:!0})}smoke(e,t,n,r,i=.6){let a=Q.smoke;this.free(3,e,t,n,r,(e()-.5)*.6,a.rise*.5,(e()-.5)*.6,Na(e,a.life),a.size[0],a.size[1]*(.8+.4*e()),i,a.alpha*(.7+.6*e()))}ember(e,t,n,r,i,a){let o=e.rng,s=Q.ember,c=(o()-.5)*2*a;this.free(1,o,t,n,r,e.dx*i+e.nx*c,(o()-.25)*a,e.dz*i+e.nz*c,Na(o,s.life),Na(o,s.size),0,.85+.15*o(),1)}emit(e,t){let n=e.rng,r=t?t.x+e.dx*Q.ahead:e.ox-e.dx*Q.fallback,i=t?t.z+e.dz*Q.ahead:e.oz-e.dz*Q.fallback,a=t?t.y:Q.height;if(!e.started){e.started=!0,e.y=a,this.starts.push({caster:e.caster,x:r,z:i}),this.starts.length>16&&this.starts.shift();let t=(r-e.ox)*e.dx+(i-e.oz)*e.dz,o=(r-e.ox)*e.nx+(i-e.oz)*e.nz;for(let n=e.head;n>t;n-=.18){let r=(n-t)/Math.max(1e-6,e.head-t);this.puff(e,e.ox+e.dx*n+e.nx*o*(1-r),a,e.oz+e.dz*n+e.nz*o*(1-r),(n-t)/e.speed)}let s=Q.ignite;for(let t=0;t<s.puffs;t++){let t=n()*Math.PI*2,o=s.speed*(.4+.6*n());this.free(0,n,r,a,i,e.dx*o+e.nx*Math.cos(t)*o*.5,Math.sin(t)*o*.5,e.dz*o+e.nz*Math.cos(t)*o*.5,s.life*(.7+.6*n()),s.size[0],s.size[1],1,Q.puff.alpha)}}if(t){let n=Math.abs((r-e.ox)*e.nx+(i-e.oz)*e.nz),a=t.fx*e.dx+t.fz*e.dz;if(n>Q.leash||a<Q.facing){e.emitting=!1;return}}if(e.time-e.dt>=Q.emit){e.emitting=!1;return}let o=Math.max(0,Math.min(e.dt,Q.emit-(e.time-e.dt)));e.carry+=Q.rate*this.density*o;let s=Math.floor(e.carry);e.carry-=s;for(let t=0;t<s;t++){let c=(t+n())/s*o,l=e.speed*c;this.puff(e,r+e.dx*l,a,i+e.dz*l,c)}for(e.emberCarry+=Q.ember.rate*this.density*o;e.emberCarry>=1;e.emberCarry--)this.ember(e,r,a,i,e.speed*(.55+.4*n()),Q.ember.spread);e.dt>0&&this.free(2,n,r,a,i,0,0,0,Math.max(e.dt,1/30)*1.01,Q.flare.size*(.85+.3*n()),0,1,Q.flare.alpha)}finish(e,t){if(e.alive=!1,e.emitting=!1,!(t&&e.life>.1)){for(let t of this.particles)t.stream===e&&(t.fade=t.age,t.life=t.age+Q.burn*(.6+.4*e.rng()));return}e.end=e.head+e.speed/60;let n=e.rng,r=Q.splash,i=e.ox+e.dx*e.end,a=e.oz+e.dz*e.end,o=e.y+.1;for(let t=0;t<r.puffs;t++){let t=n()*Math.PI*2,s=Na(n,r.speed);this.free(0,n,i,o,a,e.nx*Math.cos(t)*s-e.dx*n()*2,Math.abs(Math.sin(t))*s*.8+.4,e.nz*Math.cos(t)*s-e.dz*n()*2,.3+.25*n(),.35,1.15*(.8+.4*n()),.85+.15*n(),Q.puff.alpha)}for(let t=0;t<r.embers;t++){let t=n()*Math.PI*2,s=Na(n,r.speed)*1.4;this.free(1,n,i,o,a,e.nx*Math.cos(t)*s-e.dx*n()*3,Math.abs(Math.sin(t))*s+1,e.nz*Math.cos(t)*s-e.dz*n()*3,Na(n,Q.ember.life),Na(n,Q.ember.size),0,.9,1)}for(let e=0;e<r.smoke;e++)this.smoke(n,i+(n()-.5)*.6,o+.2,a+(n()-.5)*.6,.8)}step(e){let t=this.particles;for(let n=t.length-1;n>=0;n--){let r=t[n],i=r.stream,a=i&&i.alive?i.dt:e;if(r.age+=a,r.age>=r.life){t[n]=t[t.length-1],t.pop();continue}i?this.ride(r,i,a):this.fly(r,a)}}ride(e,t,n){let r=(e.x-t.ox)*t.dx+(e.z-t.oz)*t.dz,i=(e.x-t.ox)*t.nx+(e.z-t.oz)*t.nz;t.alive?r=Math.min(r+t.speed*e.pace*n,t.head):t.end===void 0?(e.pace*=Math.exp(-n/Q.drag),r+=t.speed*e.pace*n):(r+=t.speed*e.pace*n,r>=t.end&&(r=t.end,this.scatter(e,t)));let a=Q.puff,o=a.spread*Math.min(e.age,a.grow)+.02,s=1-Math.exp(-n/a.pull);i+=(e.lane*o-i)*s,e.y+=(t.y+e.lift*o*.6+a.rise*e.age*e.age-e.y)*s,e.x=t.ox+t.dx*r+t.nx*i,e.z=t.oz+t.dz*r+t.nz*i,!e.smoked&&e.age>Q.smoke.after&&(e.smoked=!0,t.rng()<Q.smoke.chance&&this.smoke(t.rng,e.x,e.y+.15,e.z))}scatter(e,t){let n=t.rng,r=n()*Math.PI*2,i=1+2.5*n();e.stream=void 0,e.vx=t.nx*Math.cos(r)*i-t.dx*n()*1.5,e.vz=t.nz*Math.cos(r)*i-t.dz*n()*1.5,e.vy=Math.abs(Math.sin(r))*i*.7+.5,e.fade=e.age,e.life=e.age+Q.splash.stop*(.6+.4*n()),e.s1*=1.3}fly(e,t){if(e.kind===2)return;e.kind===1?e.vy-=Q.ember.gravity*t:e.kind===3?e.vy+=(Q.smoke.rise-e.vy)*(1-Math.exp(-t/.4)):e.vy+=Q.puff.buoy*t;let n=Math.exp(-t*(e.kind===1?.6:e.kind===3?1.6:3.5));e.vx*=n,e.vz*=n,e.x+=e.vx*t,e.y+=e.vy*t,e.z+=e.vz*t,e.kind===1&&e.y<.02&&(e.y=.02,e.vy*=-.3,e.vx*=.5,e.vz*=.5)}};function za(e=64){let t=Ma(7),n=new Uint8Array(e*e*4),r=new Float32Array(e*e);for(let[n,i]of[[4,.5],[8,.25],[16,.15],[32,.1]]){let a=Float32Array.from({length:n*n},()=>t()),o=(e,t)=>a[(t+n)%n*n+(e+n)%n];for(let t=0;t<e;t++)for(let a=0;a<e;a++){let s=a/e*n,c=t/e*n,l=Math.floor(s),u=Math.floor(c),d=Fa(s-l),f=Fa(c-u),p=o(l,u)+(o(l+1,u)-o(l,u))*d,m=o(l,u+1)+(o(l+1,u+1)-o(l,u+1))*d;r[t*e+a]+=(p+(m-p)*f)*i}}let i=1/0,a=-1/0;for(let e of r)i=Math.min(i,e),a=Math.max(a,e);for(let t=0;t<e*e;t++){let e=Math.round((r[t]-i)/(a-i)*255);n.set([e,e,e,255],t*4)}let o=new g(n,e,e,Le);return o.wrapS=o.wrapT=D,o.magFilter=o.minFilter=Ce,o.needsUpdate=!0,o}var Ba=`
attribute vec3 iPos;
attribute vec4 iA;
attribute vec2 iB;
attribute vec4 iC;
varying vec2 vUv;
varying vec4 vA;
varying float vKind;
varying float vY;
void main() {
  vUv = position.xy * 2.0;
  vA = iA; vKind = iB.y;
  // 向き iC.xyz（筋の向き・飛ぶ向き）が画面の上で見える長さだけ、その向きへ伸ばす（正面から見ると丸いまま）。向きが無ければ iB.x で回す。
  vec3 dv = mat3(viewMatrix) * iC.xyz;
  float k = iC.w * length(dv.xy);
  float angle = k > 0.001 ? atan(dv.y, dv.x) + 0.2 * sin(iB.x) : iB.x;
  float c = cos(angle), s = sin(angle);
  vec2 p = position.xy * vec2(1.0 + k, 1.0);
  vec2 q = vec2(c * p.x - s * p.y, s * p.x + c * p.y) * iA.x;
#ifdef FLAT
  vec4 mv = viewMatrix * vec4(iPos.x + q.x, iPos.y, iPos.z - q.y, 1.0);   // z は逆向き（表を上へ向ける。裏は描かない）
  vY = 1.0;
#else
  vec4 mv = viewMatrix * vec4(iPos, 1.0);
  mv.xy += q;
  // 板の角の高さ（カメラの右と上の向きの高さの成分から）。床の近くを薄くして、床で板が切れて見えないように。
  vY = iPos.y + q.x * viewMatrix[1][0] + q.y * viewMatrix[1][1];
#endif
  gl_Position = projectionMatrix * mv;
}`,Va=`
uniform sampler2D uNoise;
uniform float uTime;
uniform float uCover;
varying vec2 vUv;
varying vec4 vA;
varying float vKind;
varying float vY;

vec3 heatRamp(float h) {
  h = clamp(h, 0.0, 1.25) * 4.0;
  vec3 c0 = vec3(0.03, 0.003, 0.0), c1 = vec3(0.3, 0.04, 0.0), c2 = vec3(0.5, 0.1, 0.005), c3 = vec3(0.7, 0.24, 0.02), c4 = vec3(1.05, 0.5, 0.08), c5 = vec3(1.7, 1.05, 0.38);
  return h < 1.0 ? mix(c0, c1, h) : h < 2.0 ? mix(c1, c2, h - 1.0) : h < 3.0 ? mix(c2, c3, h - 2.0) : h < 4.0 ? mix(c3, c4, h - 3.0) : mix(c4, c5, h - 4.0);
}
void main() {
  float r = length(vUv);
  if (r > 1.0) discard;
  float heat = vA.y, alpha = vA.z * smoothstep(0.0, 0.3, vY), seed = vA.w;
  vec3 col; float a;
  if (vKind > 1.5) {            // 手のひらの光
    a = exp(-r * r * 4.0) * alpha; col = heatRamp(1.25) * 1.2;
  } else if (vKind > 0.5) {     // 火の粉
    a = (1.0 - smoothstep(0.15, 1.0, r)) * alpha; col = heatRamp(0.75 + 0.25 * heat) * 1.6;
  } else {                      // 炎の粒：まん中ほど濃く、まだらで ふちが舌のように欠ける。濃い所ほど熱い色
    vec2 q = vUv * 0.5 + vec2(seed * 3.7, seed * 1.9);
    float n = texture2D(uNoise, q + vec2(0.0, -uTime * 1.3)).r * 0.6 + texture2D(uNoise, q * 2.2 + vec2(uTime * 0.7, seed)).r * 0.4;
    float d = (1.0 - r) * 1.5 + (n - 0.5) * 1.3;
    col = heatRamp(heat * (0.35 + 0.9 * clamp(d, 0.0, 1.2)));
    a = smoothstep(0.05, 0.55, d) * alpha;
  }
  // 色は足し、炎の粒は うしろを uCover の割合で隠す（足すだけだと 昼の明るい床の上で白っぽく薄まる）。火の粉と手のひらの光は足すだけ。
  gl_FragColor = vec4(col * a, vKind < 0.5 ? a * uCover : 0.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Ha=`
uniform sampler2D uNoise;
uniform float uTime;
varying vec2 vUv;
varying vec4 vA;
varying float vY;
void main() {
  float r = length(vUv);
  if (r > 1.0) discard;
  vec2 q = vUv * 0.35 + vec2(vA.w * 5.1, vA.w * 2.3);
  float n = texture2D(uNoise, q + vec2(uTime * 0.12, -uTime * 0.25)).r * 0.6 + texture2D(uNoise, q * 2.0 - vec2(0.0, uTime * 0.4)).r * 0.4;
  float body = 1.0 - smoothstep(0.3, 1.0, r * (0.7 + 0.6 * n));
  vec3 col = mix(vec3(0.05, 0.045, 0.04), vec3(0.18, 0.16, 0.15), n) + vA.y * vec3(0.6, 0.18, 0.04);
  gl_FragColor = vec4(col, body * vA.z * smoothstep(0.0, 0.3, vY));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Ua=`
varying vec2 vUv;
varying vec4 vA;
void main() {
  float r = length(vUv);
  if (r > 1.0) discard;
  // 床の色 × (1 ＋ 明かり)（材質の blendSrc＝床の色）。明るい砂は橙に、暗い床は少しだけ照らされる。
  gl_FragColor = vec4(vec3(1.0, 0.45, 0.12) * (0.6 + 0.4 * vA.y) * exp(-r * r * 3.0) * (1.0 - smoothstep(0.8, 1.0, r)) * vA.z, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Wa=class{mesh;at;a;b;c;count=0;max;constructor(e,t,n){this.max=e;let r=new w;r.setIndex([0,1,2,0,2,3]),r.setAttribute(`position`,new pe(new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),3));let i=t=>new se(new Float32Array(e*t),t).setUsage(m);r.setAttribute(`iPos`,this.at=i(3)),r.setAttribute(`iA`,this.a=i(4)),r.setAttribute(`iB`,this.b=i(2)),r.setAttribute(`iC`,this.c=i(4)),r.instanceCount=0,this.mesh=new R(r,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n,this.mesh.matrixAutoUpdate=!1,this.mesh.visible=!1}put(e,t,n,r,i,a,o,s,c,l=0,u=0,d=0,f=0){if(this.count>=this.max)return;let p=this.count++,m=this.at.array,h=this.a.array,g=this.b.array,_=this.c.array;m[p*3]=e,m[p*3+1]=t,m[p*3+2]=n,h[p*4]=r,h[p*4+1]=i,h[p*4+2]=a,h[p*4+3]=o,g[p*2]=s,g[p*2+1]=c,_[p*4]=l,_[p*4+1]=u,_[p*4+2]=d,_[p*4+3]=f}commit(){this.mesh.geometry.instanceCount=this.count,this.mesh.visible=this.count>0;for(let e of[this.at,this.a,this.b,this.c])e.clearUpdateRanges(),e.addUpdateRange(0,Math.max(1,this.count)*e.itemSize),e.needsUpdate=!0}},Ga=class{root=new B;fire;smoke;glow;timed;look={size:0,alpha:0,heat:0};constructor(){let e=za(),t=(t,n,r=!1)=>new _({uniforms:{uNoise:{value:e},uTime:{value:0},uCover:{value:Q.cover}},vertexShader:Ba,fragmentShader:t,defines:r?{FLAT:``}:{},transparent:!0,depthWrite:!1,blending:n}),n=t(Va,5),r=t(Ha,1),i=t(Ua,5,!0);n.blendSrc=201,n.blendDst=205,i.blendSrc=208,i.blendDst=201,this.timed=[n,r],this.smoke=new Wa(Q.max/2,r,30),this.glow=new Wa(Q.max/2,i,31),this.fire=new Wa(Q.max,n,32),this.root.name=`flame-vfx`,this.root.matrixAutoUpdate=!1,this.root.add(this.smoke.mesh,this.glow.mesh,this.fire.mesh)}warmup(){return[this.smoke,this.glow,this.fire].map(e=>{let t=new R(e.mesh.geometry,e.mesh.material);return t.frustumCulled=!1,t})}write(e,t){for(let e of this.timed)e.uniforms.uTime.value=t;this.fire.count=this.smoke.count=this.glow.count=0;let n=Q.glow,r=this.look;for(let t of e.particles){let{size:e,alpha:i,heat:a}=La(t,r);if(i<=.002)continue;let o=t.rot+t.spin*t.age;if(t.kind===3){this.smoke.put(t.x,t.y,t.z,e,a,i,t.seed,o,3);continue}let s=t.stream,c=Math.hypot(t.vx,t.vy,t.vz);s?this.fire.put(t.x,t.y,t.z,e,a,i,t.seed,o,0,s.dx,0,s.dz,Q.puff.stretch):c>.01?this.fire.put(t.x,t.y,t.z,e,a,i,t.seed,o,t.kind,t.vx/c,t.vy/c,t.vz/c,t.kind===1?Math.min(3,c*.35):Math.min(.8,c*.12)):this.fire.put(t.x,t.y,t.z,e,a,i,t.seed,o,t.kind),(t.kind===2||t.kind===0&&t.seed<.5)&&this.glow.put(t.x,n.y,t.z,Math.max(n.min,e*n.scale),a,i*n.alpha*Math.min(1,a*1.4),0,0,0)}this.fire.commit(),this.smoke.commit(),this.glow.commit()}},Ka={ring:`#ffd75e`,edge:`#ffffff`,floor:`#fff1b8`,wall:`#ffe28a`,flash:`#ffffff`,glow:`#fff0c2`,ground:`#fff6d8`,stars:[`#fff3c4`,`#ffd34d`,`#ffb3d9`,`#bfe8ff`],ringWidth:.2,edgeWidth:.035,floorOpacity:.2,wallHeight:[1.8,.6],wallBands:[{from:0,to:.45,opacity:.42},{from:.45,to:.75,opacity:.26},{from:.75,to:1,opacity:.12}],wallFrom:[1.2,2.4],burst:{core:.42,glow:.95,time:.12,height:.35},spikes:{count:8,length:1.6,width:.07,time:.2},groundRadius:1.8,starCount:14,starSize:.34,starRise:2.2},qa=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function Ja(e){let t=Math.abs(Math.floor(e))%233280+1;return()=>(t=(t*9301+49297)%233280,t/233280)}function Ya(e,t=!0){return new L({color:e,transparent:!0,opacity:0,depthWrite:!1,depthTest:t,side:2})}function Xa(){let e=new y;for(let t=0;t<10;t++){let n=t%2?.45:1,r=Math.PI/2+t*Math.PI/5;t?e.lineTo(Math.cos(r)*n,Math.sin(r)*n):e.moveTo(Math.cos(r)*n,Math.sin(r)*n)}return new C(e)}function Za(e){let t=new B,n=Ja(e),r=Ka;t.name=`bomber-wave`;let i=(e,n,r,i,a=!0,o=t)=>{let s=new R(e,Ya(n,a));s.renderOrder=r,s.userData.bomber={band:0,angle:0,speed:1,lift:0,spin:0,...i},o.add(s)},a=new Ne(1,64).rotateX(-Math.PI/2),o=new Ne(1,28),s=new Ne(1,4);i(a,r.floor,10,{kind:`floor`}),i(a,r.ground,11,{kind:`ground`}),i(new H(1-r.ringWidth,1,96).rotateX(-Math.PI/2),r.ring,12,{kind:`ring`}),i(new H(1-r.edgeWidth,1,96).rotateX(-Math.PI/2),r.edge,13,{kind:`edge`});let c=new ye(1,1,1,64,1,!0).translate(0,.5,0);r.wallBands.forEach((e,t)=>i(c,r.wall,14,{kind:`wall`,band:t}));let l=Xa();for(let e=0;e<r.starCount;e++)i(l,r.stars[e%r.stars.length],15,{kind:`star`,angle:(e+n()*.7)/r.starCount*Math.PI*2,speed:.35+n()*.45,lift:r.starRise*(.55+.6*n()),spin:(n()-.5)*16});let u=new B;u.name=`bomber-burst`,t.add(u),i(o,r.glow,22,{kind:`glow`},!0,u);for(let e=0;e<r.spikes.count;e++)i(s,r.flash,23,{kind:`spike`,angle:(e+.5*n())/r.spikes.count*Math.PI*2,speed:.7+.5*n()},!0,u);return i(o,r.flash,24,{kind:`flash`},!0,u),t}function Qa(e,t,n,r,i,a,o){let s=Ka,c=a/Tt.waveSpeed,l=Math.max(.3,Math.min(a,Tt.waveSpeed*r)),u=1-qa((r-c)/Math.max(.05,i-c)),d=Math.min(1,r/Math.max(.05,i)),f=l/a,p=s.wallHeight[0]+(s.wallHeight[1]-s.wallHeight[0])*f;e.position.set(t,0,n);let m=qa((l-s.wallFrom[0])/(s.wallFrom[1]-s.wallFrom[0]));for(let t of e.children){if(t.name===`bomber-burst`){$a(t,r,o);continue}let e=t,n=e.userData.bomber;if(n.kind===`floor`)e.position.y=.05,e.scale.setScalar(l*(1-s.ringWidth*.5)),e.material.opacity=s.floorOpacity*u;else if(n.kind===`ground`)e.position.y=.06,e.scale.setScalar(s.groundRadius*(.55+.45*qa(r/s.burst.time))),e.material.opacity=.9*(1-qa(r/(s.burst.time*2)));else if(n.kind===`ring`||n.kind===`edge`)e.position.y=n.kind===`ring`?.07:.08,e.scale.setScalar(l),e.material.opacity=(n.kind===`ring`?.95:1)*(1-.25*f)*u;else if(n.kind===`wall`){let t=s.wallBands[n.band];e.position.y=t.from*p,e.scale.set(l,(t.to-t.from)*p,l),e.material.opacity=t.opacity*(1-.35*f)*u*m}else if(n.kind===`star`){let t=1-(1-d)*(1-d),i=a*n.speed*t;e.position.set(Math.cos(n.angle)*i,.35+n.lift*Math.sin(Math.PI*Math.min(1,d*1.15)),Math.sin(n.angle)*i),e.quaternion.copy(o.quaternion),e.rotateZ(n.spin*r),e.scale.setScalar(s.starSize*(1-.35*d)*qa(r/.04)),e.material.opacity=1-qa((d-.55)/.45)}}}function $a(e,t,n){let r=Ka;e.position.set(0,r.burst.height,0),e.quaternion.copy(n.quaternion);for(let n of e.children){let e=n,i=e.userData.bomber;if(i.kind===`spike`){let n=Math.min(1,t/r.spikes.time),a=r.spikes.length*i.speed*(.45+.55*qa(n/.5)),o=r.burst.core*.6;e.rotation.z=i.angle-Math.PI/2,e.scale.set(r.spikes.width*(1-.6*n),a/2,1),e.position.set(Math.cos(i.angle)*(o+a/2),Math.sin(i.angle)*(o+a/2),0),e.material.opacity=1-qa(n)}else{let n=i.kind===`glow`,a=r.burst.time*(n?1.4:1);e.position.set(0,0,0),e.scale.setScalar((n?r.burst.glow:r.burst.core)*(1-.35*qa(t/a))),e.material.opacity=(n?.5:1)*(1-qa(t/a))}}}var eo={radius:.82,width:.1,glowOut:.16,glowIn:.07,wall:{height:.38,alpha:.8},ally:`#3b9dff`,enemy:`#ff3b3b`,opacity:.95,pulse:{speed:.7,depth:.22},lift:.035,capacity:16};function to(e,t,n){return n?null:e===t?`ally`:`enemy`}function no(e){let{opacity:t,pulse:n}=eo;return t*(1-n.depth*.5*(1+Math.sin(e*Math.PI*2*n.speed)))}function ro(){let{radius:e,width:t,glowOut:n,glowIn:r}=eo;return[[e-t/2-r,0],[e-t/2,.8],[e,1],[e+t/2,.8],[e+t/2+n*.35,.32],[e+t/2+n,0]]}var io;function ao(){let{height:e,alpha:t}=eo.wall;return[[0,t],[e*.35,t*.45],[e,0]]}function oo(){if(io)return io;let e=ro(),t=ao(),n=[],r=[],i=[],a=[],o=[],s=e[e.length-1][0],l=(e,t)=>{let c=n.length/3;for(let o=0;o<=64;o++){let c=o/64*Math.PI*2,l=Math.cos(c),u=Math.sin(c);for(let o=0;o<e;o++){let e=t(l,u,o);n.push(...e.at),r.push(...e.normal),i.push(.5+e.at[0]/s/2,.5+e.at[1]/s/2),a.push(1,1,1,e.alpha)}}for(let t=0;t<64;t++)for(let n=0;n<e-1;n++){let r=c+t*e+n,i=r+e;o.push(r,i,r+1,r+1,i,i+1)}};return l(e.length,(t,n,r)=>({at:[t*e[r][0],n*e[r][0],0],normal:[0,0,1],alpha:e[r][1]})),l(t.length,(e,n,r)=>({at:[e*eo.radius,n*eo.radius,t[r][0]],normal:[e,n,0],alpha:t[r][1]})),io=new N,io.setAttribute(`position`,new c(n,3)),io.setAttribute(`normal`,new c(r,3)),io.setAttribute(`uv`,new c(i,2)),io.setAttribute(`color`,new c(a,4)),io.setIndex(o),io}var so={ally:new n(eo.ally),enemy:new n(eo.enemy)};function co(t=eo.capacity){let n=new L({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,opacity:eo.opacity}),r=new e(oo(),n,t);return r.name=`team-rings`,r.instanceColor=new se(new Float32Array(t*3).fill(1),3),r.count=0,r.frustumCulled=!1,r}var lo=new Te;function uo(e,t,n){let r=Math.min(t.length,e.instanceMatrix.count);for(let n=0;n<r;n++){let r=t[n];e.setMatrixAt(n,lo.makeRotationX(-Math.PI/2).setPosition(r.x,eo.lift,r.z)),e.setColorAt(n,so[r.kind])}e.count=r,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0),e.material.opacity=no(n)}var fo={fan:.15,bandIdle:.28,bandArmed:.62,bandPulse:.3,body:.12,bandLight:.45,bodyColor:`#e8eef6`},po={royal:{vivid:0,lightness:.5,bandVivid:0,fan:1,band:1,body:1,flash:`light`},colosseum:{vivid:0,lightness:.5,bandVivid:0,fan:1,band:1,body:1,flash:`light`},school:{vivid:.6,lightness:.64,bandVivid:.2,fan:5,band:1.8,body:3.5,flash:`deep`},dojo:{vivid:.6,lightness:.64,bandVivid:.2,fan:5,band:1.8,body:3.5,flash:`deep`}},mo=new n(`#ffffff`);function ho(e,t,n=.5){let r=e.getHSL({h:0,s:0,l:0},be);return e.clone().setHSL(r.h,r.s+(1-r.s)*t,r.l+(n-r.l)*t,be)}function go(e,t){let r=new n(e);if(t.vivid<=0)return{fan:r,band:r.clone().lerp(mo,fo.bandLight),body:new n(fo.bodyColor)};let i=ho(r,t.vivid,t.lightness);return{fan:i,band:ho(r,t.bandVivid,t.lightness),body:i.clone()}}function _o(e,t,n,r){let i=fo.bandIdle*e.band;return{fan:Math.min(1,fo.fan*e.fan)*t,band:Math.min(1,n?Math.max(i,fo.bandArmed+fo.bandPulse*r):i)*t,body:Math.min(1,fo.body*e.body)*t}}var vo={pad:.9,peak:1,decay:.22,hold:.7,pulse:.25,fadeOut:.35,lightWidth:1.35,bandHide:.3,burst:{time:.45,grow:2.6,width:.45},fanOpacity:.85,colors:{light:`#ffffff`,haloDark:`#ffcf4a`,haloBright:`#ff8c00`,ringDark:`#fff1b8`,ringBright:`#ff7a00`,fanDark:`#fff3c4`}};function yo(e){let t=vo.colors,r=e===`light`;return{light:new n(t.light),halo:new n(r?t.haloDark:t.haloBright),ring:new n(r?t.ringDark:t.ringBright),fan:new n(r?t.fanDark:t.haloBright),additive:r}}var bo={fan:1,glow:2,light:3,burst:4};function xo(e,t){let{peak:n,decay:r,hold:i,pulse:a}=vo,o=i*(1-a+a*t);return Math.min(1,o+(n-o)*Math.exp(-Math.max(0,e)/r))}function So(e){return Math.min(1,Math.max(0,1-e/vo.bandHide))}function Co(e,t,n,r){e.burst>=0&&(e.burst=e.burst+n>vo.burst.time?-1:e.burst+n),t?(e.since=e.level>0&&e.since>=0?e.since+n:0,e.since===0&&(e.burst=0),e.level=xo(e.since,r)):(e.since=-1,e.level=Math.max(0,e.level-n/vo.fadeOut))}function wo(e,t){let n=Math.min(1,Math.max(0,e/vo.burst.time)),r=1-(1-n)**2;return{scale:(t+vo.burst.grow*r)/t,opacity:(1-n)**1.5}}function To(e,t,n,r=vo.pad){return Oo([[Math.max(.05,e-r),0],[e-r*.4,.45],[e,.9],[(e+t)/2,1],[t,.9],[t+r*.4,.45],[t+r,0]],n)}function Eo(e,t,n){let r=(e+t)/2,i=(t-e)*vo.lightWidth/2,a=(t-e)/2;return Oo([[r-i,0],[r-a,1],[r+a,1],[r+i,0]],n)}function Do(e,t){let n=vo.burst.width/2;return Oo([[e-n,0],[e-n*.3,1],[e+n*.3,1],[e+n,0]],t)}function Oo(e,t){let n=[],r=[],i=[],a=[],o=[],s=e[e.length-1][0];for(let o=0;o<=48;o++){let c=-t+2*t*o/48,l=Math.cos(c),u=Math.sin(c),d=Math.min(1,Math.min(o,48-o)/(48*.1));for(let[t,o]of e)n.push(l*t,u*t,0),r.push(0,0,1),i.push(.5+l*t/s/2,.5+u*t/s/2),a.push(1,1,1,o*d)}let l=e.length;for(let e=0;e<48;e++)for(let t=0;t<l-1;t++){let n=e*l+t,r=n+l;o.push(n,r,n+1,n+1,r,r+1)}let u=new N;return u.setAttribute(`position`,new c(n,3)),u.setAttribute(`normal`,new c(r,3)),u.setAttribute(`uv`,new c(i,2)),u.setAttribute(`color`,new c(a,4)),u.setIndex(o),u}function ko(){return new L({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2,opacity:0})}var Ao={shrink:.09,fade:.07,opacity:.84,shake:{size:.12,time:.22},glow:{base:.55,hit:1.6},form:{time:.62,gather:.36,grow:[.14,.22,.3],growTime:.22,overshoot:.12,flash:.46},color:{ice:`#9fe9ff`,emissive:`#2aa7d6`,glowLow:`#1f8fd8`,glowHigh:`#e8fbff`,mist:`#cfefff`,sparkle:`#ffffff`,frost:`#7fdcff`},mist:{count:10,period:2.6,size:[.7,2],travel:2.2,strength:.72},veil:{count:8,period:3.2,size:[.5,1.1],strength:.42,top:2.3},halo:{count:4,radius:[1.25,1.7],height:[1,1.6],strength:.42},sparkle:{count:26,size:[.14,.3],rate:[1.2,2.6]},dust:{count:24,fall:[.35,.7],size:[.06,.11],strength:.9},frost:{extra:.9,across:1.35,strength:.5,spikes:30,length:[.45,1.4],spikeWidth:.1,spikeStrength:.75},shards:{count:26,size:[.12,.34],speed:[2.5,7],up:[2.5,6.5],gravity:16,spin:9,fadeFrom:.55},burst:{mist:7,radius:2.6,sparkles:30,speed:[3,8],flash:{count:3,size:1.5,strength:.9,time:.2}}};function jo(){let e=Ao.color;return new F({color:e.ice,emissive:e.emissive,emissiveIntensity:Ao.glow.base,metalness:.2,roughness:.18,transparent:!0,opacity:Ao.opacity})}var Mo=e=>Object.assign(new L({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2}),{name:e});function No(e,t,n,r,i){let a=Ao,o=e===void 0?0:Math.max(0,t-e),s=n===void 0?1/0:r-n,c=s>=0&&s<a.shake.time?1-s/a.shake.time:0;return{height:1-a.shrink*o,opacity:a.opacity-a.fade*o,glow:a.glow.base+(a.glow.hit-a.glow.base)*c,shakeX:a.shake.size*c*Math.sin(r*95+i),shakeZ:a.shake.size*c*Math.cos(r*83+i*1.7)}}var Po=e=>{let t=Math.max(1,Math.floor(Math.abs(e))%2147483646+1);return()=>(t=t*16807%2147483647,t/2147483647)},Fo=(e,t,n)=>e+(t-e)*n,Io=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)},Lo=(e,t)=>e<=0?0:e>=1?1:1-(1-e)**3+t*Math.sin(Math.PI*e)*(1-e)*2.2;function Ro(e,t){let n=new ye(e*.82,e,t*.74,6).translate(0,t*.37,0),r=new ee(e*.82,t*.26,6).translate(0,t*.74+t*.13,0),i=ke([n.toNonIndexed(),r.toNonIndexed()],!1);return n.dispose(),r.dispose(),i}function zo(e,t,r,i){let a=e.getAttribute(`position`),o=new Float32Array(a.count*3),s=new Float32Array(a.count*3),c=new n;for(let e=0;e<a.count;e++)o[e*3]=a.getX(e)*1.06,o[e*3+1]=a.getY(e),o[e*3+2]=a.getZ(e)*1.06,c.copy(t).lerp(r,Math.min(1,a.getY(e)/i)),s[e*3]=c.r,s[e*3+1]=c.g,s[e*3+2]=c.b;let l=new N;return l.setAttribute(`position`,new pe(o,3)),l.setAttribute(`color`,new pe(s,3)),l}function Bo(e,t){let r=Ao,i=Po(t*7919+13),a=new B;a.name=`ice-wall`,a.userData.noFade=!0;let o=[];for(let t=0;t<11;t++){let n=(t+.5)/11,r=(n-.5)*(e-.2)+(i()-.5)*.22,a=1-Math.abs(n-.5)*2;o.push({group:a>.62?0:a>.25?1:2,along:r,across:(i()-.5)*.3,height:1.35+a*1.05+i()*.35,radius:.24+a*.14+i()*.06,tilt:new T((i()-.5)*.22,i()*Math.PI,(i()-.5)*.3)})}for(let t=0;t<4;t++){let n=t%2?1:-1,r=(i()-.5)*(e-.8);o.push({group:2,along:r,across:n*(.3+i()*.15),height:.5+i()*.35,radius:.12+i()*.06,tilt:new T(0,i()*Math.PI,n*(.5+i()*.3))})}let s=jo(),c=new n(r.color.glowLow),l=new n(r.color.glowHigh),u=new B;u.name=`ice-crystals`;let d=new B;d.name=`ice-shells`;let f=Mo(`ice-shell`);for(let e=0;e<3;e++){let t=o.filter(t=>t.group===e).map(e=>Ro(e.radius,e.height).applyMatrix4(new Te().makeRotationFromEuler(e.tilt)).translate(e.across,0,e.along)),n=ke(t,!1);t.forEach(e=>e.dispose());let r=new R(n,s);r.name=`ice-crystals-${e}`,r.castShadow=!1,u.add(r);let i=new R(zo(n,c,l,2.6),f);i.name=`ice-shell-${e}`,i.frustumCulled=!1,d.add(i)}a.add(u,d);let p={mist:[],sparkle:[],dust:[],halo:[],spike:[],veil:[]};for(let t=0;t<r.veil.count;t++)p.veil.push({along:((t+i()*.8)/r.veil.count-.5)*(e-.6),across:0,height:0,size:1,rate:1,phase:t/r.veil.count*2.3%1,side:t%2?1:-1,fall:0,sway:i()*Math.PI*2});for(let t=0;t<r.halo.count;t++)p.halo.push({along:((t+.5)/r.halo.count-.5)*(e-1),across:0,height:Fo(r.halo.height[0],r.halo.height[1],i()),size:Fo(r.halo.radius[0],r.halo.radius[1],i()),rate:.8+i()*.8,phase:i()*Math.PI*2,side:1,fall:0,sway:0});for(let t=0;t<r.mist.count;t++)p.mist.push({along:(i()-.5)*(e-.4),across:0,height:.15+i()*.35,size:1,rate:1,phase:t/r.mist.count+i()*.08,side:t%2?1:-1,fall:0,sway:i()*Math.PI*2});for(let e=0;e<r.sparkle.count;e++){let e=o[Math.floor(i()*11)],t=e.height*(.15+i()*.8);p.sparkle.push({along:e.along+(i()-.5)*e.radius*1.6,across:e.across+(i()<.5?-1:1)*e.radius*(.7+i()*.3),height:t,size:Fo(r.sparkle.size[0],r.sparkle.size[1],i()),rate:Fo(r.sparkle.rate[0],r.sparkle.rate[1],i()),phase:i()*Math.PI*2,side:1,fall:0,sway:i()*Math.PI*2})}for(let t=0;t<r.dust.count;t++)p.dust.push({along:(i()-.5)*(e+.6),across:(i()-.5)*1.4,height:i()*2.6,size:Fo(r.dust.size[0],r.dust.size[1],i()),rate:1,phase:i(),side:1,fall:Fo(r.dust.fall[0],r.dust.fall[1],i()),sway:i()*Math.PI*2});for(let t=0;t<r.frost.spikes;t++){let n=(i()-.5)*(e+.3),a=Math.abs(n)>e/2-.5;p.spike.push({along:n,side:t%2?1:-1,angle:(i()-.5)*(a?2.7:1.7),length:Fo(r.frost.length[0],r.frost.length[1],i()),delay:r.form.grow[0]+Math.min(1,Math.abs(n)/(e/2))*(r.form.grow[2]-r.form.grow[0]),phase:i()*Math.PI*2})}let h=72+r.frost.spikes*2+r.halo.count*12*3+r.mist.count*10*3+r.veil.count*10*3+r.sparkle.count*8+r.dust.count*4,g=new N;g.setAttribute(`position`,new pe(new Float32Array(h*9),3).setUsage(m)),g.setAttribute(`color`,new pe(new Float32Array(h*9),3).setUsage(m));let _=new R(g,Mo(`ice-aura`));return _.name=`ice-aura`,_.frustumCulled=!1,_.renderOrder=3,a.add(_),a.userData.ice={width:e,crystals:o.map(e=>({along:e.along,across:e.across,height:e.height})),motes:p,material:s,shellMaterial:f},a}var Vo=class{i=0;p;c;constructor(e,t){this.p=e,this.c=t}tri(e,t,n,r,i,a){let{p:o,c:s}=this,c=this.i*9;for(let[l,u]of[[e,t],[n,r],[i,a]])o[c]=l.x,o[c+1]=l.y,o[c+2]=l.z,s[c]=u.r,s[c+1]=u.g,s[c+2]=u.b,c+=3;this.i++}finish(e){this.p.fill(0,this.i*9,e*9),this.c.fill(0,this.i*9,e*9)}},Ho=new n(0,0,0),Uo=new z,Wo=new z,Go=new z,Ko=new n,qo=new z,Jo=new n,Yo=new z,Xo=new z;function Zo(e,t,n,r,i,a,o){Jo.copy(a).multiplyScalar(.45);for(let s=0;s<o;s++){let c=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2,u=Math.cos(c),d=Math.sin(c),f=Math.cos(l),p=Math.sin(l);Uo.copy(t).addScaledVector(n,u*i*.5).addScaledVector(r,d*i*.5),Wo.copy(t).addScaledVector(n,f*i*.5).addScaledVector(r,p*i*.5),Yo.copy(t).addScaledVector(n,u*i).addScaledVector(r,d*i),Xo.copy(t).addScaledVector(n,f*i).addScaledVector(r,p*i),e.tri(t,a,Uo,Jo,Wo,Jo),e.tri(Uo,Jo,Yo,Ho,Xo,Ho),e.tri(Uo,Jo,Xo,Ho,Wo,Jo)}}function Qo(e,t,n,r,i,a){let o=[Uo.copy(t).addScaledVector(r,i*1.6).clone(),Wo.copy(t).addScaledVector(n,i*.55).clone(),Go.copy(t).addScaledVector(r,-i*1.6).clone(),Uo.copy(t).addScaledVector(n,-i*.55).clone()];for(let n=0;n<4;n++)e.tri(t,a,o[n],Ho,o[(n+1)%4],Ho)}var $o=new z,es=new z,ts=new z,ns=new n;function rs(e,t,n,r,i,a){for(let[o,s,c]of[[r,n,2],[n,r,1.35]])for(let n of[1,-1])$o.copy(t).addScaledVector(s,i*.13),es.copy(t).addScaledVector(s,-i*.13),ts.copy(t).addScaledVector(o,n*i*c),e.tri($o,a,es,a,ts,Ho);for(let o=0;o<4;o++){let s=o*Math.PI/2,c=s+Math.PI/2;$o.copy(t).addScaledVector(n,Math.cos(s)*i*.45).addScaledVector(r,Math.sin(s)*i*.45),es.copy(t).addScaledVector(n,Math.cos(c)*i*.45).addScaledVector(r,Math.sin(c)*i*.45),e.tri(t,a,$o,Ho,es,Ho)}}function is(e,t,n,r,i,a,o){ns.copy(o).multiplyScalar(.6),$o.copy(t).addScaledVector(n,i*.3).addScaledVector(r,a),es.copy(t).addScaledVector(n,i*.3).addScaledVector(r,-a),ts.copy(t).addScaledVector(n,i),e.tri(t,o,$o,ns,ts,Ho),e.tri(t,o,ts,Ho,es,ns)}function as(e,t){let n=new z(1,0,0),r=new z(0,1,0);if(!t)return{right:new z(0,0,1),up:r};n.applyQuaternion(t.quaternion),r.applyQuaternion(t.quaternion);let i=-e.rotation.y;return n.applyAxisAngle(new z(0,1,0),i),r.applyAxisAngle(new z(0,1,0),i),{right:n,up:r}}function os(e,t){let r=Ao,i=r.form,a=e.userData.ice,o=e.getObjectByName(`ice-crystals`),s=e.getObjectByName(`ice-shells`),c=e.getObjectByName(`ice-aura`),l=Math.min(1,Math.max(0,t.left*2)),u=t.age>=i.time,d=[0,1,2].map(e=>Lo((t.age-i.grow[e])/i.growTime,i.overshoot));o.children.forEach((e,t)=>{e.scale.y=Math.max(.001,d[t]),e.visible=d[t]>.001}),s.children.forEach((e,t)=>{e.scale.y=Math.max(.001,d[t]),e.visible=d[t]>.001}),o.scale.set(1,t.look.height*l,1),s.scale.copy(o.scale),o.position.set(t.look.shakeX,0,t.look.shakeZ),s.position.copy(o.position),a.material.opacity=t.look.opacity*Math.min(1,l*1.2);let f=Math.max(0,1-Math.abs(t.age-i.flash)/.16),p=.5+.1*Math.sin(t.time*2.2);a.shellMaterial.opacity=Math.min(1,(p+f*1.1+(t.look.glow-r.glow.base)*.4)*l),a.material.emissiveIntensity=t.look.glow+f*1.2;let m=c.geometry,h=m.getAttribute(`position`),g=m.getAttribute(`color`),_=new Vo(h.array,g.array),v=h.count/3,{right:y,up:b}=as(e,t.camera),x=new n(r.color.mist),S=new n(r.color.sparkle),C=new n(r.color.frost),w=Io(t.age/i.gather),T=Io(t.age/(i.gather+.1)),E=a.width/2+r.frost.extra,D=new z(0,.03,0),O=new z(0,0,E*T),ee=new z(r.frost.across*T,0,0);Ko.copy(C).multiplyScalar(r.frost.strength*l*(1+f*.8)),Zo(_,D,O,ee,1,Ko,24);let k=new z,A=new z,te=new z,ne=new n(r.color.glowHigh);for(let e of a.motes.spike){let n=e.length*Io((t.age-e.delay)/.28);n<.01||(A.set(e.side*Math.cos(e.angle),0,Math.sin(e.angle)),te.set(-A.z,0,A.x),k.set(e.side*.16,.025,e.along),Ko.copy(C).lerp(ne,.4).multiplyScalar(r.frost.spikeStrength*(.8+.2*Math.sin(t.time*1.7+e.phase))*l*(1+f*.6)),is(_,k,A,te,n,r.frost.spikeWidth,Ko))}for(let e of a.motes.halo){let n=r.halo.strength*w*(.75+.25*Math.sin(t.time*e.rate+e.phase))*(1+f*1.2),i=e.size*(.6+.4*w),a=Math.max(e.height*Math.max(.3,d[0]),i*.8+.03);Ko.copy(x).lerp(C,.35).multiplyScalar(n*l),Zo(_,Go.set(0,a,e.along).clone(),y,qo.copy(b).multiplyScalar(.8),i,Ko,12)}for(let e of a.motes.mist){let n,a,o,s,c;if(u){let l=((t.time/r.mist.period+e.phase)%1+1)%1;n=e.side*(.25+r.mist.travel*l),o=e.along+Math.sin(e.sway+t.time*.4)*.25,a=e.height*(1-.6*l)+.05,s=Fo(r.mist.size[0],r.mist.size[1],l),c=r.mist.strength*Math.sin(Math.PI*l)*Math.min(1,(t.age-i.time)/.4+.3)}else{let i=e.sway+(1-w)*2.2,l=Fo(3.2,.25,w);n=Math.cos(i)*l*e.side,o=e.along*w+Math.sin(i)*l*(1-w),a=Fo(1.4,e.height,w),s=Fo(.9,.55,w),c=r.mist.strength*Io(t.age/.12)*(1.15-.4*w)}Ko.copy(x).multiplyScalar(c*l),Zo(_,Go.set(n,Math.max(a,s*.45+.03),o).clone(),y,qo.copy(b).multiplyScalar(.45),s,Ko,10)}for(let e of a.motes.veil){let n=((t.time/r.veil.period+e.phase)%1+1)%1,a=Fo(r.veil.size[0],r.veil.size[1],n),s=Math.max(Fo(r.veil.top,.35,n)*o.scale.y,a*.7+.03),c=(u?r.veil.strength:0)*Math.sin(Math.PI*n)*Math.min(1,(t.age-i.time)/.4+.2);Ko.copy(x).lerp(C,.2).multiplyScalar(c*l),Zo(_,Go.set(e.side*(.38+n*.25),s,e.along+Math.sin(e.sway+t.time*.5)*.2).clone(),y,qo.copy(b).multiplyScalar(.7),a,Ko,10)}for(let e of a.motes.sparkle){let n,r;if(!u&&w<1){let t=e.sway+(1-w)*3,i=Fo(2.8,0,w);n=new z(e.across+Math.cos(t)*i,Fo(e.height+1,e.height,w),e.along+Math.sin(t)*i),r=.6+.4*w}else n=new z(e.across,e.height*o.scale.y*d[0],e.along),r=Math.max(0,Math.sin(t.time*e.rate*Math.PI*2+e.phase))**6+f*.8;Ko.copy(S).multiplyScalar(r*l),rs(_,n,y,b,e.size*(1+f*.6),Ko)}for(let e of a.motes.dust){let n=((e.height-t.time*e.fall)%2.6+2.6)%2.6,i=Math.sin(t.time*1.3+e.sway)*.2,a=(u?r.dust.strength:0)*Math.min(1,n/.4)*l;Ko.copy(S).multiplyScalar(a),Qo(_,Go.set(e.across+i,n+.05,e.along).clone(),y,b,e.size,Ko)}_.finish(v),h.needsUpdate=!0,g.needsUpdate=!0,e.userData.state={grow:d.map(e=>+e.toFixed(3)),height:+(t.look.height*l).toFixed(3),opacity:+a.material.opacity.toFixed(3),glow:+a.material.emissiveIntensity.toFixed(3),shell:+a.shellMaterial.opacity.toFixed(3),gather:+w.toFixed(3),formed:u}}function ss(e,t){let n=Ao.shards,r=Ao.burst,i=new B,o=Po(e),s=jo();s.emissiveIntensity=1.1;for(let e=0;e<n.count;e++){let r=Fo(n.size[0],n.size[1],o()),c=new R(e%3?new a(r,0):new ee(r*.6,r*2.2,6),s);c.scale.y=1.2+o()*.9;let l=(o()-.5)*t,u=.2+o()*2,d=o()<.5?-1:1;c.userData.start=new z(d*.1,u,l),c.userData.velocity=new z(d*Fo(n.speed[0],n.speed[1],o()),Fo(n.up[0],n.up[1],o()),(o()-.5)*3),c.userData.spin=new z(o()*n.spin,o()*n.spin,o()*n.spin),c.castShadow=!1,c.frustumCulled=!1,i.add(c)}let c=r.flash.count*12*3+r.mist*12*3+r.sparkles*8,l=new N;l.setAttribute(`position`,new pe(new Float32Array(c*9),3).setUsage(m)),l.setAttribute(`color`,new pe(new Float32Array(c*9),3).setUsage(m));let u=new R(l,Mo(`ice-burst`));return u.name=`ice-burst`,u.frustumCulled=!1,u.renderOrder=3,u.userData.mist=Array.from({length:r.mist},(e,n)=>({along:(n/(r.mist-1)-.5)*t,side:n%2?1:-1})),u.userData.width=t,u.userData.sparkles=Array.from({length:r.sparkles},()=>{let e=o()*Math.PI*2,n=o()*.9;return{along:(o()-.5)*t,height:.3+o()*1.8,dir:new z(Math.cos(e)*Math.cos(n),Math.sin(n)+.2,Math.sin(e)*Math.cos(n)),speed:Fo(r.speed[0],r.speed[1],o()),size:.08+o()*.1}}),i.add(u),i.name=`ice-shatter`,i.userData.noFade=!0,i.userData.material=s,i}function cs(e,t,r,i,a,o,s){let c=Ao.shards,l=Ao.burst,u=a*o,d=i??{x:1,z:0};e.position.set(t,0,r),e.rotation.y=Math.atan2(-d.z,d.x);let f=a<c.fadeFrom?1:Math.max(0,1-(a-c.fadeFrom)/(1-c.fadeFrom));for(let t of e.children){if(!(t instanceof R)||t.name===`ice-burst`)continue;let{start:e,velocity:n,spin:r}=t.userData;t.position.set(e.x+n.x*u,Math.max(.05,e.y+n.y*u-c.gravity*u*u/2),e.z+n.z*u),t.rotation.set(r.x*u,r.y*u,r.z*u)}e.userData.material.opacity=Ao.opacity*f;let p=e.getObjectByName(`ice-burst`),m=p.geometry.getAttribute(`position`),h=p.geometry.getAttribute(`color`),g=new Vo(m.array,h.array),{right:_,up:v}=as(e,s),y=new n(Ao.color.mist),b=new n(Ao.color.sparkle),x=new n(Ao.color.glowHigh),S=p.userData.width;for(let e=0;e<l.flash.count;e++){let t=l.flash.strength*Math.max(0,1-u/l.flash.time)**2,n=l.flash.size*(1+u*3);Ko.copy(x).multiplyScalar(t),Zo(g,Go.set(0,Math.max(1.1,n*.75+.05),(e/Math.max(1,l.flash.count-1)-.5)*S*.7).clone(),_,qo.copy(v).multiplyScalar(.75),n,Ko,12)}for(let e of p.userData.mist){let t=l.radius*Io(a*1.6),n=.55*(1-a)**1.5,r=.6+t*.5;Ko.copy(y).multiplyScalar(n),Zo(g,Go.set(e.side*t*.5,Math.max(.4+a*.6,r*.55+.03),e.along).clone(),_,qo.copy(v).multiplyScalar(.55),r,Ko,12)}for(let e of p.userData.sparkles){let t=e.speed*u*(1-a*.4),n=(1-a)**2*(.6+.4*Math.abs(Math.sin(u*40+e.along)));Ko.copy(b).multiplyScalar(n),rs(g,Go.set(e.dir.x*t,Math.max(.05,e.height+e.dir.y*t-4*u*u),e.along+e.dir.z*t).clone(),_,v,e.size*1.3,Ko)}g.finish(m.count/3),m.needsUpdate=!0,h.needsUpdate=!0}var $={color:`#8fe3ff`,foe:`#ffa3b8`,white:`#ffffff`,glow:1.18,opacity:.86,power:1.6,grow:{by:.6,over:12},capacity:320,length:1.7,radius:.32,shine:.38,shineLength:.62,lift:.13,drops:[[1.3,.21],[1.8,.17],[2.28,.13],[2.72,.1]],splash:{count:8,speed:5.5,life:.3,size:.18,gravity:9}},ls=new z(0,0,1),us=new z(0,1,0),ds=new Te,fs=new b,ps=new z,ms=new z,hs=new z,gs=new z,_s=e=>{let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)},vs=e=>e.puckSpeed===27,ys=e=>(e.power?$.power:1)*(1+$.grow.by*Math.min(1,e.pos.distanceTo(e.from)/$.grow.over));function bs(e,t){let n=new ue(e,Math.max(.001,t-e*2),4,10);return n.rotateX(Math.PI/2),n.translate(0,0,-t/2+e*.6),n}var xs=class{root=new B;bodies=new Map;splashes=[];paints=[new n($.color).multiplyScalar($.glow),new n($.foe).multiplyScalar($.glow)];waterMaterials;shineMaterial=new L({color:$.white,transparent:!0,opacity:.95,depthWrite:!1});bodyGeometry=bs($.radius,$.length);shineGeometry=bs($.radius*$.shine,$.length*$.shineLength);drops;viewing=0;constructor(){this.root.name=`water-shots`,this.waterMaterials=this.paints.map(e=>new L({color:e,transparent:!0,opacity:$.opacity,depthWrite:!1}));let t=new Ie(1,8,6);t.setAttribute(`color`,new c(new Float32Array(t.getAttribute(`position`).count*4).fill(1),4));let n=new L({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,opacity:$.opacity});this.drops=new e(t,n,$.capacity),this.drops.name=`water-drops`,this.drops.instanceColor=new se(new Float32Array($.capacity*3).fill(1),3),this.drops.count=0,this.drops.frustumCulled=!1,this.root.add(this.drops)}debug(){return{bodies:new Map([...this.bodies].map(([e,t])=>[e,t.group])),splashes:this.splashes.length,drops:this.drops}}span(e){let t=this.bodies.get(e);if(!t)return;let n=ys(t),r=$.drops[$.drops.length-1];return{head:t.pos.clone().addScaledVector(t.dir,$.radius*n).toArray(),tail:t.pos.clone().addScaledVector(t.dir,-(r[0]+r[1])*n).toArray(),radius:$.radius*n,foe:t.team!==this.viewing}}update(e,t,n){this.viewing=Xe(e);let r=new Set;for(let t of e.projectiles){if(t.kind!==`bullet`)continue;r.add(t.id);let e=this.bodies.get(t.id);if(!e){let n=new B,r=new R(this.bodyGeometry,this.waterMaterials[0]),i=new R(this.shineGeometry,this.shineMaterial);r.renderOrder=1,i.renderOrder=2,i.position.set(0,$.lift,.02),n.add(r,i),n.name=`water-shot`,e={group:n,water:r,pos:new z,from:new z(t.pos.x,t.height??1.1,t.pos.z),dir:new z(0,0,1),speed:0,power:vs(t),seed:t.id,team:t.team},this.bodies.set(t.id,e),this.root.add(n)}e.team=t.team,e.water.material=this.waterMaterials[t.team===this.viewing?0:1],e.pos.set(t.pos.x,t.height??1.1,t.pos.z),e.dir.set(t.velocity.x,t.verticalVelocity??0,t.velocity.z),e.speed=e.dir.length(),e.speed>1e-6&&e.dir.divideScalar(e.speed),e.group.position.copy(e.pos),e.group.quaternion.setFromUnitVectors(ls,e.dir),e.group.scale.setScalar(ys(e))}for(let[n,i]of this.bodies)r.has(n)||(this.root.remove(i.group),this.bodies.delete(n),this.splashes.push(this.splashAt(e,i,t)));for(let e of this.splashes)e.age+=t;this.splashes=this.splashes.filter(e=>e.age<$.splash.life*(e.power?1.15:1)),this.writeDrops(n)}splashAt(e,t,n){let r={age:0,power:t.power,seed:t.seed,team:t.team},i=t.speed*Math.max(n,1/60),a=hs.copy(t.dir).multiplyScalar(i),o=gs.set(e.puck.pos.x,.25,e.puck.pos.z),s=I.clamp(ps.copy(o).sub(t.pos).dot(a)/Math.max(a.lengthSq(),1e-9),0,1),c=t.pos.clone().addScaledVector(a,s);if(Math.hypot(c.x-o.x,c.z-o.z)<U.puckRadius+.9){let e=new z(c.x-o.x,0,c.z-o.z);return e.lengthSq()<1e-6&&e.set(-t.dir.x,0,-t.dir.z),e.normalize(),{...r,pos:new z(o.x+e.x*U.puckRadius,Math.max(.3,c.y),o.z+e.z*U.puckRadius),normal:e,ground:!1}}let l=t.pos.clone().addScaledVector(t.dir,i*.5);return l.y<.35?(l.y=.03,{...r,pos:l,normal:us.clone(),ground:!0}):{...r,pos:l,normal:t.dir.clone().negate(),ground:!1}}writeDrops(e){let t=this.drops,r=$.capacity,i=new n($.white),a=0,o=(e,n,i,o,s)=>{a>=r||(ds.compose(ms.set(e,n,i),fs.identity(),ps.setScalar(o)),t.setMatrixAt(a,ds),t.setColorAt(a,s),a++)};for(let t of this.bodies.values()){let n=ys(t),r=t.dir,i=t.pos,a=this.paints[t.team===this.viewing?0:1];for(let[s,c]of $.drops){let l=Math.sin(e*23+s*9+t.seed)*.03*n;o(i.x-r.x*s*n,i.y-r.y*s*n+l,i.z-r.z*s*n,c*n,a)}}let s=$.splash;for(let e of this.splashes){let t=e.power?$.power:1,n=Math.min(1,e.age/(s.life*(e.power?1.15:1))),r=this.paints[e.team===this.viewing?0:1],a=e.normal,c=hs.crossVectors(a,Math.abs(a.y)>.9?ls:us).normalize(),l=gs.crossVectors(c,a).normalize(),u=e.ground?.55:.8,d=e.ground?.9:.55;for(let f=0;f<s.count;f++){let p=f/s.count*Math.PI*2+_s(e.seed+f)*.6,m=.75+.5*_s(e.seed*3+f),h=(c.x*Math.cos(p)+l.x*Math.sin(p))*u*m+a.x*d,g=(c.y*Math.cos(p)+l.y*Math.sin(p))*u*m+a.y*d,_=(c.z*Math.cos(p)+l.z*Math.sin(p))*u*m+a.z*d,v=s.speed*t*(.8+.4*_s(e.seed*5+f)),y=e.age;o(e.pos.x+h*v*y,Math.max(.02,e.pos.y+g*v*y-.5*s.gravity*y*y),e.pos.z+_*v*y,s.size*t*(1-n*.75),f%3==0?i:r)}}t.count=a,t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}},Ss=.6+U.puckRadius,Cs={ally:new n(`#a9f878`),enemy:new n(`#ff7869`)},ws={radius:1.45,spread:72*Math.PI/180,thickness:.15,lateral:.065,centreY:1.05,rootFade:.03},Ts=[0,Math.PI/2,Math.PI/4,-Math.PI/4],Es=[yt,_t,it,dt];function Ds(e){let t=[],n=[],r=(e,r)=>{t.push(e.x,e.y,e.z),n.push(r,r,r)};for(let t=0;t<e.length-1;t++){let n=e[t],i=e[t+1],a=n.centre.clone().addScaledVector(n.across,-n.half),o=n.centre.clone().addScaledVector(n.across,n.half),s=i.centre.clone().addScaledVector(i.across,-i.half),c=i.centre.clone().addScaledVector(i.across,i.half);r(a,0),r(n.centre,n.glow),r(i.centre,i.glow),r(a,0),r(i.centre,i.glow),r(s,0),r(o,0),r(i.centre,i.glow),r(n.centre,n.glow),r(o,0),r(c,0),r(i.centre,i.glow)}let i=new N;return i.setAttribute(`position`,new c(t,3)),i.setAttribute(`color`,new c(n,3)),i}var Os=[[-.95,0],[-.34,.5],[.08,1],[.5,.8],[1.05,0]];function ks(e,t,n,r,i,a){let o=[],s=[],l=e=>{o.push(e.point.x,e.point.y,e.point.z),s.push(e.glow,e.glow,e.glow)};for(let o of[1,-1]){let s=[];for(let c=0;c<=40;c++){let l=c/40*2-1,u=l*t,d=Math.max(0,1-l*l),f=n*d**.55,p=.62+.38*d**.35,m=r*d**.5;s.push(Os.map(([t,n])=>{let r=e+t*f,s=i(r*Math.sin(u),r*Math.cos(u),o*m*n);return{point:s,glow:n*p*a(s)}}))}for(let e=0;e<40;e++)for(let t=0;t<Os.length-1;t++)l(s[e][t]),l(s[e][t+1]),l(s[e+1][t+1]),l(s[e][t]),l(s[e+1][t+1]),l(s[e+1][t])}let u=new N;return u.setAttribute(`position`,new c(o,3)),u.setAttribute(`color`,new c(s,3)),u}var As=e=>new L({color:`#ffffff`,vertexColors:!0,transparent:!0,opacity:e,depthWrite:!1,side:2,blending:2}),js=.62;function Ms(){let e=ws,t=new B,n=e=>Math.max(0,Math.min(1,e)),r=e=>{let t=n(e);return t*t*(3-2*t)};for(let n of Ts){let i=Math.cos(n),a=Math.sin(n);t.add(new R(ks(e.radius,e.spread,e.thickness,e.lateral,(t,n,r)=>new z(t*i-r*a,e.centreY+t*a+r*i,n),t=>r(t.y/e.rootFade)),As(js)))}let i=new R(new Ie(.1,10,8),new L({color:`#ffffff`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));i.position.set(0,e.centreY,0),t.add(i);let a=[];for(let e=0;e<=10;e++){let t=1.1-e/10*3.4,i=r(n((1-Math.abs(t+.6)/2)/.5))*.6;a.push({centre:new z(0,.04,t),across:new z(1,0,0),half:.19*(.5+.5*i),glow:i})}return t.add(new R(Ds(a),As(.8))),t}var Ns=new n(`#ffffff`),Ps=new n(rt.hot),Fs=new n($e.color),Is={taper:.935,height:.4583,floorGap:.085,coreRadius:.59,coreThickness:.035,coreLift:.0015,bandRadius:.957,bandThickness:.075,bandAt:.648,glowInner:1.18,glowOuter:1.31,glowLift:.025,trailRadius:.59,trailCount:14,trailLift:.06},Ls=e=>e.isMesh===!0&&[e.material].flat().some(e=>e.name.startsWith(`Yuru_Line`)),Rs=[`rift-arena`,`blender-harbour-city`,`terraced-valley`,`harbour-water`],zs=.06,Bs=`EpicCity_TwilightSky`,Vs=class{canvas;mapId;renderer;ready;scene=new _e;camera=new xe(60,1,.1,850);yaw=Math.PI/2;pitch=.58;gunPitch=.12;fighters=new Map;bench=[];viewing=0;avatars=[];setAvatars(e){this.avatars=e.map(e=>({id:e.id,look:{...e.look}}))}setAvatar(e){this.setAvatars(e?[e]:[])}footsteps=new at;steps=[];takeSteps(){let e=this.steps;return this.steps=[],e}takeFlames(){return this.flameSim.starts.splice(0)}get bookStyle(){return this.effects.bookStyle}setBook(e){this.effects.setBook(e)}avatarOf(e){if(ut()===`human`)return this.avatars.find(t=>t.id===e.id)?.look}seatActions={ready:e=>!(e.role===`samurai`&&!Ht())&&!(ut()===`human`&&e.role!==`samurai`&&!Bt(e.role))&&!(e.role===`samurai`&&Ue(this.avatarOf(e),ut())===`grandpa`&&!Ft())&&!(Ze(e.role,this.avatarOf(e),ut())&&!Pt(e.role))&&!(t=>t&&!Rt(t,e.role))(this.avatarOf(e)),look:e=>{let t=this.avatarOf(e);return t?bt(t):``},create:e=>this.createFighter(e),park:e=>{this.scene.remove(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.remove(e.calm)},unpark:e=>{Object.assign(e,{healLevel:0,calmLevel:0,opacity:1}),this.scene.add(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.add(e.calm)}};transient=new Map;puck=new B;puckTint=new n(Ge[0].color);puckParts=[];puckSpotOn=!1;threatRing;teamRings=co();ringSpots=[];threatDisplay=qe();reachFan;coreBand;bodyRing;coreGlow;coreLight;coreBurst;coreFlash={since:-1,level:0,burst:-1};coreOut=1;reachFanFlash;reachFanLevel=0;reachFanRole;reachLook=po.royal;corePulse=0;trail=[];target=new z;shake=new z;lastPhase=``;puckFollow=new gr;follow=new xt;followTarget;cameraMode=gt.initial;projection=new z;effects;effectShaders=new B;shadowElapsed=0;benchmarkMode=null;benchmarkSaved;setBenchmark(e){let t=this.benchmarkSaved,n=this.programKey();if(t){for(let e of t.hidden)e.visible=!0;this.benchmarkSaved=void 0}if(this.benchmarkMode=e,this.applyQuality(e?.quality?{...this.baseQuality,...e.quality}:this.baseQuality),e){let t={hidden:[]};if(e.hideScenery)for(let e of Rs){let n=this.scene.getObjectByName(e);n?.visible&&(n.visible=!1,t.hidden.push(n))}if(e.hideOutlines)for(let e of[...this.fighters.values(),...this.bench])e.mesh.traverse(e=>{Ls(e)&&e.visible&&(e.visible=!1,t.hidden.push(e))});this.benchmarkSaved=t}else{for(let e of this.plainMaterials.values())e.dispose();this.plainMaterials.clear()}if(n!==this.programKey()){let t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(e?.direct?null:this.effects.composer.readBuffer),this.renderer.compile(this.scene,this.camera),this.renderer.setRenderTarget(t)}}benchmarkOptions(){let e=this.baseQuality;return{baked:e.bakeMapLight&&this.bakes.size>0,mobile:this.mobileDevice,pixelRatio:e.pixelRatio,outlines:[...this.fighters.values()].some(e=>{let t=!1;return e.mesh.traverse(e=>{Ls(e)&&(t=!0)}),t}),gtao:gi[this.mapId].pc.ambientOcclusion&&!e.ambientOcclusion,before:vi(this.mapId,this.mobileDevice)}}programKey(){return`${!!this.benchmarkMode?.direct}:${this.lamps.filter(e=>e.visible).length}:${this.mapMaterialKey()}:${this.skyMesh?.visible}:${this.fighterMaterialKey()}`}mapMeshes=[];lightMaterials=new Map;plainMaterials=new Map;mapMaterialKey(){let e=this.benchmarkMode;if(e?.plainMaterials)return`plain`;if(!this.quality.mapLight||e?.standardMaterials)return`standard`;let t=e?.mapPointLights??this.quality.mapPointLights,n=e?.mapPixelPoints??!0,r=this.quality.bakeMapLight&&this.bakes.size>0&&t===this.baseQuality.mapPointLights&&n;return`light:${t}:${n}:${this.quality.shadowSamples}:${r}`}applyMapMaterials(){let e=this.mapMaterialKey(),[,t,n,r,i]=e.split(`:`),a=r===`1`;for(let{mesh:r,original:o}of this.mapMeshes){let s=o=>e===`plain`?this.plainOf(o):e!==`standard`&&r!==this.water&&xi(o)?this.lightOf(o,ji(o,t===`true`,n===`true`),a,i===`true`?r:void 0):o;r.material=Array.isArray(o)?o.map(s):s(o)}}lightOf(e,t,n,r){let i=r&&this.bakes.get(r),a=`${e.uuid}:${t}:${n}${i?`:${r.uuid}`:``}`,o=this.lightMaterials.get(a);return o||this.lightMaterials.set(a,o=Ti(e,this.scene.environmentIntensity,{points:t,shadowOnce:n},i)),o}makeEnvironment(){let e=new Sr,t=new Nt(this.renderer);this.scene.environment=t.fromScene(e,zs).texture,e.dispose(),t.dispose()}bakes=new Map;bakeMs=0;bakeMap(){let e=this.quality;if(!e.mapLight||!e.bakeMapLight)return;let t=performance.now(),n=Ni(this.scene,this.renderer.shadowMap.enabled);if(!n)return;let r=new Map(this.culls.map(e=>[e.mesh,e])),i=new Map;for(let{mesh:e}of this.mapMeshes)i.set(e.geometry,(i.get(e.geometry)??0)+1);for(let{mesh:t,original:a}of this.mapMeshes){if(t===this.water||Array.isArray(a)||!xi(a)||this.bakes.has(t))continue;let o=a,s=t.isInstancedMesh===!0,c=r.get(t)?.original,l=s?c?c.length/16:t.count:1,u=t.geometry.getAttribute(`position`).count*l*(o.side===2?2:1);if(Math.ceil(u/Mi.width)>this.renderer.capabilities.maxTextureSize)continue;let d={environment:wi(o,this.scene.environmentIntensity),metal:o.metalness,points:ji(o,e.mapPointLights,!0)===`vertex`},f=()=>Ii(t,n,d,o.side===2,o.side===1,c),p=f();if(s){if((i.get(t.geometry)??0)>1){let e=new N,n=t.geometry;for(let[t,r]of Object.entries(n.attributes))e.setAttribute(t,r);e.setIndex(n.index);for(let t of n.groups)e.addGroup(t.start,t.count,t.materialIndex);e.boundingSphere=n.boundingSphere,e.boundingBox=n.boundingBox,t.geometry=e}let e=new se(Float32Array.from({length:p.count},(e,t)=>t),1);e.setUsage(m),t.geometry.setAttribute(`mapLightInstance`,e)}this.bakes.set(t,{texture:Ri(p),width:Mi.width,vertices:p.vertices,texels:p.texels,redo:f})}this.bakeMs=performance.now()-t}rebake(){for(let e of this.bakes.values())e.texture.image.data=Li(e.redo(),e.width).data,e.texture.needsUpdate=!0}bakeReport(){let e=0,t=0,n=0;for(let[r,i]of this.bakes)e+=i.texture.image.width*i.texture.image.height,r.isInstancedMesh&&t++,i.texels===2&&n++;return{meshes:this.bakes.size,instanced:t,doubleSided:n,texels:e,megabytes:+(e*8/1e6).toFixed(1),milliseconds:Math.round(this.bakeMs)}}fighterLightMaterials=new Map;fighterMaterialKey(){let e=this.quality;return`${e.fighterLight?`light:${e.mapPointLights}:${e.shadowSamples}:${e.fighterKeepMetal}`:`standard`}:${e.fadeWhenNeeded}`}applyFighterMaterials(){for(let e of[...this.fighters.values(),...this.bench])this.dressFighter(e)}dressFighter(e){let t=this.quality,n=new Set;for(let r of e.parts){let i=e=>e.isMeshStandardMaterial===!0,a=n=>t.fighterLight&&i(n)&&!(t.fighterKeepMetal&&ki(n,e.role))?this.fighterLightOf(n,t.mapPointLights,t.shadowSamples===1):n;r.mesh.material=Array.isArray(r.original)?r.original.map(a):a(r.original);for(let e of[r.mesh.material].flat())n.add(e)}e.fadeMaterials=[...n]}fighterLightOf(e,t,n){let r=`${e.uuid}:${t}:${n}`,i=this.fighterLightMaterials.get(r);return i||this.fighterLightMaterials.set(r,i=Ei(e,this.scene.environmentIntensity,{points:t?`vertex`:`none`,shadowOnce:n})),i}plainOf(e){let t=e;if(!t.isMeshStandardMaterial)return e;let n=this.plainMaterials.get(e);if(!n){let r=t.color.clone();t.emissive&&t.emissiveIntensity>0&&r.add(t.emissive.clone().multiplyScalar(t.emissiveIntensity)),n=new L({color:r,map:t.map,vertexColors:t.vertexColors,side:t.side,transparent:t.transparent,opacity:t.opacity,alphaTest:t.alphaTest,alphaMap:t.alphaMap,depthWrite:t.depthWrite,depthTest:t.depthTest,fog:t.fog}),this.plainMaterials.set(e,n)}return n}async prepareMapShaders(){let e=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let t;try{t=Promise.all(Rs.map(e=>this.scene.getObjectByName(e)).filter(e=>!!e).map(e=>this.renderer.compileAsync(e,this.camera,this.scene)))}finally{this.renderer.setRenderTarget(e)}await t}skyMesh;skyCube;skyColor=new n(`#203d61`);async cacheSky(e){this.skyMesh&&e&&!this.skyCube&&(this.skyCube=new Mt(e,{type:f,generateMipmaps:!1,minFilter:Ce,magFilter:Ce,depthBuffer:!1}),await this.prepareSkyCube(),this.drawSkyCube())}async prepareSkyCube(){let e=this.skyMesh,t=this.skyCube;if(!e||!t)return;let n=e.parent,r=new _e,i=this.renderer,a=i.getRenderTarget(),o;r.add(e),i.setRenderTarget(t);try{o=i.compileAsync(r,new xe(90,1,1,1e3))}finally{i.setRenderTarget(a),n.add(e)}await o}drawSkyCube(){let e=this.skyMesh,t=this.skyCube;if(!e||!t)return;let n=e.parent,r=new _e,a=e.visible;r.add(e),e.visible=!0,new i(1,1e3,t).update(this.renderer,r),e.visible=a,n.add(e)}applySky(){let e=this.skyMesh;if(!e)return;let t=this.benchmarkMode,n=!!t?.hideSky,r=!!this.skyCube&&this.quality.skyCube>0&&!t?.liveSky;e.visible=!n&&!r,this.scene.background=r&&!n?this.skyCube.texture:this.skyColor}culls=[];cullShapes(e){if(!this.culls.length)return;let t=this.renderer.shadowMap.autoUpdate||this.renderer.shadowMap.needsUpdate,n=this.quality.cullBuildings&&this.quality.shadow===`once`&&!this.benchmarkMode?.drawAllBuildings&&!t,r=this.benchmarkMode?.halfShapes?e=>e%2==0:void 0,i=n?Hi(e):void 0;if(!i&&!r){if(!this.cullsFull){for(let e of this.culls)e.showAll();this.cullsFull=!0}return}this.cullsFull=!1;for(let e of this.culls)e.show(e.pick(i,r))}cullsFull=!0;quality;baseQuality;applyQuality(e){if(e!==this.quality){this.quality=e;let t=Math.min(devicePixelRatio,e.pixelRatio);this.renderer.getPixelRatio()!==t&&(this.renderer.setPixelRatio(t),this.resize()),this.renderer.shadowMap.autoUpdate=e.shadow===`every`,this.shadowBaked=!1,this.shadowElapsed=0,this.renderer.shadowMap.needsUpdate=!0,this.puckDisc.castShadow=e.movingShadows,this.effects.setBloom(e.bloom);for(let t of this.lamps)t.visible=e.lampLights;this.effects.setAmbientOcclusion(e.ambientOcclusion),this.effects.setSharpen(e.sharpen),this.effects.setAntialias(e.antialias)}this.applyMapMaterials(),this.applySky(),this.applyFighterMaterials()}lamps=[];puckDisc;shadowBaked=!1;sceneryReady=!1;viewportWidth=1;viewportHeight=1;get viewport(){return{width:this.viewportWidth,height:this.viewportHeight}}water;mobileDevice=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1;flameSim=new Ra(this.mobileDevice?Q.mobile:1);flameView=new Ga;waterShots=new xs;flameAt=new z;constructor(e,t=`royal`,n){this.canvas=e,this.mapId=t,this.reachLook=po[t];let r=St(t),i=r.shape===`circle`;this.renderer=new At({canvas:e,antialias:!this.mobileDevice,alpha:!1,powerPreference:`high-performance`}),e.addEventListener(`webglcontextrestored`,()=>{this.makeEnvironment(),this.drawSkyCube(),this.rebake()}),this.baseQuality=this.quality=_i(t,this.mobileDevice),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.quality.pixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=this.quality.shadow===`every`,this.renderer.shadowMap.needsUpdate=!0,this.renderer.shadowMap.type=1,this.renderer.outputColorSpace=be,this.renderer.toneMapping=4,this.scene.add(this.flameView.root),this.scene.add(this.waterShots.root);let a=br[t];this.renderer.toneMappingExposure=a.exposure,this.skyColor.set(a.background),this.scene.background=this.skyColor,this.scene.fog=new M(a.fog.color,a.fog.density),this.scene.add(new ae(a.hemisphere.sky,a.hemisphere.ground,a.hemisphere.intensity));let o=new u(a.sun.color,a.sun.intensity);o.position.set(-28,47,-38),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-r.width/2-24,right:r.width/2+24,top:r.depth/2+24.5,bottom:-r.depth/2-24.5,near:1,far:160}),i||Object.assign(o.shadow.camera,{left:-r.width/2-31,right:r.width/2+31,top:r.depth/2+31.5,bottom:-r.depth/2-31.5}),o.shadow.bias=-3e-4,o.shadow.normalBias=.025,o.shadow.radius=2,this.scene.add(o);let s=new u(a.fill.color,a.fill.intensity);s.position.set(-15,15,35),this.scene.add(s);let c=$r(this.renderer,zs).then(e=>{this.scene.environment=e});this.scene.environmentIntensity=a.environment;let l=(e,t)=>t?.then(t=>(performance.mark(`scene:${e}`),t));this.ready=Promise.all([l(`map`,t===`school`?Vn(this.scene):t===`dojo`?or(this.scene):i?vn(this.scene):dn(this.scene)),l(`samurai`,Vt()),l(`yuru-party`,ut()===`human`?zt(n?.filter(e=>e!==`samurai`)):void 0),l(`grandpa`,ut()===`human`&&(!n||n.includes(`samurai`))?Lt():void 0),l(`cpu-yuru`,ut()===`human`?It(n):void 0),l(`environment`,c)]).then(async()=>{this.water=this.scene.getObjectByName(`harbour-water`);for(let e of Rs){let t=this.scene.getObjectByName(e);t&&(t.updateWorldMatrix(!0,!0),t.traverse(e=>{e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1}))}this.scene.traverse(e=>{e.name===`city-lamp-light`&&e.isPointLight&&this.lamps.push(e)});for(let e of this.lamps)e.visible=this.quality.lampLights;for(let e of Rs)this.scene.getObjectByName(e)?.traverse(e=>{let t=e;t.isMesh&&[t.material].flat().some(e=>e.isMeshStandardMaterial)&&this.mapMeshes.push({mesh:t,original:t.material})});for(let e of[`blender-harbour-city`,`rift-arena`])this.scene.getObjectByName(e)?.traverse(e=>{e.isInstancedMesh&&this.culls.push(new Ui(e))});return this.skyMesh=this.scene.getObjectByName(Bs),await this.cacheSky(this.quality.skyCube),this.bakeMap(),this.applyMapMaterials(),this.applySky(),performance.mark(`scene:map-ready`),this.prepareMapShaders().then(()=>this.prepareEffectShaders())}).then(()=>{this.sceneryReady=!0,performance.mark(`scene:shaders`)}),this.scene.onBeforeRender=(e,t,n)=>this.cullShapes(n),this.ready.catch(e=>{console.error(`ゲームの素材の読み込みに失敗しました`,e)});let d=U.puckRadius,f=Is,p=d*f.height,m=f.floorGap+p,h=new R(new ye(d*f.taper,d,p,32),new F({color:`#101923`,metalness:.75,roughness:.26}));h.position.y=f.floorGap+p/2,h.castShadow=this.quality.movingShadows,this.puck.add(h),this.puckDisc=h;let g=new R(new ye(d*f.coreRadius,d*f.coreRadius,f.coreThickness,24),new L({color:`#e4ffc0`}));g.position.y=m+f.coreLift+f.coreThickness/2,this.puck.add(g);let _=new R(new te(d*f.bandRadius,d*f.bandThickness,6,32),new L({color:`#d0ff82`}));_.rotation.x=Math.PI/2,_.position.y=f.floorGap+p*f.bandAt,this.puck.add(_);let v=new R(new H(d*f.glowInner,d*f.glowOuter,32),new L({color:`#d0ff82`,transparent:!0,opacity:.55,side:2,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.y=f.glowLift,this.puck.add(v),this.scene.add(this.puck),this.puckParts=[g.material,_.material,v.material];let y=new R(new H(He.ringRadius*He.ringInner,He.ringRadius,40),new L({color:`#ff5a5a`,transparent:!0,opacity:0,side:2,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.visible=!1,this.threatRing=y,this.scene.add(y),this.scene.add(this.teamRings);let b=Math.acos(wt.showAngle),x=new R(new Ne(1,48,-b,b*2),new L({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.visible=!1,this.reachFan=x,this.scene.add(x);let S=new R(x.geometry,new L({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));S.rotation.x=-Math.PI/2,S.visible=!1,S.renderOrder=bo.fan,this.reachFanFlash=S,this.scene.add(S);let C=new R(new H(.9,1,48,1,-b,b*2),new L({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.visible=!1,this.coreBand=C,this.scene.add(C);let w=new R(To(.9,1,b),ko());w.rotation.x=-Math.PI/2,w.visible=!1,w.renderOrder=bo.glow,this.coreGlow=w,this.scene.add(w);let T=new R(Eo(.9,1,b),ko());T.material.blending=1,T.rotation.x=-Math.PI/2,T.visible=!1,T.renderOrder=bo.light,this.coreLight=T,this.scene.add(T);let E=new R(Do(1,b),ko());E.rotation.x=-Math.PI/2,E.visible=!1,E.renderOrder=bo.burst,this.coreBurst=E,this.scene.add(E);let D=Ss,O=new R(new H(D-.06,D,48),new L({color:`#e8eef6`,transparent:!0,opacity:0,side:2,depthWrite:!1}));O.rotation.x=-Math.PI/2,O.visible=!1,this.bodyRing=O,this.scene.add(O);for(let e=0;e<f.trailCount;e++){let t=new R(new Ne(d*f.trailRadius*(1-e/18),12),new L({color:`#c7ff7b`,transparent:!0,opacity:.3*(1-e/f.trailCount),depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=f.trailLift,t.visible=!1,this.scene.add(t),this.trail.push(t)}this.effects=new hi(this.renderer,this.scene,this.camera,this.mobileDevice,{ambientOcclusion:this.quality.ambientOcclusion,bloom:this.quality.bloom}),this.effects.setSharpen(this.quality.sharpen),this.effects.setAntialias(this.quality.antialias),this.effects.setBook(ft()),this.effects.maskRoots=()=>[...this.fighters.values()].map(e=>e.mesh),this.resize()}async prepareEffectShaders(){let e=new ve(1,1),t=[new L,new L({transparent:!0,depthWrite:!1}),new L({transparent:!0,depthWrite:!1,side:2}),new F({color:`#87e5ff`,emissive:`#1a809b`,emissiveIntensity:.3,metalness:.2,roughness:.18,transparent:!0,opacity:.84}),qi()];for(let n of t){let t=new R(e,n);t.castShadow=!0,this.effectShaders.add(t)}for(let e of this.flameView.warmup())this.effectShaders.add(e);this.effectShaders.add(new R(To(.9,1,Math.PI/2),ko()));let n=co(1);n.count=1,this.effectShaders.add(n);let r=new N;r.setAttribute(`position`,new pe(new Float32Array(9),3)),r.setAttribute(`color`,new pe(new Float32Array(9),3)),this.effectShaders.add(new R(r,new L({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2})));let i=new H(.5,1,4);i.setAttribute(`color`,new pe(new Float32Array(i.getAttribute(`position`).count*3),3)),this.effectShaders.add(new R(i,new L({vertexColors:!0,transparent:!0,side:2,depthWrite:!1})));let a=new N;a.setAttribute(`position`,new pe(new Float32Array(9),3)),this.effectShaders.add(new R(a,Ut()));let o=new N;o.setAttribute(`position`,new pe(new Float32Array(9),3)),o.setAttribute(`normal`,new pe(new Float32Array([0,1,0,0,1,0,0,1,0]),3)),o.setAttribute(`skinIndex`,new re(new Uint16Array(12),4)),o.setAttribute(`skinWeight`,new pe(new Float32Array([1,0,0,0,1,0,0,0,1,0,0,0]),4));let s=new h(o,new L({transparent:!0,depthWrite:!1})),c=new we;s.add(c),s.bind(new d([c])),s.frustumCulled=!1,this.effectShaders.add(s);let l=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let u;try{u=this.renderer.compileAsync(this.effectShaders,this.camera,this.scene)}finally{this.renderer.setRenderTarget(l)}await u}async prepareFirstDraw(){let e=this.renderer,t=this.effects.composer,n=e.getRenderTarget(),r=[];try{e.setRenderTarget(t.readBuffer);for(let t of[this.puck,this.skyMesh?.visible?this.skyMesh:void 0])t&&r.push(e.compileAsync(t,this.camera,this.scene));let n=ii(this.scene.background);n&&(this.standIns.push(n),r.push(e.compileAsync(n,this.camera,this.scene)));let i=ri(this.scene);if(i.children.length){this.standIns.push(i);let t=this.scene.fog;this.scene.fog=null;try{r.push(e.compileAsync(i,this.camera,this.scene))}finally{this.scene.fog=t}}for(let{mesh:n,toScreen:i}of this.effects.screenQuads())e.setRenderTarget(i?null:t.writeBuffer),r.push(e.compileAsync(n,si))}finally{e.setRenderTarget(n)}await Promise.all(r)}checkPrograms(){for(let e of this.renderer.info.programs??[])e.getUniforms()}standIns=[];async seatGently(e){this.viewing=Xe(e);for(let t=1;t<e.fighters.length;t++)xr(this.fighters,e.fighters.slice(0,t),this.bench,this.seatActions),await Un();this.seat(e)}seat(e){this.viewing=Xe(e),xr(this.fighters,e.fighters,this.bench,this.seatActions),this.dropStaleAvatars();for(let e of this.fighters.values())for(let t of e.fadeMaterials){let e=Ai(t,1,this.quality.fadeWhenNeeded);t.alphaHash!==e&&(t.alphaHash=e,t.needsUpdate=!0)}}async prepareFighterShaders(){let e=[...this.fighters.values()],t=e.flatMap(e=>[e.mesh,e.heal,e.barrier,...e.calm?[e.calm]:[]]),n=this.quality.fadeWhenNeeded?e.flatMap(e=>e.fadeMaterials).filter(e=>!e.transparent):[],r=n.map(e=>e.alphaHash),i=[],a=Wn();try{for(let e of n.length?[!1,!0]:[void 0]){if(e!==void 0)for(let t of n)t.alphaHash!==e&&(t.alphaHash=e,t.needsUpdate=!0);for(let e of vt(t)){let t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);try{i.push(this.renderer.compileAsync(e,this.camera,this.scene))}finally{this.renderer.setRenderTarget(t)}await a()}}}finally{n.forEach((e,t)=>{e.alphaHash!==r[t]&&(e.alphaHash=r[t],e.needsUpdate=!0)})}await Promise.all(i),this.effects.warmMask()}sizeStale(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;return e>0&&t>0&&(e!==this.viewportWidth||t!==this.viewportHeight)}resize(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.viewportWidth=e,this.viewportHeight=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.effects?.resize(e,t)}dispose(){this.renderer.dispose(),this.renderer.forceContextLoss()}resetCamera(e=0){this.yaw=Et(e)*Math.PI/2,this.pitch=.58,this.gunPitch=.12,this.lastPhase=``,this.puckFollow.reset(),this.follow.reset()}puckBounds(){return this.mapId===`colosseum`?{radius:St(this.mapId).radius-.9}:this.mapId===`dojo`?{box:Xn,maxY:mr.dojoMaxY}:{box:mr.bounds[this.mapId]}}project(e,t,n){return this.projection.set(e,t,n).project(this.camera),{x:(this.projection.x*.5+.5)*this.viewportWidth,y:(-.5*this.projection.y+.5)*this.viewportHeight,visible:this.projection.z>-1&&this.projection.z<1&&Math.abs(this.projection.x)<1.08&&Math.abs(this.projection.y)<1.1,behind:this.projection.z>1}}groundAxes(e,t){this.camera.updateMatrixWorld();let n={x:Math.sin(this.yaw),z:Math.cos(this.yaw)},r={x:-n.z,z:n.x},i=.5,a=this.project(e.x,t,e.z);if(!a.visible)return;let o=this.project(e.x+r.x*i,t,e.z+r.z*i),s=this.project(e.x+n.x*i,t,e.z+n.z*i);return{right:r,forward:n,onRight:{x:(o.x-a.x)/i,y:(o.y-a.y)/i},onForward:{x:(s.x-a.x)/i,y:(s.y-a.y)/i}}}setPuckSpot(e){this.puckSpotOn=e}drawPuckState(e,t){let n=ze(Math.hypot(e.puck.velocity.x,e.puck.velocity.z),Je(e)!==null);this.puckTint.lerp(this.tierColor(n),t>0?Math.min(1,t/He.blend):0);for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(n.glow);let r=Re(e);if(r>0){this.puckTint.lerp(Je(e)===null?Ns:Ps,Math.min(1,r*1.1));for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(1+r*1.6)}if(this.puckSpotOn&&e.phase===`playing`)for(let e of this.puckParts)e.color.copy(this.puckTint).lerp(Fs,$e.tint).multiplyScalar($e.bright);let i=.8+n.glow*.2,a=Math.min(1,n.glow),o=r>0?this.trail.length:n.trail;this.trail.forEach((t,n)=>{let r=e.puck.trail[e.puck.trail.length-1-n];if(t.visible=!!r&&n<o,!t.visible)return;t.position.set(r.x,Is.trailLift,r.z),t.scale.setScalar(i);let s=t.material;s.color.copy(this.puckTint),s.opacity=.3*(1-n/Is.trailCount)*a});let s=this.threatRing;if(!s)return;let c=e.fighters.find(t=>t.id===e.controlledId),l=c&&e.phase===`playing`?Qe(e.puck,c,Ye(e,c.id)):null,u=kt(this.threatDisplay,l,t);s.visible=u.visible,u.visible&&c&&(s.position.set(c.pos.x,.055,c.pos.z),s.material.opacity=u.opacity)}drawReachFan(e,t){let n=this.reachFan,r=this.coreBand,i=this.bodyRing,a=this.coreGlow,o=this.coreLight,s=this.coreBurst,c=this.reachFanFlash;if(!n||!r||!i||!a||!o||!s||!c)return;let l=e.fighters.find(t=>t.id===e.controlledId),u=l&&e.phase===`playing`&&l.role!==`gunner`&&l.stun<=0&&!l.meditating&&!l.sprinting?!wt.showWhenReady||l.cooldowns[0]<=0?1:.25:0,d=t>0?t/wt.fadeIn:0;this.reachFanLevel+=I.clamp(u-this.reachFanLevel,-d,d);let f=this.reachFanLevel;if(n.visible=r.visible=i.visible=f>.01,!n.visible||!l){a.visible=o.visible=s.visible=c.visible=!1,Object.assign(this.coreFlash,{since:-1,level:0,burst:-1});return}let p=Be(l.role)+U.puckRadius;if(this.reachFanRole!==l.role){this.reachFanRole=l.role;let e=go(Ot[l.role].color,this.reachLook);n.material.color.copy(e.fan),r.material.color.copy(e.band),i.material.color.copy(e.body);let t=yo(this.reachLook.flash);o.material.color.copy(t.light),a.material.color.copy(t.halo),s.material.color.copy(t.ring),c.material.color.copy(t.fan),a.material.blending=s.material.blending=t.additive?2:1;let u=p-Ss,d=Math.acos(wt.showAngle),f=Ss+u*(Dt.core-Dt.criticalBand),m=Ss+u*(Dt.core+Dt.criticalBand);r.geometry.dispose(),r.geometry=new H(f,m,48,1,-d,d*2),this.coreOut=m,a.geometry.dispose(),a.geometry=To(f,m,d),o.geometry.dispose(),o.geometry=Eo(f,m,d),s.geometry.dispose(),s.geometry=Do(m,d)}let m=Math.atan2(-l.facing.z,l.facing.x);n.position.set(l.pos.x,.035,l.pos.z),n.scale.setScalar(p),n.rotation.set(-Math.PI/2,0,m);let h=pt(e,l);this.corePulse=h?this.corePulse+t:0;let g=h?.78+.22*Math.sin(this.corePulse/.12*Math.PI*2):0,_=_o(this.reachLook,f,h,g);n.material.opacity=_.fan,r.position.set(l.pos.x,.04,l.pos.z),r.rotation.set(-Math.PI/2,0,m),Co(this.coreFlash,h&&f>.2,t,h?.5+.5*Math.sin(this.corePulse/.12*Math.PI*2):0);let v=this.coreFlash.level;if(r.material.opacity=_.band*So(v),n.material.opacity=_.fan*So(v),a.visible=o.visible=c.visible=v>.001,a.visible&&(c.position.copy(n.position),c.rotation.copy(n.rotation),c.scale.copy(n.scale),c.material.opacity=vo.fanOpacity*v,a.position.set(l.pos.x,.045,l.pos.z),a.rotation.set(-Math.PI/2,0,m),a.material.opacity=v,o.position.set(l.pos.x,.05,l.pos.z),o.rotation.set(-Math.PI/2,0,m),o.material.opacity=v),s.visible=this.coreFlash.burst>=0,s.visible){let e=wo(this.coreFlash.burst,this.coreOut);s.position.set(l.pos.x,.055,l.pos.z),s.rotation.set(-Math.PI/2,0,m),s.scale.set(e.scale,e.scale,1),s.material.opacity=e.opacity}i.position.set(l.pos.x,.03,l.pos.z),i.material.opacity=_.body}tierColor(e){return this.tierColors.get(e.color)??this.tierColors.set(e.color,new n(e.color)).get(e.color)}tierColors=new Map;dodgeGhost(e,t){let n=e.fighters.find(e=>e.dash?.presentation===`dodge-afterimage`&&Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<1.5),r=n&&this.fighters.get(n.id)?.mesh.userData.samurai;if(!n||!r)return;let i=tn(r.model);return i.position.x+=t.pos.x-n.pos.x,i.position.z+=t.pos.z-n.pos.z,i}disposeObject(e){e.traverse(e=>{if(e instanceof R){if(e instanceof h&&e.skeleton.dispose(),e.userData.ghost)return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose())}}),e.userData.ghostMaterial?.dispose(),this.scene.remove(e)}dropStaleAvatars(){let e=new Set(this.avatars.map(e=>bt(e.look)));this.bench.some(t=>t.look&&!e.has(t.look))&&(this.bench=this.bench.filter(t=>{if(!t.look||e.has(t.look))return!0;for(let e of[t.mesh,t.ring,t.shadow,t.heal,t.barrier,t.calm])e?.traverse(e=>{e instanceof R&&(e instanceof h&&e.skeleton.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))});return!1}))}createFighter(e){let t=this.avatarOf(e),n=Jt(e.role,e.team,t),r=new R(new H(.77,.86,40),new L({color:e.team===this.viewing?Cs.ally:Cs.enemy,side:2,transparent:!0,opacity:.95,depthWrite:!1}));r.rotation.x=-Math.PI/2;let i=new R(new Ne(.68,20),new L({color:`#010611`,transparent:!0,opacity:.14,depthWrite:!1}));i.rotation.x=-Math.PI/2;let a=[];n.traverse(e=>{!(e instanceof R)||e.userData.samuraiVfx||e.userData.noFade||a.push({mesh:e,original:e.material})});let o=Aa(),s=Oa(ia.stance[e.role]),c=Zt();this.scene.add(n,r,i,o,c),s&&this.scene.add(s);let l={mesh:n,role:e.role,team:e.team,look:t?bt(t):``,ring:r,shadow:i,parts:a,fadeMaterials:[],heal:o,calm:s,healLevel:0,calmLevel:0,opacity:1,barrier:c};return this.dressFighter(l),l}flameNozzle=e=>{let t=e===void 0?void 0:this.fighters.get(e);if(!t)return;let n=t.mesh.getObjectByName(`PudHand_L`)??t.mesh.getObjectByName(`wrist_L`);if(!n)return;n.updateWorldMatrix(!0,!1);let r=n.getWorldPosition(this.flameAt),i=t.mesh.rotation.y;return{x:r.x,y:r.y,z:r.z,fx:Math.sin(i),fz:Math.cos(i)}};draw(e,t,n){if(this.benchmarkMode?.skipRender)return;let r=this.water;r?.material.userData.shader&&(r.material.userData.shader.uniforms.harbourTime.value=n);let i=this.viewing=Xe(e);xr(this.fighters,e.fighters,this.bench,this.seatActions),this.dropStaleAvatars(),this.flameSim.track(e.projectiles,e.phase===`playing`);let o=this.ringSpots;o.length=0;for(let r of e.fighters){let a=this.fighters.get(r.id);if(!a||!this.seatActions.ready(r))continue;a.mesh.position.set(r.pos.x,0,r.pos.z),a.mesh.rotation.y=Math.atan2(r.facing.x,r.facing.z),a.mesh.userData.flameHold=r.role===`mage`?this.flameSim.hold(r.id):0,Kt(a.mesh,r,r.role===`samurai`&&e.phase!==`lobby`?e.elapsed:n,t,e.phase!==`lobby`);let s=a.mesh.userData.gait,c=this.footsteps.step(r.id,s);c>=0&&this.steps.length<32&&this.steps.push({id:r.id,foot:c,moving:s.moving,x:r.pos.x,z:r.pos.z,pudding:nt(r.role,this.avatarOf(r),ut())}),a.ring.position.set(r.pos.x,.045,r.pos.z),a.ring.visible=r.id===e.controlledId;let l=to(r.team,i,r.id===e.controlledId);l&&o.push({x:r.pos.x,z:r.pos.z,kind:l}),a.ring.material.color.copy(r.team===i?Cs.ally:Cs.enemy),a.shadow.position.set(r.pos.x,.025,r.pos.z);let u=0,d=0;for(let t of e.effects)(t.presentation===`guard-hit`||t.presentation===`guard-just`)&&Math.hypot(t.pos.x-r.pos.x,t.pos.z-r.pos.z)<.8&&(u=Math.max(u,t.life/t.maxLife),t.presentation===`guard-just`&&(d=Math.max(d,t.life/t.maxLife)));Qt(a.barrier,!!r.blocking,r.pos.x,r.pos.z,Math.atan2(r.pos.x-this.camera.position.x,r.pos.z-this.camera.position.z),u,r.guardGauge/ht.gauge,a.opacity,n,d);let f=(e,n,r)=>t>0?I.clamp(e+(n?t/r.fadeIn:-t/r.fadeOut),0,1):e;a.healLevel=f(a.healLevel,(r.healed??0)>0&&r.stun<=0,ia.heal),a.calmLevel=f(a.calmLevel,(!!r.meditating||!!r.sprinting||(r.boost??0)>0)&&r.stun<=0,ia.meditation),a.heal.position.set(r.pos.x,0,r.pos.z),ja(a.heal,a.healLevel*a.opacity,n,this.camera,r.id),a.calm&&(a.calm.position.set(r.pos.x,0,r.pos.z),ka(a.calm,a.calmLevel*a.opacity,n,this.camera,r.id))}uo(this.teamRings,o,n),this.puck.position.set(e.puck.pos.x,0,e.puck.pos.z),this.puck.rotation.y=n*1.2,this.drawPuckState(e,t),this.drawReachFan(e,t),this.flameSim.update(t,this.flameNozzle),this.flameView.write(this.flameSim,n);let s=new Set;this.waterShots.update(e,t,n);for(let n of e.projectiles){if(n.kind===`fire`||n.kind===`bullet`)continue;let e=`p`+n.id;s.add(e);let r=this.transient.get(e);r||(r=n.kind===`kamaitachi`?Ms():new R(new a(.2),new L({color:`#b7afff`})),this.transient.set(e,r),this.scene.add(r)),r.position.set(n.pos.x,n.kind===`kamaitachi`?0:n.height??1.1,n.pos.z),n.kind===`kamaitachi`?(r.quaternion.setFromUnitVectors(new z(0,0,1),new z(n.velocity.x,0,n.velocity.z).normalize()),r.scale.setScalar(1+.22*(1-Math.max(0,Math.min(1,n.life/ct.life))))):r.rotation.y+=t*10}for(let t of e.walls){let r=`w`+t.id;s.add(r);let i=this.transient.get(r);if(t.kind===`light`){i||(i=Ji(t.width,t.id,n),this.transient.set(r,i),this.scene.add(i)),Xi(i,t,n);continue}i||(i=Bo(t.width,t.id),i.userData.born=n,this.transient.set(r,i),this.scene.add(i));let a=tt(t);i.position.set(t.pos.x,0,t.pos.z),i.rotation.y=Math.atan2(-a.z,a.x),os(i,{age:n-i.userData.born,left:t.life,look:No(t.hp,lt.hits,t.hitAt,e.elapsed,t.id),time:n,camera:this.camera})}for(let t of e.effects){if(t.presentation===`samurai-iai`)continue;let n=`e`+t.id;s.add(n);let r=this.transient.get(n);if(t.presentation===`guard-hit`||t.presentation===`guard-just`||t.presentation===`water-splash`||t.presentation===`shot-mark`)continue;if(t.presentation===`foe-critical`){if(!r){r=new B,r.name=t.team===Xe(e)?`ally-critical`:`foe-critical`;let i=t.team===Xe(e)?rt.ally.color:rt.color;for(let[e,t]of[[.8,0],[.88,.28]]){let n=new R(new H(e,1,64),new L({color:i,side:2,transparent:!0,opacity:.95,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.userData.lag=t,r.add(n)}this.transient.set(n,r),this.scene.add(r)}let i=1-t.life/t.maxLife;r.position.set(t.pos.x,.1,t.pos.z);for(let e of r.children){let n=Math.max(0,Math.min(1,(i-e.userData.lag)/(1-e.userData.lag)));e.scale.setScalar(.6+(t.radius-.6)*n),e.visible=i>=e.userData.lag,e.material.opacity=.95*(1-n)*(1-n)}continue}if(t.presentation===`ice-shatter`){r||(r=ss(t.id,t.radius*2),this.transient.set(n,r),this.scene.add(r)),cs(r,t.pos.x,t.pos.z,t.direction,1-t.life/t.maxLife,t.maxLife,this.camera);continue}if(t.presentation===`guard-break`){r||(r=$t(t.id),this.transient.set(n,r),this.scene.add(r)),en(r,t.pos.x,t.pos.z,Math.atan2(t.direction?.x??0,t.direction?.z??1),1-t.life/t.maxLife,t.maxLife);continue}if(t.presentation===`dodge-afterimage`){r||(r=this.dodgeGhost(e,t)??new B,this.transient.set(n,r),this.scene.add(r)),r.userData.ghostMaterial&&Wt(r,1-t.life/t.maxLife);continue}if(t.presentation===`dodge-vanish`||t.presentation===`dodge-smoke`||t.presentation===`dodge-roll`||t.presentation===`dodge-step`){let e=t.presentation===`dodge-vanish`||t.presentation===`dodge-smoke`?`smoke`:`dust`;r||(r=Yt(e,t.id),this.transient.set(n,r),this.scene.add(r)),qt(r,e,t.pos.x,t.pos.z,Math.min(1,(1-t.life/t.maxLife)*1.4),this.camera);continue}if(t.presentation===`kamaitachi-hold`){r||(r=Ms(),this.transient.set(n,r),this.scene.add(r)),r.position.set(t.pos.x,0,t.pos.z),r.quaternion.setFromUnitVectors(new z(0,0,1),new z(t.direction?.x??1,0,t.direction?.z??0).normalize());let e=yt+(t.maxLife-t.life);Es.forEach((t,n)=>{let i=r.children[n],a=e-t;i.visible=a>=0,i.material.opacity=js*(1+.9*Math.max(0,1-a/.09))}),r.children[Es.length+1].visible=!1;continue}if(t.presentation===`wind`){if(!r){r=new B;let e=new R(new H(.9,1,40,1,0,Math.PI),new L({color:`#eaf6ff`,side:2,transparent:!0,opacity:.5,depthWrite:!1}));e.rotation.x=-Math.PI/2,r.add(e),this.transient.set(n,r),this.scene.add(r)}let e=1-t.life/t.maxLife,i=t.radius*(et.start+(1-et.start)*Math.min(1,e));r.position.set(t.pos.x,.45,t.pos.z),r.scale.set(i,1,i),r.rotation.y=Math.atan2(-(t.direction?.x??0),-(t.direction?.z??1)),r.children[0].material.opacity=.55*(1-e)*(1-e*.5);continue}if(t.presentation===`weapon-slash`||t.presentation===`staff-hit`){if(!r){let e=t.presentation===`staff-hit`;r=new B;let i=new R(new H(t.radius*(e?.92:.84),t.radius,28,1,.45,2.25),new L({color:e?`#ffe6b0`:t.team===0?`#c8edff`:`#ffb8a4`,side:2,transparent:!0,opacity:.7,depthWrite:!1}));i.rotation.x=Math.PI/2,i.position.y=e?.55:.8,r.add(i),this.transient.set(n,r),this.scene.add(r)}let e=1-t.life/t.maxLife,i=t.presentation===`staff-hit`?.5-e:e-.5;r.position.set(t.pos.x,0,t.pos.z),r.rotation.y=Math.atan2(t.direction?.x??0,t.direction?.z??1)+i*.6;let a=r.children[0];a.material.opacity=Math.sin(Math.PI*e)*.72;continue}if(t.presentation===`clash-spark`){r||(r=ta(t.id),this.transient.set(n,r),this.scene.add(r)),r.position.set(t.pos.x,t.height??1.2,t.pos.z),ra(r,1-t.life/t.maxLife,t.radius,this.camera);continue}if(t.presentation===`bomber`){r||(r=Za(t.id),this.transient.set(n,r),this.scene.add(r)),Qa(r,t.pos.x,t.pos.z,t.maxLife-t.life,t.maxLife,t.radius,this.camera);continue}if(t.presentation===`shockwave`){r||(r=new R(new H(.86,1,64),new L({color:`#fff6d0`,side:2,transparent:!0,opacity:.95,depthWrite:!1})),r.rotation.x=-Math.PI/2,this.transient.set(n,r),this.scene.add(r));let e=1-t.life/t.maxLife,i=.6+(t.radius-.6)*e;r.position.set(t.pos.x,.09,t.pos.z),r.scale.setScalar(i),r.material.opacity=.95*(1-e)*(1-e);continue}let i=1-t.life/t.maxLife;if(!r){let e=(t.presentation===`crit-spark`?`#fff3c4`:t.presentation===`mid-spark`?`#8ff0ff`:t.presentation===`tip-spark`?`#8f9fb4`:``)||(t.kind===`heal`?`#a7ff91`:t.kind===`hit`?`#ffb089`:t.kind===`ice`?`#8ff0ff`:t.kind===`light`?`#ffe27a`:t.team===0?`#a6ecff`:`#ffc298`);r=new B;let i=[`slash`,`charge`].includes(t.kind),o=new R(new H(t.radius*.83,t.radius,i?28:48,1,0,i?Math.PI*1.3:Math.PI*2),new L({color:e,side:2,transparent:!0,opacity:.9,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=t.kind===`heal`?.12:.65,r.add(o);for(let n=0;n<7;n++){let i=new R(new a(.095),new L({color:e,transparent:!0,opacity:1}));i.position.set(Math.cos(n*6.28/7)*t.radius,.4,Math.sin(n*6.28/7)*t.radius),r.add(i)}this.transient.set(n,r),this.scene.add(r)}r.position.set(t.pos.x,0,t.pos.z),r.scale.setScalar(.7+i*.5),r.rotation.y=i*2,r.children.forEach((e,t)=>{let n=e;n.material.opacity=1-i,t>0&&(e.position.y=.35+i*1.5)})}for(let[e,t]of this.transient)s.has(e)||(this.disposeObject(t),this.transient.delete(e));let c=e.fighters.find(t=>t.id===e.controlledId),l=e.phase===`lobby`;if(this.camera.position.sub(this.shake),this.shake.set(0,0,0),l){this.puckFollow.reset();let e=this.camera.aspect;if(this.mapId===`colosseum`){let t=St(this.mapId).radius;this.target.set(10,7,-6),this.camera.position.set(-t*.62,e<1.6?11:9.5,t*.54)}else this.target.set(35,8,-3),this.camera.position.set(-U.width/2-9+Math.sin(n*.06)*.5,e<1.6?13:11,12);this.camera.lookAt(this.target)}else{this.yaw=this.follow.step({mode:this.cameraMode,yaw:this.yaw,target:this.followTarget,pos:c.pos,puck:e.puck.pos,phase:e.phase,elapsed:e.elapsed,dt:t,time:n,attackYaw:Et(c.team)*Math.PI/2});let r=new z(Math.sin(this.yaw),0,Math.cos(this.yaw)),i=new z(c.pos.x,0,c.pos.z),a=i.clone().addScaledVector(r,-8);a.y=1.56+this.pitch*3;let o=7;if(this.mapId===`colosseum`){let e=St(this.mapId).radius-.9,t=Math.hypot(a.x,a.z);t>e&&(a.x*=e/t,a.z*=e/t);let n=Math.hypot(a.x-i.x,a.z-i.z);a.y+=Math.max(0,4-n)*.7,o=I.lerp(.65,7,I.smoothstep(n,.4,4))}else if(this.mapId===`dojo`){a.x=I.clamp(a.x,-Xn.x,Xn.x),a.z=I.clamp(a.z,-Xn.z,Xn.z);let e=Math.hypot(a.x-i.x,a.z-i.z);a.y+=Math.max(0,4-e)*.7,o=I.lerp(.65,7,I.smoothstep(e,.4,4))}let s=i.clone().addScaledVector(r,o);s.y=1.8,this.cameraMode!==`puck`&&this.puckFollow.reset();let l=this.cameraMode===`puck`?this.puckFollow.step(hr(i,e.puck.pos,r),t):0,u=_r(this.cameraMode,{character:i,forward:r,desired:a,aim:s,eff:l,halfFov:I.degToRad(this.camera.fov/2),bounds:this.puckBounds()});a.set(u.desired.x,u.desired.y,u.desired.z),s.set(u.aim.x,u.aim.y,u.aim.z);let d=this.lastPhase===`lobby`||this.lastPhase===``?1:1-Math.exp(-t*10);this.camera.position.lerp(a,d),this.target.lerp(s,d),this.camera.lookAt(this.target)}if(!l){let t=mt(c),r=Math.max(t.f>0?(.05+.07*t.s)*t.f:c.hitStop>0?.03:0,Ve(e));r>0&&(this.shake.set(Math.sin(n*80)*r,Math.cos(n*63)*r,0),this.camera.position.add(this.shake),this.camera.lookAt(this.target))}this.lastPhase=e.phase;let u=new Set(e.fighters.filter(e=>e.dash?.presentation===`dodge-vanish`).map(e=>e.id));for(let[t,n]of this.fighters){let r=n.mesh.position.distanceTo(this.camera.position),i=l||t===e.controlledId?1:I.smoothstep(r,4.5,6.5);for(let e of n.fadeMaterials){let t=Ai(e,i,this.quality.fadeWhenNeeded);e.alphaHash!==t&&(e.alphaHash=t,e.needsUpdate=!0),e.opacity=i}n.mesh.visible=i>.015&&!u.has(t)&&!this.benchmarkMode?.hideFighters,n.opacity=i}for(let t of e.fighters)if(t.role===`gunner`&&t.stun<=0){let n=this.fighters.get(t.id)?.mesh;if(!n)continue;t.id===e.controlledId&&!l?Gt(n,new z(t.pos.x+t.facing.x*12,1.2,t.pos.z+t.facing.z*12)):Gt(n,new z(e.puck.pos.x,.25,e.puck.pos.z))}this.quality.shadow===`once`?this.sceneryReady&&!this.shadowBaked&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowBaked=!0):this.quality.shadow===`hz30`&&(this.shadowElapsed+=t,this.shadowElapsed>=1/30&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowElapsed%=1/30)),this.benchmarkMode?.direct?(this.renderer.info.reset(),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)):this.effects.render(t)}sight(){let e=this.camera.getWorldDirection(new z);return{from:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},dir:{x:e.x,y:e.y,z:e.z}}}gunAim(e){let t=e.fighters.find(t=>t.id===e.controlledId);this.camera.updateMatrixWorld(!0);let n=this.camera.position.clone(),r=this.camera.getWorldDirection(new z).multiplyScalar(100),i=We(e,n,r,t.team,0),a=n.clone().addScaledVector(r,i?.t??1),o=this.fighters.get(t.id)?.mesh;return o&&(o.position.set(t.pos.x,0,t.pos.z),o.rotation.y=Math.atan2(t.facing.x,t.facing.z)),{origin:(o?Gt(o,a):void 0)??{x:t.pos.x,y:1.2,z:t.pos.z},target:a}}minimap(e,t){let n=e.getContext(`2d`),r=e.width,i=e.height,a=St(t.mapId),o=a.shape===`circle`,s=Ct.pad,{px:c,py:l,across:u}=st(a,r,i,Xe(t));n.clearRect(0,0,r,i),n.strokeStyle=`#ffffff35`,n.lineWidth=1,n.fillStyle=`#b28b5720`,n.beginPath(),o?n.arc(r/2,i/2,a.radius*u,0,Math.PI*2):n.rect(s,s,r-s*2,i-s*2),n.fill(),n.stroke(),n.beginPath(),n.moveTo(c(0,-a.depth/2),i/2),n.lineTo(c(0,a.depth/2),i/2),n.stroke(),n.beginPath(),n.arc(r/2,i/2,o?5*u:12,0,Math.PI*2),n.stroke();for(let e of[0,1]){let t=(e?1:-1)*a.goalX,r=a.goalWidth/2;n.strokeStyle=e===0?`#83dbff`:`#ff907d`,n.lineWidth=3,n.beginPath(),n.moveTo(c(t,-r),l(t,-r)),n.lineTo(c(t,r),l(t,r)),n.stroke()}for(let e of t.walls){let t=tt(e),r=-t.z*e.width/2,i=t.x*e.width/2;n.strokeStyle=e.kind===`light`?`#ffe27a`:`#b1f1ff`,n.lineWidth=3,n.beginPath(),n.moveTo(c(e.pos.x-r,e.pos.z-i),l(e.pos.x-r,e.pos.z-i)),n.lineTo(c(e.pos.x+r,e.pos.z+i),l(e.pos.x+r,e.pos.z+i)),n.stroke()}for(let e of t.fighters){let r=e.id===t.controlledId,i=c(e.pos.x,e.pos.z),a=l(e.pos.x,e.pos.z);n.fillStyle=e.stun>0?`#7b8194`:r?`#c6ff8b`:e.team===0?`#85dcff`:`#ff897d`,n.beginPath(),n.arc(i,a,r?4:3,0,Math.PI*2),n.fill(),r&&(n.strokeStyle=`#c6ff8b77`,n.lineWidth=1,n.beginPath(),n.arc(i,a,7,0,Math.PI*2),n.stroke())}let d=ze(Math.hypot(t.puck.velocity.x,t.puck.velocity.z),Je(t)!==null);n.globalAlpha=!d.blink||Math.floor(t.elapsed/(He.blinkPeriod/2))%2==0?1:.35,n.fillStyle=d.color,n.beginPath(),n.arc(c(t.puck.pos.x,t.puck.pos.z),l(t.puck.pos.x,t.puck.pos.z),d.dot,0,Math.PI*2),n.fill(),n.globalAlpha=1}};export{Vs as GameView};