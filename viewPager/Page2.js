
import React, {Component} from 'react';
import {Button,Image, View} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator,} from 'rn-viewpager';

class Page2 extends Component {

    render() {

        return (
            <View style={{ flex: 1, marginTop: 30 }}>
                <IndicatorViewPager
                    style={{ height: 400 }}
                    indicator={this._renderDotIndicator()}>

                    <View
                        style={{
                            backgroundColor: '#C70039',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            style={{width: 300, height: 300}}
                            source={{uri: 'https://1.bp.blogspot.com/-OvMMV3GjwMk/Wnin_3B6VSI/AAAAAAAAAM0/DxTJ6aRQUSUWdnK502e5GKxSqS8qzKzlACLcBGAs/s1600/9.jpg'}}
                        />
                    </View>
                    <View
                        style={{
                            backgroundColor: '#FF5733',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            style={{width: 300, height: 300}}
                            source={{uri: 'https://www.imagesgoodnight.com/wp-content/uploads/2018/12/Sweet-Love-Pics-Images-2-300x250.jpg'}}
                        />
                    </View>
                    <View
                        style={{
                            backgroundColor: '#FFC300',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            style={{width: 300, height: 300}}
                            source={{uri: 'https://images.wallpaperscraft.com/image/heart_surface_love_85684_300x168.jpg'}}
                        />
                    </View>
                </IndicatorViewPager>
                <Button
                    title="Go"
                    onPress={() => this.props.navigation.navigate('Friends')}/>
            </View>

        );
    }
    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
}
export default Page2;