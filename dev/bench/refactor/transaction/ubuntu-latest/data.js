window.BENCHMARK_DATA = {
  "lastUpdate": 1682575019096,
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
          "id": "02d952425f3d96a08ff88962bd1b44837d803de6",
          "message": "Changelog",
          "timestamp": "2023-04-27T14:37:14+09:00",
          "tree_id": "410ed249ccab831d6b47f5153120ca037b791f0b",
          "url": "https://github.com/greymistcube/libplanet/commit/02d952425f3d96a08ff88962bd1b44837d803de6"
        },
        "date": 1682574831025,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339321.1967213115,
            "unit": "ns",
            "range": "± 15241.318226911642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329657.2549019608,
            "unit": "ns",
            "range": "± 13475.200375271808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278853.1692307692,
            "unit": "ns",
            "range": "± 12934.482166829812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5028812.612903226,
            "unit": "ns",
            "range": "± 152788.8000680847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4677225.333333333,
            "unit": "ns",
            "range": "± 95747.20504844116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24364.186813186814,
            "unit": "ns",
            "range": "± 2299.9577914585398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109321.47422680413,
            "unit": "ns",
            "range": "± 7866.156620682024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98335.67368421053,
            "unit": "ns",
            "range": "± 6142.595422135892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117923.73469387754,
            "unit": "ns",
            "range": "± 15183.67492057952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8378.410526315789,
            "unit": "ns",
            "range": "± 833.0996274454335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23595.270833333332,
            "unit": "ns",
            "range": "± 1993.642260466832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4141489,
            "unit": "ns",
            "range": "± 83072.8482387597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4242673.080645162,
            "unit": "ns",
            "range": "± 191342.67152760577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4986092.387096774,
            "unit": "ns",
            "range": "± 149115.4033770885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5370391.9,
            "unit": "ns",
            "range": "± 145744.34783110386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8116722.555555556,
            "unit": "ns",
            "range": "± 222824.23907340295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7009291.657291667,
            "unit": "ns",
            "range": "± 48726.98956214612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2203131.493359375,
            "unit": "ns",
            "range": "± 3620.905057257762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1605372.511328125,
            "unit": "ns",
            "range": "± 4712.724566988185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3168719.829947917,
            "unit": "ns",
            "range": "± 6256.6069487822715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 991760.9596354166,
            "unit": "ns",
            "range": "± 3011.360255346335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910244.2831380208,
            "unit": "ns",
            "range": "± 1696.530534287363"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57540.87777777778,
            "unit": "ns",
            "range": "± 4250.204816816936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10240167.304347826,
            "unit": "ns",
            "range": "± 231841.992021101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27901167.766666666,
            "unit": "ns",
            "range": "± 353025.7734386029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64046443.44444445,
            "unit": "ns",
            "range": "± 1129435.599355673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135641452.26666668,
            "unit": "ns",
            "range": "± 2067125.2025654742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256542394.06666666,
            "unit": "ns",
            "range": "± 4400259.78661719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1737938.5625,
            "unit": "ns",
            "range": "± 123041.65458325698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3239253.344262295,
            "unit": "ns",
            "range": "± 145956.20003707564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2767397.0140845072,
            "unit": "ns",
            "range": "± 135268.41010033063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6287455.733333333,
            "unit": "ns",
            "range": "± 114928.08398700385"
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
          "id": "b2b216263f442f9fca4808241970d8cb5b817e86",
          "message": "Changelog",
          "timestamp": "2023-04-27T14:38:58+09:00",
          "tree_id": "d0ab92b60b7e688c2dc495c16f76f9c9f033b744",
          "url": "https://github.com/greymistcube/libplanet/commit/b2b216263f442f9fca4808241970d8cb5b817e86"
        },
        "date": 1682575009926,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329976.56842105265,
            "unit": "ns",
            "range": "± 37594.73531206329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295291.93548387097,
            "unit": "ns",
            "range": "± 25945.21640914817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269269.59722222225,
            "unit": "ns",
            "range": "± 13206.595469912283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4674121.946236559,
            "unit": "ns",
            "range": "± 270392.938463169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4134031.227272727,
            "unit": "ns",
            "range": "± 226606.72062741424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25512.23232323232,
            "unit": "ns",
            "range": "± 6397.956463970579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92717.84536082474,
            "unit": "ns",
            "range": "± 12182.36393516276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83290.9693877551,
            "unit": "ns",
            "range": "± 9612.76044807333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98421.94680851063,
            "unit": "ns",
            "range": "± 12438.476718761092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11575.848484848484,
            "unit": "ns",
            "range": "± 6079.0161518759005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21718.2,
            "unit": "ns",
            "range": "± 7418.77123425858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3393714.3711340204,
            "unit": "ns",
            "range": "± 220692.55137140254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3620261.948979592,
            "unit": "ns",
            "range": "± 306104.3860793199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4539481.6736842105,
            "unit": "ns",
            "range": "± 284733.5461671193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4479395.105263158,
            "unit": "ns",
            "range": "± 319180.9973126524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7711164.12371134,
            "unit": "ns",
            "range": "± 563901.4683771458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6496149.656939338,
            "unit": "ns",
            "range": "± 205122.33386993074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2057872.4308997844,
            "unit": "ns",
            "range": "± 89773.04569927354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1479752.04703125,
            "unit": "ns",
            "range": "± 59362.075937276895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2878570.0950195314,
            "unit": "ns",
            "range": "± 102091.61843564014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999438.4851140203,
            "unit": "ns",
            "range": "± 33737.552800549194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 829713.673828125,
            "unit": "ns",
            "range": "± 4232.0836879487715"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55957.58762886598,
            "unit": "ns",
            "range": "± 9882.956210222663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8077814.30952381,
            "unit": "ns",
            "range": "± 256402.94745428208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21956686.4,
            "unit": "ns",
            "range": "± 1629182.7518864372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54021707.084337346,
            "unit": "ns",
            "range": "± 2882439.381635886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105548474.8095238,
            "unit": "ns",
            "range": "± 2407139.653583494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219796226.70149255,
            "unit": "ns",
            "range": "± 10330195.607304994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1569908.7040816327,
            "unit": "ns",
            "range": "± 175963.39745199762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2916516.9583333335,
            "unit": "ns",
            "range": "± 224534.46532006323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2481227.612244898,
            "unit": "ns",
            "range": "± 293128.90761861607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6449953.340206185,
            "unit": "ns",
            "range": "± 501054.9637123757"
          }
        ]
      }
    ]
  }
}