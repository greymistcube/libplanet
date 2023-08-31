window.BENCHMARK_DATA = {
  "lastUpdate": 1693480484923,
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
      },
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
          "id": "796ec7b10eb0f9fb609b40d4d3294e364552317e",
          "message": "Refactor Nibbles",
          "timestamp": "2023-08-31T19:56:07+09:00",
          "tree_id": "05dd4d4eefd41d688771dc4903ddf6ce41c06b2c",
          "url": "https://github.com/greymistcube/libplanet/commit/796ec7b10eb0f9fb609b40d4d3294e364552317e"
        },
        "date": 1693480460876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9188771.370588236,
            "unit": "ns",
            "range": "± 491059.8307511056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22102650.861111112,
            "unit": "ns",
            "range": "± 730525.7267729925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55071364.14,
            "unit": "ns",
            "range": "± 1418346.946495223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110088561.1764706,
            "unit": "ns",
            "range": "± 2110112.08896116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229028847.16666666,
            "unit": "ns",
            "range": "± 2710895.963693917"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77210.06896551725,
            "unit": "ns",
            "range": "± 4834.089478713826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340443.07303370786,
            "unit": "ns",
            "range": "± 18787.905295868863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320889.43902439025,
            "unit": "ns",
            "range": "± 14809.678852435844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306572.1666666667,
            "unit": "ns",
            "range": "± 5280.28376762714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4052454.6923076925,
            "unit": "ns",
            "range": "± 18763.65998583705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3818560.1333333333,
            "unit": "ns",
            "range": "± 50485.24196785018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24674.65625,
            "unit": "ns",
            "range": "± 3685.8998439376337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108705.87894736842,
            "unit": "ns",
            "range": "± 9714.42148076431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112381.05555555556,
            "unit": "ns",
            "range": "± 4741.7889453787075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108736.5,
            "unit": "ns",
            "range": "± 12057.25544796576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7406.684210526316,
            "unit": "ns",
            "range": "± 614.8920725771742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25080.984210526316,
            "unit": "ns",
            "range": "± 2429.4489562719805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1532896.8723404256,
            "unit": "ns",
            "range": "± 172791.65838867723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2809084.314814815,
            "unit": "ns",
            "range": "± 77490.28003514973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1965398.994623656,
            "unit": "ns",
            "range": "± 164605.6482268682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5619446.329545454,
            "unit": "ns",
            "range": "± 308140.7112866935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3331375.6263736263,
            "unit": "ns",
            "range": "± 208881.06483210056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3653850.6923076925,
            "unit": "ns",
            "range": "± 186659.03890840456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4471509.780487805,
            "unit": "ns",
            "range": "± 235847.0499563995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4017750.9583333335,
            "unit": "ns",
            "range": "± 290578.13265270856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7636166.186813187,
            "unit": "ns",
            "range": "± 876369.5187220959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5287033.460637019,
            "unit": "ns",
            "range": "± 72106.20774406494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1638800.0958426339,
            "unit": "ns",
            "range": "± 20574.531218188364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1018095.08046875,
            "unit": "ns",
            "range": "± 12908.173232962039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2522551.893828125,
            "unit": "ns",
            "range": "± 127122.08543667947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835621.7376708984,
            "unit": "ns",
            "range": "± 15990.849735925993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 708401.5625697544,
            "unit": "ns",
            "range": "± 4807.658493995684"
          }
        ]
      }
    ]
  }
}