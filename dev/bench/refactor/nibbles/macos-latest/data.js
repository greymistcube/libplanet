window.BENCHMARK_DATA = {
  "lastUpdate": 1693480063922,
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
          "id": "b541ef00cfb97a92d9e53daa5e24e8f466f9331b",
          "message": "Refactor Nibbles",
          "timestamp": "2023-08-31T19:51:07+09:00",
          "tree_id": "1f4eeee57e62a9fd70bd85b53ac841c49eb803da",
          "url": "https://github.com/greymistcube/libplanet/commit/b541ef00cfb97a92d9e53daa5e24e8f466f9331b"
        },
        "date": 1693480039969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7710135.75,
            "unit": "ns",
            "range": "± 196762.84149447086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18963276.55882353,
            "unit": "ns",
            "range": "± 380583.69279822515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47524995.307692304,
            "unit": "ns",
            "range": "± 702420.5945917048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91532129.1923077,
            "unit": "ns",
            "range": "± 516697.4302667188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189194841.6,
            "unit": "ns",
            "range": "± 2117918.796295815"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55502.78947368421,
            "unit": "ns",
            "range": "± 5297.70783612208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294421.4125,
            "unit": "ns",
            "range": "± 15384.0026327645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283865.32835820894,
            "unit": "ns",
            "range": "± 13319.647816333334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263763.09433962265,
            "unit": "ns",
            "range": "± 10904.047549955847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3849530.8333333335,
            "unit": "ns",
            "range": "± 79880.87262421387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3380907.8181818184,
            "unit": "ns",
            "range": "± 72807.45099012638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17734.65882352941,
            "unit": "ns",
            "range": "± 1627.990731757732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81318.41208791209,
            "unit": "ns",
            "range": "± 6200.522099250733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79730.0425531915,
            "unit": "ns",
            "range": "± 6799.343227161753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83812.54736842106,
            "unit": "ns",
            "range": "± 9896.067964867943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4636.528089887641,
            "unit": "ns",
            "range": "± 345.4865505173182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17372.465909090908,
            "unit": "ns",
            "range": "± 2447.8027137131035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1391897.9368421054,
            "unit": "ns",
            "range": "± 149938.59789195203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2664268.2602739725,
            "unit": "ns",
            "range": "± 131608.2929623851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1913084.9292929294,
            "unit": "ns",
            "range": "± 195911.76982755357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5374813.508196721,
            "unit": "ns",
            "range": "± 234609.11101174384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3014466.820754717,
            "unit": "ns",
            "range": "± 115656.36516667907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3725982.4795918367,
            "unit": "ns",
            "range": "± 148629.1275721342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4041805.772727273,
            "unit": "ns",
            "range": "± 142850.24509797592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3627555.577777778,
            "unit": "ns",
            "range": "± 194312.19701046357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6671870.156862745,
            "unit": "ns",
            "range": "± 268893.96766847506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5008828.013020833,
            "unit": "ns",
            "range": "± 25370.793106197147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1556791.337890625,
            "unit": "ns",
            "range": "± 13907.10418670963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 943302.6108723958,
            "unit": "ns",
            "range": "± 5197.688616266006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2493754.4830729165,
            "unit": "ns",
            "range": "± 20554.281287427133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 744777.27421875,
            "unit": "ns",
            "range": "± 3543.5150880917836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 674378.695703125,
            "unit": "ns",
            "range": "± 2934.534572022976"
          }
        ]
      }
    ]
  }
}