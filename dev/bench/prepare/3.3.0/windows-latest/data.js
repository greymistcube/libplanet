window.BENCHMARK_DATA = {
  "lastUpdate": 1691723513961,
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
          "id": "a36f825e0727644c8d0045bf2a8f721e639ef1e6",
          "message": "Prepare 3.3.0",
          "timestamp": "2023-08-11T11:55:43+09:00",
          "tree_id": "56dcba49cb260e6b5820b1b6ad2215d6b5540712",
          "url": "https://github.com/greymistcube/libplanet/commit/a36f825e0727644c8d0045bf2a8f721e639ef1e6"
        },
        "date": 1691723489111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1386716.1616161617,
            "unit": "ns",
            "range": "± 120776.80182297368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2555055.172413793,
            "unit": "ns",
            "range": "± 111376.6742602238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1732720.202020202,
            "unit": "ns",
            "range": "± 115483.91086790629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4629850,
            "unit": "ns",
            "range": "± 257951.46797694458"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47024.46808510638,
            "unit": "ns",
            "range": "± 4150.02749492674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7229261.538461538,
            "unit": "ns",
            "range": "± 35213.24415759735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20126680,
            "unit": "ns",
            "range": "± 368539.02138812153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49853253.333333336,
            "unit": "ns",
            "range": "± 858185.8547180181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100220966.66666667,
            "unit": "ns",
            "range": "± 2559086.063535127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200399237.5,
            "unit": "ns",
            "range": "± 3831606.245057896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4556270.885416667,
            "unit": "ns",
            "range": "± 27382.544478300766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1424726.381138393,
            "unit": "ns",
            "range": "± 5482.062720455085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062506.5755208333,
            "unit": "ns",
            "range": "± 4540.266668307435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620934.1796875,
            "unit": "ns",
            "range": "± 14364.837703246096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854265.0599888393,
            "unit": "ns",
            "range": "± 1942.5688807905265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785147.75390625,
            "unit": "ns",
            "range": "± 4119.677857132776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3174650.9803921566,
            "unit": "ns",
            "range": "± 128336.25111019726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3440033.3333333335,
            "unit": "ns",
            "range": "± 72464.14935108581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4050984.210526316,
            "unit": "ns",
            "range": "± 87929.0323888652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3637986.274509804,
            "unit": "ns",
            "range": "± 146372.78984785095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5826713.636363637,
            "unit": "ns",
            "range": "± 123267.58850818564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262425,
            "unit": "ns",
            "range": "± 10282.054186682364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253975,
            "unit": "ns",
            "range": "± 11535.46607692729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230585.56701030929,
            "unit": "ns",
            "range": "± 14949.198624638726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4006494.736842105,
            "unit": "ns",
            "range": "± 88008.35486654541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3763506.25,
            "unit": "ns",
            "range": "± 73076.98651650417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20349.45054945055,
            "unit": "ns",
            "range": "± 1909.4137335477626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87287.5,
            "unit": "ns",
            "range": "± 5965.7840178277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74408.0808080808,
            "unit": "ns",
            "range": "± 6923.86698559553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85474.22680412371,
            "unit": "ns",
            "range": "± 13383.356255302979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5410.526315789473,
            "unit": "ns",
            "range": "± 701.4382920055057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20541.489361702126,
            "unit": "ns",
            "range": "± 2221.8083100376316"
          }
        ]
      }
    ]
  }
}