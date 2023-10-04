window.BENCHMARK_DATA = {
  "lastUpdate": 1696392843197,
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
        "date": 1696392829213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8353424.107142857,
            "unit": "ns",
            "range": "± 235080.64076985556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20897681.388888888,
            "unit": "ns",
            "range": "± 429151.2211717024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53739639.41549296,
            "unit": "ns",
            "range": "± 2615451.430236748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106266772.3,
            "unit": "ns",
            "range": "± 1657006.0713838337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210737326.4,
            "unit": "ns",
            "range": "± 3256333.874347101"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73811.53488372093,
            "unit": "ns",
            "range": "± 8639.771657791009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326279.0326086957,
            "unit": "ns",
            "range": "± 31050.828718728335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303098.45263157896,
            "unit": "ns",
            "range": "± 25725.05353829734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296357.8541666667,
            "unit": "ns",
            "range": "± 21818.999753222888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4227136.978260869,
            "unit": "ns",
            "range": "± 102248.98029270138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4213678.21,
            "unit": "ns",
            "range": "± 464805.7383065672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27876.709677419356,
            "unit": "ns",
            "range": "± 5655.325528977945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108244.21134020618,
            "unit": "ns",
            "range": "± 22575.71280572644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108242.07692307692,
            "unit": "ns",
            "range": "± 14516.276599604984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106890.40322580645,
            "unit": "ns",
            "range": "± 17718.51009234995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8370.484210526316,
            "unit": "ns",
            "range": "± 1403.6702487768384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21896.736559139787,
            "unit": "ns",
            "range": "± 5061.562719242232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1471216.9130434783,
            "unit": "ns",
            "range": "± 114033.0328883111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2886589.3958333335,
            "unit": "ns",
            "range": "± 113221.78659430321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2348154.84375,
            "unit": "ns",
            "range": "± 203057.4896642161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10086051.745283019,
            "unit": "ns",
            "range": "± 416533.52285102895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3341714.9777777777,
            "unit": "ns",
            "range": "± 185846.00548140056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3768050.942105263,
            "unit": "ns",
            "range": "± 286262.6868357444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4541343.79032258,
            "unit": "ns",
            "range": "± 347550.1223150842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4372647.775510204,
            "unit": "ns",
            "range": "± 281092.3210959045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16070567.12631579,
            "unit": "ns",
            "range": "± 1861482.7530577197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6058827.759114583,
            "unit": "ns",
            "range": "± 76441.20272782615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1704110.01171875,
            "unit": "ns",
            "range": "± 47776.04499262262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1069710.2502604167,
            "unit": "ns",
            "range": "± 17891.185268844452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2464956.752734375,
            "unit": "ns",
            "range": "± 41668.935764738344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843427.9180175781,
            "unit": "ns",
            "range": "± 19053.52305276738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733204.5778645833,
            "unit": "ns",
            "range": "± 11819.923969540214"
          }
        ]
      }
    ]
  }
}