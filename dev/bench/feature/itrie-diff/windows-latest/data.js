window.BENCHMARK_DATA = {
  "lastUpdate": 1693792830353,
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
          "id": "06d288e10ab42d4c0d44ef20ef909b3ce5937896",
          "message": "Cleanup",
          "timestamp": "2023-09-04T10:42:36+09:00",
          "tree_id": "0282daa55f3754af880a2bddc6126756ea723363",
          "url": "https://github.com/greymistcube/libplanet/commit/06d288e10ab42d4c0d44ef20ef909b3ce5937896"
        },
        "date": 1693792805593,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428997.9166666667,
            "unit": "ns",
            "range": "± 121853.70864854098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2612034.375,
            "unit": "ns",
            "range": "± 79840.95120875849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1871362.5,
            "unit": "ns",
            "range": "± 146226.72464361636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4946623.72881356,
            "unit": "ns",
            "range": "± 217785.8560201005"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60787.5,
            "unit": "ns",
            "range": "± 6151.512437048136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8388333.333333333,
            "unit": "ns",
            "range": "± 136349.41283684495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22158350,
            "unit": "ns",
            "range": "± 229558.73975956568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54226906.666666664,
            "unit": "ns",
            "range": "± 622011.5139800947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108134657.14285715,
            "unit": "ns",
            "range": "± 941665.4693142895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217889856.66666666,
            "unit": "ns",
            "range": "± 1550607.6276583904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4659603.541666667,
            "unit": "ns",
            "range": "± 30755.227597261972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1453144.517299107,
            "unit": "ns",
            "range": "± 3663.4325730209453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1063933.1640625,
            "unit": "ns",
            "range": "± 4370.795000058767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2680269.112723214,
            "unit": "ns",
            "range": "± 11115.085765346334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844648.8671875,
            "unit": "ns",
            "range": "± 3842.7591688831917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762107.0033482143,
            "unit": "ns",
            "range": "± 2193.996621214482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3633061.5384615385,
            "unit": "ns",
            "range": "± 52535.26654323961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3726107.1428571427,
            "unit": "ns",
            "range": "± 64118.3816711859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4439625,
            "unit": "ns",
            "range": "± 49743.80043601596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4283343.75,
            "unit": "ns",
            "range": "± 84065.15702120587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6355635.714285715,
            "unit": "ns",
            "range": "± 178841.19836548914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286322.44897959183,
            "unit": "ns",
            "range": "± 17268.39990206917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278214.38356164383,
            "unit": "ns",
            "range": "± 13838.797814909653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270250.63291139243,
            "unit": "ns",
            "range": "± 13917.982035958446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4350620,
            "unit": "ns",
            "range": "± 70486.2823533771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3988680,
            "unit": "ns",
            "range": "± 72438.81358971662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29019.38775510204,
            "unit": "ns",
            "range": "± 3264.007345455693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114021.42857142857,
            "unit": "ns",
            "range": "± 12501.498879206609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102855.10204081633,
            "unit": "ns",
            "range": "± 13510.79081868198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108374.15730337078,
            "unit": "ns",
            "range": "± 15086.127945369724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8055.102040816327,
            "unit": "ns",
            "range": "± 1397.1342133449045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28272.448979591838,
            "unit": "ns",
            "range": "± 3921.3342094121695"
          }
        ]
      }
    ]
  }
}