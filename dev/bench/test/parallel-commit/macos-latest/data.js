window.BENCHMARK_DATA = {
  "lastUpdate": 1708622657729,
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
          "id": "e443ed31ecd0c6b31c284148a8bb3477acd5eded",
          "message": "Parallel commit",
          "timestamp": "2024-02-22T22:06:07+09:00",
          "tree_id": "8d27655c949880994e0cf309ade45ea5dfb6d2c4",
          "url": "https://github.com/greymistcube/libplanet/commit/e443ed31ecd0c6b31c284148a8bb3477acd5eded"
        },
        "date": 1708622642407,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7739124.466666667,
            "unit": "ns",
            "range": "± 125254.82528821376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18831290.14285714,
            "unit": "ns",
            "range": "± 275377.65901613876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46033487.64285714,
            "unit": "ns",
            "range": "± 528984.6762393911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93489568,
            "unit": "ns",
            "range": "± 1988416.2006163767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191850923.9473684,
            "unit": "ns",
            "range": "± 4230189.769597399"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35280.37356321839,
            "unit": "ns",
            "range": "± 4920.29986041359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222861.6894736842,
            "unit": "ns",
            "range": "± 17894.913580367585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215377.71578947367,
            "unit": "ns",
            "range": "± 15116.917602518835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191574.4655172414,
            "unit": "ns",
            "range": "± 6123.83983703585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3902676.6428571427,
            "unit": "ns",
            "range": "± 68392.86329149257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3466061.785714286,
            "unit": "ns",
            "range": "± 51216.13872212933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14068.5,
            "unit": "ns",
            "range": "± 2014.483890960356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60216.322916666664,
            "unit": "ns",
            "range": "± 5401.6640067663975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51982.794117647056,
            "unit": "ns",
            "range": "± 2498.402516826359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61470.34210526316,
            "unit": "ns",
            "range": "± 10188.971852496907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3490.232558139535,
            "unit": "ns",
            "range": "± 544.126686684995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12563.822916666666,
            "unit": "ns",
            "range": "± 1424.2873231331237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1125817.7692307692,
            "unit": "ns",
            "range": "± 101529.44824555167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2634939.3021978023,
            "unit": "ns",
            "range": "± 406211.19281494233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2563585.5721649486,
            "unit": "ns",
            "range": "± 591171.5899482331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 17120966.666666668,
            "unit": "ns",
            "range": "± 3009685.832017308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2887040.285714286,
            "unit": "ns",
            "range": "± 45874.884716147026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3067340.629032258,
            "unit": "ns",
            "range": "± 132388.4872731571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3550620.476744186,
            "unit": "ns",
            "range": "± 130950.07392777571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3985341.4226804124,
            "unit": "ns",
            "range": "± 226972.3251916701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17946653.680851065,
            "unit": "ns",
            "range": "± 2576137.7652637954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4320181.027901785,
            "unit": "ns",
            "range": "± 51105.84072498654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1359945.6092447916,
            "unit": "ns",
            "range": "± 21264.157418358867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 885373.6545061384,
            "unit": "ns",
            "range": "± 8169.528090096347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951186.25,
            "unit": "ns",
            "range": "± 19494.271172603458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630005.7071814904,
            "unit": "ns",
            "range": "± 6166.91413250222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559111.6176757812,
            "unit": "ns",
            "range": "± 6482.831201778627"
          }
        ]
      }
    ]
  }
}