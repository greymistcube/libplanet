window.BENCHMARK_DATA = {
  "lastUpdate": 1708622517905,
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
        "date": 1708622511749,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5886124.733333333,
            "unit": "ns",
            "range": "± 91837.5597660399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14775684.233333332,
            "unit": "ns",
            "range": "± 126818.84455815968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37251981.53333333,
            "unit": "ns",
            "range": "± 169549.8751783113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76804338,
            "unit": "ns",
            "range": "± 329498.73133034626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153985272,
            "unit": "ns",
            "range": "± 785751.1816493722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217140.27272727274,
            "unit": "ns",
            "range": "± 10803.77745176532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200031.3125,
            "unit": "ns",
            "range": "± 10436.407872484404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170206.88461538462,
            "unit": "ns",
            "range": "± 5620.584370327307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3294010.6666666665,
            "unit": "ns",
            "range": "± 69098.68309037105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2965397.466666667,
            "unit": "ns",
            "range": "± 49871.19856313672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16446.01030927835,
            "unit": "ns",
            "range": "± 2997.1137522027107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75045.76041666667,
            "unit": "ns",
            "range": "± 9726.507242143465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66130.77083333333,
            "unit": "ns",
            "range": "± 11275.807214870687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71388.03157894737,
            "unit": "ns",
            "range": "± 13869.157983041603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5448.32,
            "unit": "ns",
            "range": "± 2159.2431445234965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14517.021276595744,
            "unit": "ns",
            "range": "± 2232.397428575909"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42041.65957446808,
            "unit": "ns",
            "range": "± 5796.570242051447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1061279.3111111112,
            "unit": "ns",
            "range": "± 69459.80638941439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1953763.7121212122,
            "unit": "ns",
            "range": "± 89680.96627040087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2276441.1041666665,
            "unit": "ns",
            "range": "± 335293.9008725732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10923914.443181818,
            "unit": "ns",
            "range": "± 872599.7847551095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3776281.360877404,
            "unit": "ns",
            "range": "± 13176.803081104723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202150.5817057292,
            "unit": "ns",
            "range": "± 2771.6833801160506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773968.4875651042,
            "unit": "ns",
            "range": "± 2805.227778812488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951328.6508413462,
            "unit": "ns",
            "range": "± 5544.89743058978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627906.0295758928,
            "unit": "ns",
            "range": "± 1158.5981318297268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568726.5209635417,
            "unit": "ns",
            "range": "± 1574.366601542906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2535896.0857142857,
            "unit": "ns",
            "range": "± 80890.20580696056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2746128.933333333,
            "unit": "ns",
            "range": "± 49331.96495676245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3269965.25,
            "unit": "ns",
            "range": "± 63957.187183823735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3760159.1739130435,
            "unit": "ns",
            "range": "± 307522.2126528302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11970447.164705882,
            "unit": "ns",
            "range": "± 720011.7631526659"
          }
        ]
      }
    ]
  }
}