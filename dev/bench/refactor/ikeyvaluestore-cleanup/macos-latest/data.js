window.BENCHMARK_DATA = {
  "lastUpdate": 1693380114266,
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
          "id": "39e52aba4cbde119579b4cf5df3a381e960bc8f5",
          "message": "Removed unused Get()",
          "timestamp": "2023-08-30T16:02:47+09:00",
          "tree_id": "134dcb6fe4e18ac927f34502576fb3ad458102a9",
          "url": "https://github.com/greymistcube/libplanet/commit/39e52aba4cbde119579b4cf5df3a381e960bc8f5"
        },
        "date": 1693380083248,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9297343.961538462,
            "unit": "ns",
            "range": "± 248744.73394280826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23511183.733333334,
            "unit": "ns",
            "range": "± 307776.7596130738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59000659.666666664,
            "unit": "ns",
            "range": "± 793922.6735849266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122231702.35714285,
            "unit": "ns",
            "range": "± 1468946.6984520475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237863098.96153846,
            "unit": "ns",
            "range": "± 783142.0068285419"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65780.43181818182,
            "unit": "ns",
            "range": "± 5439.711234719806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365313.9310344828,
            "unit": "ns",
            "range": "± 19859.191731481587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348718.9220779221,
            "unit": "ns",
            "range": "± 17528.923518127824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 346701.70967741933,
            "unit": "ns",
            "range": "± 15571.379554355692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4935244.25,
            "unit": "ns",
            "range": "± 103666.66966818267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4556466.966666667,
            "unit": "ns",
            "range": "± 78534.38930254574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21080.70786516854,
            "unit": "ns",
            "range": "± 1313.6566782203374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97648.38461538461,
            "unit": "ns",
            "range": "± 5495.790809073252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119888.625,
            "unit": "ns",
            "range": "± 8909.941166147537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112447.1,
            "unit": "ns",
            "range": "± 8696.126899469982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7868.071428571428,
            "unit": "ns",
            "range": "± 811.1194377328416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20757.145833333332,
            "unit": "ns",
            "range": "± 1600.4371440931327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1731226,
            "unit": "ns",
            "range": "± 176931.87676092834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3320897.362318841,
            "unit": "ns",
            "range": "± 151777.2092382325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2269615.78,
            "unit": "ns",
            "range": "± 231758.62289392488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6434548.732142857,
            "unit": "ns",
            "range": "± 265419.7524031076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3945493.653846154,
            "unit": "ns",
            "range": "± 136516.3183132984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4095743.8732394367,
            "unit": "ns",
            "range": "± 199069.10312960815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5001640.785714285,
            "unit": "ns",
            "range": "± 108946.24682361657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5212489.818181818,
            "unit": "ns",
            "range": "± 211557.46596926494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8248234.444444444,
            "unit": "ns",
            "range": "± 296321.64653644647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6544356.370833334,
            "unit": "ns",
            "range": "± 112058.36816975311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956770.5419270834,
            "unit": "ns",
            "range": "± 13235.367092164033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165492.4263020833,
            "unit": "ns",
            "range": "± 8079.502638074788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2888902.6796875,
            "unit": "ns",
            "range": "± 28793.40489446108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 921956.81328125,
            "unit": "ns",
            "range": "± 10458.36832271625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 862633.9027622768,
            "unit": "ns",
            "range": "± 7015.416821303225"
          }
        ]
      }
    ]
  }
}