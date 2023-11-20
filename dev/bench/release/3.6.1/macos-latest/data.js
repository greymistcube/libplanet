window.BENCHMARK_DATA = {
  "lastUpdate": 1700471617538,
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
          "id": "8eaba8bfb494d0eb4664076dcfebda984d623a5f",
          "message": "Release 3.6.1",
          "timestamp": "2023-11-20T17:13:46+09:00",
          "tree_id": "bbdc6bb77b5e1b1e069c9c19d459370c81ca5a0f",
          "url": "https://github.com/greymistcube/libplanet/commit/8eaba8bfb494d0eb4664076dcfebda984d623a5f"
        },
        "date": 1700469288076,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8236021.133333334,
            "unit": "ns",
            "range": "± 124845.1472149551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22178756.844444446,
            "unit": "ns",
            "range": "± 2071056.7359363122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71377243.14,
            "unit": "ns",
            "range": "± 9262736.096230606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142844564.3041237,
            "unit": "ns",
            "range": "± 12027360.198906569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222012681.65934065,
            "unit": "ns",
            "range": "± 19530102.402454913"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49624.239130434784,
            "unit": "ns",
            "range": "± 9842.858217927973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247408.48235294118,
            "unit": "ns",
            "range": "± 15442.248283918532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233756.93827160494,
            "unit": "ns",
            "range": "± 18114.750156533817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228573.27011494254,
            "unit": "ns",
            "range": "± 14443.35122944935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4043863.9529411765,
            "unit": "ns",
            "range": "± 357466.25190538407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3623141.6363636362,
            "unit": "ns",
            "range": "± 123797.6522497059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19480.619565217392,
            "unit": "ns",
            "range": "± 4788.4487654096965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78460.47826086957,
            "unit": "ns",
            "range": "± 16195.705822113627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76760.97916666667,
            "unit": "ns",
            "range": "± 16929.59772642306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78821.22826086957,
            "unit": "ns",
            "range": "± 13260.892562822046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5392.031578947369,
            "unit": "ns",
            "range": "± 1854.4121018999556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20312.268041237112,
            "unit": "ns",
            "range": "± 4486.436711345152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1055649.0729166667,
            "unit": "ns",
            "range": "± 84852.70068570465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2312910.9204545454,
            "unit": "ns",
            "range": "± 153389.02985705287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1708156.7142857143,
            "unit": "ns",
            "range": "± 207986.9204426243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7779459.904255319,
            "unit": "ns",
            "range": "± 1108604.9859049227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4426700.927083333,
            "unit": "ns",
            "range": "± 1249919.770327783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3736799.836956522,
            "unit": "ns",
            "range": "± 452286.4867452461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4211438.840909091,
            "unit": "ns",
            "range": "± 512832.8567919567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4407287.597826087,
            "unit": "ns",
            "range": "± 658370.313657616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16516238.880434783,
            "unit": "ns",
            "range": "± 3159656.7590083275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6149933.270408163,
            "unit": "ns",
            "range": "± 910350.8366565598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924196.8724888393,
            "unit": "ns",
            "range": "± 245319.62992154772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1121672.8980601917,
            "unit": "ns",
            "range": "± 127038.56565437601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2506993.3681739266,
            "unit": "ns",
            "range": "± 416874.80382714374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 663128.1919601213,
            "unit": "ns",
            "range": "± 31247.465226980803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578079.3511439732,
            "unit": "ns",
            "range": "± 13515.526137247703"
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
          "id": "60e8bb8464f4d32d18e9ef28659ef5d32e962db9",
          "message": "Release 3.6.1",
          "timestamp": "2023-11-20T17:54:55+09:00",
          "tree_id": "0f121f06ff347e4e00129374b3f23d10cb7186fd",
          "url": "https://github.com/greymistcube/libplanet/commit/60e8bb8464f4d32d18e9ef28659ef5d32e962db9"
        },
        "date": 1700471599818,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11328363.336956521,
            "unit": "ns",
            "range": "± 1406775.9588608653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26044336.5,
            "unit": "ns",
            "range": "± 465553.73578524747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65937431.307692304,
            "unit": "ns",
            "range": "± 420228.28036425327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123893794.47252747,
            "unit": "ns",
            "range": "± 13469436.473942481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237611883.3791209,
            "unit": "ns",
            "range": "± 14293830.842105113"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57383.51063829787,
            "unit": "ns",
            "range": "± 15087.024570727493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289932.6264367816,
            "unit": "ns",
            "range": "± 17105.43825383965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291856.06666666665,
            "unit": "ns",
            "range": "± 14722.039530171352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269951.84545454546,
            "unit": "ns",
            "range": "± 11520.260663232475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4513777.357142857,
            "unit": "ns",
            "range": "± 53690.79808833761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4504240,
            "unit": "ns",
            "range": "± 156504.4147862256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20087.532608695652,
            "unit": "ns",
            "range": "± 3258.536843671151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101775.78888888888,
            "unit": "ns",
            "range": "± 8434.874140039205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95777.61235955056,
            "unit": "ns",
            "range": "± 8120.912363989375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95241.75,
            "unit": "ns",
            "range": "± 13688.60754252589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6593.904255319149,
            "unit": "ns",
            "range": "± 1501.352553777555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17378.3064516129,
            "unit": "ns",
            "range": "± 1899.826120522295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1217055.6736842105,
            "unit": "ns",
            "range": "± 214062.6898110389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2836003.6129032257,
            "unit": "ns",
            "range": "± 261730.2862475378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2046881.6494252873,
            "unit": "ns",
            "range": "± 199811.448010166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8261198.478494624,
            "unit": "ns",
            "range": "± 1262311.5241003735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3514259.82,
            "unit": "ns",
            "range": "± 88955.0616007506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3661288.6417910447,
            "unit": "ns",
            "range": "± 165106.75153363944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4174051.6129032257,
            "unit": "ns",
            "range": "± 293800.86500298243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3942117.4571428574,
            "unit": "ns",
            "range": "± 189938.14847582797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16930514.695652176,
            "unit": "ns",
            "range": "± 4273366.072906566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5398444.617559524,
            "unit": "ns",
            "range": "± 127515.89997526901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1313732.95625,
            "unit": "ns",
            "range": "± 15559.622297276353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 864802.7861703726,
            "unit": "ns",
            "range": "± 23440.481880057498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966983.0450520834,
            "unit": "ns",
            "range": "± 34470.32278865781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642146.5309448242,
            "unit": "ns",
            "range": "± 9322.569577047003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 617574.9806481187,
            "unit": "ns",
            "range": "± 42856.75152368145"
          }
        ]
      }
    ]
  }
}