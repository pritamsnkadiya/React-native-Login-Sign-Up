
import React, {Component} from 'react';
import {Button,Image, View} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator,} from 'rn-viewpager';

class Page1 extends Component {
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
                            style={{width: 150, height: 150}}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
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
                            style={{width: 150, height: 150}}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
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
                            style={{width: 150, height: 150}}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
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
export default Page1;