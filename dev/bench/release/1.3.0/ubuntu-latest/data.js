window.BENCHMARK_DATA = {
  "lastUpdate": 1684478937435,
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
          "id": "8bb5b811950075ca226df3541e39683eb3fd2286",
          "message": "Release 1.3.0",
          "timestamp": "2023-05-19T15:35:51+09:00",
          "tree_id": "b33c790994676a85b647569d28526a969f6cfc6e",
          "url": "https://github.com/greymistcube/libplanet/commit/8bb5b811950075ca226df3541e39683eb3fd2286"
        },
        "date": 1684478930468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3285222.777777778,
            "unit": "ns",
            "range": "± 89575.32880865961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3368934.1739130435,
            "unit": "ns",
            "range": "± 77570.54895070572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4319164.5,
            "unit": "ns",
            "range": "± 133841.303768981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4363754.326530612,
            "unit": "ns",
            "range": "± 171642.66582318966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6793443.28125,
            "unit": "ns",
            "range": "± 204603.5936072064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285499.8367346939,
            "unit": "ns",
            "range": "± 11297.50154596681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276253.6785714286,
            "unit": "ns",
            "range": "± 10882.30176873047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231949.7037037037,
            "unit": "ns",
            "range": "± 4216.408285722439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4301956.133333334,
            "unit": "ns",
            "range": "± 72693.37745810596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3854001.1875,
            "unit": "ns",
            "range": "± 74072.76312403343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17991.791666666668,
            "unit": "ns",
            "range": "± 1516.2194808256118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83288.36585365854,
            "unit": "ns",
            "range": "± 4242.2212720800835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74577.55405405405,
            "unit": "ns",
            "range": "± 3734.6011803792635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89835.85416666667,
            "unit": "ns",
            "range": "± 11285.25308438002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5008.364583333333,
            "unit": "ns",
            "range": "± 715.3319894660862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17752.827956989247,
            "unit": "ns",
            "range": "± 1063.2879137236446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5796663.992745535,
            "unit": "ns",
            "range": "± 23340.023278379274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1855756.602734375,
            "unit": "ns",
            "range": "± 9911.971231158268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361919.1199776786,
            "unit": "ns",
            "range": "± 5805.910784426666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589282.5325520835,
            "unit": "ns",
            "range": "± 11546.69636378553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821701.0294921875,
            "unit": "ns",
            "range": "± 3657.5444305018464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759101.9432291667,
            "unit": "ns",
            "range": "± 1317.5519856161798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7659014.923076923,
            "unit": "ns",
            "range": "± 22416.73325316581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20931265.8,
            "unit": "ns",
            "range": "± 206565.09208486456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51387658.78571428,
            "unit": "ns",
            "range": "± 676794.0536928701"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103787844.35,
            "unit": "ns",
            "range": "± 2380100.7480129083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206097556.6,
            "unit": "ns",
            "range": "± 3456984.750792182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349084.7765957448,
            "unit": "ns",
            "range": "± 80751.81493618076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2582235.35483871,
            "unit": "ns",
            "range": "± 76848.3795966874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2181134.012987013,
            "unit": "ns",
            "range": "± 111146.7155016398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5264374.324324325,
            "unit": "ns",
            "range": "± 175099.92705643733"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50603.848837209305,
            "unit": "ns",
            "range": "± 2773.2057496374414"
          }
        ]
      }
    ]
  }
}