window.BENCHMARK_DATA = {
  "lastUpdate": 1683108637349,
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
          "id": "12ec11d8eafc82ca85f94fc8d38fff3ebc47c55d",
          "message": "Changelog",
          "timestamp": "2023-05-03T18:46:25+09:00",
          "tree_id": "f72af88a9d0ed40709a08fb6a347aab0e1edd9bf",
          "url": "https://github.com/greymistcube/libplanet/commit/12ec11d8eafc82ca85f94fc8d38fff3ebc47c55d"
        },
        "date": 1683108617221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9198497.785714285,
            "unit": "ns",
            "range": "± 121025.86634725817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23540789.236842107,
            "unit": "ns",
            "range": "± 729124.4739395727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71410758.59574468,
            "unit": "ns",
            "range": "± 14410327.639987558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136244229.24731183,
            "unit": "ns",
            "range": "± 25091728.071080543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288788234.71875,
            "unit": "ns",
            "range": "± 52847394.35315752"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72526.3021978022,
            "unit": "ns",
            "range": "± 10246.665880741435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388078.967032967,
            "unit": "ns",
            "range": "± 22096.705238288127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 373650.2978723404,
            "unit": "ns",
            "range": "± 21200.31018277331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321597.85074626864,
            "unit": "ns",
            "range": "± 15240.421856737601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5167627.373134328,
            "unit": "ns",
            "range": "± 244142.23302348162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4339826.517241379,
            "unit": "ns",
            "range": "± 103833.4175290336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21548.260869565216,
            "unit": "ns",
            "range": "± 2487.5077000027286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110295.01086956522,
            "unit": "ns",
            "range": "± 14980.595521763938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98346.03333333334,
            "unit": "ns",
            "range": "± 11315.348681564932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121032.16842105263,
            "unit": "ns",
            "range": "± 20453.325123029605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6248.621052631579,
            "unit": "ns",
            "range": "± 1034.0189839294728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21272.595505617977,
            "unit": "ns",
            "range": "± 2241.6507397608752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2061199.0617977527,
            "unit": "ns",
            "range": "± 273137.5246038221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3798474.451219512,
            "unit": "ns",
            "range": "± 353694.6462069864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3127404.945652174,
            "unit": "ns",
            "range": "± 445169.72648937325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7980437.5125,
            "unit": "ns",
            "range": "± 693642.1564998934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4150823.949438202,
            "unit": "ns",
            "range": "± 452759.4259915326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4357771.863636363,
            "unit": "ns",
            "range": "± 473839.79270332557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5472563.173076923,
            "unit": "ns",
            "range": "± 225980.75450657657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5743889.659090909,
            "unit": "ns",
            "range": "± 874269.8806800164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9767126.917647058,
            "unit": "ns",
            "range": "± 706613.1590205695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7486518.199100379,
            "unit": "ns",
            "range": "± 235255.43335546975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2260595.5344122024,
            "unit": "ns",
            "range": "± 51050.1971635143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1517735.9639423077,
            "unit": "ns",
            "range": "± 18338.677685438404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3348880.734561012,
            "unit": "ns",
            "range": "± 78109.2778476809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974846.6018415178,
            "unit": "ns",
            "range": "± 13129.335220357096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 959342.339468149,
            "unit": "ns",
            "range": "± 10232.062974154462"
          }
        ]
      }
    ]
  }
}