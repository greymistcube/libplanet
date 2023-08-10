window.BENCHMARK_DATA = {
  "lastUpdate": 1691646220430,
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
          "id": "70d7b370f6d49c724d92636de09e0b04f4a36433",
          "message": "Readonly state root from BlockChainStates",
          "timestamp": "2023-08-10T14:21:04+09:00",
          "tree_id": "c925c4650a2aed4912f3bb5385e4b96d9681a5c7",
          "url": "https://github.com/greymistcube/libplanet/commit/70d7b370f6d49c724d92636de09e0b04f4a36433"
        },
        "date": 1691646193635,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1716777.894736842,
            "unit": "ns",
            "range": "± 200791.12476091855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3166937.7551020407,
            "unit": "ns",
            "range": "± 301654.49940862006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2155008.4210526315,
            "unit": "ns",
            "range": "± 228576.16946541122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5748553.125,
            "unit": "ns",
            "range": "± 480847.2940556678"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67891.75257731958,
            "unit": "ns",
            "range": "± 17124.608694453265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8897694.623655913,
            "unit": "ns",
            "range": "± 658170.3422574603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25502350.746268656,
            "unit": "ns",
            "range": "± 1197279.2059844555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65269581.25,
            "unit": "ns",
            "range": "± 1902257.3026390378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134054837.5,
            "unit": "ns",
            "range": "± 2598899.913649363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268040640,
            "unit": "ns",
            "range": "± 5932304.0763353715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5358344.001116072,
            "unit": "ns",
            "range": "± 150743.8030254441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1752651.97265625,
            "unit": "ns",
            "range": "± 29385.844338939478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1273288.515625,
            "unit": "ns",
            "range": "± 22978.436098156355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3243185.3271484375,
            "unit": "ns",
            "range": "± 61946.32391292519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1042959.5182291666,
            "unit": "ns",
            "range": "± 10577.469533843418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 961482.2005208334,
            "unit": "ns",
            "range": "± 14657.249531516181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3687275,
            "unit": "ns",
            "range": "± 316080.89537498564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4159903.1578947366,
            "unit": "ns",
            "range": "± 446807.3256634424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5080039.175257732,
            "unit": "ns",
            "range": "± 329819.32824297313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4587882.828282828,
            "unit": "ns",
            "range": "± 297891.586922602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7674851.648351648,
            "unit": "ns",
            "range": "± 428194.42763581575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337681.8181818182,
            "unit": "ns",
            "range": "± 52248.72884624311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319357.73195876286,
            "unit": "ns",
            "range": "± 41016.520642732954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272080.41237113404,
            "unit": "ns",
            "range": "± 44599.46430726322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4790363.829787234,
            "unit": "ns",
            "range": "± 370481.2046227493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4302356.043956044,
            "unit": "ns",
            "range": "± 350920.5016678883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27358.76288659794,
            "unit": "ns",
            "range": "± 9900.99692557648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113489.47368421052,
            "unit": "ns",
            "range": "± 21292.82904803824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126746.31578947368,
            "unit": "ns",
            "range": "± 18886.530213785627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130477.31958762887,
            "unit": "ns",
            "range": "± 30683.018189880706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8582.79569892473,
            "unit": "ns",
            "range": "± 1125.2655392814372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26186.59793814433,
            "unit": "ns",
            "range": "± 8038.444460657736"
          }
        ]
      }
    ]
  }
}