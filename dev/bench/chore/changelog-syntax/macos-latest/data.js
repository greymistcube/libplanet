window.BENCHMARK_DATA = {
  "lastUpdate": 1687485599607,
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
          "id": "3aa3fe04eaa69b761d67132bbf7deeb088933887",
          "message": "[skip changelog] Removed json syntax highlighting in changelog",
          "timestamp": "2023-06-23T10:36:25+09:00",
          "tree_id": "dafc5cd1a5223a958bec45a046ad1b6e60f13267",
          "url": "https://github.com/greymistcube/libplanet/commit/3aa3fe04eaa69b761d67132bbf7deeb088933887"
        },
        "date": 1687485576376,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9663535.693877552,
            "unit": "ns",
            "range": "± 741407.1106544065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21984920.81632653,
            "unit": "ns",
            "range": "± 1557447.6696812755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54181996.05789474,
            "unit": "ns",
            "range": "± 3233180.179156406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107613352.73529412,
            "unit": "ns",
            "range": "± 3463711.422244391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224931107.4852941,
            "unit": "ns",
            "range": "± 10653983.394900044"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74972.72891566265,
            "unit": "ns",
            "range": "± 13850.911497104335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374390.16483516485,
            "unit": "ns",
            "range": "± 59911.181021068136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 367120.0824175824,
            "unit": "ns",
            "range": "± 53701.621876410965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 355284.670212766,
            "unit": "ns",
            "range": "± 46639.8488374868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4595531.25,
            "unit": "ns",
            "range": "± 382364.8479717548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4048052.414893617,
            "unit": "ns",
            "range": "± 346509.394010804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25467.612359550563,
            "unit": "ns",
            "range": "± 3317.31071405672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112819.34375,
            "unit": "ns",
            "range": "± 20367.59138969147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112442.67582417582,
            "unit": "ns",
            "range": "± 14373.41270354818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121439.76595744681,
            "unit": "ns",
            "range": "± 25858.33076859725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7353.122222222222,
            "unit": "ns",
            "range": "± 1688.7994793708033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17885.58064516129,
            "unit": "ns",
            "range": "± 3545.9845978066783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1718904.8045977012,
            "unit": "ns",
            "range": "± 248620.18678338564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3415581.606741573,
            "unit": "ns",
            "range": "± 518138.5933983831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3332658.712765957,
            "unit": "ns",
            "range": "± 841648.6075226332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8826742.338709677,
            "unit": "ns",
            "range": "± 2571812.5044377507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3534972.8333333335,
            "unit": "ns",
            "range": "± 317140.62734508666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3557415.6041666665,
            "unit": "ns",
            "range": "± 336177.86205811944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4430396.431818182,
            "unit": "ns",
            "range": "± 165775.67575876237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4562872.894736842,
            "unit": "ns",
            "range": "± 367212.607080273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7949648.683908046,
            "unit": "ns",
            "range": "± 595850.1985601736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7411707.886245266,
            "unit": "ns",
            "range": "± 349234.9485319423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2221998.9202008927,
            "unit": "ns",
            "range": "± 33706.54317754869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348344.9138020833,
            "unit": "ns",
            "range": "± 24815.834615320953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2826782.403515625,
            "unit": "ns",
            "range": "± 190575.14948601724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 922375.4862432065,
            "unit": "ns",
            "range": "± 23238.244898269644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 840414.187639509,
            "unit": "ns",
            "range": "± 11104.282352678667"
          }
        ]
      }
    ]
  }
}