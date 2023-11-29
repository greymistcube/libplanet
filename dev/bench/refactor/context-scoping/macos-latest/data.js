window.BENCHMARK_DATA = {
  "lastUpdate": 1701236576638,
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
          "id": "9193e1dab4f058ea576f2fd5b09de97760f14914",
          "message": "Update docs",
          "timestamp": "2023-11-29T14:23:45+09:00",
          "tree_id": "8f30fcc334c316b7e5dd723ecf383ac89fbf6790",
          "url": "https://github.com/greymistcube/libplanet/commit/9193e1dab4f058ea576f2fd5b09de97760f14914"
        },
        "date": 1701236561754,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8160484.214285715,
            "unit": "ns",
            "range": "± 91059.3222959023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21182546.29411765,
            "unit": "ns",
            "range": "± 410411.6938232214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50970184.56666667,
            "unit": "ns",
            "range": "± 764816.3114442641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101627560.26666667,
            "unit": "ns",
            "range": "± 1118304.4641323544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232947284.13043478,
            "unit": "ns",
            "range": "± 5767152.646167512"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66458.73195876289,
            "unit": "ns",
            "range": "± 8853.859646263816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320942.1595744681,
            "unit": "ns",
            "range": "± 39484.67138433725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318022.48924731184,
            "unit": "ns",
            "range": "± 30941.315846887308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318488.4032258064,
            "unit": "ns",
            "range": "± 30629.566331819253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4430686.907216495,
            "unit": "ns",
            "range": "± 308667.48631837766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3766964.4827586208,
            "unit": "ns",
            "range": "± 163465.8780140199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20142.659574468085,
            "unit": "ns",
            "range": "± 2678.4207162807643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97098.43157894736,
            "unit": "ns",
            "range": "± 12729.629139733895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104736.98351648351,
            "unit": "ns",
            "range": "± 13950.091482266851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114439.83673469388,
            "unit": "ns",
            "range": "± 24958.671252587126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6170.829896907217,
            "unit": "ns",
            "range": "± 1157.3551000165698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19183.920454545456,
            "unit": "ns",
            "range": "± 2504.1838564097566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1392211.6836734693,
            "unit": "ns",
            "range": "± 144706.68126572506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2713640.125,
            "unit": "ns",
            "range": "± 109360.35921934461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2165060.27,
            "unit": "ns",
            "range": "± 256342.82039963885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8524181.952380951,
            "unit": "ns",
            "range": "± 310959.74258006626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3468738.8571428573,
            "unit": "ns",
            "range": "± 347820.40003252926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3713882.8210526314,
            "unit": "ns",
            "range": "± 400271.78195706557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4611912.344444444,
            "unit": "ns",
            "range": "± 357739.055366381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4479038.674157304,
            "unit": "ns",
            "range": "± 459409.44090288284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18687459.652173914,
            "unit": "ns",
            "range": "± 2936448.03957679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6011202.235839844,
            "unit": "ns",
            "range": "± 115193.5352525462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1874120.763950893,
            "unit": "ns",
            "range": "± 29494.31858696441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143704.2189797794,
            "unit": "ns",
            "range": "± 21850.208799234606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2908136.3057421874,
            "unit": "ns",
            "range": "± 170823.49450625494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875926.2559244792,
            "unit": "ns",
            "range": "± 12130.016793513967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749420.2756476151,
            "unit": "ns",
            "range": "± 14148.721553788566"
          }
        ]
      }
    ]
  }
}