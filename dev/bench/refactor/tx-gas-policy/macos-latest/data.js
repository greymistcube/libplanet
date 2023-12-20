window.BENCHMARK_DATA = {
  "lastUpdate": 1703040965262,
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
          "id": "10880c93f390657fae7c733fbce4e26ddeaa2281",
          "message": "More strict conditions for TxInvoice gas arguments",
          "timestamp": "2023-12-20T11:35:28+09:00",
          "tree_id": "ecc9df8922443ee164d6e95078e2f2b4ec6240b4",
          "url": "https://github.com/greymistcube/libplanet/commit/10880c93f390657fae7c733fbce4e26ddeaa2281"
        },
        "date": 1703040949792,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9091327.34,
            "unit": "ns",
            "range": "± 1579498.2524798256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24075839.95,
            "unit": "ns",
            "range": "± 3549972.3621425987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69542633.20833333,
            "unit": "ns",
            "range": "± 3397983.693865492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 149724922.20833334,
            "unit": "ns",
            "range": "± 5502746.017224812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248036727.71,
            "unit": "ns",
            "range": "± 42301212.29151972"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39993.42307692308,
            "unit": "ns",
            "range": "± 5554.333223770767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366647.0786516854,
            "unit": "ns",
            "range": "± 31762.201318485728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343889.5056179775,
            "unit": "ns",
            "range": "± 19031.54922402392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309451.9130434783,
            "unit": "ns",
            "range": "± 23837.45238717923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5468504.573684211,
            "unit": "ns",
            "range": "± 518627.81079257076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5068722.283783784,
            "unit": "ns",
            "range": "± 168940.78583422446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24606.24742268041,
            "unit": "ns",
            "range": "± 3187.832695156852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96709.8125,
            "unit": "ns",
            "range": "± 13213.349269274695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93701.4387755102,
            "unit": "ns",
            "range": "± 16715.134556860285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97846.5,
            "unit": "ns",
            "range": "± 16446.256753371028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7690.436842105263,
            "unit": "ns",
            "range": "± 1329.0415744463912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18064.78888888889,
            "unit": "ns",
            "range": "± 1555.5265393049062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1297021.4595959596,
            "unit": "ns",
            "range": "± 166984.67815487788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2536554.8541666665,
            "unit": "ns",
            "range": "± 247168.81345198615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1702750.8673469387,
            "unit": "ns",
            "range": "± 148470.55378793337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8236730.113636363,
            "unit": "ns",
            "range": "± 604263.7468130442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2849483.327586207,
            "unit": "ns",
            "range": "± 108397.20373362034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3023010.5208333335,
            "unit": "ns",
            "range": "± 117988.81259236828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4073531.76,
            "unit": "ns",
            "range": "± 535206.3967368786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3839332.74,
            "unit": "ns",
            "range": "± 486611.0795599058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16802943.691919193,
            "unit": "ns",
            "range": "± 4282783.004319544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6244919.9456380205,
            "unit": "ns",
            "range": "± 244737.2766987955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1671759.67265625,
            "unit": "ns",
            "range": "± 279400.10159943724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 903495.4282588252,
            "unit": "ns",
            "range": "± 37640.17139092395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2077317.5287224264,
            "unit": "ns",
            "range": "± 98379.1891276759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631686.5370361328,
            "unit": "ns",
            "range": "± 22279.40450259121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586817.8977801984,
            "unit": "ns",
            "range": "± 23819.68155678021"
          }
        ]
      }
    ]
  }
}