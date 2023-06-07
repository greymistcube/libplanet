window.BENCHMARK_DATA = {
  "lastUpdate": 1686128197182,
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
          "id": "c904ed9407d3095e90ee6036d60d223ecf31973c",
          "message": "Release 1.4.0",
          "timestamp": "2023-06-07T17:32:01+09:00",
          "tree_id": "1f32bb1e8779c3a4e467e6db02a8d55373fb9578",
          "url": "https://github.com/greymistcube/libplanet/commit/c904ed9407d3095e90ee6036d60d223ecf31973c"
        },
        "date": 1686128182553,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9311087.282352941,
            "unit": "ns",
            "range": "± 1131020.731541063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21614643.255813953,
            "unit": "ns",
            "range": "± 1445953.483264164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59185890.823529415,
            "unit": "ns",
            "range": "± 5465715.308941038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125222755.02298851,
            "unit": "ns",
            "range": "± 22000357.82971132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239538643.66292134,
            "unit": "ns",
            "range": "± 30422653.351986933"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76608.71176470588,
            "unit": "ns",
            "range": "± 7065.903487699149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364225.86559139786,
            "unit": "ns",
            "range": "± 55039.53611185662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343660.4673913043,
            "unit": "ns",
            "range": "± 42881.462537704465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344642.1379310345,
            "unit": "ns",
            "range": "± 37579.380393660715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4519939.357142857,
            "unit": "ns",
            "range": "± 307596.88449463225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4013082.987012987,
            "unit": "ns",
            "range": "± 205249.73525410797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25140.905263157896,
            "unit": "ns",
            "range": "± 5251.277038348161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116054.32291666667,
            "unit": "ns",
            "range": "± 18193.82366483909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118606.86666666667,
            "unit": "ns",
            "range": "± 13469.62008377087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128967.05434782608,
            "unit": "ns",
            "range": "± 22957.39263556268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8259.897849462366,
            "unit": "ns",
            "range": "± 1687.6930816417457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23648.217391304348,
            "unit": "ns",
            "range": "± 5640.728718853108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1714506.8076923077,
            "unit": "ns",
            "range": "± 237351.47897339892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3330440.7701149425,
            "unit": "ns",
            "range": "± 378227.44397317525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2862345.091954023,
            "unit": "ns",
            "range": "± 473696.8432927362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8204410.741935484,
            "unit": "ns",
            "range": "± 1972837.2645826726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3427430.388888889,
            "unit": "ns",
            "range": "± 267651.9772900931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3825035.534883721,
            "unit": "ns",
            "range": "± 652339.968563013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4767739.375,
            "unit": "ns",
            "range": "± 368718.4917360074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5228326.831460674,
            "unit": "ns",
            "range": "± 1026396.9527481718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9914972.577319589,
            "unit": "ns",
            "range": "± 3120223.376121037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7858240.243933824,
            "unit": "ns",
            "range": "± 533338.6112720234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2341943.479854284,
            "unit": "ns",
            "range": "± 219297.43565673003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422219.5107090836,
            "unit": "ns",
            "range": "± 62512.21172733731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3182295.932471742,
            "unit": "ns",
            "range": "± 223628.23492683907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 914641.4621975806,
            "unit": "ns",
            "range": "± 26999.20306368289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 864360.409014423,
            "unit": "ns",
            "range": "± 39966.56216665868"
          }
        ]
      }
    ]
  }
}