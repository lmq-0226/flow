<swiper-item>
					<view class="swipers">
						<u-swiper :list="swiperList" height="300"></u-swiper>
					</view>
					<view class="swiper-item">
						<view class="menus">
							<scroll-view :scroll-x="true" class="scroll-view_H" @scroll="scrollChange" @touchmove.stop.prevent="">
								<view class="items">
									<view class="" v-for="(item,index) in menuList" :key="index"
										@click="go('/pages/public/public?category_id=' + item.id)">
										<image :src="ImgUrl + item.iconImage" mode=""></image>
										<text>{{item.text}}</text>
									</view>
								</view>
								<!-- <view class="items items2" @click="go('/pages/public/public')">
										<view class="" v-for="(item,index) in botMenuList" :key="index">
											<image :src="ImgUrl + item.image" mode=""></image>
											<text>{{item.name}}</text>
										</view>
									</view> -->
							</scroll-view>
							<view class="slide" v-if="menuList.length > 5">
								<view class="" :style="'margin-left:' + slideLeft + '%'"></view>
							</view>
						</view>
						<view class="flash" @click="go('/pages/public/public')">
							<view class="flash_one">
								<view class="one_left" v-for="(item,index) in initClassify" :key="index">
									<view class="lettle">
										<view class="title">
											<text>{{item.name}}</text>
											<text v-if="item.tags != ''">{{item.tags}}</text>
										</view>
										<text class="sub">{{item.describe}}</text>
									</view>
									<view class="classIfy">
										<view class="" v-for="(elem,cut) in item.list" :key="cut">
											<image src="" mode=""></image>
										</view>
									</view>
								</view>
								<view class="one_right" v-if="false">
									<view class="title">
										<text>大家都在买</text>
										<text>品牌闪购</text>
									</view>
									<view class="classIfy">
										<view class="" v-for="(item,index) in 2" :key="index">
											<image src="" mode=""></image>
										</view>
									</view>
								</view>
							</view>
							<view v-if="false" class="flash_two">
								<view class="one_right">
									<view class="title">
										<text>品牌闪购</text>
										<text>品牌闪购</text>
									</view>
									<view class="classIfy">
										<view class="" v-for="(item,index) in 2" :key="index">
											<image src="" mode=""></image>
										</view>
									</view>
								</view>
								<view class="one_right">
									<view class="title">
										<text>品牌闪购</text>
										<text>品牌闪购</text>
									</view>
									<view class="classIfy">
										<view class="" v-for="(item,index) in 2" :key="index">
											<image src="" mode=""></image>
										</view>
									</view>
								</view>
							</view>
							<view v-if="false" class="flash_three">
								<view class="one_right" v-for="(item,index) in 4" :key="index">
									<view class="title">
										<text>品牌闪购</text>
										<text>品牌闪购</text>
									</view>
									<view class="classIfy">
										<view class="">
											<image src="" mode=""></image>
										</view>
									</view>
								</view>
							</view>
						</view>
						
						<view class="goods">
							<!-- 瀑布流 -->
							<u-waterfall v-model="tabList[0].goods_list" ref="uWaterfall">
								<template v-slot:left="{leftList}">
									<view class="demo-warter" v-for="(item, index) in leftList" :key="index"
										@click="go('./goodsDetail/goodsDetail?id=' + item.id)">
										<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
										<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + item.image"
											img-mode="widthFix" :index="index"></u-lazy-load>
										<view class="demo-title">
											{{item.title}}
										</view>
										<view class="num">
											<text>￥{{item.price}}</text>
											<text>{{item.payment}}人付款</text>
										</view>
									</view>
								</template>
								<template v-slot:right="{rightList}">
									<view class="demo-warter" v-for="(item, index) in rightList" :key="index"
										@click="go('./goodsDetail/goodsDetail?id=' + item.id)">
										<u-lazy-load threshold="-450" border-radius="10" :image="item.image"
											img-mode="widthFix" :index="index"></u-lazy-load>
										<view class="demo-title">
											{{item.title}}
										</view>
										<view class="num">
											<text>￥{{item.price}}</text>
											<text>{{item.payment}}人付款</text>
										</view>
									</view>
								</template>
							</u-waterfall>
						</view>
						<u-empty v-if="tabList[0].goods_list.length <= 0" text="暂无数据" mode="list" margin-top="100"></u-empty>
					</view>
			</swiper-item>
			
			<swiper-item v-for="(item,index) in tabList.slice(1)" :key="index">
				<!-- <scroll-view class="swiper_scroll" :scroll-y="true" > -->
					<view class="swiper-item">
						<view class="menus">
							<scroll-view scroll-x="true" class="scroll-view_H" @scroll="scrollChange" @touchmove.stop.prevent="">
								<view class="items">
									<view class="" v-for="(elem,cut) in menuList" :key="cut"
										@click="go('/pages/public/public?category_id=' + elem.id)">
										<image :src="ImgUrl + item.image" mode=""></image>
										<text>{{item.name}}</text>
									</view>
								</view>
								<!-- <view class="items items2" @click="go('/pages/public/public')">
										<view class="" v-for="(item,index) in botMenuList" :key="index">
											<image :src="ImgUrl + item.image" mode=""></image>
											<text>{{item.name}}</text>
										</view>
									</view> -->
							</scroll-view>
							<view class="slide" v-if="menuList.length > 5">
								<view class="" :style="'margin-left:' + slideLeft + '%'"></view>
							</view>
						</view>
						<view class="goods">
							<!-- 瀑布流 -->
							<u-waterfall v-model="item.goods_list" ref="uWaterfall">
								<template v-slot:left="{leftList}">
									<view class="demo-warter" v-for="(elem, cut) in leftList" :key="cut"
										@click="go('./goodsDetail/goodsDetail?id=' + elem.id)">
										<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
										<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + elem.image"
											img-mode="widthFix" :index="cut"></u-lazy-load>
										<view class="demo-title">
											{{elem.title}}
										</view>
										<view class="num">
											<text>￥{{elem.price}}</text>
											<text>{{elem.payment}}人付款</text>
										</view>
									</view>
								</template>
								<template v-slot:right="{rightList}">
									<view class="demo-warter" v-for="(elem, cut) in rightList" :key="cut"
										@click="go('./goodsDetail/goodsDetail?id=' + elem.id)">
										<u-lazy-load threshold="-450" border-radius="10" :image="elem.image"
											img-mode="widthFix" :index="cut"></u-lazy-load>
										<view class="demo-title">
											{{elem.title}}
										</view>
										<view class="num">
											<text>￥{{elem.price}}</text>
											<text>{{elem.payment}}人付款</text>
										</view>
									</view>
								</template>
							</u-waterfall>
						</view>
						<u-empty v-if="item.goods_list.length <= 0" text="暂无数据" mode="list" margin-top="300"></u-empty>
					</view>
				<!-- </scroll-view> -->
			</swiper-item>
		