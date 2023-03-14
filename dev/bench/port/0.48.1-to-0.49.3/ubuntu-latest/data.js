window.BENCHMARK_DATA = {
  "lastUpdate": 1678785137266,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "c34cc82e18265600663ca1a3145961e639934c5b",
          "message": "Merge tag '0.48.1' into port/0.48.1-to-0.49.3\n\nLibplanet 0.48.1",
          "timestamp": "2023-03-14T17:42:43+09:00",
          "tree_id": "730b09276955c28f464a1ee14c8717eaf443750e",
          "url": "https://github.com/greymistcube/libplanet/commit/c34cc82e18265600663ca1a3145961e639934c5b"
        },
        "date": 1678784095175,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93208.76666666666,
            "unit": "ns",
            "range": "± 6282.258750828364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198799.83823529413,
            "unit": "ns",
            "range": "± 8893.387813107958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174128.06451612903,
            "unit": "ns",
            "range": "± 5328.085797203869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3947010.933333333,
            "unit": "ns",
            "range": "± 48405.908881438176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10084431.47368421,
            "unit": "ns",
            "range": "± 210748.79210629693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19587.40860215054,
            "unit": "ns",
            "range": "± 1907.525954217178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50383.7191011236,
            "unit": "ns",
            "range": "± 3252.499842739022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40193.142857142855,
            "unit": "ns",
            "range": "± 606.9688697052005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94312.37113402062,
            "unit": "ns",
            "range": "± 15431.871601034814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5976.371134020618,
            "unit": "ns",
            "range": "± 837.2801368069166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20358.22105263158,
            "unit": "ns",
            "range": "± 1852.3946846277602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6007621.288541666,
            "unit": "ns",
            "range": "± 37444.92639702027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1826784.4361049107,
            "unit": "ns",
            "range": "± 4149.856999410207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367177.1643229167,
            "unit": "ns",
            "range": "± 3880.7329502054586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612557.839583333,
            "unit": "ns",
            "range": "± 2536.226398037227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821019.8008563702,
            "unit": "ns",
            "range": "± 525.5660774480979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764074.945452009,
            "unit": "ns",
            "range": "± 1303.7955066476059"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110136.14285714286,
            "unit": "ns",
            "range": "± 5068.0454012311375"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5168207.462239583,
            "unit": "ns",
            "range": "± 42288.49152639504"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6225171.928571428,
            "unit": "ns",
            "range": "± 63489.72327679288"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27213580.875,
            "unit": "ns",
            "range": "± 498770.6453926995"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6813708.461538462,
            "unit": "ns",
            "range": "± 70135.74976740392"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31621616.230769232,
            "unit": "ns",
            "range": "± 480196.8354368088"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "79d24eec8784b4888a8d7fb937a909c877984a97",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:53:04+09:00",
          "tree_id": "e623588ac47fe7b2f529547a09aa2fb5131010e5",
          "url": "https://github.com/greymistcube/libplanet/commit/79d24eec8784b4888a8d7fb937a909c877984a97"
        },
        "date": 1678784836184,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 130908.35714285714,
            "unit": "ns",
            "range": "± 14707.982425746995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240501.51086956522,
            "unit": "ns",
            "range": "± 13533.762158569056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229982.02,
            "unit": "ns",
            "range": "± 9174.800616173114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242749.866666666,
            "unit": "ns",
            "range": "± 45114.60909548142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10520942.466666667,
            "unit": "ns",
            "range": "± 70208.1057488243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25824.9,
            "unit": "ns",
            "range": "± 3071.390711062335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69719.9375,
            "unit": "ns",
            "range": "± 6867.161667273728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52996.77551020408,
            "unit": "ns",
            "range": "± 4596.999993340822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131509.29896907217,
            "unit": "ns",
            "range": "± 21235.219482307446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9554.25,
            "unit": "ns",
            "range": "± 1159.4602918690457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28447.322916666668,
            "unit": "ns",
            "range": "± 3199.1493194771942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6234316.665625,
            "unit": "ns",
            "range": "± 41091.15584486003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875466.8032552083,
            "unit": "ns",
            "range": "± 1250.8792283846608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379559.6776041666,
            "unit": "ns",
            "range": "± 3760.7568469702705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675018.495833333,
            "unit": "ns",
            "range": "± 5610.431265042437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832352.1473214285,
            "unit": "ns",
            "range": "± 683.8160063253985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781664.9395228794,
            "unit": "ns",
            "range": "± 359.4202744054369"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 130411.82474226804,
            "unit": "ns",
            "range": "± 13417.76079804481"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5377459.351779514,
            "unit": "ns",
            "range": "± 264375.1526616043"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6742165.53125,
            "unit": "ns",
            "range": "± 208228.74761386262"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29560594.666666668,
            "unit": "ns",
            "range": "± 484258.8181248398"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7252180.725490196,
            "unit": "ns",
            "range": "± 282593.1405700485"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32550523.714285713,
            "unit": "ns",
            "range": "± 523063.6568914736"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "911924dfab30f8dfbcf2776e00458824eae03803",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:54:34+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/greymistcube/libplanet/commit/911924dfab30f8dfbcf2776e00458824eae03803"
        },
        "date": 1678785128781,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 115088.02083333333,
            "unit": "ns",
            "range": "± 16502.138229542554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237555.6590909091,
            "unit": "ns",
            "range": "± 17219.749078288765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209955.24468085106,
            "unit": "ns",
            "range": "± 20388.944634411037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4157528.4536082475,
            "unit": "ns",
            "range": "± 435759.7137236066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11316606.09574468,
            "unit": "ns",
            "range": "± 902215.8542506367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21805.929292929293,
            "unit": "ns",
            "range": "± 5843.556905795991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65248.40625,
            "unit": "ns",
            "range": "± 9766.795800140635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55512.43298969072,
            "unit": "ns",
            "range": "± 8289.648832664769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109645.52747252748,
            "unit": "ns",
            "range": "± 19353.59719440099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11232.47,
            "unit": "ns",
            "range": "± 5936.989864877363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21600.865979381444,
            "unit": "ns",
            "range": "± 6996.085526964445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6885029.8271484375,
            "unit": "ns",
            "range": "± 176044.66599717608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2181424.286254883,
            "unit": "ns",
            "range": "± 61864.945650240916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1535030.4091796875,
            "unit": "ns",
            "range": "± 12687.151963015673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2949309.6955566406,
            "unit": "ns",
            "range": "± 55580.71990186084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1004426.6818638393,
            "unit": "ns",
            "range": "± 32422.37235028231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 868741.8603515625,
            "unit": "ns",
            "range": "± 9709.142766162508"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 129478.92391304347,
            "unit": "ns",
            "range": "± 10646.424604639766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5677711.718592172,
            "unit": "ns",
            "range": "± 342667.0512903171"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6746577.111111111,
            "unit": "ns",
            "range": "± 752075.476393078"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33104123.43157895,
            "unit": "ns",
            "range": "± 2794334.1969846683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7502432.111111111,
            "unit": "ns",
            "range": "± 815086.336387045"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39566969.39393939,
            "unit": "ns",
            "range": "± 4361818.223954701"
          }
        ]
      }
    ]
  }
}