window.BENCHMARK_DATA = {
  "lastUpdate": 1682563748088,
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
          "id": "be2728468029bd04f0280085ec779ebef5413c1a",
          "message": "Cleanup; renaming",
          "timestamp": "2023-04-26T18:22:11+09:00",
          "tree_id": "f33b659d8a09bd7e55f381b8a52753879e68356d",
          "url": "https://github.com/greymistcube/libplanet/commit/be2728468029bd04f0280085ec779ebef5413c1a"
        },
        "date": 1682502051616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9073981.315789474,
            "unit": "ns",
            "range": "± 393997.67423004436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22200116.730769232,
            "unit": "ns",
            "range": "± 1095550.420762374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59477547.01282051,
            "unit": "ns",
            "range": "± 3056208.352038921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118491147.5,
            "unit": "ns",
            "range": "± 4522942.930594115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237393012.58064517,
            "unit": "ns",
            "range": "± 7127575.297606697"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67105.55670103093,
            "unit": "ns",
            "range": "± 18589.089504424963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640275.46875,
            "unit": "ns",
            "range": "± 178753.1601974282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3390049.2842105264,
            "unit": "ns",
            "range": "± 295283.57629630074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2660653.2083333335,
            "unit": "ns",
            "range": "± 246246.50504894336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7291117.989690722,
            "unit": "ns",
            "range": "± 538689.0728827734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6356530.422309028,
            "unit": "ns",
            "range": "± 209490.7870702922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2035301.4102783203,
            "unit": "ns",
            "range": "± 62020.3681949871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1465845.7472098214,
            "unit": "ns",
            "range": "± 21742.593775063313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2812311.97453125,
            "unit": "ns",
            "range": "± 73684.24984217033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 935754.2483552631,
            "unit": "ns",
            "range": "± 20728.935896354884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 845283.9391961349,
            "unit": "ns",
            "range": "± 18754.23723127973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364280.0202020202,
            "unit": "ns",
            "range": "± 52687.642880137406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337430.5612244898,
            "unit": "ns",
            "range": "± 47586.05516326572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298597.8762886598,
            "unit": "ns",
            "range": "± 41565.246874456745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4892322.275510204,
            "unit": "ns",
            "range": "± 326359.23403392767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4314276.479166667,
            "unit": "ns",
            "range": "± 281995.21298337035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22991.12,
            "unit": "ns",
            "range": "± 9134.58580582833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105155.93478260869,
            "unit": "ns",
            "range": "± 18458.986972790088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88063.63440860216,
            "unit": "ns",
            "range": "± 13769.219071652213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110871.83870967742,
            "unit": "ns",
            "range": "± 22507.323623699987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5294.597826086957,
            "unit": "ns",
            "range": "± 466.7883973572072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31059.94845360825,
            "unit": "ns",
            "range": "± 10633.886683000652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3601918.3191489363,
            "unit": "ns",
            "range": "± 240557.97946062114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3745632.053763441,
            "unit": "ns",
            "range": "± 236604.7920712827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4855493.4387755105,
            "unit": "ns",
            "range": "± 305970.38575932913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4793192.642857143,
            "unit": "ns",
            "range": "± 374443.7083020006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8022598.357894737,
            "unit": "ns",
            "range": "± 583661.4359230017"
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
          "id": "7c5826ddffe796f0bf864a730a00e2033503021f",
          "message": "Simplified JSON serialization",
          "timestamp": "2023-04-27T11:25:31+09:00",
          "tree_id": "5a71e80f98801528503d3c2898074ec13f4284ad",
          "url": "https://github.com/greymistcube/libplanet/commit/7c5826ddffe796f0bf864a730a00e2033503021f"
        },
        "date": 1682563740908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292542.6666666667,
            "unit": "ns",
            "range": "± 8145.284473475813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278442.93617021275,
            "unit": "ns",
            "range": "± 10749.849045258132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243771.45762711865,
            "unit": "ns",
            "range": "± 10457.838232343396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4271034.133333334,
            "unit": "ns",
            "range": "± 33960.39117616426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3894304.785714286,
            "unit": "ns",
            "range": "± 25514.190926675634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20065.541666666668,
            "unit": "ns",
            "range": "± 1890.704184698148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91598.41666666667,
            "unit": "ns",
            "range": "± 6771.165499717267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76452.625,
            "unit": "ns",
            "range": "± 5370.539310858238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93389.09278350516,
            "unit": "ns",
            "range": "± 11066.147382786456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5665.422680412371,
            "unit": "ns",
            "range": "± 659.789515600928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19822.556701030928,
            "unit": "ns",
            "range": "± 1777.9648300390168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3315364.7,
            "unit": "ns",
            "range": "± 59064.679589056395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3505839.272727273,
            "unit": "ns",
            "range": "± 109485.2737738256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4302087.2,
            "unit": "ns",
            "range": "± 72746.74189778438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4340439.342105263,
            "unit": "ns",
            "range": "± 136872.55409563886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6772264.333333333,
            "unit": "ns",
            "range": "± 126823.12836573062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6095257.6203125,
            "unit": "ns",
            "range": "± 28321.08678658945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1986934.1963541666,
            "unit": "ns",
            "range": "± 3230.0503115041133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362903.9658854166,
            "unit": "ns",
            "range": "± 1133.9551829208376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565707.8303571427,
            "unit": "ns",
            "range": "± 1758.6103061746524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816214.9491536458,
            "unit": "ns",
            "range": "± 445.570153228389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738618.703125,
            "unit": "ns",
            "range": "± 276.1279949843157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46722.52173913043,
            "unit": "ns",
            "range": "± 2839.4090140331605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7618473.2,
            "unit": "ns",
            "range": "± 69329.01159502317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19461790.8,
            "unit": "ns",
            "range": "± 128442.24982747248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50121626.86666667,
            "unit": "ns",
            "range": "± 212703.8532832736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100336436.64285715,
            "unit": "ns",
            "range": "± 473558.77682592114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200119677.53333333,
            "unit": "ns",
            "range": "± 853880.5570196125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1445966.17,
            "unit": "ns",
            "range": "± 122663.09798910157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2683085.121212121,
            "unit": "ns",
            "range": "± 84498.24931128662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2279527.595744681,
            "unit": "ns",
            "range": "± 129162.69957595653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5403767.038461538,
            "unit": "ns",
            "range": "± 137267.4464270333"
          }
        ]
      }
    ]
  }
}