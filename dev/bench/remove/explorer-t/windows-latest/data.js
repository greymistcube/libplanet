window.BENCHMARK_DATA = {
  "lastUpdate": 1684475907437,
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
          "id": "68abe2621ad7ee020dce0d6fb79b25d81f103d5d",
          "message": "Removed t from rest of the Explorer",
          "timestamp": "2023-05-19T14:31:04+09:00",
          "tree_id": "445f0508d49175ce2fa994a79892c3f4394ccff0",
          "url": "https://github.com/greymistcube/libplanet/commit/68abe2621ad7ee020dce0d6fb79b25d81f103d5d"
        },
        "date": 1684475126684,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1343026.530612245,
            "unit": "ns",
            "range": "± 114093.47727592241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2529436.470588235,
            "unit": "ns",
            "range": "± 136632.6138008844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2167867.3469387754,
            "unit": "ns",
            "range": "± 172807.54432719035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5297158.75,
            "unit": "ns",
            "range": "± 275832.25212957495"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48621.59090909091,
            "unit": "ns",
            "range": "± 2695.3961969082043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6669215.384615385,
            "unit": "ns",
            "range": "± 14606.154305283222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18518718.75,
            "unit": "ns",
            "range": "± 343950.2817147657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45691294.11764706,
            "unit": "ns",
            "range": "± 875881.6340340944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92590268,
            "unit": "ns",
            "range": "± 2421929.3857927956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183053571.42857143,
            "unit": "ns",
            "range": "± 2912051.7304229573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4756590.234375,
            "unit": "ns",
            "range": "± 30728.11462962247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519756.8229166667,
            "unit": "ns",
            "range": "± 7439.835408270652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174654.7293526786,
            "unit": "ns",
            "range": "± 4239.181562433473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619091.3541666665,
            "unit": "ns",
            "range": "± 7979.02622003774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811109.7726004465,
            "unit": "ns",
            "range": "± 2357.8051184788146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761542.1484375,
            "unit": "ns",
            "range": "± 3331.977406928096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2927036.5853658537,
            "unit": "ns",
            "range": "± 104902.48985628881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3076329.1666666665,
            "unit": "ns",
            "range": "± 79245.20821704186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3838341.6666666665,
            "unit": "ns",
            "range": "± 149563.33580941457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3878978.947368421,
            "unit": "ns",
            "range": "± 197156.0595506612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6423008.536585365,
            "unit": "ns",
            "range": "± 339287.9785600468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249584.2105263158,
            "unit": "ns",
            "range": "± 8443.24538333036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234302.7027027027,
            "unit": "ns",
            "range": "± 7895.655855049748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210158.33333333334,
            "unit": "ns",
            "range": "± 5270.171737707182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3792106.6666666665,
            "unit": "ns",
            "range": "± 70212.04075275599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3423783.3333333335,
            "unit": "ns",
            "range": "± 100170.56516979817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16432.608695652172,
            "unit": "ns",
            "range": "± 1280.2050570339982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80976.5306122449,
            "unit": "ns",
            "range": "± 6150.983510670287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67908.69565217392,
            "unit": "ns",
            "range": "± 1658.0144322977137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84897.91666666667,
            "unit": "ns",
            "range": "± 13467.06688001798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4511.578947368421,
            "unit": "ns",
            "range": "± 592.6613538970932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16234.736842105263,
            "unit": "ns",
            "range": "± 1516.2080655689392"
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
          "id": "1bff4aae077ac2d0f1d0b99f720422c0ef4bbe7c",
          "message": "Changelog",
          "timestamp": "2023-05-19T14:42:41+09:00",
          "tree_id": "e5dcb36f27486030dfa89ad341f7196be4e9d4cb",
          "url": "https://github.com/greymistcube/libplanet/commit/1bff4aae077ac2d0f1d0b99f720422c0ef4bbe7c"
        },
        "date": 1684475885063,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1370872.6315789474,
            "unit": "ns",
            "range": "± 168201.18933605953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2389075,
            "unit": "ns",
            "range": "± 98218.63940948776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2059442.7835051545,
            "unit": "ns",
            "range": "± 144302.95189824214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5376725.252525252,
            "unit": "ns",
            "range": "± 319624.1646069659"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48929.62962962963,
            "unit": "ns",
            "range": "± 2581.7844819254587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6720575,
            "unit": "ns",
            "range": "± 37414.14717845255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18613402.38095238,
            "unit": "ns",
            "range": "± 415133.9694834038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46899353.84615385,
            "unit": "ns",
            "range": "± 1273968.1880583265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91538646.66666667,
            "unit": "ns",
            "range": "± 1417163.013038306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182894421.42857143,
            "unit": "ns",
            "range": "± 1862665.8989319464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4688063.783482143,
            "unit": "ns",
            "range": "± 16940.746185736534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1489201.5494791667,
            "unit": "ns",
            "range": "± 14875.103633096776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138351.7578125,
            "unit": "ns",
            "range": "± 6550.824243066654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612785.0520833335,
            "unit": "ns",
            "range": "± 9273.56464790276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811742.44140625,
            "unit": "ns",
            "range": "± 3022.1562769712596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752920.6333705357,
            "unit": "ns",
            "range": "± 2990.337772753959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2988471.4285714286,
            "unit": "ns",
            "range": "± 106567.37084875804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3117050,
            "unit": "ns",
            "range": "± 28008.81354794659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3858955.3191489363,
            "unit": "ns",
            "range": "± 129551.49523160186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3951291.6666666665,
            "unit": "ns",
            "range": "± 155368.1377469343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6276446.341463415,
            "unit": "ns",
            "range": "± 221181.25044582895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254125.67567567568,
            "unit": "ns",
            "range": "± 8609.407174242131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234826.08695652173,
            "unit": "ns",
            "range": "± 7791.146963990139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217196.15384615384,
            "unit": "ns",
            "range": "± 11210.47101328309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3820761.111111111,
            "unit": "ns",
            "range": "± 80634.33175463378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3460650,
            "unit": "ns",
            "range": "± 72786.6200535753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18554.639175257733,
            "unit": "ns",
            "range": "± 1963.4695385633001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85330.52631578948,
            "unit": "ns",
            "range": "± 7288.128990909114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70645.23809523809,
            "unit": "ns",
            "range": "± 2383.8074055607008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95062.24489795919,
            "unit": "ns",
            "range": "± 14775.54761352732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4884.210526315789,
            "unit": "ns",
            "range": "± 687.6286401078191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17676.041666666668,
            "unit": "ns",
            "range": "± 1964.5138566532064"
          }
        ]
      }
    ]
  }
}