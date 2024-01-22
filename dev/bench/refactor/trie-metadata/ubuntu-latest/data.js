window.BENCHMARK_DATA = {
  "lastUpdate": 1705899182279,
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
          "id": "b2580dff0a682fd5fa0955c41f4b0a6ed9b6ba0d",
          "message": "Move TrieMetadata to Libplanet.Store",
          "timestamp": "2024-01-22T13:33:41+09:00",
          "tree_id": "f25875bc53002857b9c25706e851573729068f20",
          "url": "https://github.com/greymistcube/libplanet/commit/b2580dff0a682fd5fa0955c41f4b0a6ed9b6ba0d"
        },
        "date": 1705898688655,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3734249.099158654,
            "unit": "ns",
            "range": "± 13686.832427460376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209727.5631975445,
            "unit": "ns",
            "range": "± 1888.2031139317621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 752797.3510091145,
            "unit": "ns",
            "range": "± 12605.397723183762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935473.9822823661,
            "unit": "ns",
            "range": "± 20189.964749206858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616048.0158503606,
            "unit": "ns",
            "range": "± 1195.9367005556871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580563.1714242789,
            "unit": "ns",
            "range": "± 1515.7200386219376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2411335.743243243,
            "unit": "ns",
            "range": "± 81605.68379081794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2476397.216981132,
            "unit": "ns",
            "range": "± 102347.86281737272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3121293.111111111,
            "unit": "ns",
            "range": "± 80430.3566970224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3064728.5,
            "unit": "ns",
            "range": "± 94279.20947647898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13679767.395348838,
            "unit": "ns",
            "range": "± 925005.0655369762"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41345.25257731959,
            "unit": "ns",
            "range": "± 5521.48029862865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207145.7857142857,
            "unit": "ns",
            "range": "± 3568.869831420918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194774.89130434784,
            "unit": "ns",
            "range": "± 7412.814230861046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164057.16666666666,
            "unit": "ns",
            "range": "± 3441.216034211983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3165094.714285714,
            "unit": "ns",
            "range": "± 30078.302584647732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2879216.4,
            "unit": "ns",
            "range": "± 47752.250081316284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12528.608695652174,
            "unit": "ns",
            "range": "± 942.4985260316892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67102.53125,
            "unit": "ns",
            "range": "± 5256.926415297751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53830.88888888889,
            "unit": "ns",
            "range": "± 1829.2111918062908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59569.68085106383,
            "unit": "ns",
            "range": "± 9931.32185049523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3511.34375,
            "unit": "ns",
            "range": "± 553.7300563712859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15664.186813186812,
            "unit": "ns",
            "range": "± 1582.3628458176636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5540052.066666666,
            "unit": "ns",
            "range": "± 25732.3837202038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14080435.76923077,
            "unit": "ns",
            "range": "± 78645.93020531307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36383731.07692308,
            "unit": "ns",
            "range": "± 198358.9191669407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73636654.75,
            "unit": "ns",
            "range": "± 264931.11487572663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 157583581.7142857,
            "unit": "ns",
            "range": "± 620009.9427120166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970224.7010309278,
            "unit": "ns",
            "range": "± 89059.30445777935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1849402.238095238,
            "unit": "ns",
            "range": "± 66064.64317244818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1605129.5913978494,
            "unit": "ns",
            "range": "± 133515.0275754883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12730125.010416666,
            "unit": "ns",
            "range": "± 1048577.958286078"
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
          "id": "36387cb116e4dd7f8aa53ed114e43aeb59f4746f",
          "message": "Implemented IBencodable for TrieMetadata",
          "timestamp": "2024-01-22T13:41:25+09:00",
          "tree_id": "fc05547f3c6b2053cad9f3fc3965daaf190212c9",
          "url": "https://github.com/greymistcube/libplanet/commit/36387cb116e4dd7f8aa53ed114e43aeb59f4746f"
        },
        "date": 1705899176037,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3668057.9466145835,
            "unit": "ns",
            "range": "± 10048.116020872665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1195980.8279747595,
            "unit": "ns",
            "range": "± 2299.965103515968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759417.1115722656,
            "unit": "ns",
            "range": "± 1116.4072806587753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935423.334735577,
            "unit": "ns",
            "range": "± 2081.414903118693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611274.862874349,
            "unit": "ns",
            "range": "± 2164.0672359160467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569902.9483816965,
            "unit": "ns",
            "range": "± 1627.6980645285444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2452714.7,
            "unit": "ns",
            "range": "± 38313.21949070395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2497482.5853658537,
            "unit": "ns",
            "range": "± 129613.80609961436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3196406.023809524,
            "unit": "ns",
            "range": "± 75457.04239076632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3199869.7025316455,
            "unit": "ns",
            "range": "± 157806.26052702268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14035028.455555556,
            "unit": "ns",
            "range": "± 916104.93216208"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40220.864583333336,
            "unit": "ns",
            "range": "± 5481.879699941179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210273.08333333334,
            "unit": "ns",
            "range": "± 12997.34606891298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193407.59322033898,
            "unit": "ns",
            "range": "± 6013.374868943064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165405.11290322582,
            "unit": "ns",
            "range": "± 4653.369099748549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3138439.3,
            "unit": "ns",
            "range": "± 50630.102222181726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2788348.911764706,
            "unit": "ns",
            "range": "± 45564.06298561788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15807.041666666666,
            "unit": "ns",
            "range": "± 3540.258640318652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70475.6875,
            "unit": "ns",
            "range": "± 4768.473118332865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55716.65555555555,
            "unit": "ns",
            "range": "± 4104.858849921368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66343.35416666667,
            "unit": "ns",
            "range": "± 10395.161524254967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3138.1344086021504,
            "unit": "ns",
            "range": "± 474.2644140723116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14361.762626262625,
            "unit": "ns",
            "range": "± 2429.5355337832543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5577053.933333334,
            "unit": "ns",
            "range": "± 32006.640004105102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14275299,
            "unit": "ns",
            "range": "± 114160.67445365888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37894931.25,
            "unit": "ns",
            "range": "± 331026.0550533818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74487903.21428572,
            "unit": "ns",
            "range": "± 290826.69206833834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147534802.03846154,
            "unit": "ns",
            "range": "± 661774.11251091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982506.6304347826,
            "unit": "ns",
            "range": "± 73431.25687158733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1917167.7692307692,
            "unit": "ns",
            "range": "± 74852.51280341172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1615036.7083333333,
            "unit": "ns",
            "range": "± 116648.76704606297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12805125.010526316,
            "unit": "ns",
            "range": "± 1020881.9761313138"
          }
        ]
      }
    ]
  }
}