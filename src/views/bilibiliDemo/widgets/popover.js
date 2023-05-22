import Vue from 'vue';
import ZdyPopover from '../components/Popover.vue';

const Popover = Vue.extend(ZdyPopover);
const _popover = {
    bind(el) {
        const popper = new Popover({
            el: document.createElement('div'),
            data(){
                return {}
            }
        })
        document.body.style.position='relative'; // 将body 设置相对定位
        document.body.appendChild(popper.$el); //
        el.instance = popper;
        el.onmouseenter=()=>{
            el.instance.visible=true; // 展示
            Vue.nextTick(()=>{
                const _top1 = el.getBoundingClientRect().top // 获取元素距离 顶部位置
                const _top2 = document.body.scrollTop||document.documentElement.scrollTop // 获取滚动 高度
                const _offsetTop =_top1+_top2+20; 
                const _offsetLeft =el.getBoundingClientRect().left-100;
                const _offsetHeight =el.offsetHeight; // 绑定元素高度
                const $popover =el.instance.$refs['popover'];
                $popover.style.top=`${_offsetTop+_offsetHeight}px`;
                $popover.style.left=`${_offsetLeft}px`;
            })
            
        }
        el.onmouseleave=()=>{
            el.instance.visible=false; // 展示
            
        }
     
        
    },
    update() { },
    unbind(el) {
    // 解除事件监听
        el.instance && el.instance.$destroy();
    }
};

export default _popover;
