window.BENCHMARK_DATA = {
  "lastUpdate": 1705469798842,
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
          "id": "a190c93147e682b08d5f6764040a3851eecc7e4b",
          "message": "Fixed tests",
          "timestamp": "2024-01-17T14:07:58+09:00",
          "tree_id": "40cbc79c3543accf5d4b6d0edc973ee3cadad634",
          "url": "https://github.com/greymistcube/libplanet/commit/a190c93147e682b08d5f6764040a3851eecc7e4b"
        },
        "date": 1705468918992,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033156.1224489796,
            "unit": "ns",
            "range": "± 145973.71396355837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1844860.8695652173,
            "unit": "ns",
            "range": "± 88676.91061208281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590355.5555555555,
            "unit": "ns",
            "range": "± 182562.01866104672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11105019.78021978,
            "unit": "ns",
            "range": "± 941629.9783082737"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36538.20224719101,
            "unit": "ns",
            "range": "± 2682.5405875933734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5345380,
            "unit": "ns",
            "range": "± 98425.19421948252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14319300,
            "unit": "ns",
            "range": "± 152811.36184097145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34995811.538461536,
            "unit": "ns",
            "range": "± 171776.11659008136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67844313.33333333,
            "unit": "ns",
            "range": "± 502497.3345581997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137834200,
            "unit": "ns",
            "range": "± 1666957.4062601943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3416044.2708333335,
            "unit": "ns",
            "range": "± 9187.515848564415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1044426.9112723215,
            "unit": "ns",
            "range": "± 3399.947333621498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750723.4095982143,
            "unit": "ns",
            "range": "± 1368.0954635667654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961282.5721153845,
            "unit": "ns",
            "range": "± 5145.735547342354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626839.0249399039,
            "unit": "ns",
            "range": "± 698.4330981935407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569271.09375,
            "unit": "ns",
            "range": "± 1383.2828506624735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2198917.8571428573,
            "unit": "ns",
            "range": "± 91435.40612643713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2396166.6666666665,
            "unit": "ns",
            "range": "± 96125.84598674109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2900346.153846154,
            "unit": "ns",
            "range": "± 45692.22427256479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2944627.6315789474,
            "unit": "ns",
            "range": "± 141662.7954909679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12569500,
            "unit": "ns",
            "range": "± 1723401.4879856664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183236.11111111112,
            "unit": "ns",
            "range": "± 8702.700010941327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179092.22222222222,
            "unit": "ns",
            "range": "± 10619.361454573029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142582.22222222222,
            "unit": "ns",
            "range": "± 5331.010857959001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2850969.230769231,
            "unit": "ns",
            "range": "± 44079.556573226866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2516426.6666666665,
            "unit": "ns",
            "range": "± 42080.1525436308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12488.297872340425,
            "unit": "ns",
            "range": "± 1678.0593234786738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60832.65306122449,
            "unit": "ns",
            "range": "± 8347.822427463012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45364.4578313253,
            "unit": "ns",
            "range": "± 3012.0138522873444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66013.04347826086,
            "unit": "ns",
            "range": "± 11887.875598265955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3526.315789473684,
            "unit": "ns",
            "range": "± 958.8568688604186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11847.368421052632,
            "unit": "ns",
            "range": "± 1480.2847702789559"
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
          "id": "e2f037a8ab451cbfa5c833c548188f1e3062177c",
          "message": "Changelog",
          "timestamp": "2024-01-17T14:25:05+09:00",
          "tree_id": "130fd358dbe8735762e8ce1a394adc9c3fbe0a3b",
          "url": "https://github.com/greymistcube/libplanet/commit/e2f037a8ab451cbfa5c833c548188f1e3062177c"
        },
        "date": 1705469778077,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 915279.7979797979,
            "unit": "ns",
            "range": "± 68264.905645697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1657767.441860465,
            "unit": "ns",
            "range": "± 60024.98972027533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1458174.4897959183,
            "unit": "ns",
            "range": "± 144282.42301106255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10834223.11827957,
            "unit": "ns",
            "range": "± 908072.8169590549"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33993.220338983054,
            "unit": "ns",
            "range": "± 1515.194810142459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4956000,
            "unit": "ns",
            "range": "± 24673.52988372513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12863164.285714285,
            "unit": "ns",
            "range": "± 72817.69234658098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31827260,
            "unit": "ns",
            "range": "± 251536.84989906123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64474026.666666664,
            "unit": "ns",
            "range": "± 378516.26963837683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135569453.33333334,
            "unit": "ns",
            "range": "± 649844.2405318223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3322682.421875,
            "unit": "ns",
            "range": "± 3832.685338412172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064122.5027901786,
            "unit": "ns",
            "range": "± 1851.0399624420684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738952.2670200893,
            "unit": "ns",
            "range": "± 1208.433463848274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968047.5520833333,
            "unit": "ns",
            "range": "± 3429.879795962013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622257.6939174107,
            "unit": "ns",
            "range": "± 876.5443082536766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565694.3424479166,
            "unit": "ns",
            "range": "± 1085.1583946505273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2083855.1724137932,
            "unit": "ns",
            "range": "± 61088.97250385175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2301694.117647059,
            "unit": "ns",
            "range": "± 45472.52564170253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2741878.5714285714,
            "unit": "ns",
            "range": "± 39566.20894285792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2710946.987951807,
            "unit": "ns",
            "range": "± 143968.03874416472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12349837.362637363,
            "unit": "ns",
            "range": "± 1576858.1124536046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164709.80392156861,
            "unit": "ns",
            "range": "± 6274.496151945933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159936.50793650793,
            "unit": "ns",
            "range": "± 6895.447343024227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141664.70588235295,
            "unit": "ns",
            "range": "± 2484.1852729996276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2760493.3333333335,
            "unit": "ns",
            "range": "± 35725.890305144785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2448600,
            "unit": "ns",
            "range": "± 33091.99298924137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9220.224719101123,
            "unit": "ns",
            "range": "± 760.8577359677842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49405.555555555555,
            "unit": "ns",
            "range": "± 3954.6405996196168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44247.887323943665,
            "unit": "ns",
            "range": "± 2026.1052824801986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44856.818181818184,
            "unit": "ns",
            "range": "± 4880.380507460116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2097.8947368421054,
            "unit": "ns",
            "range": "± 328.7561818425079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9489.473684210527,
            "unit": "ns",
            "range": "± 1550.324172292275"
          }
        ]
      }
    ]
  }
}