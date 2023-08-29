window.BENCHMARK_DATA = {
  "lastUpdate": 1693274384608,
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
          "id": "8fd3f8d0796a07e1153001ede1da9fa89f348a4c",
          "message": "Added tests",
          "timestamp": "2023-08-29T10:41:31+09:00",
          "tree_id": "57e213a1dc4e272b185cdc5fe4d197ee3e2461d4",
          "url": "https://github.com/greymistcube/libplanet/commit/8fd3f8d0796a07e1153001ede1da9fa89f348a4c"
        },
        "date": 1693274361529,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1302161.616161616,
            "unit": "ns",
            "range": "± 88928.91073609477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2507310.769230769,
            "unit": "ns",
            "range": "± 116341.87917926002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1672287.7551020407,
            "unit": "ns",
            "range": "± 111558.035624666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4576170,
            "unit": "ns",
            "range": "± 286709.8802876271"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47187.91208791209,
            "unit": "ns",
            "range": "± 2731.4560693615886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7311307.142857143,
            "unit": "ns",
            "range": "± 76388.46534237114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20080100,
            "unit": "ns",
            "range": "± 145176.85765989014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50896980,
            "unit": "ns",
            "range": "± 939474.7873146996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99737028.57142857,
            "unit": "ns",
            "range": "± 1154425.1032963893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201264420,
            "unit": "ns",
            "range": "± 3121330.2114414526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4496273.59375,
            "unit": "ns",
            "range": "± 18139.77738883578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1443341.71875,
            "unit": "ns",
            "range": "± 5548.884674589748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1069234.1666666667,
            "unit": "ns",
            "range": "± 3487.888056736914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650169.7395833335,
            "unit": "ns",
            "range": "± 7777.644480684511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848379.0169270834,
            "unit": "ns",
            "range": "± 2367.8068325427266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769266.42578125,
            "unit": "ns",
            "range": "± 1838.7061832953614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3184633.3333333335,
            "unit": "ns",
            "range": "± 103224.55933121152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3341578.048780488,
            "unit": "ns",
            "range": "± 118489.1862411822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4123833.3333333335,
            "unit": "ns",
            "range": "± 87532.98537929439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3647216.6666666665,
            "unit": "ns",
            "range": "± 171495.1146048579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5894109.090909091,
            "unit": "ns",
            "range": "± 116981.6831778984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258011.90476190476,
            "unit": "ns",
            "range": "± 9295.244060112136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246159.0163934426,
            "unit": "ns",
            "range": "± 10530.422230363167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226136.73469387754,
            "unit": "ns",
            "range": "± 14801.590801626153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4149133.3333333335,
            "unit": "ns",
            "range": "± 58436.45714628432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3806600,
            "unit": "ns",
            "range": "± 65432.95368979937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21521.875,
            "unit": "ns",
            "range": "± 2133.5023404819844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91987.62886597938,
            "unit": "ns",
            "range": "± 7051.673231285236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77022.44897959183,
            "unit": "ns",
            "range": "± 5163.228044312615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90110.30927835051,
            "unit": "ns",
            "range": "± 14446.110235804557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5893.939393939394,
            "unit": "ns",
            "range": "± 970.4636154655597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20628.125,
            "unit": "ns",
            "range": "± 2048.6556888796486"
          }
        ]
      }
    ]
  }
}