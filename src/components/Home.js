import React, {Component} from 'react';
import {FlatList, ActivityIndicator, Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import { Fonts } from '../utils/fonts';

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-in-theaters.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar
        backgroundColor="white"
        barStyle="light-content"
      />
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* searchbar */}
          <View style={{flex: 1}}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => <Text>{item.year}, {item.title}</Text>}
              keyExtractor={({id}, index) => id}
            />
          </View>
          <View style={{marginHorizontal: 17, paddingTop: 18, flexDirection: 'row'}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput placeholder="Cari apa? masuk dulu gan!" style={{borderWidth: 1, borderColor: 'grey', borderRadius: 25, height: 45, fontSize: 14, paddingLeft: 45, paddingRight: 20, marginRight: 12}}></TextInput>
            <Image source={require('./icon/cari.png')} style={{position: 'absolute', top: 12, left: 12}}/>
          </View>
          <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', width: 38, height: 38}}>
            <Image style={{height: '100%', width: '100%'}} source={require('../../icon/beranda1.png')} ></Image>
          </TouchableOpacity>
        </View>
          {/* saldonya */}
          <View style={{marginTop: 15, marginHorizontal: 17}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor: '#3A98F3', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, zIndex: 1}}>
              <Image style={{height: 32, width: 132, marginVertical: 17, marginLeft: 17}} source={require('./icon/logomini.png')}/>
              <Text style={{color: 'white', fontSize: 25, fontFamily: Fonts.PoligonBlackI, marginVertical: 17, marginRight: 20}}>Rp.250.000</Text>
            </View>
            <View style={{paddingTop:30, paddingBottom:20 ,height: 100, flexDirection: 'row', backgroundColor: '#167EE2', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginTop: -10, zIndex: 0}}>
              <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 40, height: 40}} source={require('../../icon/langganan.png')}/>
                <Text style={{fontSize: 11, color: 'white', fontFamily: Fonts.PoligonM, marginTop: 5}}>Langganan.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 40, height: 40}} source={require('../../icon/terdekat.png')}/>
                <Text style={{fontSize: 11, color: 'white', fontFamily: Fonts.PoligonM, marginTop: 5}}>Terdekat.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
               <Image style={{width: 40, height: 40}} source={require('../../icon/isisaldo.png')}/>
                <Text style={{fontSize: 11, color: 'white', fontFamily: Fonts.PoligonM, marginTop: 5}}>Isi Saldo.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 40, height: 40}} source={require('../../icon/idemasak.png')}/>
                <Text style={{fontSize: 11, color: 'white', fontFamily: Fonts.PoligonM, marginTop: 5}}>Ide Masak.</Text>
              </TouchableOpacity>
            </View>
          {/* pembatas1 */}
          <View style={{marginTop: 15 ,flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#3A98F3', fontSize: 17, fontFamily: Fonts.PoligonMI}}>Dapatkan voucher belanjamu!</Text>
          </View>
          {/* banner */}
          <View style={{marginVertical: 16, marginBottom: 0, borderBottomColor: '#D4D6D5', borderBottomWidth: 1}}>
            <View style={{position: 'relative'}}>
              <Image style={{height: 180, width: '100%', borderRadius: 10}} source={require('/img/banner1.jpg')}/>
              <Image style={{height: 30, width: 120, position: 'absolute', bottom: 16, left: 18}} source={require('/icon/logomini.png')}/>
              <Image style={{height: 25, width: 100, position: 'absolute', top: 16, right: 16}} source={require('/icon/resep1.png')}/>
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={{fontFamily: Fonts.PoligonXB, fontSize: 20, color: '#3A98F3'}}>PESANEWS</Text>
              <Text style={{fontSize: 14, color: 'grey', opacity: 0.8, marginBottom: 10 }}>Bikin rendang dengan rasa baru, rasakan!</Text>
              <TouchableOpacity style={{backgroundColor: '#3A98F3', paddingHorizontal: 15, paddingVertical: 13, alignSelf: 'flex-end', borderRadius: 10}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Baca</Text>
              </TouchableOpacity>
            </View>
          </View>
      {/* __________________________________________________ */}
      </View>
      {/* banner */}
      <View style={{padding: 17, borderBottomColor: '#D4D6D5', borderBottomWidth: 1 }}>
        <View>
          <Image style={{height: 180, width: '100%', borderRadius: 10}} source={require('/img/banner2.jpg')}/>
          <View style={{height: '100%', width: '100%', position: 'absolute' ,backgroundColor: 'black', borderRadius: 10, opacity: 0.5}}></View>
          <Image style={{height: 30, width: 120, position: 'absolute', bottom: 16, left: 18}} source={require('/icon/logomini.png')}/>
          <TouchableOpacity style={{backgroundColor: '#3A98F3', paddingHorizontal: 15, paddingVertical: 10, position: 'absolute', borderRadius: 3, bottom: 16, right: 16}}>
                <Text style={{fontSize: 11, fontWeight: 'bold', color: 'white'}}>Dapatkan Voucher!</Text>
          </TouchableOpacity>
          <View style={{height: 30, width: 240, position: 'absolute', top: 16, left: 18}}>
                <Text style={{fontSize: 35, fontWeight: 'bold', color: 'white', fontStyle: 'italic'}}>Voucher Rp.200.000,-</Text>
          </View>
        </View>
      </View>
      {/* terdekat */}
      <View style={{padding: 17, borderBottomColor: '#D4D6D5', borderBottomWidth: 1 }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#3A98F3'}}>WARUNG TERDEKAT</Text>  
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#F1A345'}}>lihat semua</Text>  
        </View>  
        <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
          <View style={{marginHorizontal: 10, marginLeft: 0}}>
            <Image style={{height: 120, width: 120, borderRadius: 10}} source={require('/img/banner2.jpg')}/>
            <View style={{height: 120, width: 120, position: 'absolute' ,backgroundColor: 'black', borderRadius: 10, opacity: 0.5}}></View>
            <View style={{height: 30, width: 100, position: 'absolute', bottom: 22, left: 18}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', fontStyle: 'italic'}}>Warung Buk Yati</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 10, marginLeft: 0}}>
            <Image style={{height: 120, width: 120, borderRadius: 10}} source={require('/img/banner2.jpg')}/>
            <View style={{height: 120, width: 120, position: 'absolute' ,backgroundColor: 'black', borderRadius: 10, opacity: 0.5}}></View>
            <View style={{height: 30, width: 100, position: 'absolute', bottom: 22, left: 18}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', fontStyle: 'italic'}}>Warung Buk Ani</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 10, marginLeft: 0}}>
            <Image style={{height: 120, width: 120, borderRadius: 10}} source={require('/img/banner2.jpg')}/>
            <View style={{height: 120, width: 120, position: 'absolute' ,backgroundColor: 'black', borderRadius: 10, opacity: 0.5}}></View>
            <View style={{height: 30, width: 100, position: 'absolute', bottom: 22, left: 18}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', fontStyle: 'italic'}}>Warung Buk Ani</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 10, marginLeft: 0}}>
            <Image style={{height: 120, width: 120, borderRadius: 10}} source={require('/img/banner2.jpg')}/>
            <View style={{height: 120, width: 120, position: 'absolute' ,backgroundColor: 'black', borderRadius: 10, opacity: 0.5}}></View>
            <View style={{height: 30, width: 100, position: 'absolute', bottom: 22, left: 18}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', fontStyle: 'italic'}}>Warung Buk Ani</Text>
            </View>
          </View>
        </ScrollView>
      </View>
       {/* banner */}
       <View style={{padding: 17, borderBottomColor: '#D4D6D5', borderBottomWidth: 1 }}>
        <View>
          <Image style={{height: 180, width: '100%', borderRadius: 10}} source={require('/img/banner2.jpg')}/>
          <View style={{height: '100%', width: '100%', position: 'absolute' ,backgroundColor: 'black', borderRadius: 10, opacity: 0.5}}></View>
          <Image style={{height: 30, width: 120, position: 'absolute', bottom: 16, left: 18}} source={require('/icon/logomini.png')}/>
          <TouchableOpacity style={{backgroundColor: '#3A98F3', paddingHorizontal: 15, paddingVertical: 10, position: 'absolute', borderRadius: 3, bottom: 16, right: 16}}>
                <Text style={{fontSize: 11, fontWeight: 'bold', color: 'white'}}>Dapatkan Voucher!</Text>
          </TouchableOpacity>
          <View style={{height: 30, width: 240, position: 'absolute', top: 16, left: 18}}>
                <Text style={{fontSize: 35, fontWeight: 'bold', color: 'white', fontStyle: 'italic'}}>Voucher Rp.200.000,-</Text>
          </View>
        </View>
      </View>
      </ScrollView>
      {/* BottomBar */}
      <View style={{height: 65, flexDirection: 'row', backgroundColor: 'white'}}>
              <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Image style={{width: 28, height: 28}} source={require('/icon/beranda1.png')}/>
                  <Text style={{fontSize: 10, color: '#F1A345', opacity: 0.5}}>Beranda</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Image style={{width: 28, height: 28}} source={require('/icon/riwayat.png')}/>
                  <Text style={{fontSize: 10, color: '#545454', opacity: 0.5}}>Riwayat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Image style={{width: 28, height: 28}} source={require('/icon/pembayaran.png')}/>
                <Text style={{fontSize: 10, color: '#545454', opacity: 0.5}}>Pembayaran</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Image style={{width: 28, height: 28}} source={require('/icon/chat.png')}/>
                 <Text style={{fontSize: 10, color: '#545454', opacity: 0.5}}>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Image style={{width: 28, height: 28}} source={require('/icon/akun.png')}/>
                 <Text style={{fontSize: 10, color: '#545454', opacity: 0.5}}>Akun</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}
  
const styles = StyleSheet.create({

});
