window.BENCHMARK_DATA = {
  "lastUpdate": 1696392983764,
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
          "id": "250e4a8e03fcdb06cb573e4e3b48f0e1adec3685",
          "message": "Changed Evaluate to require base state root hash",
          "timestamp": "2023-10-04T12:55:22+09:00",
          "tree_id": "5cc7f9988adcf7a5928fa466c2a438ae65723157",
          "url": "https://github.com/greymistcube/libplanet/commit/250e4a8e03fcdb06cb573e4e3b48f0e1adec3685"
        },
        "date": 1696392974418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61742.836956521736,
            "unit": "ns",
            "range": "± 13540.021596779547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8495917.634408602,
            "unit": "ns",
            "range": "± 479215.1622255776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24215388.74,
            "unit": "ns",
            "range": "± 1845438.7556208814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60678762.37,
            "unit": "ns",
            "range": "± 3549586.3351591295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120267781.61797753,
            "unit": "ns",
            "range": "± 6385666.872236461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243717932.82474226,
            "unit": "ns",
            "range": "± 14137331.5134789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325326.43298969074,
            "unit": "ns",
            "range": "± 43043.4799035394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325839.96907216497,
            "unit": "ns",
            "range": "± 39282.06870121468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270341.71875,
            "unit": "ns",
            "range": "± 35095.405958976015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4551665.255319149,
            "unit": "ns",
            "range": "± 308150.1766898709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4331942.760416667,
            "unit": "ns",
            "range": "± 258277.5186374347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32212,
            "unit": "ns",
            "range": "± 9811.726159269316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106881.25,
            "unit": "ns",
            "range": "± 20166.68293732851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96193.28260869565,
            "unit": "ns",
            "range": "± 13591.870120399331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107481.15789473684,
            "unit": "ns",
            "range": "± 20445.464364267904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5942.435294117647,
            "unit": "ns",
            "range": "± 1077.8248758611994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30415.51020408163,
            "unit": "ns",
            "range": "± 9086.304548911226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1461171.0202020202,
            "unit": "ns",
            "range": "± 199678.71194603632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2810959.3229166665,
            "unit": "ns",
            "range": "± 206550.6115043755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2347922.3232323234,
            "unit": "ns",
            "range": "± 288062.0192802461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10948258.242105262,
            "unit": "ns",
            "range": "± 1012033.0032235906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5590112.886160715,
            "unit": "ns",
            "range": "± 130582.5543150584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2020099.0835129311,
            "unit": "ns",
            "range": "± 58638.7212836095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1234071.913969494,
            "unit": "ns",
            "range": "± 28095.83525525267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2844131.570172991,
            "unit": "ns",
            "range": "± 81113.17798862801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 915079.7174136513,
            "unit": "ns",
            "range": "± 19986.348208926836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 889113.7031947544,
            "unit": "ns",
            "range": "± 11051.873436584614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3562354.84375,
            "unit": "ns",
            "range": "± 261082.99799038813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4408137.969072165,
            "unit": "ns",
            "range": "± 305235.8580577981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4965085.08,
            "unit": "ns",
            "range": "± 331302.0882698648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4500597.142857143,
            "unit": "ns",
            "range": "± 404014.62204681267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12929376.908045977,
            "unit": "ns",
            "range": "± 766922.1893342856"
          }
        ]
      }
    ]
  }
}